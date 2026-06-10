import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
import { LazyMotion, domMax } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home'

const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const BeitToureefPoc = lazy(() => import('./pages/BeitToureefPoc'))
const BookingWebsites = lazy(() => import('./pages/BookingWebsites'))

function usePrefetchRoutes() {
  useEffect(() => {
    const prefetch = () => {
      import('./pages/Services')
      import('./pages/Portfolio')
      import('./pages/CaseStudy')
      import('./pages/About')
      import('./pages/Contact')
      import('./pages/Privacy')
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

  return <Navigate to={`/beit-toureef-walkthrough${location.hash}`} replace />
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
  usePrefetchRoutes()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname, location.key])

  return (
    <LazyMotion features={domMax} strict>
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
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
      </main>
      <Footer />
    </LazyMotion>
  )
}
