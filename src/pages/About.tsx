import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { m } from 'framer-motion'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TechStack } from '../components/sections/TechStack'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { aboutSections } from '../data/personal'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const SLIDE_LEFT_INITIAL = { opacity: 0, x: -20, scale: 0.96 }
const SLIDE_LEFT_ANIMATE = { opacity: 1, x: 0, scale: 1 }
const SCALE_IN_INITIAL = { opacity: 0, scale: 0.95 }
const SCALE_IN_ANIMATE = { opacity: 1, scale: 1 }
const EMPTY = {}
const TRANSITION_BASE = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_DELAY_02 = { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_DELAY_03 = { duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }

const journeyTransitions = aboutSections.journey.map((_, i) => ({
  duration: 0.5,
  delay: i * 0.12,
  ease: [0.22, 1, 0.36, 1] as const,
}))

const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      damping: 14,
      stiffness: 120,
    },
  },
}

export default function About() {
  const { t } = useTranslation()
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation()
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation()
  const { ref: interestsRef, isVisible: interestsVisible } = useScrollAnimation()

  useEffect(() => { document.title = t('about.documentTitle') }, [t])

  return (
    <PageTransition>
      <div className="pt-20 pb-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading as="h1" title={t('about.title')} subtitle={t('about.subtitle')} />

          <div className="grid lg:grid-cols-[1fr_320px] gap-16">
            <div>
              <m.div
                className="mb-12"
                initial={FADE_UP_INITIAL}
                animate={FADE_UP_ANIMATE}
                transition={TRANSITION_DELAY_02}
              >
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  {t('about.intro1')}
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {t('about.intro2')}
                </p>
              </m.div>

              <m.div
                className="mb-12 p-6 rounded-lg border border-border bg-bg-secondary/50"
                initial={FADE_UP_INITIAL}
                animate={FADE_UP_ANIMATE}
                transition={TRANSITION_DELAY_03}
              >
                <h3 className="text-sm font-medium text-accent-gold uppercase tracking-wider font-[family-name:var(--font-mono)] mb-3">
                  {t('about.founder')}
                </h3>
                <h4 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                  {aboutSections.founder.name}
                </h4>
                <p className="text-text-tertiary text-sm mb-3">{aboutSections.founder.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{aboutSections.founder.bio}</p>
              </m.div>

              <div ref={journeyRef}>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-8">
                  {t('about.journey')}
                </h3>
                <div className="space-y-8 relative pl-8">
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
                  {aboutSections.journey.map((item, i) => {
                    const isHighlight = 'highlight' in item && item.highlight
                    return (
                      <m.div
                        key={i}
                        className={`relative${isHighlight ? ' mt-8 border-t border-border pt-8' : ''}`}
                        initial={SLIDE_LEFT_INITIAL}
                        animate={journeyVisible ? SLIDE_LEFT_ANIMATE : EMPTY}
                        transition={journeyTransitions[i]}
                      >
                        <div
                          className={`absolute top-2 rounded-full border-2 border-accent-gold ${
                            isHighlight
                              ? 'w-[19px] h-[19px] bg-accent-gold left-[-33px]'
                              : 'w-[15px] h-[15px] bg-bg-primary left-[-31px]'
                          }${isHighlight ? ' !top-10' : ''}`}
                        />
                        <div className="text-xs text-accent-gold font-[family-name:var(--font-mono)] mb-1">
                          {item.period}
                        </div>
                        <div className="text-text-primary font-medium">
                          {item.role}
                        </div>
                        <div className="text-text-tertiary text-sm mb-1">{item.company}</div>
                        <p className="text-text-secondary text-base md:text-sm">{item.description}</p>
                      </m.div>
                    )
                  })}
                </div>
              </div>

              <div ref={philosophyRef} className="mt-16">
                <m.div
                  initial={FADE_UP_INITIAL}
                  animate={philosophyVisible ? FADE_UP_ANIMATE : EMPTY}
                  transition={TRANSITION_BASE}
                >
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-4">
                    {t('about.philosophy')}
                  </h3>
                  <blockquote className="border-l-2 border-accent-gold pl-6 text-text-secondary text-lg italic leading-relaxed">
                    {aboutSections.philosophy}
                  </blockquote>
                </m.div>
              </div>

              <div ref={interestsRef} className="mt-16">
                <m.div
                  initial={FADE_UP_INITIAL}
                  animate={interestsVisible ? FADE_UP_ANIMATE : EMPTY}
                  transition={TRANSITION_BASE}
                >
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-4">
                    {t('about.beyondCode')}
                  </h3>
                  <m.div
                    className="flex flex-wrap gap-3"
                    variants={STAGGER_CONTAINER}
                    initial="hidden"
                    animate={interestsVisible ? 'visible' : 'hidden'}
                  >
                    {aboutSections.interests.map((interest) => (
                      <m.span
                        key={interest}
                        variants={STAGGER_ITEM}
                        className="px-4 py-2 border border-border rounded-full text-text-secondary text-sm hover:border-accent-gold hover:text-text-primary transition-colors"
                      >
                        {interest}
                      </m.span>
                    ))}
                  </m.div>
                </m.div>
              </div>
            </div>

            <div className="hidden lg:block">
              <m.div
                className="sticky top-32 rounded-lg border border-border overflow-hidden"
                initial={SCALE_IN_INITIAL}
                animate={SCALE_IN_ANIMATE}
                transition={TRANSITION_DELAY_03}
              >
                <div className="relative aspect-[3/4] w-full bg-bg-tertiary">
                  <img
                    src="/gabriel.webp"
                    alt={t('about.photoAlt')}
                    className="w-full h-full object-cover object-top"
                    style={{ opacity: photoLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
                    onLoad={() => setPhotoLoaded(true)}
                  />
                  {!photoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center" role="status" aria-label={t('about.loadingPhoto')}>
                      <div className="w-6 h-6 border-2 border-accent-gold border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </div>

      <TechStack />
    </PageTransition>
  )
}
