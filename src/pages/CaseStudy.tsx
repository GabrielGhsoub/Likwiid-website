import { useMemo, useState, useCallback, useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Badge } from '../components/ui/Badge'
import { PhoneFrame, BrowserFrame } from '../components/ui/DeviceFrame'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/projects'
import type { ProjectMetric } from '../types'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const TRANSITION_BASE = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_DELAY_015 = { duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }

const LIQUID_REVEAL = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.5 },
      y: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
}

const METRIC_COLS: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
}

const SLIDE_VARIANTS = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
}
const SLIDE_TRANSITION = { type: 'spring' as const, stiffness: 300, damping: 30 }
const WHILE_DRAG = { cursor: 'grabbing' as const }

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// --- Shared building blocks -------------------------------------------------

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-wider text-accent-gold font-[family-name:var(--font-mono)]">
      <span className="h-px w-6 bg-accent-gold/50" aria-hidden="true" />
      {children}
    </h2>
  )
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
  return (
    <div ref={ref}>
      <m.div
        variants={LIQUID_REVEAL}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className={className}
      >
        {children}
      </m.div>
    </div>
  )
}

// --- Animated metric counter ------------------------------------------------

function parseMetric(value: string) {
  const match = /^(\d[\d,]*(?:\.\d+)?)(.*)$/.exec(value.trim())
  if (!match) return { num: null as number | null, decimals: 0, hasComma: false, suffix: value }
  const raw = match[1]
  return {
    num: parseFloat(raw.replace(/,/g, '')),
    decimals: raw.includes('.') ? raw.split('.')[1].length : 0,
    hasComma: raw.includes(','),
    suffix: match[2],
  }
}

