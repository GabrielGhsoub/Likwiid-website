import { useMemo, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { useParams, Link } from 'react-router-dom'
import NotFound from './NotFound'
import { useTranslation } from 'react-i18next'
import { m, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, ChevronDown, Check } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Badge } from '../components/ui/Badge'
import { ScreenshotCarousel } from '../components/ui/ScreenshotCarousel'
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon'
import { useLocalizedProjects } from '../i18n/localizedContent'
import { SOCIAL } from '../utils/constants'

const FADE_UP_INITIAL = { opacity: 0, y: 16 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const REVEAL_VIEWPORT = { once: true, amount: 0.1 } as const
const TRANSITION_BASE = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }

const METRIC_COLS: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
}

// Strip versions and noise so hero tags stay high level
// (e.g. "Expo SDK 54" -> "Expo", "TypeScript 6 (strict)" -> "TypeScript")
const simplifyTech = (t: string) =>
  t
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s+REST API$/i, '')
    .replace(/\s+API$/i, '')
    .replace(/\s+MV3$/i, '')
    .replace(/\s+SDK\b/gi, '')
    .replace(/\s+v?\d+(\.\d+)*\b/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim()

// --- Shared building blocks -------------------------------------------------

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 text-xl font-semibold text-text-primary font-[family-name:var(--font-display)] md:text-2xl">
      {children}
    </h2>
  )
}

function SubTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
      {children}
    </h3>
  )
}

// Fades in once when scrolled into view. whileInView (not an observer-gated state flag)
// so content is never left invisible.
function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div
      className={className}
      initial={FADE_UP_INITIAL}
      whileInView={FADE_UP_VISIBLE}
      viewport={REVEAL_VIEWPORT}
      transition={TRANSITION_BASE}
    >
      {children}
    </m.div>
  )
}

