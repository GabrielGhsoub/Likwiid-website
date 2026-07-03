import { useState, useCallback } from 'react'
import { m } from 'framer-motion'
import { cn } from '../../utils/cn'

interface ImageWithLoadingProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  fetchPriority?: 'high' | 'low' | 'auto'
  sizes?: string
  srcSet?: string
  width?: number | string
  height?: number | string
}

const IMG_INITIAL = { opacity: 0, filter: 'blur(10px)' }
const IMG_LOADED = { opacity: 1, filter: 'blur(0px)' }
const IMG_EMPTY = {}
const IMG_TRANSITION = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const,
}

/**
 * ImageWithLoading Component
 *
 * Provides a smooth loading experience for images with:
 * - Shimmer loading state
 * - Blur-in animation when loaded
 * - Optimized lazy loading
 *
 * @example
 * <ImageWithLoading
 *   src="/images/project.png"
 *   alt="Project screenshot"
 *   className="w-full h-auto"
 * />
 */
export function ImageWithLoading({
  src,
  alt,
  className,
  containerClassName,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  sizes,
  srcSet,
  width,
  height,
}: ImageWithLoadingProps) {
  const [loaded, setLoaded] = useState(false)

  // Images served from cache can finish loading before React attaches onLoad, which would leave
  // them stuck at opacity 0. Reveal immediately if the element is already complete when mounted.
  const attachImg = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete) setLoaded(true)
  }, [])

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {/* Loading shimmer */}
      {!loaded && (
        <div
          className="absolute inset-0 bg-bg-tertiary liquid-shimmer rounded"
          aria-hidden="true"
        />
      )}

      {/* Image with fade-in animation */}
      <m.img
        ref={attachImg}
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setLoaded(true)}
        initial={IMG_INITIAL}
        animate={loaded ? IMG_LOADED : IMG_EMPTY}
        transition={IMG_TRANSITION}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        sizes={sizes}
        srcSet={srcSet}
        width={width}
        height={height}
      />
    </div>
  )
}
