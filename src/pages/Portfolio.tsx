import { useState, useEffect, useMemo } from 'react'
import { m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ExternalLink, Star } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Badge } from '../components/ui/Badge'
import { projects, projectCategories } from '../data/projects'
import type { ProjectCategory } from '../types'

const INITIAL_VISIBLE_COUNT = 6
const LOAD_MORE_COUNT = 4
const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }

const CARD_HOVER = {
  scale: 1.01,
  y: -4,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  },
}

const projectTransitions = projects.map((_, i) => ({
  duration: 0.4,
  delay: i * 0.06,
  ease: [0.22, 1, 0.36, 1] as const,
}))

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All')
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)

  useEffect(() => { document.title = 'Work | Likwiid' }, [])

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

  return (
    <PageTransition>
      <div className="pt-20 pb-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <header className="mb-10 border-b border-border pb-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[780px]">
                <span className="text-xs text-accent-gold font-[family-name:var(--font-mono)] uppercase tracking-wider">
                  Selected work
                </span>
                <h1 className="mt-4 text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-text-primary leading-tight">
                  Work that turns messy operations into owned software
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">
                  Mobile apps, dashboards, backends, and private tools built around real workflows, not generic templates.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-gold px-4 py-3 text-sm font-semibold text-bg-primary transition-opacity hover:opacity-90"
                  >
                    Start a project <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent-gold hover:text-accent-gold"
                  >
                    See services
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm sm:min-w-[360px]">
                {[
                  ['12+', 'shipped builds'],
                  ['4', 'product surfaces'],
                  ['1', 'owner-led team'],
                ].map(([value, label]) => (
                  <div key={label} className="border-t border-border pt-3">
                    <div className="text-2xl font-semibold text-text-primary">{value}</div>
                    <div className="mt-1 text-text-tertiary">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat as ProjectCategory)}
                aria-pressed={activeFilter === cat}
                className={`px-4 py-3 text-sm rounded-full border transition-colors cursor-pointer ${
                  activeFilter === cat
                    ? 'border-accent-gold text-accent-gold bg-accent-gold-dim'
                    : 'border-border text-text-secondary hover:border-border-hover hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
            </div>
            <p className="text-sm text-text-tertiary">
              Showing {visibleProjects.length} of {filtered.length} projects
            </p>
          </div>

          <div className="space-y-4">
            {visibleProjects.map((project, i) => {
              const previewImage = project.previewImage ?? project.images[0]
              const previewAlt = project.previewAlt ?? `${project.title} project preview`
              const isPriorityImage = i === 0

              return (
              <m.div
                key={project.id}
                initial={FADE_UP_INITIAL}
                animate={FADE_UP_ANIMATE}
                transition={projectTransitions[i]}
                whileHover={CARD_HOVER}
              >
                <article className={`group rounded-lg border bg-bg-secondary transition-[border-color,box-shadow] duration-300 overflow-hidden hover:shadow-lg ${
                  project.spotlight
                    ? 'border-accent-gold/60 shadow-[0_12px_32px_rgba(10,129,163,0.10)] hover:border-accent-gold'
                    : 'border-border hover:border-border-hover'
                }`}>
                  <div className="flex flex-col md:flex-row">
                    <Link
                      to={`/work/${project.slug}`}
                      className="block no-underline w-full md:w-[280px] h-[180px] md:h-auto md:min-h-[160px] shrink-0"
                      aria-label={`View ${project.title} case study`}
                    >
                      {/* Preview */}
                      <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-bg-tertiary">
                        {previewImage && project.platform === 'mobile' ? (
                          <div className="bg-bg-tertiary rounded-xl p-[2px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                            <div className="rounded-lg overflow-hidden">
                              <img
                                src={previewImage}
                                alt={previewAlt}
                                className="h-[140px] md:h-[130px] w-auto block"
                                loading={isPriorityImage ? 'eager' : 'lazy'}
                                decoding="async"
                                fetchPriority={isPriorityImage ? 'high' : 'auto'}
                              />
                            </div>
                          </div>
                        ) : previewImage && project.platform === 'web' ? (
                          <div className="w-[90%]">
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
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-bg-primary/40">
                          <ArrowUpRight className="text-text-primary" size={20} />
                        </div>
                      </div>
                    </Link>

                    {/* Info */}
                    <div className="flex-1 p-5 flex flex-col justify-center min-w-0">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <div className="flex min-w-0 flex-wrap items-center gap-2">
                          <span className="text-xs text-accent-gold font-[family-name:var(--font-mono)]">{project.year}</span>
                          <span className="text-xs px-1.5 py-0.5 rounded bg-bg-tertiary text-text-tertiary">{project.category}</span>
                        </div>
                        {project.spotlight && (
                          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent-gold/40 bg-accent-gold-dim px-2.5 py-1 text-[11px] font-medium text-accent-gold shadow-sm">
                            <Star size={12} fill="currentColor" strokeWidth={1.6} />
                            Featured
                          </span>
                        )}
                      </div>
                      <Link to={`/work/${project.slug}`} className="block no-underline">
                        <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary group-hover:text-accent-gold transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-text-secondary text-sm leading-snug line-clamp-2">{project.subtitle}</p>
                        {project.businessResult && (
                          <p className="mt-2 text-sm leading-snug text-text-primary/90 line-clamp-2">
                            {project.businessResult}
                          </p>
                        )}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                      </Link>
                      {(project.liveUrl || project.androidUrl) && (
                        <div className="mt-3 flex flex-wrap gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-accent-gold hover:text-accent-gold/80 inline-flex items-center gap-1 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={10} /> {project.liveLabel ?? 'App Store'}
                            </a>
                          )}
                          {project.androidUrl && (
                            <a
                              href={project.androidUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-accent-gold hover:text-accent-gold/80 inline-flex items-center gap-1 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={10} /> Play Store
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </m.div>
              )
            })}
          </div>

          {visibleProjects.length > 0 && (
            <section className="my-10 border-y border-border py-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                    Have a workflow like this?
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
                    Send the messy version. We can turn it into a focused app, dashboard, internal tool, or backend your team actually owns.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-gold px-4 py-3 text-sm font-semibold text-bg-primary transition-opacity hover:opacity-90"
                  >
                    Start a project <ArrowRight size={16} />
                  </Link>
                  {hiddenCount > 0 && (
                    <button
                      type="button"
                      onClick={() => setVisibleCount((count) => Math.min(count + LOAD_MORE_COUNT, filtered.length))}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent-gold hover:text-accent-gold"
                    >
                      Show more work <span className="text-text-tertiary">({hiddenCount})</span>
                    </button>
                  )}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
