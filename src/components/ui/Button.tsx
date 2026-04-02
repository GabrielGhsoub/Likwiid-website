import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { m, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../utils/cn'

const MotionLink = m.create(Link) as React.FC<HTMLMotionProps<'a'> & { to: string; children: ReactNode }>

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const BUTTON_HOVER = { scale: 1.02 }
const BUTTON_TAP = { scale: 0.98 }

const variants = {
  primary:
    'liquid-ripple bg-accent-gold text-white border border-accent-gold hover:opacity-90 transition-colors duration-200',
  secondary:
    'border border-border text-text-primary hover:border-border-hover hover:text-accent-gold transition-[border-color,color] duration-200',
  ghost: 'text-text-secondary hover:text-text-primary transition-colors duration-200',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium rounded-full cursor-pointer font-[family-name:var(--font-display)]',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 pointer-events-none',
    className,
  )

  if (href) {
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        <m.a
          href={href}
          className={classes}
          whileHover={BUTTON_HOVER}
          whileTap={BUTTON_TAP}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </m.a>
      )
    }
    return (
      <MotionLink
        to={href}
        className={classes}
        whileHover={BUTTON_HOVER}
        whileTap={BUTTON_TAP}
      >
        {children}
      </MotionLink>
    )
  }

  return (
    <m.button
      className={classes}
      whileHover={BUTTON_HOVER}
      whileTap={BUTTON_TAP}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </m.button>
  )
}
