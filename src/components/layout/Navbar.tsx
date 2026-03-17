import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../utils/constants'
import { cn } from '../../utils/cn'

const MOBILE_OVERLAY_INITIAL = { opacity: 0 }
const MOBILE_OVERLAY_ANIMATE = { opacity: 1 }
const MOBILE_OVERLAY_EXIT = { opacity: 0 }
const MOBILE_OVERLAY_TRANSITION = { duration: 0.2 }
const MOBILE_LINK_INITIAL = { opacity: 0, y: 20 }
const MOBILE_LINK_ANIMATE = { opacity: 1, y: 0 }
const MOBILE_LINK_EXIT = { opacity: 0, y: 20 }
const MOBILE_LINK_TRANSITIONS = NAV_LINKS.map((_, i) => ({
  delay: i * 0.05,
  duration: 0.3,
}))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let ticking = false
    let rafId: number
    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          setScrolled(prev => {
            const next = window.scrollY > 50
            return prev === next ? prev : next
          })
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent-gold focus:text-bg-primary focus:px-4 focus:py-2 focus:rounded">
        Skip to content
      </a>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled ? 'bg-bg-primary/95 border-b border-border' : 'bg-transparent',
        )}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="font-[family-name:var(--font-display)] text-xl font-bold text-text-primary hover:text-accent-gold transition-colors no-underline"
          >
            Likwiid
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 no-underline relative',
                  location.pathname === link.path ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary',
                )}
              >
                {link.label}
                {location.pathname === link.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-accent-gold" />
                )}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            className="fixed inset-0 z-30 bg-bg-primary flex flex-col items-center justify-center gap-8 md:hidden"
            initial={MOBILE_OVERLAY_INITIAL}
            animate={MOBILE_OVERLAY_ANIMATE}
            exit={MOBILE_OVERLAY_EXIT}
            transition={MOBILE_OVERLAY_TRANSITION}
          >
            {NAV_LINKS.map((link, i) => (
              <m.div
                key={link.path}
                initial={MOBILE_LINK_INITIAL}
                animate={MOBILE_LINK_ANIMATE}
                exit={MOBILE_LINK_EXIT}
                transition={MOBILE_LINK_TRANSITIONS[i]}
              >
                <Link
                  to={link.path}
                  onClick={closeMobile}
                  className={cn(
                    'text-2xl font-[family-name:var(--font-display)] font-medium no-underline',
                    location.pathname === link.path ? 'text-accent-gold' : 'text-text-primary',
                  )}
                >
                  {link.label}
                </Link>
              </m.div>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
