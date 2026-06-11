import { useEffect } from 'react'
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

const PAIN_POINTS = [
  'Customers can only book by phone, so evening and weekend requests go to whoever answers first.',
  'Marketplace apps take a commission on every booking that should have been yours.',
  'No-shows cost you hours because nothing collects a deposit or sends a reminder.',
  'Your only web presence is an Instagram page, so you never own your customer list.',
]

const FEATURES = [
  {
    icon: CalendarCheck,
    title: 'Real online booking',
    description:
      'Customers see your actual availability and pick a time slot themselves. No back-and-forth calls, no waiting for a callback.',
  },
  {
    icon: Wallet,
    title: 'Deposits and payments',
    description:
      'Take a card deposit at booking time so no-shows stop costing you money. We work with the payment providers available in your country.',
  },
  {
    icon: BellRing,
    title: 'Automatic reminders',
    description:
      'WhatsApp or email reminders go out before every appointment, without anyone on your team lifting a finger.',
  },
  {
    icon: Globe,
    title: 'A site you own',
    description:
      'Your own domain, your own customer list, your own brand. No commissions to a marketplace, no platform lock-in.',
  },
]

const PRICING_INCLUDES = [
  'Design and build, mobile-first',
  'Online booking or ordering flow',
  'WhatsApp click-to-chat built in',
  'Hosting and domain setup',
  'Training so your team can run it',
  'A real person who replies within 24 hours',
]

export default function BookingWebsites() {
  useEffect(() => {
    document.title = 'Booking Websites for Salons, Clinics & Small Hotels | Likwiid'
  }, [])

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
              Websites with online booking for salons, clinics, and small hotels.
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              Your customers want to book at 11pm from their phone. If your website can&apos;t take that booking,
              they move on to one that can. We build simple, fast websites where customers book and pay
              online, and you keep every booking commission-free.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href={SOCIAL.whatsapp}>
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon size={18} />
                  Chat on WhatsApp
                </span>
              </Button>
              <Button variant="secondary" size="lg" href="/contact">
                Send a message
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
            {PAIN_POINTS.map((point) => (
              <div
                key={point}
                className="rounded-lg border border-border bg-bg-secondary/50 p-5 text-text-secondary leading-relaxed"
              >
                {point}
              </div>
            ))}
          </m.div>

          {/* What you get */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary">
              What you get
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="rounded-lg border border-border p-6">
                  <feature.icon size={24} className="text-accent-gold" />
                  <h3 className="mt-4 text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Proof: real booking platform we built */}
          <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary">
                We have built this before.
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                We designed and built a complete court-booking platform: customers browse available
                slots, book, and pay from their phone, and the owners manage everything from an admin
                dashboard. The same building blocks work for salon appointments, clinic visits, and
                hotel room reservations.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                What this means for your business: customers book and pay online instead of calling or
                sending a DM and hoping someone answers.
              </p>
              <div className="mt-6">
                <Link
                  to="/work/padel-booking"
                  className="text-accent-gold hover:underline font-medium"
                >
                  See the booking platform case study →
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
                title="Likwiid booking platform"
                platform="mobile"
              />
            </div>
          </div>

          {/* Pricing anchor */}
          <div className="mt-20 rounded-lg border border-border bg-bg-secondary/50 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary">
                  Straightforward pricing
                </h2>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  Booking websites start from <span className="text-text-primary font-semibold">$1,500</span>.
                  Most projects land between <span className="text-text-primary font-semibold">$8,000 and $15,000</span>{' '}
                  depending on payments, integrations, and content, and take 2 to 4 weeks.
                </p>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  We are a two-person studio and take on 2 to 3 projects at a time, so you always talk
                  to the person actually building your site.
                </p>
              </div>
              <ul className="space-y-3">
                {PRICING_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <Check size={18} className="text-accent-gold mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary">
              Want to see what this looks like for your business?
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
              Send us your current website or Instagram page and we&apos;ll reply with a short, free
              list of what we would fix first. No obligation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href={SOCIAL.whatsapp}>
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon size={18} />
                  Chat on WhatsApp
                </span>
              </Button>
              <Button variant="secondary" size="lg" href={`mailto:${SOCIAL.email}`}>
                Email {SOCIAL.email}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
