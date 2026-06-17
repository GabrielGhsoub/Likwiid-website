import { useState, useEffect, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { m, AnimatePresence } from 'framer-motion'
import { Code, Cloud, Brain, Glasses, LayoutDashboard, Wrench, X } from 'lucide-react'
import type { ComponentType } from 'react'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { services } from '../data/services'
import { useLocalizedServices } from '../i18n/localizedContent'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const EMPTY = {}

const BACKDROP_INITIAL = { opacity: 0 }
const BACKDROP_ANIMATE = { opacity: 1 }
const BACKDROP_EXIT = { opacity: 0 }
const MODAL_INITIAL = { opacity: 0, scale: 0.95, filter: 'blur(4px)' }
const MODAL_ANIMATE = { opacity: 1, scale: 1, filter: 'blur(0px)' }
const MODAL_EXIT = { opacity: 0, scale: 0.95, filter: 'blur(4px)' }
const TRANSITION_MODAL = { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }

const SERVICE_CARD_HOVER = {
  y: -6,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  },
}

const serviceTransitions = services.map((_, i) => ({
  duration: 0.5,
  delay: i * 0.08,
  ease: [0.22, 1, 0.36, 1] as const,
}))

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Code,
  Cloud,
  Brain,
  Glasses,
  LayoutDashboard,
  Wrench,
}

function renderIcon(name: string, size: number, className: string) {
  const Icon = iconMap[name] || Code
  return <Icon size={size} className={className} />
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function Services() {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState<string | null>(null)
  const { ref, isVisible } = useScrollAnimation()
  const modalRef = useRef<HTMLDivElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  const localizedServices = useLocalizedServices()
  const selectedService = localizedServices.find((s) => s.id === expanded)

  // Page title
  useEffect(() => { document.title = t('services.documentTitle') }, [t])

  // Scroll lock
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [expanded])

  // Escape key
  useEffect(() => {
    if (!expanded) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(null)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [expanded])

  // Focus management: save previous focus, focus modal, restore on close
  useEffect(() => {
    if (expanded) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement | null
      // Small delay to let the modal render before focusing
      requestAnimationFrame(() => {
        modalRef.current?.focus()
      })
    } else if (previouslyFocusedRef.current) {
      previouslyFocusedRef.current.focus()
      previouslyFocusedRef.current = null
    }
  }, [expanded])

  // Focus trap
  const handleModalKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !modalRef.current) return

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    if (focusableElements.length === 0) return

    const first = focusableElements[0]
    const last = focusableElements[focusableElements.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === first || document.activeElement === modalRef.current) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }, [])

  return (
    <PageTransition>
      <div className="pt-20 pb-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            as="h1"
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {localizedServices.map((service, i) => (
                <m.div
                  key={service.id}
                  initial={FADE_UP_INITIAL}
                  animate={isVisible ? FADE_UP_ANIMATE : EMPTY}
                  transition={serviceTransitions[i]}
                  whileHover={SERVICE_CARD_HOVER}
                >
                  <Card
                    hover={false}
                    className="h-full flex flex-col cursor-pointer"
                    onClick={() => setExpanded(service.id)}
                  >
                    <div className="flex items-start gap-4">
                      {renderIcon(service.icon, 28, 'text-accent-gold shrink-0 mt-1')}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-text-secondary text-base md:text-sm">{service.shortDescription}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </Card>
                </m.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <m.div
            key="backdrop"
            initial={BACKDROP_INITIAL}
            animate={BACKDROP_ANIMATE}
            exit={BACKDROP_EXIT}
            transition={TRANSITION_MODAL}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 md:p-3"
            onClick={() => setExpanded(null)}
          >
            <m.div
              ref={modalRef}
              key="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              tabIndex={-1}
              onKeyDown={handleModalKeyDown}
              initial={MODAL_INITIAL}
              animate={MODAL_ANIMATE}
              exit={MODAL_EXIT}
              transition={TRANSITION_MODAL}
              className="w-full h-full md:max-w-2xl md:h-auto md:max-h-[96vh] bg-bg-secondary border-0 md:border md:border-border md:rounded-lg overflow-y-auto relative outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-bg-secondary z-10 p-5 md:p-6 pb-3 border-b border-border md:border-0">
                <button
                  onClick={() => setExpanded(null)}
                  className="absolute top-6 right-6 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                  aria-label={t('services.closeAriaLabel')}
                >
                  <X size={24} />
                </button>

                <div className="flex items-start gap-4 pr-10">
                  {renderIcon(selectedService.icon, 32, 'text-accent-gold shrink-0 mt-1')}
                  <h3 id="modal-title" className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 md:px-6 md:pb-6 md:pt-3">

                <p className="text-text-secondary leading-relaxed">
                  {selectedService.longDescription}
                </p>

                <h4 className="mt-4 text-sm font-medium text-text-primary uppercase tracking-wider font-[family-name:var(--font-mono)]">
                  {t('services.deliverables')}
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {selectedService.deliverables.map((d) => (
                    <li key={d} className="text-text-secondary text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
