import { useSyncExternalStore } from 'react'

const TIME_ZONE = 'Asia/Beirut'
const TICK_MS = 30_000

const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: TIME_ZONE,
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

export interface BeirutTime {
  /** Wall clock time in Beirut, e.g. "22:41" */
  label: string
  /** ISO 8601 instant for the <time> element's dateTime attribute */
  iso: string
}

let cached: BeirutTime | null = null

// Same object for as long as the minute label stays the same, as useSyncExternalStore needs.
function read(): BeirutTime {
  const now = new Date()
  // Some engines render midnight as "24:00" with hour12 false
  const label = formatter.format(now).replace(/^24/, '00')
  if (!cached || cached.label !== label) cached = { label, iso: now.toISOString() }
  return cached
}

function subscribe(onChange: () => void): () => void {
  const id = window.setInterval(onChange, TICK_MS)
  return () => window.clearInterval(id)
}

// The prerendered HTML cannot know the time a visitor opens it, so it carries no clock.
const readOnServer = () => null

/**
 * Current time in Beirut, refreshed every 30 seconds. Null in the prerendered HTML and during
 * hydration; the real time renders in the commit right after.
 */
export function useBeirutTime(): BeirutTime | null {
  return useSyncExternalStore(subscribe, read, readOnServer)
}
