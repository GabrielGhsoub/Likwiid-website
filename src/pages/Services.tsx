import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactBlock } from '../components/sections/ContactBlock'
import { useLocalizedServices } from '../i18n/localizedContent'
import { useLocalizedPath } from '../i18n/useLocalizedPath'

const STEPS = ['step1', 'step2', 'step3'] as const

export default function Services() {
  const { t } = useTranslation()
  const localize = useLocalizedPath()
  const services = useLocalizedServices()

  useEffect(() => { document.title = t('services.documentTitle') }, [t])

  return (
    <PageTransition>
      <div className="px-6 pt-28 pb-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading as="h1" title={t('services.title')} subtitle={t('services.subtitle')} />

          <div className="border-b border-border">
            {services.map((service) => (
              <section
                key={service.id}
                id={service.id}
                aria-labelledby={`service-${service.id}`}
                className="grid scroll-mt-24 gap-4 border-t border-border py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-12 md:py-14"
              >
                <h2
                  id={`service-${service.id}`}
                  className="text-2xl md:text-3xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary"
                >
                  {service.title}
                </h2>
                <div>
                  <p className="text-lg text-text-secondary leading-relaxed">{service.longDescription}</p>
                  <ul className="mt-6 space-y-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-text-secondary">
                        <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-text-tertiary" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  {service.id === 'booking' && (
                    <>
                      <p className="mt-6 text-text-primary">{t('services.bookingPrice')}</p>
                      <Link
                        to={localize('/direct')}
                        className="mt-3 inline-flex items-center gap-1.5 font-medium text-accent-gold no-underline hover:underline"
                      >
                        {t('services.bookingLink')}
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </>
                  )}
                </div>
              </section>
            ))}
          </div>

          <section aria-labelledby="how-we-work" className="mt-20">
            <h2
              id="how-we-work"
              className="text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary"
            >
              {t('services.howTitle')}
            </h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step} className="border-t border-border pt-6">
                  <span className="text-sm text-text-tertiary font-[family-name:var(--font-mono)]">0{i + 1}</span>
                  <p className="mt-3 text-lg text-text-primary leading-relaxed">{t(`services.${step}`)}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 max-w-2xl text-text-secondary leading-relaxed">{t('services.founderLine')}</p>
          </section>
        </div>
      </div>

      <ContactBlock />
    </PageTransition>
  )
}
