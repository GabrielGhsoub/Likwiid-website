import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import {
  Aperture,
  LayoutGrid,
  KeyRound,
  ShoppingBag,
  CalendarCheck,
  Languages,
  Play,
} from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const TRANSITION_DELAY_01 = { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_DELAY_02 = { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }

const DEMO_ORIGIN = 'https://gabrielghsoub.github.io'

// Tells the demo it was reached from likwiid.com, so it shows its
// "back to Likwiid" control.
const FROM_LIKWIID = '?from=likwiid'

// The two public demo portfolios plus the owner panel. Both brands are fictional;
// the engine wears each photographer's brand, which is the product story.
const DEMO_CARDS = [
  {
    id: 'ana',
    src: `${DEMO_ORIGIN}/likwiid-frame-demo/p/ana-likwiid${FROM_LIKWIID}`,
    titleKey: 'demoCard1Title',
    brandKey: 'demoCard1Brand',
    image: '/frame-demo-ana-preview.jpg',
    previewAltKey: 'demoCard1PreviewAlt',
  },
  {
    id: 'studio',
    src: `${DEMO_ORIGIN}/likwiid-frame-demo/p/studio-likwiid${FROM_LIKWIID}`,
    titleKey: 'demoCard2Title',
    brandKey: 'demoCard2Brand',
    image: '/frame-demo-studio-preview.jpg',
    previewAltKey: 'demoCard2PreviewAlt',
  },
] as const

const ADMIN_DEMO_SRC = `${DEMO_ORIGIN}/likwiid-frame-demo/admin/ana-likwiid${FROM_LIKWIID}`

// Anchor styles mirroring Button (primary lg, secondary md); plain anchors are
// used here because the demos open as real same-tab navigations, not overlays.
const LINK_BASE =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full cursor-pointer no-underline font-[family-name:var(--font-display)]'
const LINK_PRIMARY_LG = `${LINK_BASE} liquid-ripple bg-accent-gold text-white border border-accent-gold hover:opacity-90 transition-colors duration-200 px-8 py-4 text-lg`
const LINK_SECONDARY_MD = `${LINK_BASE} border border-border text-text-primary hover:border-border-hover hover:text-accent-gold transition-[border-color,color] duration-200 px-6 py-3 text-base`

const LINK_HOVER = { scale: 1.02 }
const LINK_TAP = { scale: 0.98 }

// feature5 is the Likwiid Direct booking synergy: its card carries an internal
// cross-sell link to /direct, rendered via linkTo below.
const FEATURES = [
  { icon: Aperture, titleKey: 'feature1Title', descKey: 'feature1Desc' },
  { icon: LayoutGrid, titleKey: 'feature2Title', descKey: 'feature2Desc' },
  { icon: KeyRound, titleKey: 'feature3Title', descKey: 'feature3Desc' },
  { icon: ShoppingBag, titleKey: 'feature4Title', descKey: 'feature4Desc' },
  { icon: CalendarCheck, titleKey: 'feature5Title', descKey: 'feature5Desc', linkTo: '/direct', linkKey: 'synergyLink' },
  { icon: Languages, titleKey: 'feature6Title', descKey: 'feature6Desc' },
] as const

export default function Frame() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('frame.docTitle')
  }, [t])

  return (
    <PageTransition>
      <div className="pt-20 pb-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          {/* Hero */}
          <m.div
            initial={FADE_UP_INITIAL}
            animate={FADE_UP_ANIMATE}
            transition={TRANSITION_DELAY_01}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-accent-gold uppercase tracking-wider font-[family-name:var(--font-mono)] mb-4">
              {t('frame.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] text-text-primary leading-tight">
              {t('frame.heroTitle')}
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              {t('frame.heroSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <m.a
                href={DEMO_CARDS[0].src}
                className={LINK_PRIMARY_LG}
                whileHover={LINK_HOVER}
                whileTap={LINK_TAP}
              >
                {t('frame.ctaDemo')}
              </m.a>
              <Button variant="secondary" size="lg" href="/contact">
                {t('frame.ctaTalk')}
              </Button>
            </div>
          </m.div>

          {/* Live demos */}
          <m.section
            id="demo"
            aria-labelledby="demo-heading"
            initial={FADE_UP_INITIAL}
            animate={FADE_UP_ANIMATE}
            transition={TRANSITION_DELAY_02}
            className="mt-20 scroll-mt-24"
          >
            <h2
              id="demo-heading"
              className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary"
            >
              {t('frame.demoTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('frame.demoNote')}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {DEMO_CARDS.map((card) => (
                <a
                  key={card.id}
                  href={card.src}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-border text-left no-underline focus-visible:outline-2 focus-visible:outline-accent-gold"
                >
                  <span className="relative block aspect-[16/10]">
                    <img
                      src={card.image}
                      alt={t(`frame.${card.previewAltKey}`)}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"
                    />
                    <span className="absolute inset-x-0 bottom-0 p-5">
                      <span className="block text-sm text-white/80">
                        {t(`frame.${card.brandKey}`)}
                      </span>
                      <span className="mt-1 block text-xl font-semibold font-[family-name:var(--font-display)] text-white">
                        {t(`frame.${card.titleKey}`)}
                      </span>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-[#1a1a2e] shadow-lg transition-transform duration-300 group-hover:scale-105">
                        <Play size={16} aria-hidden="true" />
                        {t('frame.demoLaunch')}
                      </span>
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Owner panel demo */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-bg-secondary/50 p-6">
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
                  {t('frame.adminTitle')}
                </h3>
                <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                  {t('frame.adminBody')}
                </p>
              </div>
              <m.a
                href={ADMIN_DEMO_SRC}
                className={LINK_SECONDARY_MD}
                whileHover={LINK_HOVER}
                whileTap={LINK_TAP}
              >
                {t('frame.adminLink')}
              </m.a>
            </div>
          </m.section>

          {/* The pain: rented portfolios */}
          <section aria-labelledby="pain-heading" className="mt-20">
            <h2
              id="pain-heading"
              className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary"
            >
              {t('frame.painTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('frame.painBody')}
            </p>
          </section>

          {/* How it works: config folder to finished site */}
          <section aria-labelledby="how-heading" className="mt-20">
            <h2
              id="how-heading"
              className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary"
            >
              {t('frame.howTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('frame.howBody')}
            </p>
          </section>

          {/* Features */}
          <div className="mt-20 grid sm:grid-cols-2 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.titleKey} className="rounded-lg border border-border p-6">
                <feature.icon size={24} className="text-accent-gold" />
                <h3 className="mt-4 text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
                  {t(`frame.${feature.titleKey}`)}
                </h3>
                <p className="mt-2 text-text-secondary leading-relaxed">{t(`frame.${feature.descKey}`)}</p>
                {'linkTo' in feature ? (
                  <Link
                    to={feature.linkTo}
                    className="mt-3 inline-block text-accent-gold text-sm font-medium no-underline hover:underline"
                  >
                    {t(`frame.${feature.linkKey}`)} &rarr;
                  </Link>
                ) : null}
              </div>
            ))}
          </div>

          {/* Ownership */}
          <div className="mt-20 rounded-lg border border-border bg-bg-secondary/50 p-8 md:p-12">
            <p className="max-w-3xl text-lg text-text-secondary leading-relaxed">
              {t('frame.ownership')}
            </p>
          </div>

          {/* Honest scarcity */}
          <p className="mt-12 max-w-3xl text-text-secondary leading-relaxed">
            {t('frame.scarcity')}
          </p>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <Button variant="primary" size="lg" href="/contact">
              {t('frame.ctaTalk')}
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
