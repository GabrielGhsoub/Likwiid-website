import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import { getInitialLanguage, getRouteLanguage, DEFAULT_LANGUAGE, type Lang } from './detectLanguage'

// English is bundled statically: it is the default language, the i18next fallback, and the
// language unprefixed pages are prerendered in. Other languages are code-split via dynamic
// import() and fetched on demand, so first-paint visitors only download English.
const lazyLoaders: Record<Exclude<Lang, 'en'>, () => Promise<{ default: Record<string, unknown> }>> = {
  fr: () => import('../locales/fr.json'),
  es: () => import('../locales/es.json'),
  pt: () => import('../locales/pt.json'),
  it: () => import('../locales/it.json'),
}

const loaded = new Set<Lang>(['en'])

/** Fetches a language bundle once. Resolves false when it could not be loaded. */
export async function loadLanguage(lang: Lang): Promise<boolean> {
  if (loaded.has(lang)) return true
  const loader = lazyLoaders[lang as Exclude<Lang, 'en'>]
  if (!loader) return false
  try {
    const mod = await loader()
    i18n.addResourceBundle(lang, 'translation', mod.default, true, true)
    loaded.add(lang)
    return true
  } catch {
    /* chunk failed to load - stay on the current language */
    return false
  }
}

// Load the bundle (if needed) then switch. Used by the language switcher and locale routes.
export async function setLanguage(lang: Lang): Promise<void> {
  await loadLanguage(lang)
  await i18n.changeLanguage(lang)
}

i18n.use(initReactI18next).init({
  resources: { en: { translation: en } },
  lng: 'en', // start in English; src/main.tsx picks the page language before the first render
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false }, // React already escapes
  react: { useSuspense: false },
  initAsync: false, // resources are inline: be ready synchronously, before hydration
})

// Keep <html lang> in sync for accessibility / SEO. The prerendered HTML already carries the
// page's language, so only later switches touch it.
if (typeof document !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng
  })
}

export interface StartupLanguages {
  /** Language the prerendered HTML for this URL was rendered in. */
  html: Lang
  /** Language the visitor should read in: the URL prefix, else their saved or browser choice. */
  preferred: Lang
}

// Locale-prefixed routes (/pt/work etc.) always win: the visitor stays in the language the
// link they clicked points to, and no detection runs against it. Unprefixed routes are
// prerendered in English and switch to the visitor's saved or browser language, if any.
export function startupLanguages(pathname: string): StartupLanguages {
  const routeLang = getRouteLanguage(pathname)
  if (routeLang) return { html: routeLang, preferred: routeLang }
  return { html: DEFAULT_LANGUAGE, preferred: getInitialLanguage() }
}

export default i18n
