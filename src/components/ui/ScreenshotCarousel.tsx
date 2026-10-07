import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { m, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PhoneFrame, BrowserFrame } from './DeviceFrame'

const SLIDE_VARIANTS = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
}
const SLIDE_TRANSITION = { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }
const WHILE_DRAG = { cursor: 'grabbing' as const }

interface ScreenshotCarouselProps {
  images: string[]
  title: string
  platform: 'mobile' | 'web'
}

export function ScreenshotCarousel({ images, title, platform }: ScreenshotCarouselProps) {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const Frame = platform === 'mobile' ? PhoneFrame : BrowserFrame

  // Warm the adjacent slides so a swipe or click reveals the next image immediately.
  useEffect(() => {
    if (images.length <= 1) return
    const neighbors = [(current + 1) % images.length, (current - 1 + images.length) % images.length]
    neighbors.forEach((i) => {
      const img = new Image()
      img.src = images[i]
    })
  }, [current, images])

  const paginate = useCallback((dir: number) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + images.length) % images.length)
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

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (images.length <= 1) return
    if (e.key === 'ArrowLeft') paginate(-1)
    else if (e.key === 'ArrowRight') paginate(1)
  }, [images.length, paginate])

  const navButtonClass =
    'absolute z-10 rounded-full border border-border bg-bg-secondary p-3 text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary cursor-pointer'

  return (
    <div
      className="flex flex-col items-center gap-4"
      role="region"
      aria-roledescription="carousel"
      aria-label={t('carousel.regionLabel', { title })}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative flex w-full items-center justify-center" aria-live="polite">
        {images.length > 1 && (
          <button type="button" onClick={() => paginate(-1)} className={`${navButtonClass} left-0`} aria-label={t('carousel.previous')}>
            <ChevronLeft size={20} />
          </button>
        )}

        <div className={`overflow-hidden ${platform === 'mobile' ? 'w-[220px] sm:w-[280px] md:w-[320px]' : 'w-full max-w-[640px] px-12 sm:px-14'}`}>
          <AnimatePresence mode="wait" initial={false} custom={direction}>
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
                    : { width: '100%', aspectRatio: '16 / 10' }}
                >
                  <img
                    src={images[current]}
                    alt={t('carousel.slideAlt', { title, index: current + 1 })}
                    className={`absolute inset-0 block h-full w-full ${platform === 'mobile' ? 'object-contain' : 'object-cover object-top'}`}
                    draggable={false}
                    decoding="async"
                  />
                </div>
              </Frame>
            </m.div>
          </AnimatePresence>
        </div>

        {images.length > 1 && (
          <button type="button" onClick={() => paginate(1)} className={`${navButtonClass} right-0`} aria-label={t('carousel.next')}>
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex max-w-full flex-wrap items-center justify-center gap-0">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className="p-3 cursor-pointer"
              aria-label={t('carousel.goToSlide', { index: i + 1 })}
              aria-current={i === current ? true : undefined}
            >
              <div className={`h-2 rounded-full transition-[background-color,width] duration-300 ${i === current ? 'w-6 bg-accent-gold' : 'w-2 bg-border hover:bg-text-tertiary'}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
