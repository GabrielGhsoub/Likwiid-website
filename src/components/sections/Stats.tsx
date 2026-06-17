import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { stats } from '../../data/personal'

const STAT_LABEL_KEYS: Record<string, string> = {
  'Websites Delivered': 'websitesDelivered',
  'Products Shipped': 'productsShipped',
  'Reply Time': 'replyTime',
  'Industries Served': 'industriesServed',
}

const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const STAT_ITEM = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      damping: 20,
      stiffness: 200,
    },
  },
}

export function Stats() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 border-y border-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <m.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {stats.map((stat) => (
            <m.div
              key={stat.label}
              className="text-center"
              variants={STAT_ITEM}
            >
              <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-accent-gold">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-text-secondary">
                {STAT_LABEL_KEYS[stat.label]
                  ? t(`stats.${STAT_LABEL_KEYS[stat.label]}`)
                  : stat.label}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
