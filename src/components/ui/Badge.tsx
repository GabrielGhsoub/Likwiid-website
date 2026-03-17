import { cn } from '../../utils/cn'

interface BadgeProps {
  children: string
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium rounded-full border border-border bg-bg-tertiary text-text-secondary font-[family-name:var(--font-mono)]',
        className,
      )}
    >
      {children}
    </span>
  )
}
