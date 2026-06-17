import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { featuredProjects } from '../../data/projects'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { ImageWithLoading } from '../ui/ImageWithLoading'

const HOME_FEATURED_COUNT = 6
const homeProjects = featuredProjects.slice(0, HOME_FEATURED_COUNT)

const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const PROJECT_ITEM = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const PROJECT_HOVER = {
  y: -4,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 22,
  },
}

export function FeaturedWork() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title={t('featuredWork.title')} subtitle={t('featuredWork.subtitle')} />

        <m.div
          ref={ref}
          className="grid md:grid-cols-2 gap-6"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {homeProjects.map((project) => (
            <m.div
              key={project.id}
              variants={PROJECT_ITEM}
              whileHover={PROJECT_HOVER}
            >
              <Link to={`/work/${project.slug}`} className="group block no-underline h-full">
                <div className={`relative flex h-full flex-col overflow-hidden rounded-xl border bg-bg-secondary transition-[border-color,box-shadow] duration-300 ${
                  project.spotlight
                    ? 'border-accent-gold/50 shadow-[0_12px_32px_rgba(6,182,212,0.10)] hover:border-accent-gold hover:shadow-[0_18px_44px_rgba(6,182,212,0.16)]'
                    : 'border-border hover:border-border-hover hover:shadow-lg'
                }`}>
                  <div
                    className="relative flex h-48 w-full items-center justify-center overflow-hidden"
                    style={{ background: project.gradient }}
                  >
                    {project.images.length > 0 && project.platform === 'mobile' ? (
                      <div className="rounded-xl p-[2px] shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                        <div className="rounded-lg overflow-hidden">
                          <ImageWithLoading
                            src={project.images[0]}
                            alt={project.previewAlt ?? project.title}
                            className="h-36 w-auto block"
                          />
                        </div>
                      </div>
                    ) : project.images.length > 0 && project.platform === 'web' ? (
                      <div className="w-[85%] transition-transform duration-500 ease-out group-hover:scale-[1.03]">
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
                          <ImageWithLoading
                            src={project.images[0]}
                            alt={project.previewAlt ?? project.title}
                            className="w-full h-auto block"
                          />
                        </div>
                      </div>
                    ) : null}

                    {project.spotlight && (
                      <span className="absolute left-3 top-3 z-[1] inline-flex items-center gap-1.5 rounded-full border border-accent-gold/40 bg-bg-primary/70 px-2.5 py-1 text-[11px] font-medium text-accent-gold backdrop-blur-sm">
                        <Star size={12} fill="currentColor" strokeWidth={1.6} />
                        {t('featuredWork.featuredBadge')}
                      </span>
                    )}
                    <div className="absolute right-3 top-3 z-[1] flex h-8 w-8 items-center justify-center rounded-full bg-bg-primary/70 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                      <ArrowUpRight className="text-text-primary" size={16} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs text-accent-gold font-[family-name:var(--font-mono)]">{project.year}</span>
                      <span className="h-1 w-1 rounded-full bg-text-tertiary/50" aria-hidden="true" />
                      <span className="text-xs text-text-tertiary">{project.category}</span>
                    </div>
                    <h3 className="text-base font-semibold font-[family-name:var(--font-display)] text-text-primary group-hover:text-accent-gold transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-text-secondary text-sm leading-snug line-clamp-1">{project.subtitle}</p>
                    {project.businessResult && (
                      <p className="mt-2 text-sm leading-snug text-text-primary/90 line-clamp-2">
                        {project.businessResult}
                      </p>
                    )}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </m.div>

        <div className="mt-10 text-center">
          <Link
            to="/work"
            className="text-accent-gold hover:text-accent-gold/80 font-medium text-sm inline-flex items-center gap-2 transition-colors py-3"
          >
            {t('featuredWork.viewAllProjects')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
