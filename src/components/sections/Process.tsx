import { m } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn your goals, constraints, and users. No assumptions.',
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'System design, tech stack selection, and project roadmap.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Iterative development with weekly demos and continuous feedback.',
  },
  {
    number: '04',
    title: 'Ship',
    description: 'Deployment, monitoring, and handoff with full documentation.',
  },
  {
    number: '05',
    title: 'Support',
    description: 'Ongoing maintenance, optimization, and feature development.',
  },
]

const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const STEP_ITEM = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const LINE_EXPAND = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export function Process() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="How we work" align="center" />

        <div ref={ref}>
          {/* Connecting line — desktop only */}
          <m.div
            className="hidden md:block h-[1px] bg-accent-gold/30 mx-auto mb-8 origin-left"
            style={{ width: 'calc(100% - 80px)', marginLeft: '40px' }}
            variants={LINE_EXPAND}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          />

          <m.div
            className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6"
            variants={STAGGER_CONTAINER}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {steps.map((step) => (
              <m.div key={step.number} className="text-center md:text-left" variants={STEP_ITEM}>
                <span className="text-accent-gold font-[family-name:var(--font-mono)] text-sm font-medium">
                  {step.number}
                </span>
                <h3 className="text-text-primary font-semibold font-[family-name:var(--font-display)] mt-2 text-base">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                  {step.description}
                </p>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  )
}
