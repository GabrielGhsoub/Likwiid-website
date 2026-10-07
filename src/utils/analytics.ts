// Umami event tracking and visit attribution.
//
// The tracker script in index.html carries data-do-not-track, so window.umami is undefined
// when the visitor opted out or a blocker stopped the script. Every helper here must stay
// safe in that case: analytics never throws and never changes what the page does.
//
// Two ways to send an event:
//   1. Declaratively on a link or button with `{...umamiAttrs('cta-whatsapp', { location: 'footer' })}`.
//      Umami picks these clicks up on its own, including on anchors that leave the site.
//   2. Imperatively with `track('contact-submit', data)` from event handlers.

export type EventData = Record<string, string | number | boolean>

declare global {
  interface Window {
    umami?: { track: (event: string, data?: EventData) => void }
  }
}

export function track(event: string, data?: EventData): void {
  try {
    window.umami?.track(event, data)
  } catch {
    // Analytics must never break the page.
  }
}

// Builds the data-umami-event attributes Umami reads from a clicked element.
export function umamiAttrs(event: string, data?: Record<string, string>): Record<string, string> {
  const attrs: Record<string, string> = { 'data-umami-event': event }
  if (data) {
    for (const [key, value] of Object.entries(data)) {
      attrs[`data-umami-event-${key}`] = value
    }
  }
  return attrs
}

// ---------- Attribution ----------
//
// Outreach links carry utm_* parameters or a short ?ref= tag. We keep the first set seen
// in this browser session, plus the landing page and the external referrer, so a contact
// form sent three pages later still says which campaign brought the visitor. Nothing here
// identifies a person and it lives in sessionStorage, so it disappears when the tab closes.

export interface Attribution {
  source?: string
  medium?: string
  campaign?: string
  content?: string
  term?: string
  ref?: string
  landingPage?: string
  referrer?: string
}

const STORAGE_KEY = 'likwiid.attribution'
const MAX_LENGTH = 120

const PARAM_MAP: Record<string, keyof Attribution> = {
  utm_source: 'source',
  utm_medium: 'medium',
  utm_campaign: 'campaign',
  utm_content: 'content',
  utm_term: 'term',
  ref: 'ref',
}

const clean = (value: string | null | undefined): string | undefined => {
  if (!value) return undefined
  const printable = Array.from(value).filter((ch) => {
    const code = ch.charCodeAt(0)
    return code >= 32 && code !== 127
  })
  const trimmed = printable.join('').trim().slice(0, MAX_LENGTH)
  return trimmed || undefined
}

const readStored = (): Attribution | null => {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Attribution) : null
  } catch {
    return null
  }
}

const writeStored = (value: Attribution): void => {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
    // Private mode or blocked storage: attribution is best effort.
  }
}

const externalReferrer = (): string | undefined => {
  try {
    if (!document.referrer) return undefined
    const ref = new URL(document.referrer)
    if (ref.hostname === window.location.hostname) return undefined
    return clean(ref.hostname)
  } catch {
    return undefined
  }
}

// Reads campaign parameters from the current URL. Call once on first render; it is a
// no-op when the session already holds an attribution and the URL carries no new tags.
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const fromUrl: Attribution = {}
  for (const [param, key] of Object.entries(PARAM_MAP)) {
    const value = clean(params.get(param))
    if (value) fromUrl[key] = value
  }

  const stored = readStored()
  if (stored && Object.keys(fromUrl).length === 0) return stored

  // A tagged URL is the real entry point, so it replaces whatever landing page a tagless
  // earlier page in the same session recorded.
  const next: Attribution = {
    ...stored,
    ...fromUrl,
    landingPage: clean(window.location.pathname + window.location.search),
    referrer: externalReferrer() ?? stored?.referrer,
  }
  writeStored(next)
  return next
}

export function getAttribution(): Attribution {
  return readStored() ?? {}
}

// Flattens the attribution into event data, dropping empty values.
export function attributionEventData(): EventData {
  const data: EventData = {}
  for (const [key, value] of Object.entries(getAttribution())) {
    if (value) data[key] = value
  }
  return data
}
