import { m } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Code, Cloud, Brain, Glasses, LayoutDashboard, Wrench, ArrowRight } from 'lucide-react'
import type { ComponentType } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { services } from '../../data/services'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'

const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const SERVICE_ITEM = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const SERVICE_HOVER = {
  scale: 1.03,
  y: -4,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  },
}

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

export function ServiceCards() {
  const navigate = useNavigate()
  const { ref, isVisible } = useScrollAnimation()
  const preview = services.slice(0, 3)

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="What we do" subtitle="End-to-end software engineering across the full stack." />

        <m.div
          ref={ref}
          className="grid md:grid-cols-3 gap-6 items-stretch"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {preview.map((service) => (
              <m.div
                key={service.id}
                variants={SERVICE_ITEM}
                whileHover={SERVICE_HOVER}
              >
                <Card className="h-full flex flex-col liquid-shimmer liquid-shimmer-hover" hover={false} onClick={() => navigate('/services')}>
                  {renderIcon(service.icon, 28, 'text-accent-gold mb-4')}
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-base md:text-sm flex-1">{service.shortDescription}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </Card>
              </m.div>
          ))}
        </m.div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="text-accent-gold hover:text-accent-gold/80 font-medium text-sm inline-flex items-center gap-2 transition-colors py-3"
          >
            View all services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
