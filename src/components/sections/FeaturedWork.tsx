import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLocalizedFeaturedProjects } from '../../i18n/localizedContent'
import { ProjectPreview } from '../ui/DeviceFrame'

const HOME_FEATURED_COUNT = 3

const FADE_UP_INITIAL = { opacity: 0, y: 16 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const VIEWPORT = { once: true, amount: 0.15 } as const
const itemTransition = (i: number) => ({ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const })

export function FeaturedWork() {
  const { t } = useTranslation()
  const homeProjects = useLocalizedFeaturedProjects().slice(0, HOME_FEATURED_COUNT)

  return (
    <section className="px-6 py-16" aria-labelledby="featured-work-heading">
      <div className="mx-auto max-w-[1200px]">
        <m.div
          className="mb-10 max-w-2xl"
          initial={FADE_UP_INITIAL}
          whileInView={FADE_UP_VISIBLE}
          viewport={VIEWPORT}
          transition={itemTransition(0)}
        >
          <h2
            id="featured-work-heading"
            className="text-3xl font-bold text-text-primary font-[family-name:var(--font-display)] md:text-4xl"
          >
            {t('featuredWork.title')}
          </h2>
          <p className="mt-3 text-lg text-text-secondary">{t('featuredWork.subtitle')}</p>
        </m.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {homeProjects.map((project, i) => {
            const isClientWork = project.client !== 'Likwiid'
            const previewImage = project.previewImage ?? project.images[0]
            return (
              <m.div
                key={project.id}
                initial={FADE_UP_INITIAL}
                whileInView={FADE_UP_VISIBLE}
                viewport={VIEWPORT}
                transition={itemTransition(i)}
              >
                <Link to={`/work/${project.slug}`} className="group block h-full no-underline">
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-secondary transition-colors duration-200 group-hover:border-border-hover">
                    <div className="relative aspect-[4/3] w-full border-b border-border bg-bg-tertiary">
                      {previewImage && (
                        <ProjectPreview
                          src={previewImage}
                          alt={project.previewAlt ?? project.title}
                          platform={project.platform}
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className={`text-xs ${isClientWork ? 'font-medium text-text-primary' : 'text-text-tertiary'}`}>
                        {isClientWork
                          ? `${t('portfolio.clientWorkLabel')} · ${project.client}`
                          : t('portfolio.studioProductLabel')}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold leading-snug text-text-primary transition-colors font-[family-name:var(--font-display)] group-hover:text-accent-gold">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-snug text-text-secondary">{project.oneLiner ?? project.subtitle}</p>
                    </div>
                  </article>
                </Link>
              </m.div>
            )
          })}
        </div>

        <div className="mt-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 py-3 text-sm font-medium text-accent-gold transition-colors hover:text-accent-gold-hover"
          >
            {t('featuredWork.viewAll')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
