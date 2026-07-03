import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Process as ProcessSection } from '../components/sections/Process'
import { CTA } from '../components/sections/CTA'

export default function Process() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('processPage.documentTitle')
  }, [t])

  return (
    <PageTransition>
      <div className="pt-20 pb-4 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading as="h1" title={t('processPage.title')} subtitle={t('processPage.subtitle')} />
          <p className="mx-auto max-w-2xl text-center text-text-secondary leading-relaxed">
            {t('processPage.intro')}
          </p>
        </div>
      </div>

      <ProcessSection />

      <section className="px-6 pb-4">
        <div className="mx-auto max-w-[1200px] rounded-lg border border-border bg-bg-secondary/50 p-8 text-center">
          <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
            {t('processPage.bookingTitle')}
          </h2>
          <p className="mt-2 mx-auto max-w-xl text-text-secondary">
            {t('processPage.bookingBody')}
          </p>
          <Link
            to="/booking-websites"
            className="mt-4 inline-flex min-h-11 items-center text-accent-gold font-medium hover:underline no-underline"
          >
            {t('processPage.bookingLink')} &rarr;
          </Link>
        </div>
      </section>

      <CTA />
    </PageTransition>
  )
}
