import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home'

const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

function usePrefetchRoutes() {
  useEffect(() => {
    const prefetch = () => {
      import('./pages/Services')
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

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent-gold border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  const location = useLocation()
  usePrefetchRoutes()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.key])

  return (
    <LazyMotion features={domAnimation} strict>
      {/* Global floating bubbles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[10%] right-[12%] w-6 h-6 rounded-full bg-accent-gold/[0.10] blur-[1px]" style={{ animation: 'float-bubble 9s ease-in-out infinite' }} />
        <div className="absolute top-[45%] left-[8%] w-4 h-4 rounded-full bg-accent-blue/[0.12]" style={{ animation: 'float-bubble 11s ease-in-out infinite 2s' }} />
        <div className="absolute top-[25%] left-[40%] w-7 h-7 rounded-full bg-accent-gold/[0.06] blur-[2px]" style={{ animation: 'float-bubble 14s ease-in-out infinite 4s' }} />
        <div className="absolute top-[65%] right-[20%] w-3 h-3 rounded-full bg-accent-gold/[0.15]" style={{ animation: 'float-bubble 8s ease-in-out infinite 1s' }} />
        <div className="absolute top-[55%] right-[55%] w-5 h-5 rounded-full bg-accent-blue/[0.08] blur-[1px]" style={{ animation: 'float-bubble 10s ease-in-out infinite 3s' }} />
        <div className="absolute top-[80%] left-[25%] w-3 h-3 rounded-full bg-accent-gold/[0.12]" style={{ animation: 'float-bubble 12s ease-in-out infinite 6s' }} />
        <div className="absolute top-[35%] right-[8%] w-4 h-4 rounded-full bg-accent-blue/[0.10]" style={{ animation: 'float-bubble 13s ease-in-out infinite 5s' }} />
      </div>
      <Navbar />
      <main id="main-content" className="relative z-[1]">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Portfolio />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </LazyMotion>
  )
}
