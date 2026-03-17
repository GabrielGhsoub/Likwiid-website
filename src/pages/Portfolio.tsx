import { useState } from 'react'
import { m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Badge } from '../components/ui/Badge'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects, projectCategories } from '../data/projects'
import type { ProjectCategory } from '../types'

const FADE_UP_INITIAL = { opacity: 0, y: 12 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const EMPTY = {}

const makeProjectTransition = (i: number) => ({
  duration: 0.3,
  delay: i * 0.05,
})

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All')
  const { ref, isVisible } = useScrollAnimation()

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <PageTransition>
      <main className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-[1000px]">
          <SectionHeading title="Work" subtitle="Projects we've designed, built, and shipped." />

          <div className="flex flex-wrap gap-2 mb-8">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat as ProjectCategory)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors cursor-pointer ${
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
                transition={makeProjectTransition(i)}
              >
                <Link to={`/work/${project.slug}`} className="group block no-underline">
                  <div className="rounded-lg border border-border bg-bg-secondary hover:border-border-hover transition-colors overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      {/* Preview */}
                      <div
                        className="w-full md:w-[280px] h-[180px] md:h-auto md:min-h-[160px] shrink-0 relative overflow-hidden flex items-center justify-center"
                        style={{ background: project.gradient }}
                      >
                        {project.images.length > 0 && project.platform === 'mobile' ? (
                          <div className="bg-[#1a1a1d] rounded-[1rem] p-[2px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                            <div className="rounded-[0.9rem] overflow-hidden">
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
                              <div className="bg-[#1e1e22] px-2 py-1 flex items-center gap-1.5">
                                <div className="flex items-center gap-1">
                                  <div className="w-[6px] h-[6px] rounded-full bg-[#ff5f57]" />
                                  <div className="w-[6px] h-[6px] rounded-full bg-[#febc2e]" />
                                  <div className="w-[6px] h-[6px] rounded-full bg-[#28c840]" />
                                </div>
                                <div className="flex-1 bg-[#111113] rounded px-2 py-0.5">
                                  <div className="w-[40%] h-[4px] rounded bg-[#2a2a2e]" />
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

                      {/* Info */}
                      <div className="flex-1 p-5 flex flex-col justify-center min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[11px] text-accent-gold font-[family-name:var(--font-mono)]">{project.year}</span>
                          <span className="text-[11px] px-1.5 py-0.5 rounded bg-bg-tertiary text-text-tertiary">{project.category}</span>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-accent-gold hover:text-accent-gold/80 inline-flex items-center gap-1 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={10} /> App Store
                            </a>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary group-hover:text-accent-gold transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-text-secondary text-sm leading-snug line-clamp-2">{project.subtitle}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
