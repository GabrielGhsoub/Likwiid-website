import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import {
  BUTTON_LINK_HOVER,
  BUTTON_LINK_SECONDARY_MD,
  BUTTON_LINK_TAP,
} from '../components/ui/buttonLink'
import { DIRECT_DEMO_ORIGIN, FRAME_DEMO_ORIGIN, withLikwiidReturn } from '../config/demoOrigins'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const CARD_VIEWPORT = { once: true, margin: '-40px' } as const
const TRANSITION_DELAY_01 = { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }
const SECTION_TRANSITION = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }

// This page's own path: the demos' "Back to Likwiid" chip returns visitors here.
const BACK_PATH = '/products'

// Languages the Direct demo ships with; other site languages fall back to the demo default.
const DIRECT_DEMO_LANGS = ['pt', 'en', 'es'] as const

/** Direct demo URL in the visitor's language when the demo supports it. */
function directDemoHref(lang: string) {
  const base = `${DIRECT_DEMO_ORIGIN}/p/quinta-likwiid`
  const short = (lang ?? '').slice(0, 2)
  const localized = (DIRECT_DEMO_LANGS as readonly string[]).includes(short) ? `${base}?lang=${short}` : base
  return withLikwiidReturn(localized, BACK_PATH)
}

const FRAME_DEMO_HREF = withLikwiidReturn(`${FRAME_DEMO_ORIGIN}/p/ana-likwiid`, BACK_PATH)

// Brand names are the same in every language, so they live here rather than in
// the locale files. Copy lives under the "products" namespace.
const PRODUCT_BLOCKS = [
  {
    key: 'direct',
    name: 'Likwiid Direct',
    to: '/direct',
    image: '/direct-demo-preview.jpg',
  },
  {
    key: 'frame',
    name: 'Likwiid Frame',
    to: '/frame',
    image: '/frame-demo-ana-preview.jpg',
  },
] as const

function BrowserFrame({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="bg-bg-tertiary px-2 py-1 flex items-center gap-1.5">
        <div className="flex items-center gap-1">
          <div className="w-[6px] h-[6px] rounded-full bg-[#ff5f57]" />
          <div className="w-[6px] h-[6px] rounded-full bg-[#febc2e]" />
          <div className="w-[6px] h-[6px] rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-bg-secondary rounded px-2 py-0.5">
          <div className="w-[40%] h-[4px] rounded bg-border" />
        </div>
      </div>
      <img
        src={image}
        alt={alt}
        className="block w-full aspect-[16/10] object-cover object-top"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default function Products() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('products.docTitle')
  }, [t])

  const demoHrefs: Record<(typeof PRODUCT_BLOCKS)[number]['key'], string> = {
    direct: directDemoHref(i18n.language ?? ''),
    frame: FRAME_DEMO_HREF,
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
              {t('products.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] text-text-primary leading-tight">
              {t('products.title')}
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              {t('products.intro')}
            </p>
            <p className="mt-4 text-sm text-text-tertiary leading-relaxed">
              {t('products.demoNote')}
            </p>
          </m.div>

          {/* One substantial block per product */}
          <div className="mt-16 space-y-16">
            {PRODUCT_BLOCKS.map((product, index) => (
              <m.section
                key={product.key}
                aria-labelledby={`product-${product.key}-heading`}
                initial={FADE_UP_INITIAL}
                whileInView={FADE_UP_VISIBLE}
                viewport={CARD_VIEWPORT}
                transition={SECTION_TRANSITION}
                className="rounded-xl border border-border bg-bg-secondary/50 p-6 md:p-10"
              >
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Preview */}
                  <Link
                    to={product.to}
                    aria-label={t(`products.${product.key}PageLink`)}
                    tabIndex={-1}
                    className={`block no-underline ${index % 2 === 1 ? 'lg:order-last' : ''}`}
                  >
                    <div className="transition-transform duration-500 ease-out hover:scale-[1.02]">
                      <BrowserFrame image={product.image} alt={t(`products.${product.key}ImageAlt`)} />
                    </div>
                  </Link>

                  {/* Copy */}
                  <div>
                    <h2
                      id={`product-${product.key}-heading`}
                      className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-text-primary"
                    >
                      {product.name}
                    </h2>
                    <p className="mt-2 text-accent-gold font-medium">
                      {t(`products.${product.key}Desc`)}
                    </p>
                    <p className="mt-4 text-text-secondary leading-relaxed">
                      {t(`products.${product.key}Body`)}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {[1, 2, 3, 4].map((n) => (
                        <li key={n} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold" aria-hidden="true" />
                          {t(`products.${product.key}Point${n}`)}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        to={product.to}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent-gold px-6 py-3 text-base font-semibold text-white no-underline transition-opacity hover:opacity-90"
                      >
                        {t(`products.${product.key}PageLink`)}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </Link>
                      <m.a
                        href={demoHrefs[product.key]}
                        className={BUTTON_LINK_SECONDARY_MD}
                        whileHover={BUTTON_LINK_HOVER}
                        whileTap={BUTTON_LINK_TAP}
                      >
                        <Play size={16} aria-hidden="true" />
                        {t(`products.${product.key}DemoLink`)}
                      </m.a>
                    </div>
                  </div>
                </div>
              </m.section>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
