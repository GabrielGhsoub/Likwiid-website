import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { BrowserFrame } from '../components/ui/BrowserFrame'
import { BUTTON_LINK_SECONDARY_MD } from '../components/ui/buttonLink'
import { Button } from '../components/ui/Button'
import { directDemoHref, frameDemoHref } from '../utils/demoLinks'

// This page's own path: the demos' "Back to Likwiid" chip returns visitors here.
const BACK_PATH = '/products'

// Brand names are the same in every language, so they live here rather than in
// the locale files. Copy lives under the "products" namespace.
const PRODUCT_BLOCKS = [
  { key: 'direct', name: 'Likwiid Direct', to: '/direct', image: '/direct-demo-preview.jpg' },
  { key: 'frame', name: 'Likwiid Frame', to: '/frame', image: '/frame-demo-ana-preview.jpg' },
] as const

const POINTS = [1, 2, 3] as const

export default function Products() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('products.docTitle')
  }, [t])

  const demoHrefs: Record<(typeof PRODUCT_BLOCKS)[number]['key'], string> = {
    direct: directDemoHref(i18n.language ?? '', BACK_PATH),
    frame: frameDemoHref(BACK_PATH),
  }

  return (
    <PageTransition>
      <div className="px-6 pt-28 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary">
              {t('products.title')}
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">{t('products.intro')}</p>
            <p className="mt-3 text-sm text-text-tertiary leading-relaxed">{t('products.demoNote')}</p>
          </div>

          <div className="mt-12 space-y-8">
            {PRODUCT_BLOCKS.map((product, index) => (
              <section
                key={product.key}
                aria-labelledby={`product-${product.key}-heading`}
                className="rounded-xl border border-border bg-bg-secondary p-6 md:p-10"
              >
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  <Link
                    to={product.to}
                    tabIndex={-1}
                    aria-hidden="true"
                    className={`block no-underline ${index % 2 === 1 ? 'lg:order-last' : ''}`}
                  >
                    <BrowserFrame image={product.image} alt={t(`products.${product.key}ImageAlt`)} priority={index === 0} />
                  </Link>

                  <div>
                    <h2
                      id={`product-${product.key}-heading`}
                      className="text-2xl md:text-3xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary"
                    >
                      {product.name}
                    </h2>
                    <p className="mt-2 font-medium text-text-primary">{t(`products.${product.key}Desc`)}</p>
                    <p className="mt-4 text-text-secondary leading-relaxed">{t(`products.${product.key}Body`)}</p>

                    <ul className="mt-6 space-y-2.5">
                      {POINTS.map((n) => (
                        <li key={n} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                          <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-text-tertiary" aria-hidden="true" />
                          {t(`products.${product.key}Point${n}`)}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Button variant="primary" size="md" href={product.to}>
                        {t(`products.${product.key}PageLink`)}
                        <ArrowRight size={16} aria-hidden="true" />
                      </Button>
                      <a href={demoHrefs[product.key]} className={BUTTON_LINK_SECONDARY_MD}>
                        <Play size={16} aria-hidden="true" />
                        {t(`products.${product.key}DemoLink`)}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
