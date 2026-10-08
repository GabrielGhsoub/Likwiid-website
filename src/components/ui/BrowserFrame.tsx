import { cn } from '../../utils/cn'
import { demoPreviewSrcSet, TWO_COLUMN_SIZES } from '../../utils/responsiveImages'

interface BrowserFrameProps {
  image: string
  alt: string
  className?: string
  width?: number
  height?: number
  /** Above-the-fold (LCP) image: load eagerly with high fetch priority. */
  priority?: boolean
  /** Rendered width hint for srcset selection. */
  sizes?: string
}

// Minimal browser chrome around a web screenshot, cropped to 16:10.
export function BrowserFrame({ image, alt, className, width = 1280, height = 800, priority = false, sizes = TWO_COLUMN_SIZES }: BrowserFrameProps) {
  return (
    <div className={cn('overflow-hidden rounded-lg border border-border bg-bg-tertiary', className)}>
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-border-hover" />
        <span className="h-2 w-2 rounded-full bg-border-hover" />
        <span className="h-2 w-2 rounded-full bg-border-hover" />
      </div>
      <img
        src={image}
        srcSet={demoPreviewSrcSet(image)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className="block w-full aspect-[16/10] object-cover object-top"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </div>
  )
}
