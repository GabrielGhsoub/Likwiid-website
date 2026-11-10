import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { FounderLine } from '../components/ui/FounderLine'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { DemoCard } from '../components/ui/DemoCard'
import { EscuelaProof } from '../components/sections/EscuelaProof'
import { ContactBlock } from '../components/sections/ContactBlock'
import { useLocalizedPath, useCurrentLanguage } from '../i18n/useLocalizedPath'
import { directDemoHref } from '../utils/demoLinks'
import { useTheme } from '../hooks/useTheme'
import { DIRECT_DEMO_CARDS } from '../data/directDemos'

const H2 = 'text-2xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-3xl'

// The work a tourism owner needs to see: the one live client booking page first, then the
// two demos, labelled as demos. Apps and other software live on /software/.
export default function Portfolio() {
  const { t } = useTranslation()
  const localize = useLocalizedPath()
  const lang = useCurrentLanguage()
  const { theme } = useTheme()

  useEffect(() => { document.title = t('portfolio.documentTitle') }, [t])

  return (
    <PageTransition>
      <div className="px-6 pt-28">
        <header className="mx-auto max-w-[1200px]">
          <h1 className="text-3xl font-bold leading-[1.08] tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-5xl">
            {t('portfolio.title')}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">{t('portfolio.subtitle')}</p>
          <FounderLine className="mt-6" />
        </header>
      </div>

      <EscuelaProof />

      <div className="px-6 pb-8">
        <div className="mx-auto max-w-[1200px]">
          <section aria-labelledby="demos-heading">
            <h2 id="demos-heading" className={H2}>
              {t('portfolio.demosTitle')}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-text-secondary">{t('direct.demoNote')}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {DIRECT_DEMO_CARDS.map((card) => (
                <DemoCard
                  key={card.slug}
                  href={directDemoHref(lang, localize('/work'), card.slug, theme)}
                  image={card.image}
                  imageWidth={card.imageWidth}
                  imageHeight={card.imageHeight}
                  alt={t('direct.demoPreviewAlt')}
                  name={`${t('portfolio.demoLabel')}: ${t(`direct.${card.propertyKey}`)}`}
                  description={t(`direct.${card.titleKey}`)}
                  launchLabel={t('direct.demoLaunch')}
                  umamiEvent="demo-launch"
                  umamiData={{ product: 'direct', demo: card.slug, location: 'work' }}
                />
              ))}
            </div>
          </section>

          <section aria-labelledby="hospitality-heading" className="mt-12 rounded-xl border border-border p-5 md:p-6">
            <h2 id="hospitality-heading" className="text-lg font-semibold text-text-primary font-[family-name:var(--font-display)] md:text-xl">
              {t('hospitality.heading')}
            </h2>
            <p className="mt-2 max-w-3xl leading-relaxed text-text-secondary">{t('portfolio.hospitalityBody')}</p>
            <p className="mt-2 max-w-3xl font-medium leading-relaxed text-text-primary">{t('price.short')}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              <WhatsAppButton location="work" size="md" />
              <Link to={localize('/direct')} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent-gold no-underline hover:underline">
                {t('hospitality.directLink')}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section aria-labelledby="other-software-heading" className="mt-12 border-t border-border pt-8">
            <h2 id="other-software-heading" className={H2}>
              {t('portfolio.otherTitle')}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-text-secondary">{t('portfolio.otherBody')}</p>
            <Link
              to={localize('/software')}
              className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-medium text-accent-gold no-underline hover:underline"
            >
              {t('portfolio.otherLink')}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </section>
        </div>
      </div>

      <ContactBlock />
    </PageTransition>
  )
}
