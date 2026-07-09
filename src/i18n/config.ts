import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import { getInitialLanguage, getRouteLanguage, refineLanguageByIP, DEFAULT_LANGUAGE, type Lang } from './detectLanguage'

// English is bundled statically: it is the default language, the i18next fallback, and the
// source the static prerender renders. Other languages are code-split via dynamic
// import() and fetched on demand, so first-paint visitors only download English.
const lazyLoaders: Record<Exclude<Lang, 'en'>, () => Promise<{ default: Record<string, unknown> }>> = {
  fr: () => import('../locales/fr.json'),
  es: () => import('../locales/es.json'),
  pt: () => import('../locales/pt.json'),
  it: () => import('../locales/it.json'),
}

const loaded = new Set<Lang>(['en'])

export async function loadLanguage(lang: Lang): Promise<void> {
  if (loaded.has(lang)) return
  const loader = lazyLoaders[lang as Exclude<Lang, 'en'>]
  if (!loader) return
  try {
    const mod = await loader()
    i18n.addResourceBundle(lang, 'translation', mod.default, true, true)
    loaded.add(lang)
  } catch {
    /* chunk failed to load - stay on the current language */
  }
}

// Load the bundle (if needed) then switch. Used by the language switcher and IP refinement.
export async function setLanguage(lang: Lang): Promise<void> {
  await loadLanguage(lang)
  await i18n.changeLanguage(lang)
}

i18n.use(initReactI18next).init({
  resources: { en: { translation: en } },
  lng: 'en', // start in English (synchronous + prerender-safe); refined on the client below
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false }, // React already escapes
  react: { useSuspense: false },
})

// Keep <html lang> in sync for accessibility / SEO
if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng
  })

  // Locale-prefixed routes (/pt/work etc.) always win: the visitor stays in the language
  // the link they clicked points to, and no detection or refinement runs against it.
  const routeLang = getRouteLanguage(window.location.pathname)
  if (routeLang) {
    void setLanguage(routeLang)
  } else {
    // Apply the synchronous best guess (saved choice or browser language), loading its bundle first.
    const initial = getInitialLanguage()
    if (initial !== 'en') void setLanguage(initial)

    // First-visit IP refinement (async, non-blocking, respects saved choice).
    void refineLanguageByIP(setLanguage)
  }
}

export default i18n
