import { m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Button } from '../ui/Button'

const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const CTA_ITEM = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      damping: 20,
      stiffness: 180,
    },
  },
}

export function CTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="relative pt-24 pb-16 px-6">
      <m.div
        className="relative mx-auto max-w-[1200px] text-center"
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <m.h2
          className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-text-primary"
          variants={CTA_ITEM}
        >
          Let&apos;s build software that flows
        </m.h2>
        <m.p
          className="mt-4 text-text-secondary text-lg max-w-xl mx-auto"
          variants={CTA_ITEM}
        >
          From idea to production in weeks, not months. We&apos;re ready to discuss your next project.
        </m.p>
        <m.div
          className="mt-8"
          variants={CTA_ITEM}
        >
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Let&apos;s talk
            </Button>
          </Link>
        </m.div>
      </m.div>
    </section>
  )
}
