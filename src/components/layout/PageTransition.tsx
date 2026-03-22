import { type ReactNode } from 'react'
import { m } from 'framer-motion'

interface PageTransitionProps {
  children: ReactNode
}

const PAGE_INITIAL = {
  opacity: 0,
  y: 20,
  filter: 'blur(4px)',
}
const PAGE_ANIMATE = {
  opacity: 1,
  y: 0,
  filter: 'blur(0px)',
}
const PAGE_TRANSITION = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1] as const,
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <m.div
      initial={PAGE_INITIAL}
      animate={PAGE_ANIMATE}
      transition={PAGE_TRANSITION}
    >
      {children}
    </m.div>
  )
}
