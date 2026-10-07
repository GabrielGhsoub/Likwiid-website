import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '../ui/SectionHeading'
import { BrowserFrame } from '../ui/BrowserFrame'
import { Reveal } from '../ui/Reveal'
import { directDemoHref, frameDemoHref } from '../../utils/demoLinks'
import { umamiAttrs } from '../../utils/analytics'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'

// The demos' "Back to Likwiid" chip returns visitors to the home page.
const BACK_PATH = '/'

export function ProductsStrip() {
  const { t, i18n } = useTranslation()
  const localize = useLocalizedPath()

  // Brand names are the same in every language, so they live here, not in the locale files.
  const products = [
    {
      key: 'direct',
      name: 'Likwiid Direct',
      to: '/direct',
      image: '/direct-demo-preview.jpg',
      demoHref: directDemoHref(i18n.language ?? '', BACK_PATH),
    },
    {
      key: 'frame',
      name: 'Likwiid Frame',
      to: '/frame',
      image: '/frame-demo-ana-preview.jpg',
      demoHref: frameDemoHref(BACK_PATH),
    },
  ] as const

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title={t('productsStrip.title')} subtitle={t('productsStrip.subtitle')} />

        <Reveal className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.key}
              className="flex flex-col rounded-xl border border-border bg-bg-secondary p-5 transition-colors duration-200 hover:border-border-hover md:p-6"
            >
              <Link to={localize(product.to)} tabIndex={-1} aria-hidden="true" className="block no-underline">
                <BrowserFrame image={product.image} alt="" />
              </Link>
              <h3 className="mt-6 text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                {product.name}
              </h3>
              <p className="mt-2 flex-1 text-text-secondary leading-relaxed">{t(`productsStrip.${product.key}Body`)}</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
                <Link to={localize(product.to)} className="inline-flex items-center gap-1.5 text-accent-gold no-underline hover:underline">
                  {t('productsStrip.seeProduct', { name: product.name })}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <a
                  href={product.demoHref}
                  className="inline-flex items-center gap-1.5 text-text-secondary no-underline hover:text-text-primary"
                  {...umamiAttrs('demo-launch', { product: product.key, demo: 'default', location: 'home-products' })}
                >
                  <Play size={14} aria-hidden="true" />
                  {t('productsStrip.tryDemo')}
                </a>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
