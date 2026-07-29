import { useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { m } from 'framer-motion'
import { SlidersHorizontal, CreditCard, Code2, Languages } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const TRANSITION_DELAY_01 = { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_DELAY_02 = { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }

const DEMO_ORIGIN = 'https://gabrielghsoub.github.io'
const DEMO_BASE_URL = `${DEMO_ORIGIN}/likwiid-direct-demo/?embed=1&slug=quinta-do-fluxo`
// Languages the embedded demo ships with; other site languages fall back to the demo default.
const DEMO_LANGS = ['pt', 'en', 'es'] as const

const FEATURES = [
  { icon: SlidersHorizontal, titleKey: 'feature1Title', descKey: 'feature1Desc' },
  { icon: CreditCard, titleKey: 'feature2Title', descKey: 'feature2Desc' },
  { icon: Code2, titleKey: 'feature3Title', descKey: 'feature3Desc' },
  { icon: Languages, titleKey: 'feature4Title', descKey: 'feature4Desc' },
] as const

export default function Direct() {
  const { t, i18n } = useTranslation()
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    document.title = t('direct.docTitle')
  }, [t])

  // Open the demo in the visitor's language when the demo supports it.
  const demoSrc = useMemo(() => {
    const lang = (i18n.language ?? '').slice(0, 2)
    return (DEMO_LANGS as readonly string[]).includes(lang) ? `${DEMO_BASE_URL}&lang=${lang}` : DEMO_BASE_URL
  }, [i18n.language])

  // The embedded demo posts its content height so the iframe can grow without inner scrollbars.
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== DEMO_ORIGIN) return
      const data = event.data as { type?: string; height?: number } | null
      if (data?.type === 'lkd:height' && typeof data.height === 'number' && iframeRef.current) {
        iframeRef.current.style.height = `${Math.max(560, data.height)}px`
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

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
              <Button variant="primary" size="lg" onClick={scrollToDemo}>
                {t('direct.ctaDemo')}
              </Button>
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
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-bg-secondary/50">
              <iframe
                ref={iframeRef}
                src={demoSrc}
                title={t('direct.demoIframeTitle')}
                loading="lazy"
                className="block w-full"
                style={{ border: 0, borderRadius: 16, minHeight: 720 }}
              />
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
