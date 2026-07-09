import { useTranslation } from 'react-i18next'
import { ExternalLink } from 'lucide-react'
import { SHOW_HOSPITALITY_CASE_STUDY, HOSPITALITY_CASE_STUDY } from '../../utils/featureFlags'

// Case-study card for the hospitality section on /work. Renders nothing while the
// feature flag is off; the copy lives in the `hospitality.cs*` i18n keys and the
// images/link in featureFlags.ts so no client details ship before approval.
export function HospitalityCaseStudy() {
  const { t } = useTranslation()

  if (!SHOW_HOSPITALITY_CASE_STUDY) return null

  const { beforeImage, afterImage, liveUrl } = HOSPITALITY_CASE_STUDY

  return (
    <article className="mt-8 rounded-xl border border-border bg-bg-secondary/50 p-6">
      <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
        {t('hospitality.csTitle')}
      </h3>
      {(beforeImage || afterImage) && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {beforeImage && (
            <figure>
              <img src={beforeImage} alt={t('hospitality.csBeforeAlt')} loading="lazy" className="w-full rounded-lg border border-border" />
              <figcaption className="mt-1.5 text-xs text-text-tertiary">{t('hospitality.csBeforeLabel')}</figcaption>
            </figure>
          )}
          {afterImage && (
            <figure>
              <img src={afterImage} alt={t('hospitality.csAfterAlt')} loading="lazy" className="w-full rounded-lg border border-border" />
              <figcaption className="mt-1.5 text-xs text-text-tertiary">{t('hospitality.csAfterLabel')}</figcaption>
            </figure>
          )}
        </div>
      )}
      <p className="mt-4 text-text-secondary text-sm leading-relaxed">{t('hospitality.csBody')}</p>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent-gold hover:text-accent-gold"
        >
          <ExternalLink size={12} /> {t('hospitality.csLinkLabel')}
        </a>
      )}
    </article>
  )
}
