import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import es from '../locales/es.json'
import pt from '../locales/pt.json'
import { getInitialLanguage, refineLanguageByIP, DEFAULT_LANGUAGE } from './detectLanguage'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    es: { translation: es },
    pt: { translation: pt },
  },
  lng: getInitialLanguage(),
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
  // First-visit IP refinement (async, non-blocking, respects saved choice)
  void refineLanguageByIP(i18n)
}

export default i18n
