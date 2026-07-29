import { useState, useEffect } from 'react'
import { m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, ExternalLink, Star, Plus } from 'lucide-react'
import type { TFunction } from 'i18next'
import { PageTransition } from '../components/layout/PageTransition'
import { Badge } from '../components/ui/Badge'
import { HospitalityCaseStudy } from '../components/sections/HospitalityCaseStudy'
import { useLocalizedProjects } from '../i18n/localizedContent'
import type { Project, ProjectStatus } from '../types'

// Studio section starts collapsed to keep the page curated; client work always shows in full.
const STUDIO_INITIAL_COUNT = 5

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const CARD_VIEWPORT = { once: true, margin: '-40px' } as const

const CARD_HOVER = {
  y: -4,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 22,
  },
}

const cardTransition = (i: number) => ({
  duration: 0.4,
  delay: Math.min(i, 3) * 0.06,
  ease: [0.22, 1, 0.36, 1] as const,
})

// Only claims a diligent buyer can verify: live products, total builds, platforms.
const stats: ReadonlyArray<readonly [string, string]> = [
  ['3', 'statLiveProducts'],
  ['12', 'statBuiltEndToEnd'],
  ['4', 'statPlatformsShipped'],
]

const STATUS_STYLES: Record<ProjectStatus, string> = {
  live: 'border-accent-gold/40 bg-accent-gold-dim text-accent-gold',
  shipped: 'border-border text-text-secondary',
  inDevelopment: 'border-border text-text-tertiary',
}

