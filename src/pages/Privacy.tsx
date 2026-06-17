import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'

const LAST_UPDATED = 'March 31, 2026'

export default function Privacy() {
  const { t } = useTranslation()
  useEffect(() => { document.title = t('privacy.documentTitle') }, [t])

  return (
    <PageTransition>
      <div className="pt-20 pb-16 px-6">
        <div className="mx-auto max-w-[800px]">
          <SectionHeading as="h1" title={t('privacy.title')} />

          <p className="text-text-tertiary text-sm mb-10">
            {t('privacy.lastUpdated', { date: LAST_UPDATED })}
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                {t('privacy.collectTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {t('privacy.collectBody')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                {t('privacy.useTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {t('privacy.useBody')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                {t('privacy.sharingTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {t('privacy.sharingBody')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                {t('privacy.cookiesTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {t('privacy.cookiesBody')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                {t('privacy.analyticsTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {t('privacy.analyticsBody')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                {t('privacy.retentionTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {t('privacy.retentionBody')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                {t('privacy.rightsTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {t('privacy.rightsBody')}{' '}
                <a href="mailto:gabriel@likwiid.com" className="text-accent-gold hover:underline">
                  gabriel@likwiid.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                {t('privacy.updatesTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {t('privacy.updatesBody')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                {t('privacy.contactTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {t('privacy.contactBody')}{' '}
                <a href="mailto:gabriel@likwiid.com" className="text-accent-gold hover:underline">
                  gabriel@likwiid.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
