import { m } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const companies = [
  'Blom Bank',
  'WonderEight',
  'EmblemHealth',
  'Intelsat',
  'Lawyers Syndicate of Lebanon',
]

const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const FADE_IN = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const LABEL_FADE = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function TrustedBy() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <m.p
          className="text-sm font-medium text-accent-gold uppercase tracking-wider font-[family-name:var(--font-mono)] text-center mb-6"
          variants={LABEL_FADE}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          Previously built for
        </m.p>

        <m.div
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {companies.map((company, index) => (
            <m.div key={company} className="flex items-center gap-3" variants={FADE_IN}>
              {index > 0 && (
                <span className="text-text-tertiary/40 text-[8px] leading-none select-none hidden sm:inline">
                  ●
                </span>
              )}
              <span className="text-sm font-medium text-text-tertiary whitespace-nowrap">
                {company}
              </span>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
