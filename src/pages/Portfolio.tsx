import { useState, useEffect, useMemo, useRef } from 'react'
import { m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, ExternalLink, Star, Plus } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Badge } from '../components/ui/Badge'
import { projects, projectCategories } from '../data/projects'
import type { ProjectCategory } from '../types'

const INITIAL_VISIBLE_COUNT = 6
const LOAD_MORE_COUNT = 4
const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }

const CARD_HOVER = {
  y: -4,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 22,
  },
}

const projectTransitions = projects.map((_, i) => ({
  duration: 0.4,
  delay: i * 0.06,
  ease: [0.22, 1, 0.36, 1] as const,
}))

const categoryCounts = projectCategories.reduce<Record<string, number>>((acc, cat) => {
  acc[cat] = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length
  return acc
}, {})

const stats: ReadonlyArray<readonly [string, string]> = [
  ['12+', 'statShippedBuilds'],
  ['4', 'statProductSurfaces'],
  ['1', 'statOwnerLedTeam'],
]

export default function Portfolio() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All')
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => { document.title = t('portfolio.documentTitle') }, [t])

  const handleFilterChange = (category: ProjectCategory) => {
    setActiveFilter(category)
    setVisibleCount(INITIAL_VISIBLE_COUNT)
  }

  const filtered = useMemo(
    () => activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  )
  const visibleProjects = filtered.slice(0, visibleCount)
  const hiddenCount = Math.max(filtered.length - visibleProjects.length, 0)
  const isExpanded = visibleProjects.length > INITIAL_VISIBLE_COUNT && hiddenCount === 0
  const progress = filtered.length > 0 ? Math.round((visibleProjects.length / filtered.length) * 100) : 0

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT)
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <PageTransition>
      <div className="pt-20 pb-20 px-6">
        <div className="mx-auto max-w-[1200px]">
          {/* ---------- Header ---------- */}
          <header className="mb-12 border-b border-border pb-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[760px]">
                <span className="inline-flex items-center gap-2.5 text-xs text-accent-gold font-[family-name:var(--font-mono)] uppercase tracking-wider">
                  <span className="h-px w-8 bg-accent-gold/50" aria-hidden="true" />
                  {t('portfolio.eyebrow')}
                </span>
                <h1 className="mt-5 text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-text-primary leading-[1.08] tracking-tight">
                  {t('portfolio.title')}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
                  {t('portfolio.subtitle')}
                </p>
              </div>

              <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border sm:min-w-[380px]">
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

          {/* ---------- Filter bar ---------- */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div role="tablist" aria-label={t('portfolio.filterTablistLabel')} className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => {
                const isActive = activeFilter === cat
                return (
                  <button
                    key={cat}
                    role="tab"
                    onClick={() => handleFilterChange(cat as ProjectCategory)}
                    aria-selected={isActive}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'border-accent-gold bg-accent-gold-dim text-accent-gold'
                        : 'border-border text-text-secondary hover:border-border-hover hover:text-text-primary'
                    }`}
                  >
                    {cat}
                    <span className={`text-xs tabular-nums ${isActive ? 'text-accent-gold/70' : 'text-text-tertiary'}`}>
                      {categoryCounts[cat]}
                    </span>
                  </button>
                )
              })}
            </div>
            <p className="text-sm text-text-tertiary tabular-nums shrink-0">
              {t('portfolio.projectsCount', { visible: visibleProjects.length, total: filtered.length })}
            </p>
          </div>

          {/* ---------- Project grid ---------- */}
          <div ref={gridRef} className="scroll-mt-24 space-y-4">
            {visibleProjects.map((project, i) => {
              const previewImage = project.previewImage ?? project.images[0]
              const previewAlt = project.previewAlt ?? t('portfolio.previewAlt', { title: project.title })
              const isPriorityImage = i === 0

              return (
                <m.div
                  key={project.id}
                  initial={FADE_UP_INITIAL}
                  animate={FADE_UP_ANIMATE}
                  transition={projectTransitions[i]}
                  whileHover={CARD_HOVER}
                >
                  <article className={`group relative rounded-xl border bg-bg-secondary transition-[border-color,box-shadow] duration-300 overflow-hidden ${
                    project.spotlight
                      ? 'border-accent-gold/50 shadow-[0_12px_32px_rgba(6,182,212,0.10)] hover:border-accent-gold hover:shadow-[0_18px_44px_rgba(6,182,212,0.16)]'
                      : 'border-border hover:border-border-hover hover:shadow-lg'
                  }`}>
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
                                  className="h-[150px] md:h-[150px] w-auto block"
                                  loading={isPriorityImage ? 'eager' : 'lazy'}
                                  decoding="async"
                                  fetchPriority={isPriorityImage ? 'high' : 'auto'}
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
                                  loading={isPriorityImage ? 'eager' : 'lazy'}
                                  decoding="async"
                                  fetchPriority={isPriorityImage ? 'high' : 'auto'}
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
                            <span className="text-xs text-text-tertiary">{project.category}</span>
                          </div>
                          {project.spotlight && (
                            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent-gold/40 bg-accent-gold-dim px-2.5 py-1 text-[11px] font-medium text-accent-gold">
                              <Star size={12} fill="currentColor" strokeWidth={1.6} />
                              {t('portfolio.featured')}
                            </span>
                          )}
                        </div>

                        <Link to={`/work/${project.slug}`} className="block no-underline">
                          <h3 className="text-lg md:text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary group-hover:text-accent-gold transition-colors leading-snug">
                            {project.title}
                          </h3>
                          <p className="mt-1.5 text-text-secondary text-sm leading-snug line-clamp-2">{project.subtitle}</p>
                          {project.businessResult && (
                            <p className="mt-2.5 text-sm leading-snug text-text-primary/90 line-clamp-2">
                              {project.businessResult}
                            </p>
                          )}
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

                        {/* Footer: external links + case study link */}
                        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                          <div className="flex flex-wrap items-center gap-4">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-gold"
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
                                className="inline-flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-gold"
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
            })}
          </div>

          {/* ---------- Pagination ---------- */}
          {filtered.length > INITIAL_VISIBLE_COUNT && (
            <div className="mt-12 flex flex-col items-center gap-5">
              <div className="w-full max-w-[260px]">
                <div className="h-1 w-full overflow-hidden rounded-full bg-border" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="h-full rounded-full bg-accent-gold transition-[width] duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="mt-3 text-center text-xs text-text-tertiary tabular-nums">
                  {t('portfolio.showingCount', { visible: visibleProjects.length, total: filtered.length })}
                </p>
              </div>

              {hiddenCount > 0 ? (
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => Math.min(count + LOAD_MORE_COUNT, filtered.length))}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-bg-secondary px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent-gold hover:text-accent-gold"
                >
                  <Plus size={16} />
                  {t('portfolio.loadMore')}
                  <span className="text-text-tertiary">({Math.min(LOAD_MORE_COUNT, hiddenCount)})</span>
                </button>
              ) : isExpanded ? (
                <button
                  type="button"
                  onClick={handleShowLess}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-transparent px-6 py-3 text-sm font-medium text-text-tertiary transition-colors hover:text-text-primary"
                >
                  {t('portfolio.showLess')}
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
