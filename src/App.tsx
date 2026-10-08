import { Suspense, useEffect } from 'react'
import { Navigate, Routes, Route, useLocation, useNavigationType, useParams } from 'react-router-dom'
import { LazyMotion, MotionConfig } from 'framer-motion'
import { setLanguage } from './i18n/config'
import type { Lang } from './i18n/detectLanguage'
import {
  DIRECT_MARKET_ROUTES,
  LOCALIZED_PAGES,
  LOCALIZED_TOOLS,
  PREFIXED_LANGUAGES,
  isLocalizedCaseStudy,
  localizedPath,
  type DirectMarket,
  type LocalizedPage,
  type LocalizedTool,
} from './i18n/localeRoutes'
import { captureAttribution } from './utils/analytics'

// Lazy-load the animation feature bundle so its weight stays off the critical path; the static
// hero paints first and animation capabilities stream in right after.
const loadFeatures = () => import('./motionFeatures').then((mod) => mod.domMax)
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ErrorBoundary } from './components/layout/ErrorBoundary'
import { HydrationComplete } from './components/layout/HydrationComplete'
import Home from './pages/Home'

import {
  Services,
  Portfolio,
  CaseStudy,
  Contact,
  Privacy,
  BeitToureefPoc,
  Direct,
  Frame,
  Products,
  NotFound,
  TOOL_ROUTES,
  DIRECT_MARKET_PAGES,
} from './routes'

function usePrefetchRoutes() {
  useEffect(() => {
    // Respect Data Saver - don't speculatively fetch route chunks on metered/slow connections.
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (conn?.saveData) return

    const prefetch = () => {
      import('./pages/Services')
      import('./pages/Direct')
      import('./pages/Frame')
      import('./pages/Products')
      import('./pages/Portfolio')
      import('./pages/CaseStudy')
      import('./pages/Contact')
    }

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(prefetch)
      return () => cancelIdleCallback(id)
    } else {
      const timer = setTimeout(prefetch, 2000)
      return () => clearTimeout(timer)
    }
  }, [])
}

function LegacyBeitToureefRedirect() {
  const location = useLocation()

  return <Navigate to={`/beit-toureef-walkthrough${location.search}${location.hash}`} replace />
}

const LOCALIZED_ELEMENTS: Record<LocalizedPage, () => React.JSX.Element> = {
  home: () => <Home />,
  services: () => <Services />,
  contact: () => <Contact />,
  work: () => <Portfolio />,
  direct: () => <Direct />,
  frame: () => <Frame />,
  products: () => <Products />,
}

// Locale-prefixed routes (/pt, /pt/work, /fr/contact, ...): the URL is the source of truth for
// language. This runs on client-side navigation too (the config.ts boot check only covers
// the initial page load).
function useRouteLanguage(lang: Lang) {
  useEffect(() => {
    void setLanguage(lang)
  }, [lang])
}

function LocalePage({ lang, page }: { lang: Lang; page: LocalizedPage }) {
  useRouteLanguage(lang)
  return LOCALIZED_ELEMENTS[page]()
}

// Locale-prefixed case studies (/pt/work/padel-booking, ...). Only the slugs listed in
// LOCALIZED_CASE_STUDIES have a localized URL; any other slug under a language prefix is a 404.
function LocaleCaseStudy({ lang }: { lang: Lang }) {
  useRouteLanguage(lang)
  const { slug } = useParams<{ slug: string }>()
  return isLocalizedCaseStudy(slug) ? <CaseStudy /> : <NotFound />
}

// Locale-prefixed tools (/pt/tools/ota-commission-calculator, ...).
function LocaleTool({ lang, tool }: { lang: Lang; tool: LocalizedTool }) {
  useRouteLanguage(lang)
  const Tool = TOOL_ROUTES[tool]
  return <Tool />
}

// Direct market pages (/direct/padel-clubs, /pt/direct/alojamento-local, ...). A prefixed URL
// sets the language like any localized route; the English URL keeps the visitor's language,
// and the page shows its copy in that language when it exists in it.
function DirectMarketRoute({ market, lang }: { market: DirectMarket; lang: Lang }) {
  const Page = DIRECT_MARKET_PAGES[market]
  return lang === 'en' ? <Page /> : <LocaleDirectMarket lang={lang} Page={Page} />
}

