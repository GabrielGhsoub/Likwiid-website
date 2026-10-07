import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'

// Plain typographic hero. Nothing here is animated or opacity-gated: the H1 is the
// largest contentful paint and must render on the first frame.
export function Hero() {
  const { t } = useTranslation()
  const localize = useLocalizedPath()

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden px-6 pt-28 pb-16">
      {/* Dark theme only: faint water ripple (Unsplash Licence) on the right, masked out before the text. */}
      <div aria-hidden="true" className="hero-ripple pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-[1200px]">
        <h1 className="max-w-4xl font-[family-name:var(--font-display)] font-bold tracking-tight text-text-primary leading-[1.08] text-[length:var(--font-size-hero)]">
          {/* One accent word per headline, set in Instrument Serif Italic. The locale string
              marks it with <em>...</em>. */}
          <Trans
            i18nKey="hero.title"
            t={t}
            components={{ em: <em className="font-serif italic font-normal tracking-normal" /> }}
          />
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-text-secondary">
          {t('hero.description')}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button variant="primary" size="lg" href="/contact" umamiEvent="cta-start-project" umamiData={{ location: 'hero' }}>
            {t('hero.ctaPrimary')}
          </Button>
          <Link
            to={localize('/work')}
            className="inline-flex min-h-11 items-center gap-2 font-medium text-text-primary no-underline transition-colors hover:text-accent-gold"
          >
            {t('hero.ctaSecondary')}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
