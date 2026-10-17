import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Github, Scale } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Badge } from '../components/ui/Badge'
import { OPEN_SOURCE_APPS, OPEN_SOURCE_FEATURE_COUNT, OPEN_SOURCE_LICENSE_URL, type OpenSourceApp } from '../data/openSource'
import { useLocalizedProjects } from '../i18n/localizedContent'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import { umamiAttrs } from '../utils/analytics'

// The open source page (/open-source/, /pt/open-source/, ...): the studio's stance on free
// software, one section per app published under the GPL, and a call to contribute. App names
// and repository links come from src/data/openSource.ts, copy from the openSource namespace.

const PRINCIPLES = [1, 2, 3] as const
const FEATURES = Array.from({ length: OPEN_SOURCE_FEATURE_COUNT }, (_, i) => i + 1)

const REPO_BUTTON_CLASS =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-accent-gold bg-accent-gold px-5 py-2.5 text-base font-medium text-text-inverse no-underline transition-colors duration-200 hover:border-accent-gold-hover hover:bg-accent-gold-hover font-[family-name:var(--font-display)]'
const SECONDARY_BUTTON_CLASS =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-base font-medium text-text-primary no-underline transition-colors duration-200 hover:border-border-hover font-[family-name:var(--font-display)]'

// Shown when an app has no screenshots yet: a phone-shaped frame carrying the app name.
function ScreenPlaceholder({ name }: { name: string }) {
  return (
    <div className="mx-auto w-[200px] sm:w-[220px]" aria-hidden="true">
      <div className="rounded-[2rem] border border-border bg-bg-secondary p-1.5">
        <div className="relative flex aspect-[9/19.5] flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.6rem] bg-bg-tertiary">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-accent-gold-dim to-transparent" />
          <span className="relative text-2xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)]">
            {name}
          </span>
          <span className="relative h-px w-10 bg-accent-gold" />
          <span className="relative text-[11px] uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
            GPL-3.0
          </span>
        </div>
      </div>
    </div>
  )
}

