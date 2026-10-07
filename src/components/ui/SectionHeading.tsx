import { cn } from '../../utils/cn'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
}

// Renders immediately (no scroll-gated animation) so headings are never invisible.
export function SectionHeading({ title, subtitle, className, align = 'left', as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className={cn('mb-10', align === 'center' && 'text-center', className)}>
      <Tag
        className={cn(
          'font-bold font-[family-name:var(--font-display)] text-text-primary tracking-tight',
          Tag === 'h1' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl',
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={cn('mt-4 text-text-secondary text-lg max-w-2xl', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
