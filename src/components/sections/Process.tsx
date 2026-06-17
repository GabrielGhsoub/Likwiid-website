import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionHeading } from '../ui/SectionHeading'

type Step = {
  number: string
  title: string
  description: string
}

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
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  const whatSteps: Step[] = [
    {
      number: '01',
      title: t('process.step1Title'),
      description: t('process.step1Description'),
    },
    {
      number: '02',
      title: t('process.step2Title'),
      description: t('process.step2Description'),
    },
    {
      number: '03',
      title: t('process.step3Title'),
      description: t('process.step3Description'),
    },
  ]

  const howSteps: Step[] = [
    {
      number: '04',
      title: t('process.step4Title'),
      description: t('process.step4Description'),
    },
    {
      number: '05',
      title: t('process.step5Title'),
      description: t('process.step5Description'),
    },
    {
      number: '06',
      title: t('process.step6Title'),
      description: t('process.step6Description'),
    },
    {
      number: '07',
      title: t('process.step7Title'),
      description: t('process.step7Description'),
    },
  ]

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title={t('process.heading')} align="center" />

        <div ref={ref}>
          <Phase
            label={t('process.whatLabel')}
            caption={t('process.whatCaption')}
            steps={whatSteps}
            isVisible={isVisible}
            gridCols="md:grid-cols-3"
          />
          <Phase
            label={t('process.howLabel')}
            caption={t('process.howCaption')}
            steps={howSteps}
            isVisible={isVisible}
            gridCols="md:grid-cols-4"
          />
        </div>
      </div>
    </section>
  )
}
