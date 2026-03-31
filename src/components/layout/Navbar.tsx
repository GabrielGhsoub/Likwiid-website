import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { NAV_LINKS } from '../../utils/constants'
import { cn } from '../../utils/cn'
import { useTheme } from '../../hooks/useTheme'

const MOBILE_DRAWER_INITIAL = { x: '100%' }
const MOBILE_DRAWER_ANIMATE = { x: 0 }
const MOBILE_DRAWER_EXIT = { x: '100%' }
const MOBILE_DRAWER_TRANSITION = { type: 'spring' as const, stiffness: 300, damping: 30 }
const MOBILE_BACKDROP_INITIAL = { opacity: 0 }
const MOBILE_BACKDROP_ANIMATE = { opacity: 1 }
const MOBILE_BACKDROP_EXIT = { opacity: 0 }
const MOBILE_LINK_INITIAL = { opacity: 0, x: 20 }
const MOBILE_LINK_ANIMATE = { opacity: 1, x: 0 }
const MOBILE_LINK_EXIT = { opacity: 0, x: 20 }
const MOBILE_LINK_TRANSITIONS = NAV_LINKS.map((_, i) => ({
  delay: i * 0.05,
  duration: 0.3,
}))
const INDICATOR_TRANSITION = { type: 'spring' as const, stiffness: 350, damping: 30 }
const BACKDROP_TRANSITION = { duration: 0.2 }

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

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
  const drawerRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  // Escape key closes mobile drawer
  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen, closeMobile])

  // Focus trap + restore focus on close
  useEffect(() => {
    if (!mobileOpen) return
    previousFocusRef.current = document.activeElement as HTMLElement | null

    // Focus first focusable element in drawer
    const timer = requestAnimationFrame(() => {
      const drawer = drawerRef.current
      if (!drawer) return
      const focusable = drawer.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length > 0) focusable[0].focus()
    })

    // Trap focus within drawer
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const drawer = drawerRef.current
      if (!drawer) return
      const focusable = drawer.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      cancelAnimationFrame(timer)
      document.removeEventListener('keydown', onKeyDown)
      previousFocusRef.current?.focus()
    }
  }, [mobileOpen])

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent-gold focus:text-bg-primary focus:px-4 focus:py-2 focus:rounded">
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled ? 'glass-strong border-b border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.1)]' : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-3 md:py-4 flex items-center justify-between">
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
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={cn(
                  'text-[15px] font-medium transition-colors duration-200 no-underline relative',
                  location.pathname === link.path ? 'text-text-primary font-semibold' : 'text-text-secondary hover:text-text-primary',
                )}
              >
                {link.label}
                {location.pathname === link.path && (
                  <m.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-accent-gold to-accent-blue"
                    layoutId="navbar-indicator"
                    transition={INDICATOR_TRANSITION}
                  />
                )}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="text-text-secondary hover:text-text-primary p-2 -m-2 rounded-full hover:bg-bg-tertiary transition-colors cursor-pointer"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <button
            className="md:hidden text-text-primary p-3 hover:bg-bg-tertiary active:bg-bg-tertiary rounded-lg transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <m.div
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
              initial={MOBILE_BACKDROP_INITIAL}
              animate={MOBILE_BACKDROP_ANIMATE}
              exit={MOBILE_BACKDROP_EXIT}
              transition={BACKDROP_TRANSITION}
              onClick={closeMobile}
            />

            {/* Slide-in Drawer */}
            <m.div
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed top-0 right-0 bottom-0 z-40 w-[280px] bg-bg-secondary border-l border-border shadow-2xl md:hidden"
              initial={MOBILE_DRAWER_INITIAL}
              animate={MOBILE_DRAWER_ANIMATE}
              exit={MOBILE_DRAWER_EXIT}
              transition={MOBILE_DRAWER_TRANSITION}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                  <Link
                    to="/"
                    onClick={closeMobile}
                    className="font-[family-name:var(--font-display)] text-lg font-bold text-text-primary hover:text-accent-gold transition-colors no-underline"
                  >
                    Likwiid
                  </Link>
                  <button
                    onClick={closeMobile}
                    className="text-text-secondary hover:text-text-primary transition-colors p-2 -mr-2"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-6 overflow-y-auto">
                  <div className="flex flex-col gap-1">
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
                          aria-current={location.pathname === link.path ? 'page' : undefined}
                          className={cn(
                            'block px-4 py-3 rounded-lg font-[family-name:var(--font-display)] font-medium no-underline transition-all duration-200 text-base',
                            location.pathname === link.path
                              ? 'bg-accent-gold/10 text-accent-gold'
                              : 'text-text-primary hover:bg-bg-tertiary hover:text-accent-gold',
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span>{link.label}</span>
                            {location.pathname === link.path && (
                              <span className="text-accent-gold text-xs">●</span>
                            )}
                          </div>
                        </Link>
                      </m.div>
                    ))}
                  </div>
                </nav>

                {/* Footer with Theme Toggle */}
                <div className="px-6 py-4 border-t border-border">
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-bg-tertiary hover:bg-bg-primary text-text-primary transition-colors"
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    <span className="text-sm font-medium">
                      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                    </span>
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