function CountUpMetric({ metric, active }: { metric: ProjectMetric; active: boolean }) {
  const parsed = useMemo(() => parseMetric(metric.value), [metric.value])
  // Static for non-numeric / reduced-motion; otherwise animate up from 0 once visible.
  const animates = parsed.num !== null && !prefersReducedMotion()
  const [display, setDisplay] = useState(parsed.num === null ? 0 : animates ? 0 : parsed.num)

  useEffect(() => {
    if (!animates || !active || parsed.num === null) return
    const target = parsed.num
    const duration = 1100
    let raf = 0
    let startTs = 0
    const step = (ts: number) => {
      if (!startTs) startTs = ts
      const t = Math.min((ts - startTs) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(target * eased)
      if (t < 1) raf = requestAnimationFrame(step)
      else setDisplay(target)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [parsed.num, active, animates])

  let rendered: string
  if (parsed.num === null) {
    rendered = metric.value
  } else {
    const n = parsed.decimals > 0 ? display.toFixed(parsed.decimals) : Math.round(display).toString()
    const withSep = parsed.hasComma ? Number(n).toLocaleString('en-US') : n
    rendered = withSep + parsed.suffix
  }

  return (
    <div className="text-center" title={metric.basis}>
      <div className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-accent-gold leading-tight tabular-nums">
        {rendered}
      </div>
      <div className="mt-2 text-xs md:text-sm leading-snug text-text-secondary">{metric.label}</div>
    </div>
  )
}

function MetricsBand({ metrics }: { metrics: ProjectMetric[] }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  const colClass = METRIC_COLS[Math.min(Math.max(metrics.length, 2), 5)] ?? 'sm:grid-cols-4'
  return (
    <div ref={ref} className="mt-10 border-y border-border py-8">
      <div className={`grid grid-cols-2 gap-x-4 gap-y-8 ${colClass}`}>
        {metrics.map((metric) => (
          <CountUpMetric key={metric.label} metric={metric} active={isVisible} />
        ))}
      </div>
    </div>
  )
}

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

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const gridRef = useRef<HTMLDivElement>(null)
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  // Challenge → Approach → Outcome as a compact 3-step flow
  const steps = useMemo(() => {
    if (!project) return []
    return [
      { label: 'Challenge', content: project.challenge },
      { label: 'Approach', content: project.approach },
      { label: 'Outcome', content: project.results },
    ].filter((s) => s.content && s.content.trim().length > 0)
  }, [project])

  const facts = useMemo(() => {
    if (!project) return []
    return [
      { label: 'Role', value: project.role },
      { label: 'Timeline', value: project.timeline },
      { label: 'Year', value: project.year },
      { label: 'Client', value: project.client },
      { label: 'Platform', value: project.platformLabel ?? (project.platform === 'mobile' ? 'Mobile app' : 'Web app') },
    ].filter((f): f is { label: string; value: string } => Boolean(f.value))
  }, [project])

  useEffect(() => {
    document.title = project ? `${project.title} | Likwiid` : 'Likwiid'
  }, [project])

  if (!project) return <Navigate to="/work" replace />

  const lead = project.oneLiner ?? project.subtitle
  const metrics = (project.metrics ?? []).slice(0, 5)
  const keyFeatures = project.keyFeatures ?? []
  const architecture = project.architecture ?? []
  const highlights = project.highlights ?? []

  return (
    <PageTransition key={slug}>
      <div className="pt-20 pb-16 px-6">
        <div className="mx-auto max-w-[820px] relative">
          {/* ---------- Back link ---------- */}
          <Link
            to="/work"
            className="mb-8 inline-flex w-fit items-center gap-2 py-1 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft size={14} /> Back to work
          </Link>

          {/* ---------- Hero ---------- */}
          <m.div
            initial={FADE_UP_INITIAL}
            animate={FADE_UP_ANIMATE}
            transition={TRANSITION_BASE}
          >
            <Eyebrow>{project.category} case study</Eyebrow>

            <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-text-primary leading-[1.08] tracking-tight">
              {project.title}
            </h1>
            {lead && (
              <p className="mt-4 max-w-2xl text-lg md:text-xl leading-relaxed text-text-secondary">
                {lead}
              </p>
            )}

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

            {/* ---------- Meta strip ---------- */}
            {facts.length > 0 && (
              <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-y border-border py-5">
                {facts.map((f) => (
                  <div key={f.label} className="min-w-0">
                    <dt className="text-[11px] uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm text-text-primary">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </m.div>

          {/* ---------- Metrics band (animated) ---------- */}
          {metrics.length > 0 && <MetricsBand metrics={metrics} />}

          {/* ---------- Screenshots ---------- */}
          {project.images.length > 0 && (
            <m.div
              className="mt-14"
              initial={FADE_UP_INITIAL}
              animate={FADE_UP_ANIMATE}
              transition={TRANSITION_DELAY_015}
            >
              <Eyebrow>Screenshots</Eyebrow>
              <ScreenshotCarousel images={project.images} title={project.title} platform={project.platform} />
            </m.div>
          )}

          {/* ---------- Overview ---------- */}
          {project.description && (
            <Reveal className="mt-16">
              <Eyebrow>Overview</Eyebrow>
              <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">{project.description}</p>
            </Reveal>
          )}

          {/* ---------- Challenge → Approach → Outcome ---------- */}
          {steps.length > 0 && (
            <Reveal className="mt-14">
              <div ref={gridRef} className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex flex-col bg-bg-secondary p-5">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-accent-gold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
                        {step.label}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary">{step.content}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* ---------- Key features ---------- */}
          {keyFeatures.length > 0 && (
            <Reveal className="mt-16">
              <Eyebrow>Key features</Eyebrow>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {keyFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3 rounded-lg border border-border bg-bg-secondary/50 p-4 transition-colors hover:border-border-hover"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-gold-dim text-accent-gold">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold font-[family-name:var(--font-display)] text-text-primary leading-snug">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="mt-1 text-sm leading-snug text-text-secondary">{feature.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* ---------- Architecture ---------- */}
          {architecture.length > 0 && (
            <Reveal className="mt-16">
              <Eyebrow>Under the hood</Eyebrow>
              <dl className="divide-y divide-border border-y border-border">
                {architecture.map((note, i) => (
                  <div key={note.area} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                    <dt className="flex items-center gap-2.5 font-medium font-[family-name:var(--font-display)] text-text-primary">
                      <span className="font-[family-name:var(--font-mono)] text-xs text-accent-gold/70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {note.area}
                    </dt>
                    {note.detail && (
                      <dd className="text-sm leading-relaxed text-text-secondary">{note.detail}</dd>
                    )}
                  </div>
                ))}
              </dl>
            </Reveal>
          )}

          {/* ---------- Highlights ---------- */}
          {highlights.length > 0 && (
            <Reveal className="mt-16">
              <Eyebrow>Notable engineering</Eyebrow>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {/* ---------- Business impact ---------- */}
          {project.businessResult && (
            <Reveal className="mt-16">
              <div className="rounded-xl border border-accent-gold/30 bg-accent-gold-dim px-6 py-7 md:px-8">
                <span className="text-xs font-medium uppercase tracking-wider text-accent-gold font-[family-name:var(--font-mono)]">
                  Business impact
                </span>
                <p className="mt-3 text-xl md:text-2xl font-semibold font-[family-name:var(--font-display)] text-text-primary leading-snug">
                  {project.businessResult}
                </p>
              </div>
            </Reveal>
          )}

          {/* ---------- Next project ---------- */}
          <m.div className="mt-20 pt-8 border-t border-border">
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
