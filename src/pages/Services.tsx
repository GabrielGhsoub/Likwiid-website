import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Code, Cloud, Brain, Glasses, LayoutDashboard, Wrench, X } from 'lucide-react'
import type { ComponentType } from 'react'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { services } from '../data/services'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const EMPTY = {}

const BACKDROP_INITIAL = { opacity: 0 }
const BACKDROP_ANIMATE = { opacity: 1 }
const BACKDROP_EXIT = { opacity: 0 }
const MODAL_INITIAL = { opacity: 0, scale: 0.95 }
const MODAL_ANIMATE = { opacity: 1, scale: 1 }
const MODAL_EXIT = { opacity: 0, scale: 0.95 }
const TRANSITION_MODAL = { duration: 0.2 }

const serviceTransitions = services.map((_, i) => ({
  duration: 0.5,
  delay: i * 0.08,
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

export default function Services() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  const selectedService = services.find((s) => s.id === expanded)

  return (
    <PageTransition>
      <main className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            title="Services"
            subtitle="End-to-end software engineering. From architecture to deployment, we handle it all."
          />

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
                <m.div
                  key={service.id}
                  initial={FADE_UP_INITIAL}
                  animate={isVisible ? FADE_UP_ANIMATE : EMPTY}
                  transition={serviceTransitions[i]}
                >
                  <Card
                    className="h-full flex flex-col cursor-pointer"
                    onClick={() => setExpanded(service.id)}
                  >
                    <div className="flex items-start gap-4">
                      {renderIcon(service.icon, 28, 'text-accent-gold shrink-0 mt-1')}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-text-secondary text-sm">{service.shortDescription}</p>
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
      </main>

      <AnimatePresence>
        {selectedService && (
          <m.div
            key="backdrop"
            initial={BACKDROP_INITIAL}
            animate={BACKDROP_ANIMATE}
            exit={BACKDROP_EXIT}
            transition={TRANSITION_MODAL}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setExpanded(null)}
          >
            <m.div
              key="modal"
              initial={MODAL_INITIAL}
              animate={MODAL_ANIMATE}
              exit={MODAL_EXIT}
              transition={TRANSITION_MODAL}
              className="max-w-2xl w-full mx-4 bg-bg-secondary border border-border rounded-2xl p-8 max-h-[80vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpanded(null)}
                className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="flex items-start gap-4">
                {renderIcon(selectedService.icon, 32, 'text-accent-gold shrink-0 mt-1')}
                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                  {selectedService.title}
                </h3>
              </div>

              <p className="mt-6 text-text-secondary leading-relaxed">
                {selectedService.longDescription}
              </p>

              <h4 className="mt-6 text-sm font-medium text-text-primary uppercase tracking-wider font-[family-name:var(--font-mono)]">
                Deliverables
              </h4>
              <ul className="mt-3 space-y-2">
                {selectedService.deliverables.map((d) => (
                  <li key={d} className="text-text-secondary text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedService.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
