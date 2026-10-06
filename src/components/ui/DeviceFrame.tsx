import { cn } from '../../utils/cn'

// One screenshot treatment for the whole site: mobile screens sit in a plain rounded
// phone frame, web screens in a minimal browser frame. Flat, theme-token colors only.

interface FrameProps {
  children: React.ReactNode
  className?: string
}

export function PhoneFrame({ children, className }: FrameProps) {
  return (
    <div className={cn('flex w-full flex-col items-center', className)}>
      {/* Fills the carousel viewport (220/280/320px by breakpoint) so it is never clipped. */}
      <div className="w-full rounded-[2rem] border border-border bg-bg-secondary p-1.5">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-bg-tertiary">{children}</div>
      </div>
    </div>
  )
}

function BrowserChrome({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        'flex items-center border-b border-border bg-bg-secondary',
        compact ? 'gap-1 px-2 py-1.5' : 'gap-1.5 px-3 py-2.5',
      )}
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <span key={i} className={cn('rounded-full bg-border', compact ? 'h-1.5 w-1.5' : 'h-2.5 w-2.5')} />
      ))}
    </div>
  )
}

export function BrowserFrame({ children, className }: FrameProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <div className="overflow-hidden rounded-lg border border-border bg-bg-tertiary">
        <BrowserChrome />
        <div className="bg-bg-tertiary">{children}</div>
      </div>
    </div>
  )
}

interface ProjectPreviewProps {
  src: string
  alt: string
  platform: 'mobile' | 'web'
  priority?: boolean
}

// Card-sized preview used on /work and the Home "Selected work" block. It fills its parent,
// which must be `relative` with a definite size (an aspect ratio or a stretched height).
// Mobile screens sit in a phone frame about 88% of the box height; web screens fill the
// width in a browser frame cropped to 16:10 from the top.
export function ProjectPreview({ src, alt, platform, priority = false }: ProjectPreviewProps) {
  const imgProps = {
    src,
    alt,
    loading: priority ? ('eager' as const) : ('lazy' as const),
    decoding: 'async' as const,
    fetchPriority: priority ? ('high' as const) : ('auto' as const),
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {platform === 'mobile' ? (
        <div className="aspect-[9/19.5] h-[88%] rounded-[1.1rem] border border-border bg-bg-secondary p-1">
          <div className="h-full overflow-hidden rounded-[0.85rem] bg-bg-tertiary">
            <img {...imgProps} className="block h-full w-full object-cover object-top" />
          </div>
        </div>
      ) : (
        <div className="w-[90%] overflow-hidden rounded-md border border-border bg-bg-secondary">
          <BrowserChrome compact />
          <div className="aspect-[16/10] overflow-hidden bg-bg-tertiary">
            <img {...imgProps} className="block h-full w-full object-cover object-top" />
          </div>
        </div>
      )}
    </div>
  )
}
