import { useMemo, useState, useCallback, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Badge } from '../components/ui/Badge'
import { PhoneFrame, BrowserFrame } from '../components/ui/DeviceFrame'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/projects'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const FADE_IN_INITIAL = { opacity: 0 }
const FADE_IN_ANIMATE = { opacity: 1 }
const TRANSITION_BASE = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_DELAY_015 = { duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_DELAY_06 = { duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }

const LIQUID_REVEAL = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.5 },
      y: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
}

const SLIDE_VARIANTS = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
}
const SLIDE_TRANSITION = { type: 'spring' as const, stiffness: 300, damping: 30 }
const WHILE_DRAG = { cursor: 'grabbing' as const }

function ScreenshotCarousel({ images, title, platform }: { images: string[]; title: string; platform: 'mobile' | 'web' }) {
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

function CaseStudySection({ title, content }: { title: string; content: string }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  return (
    <div ref={ref}>
      <m.section
        variants={LIQUID_REVEAL}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <h2 className="text-base md:text-sm font-medium text-accent-gold uppercase tracking-wider font-[family-name:var(--font-mono)] mb-3">
          {title}
        </h2>
        <p className="text-text-secondary leading-relaxed text-lg">{content}</p>
      </m.section>
    </div>
  )
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  const sections = useMemo(() => {
    if (!project) return []
    return [
      { title: 'Overview', content: project.description },
      { title: 'Challenge', content: project.challenge },
      { title: 'Approach', content: project.approach },
      { title: 'Results', content: project.results },
    ]
  }, [project])

  useEffect(() => {
    document.title = project ? `${project.title} | Likwiid` : 'Likwiid'
  }, [project])

  if (!project) return <Navigate to="/work" replace />

  return (
    <PageTransition key={slug}>
      <div className="pt-14 pb-6 md:pb-16">
        <div className="h-40 md:h-52 w-full bg-bg-primary" />

        <div className="mx-auto max-w-[800px] px-6 -mt-20 relative">
          <m.div
            initial={FADE_UP_INITIAL}
            animate={FADE_UP_ANIMATE}
            transition={TRANSITION_BASE}
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm mb-6 transition-colors py-2"
            >
              <ArrowLeft size={14} /> Back to work
            </Link>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-accent-gold font-[family-name:var(--font-mono)]">{project.year}</span>
              <span className="text-xs text-text-tertiary">{project.client}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-text-primary">
              {project.title}
            </h1>
            <p className="mt-2 text-text-secondary text-lg">{project.subtitle}</p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-gold text-accent-gold text-xs font-medium hover:bg-accent-gold-dim transition-colors"
                >
                  <ExternalLink size={12} /> {project.liveLabel ?? 'App Store'}
                </a>
              )}
              {project.androidUrl && (
                <a
                  href={project.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-gold text-accent-gold text-xs font-medium hover:bg-accent-gold-dim transition-colors"
                >
                  <ExternalLink size={12} /> Play Store
                </a>
              )}
            </div>
          </m.div>

          {project.images.length > 0 && (
            <m.div
              className="mt-12"
              initial={FADE_UP_INITIAL}
              animate={FADE_UP_ANIMATE}
              transition={TRANSITION_DELAY_015}
            >
              <h2 className="text-sm font-medium text-accent-gold uppercase tracking-wider font-[family-name:var(--font-mono)] mb-6">
                Screenshots
              </h2>
              <ScreenshotCarousel images={project.images} title={project.title} platform={project.platform} />
            </m.div>
          )}

          <div className="mt-16 space-y-12">
            {sections.map((section) => (
              <CaseStudySection key={section.title} title={section.title} content={section.content} />
            ))}
          </div>

          <m.div
            className="mt-20 pt-8 border-t border-border"
            initial={FADE_IN_INITIAL}
            animate={FADE_IN_ANIMATE}
            transition={TRANSITION_DELAY_06}
          >
            <Link
              to={`/work/${nextProject.slug}`}
              className="group flex items-center justify-between no-underline"
            >
              <div>
                <span className="text-xs text-text-tertiary uppercase tracking-wider">Next project</span>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary group-hover:text-accent-gold transition-colors">
                  {nextProject.title}
                </h3>
              </div>
              <ArrowRight className="text-text-tertiary group-hover:text-accent-gold transition-colors" size={24} />
            </Link>
          </m.div>
        </div>
      </div>
    </PageTransition>
  )
}
