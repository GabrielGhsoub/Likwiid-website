import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'
import { ProjectPreview } from '../ui/DeviceFrame'
import { useLocalizedProjects } from '../../i18n/localizedContent'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'
import { umamiAttrs } from '../../utils/analytics'

const APPS = [
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
        {/* One swipeable row on a phone, so the apps do not push the contact block screens down. */}
        <div className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {APPS.map(({ slug, lineKey }) => {
            const project = projects.find((p) => p.slug === slug)
            if (!project) return null
            const preview = project.previewImage ?? project.images[0]
            return (
              <Reveal key={slug} className="w-[78%] shrink-0 snap-start md:w-auto">
                {/* The whole card opens the app's page: the title link stretches over it. The App Store
                    link sits above that layer, so it still goes straight to the store. */}
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-secondary transition-colors duration-200 hover:border-border-hover">
                  <div className="relative aspect-[4/3] w-full border-b border-border bg-bg-tertiary">
                    {preview && <ProjectPreview src={preview} alt={project.previewAlt ?? project.title} platform="mobile" />}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold leading-snug text-text-primary font-[family-name:var(--font-display)]">
                      <Link
                        to={localize(`/work/${slug}`)}
                        className="no-underline transition-colors group-hover:text-accent-gold after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-xl focus-visible:after:outline-2 focus-visible:after:outline-accent-gold"
                        {...umamiAttrs('case-study-open', { project: slug, location: 'home-apps' })}
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-snug text-text-secondary">{t(lineKey)}</p>
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                      {project.iosUrl && (
                        <a
                          href={project.iosUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-10 inline-flex min-h-11 items-center text-sm font-medium text-accent-gold no-underline hover:underline"
                          {...umamiAttrs('store-click', { app: slug, store: 'ios', location: 'home' })}
                        >
                          {t('portfolio.appStore')}
                        </a>
                      )}
                      {/* A cue only: the stretched title link already makes the card a link. */}
                      <span
                        aria-hidden="true"
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-text-primary transition-colors group-hover:text-accent-gold"
                      >
                        {t('home.appsCase')}
                        <ArrowRight size={14} />
                      </span>
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
