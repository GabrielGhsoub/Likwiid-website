import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { KeyRound, ShoppingBag, CalendarCheck, Languages, ArrowRight } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'
import { DemoCard } from '../components/ui/DemoCard'
import { BUTTON_LINK_PRIMARY_LG, BUTTON_LINK_SECONDARY_MD } from '../components/ui/buttonLink'
import { frameDemoHref } from '../utils/demoLinks'
import { umamiAttrs } from '../utils/analytics'

// This page's own path: the demo's "Back to Likwiid" chip returns visitors here.
const BACK_PATH = '/frame'

// The two public demo portfolios plus the owner panel. Both brands are fictional;
// the engine wears each photographer's brand, which is the product story.
const DEMO_CARDS = [
  {
    id: 'ana',
    src: frameDemoHref(BACK_PATH, 'ana-likwiid'),
    titleKey: 'demoCard1Title',
    brandKey: 'demoCard1Brand',
    image: '/frame-demo-ana-preview.jpg',
    previewAltKey: 'demoCard1PreviewAlt',
  },
  {
    id: 'studio',
    src: frameDemoHref(BACK_PATH, 'studio-likwiid'),
    titleKey: 'demoCard2Title',
    brandKey: 'demoCard2Brand',
    image: '/frame-demo-studio-preview.jpg',
    previewAltKey: 'demoCard2PreviewAlt',
  },
] as const

const ADMIN_DEMO_SRC = frameDemoHref(BACK_PATH, 'ana-likwiid', 'admin')

// feature5 is the Likwiid Direct booking synergy: its card carries an internal
// cross-sell link to /direct.
const FEATURES = [
  { icon: KeyRound, titleKey: 'feature3Title', descKey: 'feature3Desc' },
  { icon: ShoppingBag, titleKey: 'feature4Title', descKey: 'feature4Desc' },
  { icon: CalendarCheck, titleKey: 'feature5Title', descKey: 'feature5Desc', linkTo: '/direct', linkKey: 'synergyLink' },
  { icon: Languages, titleKey: 'feature6Title', descKey: 'feature6Desc' },
] as const

const H2 = 'text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary'

export default function Frame() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('frame.docTitle')
  }, [t])

  return (
    <PageTransition>
      <div className="px-6 pt-28 pb-16">
        <div className="mx-auto max-w-[1200px]">
          {/* Hero */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
              {t('frame.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary leading-tight">
              {t('frame.heroTitle')}
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              {t('frame.heroSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={DEMO_CARDS[0].src}
                className={BUTTON_LINK_PRIMARY_LG}
                {...umamiAttrs('demo-launch', { product: 'frame', demo: DEMO_CARDS[0].id, location: 'frame-hero' })}
              >
                {t('frame.ctaDemo')}
              </a>
              <Button variant="secondary" size="lg" href="/contact" umamiEvent="cta-start-project" umamiData={{ location: 'frame-hero' }}>
                {t('frame.ctaTalk')}
              </Button>
            </div>
          </div>

          {/* Live demos */}
          <section id="demo" aria-labelledby="demo-heading" className="mt-20 scroll-mt-24">
            <h2 id="demo-heading" className={H2}>
              {t('frame.demoTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('frame.demoNote')}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {DEMO_CARDS.map((card) => (
                <DemoCard
                  key={card.id}
                  href={card.src}
                  image={card.image}
                  imageWidth={1280}
                  imageHeight={800}
                  alt={t(`frame.${card.previewAltKey}`)}
                  name={t(`frame.${card.brandKey}`)}
                  description={t(`frame.${card.titleKey}`)}
                  launchLabel={t('frame.demoLaunch')}
                  umamiEvent="demo-launch"
                  umamiData={{ product: 'frame', demo: card.id, location: 'frame-demos' }}
                />
              ))}
            </div>

            {/* Owner panel demo */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-bg-secondary p-6">
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
                  {t('frame.adminTitle')}
                </h3>
                <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                  {t('frame.adminBody')}
                </p>
              </div>
              <a
                href={ADMIN_DEMO_SRC}
                className={BUTTON_LINK_SECONDARY_MD}
                {...umamiAttrs('demo-launch', { product: 'frame', demo: 'ana-admin', location: 'frame-demos' })}
              >
                {t('frame.adminLink')}
              </a>
            </div>
          </section>

          {/* The pain: rented portfolios */}
          <section aria-labelledby="pain-heading" className="mt-20">
            <h2 id="pain-heading" className={H2}>
              {t('frame.painTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('frame.painBody')}
            </p>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('frame.pipelineNote')}
            </p>
          </section>

          {/* Features */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <div key={feature.titleKey} className="rounded-xl border border-border bg-bg-secondary p-6">
                <feature.icon size={22} className="text-text-tertiary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
                  {t(`frame.${feature.titleKey}`)}
                </h3>
                <p className="mt-2 text-text-secondary leading-relaxed">{t(`frame.${feature.descKey}`)}</p>
                {'linkTo' in feature ? (
                  <Link
                    to={feature.linkTo}
                    className="mt-3 inline-flex items-center gap-1.5 text-accent-gold text-sm font-medium no-underline hover:underline"
                  >
                    {t(`frame.${feature.linkKey}`)}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>

          {/* Honest scarcity */}
          <p className="mt-16 max-w-3xl text-text-secondary leading-relaxed">
            {t('frame.scarcity')}
          </p>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <Button variant="primary" size="lg" href="/contact" umamiEvent="cta-start-project" umamiData={{ location: 'frame-footer' }}>
              {t('frame.ctaTalk')}
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
