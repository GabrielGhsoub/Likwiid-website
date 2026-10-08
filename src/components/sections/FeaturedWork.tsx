import type { ReactNode } from 'react'
import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLocalizedFeaturedProjects } from '../../i18n/localizedContent'
import { ProjectPreview } from '../ui/DeviceFrame'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'
import { useRevealMotion } from '../../hooks/useRevealMotion'

const HOME_FEATURED_COUNT = 3

const VIEWPORT_AMOUNT = 0.15
const STAGGER_S = 0.06

function RevealItem({ index, className, children }: { index: number; className?: string; children: ReactNode }) {
  const reveal = useRevealMotion({ delay: index * STAGGER_S, amount: VIEWPORT_AMOUNT })
  return (
    <m.div className={className} {...reveal}>
      {children}
    </m.div>
  )
}

export function FeaturedWork() {
  const { t } = useTranslation()
  const localize = useLocalizedPath()
  const homeProjects = useLocalizedFeaturedProjects().slice(0, HOME_FEATURED_COUNT)

  return (
    <section className="px-6 py-16" aria-labelledby="featured-work-heading">
      <div className="mx-auto max-w-[1200px]">
        <RevealItem index={0} className="mb-10 max-w-2xl">
          <h2
            id="featured-work-heading"
            className="text-3xl font-bold text-text-primary font-[family-name:var(--font-display)] md:text-4xl"
          >
            {t('featuredWork.title')}
          </h2>
          <p className="mt-3 text-lg text-text-secondary">{t('featuredWork.subtitle')}</p>
        </RevealItem>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {homeProjects.map((project, i) => {
            const isClientWork = project.client !== 'Likwiid'
            const previewImage = project.previewImage ?? project.images[0]
            return (
              <RevealItem key={project.id} index={i}>
                <Link to={localize(`/work/${project.slug}`)} className="group block h-full no-underline">
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
              </RevealItem>
            )
          })}
        </div>

        <div className="mt-8">
          <Link
            to={localize('/work')}
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