function StatusPill({ status, t }: { status: ProjectStatus; t: TFunction }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${STATUS_STYLES[status]}`}
    >
      {t(`portfolio.status${status.charAt(0).toUpperCase()}${status.slice(1)}`)}
    </span>
  )
}

function ProjectCard({ project, index, priority }: { project: Project; index: number; priority: boolean }) {
  const { t } = useTranslation()
  const previewImage = project.previewImage ?? project.images[0]
  const previewAlt = project.previewAlt ?? t('portfolio.previewAlt', { title: project.title })
  const isClientWork = project.client !== 'Likwiid'
  const platformLabel =
    project.platformLabel ?? t(project.platform === 'mobile' ? 'caseStudy.platformMobile' : 'caseStudy.platformWeb')

  return (
    <m.div
      initial={FADE_UP_INITIAL}
      whileInView={FADE_UP_VISIBLE}
      viewport={CARD_VIEWPORT}
      transition={cardTransition(index)}
      whileHover={CARD_HOVER}
    >
      <article
        className={`group relative rounded-xl border bg-bg-secondary transition-[border-color,box-shadow] duration-300 overflow-hidden ${
          project.spotlight
            ? 'border-accent-gold/50 shadow-[0_12px_32px_rgba(6,182,212,0.10)] hover:border-accent-gold hover:shadow-[0_18px_44px_rgba(6,182,212,0.16)]'
            : 'border-border hover:border-border-hover hover:shadow-lg'
        }`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Preview */}
          <Link
            to={`/work/${project.slug}`}
            className="block no-underline w-full md:w-[300px] h-[200px] md:h-auto md:min-h-[200px] shrink-0"
            aria-label={t('portfolio.viewCaseStudyAria', { title: project.title })}
          >
            <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-bg-tertiary border-b border-border md:border-b-0 md:border-r">
              {previewImage && project.platform === 'mobile' ? (
                <div className="rounded-xl p-[2px] shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={previewImage}
                      alt={previewAlt}
                      className="h-[170px] w-auto block"
                      loading={priority ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={priority ? 'high' : 'auto'}
                    />
                  </div>
                </div>
              ) : previewImage && project.platform === 'web' ? (
                <div className="w-[88%] transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <div className="rounded-md overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                    <div className="bg-bg-tertiary px-2 py-1 flex items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <div className="w-[6px] h-[6px] rounded-full bg-[#ff5f57]" />
                        <div className="w-[6px] h-[6px] rounded-full bg-[#febc2e]" />
                        <div className="w-[6px] h-[6px] rounded-full bg-[#28c840]" />
                      </div>
                      <div className="flex-1 bg-bg-secondary rounded px-2 py-0.5">
                        <div className="w-[40%] h-[4px] rounded bg-border" />
                      </div>
                    </div>
                    <img
                      src={previewImage}
                      alt={previewAlt}
                      className="w-full h-auto block"
                      loading={priority ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={priority ? 'high' : 'auto'}
                    />
                  </div>
                </div>
              ) : null}
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-bg-primary/70 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                <ArrowUpRight className="text-text-primary" size={16} />
              </div>
            </div>
          </Link>

          {/* Info */}
          <div className="flex flex-1 flex-col p-5 md:p-6 min-w-0">
            <div className="mb-2.5 flex items-start justify-between gap-3">
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <span className="text-xs text-accent-gold font-[family-name:var(--font-mono)]">{project.year}</span>
                <span className="h-1 w-1 rounded-full bg-text-tertiary/50" aria-hidden="true" />
                <span className="text-xs text-text-tertiary">{platformLabel}</span>
                <span className="h-1 w-1 rounded-full bg-text-tertiary/50" aria-hidden="true" />
                {/* Attribution: the single most-checked trust fact on a work page. */}
                <span className={`text-xs ${isClientWork ? 'font-medium text-text-primary' : 'text-text-tertiary'}`}>
                  {isClientWork
                    ? `${t('portfolio.clientWorkLabel')} · ${project.client}`
                    : t('portfolio.studioProductLabel')}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <StatusPill status={project.status} t={t} />
                {project.spotlight && (
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent-gold/40 bg-accent-gold-dim px-2.5 py-1 text-[11px] font-medium text-accent-gold">
                    <Star size={12} fill="currentColor" strokeWidth={1.6} />
                    {t('portfolio.featured')}
                  </span>
                )}
              </div>
            </div>

            <Link to={`/work/${project.slug}`} className="block no-underline">
              <h3 className="text-lg md:text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary group-hover:text-accent-gold transition-colors leading-snug">
                {project.title}
              </h3>
              {/* One outcome line per card: what it is, for whom, strongest concrete fact. */}
              <p className="mt-1.5 text-text-secondary text-sm leading-snug line-clamp-2">
                {project.oneLiner ?? project.subtitle}
              </p>
            </Link>

            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
              {project.techStack.length > 4 && (
                <span className="inline-flex items-center px-2 py-1 text-xs text-text-tertiary">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* Footer: external proof links + case study link */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
              <div className="flex flex-wrap items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent-gold hover:text-accent-gold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={12} /> {project.liveLabel ?? t('portfolio.appStore')}
                  </a>
                )}
                {project.androidUrl && (
                  <a
                    href={project.androidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent-gold hover:text-accent-gold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={12} /> {t('portfolio.playStore')}
                  </a>
                )}
              </div>
              <Link
                to={`/work/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-gold no-underline transition-colors hover:text-accent-gold-hover"
              >
                {t('portfolio.viewCaseStudy')}
                <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </m.div>
  )
}

