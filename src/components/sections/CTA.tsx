import { m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Button } from '../ui/Button'

const HIDDEN = {}
const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const HEADING_TRANSITION = { duration: 0.5 }
const BODY_TRANSITION = { duration: 0.5, delay: 0.1 }
const BUTTON_TRANSITION = { duration: 0.5, delay: 0.2 }

export function CTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="mx-auto max-w-[1200px] text-center">
        <m.h2
          className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-text-primary"
          initial={FADE_UP_INITIAL}
          animate={isVisible ? FADE_UP_VISIBLE : HIDDEN}
          transition={HEADING_TRANSITION}
        >
          Have a project in mind?
        </m.h2>
        <m.p
          className="mt-4 text-text-secondary text-lg max-w-xl mx-auto"
          initial={FADE_UP_INITIAL}
          animate={isVisible ? FADE_UP_VISIBLE : HIDDEN}
          transition={BODY_TRANSITION}
        >
          We&apos;re always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </m.p>
        <m.div
          className="mt-8"
          initial={FADE_UP_INITIAL}
          animate={isVisible ? FADE_UP_VISIBLE : HIDDEN}
          transition={BUTTON_TRANSITION}
        >
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Let&apos;s talk
            </Button>
          </Link>
        </m.div>
      </div>
    </section>
  )
}
