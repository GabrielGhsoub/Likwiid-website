import { cn } from '../../utils/cn'

interface LogoProps {
  className?: string
  /** Fill for the droplet dots. Defaults to the site accent token. */
  accent?: string
}

const DEFAULT_ACCENT = 'var(--color-accent-gold)'

// Monoline wordmark: letters are strokes in currentColor, the i dots are droplets.
const WORDMARK_LETTERS =
  'M11.5 12.8V127.8A22 22 0 0 0 33.5 149.8M71.7 62.8V149.8M121.7 12.8V149.8M183.3 62.8L121.7 123.9M147.5 98.3L185.3 149.8M219.6 62.8L251.5 149.8L283.4 78.8L315.3 149.8L347.2 62.8M389.4 62.8V149.8M439.4 62.8V149.8M576.4 106.3A45 45 0 1 0 486.4 106.3A45 45 0 1 0 576.4 106.3M576.4 12.8V149.8'

const WORDMARK_DROPS =
  'M71.7 0C74 8.1 84.7 17.3 84.7 25.3A13 13 0 0 1 58.7 25.3C58.7 17.3 69.3 8.1 71.7 0ZM389.4 0C391.7 8.1 402.4 17.3 402.4 25.3A13 13 0 0 1 376.4 25.3C376.4 17.3 387 8.1 389.4 0ZM439.4 0C441.7 8.1 452.4 17.3 452.4 25.3A13 13 0 0 1 426.4 25.3C426.4 17.3 437 8.1 439.4 0Z'

const MARK_STEMS = 'M22 36.5V54.5M42 36.5V54.5'

const MARK_DROPS =
  'M22 5.3C23.3 9.7 29.2 14.8 29.2 19.3A7.2 7.2 0 0 1 14.8 19.3C14.8 14.8 20.7 9.7 22 5.3ZM42 5.3C43.3 9.7 49.2 14.8 49.2 19.3A7.2 7.2 0 0 1 34.8 19.3C34.8 14.8 40.7 9.7 42 5.3Z'

export function Logo({ className, accent = DEFAULT_ACCENT }: LogoProps) {
  return (
    <svg
      viewBox="0 0 588 163"
      role="img"
      aria-label="Likwiid"
      className={cn('block w-auto shrink-0', className ?? 'h-6')}
    >
      <path
        d={WORDMARK_LETTERS}
        fill="none"
        stroke="currentColor"
        strokeWidth={23}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d={WORDMARK_DROPS} style={{ fill: accent }} />
    </svg>
  )
}

export function LogoMark({ className, accent = DEFAULT_ACCENT }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Likwiid"
      className={cn('block w-auto shrink-0', className ?? 'h-6')}
    >
      <path d={MARK_STEMS} fill="none" stroke="currentColor" strokeWidth={11} strokeLinecap="round" />
      <path d={MARK_DROPS} style={{ fill: accent }} />
    </svg>
  )
}
