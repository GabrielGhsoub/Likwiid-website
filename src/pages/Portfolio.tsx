import { useState, useEffect } from 'react'
import { m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { TFunction } from 'i18next'
import { PageTransition } from '../components/layout/PageTransition'
import { Badge } from '../components/ui/Badge'
import { ProjectPreview } from '../components/ui/DeviceFrame'
import { HospitalityCaseStudy } from '../components/sections/HospitalityCaseStudy'
import { useLocalizedProjects } from '../i18n/localizedContent'
import type { Project, ProjectStatus } from '../types'
import { umamiAttrs } from '../utils/analytics'

const FADE_UP_INITIAL = { opacity: 0, y: 16 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const CARD_VIEWPORT = { once: true, amount: 0.1 } as const
const CARD_TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }

const STATUS_STYLES: Record<ProjectStatus, string> = {
  live: 'border-accent-gold/40 text-accent-gold',
  shipped: 'border-border text-text-secondary',
  inDevelopment: 'border-border text-text-tertiary',
}

const STORE_LINK_CLASS =
  'inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary'

function StatusPill({ status, t }: { status: ProjectStatus; t: TFunction }) {
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${STATUS_STYLES[status]}`}>
      {t(`portfolio.status${status.charAt(0).toUpperCase()}${status.slice(1)}`)}
    </span>
  )
}

function ProjectCard({ project, priority }: { project: Project; priority: boolean }) {
  const { t } = useTranslation()
  const previewImage = project.previewImage ?? project.images[0]
  const previewAlt = project.previewAlt ?? t('portfolio.previewAlt', { title: project.title })
  const isClientWork = project.client !== 'Likwiid'

  return (
    <m.article
      initial={FADE_UP_INITIAL}
      whileInView={FADE_UP_VISIBLE}
      viewport={CARD_VIEWPORT}
      transition={CARD_TRANSITION}
      className="group overflow-hidden rounded-xl border border-border bg-bg-secondary transition-colors duration-200 hover:border-border-hover"
    >
      <div className="flex flex-col md:flex-row">
        {/* Preview */}
        <Link
          to={`/work/${project.slug}`}
          className="relative block aspect-[3/2] w-full shrink-0 border-b border-border bg-bg-tertiary no-underline md:aspect-auto md:min-h-[280px] md:w-[320px] md:border-b-0 md:border-r"
          aria-label={t('portfolio.viewCaseStudyAria', { title: project.title })}
          tabIndex={-1}
        >
          {previewImage && (
            <ProjectPreview src={previewImage} alt={previewAlt} platform={project.platform} priority={priority} />
          )}
        </Link>

        {/* Info */}
        <div className="flex min-w-0 flex-1 flex-col p-5 md:p-6">
          <div className="mb-2.5 flex items-start justify-between gap-3">
            {/* Attribution: the single most-checked trust fact on a work page. */}
            <span className={`text-xs ${isClientWork ? 'font-medium text-text-primary' : 'text-text-tertiary'}`}>
              {isClientWork ? `${t('portfolio.clientWorkLabel')} · ${project.client}` : t('portfolio.studioProductLabel')}
            </span>
            <StatusPill status={project.status} t={t} />
          </div>

          <Link to={`/work/${project.slug}`} className="block no-underline">
            <h3 className="text-lg font-semibold leading-snug text-text-primary font-[family-name:var(--font-display)] md:text-xl">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm leading-snug text-text-secondary">{project.oneLiner ?? project.subtitle}</p>
          </Link>

          <div className="mb-5 mt-3.5 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={STORE_LINK_CLASS}
                  {...umamiAttrs('store-link', { store: project.liveLabel ? 'web' : 'ios', project: project.slug, location: 'work' })}
                >
                  <ExternalLink size={12} /> {project.liveLabel ?? t('portfolio.appStore')}
                </a>
              )}
              {project.androidUrl && (
                <a
                  href={project.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={STORE_LINK_CLASS}
                  {...umamiAttrs('store-link', { store: 'android', project: project.slug, location: 'work' })}
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
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </m.article>
  )
}

function SectionHeadingRow({ id, label }: { id: string; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <h2 id={id} className="text-xl font-semibold text-text-primary font-[family-name:var(--font-display)]">
        {label}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}

type WorkFilter = 'all' | 'client' | 'studio'

export default function Portfolio() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<WorkFilter>('all')

  useEffect(() => { document.title = t('portfolio.documentTitle') }, [t])

  const localizedProjects = useLocalizedProjects()
  const clientProjects = localizedProjects.filter((p) => p.client !== 'Likwiid')
  const studioProjects = localizedProjects.filter((p) => p.client === 'Likwiid')

  const filters: ReadonlyArray<readonly [WorkFilter, string]> = [
    ['all', t('portfolio.filterAll')],
    ['client', t('portfolio.clientWorkHeading')],
    ['studio', t('portfolio.studioHeading')],
  ]

  return (
    <PageTransition>
      <div className="px-6 pb-20 pt-28">
        <div className="mx-auto max-w-[1200px]">
          {/* ---------- Header ---------- */}
          <header className="mb-10 max-w-[760px]">
            <h1 className="text-3xl font-bold leading-[1.08] tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-5xl">
              {t('portfolio.title')}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">{t('portfolio.subtitle')}</p>
          </header>

          {/* ---------- Small hotels, guesthouses & tour operators ---------- */}
          <section aria-labelledby="hospitality-heading" className="mb-12 rounded-xl border border-border p-5 md:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2
                  id="hospitality-heading"
                  className="text-lg font-semibold text-text-primary font-[family-name:var(--font-display)] md:text-xl"
                >
                  {t('hospitality.heading')}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-base">
                  {t('portfolio.hospitalityBody')}
                </p>
                <Link to="/direct" className="mt-2 inline-block text-sm font-medium text-accent-gold hover:underline">
                  {t('hospitality.directLink')}
                </Link>
              </div>
              <Link
                to="/contact"
                className="inline-flex min-h-11 shrink-0 items-center gap-1.5 self-start rounded-full bg-accent-gold px-5 py-2.5 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90 md:self-center"
              >
                {t('hospitality.cta')}
                <ArrowRight size={15} />
              </Link>
            </div>
            <HospitalityCaseStudy />
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
                  className={`inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-accent-gold text-accent-gold'
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
              <SectionHeadingRow id="client-work-heading" label={t('portfolio.clientWorkHeading')} />
              <div className="space-y-4">
                {clientProjects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} priority={i === 0} />
                ))}
              </div>
            </section>
          )}

          {/* ---------- Studio products ---------- */}
          {filter !== 'client' && (
            <section aria-labelledby="studio-heading" className={filter === 'studio' ? '' : 'mt-16'}>
              <SectionHeadingRow id="studio-heading" label={t('portfolio.studioHeading')} />
              <p className="-mt-2 mb-6 max-w-2xl text-sm leading-relaxed text-text-secondary">{t('portfolio.studioIntro')}</p>
              <div className="space-y-4">
                {studioProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} priority={false} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
