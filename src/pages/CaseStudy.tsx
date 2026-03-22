import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { m } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Badge } from '../components/ui/Badge'
import { PhoneFrame, BrowserFrame } from '../components/ui/DeviceFrame'
import { projects } from '../data/projects'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const FADE_IN_INITIAL = { opacity: 0 }
const FADE_IN_ANIMATE = { opacity: 1 }
const TRANSITION_BASE = { duration: 0.5 }
const TRANSITION_DELAY_015 = { duration: 0.5, delay: 0.15 }
const TRANSITION_DELAY_06 = { duration: 0.5, delay: 0.6 }

const makeImageTransition = (i: number) => ({
  duration: 0.4,
  delay: 0.2 + i * 0.08,
})

const SECTION_TRANSITIONS = [
  { duration: 0.5, delay: 0.2 },
  { duration: 0.5, delay: 0.3 },
  { duration: 0.5, delay: 0.4 },
  { duration: 0.5, delay: 0.5 },
]

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  const sections = useMemo(() => {
    if (!project) return []
    return [
      { title: 'Overview', content: project.description },
      { title: 'Challenge', content: project.challenge },
      { title: 'Approach', content: project.approach },
      { title: 'Results', content: project.results },
    ]
  }, [project])

  if (!project) return <Navigate to="/work" replace />

  return (
    <PageTransition>
      <main className="pt-14 pb-16">
        <div
          className="h-40 md:h-52 w-full relative"
          style={{ background: project.gradient }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary" />
        </div>

        <div className="mx-auto max-w-[800px] px-6 -mt-20 relative">
          <m.div
            initial={FADE_UP_INITIAL}
            animate={FADE_UP_ANIMATE}
            transition={TRANSITION_BASE}
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={14} /> Back to work
            </Link>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-accent-gold font-[family-name:var(--font-mono)]">{project.year}</span>
              <span className="text-xs text-text-tertiary">{project.client}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-text-primary">
              {project.title}
            </h1>
            <p className="mt-2 text-text-secondary text-lg">{project.subtitle}</p>

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
                  <ExternalLink size={12} /> App Store
                </a>
              )}
            </div>
          </m.div>

          {project.images.length > 0 && (
            <m.div
              className="mt-12"
              initial={FADE_UP_INITIAL}
              animate={FADE_UP_ANIMATE}
              transition={TRANSITION_DELAY_015}
            >
              <h2 className="text-sm font-medium text-accent-gold uppercase tracking-wider font-[family-name:var(--font-mono)] mb-6">
                Screenshots
              </h2>
              {project.platform === 'mobile' ? (
                <div className="flex flex-wrap justify-center gap-6">
                  {project.images.map((img, i) => (
                    <m.div
                      key={img}
                      initial={FADE_UP_INITIAL}
                      animate={FADE_UP_ANIMATE}
                      transition={makeImageTransition(i)}
                    >
                      <PhoneFrame>
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="w-[180px] h-auto block"
                          loading="lazy"
                        />
                      </PhoneFrame>
                    </m.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {project.images.map((img, i) => (
                    <m.div
                      key={img}
                      initial={FADE_UP_INITIAL}
                      animate={FADE_UP_ANIMATE}
                      transition={makeImageTransition(i)}
                    >
                      <BrowserFrame>
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="w-full h-auto block"
                          loading="lazy"
                        />
                      </BrowserFrame>
                    </m.div>
                  ))}
                </div>
              )}
            </m.div>
          )}

          <div className="mt-16 space-y-12">
            {sections.map((section, i) => (
              <m.section
                key={section.title}
                initial={FADE_UP_INITIAL}
                animate={FADE_UP_ANIMATE}
                transition={SECTION_TRANSITIONS[i]}
              >
                <h2 className="text-sm font-medium text-accent-gold uppercase tracking-wider font-[family-name:var(--font-mono)] mb-3">
                  {section.title}
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg">{section.content}</p>
              </m.section>
            ))}
          </div>

          <m.div
            className="mt-20 pt-8 border-t border-border"
            initial={FADE_IN_INITIAL}
            animate={FADE_IN_ANIMATE}
            transition={TRANSITION_DELAY_06}
          >
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
      </main>
    </PageTransition>
  )
}
