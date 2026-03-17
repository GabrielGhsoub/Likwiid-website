import { m } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { stats } from '../../data/personal'

const HIDDEN = {}
const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const STAT_TRANSITIONS = stats.map((_, i) => ({
  duration: 0.5,
  delay: i * 0.1,
}))

export function Stats() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 border-y border-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <m.div
              key={stat.label}
              className="text-center"
              initial={FADE_UP_INITIAL}
              animate={isVisible ? FADE_UP_VISIBLE : HIDDEN}
              transition={STAT_TRANSITIONS[i]}
            >
              <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-accent-gold">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-text-secondary">{stat.label}</div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
