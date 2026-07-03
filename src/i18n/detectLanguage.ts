export const SUPPORTED_LANGUAGES = ['en', 'fr', 'es', 'pt'] as const
export type Lang = (typeof SUPPORTED_LANGUAGES)[number]
export const DEFAULT_LANGUAGE: Lang = 'en'
const STORAGE_KEY = 'likwiid-language'
// Marks that the one-time IP geolocation lookup has already run for this visitor, so we never
// disclose their IP to the geo service on subsequent page loads.
const DETECTED_KEY = 'likwiid-lang-detected'

// Country (ISO 3166-1 alpha-2) → site language. Anything unmapped falls back to English.
const COUNTRY_TO_LANG: Record<string, Lang> = {
  // French
  FR: 'fr', BE: 'fr', CH: 'fr', LU: 'fr', MC: 'fr',
  // Spanish
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es', EC: 'es',
  GT: 'es', CU: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es', SV: 'es', NI: 'es',
  CR: 'es', PA: 'es', UY: 'es', PR: 'es',
  // Portuguese
  BR: 'pt', PT: 'pt', AO: 'pt', MZ: 'pt',
}

export function isSupported(value: unknown): value is Lang {
  return typeof value === 'string' && (SUPPORTED_LANGUAGES as readonly string[]).includes(value)
}

export function getSavedLanguage(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return isSupported(v) ? v : null
  } catch {
    return null
  }
}

export function saveLanguage(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* ignore (private mode / disabled storage) */
  }
}

function getBrowserLanguage(): Lang | null {
  if (typeof navigator === 'undefined') return null
  const list = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const tag of list) {
    const base = tag?.slice(0, 2).toLowerCase()
    if (isSupported(base)) return base
  }
  return null
}

// Synchronous best guess used as the initial language (no network) → no flash for
// returning visitors or those whose browser language we support.
export function getInitialLanguage(): Lang {
  return getSavedLanguage() ?? getBrowserLanguage() ?? DEFAULT_LANGUAGE
}

function hasDetected(): boolean {
  try {
    return localStorage.getItem(DETECTED_KEY) === '1'
  } catch {
    return false
  }
}

function markDetected(): void {
  try {
    localStorage.setItem(DETECTED_KEY, '1')
  } catch {
    /* ignore (private mode / disabled storage) */
  }
}

// First-visit only: refine by IP country so e.g. a visitor in France with an English
// browser still gets French. Runs the geolocation lookup at most once per visitor (guarded by
// a persisted marker) and never overrides a manual/saved choice. Fails silently.
// `apply` loads the target language bundle (if needed) and switches to it.
export async function refineLanguageByIP(apply: (lang: Lang) => Promise<void>): Promise<void> {
  if (getSavedLanguage() || hasDetected()) return
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3500)
    const res = await fetch('https://ipwho.is/?fields=country_code,success', { signal: controller.signal })
    clearTimeout(timeout)
    if (!res.ok) return
    const data = await res.json()
    const cc = String(data?.country_code ?? '').toUpperCase()
    const lang = COUNTRY_TO_LANG[cc]
    // Record that detection ran (regardless of outcome) so the next load skips the lookup.
    markDetected()
    if (lang && lang !== DEFAULT_LANGUAGE && !getSavedLanguage()) {
      // Persist the detected language so it stays consistent on future visits without re-querying.
      await apply(lang)
      saveLanguage(lang)
    }
  } catch {
    /* geo service unavailable / blocked — keep the synchronous guess, retry next load */
  }
}
