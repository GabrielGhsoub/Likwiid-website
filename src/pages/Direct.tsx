import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import {
  SlidersHorizontal,
  CreditCard,
  Code2,
  Users,
  ListChecks,
  LayoutDashboard,
  Check,
  ArrowRight,
} from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { FounderLine } from '../components/ui/FounderLine'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { EscuelaProof } from '../components/sections/EscuelaProof'
import { PriceBlock } from '../components/sections/PriceBlock'
import { FaqList, type FaqKey } from '../components/sections/FaqList'
import { GuideLinks } from '../components/sections/GuideLinks'
import { ContactBlock } from '../components/sections/ContactBlock'
import { DIRECT_DEMO_CARDS as DEMO_CARDS } from '../data/directDemos'
import { DemoCard } from '../components/ui/DemoCard'
import { BUTTON_LINK_PRIMARY_LG, BUTTON_LINK_SECONDARY_MD } from '../components/ui/buttonLink'
import { directDemoHref } from '../utils/demoLinks'
import { useTheme } from '../hooks/useTheme'
import { umamiAttrs } from '../utils/analytics'
import { useCurrentLanguage, useLocalizedPath } from '../i18n/useLocalizedPath'
import { DIRECT_MARKET_SLUGS, directMarketLanguages, directMarketPath, withTrailingSlash } from '../i18n/localeRoutes'

// Static owner-panel illustration data (sample figures, not live bookings).
const OWNER_MOCK_AMOUNTS = { room: 420, extra1: 70, extra2: 54, total: 544, deposit: 163.2, balance: 380.8 } as const
const OWNER_MOCK_GUESTS = '2'

// English keeps the "EUR 420.00" form used across the site; the other languages use their own
// money format (420,00 € in Spanish, Portuguese, Italian and French).
function formatEur(lang: string, amount: number): string {
  if (lang === 'en') return `EUR ${amount.toFixed(2)}`
  return new Intl.NumberFormat(lang, { style: 'currency', currency: 'EUR' }).format(amount)
}

const DIRECT_FAQ: readonly FaqKey[] = ['cost', 'site', 'after', 'money', 'pay', 'stop', 'terms', 'language']

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
  { icon: LayoutDashboard, titleKey: 'feature8Title', descKey: 'feature8Desc' },
  { icon: Code2, titleKey: 'feature3Title', descKey: 'feature3Desc' },
] as const

const SITE_ITEM_KEYS = ['siteItem1', 'siteItem2', 'siteItem3', 'siteItem4', 'siteItem5', 'siteItem6'] as const

interface Segment {
  title: string
  desc: string
}

const H2 = 'text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary'

export default function Direct() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language ?? ''
  // This page's own path, localized or not: the demo's "Back to Likwiid" chip returns here.
  const BACK_PATH = useLocation().pathname
  const { theme } = useTheme()
  const localize = useLocalizedPath()
  const segmentList = t('direct.segments', { returnObjects: true })
  const segments: Segment[] = Array.isArray(segmentList) ? segmentList : []
  // Pages for one market or kind of business that exist in the reader's language.
  const readerLang = useCurrentLanguage()
  const marketLinks = DIRECT_MARKET_SLUGS.filter((market) => directMarketLanguages(market).includes(readerLang))

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
            <FounderLine className="mt-6" />
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={directDemoHref(lang, BACK_PATH, 'quinta-likwiid', theme)}
                className={BUTTON_LINK_PRIMARY_LG}
                {...umamiAttrs('demo-launch', { product: 'direct', demo: DEMO_CARDS[0].slug, location: 'direct-hero' })}
              >
                {t('direct.ctaDemo')}
              </a>
              <WhatsAppButton location="direct-hero" />
            </div>
            <Link
              to={localize('/contact')}
              className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-medium text-text-primary no-underline hover:text-accent-gold"
            >
              {t('direct.ctaTalk')}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Who it is for: the kinds of business each language's visitors search for. The
              list length varies per language, so it comes from the locale as an array. */}
          <section aria-labelledby="segments-heading" className="mt-14">
            <h2 id="segments-heading" className={H2}>
              {t('direct.segmentsTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
              {t('direct.segmentsIntro')}
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
              {segments.map((segment) => (
                <li key={segment.title} className="flex items-start gap-3">
                  <Check size={18} className="mt-1 shrink-0 text-text-tertiary" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold font-[family-name:var(--font-display)] text-text-primary">{segment.title}</h3>
                    <p className="mt-1 text-text-secondary leading-relaxed">{segment.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            {marketLinks.length > 0 && (
              <div className="mt-10">
                <h3 className="text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
                  {t('direct.marketLinksTitle')}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {marketLinks.map((market) => (
                    <li key={market}>
                      <Link to={withTrailingSlash(directMarketPath(market, readerLang))} className={BUTTON_LINK_SECONDARY_MD}>
                        {t(`direct.marketLinks.${market}`)}
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <EscuelaProof flush />

          {/* Request mode leads: nothing confirms and nothing is charged until
              the owner says so. Instant booking with a deposit is the upgrade. */}
          <section aria-labelledby="request-heading" className="mt-8">
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
                  href={directDemoHref(lang, BACK_PATH, card.slug, theme)}
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
                      <span className="text-text-primary">{OWNER_MOCK_GUESTS}</span>
                    </div>
                  </div>
                  <div className="space-y-2 border-t border-border px-5 py-4 text-sm">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-secondary">{t('direct.ownerMockRoomLabel')}</span>
                      <span className="text-text-primary">{formatEur(readerLang, OWNER_MOCK_AMOUNTS.room)}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-secondary">{t('direct.ownerMockExtra1')}</span>
                      <span className="text-text-primary">{formatEur(readerLang, OWNER_MOCK_AMOUNTS.extra1)}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-secondary">{t('direct.ownerMockExtra2')}</span>
                      <span className="text-text-primary">{formatEur(readerLang, OWNER_MOCK_AMOUNTS.extra2)}</span>
                    </div>
                    <div className="mt-2 flex items-baseline justify-between gap-4 border-t border-border pt-3">
                      <span className="font-semibold text-text-primary">{t('direct.ownerMockTotalLabel')}</span>
                      <span className="font-semibold text-text-primary">{formatEur(readerLang, OWNER_MOCK_AMOUNTS.total)}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-accent-gold">{t('direct.ownerMockDepositLabel')}</span>
                      <span className="text-accent-gold font-medium">{formatEur(readerLang, OWNER_MOCK_AMOUNTS.deposit)}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-text-secondary">{t('direct.ownerMockBalanceLabel')}</span>
                      <span className="text-text-primary">{formatEur(readerLang, OWNER_MOCK_AMOUNTS.balance)}</span>
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
                  to={localize('/work/escuela-nautica-valencia')}
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

          {/* Free OTA commission calculator */}
          <Link
            to={localize('/tools/ota-commission-calculator')}
            className="mt-16 inline-block font-medium text-accent-gold no-underline hover:underline"
          >
            {t('tools.ota.crossLink')}
            <ArrowRight size={16} aria-hidden="true" className="ml-1.5 inline-block align-[-3px]" />
          </Link>

          <GuideLinks className="mt-10" />

          <PriceBlock flush showFrame={false} showFirstProperty={false} />

          {/* Honest scarcity, next to the price */}
          <p className="-mt-4 max-w-3xl rounded-lg border border-border bg-bg-secondary/50 p-4 text-text-secondary leading-relaxed">
            {t('direct.scarcity')}
          </p>

          <FaqList flush title={t('direct.faqTitle')} items={DIRECT_FAQ} />
        </div>
      </div>

      <ContactBlock />
    </PageTransition>
  )
}
