// Server entry for the build-time prerender (scripts/prerender.mjs). Renders one URL of the
// app to static HTML for #root, in the language the URL implies. Never shipped to browsers.
import { StrictMode } from 'react'
import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import { createInstance } from 'i18next'
import { I18nextProvider } from 'react-i18next'
import App from './App'
import { ThemeProvider } from './hooks/useTheme'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getRouteLanguage, type Lang } from './i18n/detectLanguage'
import { DIRECT_MARKET_ROUTES, directMarketLanguages } from './i18n/localeRoutes'
import { DIRECT_MARKET_CONTENT } from './data/directMarkets'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import it from './locales/it.json'
import pt from './locales/pt.json'

const RESOURCES: Record<Lang, { translation: Record<string, unknown> }> = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  it: { translation: it },
  pt: { translation: pt },
}

// Same options as src/i18n/config.ts, with every language bundled and the page's language set.
async function i18nFor(lang: Lang) {
  const instance = createInstance()
  await instance.init({
    resources: RESOURCES,
    lng: lang,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    initAsync: false,
  })
  return instance
}

/**
 * Renders `url` (a pathname in the form the static host serves, e.g. "/pt/direct/") to the
 * HTML that goes inside <div id="root">. Locale-prefixed URLs render in their language,
 * everything else in English, matching what src/main.tsx hydrates with. Waits for lazy routes.
 */
export async function render(url: string): Promise<{ html: string; lang: Lang }> {
  const lang = getRouteLanguage(url) ?? DEFAULT_LANGUAGE
  const i18n = await i18nFor(lang)
  const errors: unknown[] = []
  const { prelude } = await prerender(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <StaticRouter location={url}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </StaticRouter>
      </I18nextProvider>
    </StrictMode>,
    {
      // Never outline a large Suspense boundary into a hidden segment plus an inline script
      // that swaps it in: the static HTML must hold the page itself, in place.
      progressiveChunkSize: Number.POSITIVE_INFINITY,
      // An error inside a Suspense boundary would otherwise ship that boundary's fallback
      // (a spinner) in the static HTML: fail the build instead.
      onError(error) {
        errors.push(error)
      },
    },
  )
  const html = await new Response(prelude).text()
  if (errors.length) throw new AggregateError(errors, `prerender of ${url} failed`)
  return { html, lang }
}

/**
 * Every Direct market page (/pt/direct/alojamento-local/, /direct/padel-clubs/, ...) with the
 * meta scripts/prerender.mjs writes into its head. `path` has no leading or trailing slash.
 * `cluster` is true for a page that exists in every language, false for a one-language page.
 */
export function directMarketPages() {
  return DIRECT_MARKET_ROUTES.map(({ market, lang, path }) => {
    const content = DIRECT_MARKET_CONTENT[market][lang]
    if (!content || content.market !== market || content.lang !== lang) {
      throw new Error(`directMarketPages: no ${lang} copy for ${market}`)
    }
    const languages = directMarketLanguages(market)
    return {
      market,
      lang,
      path: path.slice(1),
      title: content.docTitle,
      description: content.description,
      crumb: content.crumb,
      faq: content.faq,
      cluster: SUPPORTED_LANGUAGES.every((other) => languages.includes(other)),
    }
  })
}
