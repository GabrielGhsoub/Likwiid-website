import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Button } from '../ui/Button'

const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const CTA_ITEM = {
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

export function CTA() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <m.div
          className="relative rounded-lg border border-border bg-bg-secondary/50 p-12 text-center overflow-hidden"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/[0.03] via-transparent to-accent-blue/[0.03] pointer-events-none" />

          <m.h2
            className="relative text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-text-primary"
            variants={CTA_ITEM}
          >
            {t('cta.title')}
          </m.h2>
          <m.p
            className="relative mt-4 text-text-secondary text-lg max-w-xl mx-auto"
            variants={CTA_ITEM}
          >
            {t('cta.subtitle')}
          </m.p>
          <m.div
            className="relative mt-8"
            variants={CTA_ITEM}
          >
            <Button variant="primary" size="lg" href="/contact">
              {t('cta.ctaPrimary')}
            </Button>
          </m.div>
        </m.div>
      </div>
    </section>
  )
}
