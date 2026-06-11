import { useState, useCallback } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PhoneFrame, BrowserFrame } from './DeviceFrame'

const SLIDE_VARIANTS = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
}
const SLIDE_TRANSITION = { type: 'spring' as const, stiffness: 300, damping: 30 }
const WHILE_DRAG = { cursor: 'grabbing' as const }

interface ScreenshotCarouselProps {
  images: string[]
  title: string
  platform: 'mobile' | 'web'
}

export function ScreenshotCarousel({ images, title, platform }: ScreenshotCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const Frame = platform === 'mobile' ? PhoneFrame : BrowserFrame

  const paginate = useCallback((dir: number) => {
    setDirection(dir)
    setCurrent(prev => (prev + dir + images.length) % images.length)
  }, [images.length])

  const handleDragEnd = useCallback((_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50
    const velocityThreshold = 500
    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      paginate(1)
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      paginate(-1)
    }
  }, [paginate])

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages(prev => new Set(prev).add(index))
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (images.length <= 1) return
    if (e.key === 'ArrowLeft') paginate(-1)
    else if (e.key === 'ArrowRight') paginate(1)
  }, [images.length, paginate])

  return (
    <div className="flex flex-col items-center gap-4" role="region" aria-roledescription="carousel" aria-label={`${title} screenshots`} onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="relative w-full flex items-center justify-center" aria-live="polite">
        {images.length > 1 && (
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-10 p-3 rounded-full bg-bg-secondary/80 border border-border text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-colors cursor-pointer"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div className={`overflow-hidden ${platform === 'mobile' ? 'w-[220px] sm:w-[280px] md:w-[320px]' : 'w-full max-w-[600px]'}`}>
          <AnimatePresence mode="wait" custom={direction}>
            <m.div
              key={current}
              custom={direction}
              variants={SLIDE_VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              transition={SLIDE_TRANSITION}
              drag={images.length > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{ touchAction: 'pan-y', cursor: images.length > 1 ? 'grab' : undefined }}
              whileDrag={WHILE_DRAG}
            >
              <Frame>
                <div
                  className="relative bg-bg-tertiary"
                  style={platform === 'mobile'
                    ? { width: '100%', aspectRatio: '9 / 19.5' }
                    : { width: '100%', aspectRatio: '16 / 10' }
                  }
                >
                  <img
                    src={images[current]}
                    alt={`${title} screenshot ${current + 1}`}
                    className="absolute inset-0 w-full h-full object-contain block"
                    style={{
                      opacity: loadedImages.has(current) ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                    }}
                    draggable={false}
                    onLoad={() => handleImageLoad(current)}
                  />
                  {!loadedImages.has(current) && (
                    <div className="absolute inset-0 flex items-center justify-center" role="status" aria-label="Loading screenshot">
                      <div className="w-6 h-6 border-2 border-accent-gold border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </div>
              </Frame>
            </m.div>
          </AnimatePresence>
        </div>

        {images.length > 1 && (
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 z-10 p-3 rounded-full bg-bg-secondary/80 border border-border text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-colors cursor-pointer"
            aria-label="Next screenshot"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex max-w-full flex-wrap items-center justify-center gap-0">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className="p-3 sm:p-5 cursor-pointer"
              aria-label={`Go to screenshot ${i + 1}`}
              aria-current={i === current ? true : undefined}
            >
              <div className={`h-2 rounded-full transition-[background-color,width] duration-300 ${i === current ? 'bg-accent-gold w-6' : 'bg-border hover:bg-text-tertiary w-2'}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
