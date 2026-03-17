import { type ReactNode } from 'react'
import { m } from 'framer-motion'
import { cn } from '../../utils/cn'

const HOVER_SCALE = { scale: 1.02, borderColor: '#2D3748' }
const CARD_TRANSITION = { duration: 0.2 }

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <m.div
      className={cn(
        'relative rounded-2xl border border-border bg-bg-secondary/50 hover:backdrop-blur-sm p-6 overflow-hidden',
        hover && 'cursor-pointer',
        className,
      )}
      whileHover={hover ? HOVER_SCALE : undefined}
      transition={CARD_TRANSITION}
      onClick={onClick}
    >
      {hover && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:opacity-100 bg-gradient-to-br from-accent-gold-dim to-transparent" />
      )}
      {children}
    </m.div>
  )
}
