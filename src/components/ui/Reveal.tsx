import { type ReactNode } from 'react'
import { m } from 'framer-motion'
import { useRevealMotion } from '../../hooks/useRevealMotion'

interface RevealProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
  id?: string
  'aria-labelledby'?: string
}

// The site's single motion pattern: a 0.4s fade-up, once, when 10% of the block is in view.
// MotionConfig reducedMotion="user" (App.tsx) turns it into an instant change. Blocks that are
// part of the prerendered HTML start visible (see useRevealMotion).
export function Reveal({ children, className, as = 'div', id, 'aria-labelledby': labelledBy }: RevealProps) {
  const reveal = useRevealMotion<HTMLDivElement>()
  const Tag = as === 'section' ? m.section : m.div
  return (
    <Tag id={id} aria-labelledby={labelledBy} className={className} {...reveal}>
      {children}
    </Tag>
  )
}
