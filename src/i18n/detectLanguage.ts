export const SUPPORTED_LANGUAGES = ['en', 'fr', 'es', 'pt', 'it'] as const
export type Lang = (typeof SUPPORTED_LANGUAGES)[number]
export const DEFAULT_LANGUAGE: Lang = 'en'
const STORAGE_KEY = 'likwiid-language'

// A pathname like /pt/work carries its own locale: the route always wins over any
// saved or browser language, and no automatic redirect ever happens.
export function getRouteLanguage(pathname: string): Lang | null {
  const first = pathname.split('/')[1]
  return first !== 'en' && isSupported(first) ? first : null
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

// Initial language for unprefixed routes: the visitor's saved choice, else the first
// supported language in their browser settings, else English. No network lookup, so the
// visitor's IP is never sent anywhere to pick a language.
export function getInitialLanguage(): Lang {
  return getSavedLanguage() ?? getBrowserLanguage() ?? DEFAULT_LANGUAGE
}