export default function CaseStudy() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const projects = useLocalizedProjects()
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  // Challenge, Approach, Outcome as a compact 3 step flow
  const steps = useMemo(() => {
    if (!project) return []
    return [
      { label: t('caseStudy.stepChallenge'), content: project.challenge },
      { label: t('caseStudy.stepApproach'), content: project.approach },
      { label: t('caseStudy.stepOutcome'), content: project.results },
    ].filter((s) => s.content && s.content.trim().length > 0)
  }, [project, t])

  const facts = useMemo(() => {
    if (!project) return []
    const isClientWork = project.client !== 'Likwiid'
    return [
      isClientWork
        ? { label: t('caseStudy.factClient'), value: project.client }
        : { label: t('caseStudy.factType'), value: t('portfolio.studioProductLabel') },
      { label: t('caseStudy.factRole'), value: project.role },
      { label: t('caseStudy.factYear'), value: project.year },
      {
        label: t('caseStudy.factPlatform'),
        value: project.platformLabel ?? (project.platform === 'mobile' ? t('caseStudy.platformMobile') : t('caseStudy.platformWeb')),
      },
    ].filter((f): f is { label: string; value: string } => Boolean(f.value))
  }, [project, t])

  const [techOpen, setTechOpen] = useState(false)

  useEffect(() => {
    // Matches the prerendered <title> for case study routes.
    document.title = project ? `${project.title}: Case Study | Likwiid` : 'Likwiid'
  }, [project])

  if (!project) return <NotFound />

  const lead = project.oneLiner ?? project.subtitle
  const metrics = (project.metrics ?? []).slice(0, 4)
  const images = project.images.slice(0, 4)
  const heroTags = [...new Set(project.techStack.map(simplifyTech))].slice(0, 4)
  const keyFeatures = project.keyFeatures ?? []
  const architecture = project.architecture ?? []
  const highlights = project.highlights ?? []
  const hasTechDetails = project.techStack.length > 0 || architecture.length > 0 || highlights.length > 0
  const isClientWork = project.client !== 'Likwiid'
  const companion = project.companion
  // Companion copy is translatable under projectsData.<slug>.companion; English is the source.
  const companionTitle = companion
    ? t(`projectsData.${project.slug}.companion.title`, { defaultValue: companion.title })
    : ''
  const companionSummary = companion
    ? t(`projectsData.${project.slug}.companion.summary`, { defaultValue: companion.summary })
    : ''

  const storeLinkClass =
    'inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-text-primary transition-colors hover:border-border-hover'

  return (
    <PageTransition key={slug}>
      <div className="px-6 pb-16 pt-28">
        <div className="relative mx-auto max-w-[820px]">
          {/* ---------- Back link ---------- */}
          <Link
            to="/work"
            className="mb-8 inline-flex w-fit items-center gap-2 py-1 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft size={14} /> {t('caseStudy.backToWork')}
          </Link>

          {/* ---------- Hero ---------- */}
          <m.div initial={FADE_UP_INITIAL} animate={FADE_UP_VISIBLE} transition={TRANSITION_BASE}>
            <h1 className="text-3xl font-bold leading-[1.08] tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-5xl">
              {project.title}
            </h1>
            {lead && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">{lead}</p>}

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {heroTags.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={storeLinkClass}>
                  <ExternalLink size={12} /> {project.liveLabel ?? t('caseStudy.appStore')}
                </a>
              )}
              {project.androidUrl && (
                <a href={project.androidUrl} target="_blank" rel="noopener noreferrer" className={storeLinkClass}>
                  <ExternalLink size={12} /> {t('caseStudy.playStore')}
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

            {/* ---------- Metrics ---------- */}
            {metrics.length > 0 && (
              <dl className={`mt-8 grid grid-cols-2 gap-x-4 gap-y-6 ${METRIC_COLS[Math.max(metrics.length, 2)] ?? 'sm:grid-cols-4'}`}>
                {metrics.map((metric) => (
                  <div key={metric.label} title={metric.basis} className="flex flex-col-reverse">
                    <dt className="mt-1 text-sm leading-snug text-text-secondary">{metric.label}</dt>
                    <dd className="text-2xl font-bold leading-tight tabular-nums text-text-primary font-[family-name:var(--font-display)] md:text-3xl">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </m.div>

          {/* ---------- Screenshots ---------- */}
          {images.length > 0 && (
            <m.div
              className="mt-14"
              initial={FADE_UP_INITIAL}
              animate={FADE_UP_VISIBLE}
              transition={{ ...TRANSITION_BASE, delay: 0.1 }}
            >
              <ScreenshotCarousel images={images} title={project.title} platform={project.platform} />
            </m.div>
          )}

          {/* ---------- Overview ---------- */}
          {project.description && (
            <Reveal className="mt-16">
              <SectionTitle>{t('caseStudy.overview')}</SectionTitle>
              <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">{project.description}</p>
            </Reveal>
          )}

          {/* ---------- Challenge, Approach, Outcome ---------- */}
          {steps.length > 0 && (
            <Reveal className="mt-12">
              <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
                {steps.map((step) => (
                  <div key={step.label} className="flex flex-col bg-bg-secondary p-5">
                    <SubTitle>{step.label}</SubTitle>
                    <p className="text-sm leading-relaxed text-text-secondary">{step.content}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* ---------- Key features ---------- */}
          {keyFeatures.length > 0 && (
            <Reveal className="mt-16">
              <SectionTitle>{t('caseStudy.keyFeatures')}</SectionTitle>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {keyFeatures.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3 rounded-lg border border-border bg-bg-secondary p-4">
                    <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-accent-gold" aria-hidden="true" />
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold leading-snug text-text-primary font-[family-name:var(--font-display)]">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="mt-1 text-sm leading-snug text-text-secondary">{feature.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {/* ---------- Companion product (e.g. admin portal) ---------- */}
          {companion && companion.images.length > 0 && (
            <Reveal className="mt-16">
              <SectionTitle>{companionTitle}</SectionTitle>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-text-secondary">{companionSummary}</p>
              <ScreenshotCarousel
                images={companion.images}
                title={`${project.title}: ${companionTitle}`}
                platform={companion.platform}
              />
            </Reveal>
          )}

          {/* ---------- Business impact (client work only) ---------- */}
          {isClientWork && project.businessResult && (
            <Reveal className="mt-16">
              <div className="rounded-xl border border-border bg-bg-secondary px-6 py-7 md:px-8">
                <h2 className="text-xs font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
                  {t('caseStudy.businessImpact')}
                </h2>
                <p className="mt-3 text-xl font-semibold leading-snug text-text-primary font-[family-name:var(--font-display)] md:text-2xl">
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
                aria-controls="technical-details"
                className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-border bg-bg-secondary px-5 py-4 text-left transition-colors hover:border-border-hover"
              >
                <span className="flex flex-col gap-0.5">
                  <span className="font-semibold text-text-primary font-[family-name:var(--font-display)]">
                    {t('caseStudy.technicalDetails')}
                  </span>
                  <span className="text-sm text-text-tertiary">{t('caseStudy.technicalDetailsSub')}</span>
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-text-tertiary transition-transform duration-300 ${techOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {techOpen && (
                  <m.div
                    id="technical-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-10 px-1 pt-8">
                      {project.techStack.length > 0 && (
                        <div>
                          <SubTitle>{t('caseStudy.techStack')}</SubTitle>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech}>{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {architecture.length > 0 && (
                        <div>
                          <SubTitle>{t('caseStudy.underTheHood')}</SubTitle>
                          <dl className="divide-y divide-border border-y border-border">
                            {architecture.map((note) => (
                              <div key={note.area} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                                <dt className="font-medium text-text-primary font-[family-name:var(--font-display)]">{note.area}</dt>
                                {note.detail && <dd className="text-sm leading-relaxed text-text-secondary">{note.detail}</dd>}
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}

                      {highlights.length > 0 && (
                        <div>
                          <SubTitle>{t('caseStudy.notableEngineering')}</SubTitle>
                          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {highlights.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-tertiary" aria-hidden="true" />
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

          {/* ---------- Contact CTA ---------- */}
          <Reveal className="mt-20">
            <section
              aria-labelledby="similar-project-heading"
              className="rounded-xl border border-border bg-bg-secondary px-6 py-8 md:px-8"
            >
              <h2
                id="similar-project-heading"
                className="text-2xl font-semibold text-text-primary font-[family-name:var(--font-display)]"
              >
                {t('caseStudy.similarProject')}
              </h2>
              <p className="mt-2 max-w-xl text-text-secondary">{t('caseStudy.similarProjectBody')}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent-gold px-5 py-2.5 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90"
                >
                  {t('caseStudy.startProject')}
                  <ArrowRight size={15} />
                </Link>
                <a
                  href={SOCIAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary no-underline transition-colors hover:border-border-hover"
                >
                  <WhatsAppIcon size={16} />
                  {t('caseStudy.whatsapp')}
                </a>
              </div>
            </section>
          </Reveal>

          {/* ---------- Next project ---------- */}
          {nextProject && nextProject.slug !== project.slug && (
            <div className="mt-16 border-t border-border pt-8">
              <Link to={`/work/${nextProject.slug}`} className="group flex items-center justify-between no-underline">
                <div>
                  <span className="text-xs uppercase tracking-wider text-text-tertiary">{t('caseStudy.nextProject')}</span>
                  <h2 className="text-xl font-semibold text-text-primary transition-colors font-[family-name:var(--font-display)] group-hover:text-accent-gold">
                    {nextProject.title}
                  </h2>
                </div>
                <ArrowRight className="text-text-tertiary transition-colors group-hover:text-accent-gold" size={24} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