function Screenshots({ app }: { app: OpenSourceApp }) {
  const { t } = useTranslation()
  if (app.screenshots.length === 0) return <ScreenPlaceholder name={app.name} />
  const shots = app.screenshots.slice(0, 3)
  return (
    // Phones sit side by side; on a narrow screen the row scrolls inside itself, never the page.
    <div className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
      <ul className="flex snap-x snap-mandatory justify-start gap-3 sm:justify-center">
        {shots.map((src, i) => (
          <li key={src} className="w-[150px] shrink-0 snap-center sm:w-[160px] lg:w-[30%] lg:max-w-[180px]">
            <div className="rounded-[1.4rem] border border-border bg-bg-secondary p-1">
              <div className="overflow-hidden rounded-[1.15rem] bg-bg-tertiary">
                <img
                  src={src}
                  alt={t('openSource.screenshotAlt', { name: app.name, n: i + 1 })}
                  width={1080}
                  height={2340}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[9/19.5] h-auto w-full object-cover object-top"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function AppSection({ app, reverse }: { app: OpenSourceApp; reverse: boolean }) {
  const { t } = useTranslation()
  const localize = useLocalizedPath()
  const projects = useLocalizedProjects()
  const note = t(`openSource.${app.key}.note`, { defaultValue: '' })
  // The /work/ case study about the app, when there is one (BaseMile started as one).
  const caseStudy = app.caseStudy ? projects.find((project) => project.slug === app.caseStudy) : undefined

  return (
    <section
      id={app.key}
      aria-labelledby={`${app.key}-heading`}
      className="scroll-mt-24 rounded-xl border border-border bg-bg-secondary p-6 md:p-10"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className={reverse ? 'lg:order-last' : undefined}>
          <Screenshots app={app} />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-accent-gold/40 px-2.5 py-1 text-[11px] font-medium text-accent-gold">
              {t('openSource.freeLabel')}
            </span>
            <a
              href={OPEN_SOURCE_LICENSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('openSource.licenseAria', { license: app.license })}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-tertiary px-2.5 py-1 text-[11px] font-medium text-text-secondary no-underline transition-colors hover:border-border-hover hover:text-text-primary font-[family-name:var(--font-mono)]"
            >
              <Scale size={12} aria-hidden="true" />
              {app.licenseLabel}
            </a>
          </div>

          <h2
            id={`${app.key}-heading`}
            className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)]"
          >
            {app.name}
          </h2>
          <p className="mt-2 font-medium text-text-primary">{t(`openSource.${app.key}.pitch`)}</p>
          <p className="mt-4 text-text-secondary leading-relaxed">{t(`openSource.${app.key}.body`)}</p>

          <ul className="mt-6 space-y-2.5">
            {FEATURES.map((n) => (
              <li key={n} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-accent-gold" aria-hidden="true" />
                {t(`openSource.${app.key}.feature${n}`)}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {app.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {note && <p className="mt-6 text-xs text-text-tertiary leading-relaxed">{note}</p>}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={app.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={REPO_BUTTON_CLASS}
              {...umamiAttrs('open-source-repo', { app: app.key, location: 'app-section' })}
            >
              <Github size={16} aria-hidden="true" />
              {t('openSource.githubLink')}
            </a>
            {caseStudy && (
              <Link
                to={localize(`/work/${caseStudy.slug}`)}
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent-gold no-underline transition-colors hover:text-accent-gold-hover"
                {...umamiAttrs('case-study-open', { project: caseStudy.slug, location: 'open-source' })}
              >
                {t('openSource.caseStudyLink', { title: caseStudy.title })}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function OpenSource() {
  const { t } = useTranslation()
  const localize = useLocalizedPath()

  useEffect(() => {
    document.title = t('openSource.docTitle')
  }, [t])

  return (
    <PageTransition>
      <div className="px-6 pt-28 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-wider text-accent-gold font-[family-name:var(--font-mono)]">
              {t('openSource.eyebrow')}
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary">
              {t('openSource.title')}
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">{t('openSource.intro')}</p>
          </div>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {PRINCIPLES.map((n) => (
              <li key={n} className="bg-bg-secondary p-5">
                <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                  {t(`openSource.principle${n}Title`)}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{t(`openSource.principle${n}Body`)}</p>
              </li>
            ))}
          </ul>

          <h2 className="sr-only">{t('openSource.appsHeading')}</h2>
          <div className="mt-12 space-y-8">
            {OPEN_SOURCE_APPS.map((app, index) => (
              <AppSection key={app.key} app={app} reverse={index % 2 === 1} />
            ))}
          </div>

          <p className="mt-6 text-xs text-text-tertiary leading-relaxed">{t('openSource.disclaimer')}</p>

          <section
            aria-labelledby="contribute-heading"
            className="mt-16 rounded-xl border border-border bg-bg-secondary px-6 py-8 md:px-10 md:py-10"
          >
            <h2
              id="contribute-heading"
              className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)]"
            >
              {t('openSource.contributeTitle')}
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary leading-relaxed">{t('openSource.contributeBody')}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {OPEN_SOURCE_APPS.map((app) => (
                <a
                  key={app.key}
                  href={app.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={SECONDARY_BUTTON_CLASS}
                  {...umamiAttrs('open-source-repo', { app: app.key, location: 'contribute' })}
                >
                  <Github size={16} aria-hidden="true" />
                  {t('openSource.repoButton', { name: app.name })}
                </a>
              ))}
              <Link
                to={localize('/contact')}
                className="inline-flex min-h-11 items-center gap-1.5 px-2 text-sm font-medium text-accent-gold no-underline transition-colors hover:text-accent-gold-hover"
                {...umamiAttrs('cta-start-project', { location: 'open-source' })}
              >
                {t('openSource.contactLink')}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}
