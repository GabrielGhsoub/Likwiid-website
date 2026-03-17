import { m } from 'framer-motion'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { aboutSections } from '../data/personal'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const SLIDE_LEFT_INITIAL = { opacity: 0, x: -20 }
const SLIDE_LEFT_ANIMATE = { opacity: 1, x: 0 }
const SCALE_IN_INITIAL = { opacity: 0, scale: 0.95 }
const SCALE_IN_ANIMATE = { opacity: 1, scale: 1 }
const EMPTY = {}
const TRANSITION_BASE = { duration: 0.5 }
const TRANSITION_DELAY_02 = { duration: 0.5, delay: 0.2 }
const TRANSITION_DELAY_03 = { duration: 0.5, delay: 0.3 }

const journeyTransitions = aboutSections.journey.map((_, i) => ({
  duration: 0.5,
  delay: i * 0.1,
}))

export default function About() {
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation()
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation()
  const { ref: interestsRef, isVisible: interestsVisible } = useScrollAnimation()

  return (
    <PageTransition>
      <main className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading title="About" subtitle="A digital studio built on real engineering experience." />

          <div className="grid lg:grid-cols-[1fr_320px] gap-16">
            <div>
              <m.div
                className="mb-12"
                initial={FADE_UP_INITIAL}
                animate={FADE_UP_ANIMATE}
                transition={TRANSITION_DELAY_02}
              >
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Likwiid is a digital studio founded by Gabriel Ghoussoub, a full-stack software engineer with 5+ years
                  of experience shipping production software across fintech, insurtech, satellite monitoring, IoT, and VR.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We build end-to-end, from architecture to deployment, for startups and enterprises alike.
                  Based in Beirut, working with clients in the US, Europe, and the Middle East.
                </p>
              </m.div>

              <m.div
                className="mb-12 p-6 rounded-lg border border-border bg-bg-secondary/50"
                initial={FADE_UP_INITIAL}
                animate={FADE_UP_ANIMATE}
                transition={TRANSITION_DELAY_03}
              >
                <h3 className="text-sm font-medium text-accent-gold uppercase tracking-wider font-[family-name:var(--font-mono)] mb-3">
                  Founder
                </h3>
                <h4 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                  {aboutSections.founder.name}
                </h4>
                <p className="text-text-tertiary text-sm mb-3">{aboutSections.founder.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{aboutSections.founder.bio}</p>
              </m.div>

              <div ref={journeyRef}>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-8">
                  Journey
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
                        <p className="text-text-secondary text-sm">{item.description}</p>
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
                    Philosophy
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
                    Beyond code
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {aboutSections.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-4 py-2 border border-border rounded-full text-text-secondary text-sm hover:border-border-hover hover:text-text-primary transition-colors"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
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
                <img
                  src="/gabriel.jpeg"
                  alt="Gabriel Ghoussoub"
                  className="aspect-[3/4] w-full object-cover object-top"
                  loading="lazy"
                />
              </m.div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
