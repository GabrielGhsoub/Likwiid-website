import { useEffect, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageTransition } from '../layout/PageTransition'
import { Button } from '../ui/Button'
import type { Lang } from '../../i18n/detectLanguage'
import { localizedHref } from '../../i18n/localeRoutes'
import { GUIDE_META } from '../../content/guides/meta'
import type { GuideSource } from '../../content/guides/types'
import { GUIDE_AUTHOR, GuideContext } from './guideContext'

interface GuideLayoutProps {
  slug: string
  lang: Lang
  // Sources for figures and legal claims, listed under the article.
  sources?: GuideSource[]
  children: ReactNode
}

// A date in the guide's language, formatted in UTC so the prerendered text matches every
// browser's (the ISO date is midnight UTC).
const formatDate = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(iso))

/** Shell of every guide article: heading, byline, the text, its sources and a contact prompt. */
export function GuideLayout({ slug, lang, sources, children }: GuideLayoutProps) {
  // Translates with `lang` itself, not the site's current language: the article's chrome
  // always matches its text.
  const { t } = useTranslation(undefined, { lng: lang })
  const meta = GUIDE_META[slug]
  const copy = meta?.copy[lang]
  const docTitle = copy?.docTitle

  useEffect(() => {
    if (docTitle) document.title = docTitle
  }, [docTitle])

  if (!meta || !copy) throw new Error(`guide "${slug}" has no ${lang} copy in its meta.ts`)
  const published = formatDate(meta.datePublished, lang)
  const updated = meta.dateModified !== meta.datePublished ? formatDate(meta.dateModified, lang) : null

  return (
    <PageTransition>
      <GuideContext.Provider value={lang}>
        <div className="px-6 pt-28 pb-16">
          <article lang={lang} className="mx-auto max-w-[760px]">
            <nav aria-label={t('guides.crumb')}>
              <Link
                to={localizedHref('guides', lang)}
                className="inline-flex min-h-11 items-center gap-1.5 text-sm text-text-tertiary no-underline transition-colors hover:text-text-primary"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                {t('guides.allGuides')}
              </Link>
            </nav>
            <p className="mt-6 mb-3 text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
              {t('guides.eyebrow')}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary leading-tight">
              {copy.title}
            </h1>
            <p className="mt-5 text-sm text-text-tertiary">
              {t('guides.byline', { name: GUIDE_AUTHOR })}
              <span aria-hidden="true"> &middot; </span>
              <time dateTime={meta.datePublished}>{t('guides.published', { date: published })}</time>
              {updated && (
                <>
                  <span aria-hidden="true"> &middot; </span>
                  <time dateTime={meta.dateModified}>{t('guides.updated', { date: updated })}</time>
                </>
              )}
            </p>

            <div className="mt-10">{children}</div>

            {sources && sources.length > 0 && (
              <section aria-labelledby="guide-sources" className="mt-14 border-t border-border pt-8">
                <h2 id="guide-sources" className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
                  {t('guides.sourcesTitle')}
                </h2>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-text-secondary leading-relaxed marker:text-text-tertiary">
                  {sources.map((source) => (
                    <li key={source.href} className="pl-1 break-words">
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-gold underline-offset-2 hover:underline"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <aside className="mt-14 rounded-xl border border-border bg-bg-secondary p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary">
                {t('guides.ctaTitle')}
              </h2>
              <p className="mt-3 text-text-secondary leading-relaxed">{t('guides.ctaBody')}</p>
              <div className="mt-6">
                <Button variant="primary" size="md" href={localizedHref('contact', lang)} umamiEvent="cta-start-project" umamiData={{ location: `guide-${slug}` }}>
                  {t('guides.ctaButton')}
                </Button>
              </div>
            </aside>
          </article>
        </div>
      </GuideContext.Provider>
    </PageTransition>
  )
}
