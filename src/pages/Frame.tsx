import { useEffect, useState } from 'react'
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
  X,
} from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const TRANSITION_DELAY_01 = { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_DELAY_02 = { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }

const DEMO_ORIGIN = 'https://gabrielghsoub.github.io'

// The two public demo portfolios plus the owner panel. Both brands are fictional;
// the engine wears each photographer's brand, which is the product story.
const DEMO_CARDS = [
  {
    id: 'ana',
    src: `${DEMO_ORIGIN}/likwiid-frame-demo/p/ana-likwiid`,
    titleKey: 'demoCard1Title',
    brandKey: 'demoCard1Brand',
  },
  {
    id: 'studio',
    src: `${DEMO_ORIGIN}/likwiid-frame-demo/p/studio-likwiid`,
    titleKey: 'demoCard2Title',
    brandKey: 'demoCard2Brand',
  },
] as const

const ADMIN_DEMO_SRC = `${DEMO_ORIGIN}/likwiid-frame-demo/admin/ana-likwiid`

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

/** Full-screen, Likwiid-branded demo experience. The fictional photographer brand
    lives inside the Likwiid Frame frame, which is the product story: the
    engine wears each photographer's brand. */
function DemoOverlay({
  src,
  title,
  note,
  closeLabel,
  onClose,
}: {
  src: string
  title: string
  note: string
  closeLabel: string
  onClose: () => void
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-bg-primary"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-border px-4 md:px-6">
        <div className="flex min-w-0 items-baseline gap-3">
          <span className="whitespace-nowrap font-bold font-[family-name:var(--font-display)] text-text-primary">
            Likwiid Frame
          </span>
          <span className="hidden truncate text-sm text-text-tertiary sm:block">{note}</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          autoFocus
          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary hover:border-border-hover"
        >
          {closeLabel}
          <X size={16} aria-hidden="true" />
        </button>
      </div>
      <div className="min-h-0 flex-1">
        <iframe src={src} title={title} className="block h-full w-full" style={{ border: 0 }} />
      </div>
    </div>
  )
}

export default function Frame() {
  const { t } = useTranslation()
  const [demoSrc, setDemoSrc] = useState<string | null>(null)

  useEffect(() => {
    document.title = t('frame.docTitle')
  }, [t])

  return (
    <PageTransition>
      {demoSrc ? (
        <DemoOverlay
          src={demoSrc}
          title={t('frame.demoIframeTitle')}
          note={t('frame.demoOverlayNote')}
          closeLabel={t('frame.demoClose')}
          onClose={() => setDemoSrc(null)}
        />
      ) : null}

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
              <Button variant="primary" size="lg" onClick={() => setDemoSrc(DEMO_CARDS[0].src)}>
                {t('frame.ctaDemo')}
              </Button>
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
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setDemoSrc(card.src)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-border text-left focus-visible:outline-2 focus-visible:outline-accent-gold"
                >
                  <span className="relative block aspect-[16/10]">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-bg-secondary transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                      style={{ backgroundImage: 'var(--gradient-liquid-subtle)' }}
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
                </button>
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
              <Button variant="secondary" size="md" onClick={() => setDemoSrc(ADMIN_DEMO_SRC)}>
                {t('frame.adminLink')}
              </Button>
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
