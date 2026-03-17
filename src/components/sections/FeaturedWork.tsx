import { m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { featuredProjects } from '../../data/projects'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'

const HIDDEN = {}
const FADE_UP_INITIAL = { opacity: 0, y: 16 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const PROJECT_TRANSITIONS = featuredProjects.map((_, i) => ({
  duration: 0.4,
  delay: i * 0.08,
}))

export function FeaturedWork() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="Featured work" subtitle="Selected projects we've built and shipped." />

        <div ref={ref} className="grid md:grid-cols-2 gap-4">
          {featuredProjects.map((project, i) => (
            <m.div
              key={project.id}
              initial={FADE_UP_INITIAL}
              animate={isVisible ? FADE_UP_VISIBLE : HIDDEN}
              transition={PROJECT_TRANSITIONS[i]}
            >
              <Link to={`/work/${project.slug}`} className="group block no-underline h-full">
                <div className="relative rounded-lg border border-border overflow-hidden bg-bg-secondary hover:border-border-hover transition-colors h-full">
                  <div
                    className="h-44 w-full relative overflow-hidden flex items-center justify-center"
                    style={{ background: project.gradient }}
                  >
                    {project.images.length > 0 && project.platform === 'mobile' ? (
                      <div className="bg-bg-tertiary rounded-[1rem] p-[2px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                        <div className="rounded-[0.9rem] overflow-hidden">
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="h-36 w-auto block"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ) : project.images.length > 0 && project.platform === 'web' ? (
                      <div className="w-[85%]">
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
                    <div className="absolute inset-0 z-[1] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-bg-primary/40">
                      <ArrowUpRight className="text-text-primary" size={18} />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] text-accent-gold font-[family-name:var(--font-mono)]">{project.year}</span>
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-bg-tertiary text-text-tertiary">{project.category}</span>
                    </div>
                    <h3 className="text-base font-semibold font-[family-name:var(--font-display)] text-text-primary group-hover:text-accent-gold transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 text-text-secondary text-sm leading-snug line-clamp-1">{project.subtitle}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/work"
            className="text-accent-gold hover:text-accent-gold/80 font-medium text-sm inline-flex items-center gap-2 transition-colors"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
