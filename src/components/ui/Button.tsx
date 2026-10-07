import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  'aria-busy'?: boolean
}

// Keep in sync with buttonLink.ts, which mirrors these classes for plain anchors.
const variants = {
  primary:
    'bg-accent-gold text-text-inverse border border-accent-gold hover:bg-accent-gold-hover hover:border-accent-gold-hover transition-colors duration-200',
  secondary:
    'border border-border text-text-primary hover:border-border-hover transition-colors duration-200',
  ghost: 'text-text-secondary hover:text-text-primary transition-colors duration-200',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-6 py-3 text-base',
}

const isWebUrl = (href: string) => /^https?:/.test(href)
const isNativeScheme = (href: string) => /^(mailto|tel):/.test(href)

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className,
  type = 'button',
  disabled,
  onClick,
  'aria-busy': ariaBusy,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 min-h-11 font-medium rounded-full cursor-pointer no-underline font-[family-name:var(--font-display)]',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 pointer-events-none',
    className,
  )

  if (href) {
    if (isWebUrl(href)) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    if (isNativeScheme(href)) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick} aria-busy={ariaBusy}>
      {children}
    </button>
  )
}
