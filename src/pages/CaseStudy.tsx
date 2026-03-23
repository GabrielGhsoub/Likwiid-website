import { useMemo, useState, useCallback } from 'react'
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
const TRANSITION_BASE = { duration: 0.5 }
const TRANSITION_DELAY_015 = { duration: 0.5, delay: 0.15 }
const TRANSITION_DELAY_06 = { duration: 0.5, delay: 0.6 }

const LIQUID_REVEAL = {
  hidden: {
    clipPath: 'polygon(0% 100%, 15% 100%, 30% 100%, 50% 100%, 70% 100%, 85% 100%, 100% 100%, 100% 100%, 0% 100%)',
    opacity: 0,
    y: 20,
  },
  visible: {
    clipPath: 'polygon(0% 0%, 15% 2%, 30% 0%, 50% 3%, 70% 0%, 85% 2%, 100% 0%, 100% 100%, 0% 100%)',
    opacity: 1,
    y: 0,
    transition: {
      clipPath: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
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

function ScreenshotCarousel({ images, title, platform }: { images: string[]; title: string; platform: 'mobile' | 'web' }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const Frame = platform === 'mobile' ? PhoneFrame : BrowserFrame

  const paginate = useCallback((dir: number) => {
    setDirection(dir)
    setCurrent(prev => (prev + dir + images.length) % images.length)
  }, [images.length])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full flex items-center justify-center">
        {images.length > 1 && (
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-10 p-3 rounded-full bg-bg-secondary/80 border border-border text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-colors cursor-pointer"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div className={`overflow-hidden ${platform === 'mobile' ? 'w-[200px]' : 'w-full max-w-[600px]'}`}>
          <AnimatePresence mode="wait" custom={direction}>
            <m.div
              key={current}
              custom={direction}
              variants={SLIDE_VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              transition={SLIDE_TRANSITION}
            >
              <Frame>
                <img
                  src={images[current]}
                  alt={`${title} screenshot ${current + 1}`}
                  className={platform === 'mobile' ? 'w-[200px] h-auto block' : 'w-full h-auto block'}
                  loading="lazy"
                  draggable={false}
                />
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
        <div className="flex items-center gap-0">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className="p-[18px] cursor-pointer"
              aria-label={`Go to screenshot ${i + 1}`}
            >
              <div className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-accent-gold w-6' : 'bg-border hover:bg-text-tertiary w-2'}`} />
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

  if (!project) return <Navigate to="/work" replace />

  return (
    <PageTransition key={slug}>
      <main className="pt-14 pb-6 md:pb-16">
        <div
          className="h-40 md:h-52 w-full relative"
          style={{ background: project.gradient }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-bg-primary" />
        </div>

        <div className="mx-auto max-w-[800px] px-6 -mt-20 relative">
          <m.div
            initial={FADE_UP_INITIAL}
            animate={FADE_UP_ANIMATE}
            transition={TRANSITION_BASE}
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm mb-6 transition-colors"
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
                  <ExternalLink size={12} /> App Store
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
      </main>
    </PageTransition>
  )
}
