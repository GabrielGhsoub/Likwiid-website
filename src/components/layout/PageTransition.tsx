import { type ReactNode } from 'react'
import { m } from 'framer-motion'

interface PageTransitionProps {
  children: ReactNode
}

const PAGE_INITIAL = {
  opacity: 0,
  y: 20,
}
const PAGE_ANIMATE = {
  opacity: 1,
  y: 0,
}
const PAGE_TRANSITION = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const,
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
