import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'
import { ProjectPreview } from '../ui/DeviceFrame'
import { useLocalizedProjects } from '../../i18n/localizedContent'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'
import { umamiAttrs } from '../../utils/analytics'

const APPS = [
  { slug: 'parallel', lineKey: 'home.appsParallelLine' },
  { slug: 'basemile', lineKey: 'home.appsBasemileLine' },
  { slug: 'plateclimb', lineKey: 'home.appsPlateclimbLine' },
] as const

// Lower on Home, clearly labelled: the mobile apps, with current iPhone screens and store links.
export function AppsSection() {
  const { t } = useTranslation()
  const localize = useLocalizedPath()
  const projects = useLocalizedProjects()

  return (
    <section className="px-6 py-12 md:py-16" aria-labelledby="apps-heading">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-2xl">
          <h2
            id="apps-heading"
            className="text-3xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-4xl"
          >
            {t('home.appsTitle')}
          </h2>
          <p className="mt-3 text-lg text-text-secondary">{t('home.appsBody')}</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {APPS.map(({ slug, lineKey }) => {
            const project = projects.find((p) => p.slug === slug)
            if (!project) return null
            const preview = project.previewImage ?? project.images[0]
            return (
              <Reveal key={slug}>
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-secondary">
                  <div className="relative aspect-[4/3] w-full border-b border-border bg-bg-tertiary">
                    {preview && <ProjectPreview src={preview} alt={project.previewAlt ?? project.title} platform="mobile" />}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold leading-snug text-text-primary font-[family-name:var(--font-display)]">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-snug text-text-secondary">{t(lineKey)}</p>
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                      {project.iosUrl && (
                        <a
                          href={project.iosUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center text-sm font-medium text-accent-gold no-underline hover:underline"
                          {...umamiAttrs('store-click', { app: slug, store: 'ios', location: 'home' })}
                        >
                          {t('portfolio.appStore')}
                        </a>
                      )}
                      <Link
                        to={localize(`/work/${slug}`)}
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-text-primary no-underline hover:text-accent-gold"
                      >
                        {t('home.appsCase')}
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
        <Link
          to={localize('/software')}
          className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-gold no-underline hover:underline"
        >
          {t('home.appsAll')}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