function LocaleDirectMarket({ lang, Page }: { lang: Lang; Page: React.ComponentType }) {
  useRouteLanguage(lang)
  return <Page />
}

// Scrolls the element named by a URL hash into view. Tries right after render, then, because
// a lazy route may not have rendered the target yet, retries every 50ms for ~2s. Timers rather
// than requestAnimationFrame so it also works in background tabs. Returns a cleanup.
function scrollToHash(hash: string): () => void {
  let id: string
  try {
    id = decodeURIComponent(hash.slice(1))
  } catch {
    id = hash.slice(1)
  }
  let timer: ReturnType<typeof setTimeout> | undefined
  let tries = 0
  const attempt = () => {
    const el = id ? document.getElementById(id) : null
    if (el) {
      el.scrollIntoView({ block: 'start' })
    } else if (tries++ < 40) {
      timer = setTimeout(attempt, 50)
    }
  }
  attempt()
  return () => clearTimeout(timer)
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading">
      <div className="w-8 h-8 border-2 border-accent-gold border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const navigationType = useNavigationType()
  usePrefetchRoutes()

  // Remember utm_* and ref tags from outreach links for the rest of the session so the
  // contact form and events can say which campaign brought the visitor.
  useEffect(() => {
    captureAttribution()
  }, [])

  useEffect(() => {
    // Scroll to top on forward navigations to a new page, but leave the browser to restore
    // position on back/forward (POP). Hash URLs (e.g. /#founder, also the /about redirect)
    // scroll their target into view once it has rendered.
    if (location.hash) return scrollToHash(location.hash)
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0)
    }
    return undefined
  }, [location.pathname, location.key, location.hash, navigationType])

  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <Navbar />
        <main id="main-content">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/work" element={<Portfolio />} />
                {PREFIXED_LANGUAGES.flatMap((lang) =>
                  LOCALIZED_PAGES.map((page) => (
                    <Route key={`${lang}/${page}`} path={localizedPath(page, lang)} element={<LocalePage lang={lang} page={page} />} />
                  )),
                )}
                {PREFIXED_LANGUAGES.map((lang) => (
                  <Route key={`${lang}/work/:slug`} path={`/${lang}/work/:slug`} element={<LocaleCaseStudy lang={lang} />} />
                ))}
                {LOCALIZED_TOOLS.map((tool) => {
                  const Tool = TOOL_ROUTES[tool]
                  return <Route key={`tools/${tool}`} path={`/tools/${tool}`} element={<Tool />} />
                })}
                {PREFIXED_LANGUAGES.flatMap((lang) =>
                  LOCALIZED_TOOLS.map((tool) => (
                    <Route key={`${lang}/tools/${tool}`} path={`/${lang}/tools/${tool}`} element={<LocaleTool lang={lang} tool={tool} />} />
                  )),
                )}
                {DIRECT_MARKET_ROUTES.map(({ market, lang, path }) => (
                  <Route key={path} path={path} element={<DirectMarketRoute market={market} lang={lang} />} />
                ))}
                {/* Removed case studies: keep old links working */}
                <Route path="/work/ai-fitness-coach" element={<Navigate to="/work/" replace />} />
                <Route path="/work/bully-ai" element={<Navigate to="/work/" replace />} />
                <Route path="/work/salsaflow" element={<Navigate to="/work/" replace />} />
                <Route path="/work/healthcare-pdf-api" element={<Navigate to="/work/" replace />} />
                <Route path="/work/linkedin-templates-extension" element={<Navigate to="/work/" replace />} />
                <Route path="/work/padel-admin-portal" element={<Navigate to="/work/padel-booking/" replace />} />
                <Route path="/work/:slug" element={<CaseStudy />} />
                <Route path="/about" element={<Navigate to="/#founder" replace />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/booking-websites" element={<Navigate to="/direct/" replace />} />
                <Route path="/direct" element={<Direct />} />
                <Route path="/frame" element={<Frame />} />
                <Route path="/products" element={<Products />} />
                <Route path="/beit-toureef-walkthrough" element={<BeitToureefPoc />} />
                <Route path="/beit-toureef-poc" element={<LegacyBeitToureefRedirect />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <HydrationComplete />
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}
