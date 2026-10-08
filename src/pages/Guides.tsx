import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { useCurrentLanguage } from '../i18n/useLocalizedPath'
import { guideHref } from '../i18n/localeRoutes'
import { guidesIn } from '../content/guides/meta'

// The guides index (/guides/, /pt/guides/, ...): the guides written in the reader's language.
export default function Guides() {
  const { t } = useTranslation()
  const lang = useCurrentLanguage()
  const guides = guidesIn(lang)

  useEffect(() => {
    document.title = t('guides.docTitle')
  }, [t])

  return (
    <PageTransition>
      <div className="px-6 pt-28 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary">
              {t('guides.title')}
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">{t('guides.intro')}</p>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  to={guideHref(guide.slug, lang)}
                  className="group flex h-full flex-col rounded-xl border border-border bg-bg-secondary p-6 no-underline transition-colors hover:border-border-hover md:p-8"
                >
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary">
                    {guide.title}
                  </h2>
                  <p className="mt-3 flex-1 text-text-secondary leading-relaxed">{guide.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-medium text-accent-gold">
                    {t('guides.readGuide')}
                    <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageTransition>
  )
}
