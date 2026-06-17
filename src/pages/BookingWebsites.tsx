import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { m } from 'framer-motion'
import { CalendarCheck, BellRing, Wallet, Globe, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon'
import { ScreenshotCarousel } from '../components/ui/ScreenshotCarousel'
import { SOCIAL } from '../utils/constants'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const TRANSITION_DELAY_01 = { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_DELAY_02 = { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }

const PAIN_POINT_KEYS = ['painPoint1', 'painPoint2', 'painPoint3', 'painPoint4'] as const

const FEATURES = [
  { icon: CalendarCheck, titleKey: 'feature1Title', descKey: 'feature1Desc' },
  { icon: Wallet, titleKey: 'feature2Title', descKey: 'feature2Desc' },
  { icon: BellRing, titleKey: 'feature3Title', descKey: 'feature3Desc' },
  { icon: Globe, titleKey: 'feature4Title', descKey: 'feature4Desc' },
] as const

const PRICING_INCLUDE_KEYS = [
  'pricingItem1',
  'pricingItem2',
  'pricingItem3',
  'pricingItem4',
  'pricingItem5',
  'pricingItem6',
] as const

export default function BookingWebsites() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('booking.docTitle')
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
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] text-text-primary leading-tight">
              {t('booking.heroTitle')}
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              {t('booking.heroSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href={SOCIAL.whatsapp}>
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon size={18} />
                  {t('booking.chatWhatsApp')}
                </span>
              </Button>
              <Button variant="secondary" size="lg" href="/contact">
                {t('booking.sendMessage')}
              </Button>
            </div>
          </m.div>

          {/* Pain points */}
          <m.div
            initial={FADE_UP_INITIAL}
            animate={FADE_UP_ANIMATE}
            transition={TRANSITION_DELAY_02}
            className="mt-20 grid md:grid-cols-2 gap-4"
          >
            {PAIN_POINT_KEYS.map((key) => (
              <div
                key={key}
                className="rounded-lg border border-border bg-bg-secondary/50 p-5 text-text-secondary leading-relaxed"
              >
                {t(`booking.${key}`)}
              </div>
            ))}
          </m.div>

          {/* What you get */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary">
              {t('booking.whatYouGetTitle')}
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {FEATURES.map((feature) => (
                <div key={feature.titleKey} className="rounded-lg border border-border p-6">
                  <feature.icon size={24} className="text-accent-gold" />
                  <h3 className="mt-4 text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
                    {t(`booking.${feature.titleKey}`)}
                  </h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">{t(`booking.${feature.descKey}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Proof: real booking platform we built */}
          <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary">
                {t('booking.proofTitle')}
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {t('booking.proofPara1')}
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {t('booking.proofPara2')}
              </p>
              <div className="mt-6">
                <Link
                  to="/work/padel-booking"
                  className="text-accent-gold hover:underline font-medium"
                >
                  {t('booking.caseStudyLink')}
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ScreenshotCarousel
                images={[
                  '/images/projects/padel/home.webp',
                  '/images/projects/padel/play.webp',
                  '/images/projects/padel/league.webp',
                  '/images/projects/padel/profile.webp',
                ]}
                title={t('booking.carouselTitle')}
                platform="mobile"
              />
            </div>
          </div>

          {/* Pricing anchor */}
          <div className="mt-20 rounded-lg border border-border bg-bg-secondary/50 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary">
                  {t('booking.pricingTitle')}
                </h2>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {t('booking.pricingPara1a')} <span className="text-text-primary font-semibold">$1,500</span>.
                  {' '}{t('booking.pricingPara1b')} <span className="text-text-primary font-semibold">{t('booking.pricingRange')}</span>{' '}
                  {t('booking.pricingPara1c')}
                </p>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {t('booking.pricingPara2')}
                </p>
              </div>
              <ul className="space-y-3">
                {PRICING_INCLUDE_KEYS.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-text-secondary">
                    <Check size={18} className="text-accent-gold mt-1 shrink-0" />
                    {t(`booking.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary">
              {t('booking.finalCtaTitle')}
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
              {t('booking.finalCtaSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href={SOCIAL.whatsapp}>
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon size={18} />
                  {t('booking.chatWhatsApp')}
                </span>
              </Button>
              <Button variant="secondary" size="lg" href={`mailto:${SOCIAL.email}`}>
                {t('booking.emailLabel')} {SOCIAL.email}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
