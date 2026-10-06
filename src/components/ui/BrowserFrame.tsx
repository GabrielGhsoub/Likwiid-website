import { cn } from '../../utils/cn'

interface BrowserFrameProps {
  image: string
  alt: string
  className?: string
  width?: number
  height?: number
}

// Minimal browser chrome around a web screenshot, cropped to 16:10.
export function BrowserFrame({ image, alt, className, width = 1280, height = 800 }: BrowserFrameProps) {
  return (
    <div className={cn('overflow-hidden rounded-lg border border-border bg-bg-tertiary', className)}>
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-border-hover" />
        <span className="h-2 w-2 rounded-full bg-border-hover" />
        <span className="h-2 w-2 rounded-full bg-border-hover" />
      </div>
      <img
        src={image}
        alt={alt}
        width={width}
        height={height}
        className="block w-full aspect-[16/10] object-cover object-top"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
