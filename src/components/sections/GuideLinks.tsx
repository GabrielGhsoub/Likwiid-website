import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useCurrentLanguage } from '../../i18n/useLocalizedPath'
import { guideHref } from '../../i18n/localeRoutes'
import { guidesIn } from '../../content/guides/meta'

export const BOOKING_GUIDES = ['direct-booking-deposits', 'request-vs-instant-booking', 'booking-com-commission-costs'] as const

// Links to the guides written in the reader's language. Renders nothing when there are none.
export function GuideLinks({ slugs = BOOKING_GUIDES, className }: { slugs?: readonly string[]; className?: string }) {
  const { t } = useTranslation()
  const lang = useCurrentLanguage()
  const guides = guidesIn(lang).filter((guide) => slugs.includes(guide.slug))
  if (guides.length === 0) return null
  return (
    <section aria-labelledby="guide-links-heading" className={className}>
      <h2
        id="guide-links-heading"
        className="text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]"
      >
        {t('guides.readMoreTitle')}
      </h2>
      <ul className="mt-3 space-y-1 p-0">
        {guides.map((guide) => (
          <li key={guide.slug} className="list-none">
            <Link
              to={guideHref(guide.slug, lang)}
              className="inline-flex min-h-11 items-center gap-1.5 font-medium text-accent-gold no-underline hover:underline"
            >
              {guide.title}
              <ArrowRight size={16} aria-hidden="true" className="shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
