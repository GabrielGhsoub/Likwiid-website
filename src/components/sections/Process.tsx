import { m } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionHeading } from '../ui/SectionHeading'

type Step = {
  number: string
  title: string
  description: string
}

const whatSteps: Step[] = [
  {
    number: '01',
    title: 'Landscape',
    description:
      'Map the full picture — goals, stakeholders, competitors, and the ecosystem you operate in.',
  },
  {
    number: '02',
    title: 'Audit',
    description:
      'Go deep on the tools, spreadsheets, and workflows that keep the business running today.',
  },
  {
    number: '03',
    title: 'Blueprint',
    description:
      'Design the ideal future state and draft the requirements. Strategy first — no tech decisions yet.',
  },
]

const howSteps: Step[] = [
  {
    number: '04',
    title: 'Architecture',
    description:
      'Pick the frameworks, weigh the constraints, and lock in the technical foundations.',
  },
  {
    number: '05',
    title: 'Replatform',
    description:
      'Plan the data strategy: what to keep, what to migrate, and how to move it safely.',
  },
  {
    number: '06',
    title: 'Build',
    description:
      'Ship the system with tight feedback loops and AI-accelerated delivery.',
  },
  {
    number: '07',
    title: 'Evolve',
    description:
      'Keep improving after launch. Great partnerships are ongoing, not one-time handoffs.',
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

type PhaseProps = {
  label: string
  caption: string
  steps: Step[]
  isVisible: boolean
  gridCols: string
}

function Phase({ label, caption, steps, isVisible, gridCols }: PhaseProps) {
  return (
    <div className="mb-12 last:mb-0">
      <div className="mb-6 text-center md:text-left">
        <span className="text-accent-gold font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-[0.2em]">
          {label}
        </span>
        <p className="text-text-secondary text-sm mt-1">{caption}</p>
      </div>

      <m.div
        className="hidden md:block h-[1px] bg-accent-gold/30 mx-auto mb-8 origin-left"
        style={{ width: 'calc(100% - 80px)', marginLeft: '40px' }}
        variants={LINE_EXPAND}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      />

      <m.div
        className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-8 md:gap-6`}
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
  )
}

export function Process() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="How we work" align="center" />

        <div ref={ref}>
          <Phase
            label="What?"
            caption="Strategy and discovery — before a single line of code."
            steps={whatSteps}
            isVisible={isVisible}
            gridCols="md:grid-cols-3"
          />
          <Phase
            label="How?"
            caption="Technical execution, from architecture to continuous evolution."
            steps={howSteps}
            isVisible={isVisible}
            gridCols="md:grid-cols-4"
          />
        </div>
      </div>
    </section>
  )
}
