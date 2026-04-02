import { type ReactNode, type KeyboardEvent } from 'react'
import { m } from 'framer-motion'
import { cn } from '../../utils/cn'

const HOVER_SCALE = {
  scale: 1.03,
  y: -4,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  },
}
const CARD_TRANSITION = { duration: 0.2 }

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  const isInteractive = hover && onClick

  const handleKeyDown = (e: KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <m.div
      className={cn(
        'group relative rounded-lg border border-border bg-bg-secondary/50 p-6 overflow-hidden',
        isInteractive && 'cursor-pointer',
        className,
      )}
      whileHover={hover ? HOVER_SCALE : undefined}
      transition={CARD_TRANSITION}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
    >
      {children}
    </m.div>
  )
}
