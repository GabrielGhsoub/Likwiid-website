import { useState } from 'react'
import { m } from 'framer-motion'
import { cn } from '../../utils/cn'

interface ImageWithLoadingProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  loading?: 'lazy' | 'eager'
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
}: ImageWithLoadingProps) {
  const [loaded, setLoaded] = useState(false)

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
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={
          loaded
            ? {
                opacity: 1,
                filter: 'blur(0px)',
              }
            : {}
        }
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1], // Liquid easing
        }}
        loading={loading}
      />
    </div>
  )
}
