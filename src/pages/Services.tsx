import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FounderLine } from '../components/ui/FounderLine'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { ContactBlock } from '../components/sections/ContactBlock'
import { PriceBlock } from '../components/sections/PriceBlock'
import { useLocalizedPath } from '../i18n/useLocalizedPath'

const KINDS = ['kind1', 'kind2'] as const
const ITEMS = [1, 2, 3] as const
const STEPS = ['step1', 'step2', 'step3'] as const
const AFTER = ['afterBody1', 'afterBody2', 'afterBody3'] as const

const H2 = 'text-2xl md:text-3xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary'
const TEXT_LINK = 'inline-flex items-center gap-1.5 font-medium text-accent-gold no-underline hover:underline'

export default function Services() {
  const { t } = useTranslation()
  const localize = useLocalizedPath()

  useEffect(() => { document.title = t('services.documentTitle') }, [t])

  return (
    <PageTransition>
      <div className="px-6 pt-28 pb-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading as="h1" title={t('services.title')} subtitle={t('services.subtitle')} />
          <div className="-mt-4 mb-10 flex flex-col gap-5">
            <FounderLine />
            <div>
              <WhatsAppButton location="services" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {KINDS.map((kind) => (
              <section
                key={kind}
                aria-labelledby={`service-${kind}`}
                className="rounded-xl border border-border bg-bg-secondary p-6 md:p-8"
              >
                <h2 id={`service-${kind}`} className={H2}>
                  {t(`services.${kind}Title`)}
                </h2>
                <p className="mt-4 text-lg text-text-secondary leading-relaxed">{t(`services.${kind}Body`)}</p>
                <ul className="mt-6 space-y-2 p-0">
                  {ITEMS.map((n) => (
                    <li key={n} className="flex list-none items-start gap-3 text-text-secondary">
                      <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-text-tertiary" aria-hidden="true" />
                      {t(`services.${kind}Item${n}`)}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-6 text-text-primary">{t('services.kindTime')}</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link to={localize('/direct')} className={TEXT_LINK}>
              {t('services.bookingLink')}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to={localize('/work/escuela-nautica-valencia')} className={TEXT_LINK}>
              {t('services.exampleLink')}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <PriceBlock flush showFirstProperty={false} />

          <section id="after-launch" aria-labelledby="after-launch-heading" className="scroll-mt-24 py-12 md:py-16">
            <h2 id="after-launch-heading" className={H2}>
              {t('services.afterTitle')}
            </h2>
            <div className="mt-6 max-w-3xl space-y-4">
              {AFTER.map((key) => (
                <p key={key} className="text-lg text-text-secondary leading-relaxed">{t(`services.${key}`)}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="how-we-work" className="py-12 md:py-16">
            <h2 id="how-we-work" className={H2}>
              {t('services.howTitle')}
            </h2>
            <ol className="mt-10 grid gap-8 p-0 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step} className="list-none border-t border-border pt-6">
                  <span className="text-sm text-text-tertiary font-[family-name:var(--font-mono)]">0{i + 1}</span>
                  <p className="mt-3 text-lg text-text-primary leading-relaxed">{t(`services.${step}`)}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 max-w-2xl text-text-secondary leading-relaxed">{t('services.founderLine')}</p>
          </section>

          <section aria-labelledby="other-software" className="border-t border-border py-10">
            <h2 id="other-software" className="text-xl font-semibold text-text-primary font-[family-name:var(--font-display)]">
              {t('services.softwareTitle')}
            </h2>
            <p className="mt-2 text-text-secondary leading-relaxed">{t('services.softwareBody')}</p>
            <Link to={localize('/software')} className={`mt-3 ${TEXT_LINK}`}>
              {t('services.softwareLink')}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </section>
        </div>
      </div>

      <ContactBlock />
    </PageTransition>
  )
}
