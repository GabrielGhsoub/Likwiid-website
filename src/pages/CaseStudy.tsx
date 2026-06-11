import { useMemo, useState, useEffect, useLayoutEffect } from 'react'
import type { ReactNode } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, ChevronDown, Check } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Badge } from '../components/ui/Badge'
import { ScreenshotCarousel } from '../components/ui/ScreenshotCarousel'
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

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Strip versions / noise so hero tags stay high-level
// (e.g. "Expo SDK 54" -> "Expo", "TypeScript 6 (strict)" -> "TypeScript")
const simplifyTech = (t: string) =>
  t
    .replace(/\s*\([^)]*\)/g, '') // drop parentheticals like "(strict)"
    .replace(/\s+REST API$/i, '')
    .replace(/\s+API$/i, '')
    .replace(/\s+MV3$/i, '')
    .replace(/\s+SDK\b/gi, '') // "Expo SDK 54" -> "Expo  54"
    .replace(/\s+v?\d+(\.\d+)*\b/gi, '') // strip version tokens anywhere
    .replace(/\s{2,}/g, ' ')
    .trim()

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

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
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

  const [techOpen, setTechOpen] = useState(false)

  useEffect(() => {
    document.title = project ? `${project.title} | Likwiid` : 'Likwiid'
  }, [project])

  // Each case study (incl. "Next project") should open at the top, not keep prior scroll.
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) return <Navigate to="/work" replace />

  const lead = project.oneLiner ?? project.subtitle
  const metrics = (project.metrics ?? []).slice(0, 5)
  const images = project.images.slice(0, 4)
  const heroTags = [...new Set(project.techStack.map(simplifyTech))].slice(0, 5)
  const keyFeatures = project.keyFeatures ?? []
  const architecture = project.architecture ?? []
  const highlights = project.highlights ?? []
  const hasTechDetails = project.techStack.length > 0 || architecture.length > 0 || highlights.length > 0

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
            <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-text-primary leading-[1.08] tracking-tight">
              {project.title}
            </h1>
            {lead && (
              <p className="mt-4 max-w-2xl text-lg md:text-xl leading-relaxed text-text-secondary">
                {lead}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {heroTags.map((tech) => (
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
          {images.length > 0 && (
            <m.div
              className="mt-14"
              initial={FADE_UP_INITIAL}
              animate={FADE_UP_ANIMATE}
              transition={TRANSITION_DELAY_015}
            >
              <ScreenshotCarousel images={images} title={project.title} platform={project.platform} />
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
              <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
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

          {/* ---------- Technical details (collapsed) ---------- */}
          {hasTechDetails && (
            <Reveal className="mt-16">
              <button
                type="button"
                onClick={() => setTechOpen((o) => !o)}
                aria-expanded={techOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-border bg-bg-secondary/50 px-5 py-4 text-left transition-colors hover:border-border-hover"
              >
                <span className="flex flex-col gap-0.5">
                  <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wider text-accent-gold">
                    Technical details
                  </span>
                  <span className="text-sm text-text-tertiary">Stack, architecture &amp; engineering notes</span>
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-text-tertiary transition-transform duration-300 ${techOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {techOpen && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-10 px-1 pt-8">
                      {project.techStack.length > 0 && (
                        <div>
                          <Eyebrow>Tech stack</Eyebrow>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech}>{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {architecture.length > 0 && (
                        <div>
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
                        </div>
                      )}

                      {highlights.length > 0 && (
                        <div>
                          <Eyebrow>Notable engineering</Eyebrow>
                          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {highlights.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold" aria-hidden="true" />
                                <span className="text-sm leading-relaxed text-text-secondary">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
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
