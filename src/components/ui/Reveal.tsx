import { type ReactNode } from 'react'
import { m } from 'framer-motion'

const INITIAL = { opacity: 0, y: 16 }
const VISIBLE = { opacity: 1, y: 0 }
const VIEWPORT = { once: true, amount: 0.1 } as const
const TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }

interface RevealProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
  id?: string
  'aria-labelledby'?: string
}

// The site's single motion pattern: a 0.4s fade-up, once, when 10% of the block is in view.
// MotionConfig reducedMotion="user" (App.tsx) turns it into an instant change.
export function Reveal({ children, className, as = 'div', id, 'aria-labelledby': labelledBy }: RevealProps) {
  const Tag = as === 'section' ? m.section : m.div
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={className}
      initial={INITIAL}
      whileInView={VISIBLE}
      viewport={VIEWPORT}
      transition={TRANSITION}
    >
      {children}
    </Tag>
  )
}
