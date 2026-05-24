import { useState, useEffect } from 'react'
import { m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink, Star } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Badge } from '../components/ui/Badge'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects, projectCategories } from '../data/projects'
import type { ProjectCategory } from '../types'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const EMPTY = {}

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
  const { ref, isVisible } = useScrollAnimation()

  useEffect(() => { document.title = 'Work | Likwiid' }, [])

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <PageTransition>
      <div className="pt-20 pb-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading as="h1" title="Work" subtitle="Projects we've designed, built, and shipped." />

          <div className="flex flex-wrap gap-2 mb-8">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat as ProjectCategory)}
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

          <div ref={ref} className="space-y-4">
            {filtered.map((project, i) => (
              <m.div
                key={project.id}
                initial={FADE_UP_INITIAL}
                animate={isVisible ? FADE_UP_ANIMATE : EMPTY}
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
                        {project.spotlight && (
                          <div className="absolute left-3 top-3 z-[2] inline-flex items-center gap-1.5 rounded-full border border-accent-gold/60 bg-bg-secondary/95 px-2.5 py-1 text-[11px] font-medium text-accent-gold shadow-sm backdrop-blur">
                            <Star size={12} fill="currentColor" strokeWidth={1.6} />
                            Featured
                          </div>
                        )}
                        {project.images.length > 0 && project.platform === 'mobile' ? (
                          <div className="bg-bg-tertiary rounded-xl p-[2px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                            <div className="rounded-lg overflow-hidden">
                              <img
                                src={project.images[0]}
                                alt={project.title}
                                className="h-[140px] md:h-[130px] w-auto block"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ) : project.images.length > 0 && project.platform === 'web' ? (
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
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-auto block"
                                loading="lazy"
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
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-xs text-accent-gold font-[family-name:var(--font-mono)]">{project.year}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded bg-bg-tertiary text-text-tertiary">{project.category}</span>
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
                      <Link to={`/work/${project.slug}`} className="block no-underline">
                        <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary group-hover:text-accent-gold transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-text-secondary text-sm leading-snug line-clamp-2">{project.subtitle}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                      </Link>
                    </div>
                  </div>
                </article>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
