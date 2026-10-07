import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import {
  SlidersHorizontal,
  CreditCard,
  Code2,
  Languages,
  Users,
  ListChecks,
  ShieldCheck,
  LayoutDashboard,
  Check,
  ArrowRight,
} from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'
import { DemoCard } from '../components/ui/DemoCard'
import { BUTTON_LINK_PRIMARY_LG } from '../components/ui/buttonLink'
import { directDemoHref } from '../utils/demoLinks'
import { umamiAttrs } from '../utils/analytics'

const DEMO_CARDS = [
  {
    slug: 'quinta-likwiid',
    titleKey: 'demoCard1Title',
    propertyKey: 'demoCard1Property',
    image: '/direct-demo-preview.jpg',
    imageWidth: 1280,
    imageHeight: 900,
  },
  {
    slug: 'atelier-likwiid',
    titleKey: 'demoCard2Title',
    propertyKey: 'demoCard2Property',
    image: '/direct-demo-atelier-preview.jpg',
    imageWidth: 1200,
    imageHeight: 844,
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

// Every card describes something the public demos let a visitor try.
const FEATURES = [
  { icon: SlidersHorizontal, titleKey: 'feature1Title', descKey: 'feature1Desc' },
  { icon: CreditCard, titleKey: 'feature2Title', descKey: 'feature2Desc' },
  { icon: Users, titleKey: 'feature5Title', descKey: 'feature5Desc' },
  { icon: ListChecks, titleKey: 'feature6Title', descKey: 'feature6Desc' },
  { icon: ShieldCheck, titleKey: 'feature7Title', descKey: 'feature7Desc' },
  { icon: LayoutDashboard, titleKey: 'feature8Title', descKey: 'feature8Desc' },
  { icon: Code2, titleKey: 'feature3Title', descKey: 'feature3Desc' },
  { icon: Languages, titleKey: 'feature4Title', descKey: 'feature4Desc' },
] as const

const SITE_ITEM_KEYS = ['siteItem1', 'siteItem2', 'siteItem3', 'siteItem4', 'siteItem5', 'siteItem6'] as const

const H2 = 'text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary'

export default function Direct() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language ?? ''
  // This page's own path, localized or not: the demo's "Back to Likwiid" chip returns here.
  const BACK_PATH = useLocation().pathname

  useEffect(() => {
    document.title = t('direct.docTitle')
  }, [t])

  return (
    <PageTransition>
      <div className="px-6 pt-28 pb-16">
        <div className="mx-auto max-w-[1200px]">
          {/* Hero */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
              {t('direct.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary leading-tight">
              {t('direct.heroTitle')}
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              {t('direct.heroSubtitle')}
            </p>
            <p className="mt-4 text-text-primary">{t('direct.audience')}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={directDemoHref(lang, BACK_PATH)}
                className={BUTTON_LINK_PRIMARY_LG}
                {...umamiAttrs('demo-launch', { product: 'direct', demo: DEMO_CARDS[0].slug, location: 'direct-hero' })}
              >
                {t('direct.ctaDemo')}
              </a>
              <Button variant="secondary" size="lg" href="/contact" umamiEvent="cta-start-project" umamiData={{ location: 'direct-hero' }}>
                {t('direct.ctaTalk')}
              </Button>
            </div>
          </div>

          {/* Request mode leads: nothing confirms and nothing is charged until
              the owner says so. Instant booking with a deposit is the upgrade. */}
          <section aria-labelledby="request-heading" className="mt-20">
            <h2 id="request-heading" className={H2}>
              {t('direct.requestTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('direct.requestBody')}
            </p>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('direct.requestNote')}
            </p>
          </section>

          {/* Live demo */}
          <section id="demo" aria-labelledby="demo-heading" className="mt-20 scroll-mt-24">
            <h2 id="demo-heading" className={H2}>
              {t('direct.demoTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('direct.demoNote')}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {DEMO_CARDS.map((card) => (
                <DemoCard
                  key={card.slug}
                  href={directDemoHref(lang, BACK_PATH, card.slug)}
                  image={card.image}
                  imageWidth={card.imageWidth}
                  imageHeight={card.imageHeight}
                  alt={t('direct.demoPreviewAlt')}
                  name={t(`direct.${card.propertyKey}`)}
                  description={t(`direct.${card.titleKey}`)}
                  launchLabel={t('direct.demoLaunch')}
                  umamiEvent="demo-launch"
                  umamiData={{ product: 'direct', demo: card.slug, location: 'direct-demos' }}
                />
              ))}
            </div>
          </section>

          {/* Features */}
          <div className="mt-20 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <div key={feature.titleKey} className="rounded-xl border border-border bg-bg-secondary p-6">
                <feature.icon size={22} className="text-text-tertiary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
                  {t(`direct.${feature.titleKey}`)}
                </h3>
                <p className="mt-2 text-text-secondary leading-relaxed">{t(`direct.${feature.descKey}`)}</p>
              </div>
            ))}
          </div>

          {/* Calendar sync */}
          <section aria-labelledby="sync-heading" className="mt-20">
            <h2 id="sync-heading" className={H2}>
              {t('direct.syncTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('direct.syncBody')}
            </p>
          </section>

          {/* Owner panel illustration */}
          <section aria-labelledby="owner-heading" className="mt-20">
            <div className="flex flex-wrap items-center gap-3">
              <h2 id="owner-heading" className={H2}>
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
                <div className="mt-3 overflow-hidden rounded-xl border border-border bg-bg-secondary">
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
                <div className="mt-3 rounded-xl border border-border bg-bg-secondary px-5 py-4">
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

          {/* The whole website: the booking-websites package, absorbed from /booking-websites */}
          <section
            id="website"
            aria-labelledby="website-heading"
            className="mt-20 scroll-mt-24 rounded-xl border border-border bg-bg-secondary p-8 md:p-12"
          >
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 id="website-heading" className={H2}>
                  {t('direct.siteTitle')}
                </h2>
                <p className="mt-4 text-text-secondary leading-relaxed">{t('direct.siteBody')}</p>
                <p className="mt-4 text-text-secondary leading-relaxed">{t('direct.proofBody')}</p>
                <Link
                  to="/work/padel-booking"
                  className="mt-4 inline-block font-medium text-accent-gold no-underline hover:underline"
                >
                  {t('direct.proofLink')}
                  <ArrowRight size={16} aria-hidden="true" className="ml-1.5 inline-block align-[-3px]" />
                </Link>
              </div>
              <ul className="space-y-3">
                {SITE_ITEM_KEYS.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-text-secondary">
                    <Check size={18} className="mt-1 shrink-0 text-text-tertiary" aria-hidden="true" />
                    {t(`direct.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Honest scarcity */}
          <p className="mt-16 max-w-3xl text-text-secondary leading-relaxed">
            {t('direct.scarcity')}
          </p>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <Button variant="primary" size="lg" href="/contact" umamiEvent="cta-start-project" umamiData={{ location: 'direct-footer' }}>
              {t('direct.ctaTalk')}
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
