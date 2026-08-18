import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { m } from 'framer-motion'
import { SlidersHorizontal, CreditCard, Code2, Languages, Play } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'
import { BUTTON_LINK_HOVER, BUTTON_LINK_PRIMARY_LG, BUTTON_LINK_TAP } from '../components/ui/buttonLink'
import { DIRECT_DEMO_ORIGIN, withLikwiidReturn } from '../config/demoOrigins'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const TRANSITION_DELAY_01 = { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_DELAY_02 = { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }

// This page's own path: the demo's "Back to Likwiid" chip returns visitors here.
const BACK_PATH = '/direct'
// Languages the embedded demo ships with; other site languages fall back to the demo default.
const DEMO_LANGS = ['pt', 'en', 'es'] as const

/** Full-page demo URL for a given property slug, in the visitor's language when
    the demo supports it. Uses the /p/ pages (the full demo experience), not the
    embed=1 widget view, which is reserved for the iframe loader. */
function demoHrefFor(slug: string, lang: string) {
  const base = `${DIRECT_DEMO_ORIGIN}/p/${slug}`
  const short = (lang ?? '').slice(0, 2)
  const localized = (DEMO_LANGS as readonly string[]).includes(short) ? `${base}?lang=${short}` : base
  return withLikwiidReturn(localized, BACK_PATH)
}

const DEMO_CARDS = [
  {
    slug: 'quinta-likwiid',
    titleKey: 'demoCard1Title',
    propertyKey: 'demoCard1Property',
    image: '/direct-demo-preview.jpg',
  },
  {
    slug: 'atelier-likwiid',
    titleKey: 'demoCard2Title',
    propertyKey: 'demoCard2Property',
    image: null,
  },
] as const

// Static owner-panel illustration data (sample figures, not live bookings).
const OWNER_MOCK_AMOUNTS = {
  room: 'EUR 420.00',
  extra1: 'EUR 70.00',
  extra2: 'EUR 54.00',
  total: 'EUR 544.00',
  deposit: 'EUR 163.20',
  balance: 'EUR 380.80',
  guests: '2',
} as const

// August 2026 starts on a Saturday; Monday-first grid needs 5 leading blanks.
const CAL_LEADING_BLANKS = 5
const CAL_DAYS = 31
const CAL_BOOKED = [20, 21, 22]
const CAL_BLOCKED = [7, 8, 28]

const FEATURES = [
  { icon: SlidersHorizontal, titleKey: 'feature1Title', descKey: 'feature1Desc' },
  { icon: CreditCard, titleKey: 'feature2Title', descKey: 'feature2Desc' },
  { icon: Code2, titleKey: 'feature3Title', descKey: 'feature3Desc' },
  { icon: Languages, titleKey: 'feature4Title', descKey: 'feature4Desc' },
] as const

export default function Direct() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('direct.docTitle')
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
              {t('direct.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] text-text-primary leading-tight">
              {t('direct.heroTitle')}
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              {t('direct.heroSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <m.a
                href={demoHrefFor('quinta-likwiid', i18n.language ?? '')}
                className={BUTTON_LINK_PRIMARY_LG}
                whileHover={BUTTON_LINK_HOVER}
                whileTap={BUTTON_LINK_TAP}
              >
                {t('direct.ctaDemo')}
              </m.a>
              <Button variant="secondary" size="lg" href="/contact">
                {t('direct.ctaTalk')}
              </Button>
            </div>
          </m.div>

          {/* Live demo */}
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
              {t('direct.demoTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('direct.demoNote')}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {DEMO_CARDS.map((card) => (
                <a
                  key={card.slug}
                  href={demoHrefFor(card.slug, i18n.language ?? '')}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-border text-left no-underline focus-visible:outline-2 focus-visible:outline-accent-gold"
                >
                  <span className="relative block aspect-[16/10]">
                    {card.image ? (
                      <img
                        src={card.image}
                        alt={t('direct.demoPreviewAlt')}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-bg-secondary transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                        style={{ backgroundImage: 'var(--gradient-liquid-subtle)' }}
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"
                    />
                    <span className="absolute inset-x-0 bottom-0 p-5">
                      <span className="block text-sm text-white/80">
                        {t(`direct.${card.propertyKey}`)}
                      </span>
                      <span className="mt-1 block text-xl font-semibold font-[family-name:var(--font-display)] text-white">
                        {t(`direct.${card.titleKey}`)}
                      </span>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-[#1a1a2e] shadow-lg transition-transform duration-300 group-hover:scale-105">
                        <Play size={16} aria-hidden="true" />
                        {t('direct.demoLaunch')}
                      </span>
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </m.section>

          {/* Features */}
          <div className="mt-20 grid sm:grid-cols-2 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.titleKey} className="rounded-lg border border-border p-6">
                <feature.icon size={24} className="text-accent-gold" />
                <h3 className="mt-4 text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
                  {t(`direct.${feature.titleKey}`)}
                </h3>
                <p className="mt-2 text-text-secondary leading-relaxed">{t(`direct.${feature.descKey}`)}</p>
              </div>
            ))}
          </div>

          {/* Calendar sync */}
          <section aria-labelledby="sync-heading" className="mt-20">
            <h2
              id="sync-heading"
              className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary"
            >
              {t('direct.syncTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('direct.syncBody')}
            </p>
          </section>

          {/* Request mode: the engine also runs without a payment step, for
              owners who confirm every booking themselves. */}
          <section aria-labelledby="request-heading" className="mt-20">
            <h2
              id="request-heading"
              className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary"
            >
              {t('direct.requestTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('direct.requestBody')}
            </p>
          </section>

          {/* Owner panel illustration */}
          <section aria-labelledby="owner-heading" className="mt-20">
            <div className="flex flex-wrap items-center gap-3">
              <h2
                id="owner-heading"
                className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary"
              >
                {t('direct.ownerTitle')}
              </h2>
              <span className="rounded-full border border-border bg-bg-tertiary px-3 py-1 text-xs font-medium text-text-secondary font-[family-name:var(--font-mono)] uppercase tracking-wider">
                {t('direct.ownerBadge')}
              </span>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Mock booking notification */}
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
                  {t('direct.ownerNotifTitle')}
                </h3>
                <div className="mt-3 overflow-hidden rounded-xl border border-border bg-bg-secondary/50">
                  <div className="border-b border-border px-5 py-4">
                    <p className="text-xs uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
                      Likwiid Direct
                    </p>
                    <p className="mt-1 font-semibold font-[family-name:var(--font-display)] text-text-primary">
                      {t('direct.ownerMockSubject')}
                    </p>
                  </div>
                  <div className="space-y-2 px-5 py-4 text-sm">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-tertiary">{t('direct.ownerMockGuestLabel')}</span>
                      <span className="text-text-primary font-medium">{t('direct.ownerMockGuestName')}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-tertiary">{t('direct.ownerMockRoomLabel')}</span>
                      <span className="text-text-primary">{t('direct.ownerMockRoomName')}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-tertiary">{t('direct.ownerMockDatesLabel')}</span>
                      <span className="text-text-primary">{t('direct.ownerMockDatesValue')}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-tertiary">{t('direct.ownerMockGuestsLabel')}</span>
                      <span className="text-text-primary">{OWNER_MOCK_AMOUNTS.guests}</span>
                    </div>
                  </div>
                  <div className="space-y-2 border-t border-border px-5 py-4 text-sm">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-secondary">{t('direct.ownerMockRoomLabel')}</span>
                      <span className="text-text-primary">{OWNER_MOCK_AMOUNTS.room}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-secondary">{t('direct.ownerMockExtra1')}</span>
                      <span className="text-text-primary">{OWNER_MOCK_AMOUNTS.extra1}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-secondary">{t('direct.ownerMockExtra2')}</span>
                      <span className="text-text-primary">{OWNER_MOCK_AMOUNTS.extra2}</span>
                    </div>
                    <div className="mt-2 flex items-baseline justify-between gap-4 border-t border-border pt-3">
                      <span className="font-semibold text-text-primary">{t('direct.ownerMockTotalLabel')}</span>
                      <span className="font-semibold text-text-primary">{OWNER_MOCK_AMOUNTS.total}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-accent-gold">{t('direct.ownerMockDepositLabel')}</span>
                      <span className="text-accent-gold font-medium">{OWNER_MOCK_AMOUNTS.deposit}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-secondary">{t('direct.ownerMockBalanceLabel')}</span>
                      <span className="text-text-primary">{OWNER_MOCK_AMOUNTS.balance}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mock availability editor */}
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
                  {t('direct.ownerCalTitle')}
                </h3>
                <div className="mt-3 rounded-xl border border-border bg-bg-secondary/50 px-5 py-4">
                  <p className="font-semibold font-[family-name:var(--font-display)] text-text-primary">
                    {t('direct.ownerMockMonth')}
                  </p>
                  <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs">
                    {t('direct.ownerMockWeekdays')
                      .split(' ')
                      .map((day, index) => (
                        <div key={`wd-${index}`} className="py-1 text-text-tertiary font-[family-name:var(--font-mono)]">
                          {day}
                        </div>
                      ))}
                    {Array.from({ length: CAL_LEADING_BLANKS }, (_, index) => (
                      <div key={`blank-${index}`} />
                    ))}
                    {Array.from({ length: CAL_DAYS }, (_, index) => {
                      const day = index + 1
                      const isBooked = CAL_BOOKED.includes(day)
                      const isBlocked = CAL_BLOCKED.includes(day)
                      return (
                        <div
                          key={`day-${day}`}
                          className={
                            isBooked
                              ? 'rounded-md bg-accent-gold-dim py-1.5 font-medium text-accent-gold'
                              : isBlocked
                                ? 'rounded-md bg-bg-tertiary py-1.5 text-text-tertiary line-through'
                                : 'py-1.5 text-text-secondary'
                          }
                        >
                          {day}
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-xs text-text-tertiary">
                    <span className="inline-flex items-center gap-1.5">
                      <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm bg-accent-gold-dim border border-accent-gold/40" />
                      {t('direct.ownerMockLegendBooked')}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm bg-bg-tertiary border border-border" />
                      {t('direct.ownerMockLegendBlocked')}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-lg border border-border px-4 py-3">
                    <span className="text-sm text-text-secondary">{t('direct.ownerMockBlockLabel')}</span>
                    <span aria-hidden="true" className="relative inline-block h-5 w-9 rounded-full bg-accent-gold">
                      <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-text-tertiary">{t('direct.ownerCaption')}</p>
          </section>

          {/* Ownership */}
          <div className="mt-20 rounded-lg border border-border bg-bg-secondary/50 p-8 md:p-12">
            <p className="max-w-3xl text-lg text-text-secondary leading-relaxed">
              {t('direct.ownership')}
            </p>
          </div>

          {/* Honest scarcity */}
          <p className="mt-12 max-w-3xl text-text-secondary leading-relaxed">
            {t('direct.scarcity')}
          </p>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <Button variant="primary" size="lg" href="/contact">
              {t('direct.ctaTalk')}
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
