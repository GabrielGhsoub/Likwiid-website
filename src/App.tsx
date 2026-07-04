import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { LazyMotion, MotionConfig } from 'framer-motion'

// Lazy-load the animation feature bundle so its weight stays off the critical path; the static
// hero paints first and animation capabilities stream in right after.
const loadFeatures = () => import('framer-motion').then((mod) => mod.domMax)
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ErrorBoundary } from './components/layout/ErrorBoundary'
import Home from './pages/Home'

const Services = lazy(() => import('./pages/Services'))
const Process = lazy(() => import('./pages/Process'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const BeitToureefPoc = lazy(() => import('./pages/BeitToureefPoc'))
const BookingWebsites = lazy(() => import('./pages/BookingWebsites'))

function usePrefetchRoutes() {
  useEffect(() => {
    // Respect Data Saver - don't speculatively fetch route chunks on metered/slow connections.
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (conn?.saveData) return

    const prefetch = () => {
      import('./pages/Services')
      import('./pages/Process')
      import('./pages/BookingWebsites')
      import('./pages/Portfolio')
      import('./pages/CaseStudy')
      import('./pages/About')
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

const NotFound = lazy(() => import('./pages/NotFound'))

function LegacyBeitToureefRedirect() {
  const location = useLocation()

  return <Navigate to={`/beit-toureef-walkthrough${location.search}${location.hash}`} replace />
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

  useEffect(() => {
    // Scroll to top on forward navigations to a new page, but leave the browser to restore
    // position on back/forward (POP), and don't hijack in-page anchor (#hash) navigation.
    if (navigationType !== 'POP' && !location.hash) {
      window.scrollTo(0, 0)
    }
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
                <Route path="/process" element={<Process />} />
                <Route path="/work" element={<Portfolio />} />
                <Route path="/work/:slug" element={<CaseStudy />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/booking-websites" element={<BookingWebsites />} />
                <Route path="/beit-toureef-walkthrough" element={<BeitToureefPoc />} />
                <Route path="/beit-toureef-poc" element={<LegacyBeitToureefRedirect />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}
