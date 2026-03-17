import { m } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { cn } from '../../utils/cn'

const HIDDEN = {}
const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const FADE_UP_SUBTLE_INITIAL = { opacity: 0, y: 10 }
const LINE_INITIAL = { width: 0 }
const LINE_VISIBLE = { width: 60 }
const HEADING_TRANSITION = { duration: 0.5 }
const LINE_TRANSITION = { duration: 0.5, delay: 0.2 }
const SUBTITLE_TRANSITION = { duration: 0.5, delay: 0.3 }

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ title, subtitle, className, align = 'left' }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div ref={ref} className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <m.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-text-primary"
        initial={FADE_UP_INITIAL}
        animate={isVisible ? FADE_UP_VISIBLE : HIDDEN}
        transition={HEADING_TRANSITION}
      >
        {title}
      </m.h2>
      <m.div
        className={cn('h-px bg-accent-gold mt-4', align === 'center' ? 'mx-auto' : '')}
        initial={LINE_INITIAL}
        animate={isVisible ? LINE_VISIBLE : HIDDEN}
        transition={LINE_TRANSITION}
      />
      {subtitle && (
        <m.p
          className="mt-4 text-text-secondary text-lg max-w-2xl"
          initial={FADE_UP_SUBTLE_INITIAL}
          animate={isVisible ? FADE_UP_VISIBLE : HIDDEN}
          transition={SUBTITLE_TRANSITION}
        >
          {subtitle}
        </m.p>
      )}
    </div>
  )
}