function SectionHeadingRow({ label }: { label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <h2 className="text-sm font-medium text-accent-gold uppercase tracking-[0.2em] font-[family-name:var(--font-mono)]">
        {label}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}

type WorkFilter = 'all' | 'client' | 'studio'

export default function Portfolio() {
  const { t } = useTranslation()
  const [showAllStudio, setShowAllStudio] = useState(false)
  const [filter, setFilter] = useState<WorkFilter>('all')

  useEffect(() => { document.title = t('portfolio.documentTitle') }, [t])

  const localizedProjects = useLocalizedProjects()
  const clientProjects = localizedProjects.filter((p) => p.client !== 'Likwiid')
  const studioProjects = localizedProjects.filter((p) => p.client === 'Likwiid')
  // When the studio filter is explicitly chosen the visitor wants to browse it all,
  // so the collapsed view only applies in the combined "all" view.
  const studioExpanded = showAllStudio || filter === 'studio'
  const visibleStudio = studioExpanded ? studioProjects : studioProjects.slice(0, STUDIO_INITIAL_COUNT)
  const hiddenStudioCount = studioProjects.length - visibleStudio.length

  const filters: ReadonlyArray<readonly [WorkFilter, string]> = [
    ['all', t('portfolio.filterAll')],
    ['client', t('portfolio.clientWorkHeading')],
    ['studio', t('portfolio.studioHeading')],
  ]

  return (
    <PageTransition>
      <div className="pt-20 pb-20 px-6">
        <div className="mx-auto max-w-[1200px]">
          {/* ---------- Header ---------- */}
          <header className="mb-12 border-b border-border pb-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[760px]">
                <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-text-primary leading-[1.08] tracking-tight">
                  {t('portfolio.title')}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
                  {t('portfolio.subtitle')}
                </p>
              </div>

              <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:min-w-[380px] sm:grid-cols-3">
                {stats.map(([value, label]) => (
                  <div key={label} className="bg-bg-secondary px-4 py-5">
                    <dt className="sr-only">{t(`portfolio.${label}`)}</dt>
                    <dd>
                      <span className="block text-2xl font-semibold font-[family-name:var(--font-display)] text-text-primary md:text-3xl">
                        {value}
                      </span>
                      <span className="mt-1 block text-xs leading-snug text-text-tertiary">{t(`portfolio.${label}`)}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </header>

          {/* ---------- Small hotels, guesthouses & tour operators ---------- */}
          <section
            aria-labelledby="hospitality-heading"
            className="mb-16 rounded-xl border border-accent-gold/30 bg-accent-gold-dim/40 p-6 md:p-8"
          >
            <h2
              id="hospitality-heading"
              className="text-xl md:text-2xl font-semibold font-[family-name:var(--font-display)] text-text-primary"
            >
              {t('hospitality.heading')}
            </h2>
            <p className="mt-3 max-w-3xl text-text-secondary leading-relaxed">
              {t('hospitality.body')}
            </p>
            <HospitalityCaseStudy />
            <p className="mt-4">
              <Link to="/direct" className="text-accent-gold hover:underline font-medium">
                {t('hospitality.directLink')}
              </Link>
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent-gold px-5 py-2.5 text-sm font-semibold text-bg-primary no-underline transition-opacity hover:opacity-90"
            >
              {t('hospitality.cta')}
              <ArrowUpRight size={15} />
            </Link>
          </section>

          {/* ---------- Filter ---------- */}
          <div role="group" aria-label={t('portfolio.filterLabel')} className="mb-10 flex flex-wrap gap-2">
            {filters.map(([value, label]) => {
              const isActive = filter === value
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFilter(value)}
                  aria-pressed={isActive}
                  className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'border-accent-gold bg-accent-gold-dim text-accent-gold'
                      : 'border-border text-text-secondary hover:border-border-hover hover:text-text-primary'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>

          {/* ---------- Client work ---------- */}
          {filter !== 'studio' && (
            <section aria-labelledby="client-work-heading">
              <div id="client-work-heading">
                <SectionHeadingRow label={t('portfolio.clientWorkHeading')} />
              </div>
              <div className="space-y-4">
                {clientProjects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} priority={i === 0} />
                ))}
              </div>
            </section>
          )}

          {/* ---------- Studio products ---------- */}
          {filter !== 'client' && (
            <section aria-labelledby="studio-heading" className={filter === 'studio' ? '' : 'mt-16'}>
              <div id="studio-heading">
                <SectionHeadingRow label={t('portfolio.studioHeading')} />
              </div>
              <p className="mb-6 -mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
                {t('portfolio.studioIntro')}
              </p>
              <div className="space-y-4">
                {visibleStudio.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} priority={false} />
                ))}
              </div>

              {hiddenStudioCount > 0 && (
                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAllStudio(true)}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-bg-secondary px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent-gold hover:text-accent-gold"
                  >
                    <Plus size={16} />
                    {t('portfolio.showAllStudio')}
                    <span className="text-text-tertiary">({hiddenStudioCount})</span>
                  </button>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
