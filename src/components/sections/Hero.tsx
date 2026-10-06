import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'

// Plain typographic hero. Nothing here is animated or opacity-gated: the H1 is the
// largest contentful paint and must render on the first frame.
export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="flex min-h-[70vh] items-center px-6 pt-28 pb-16">
      <div className="mx-auto w-full max-w-[1200px]">
        <h1 className="max-w-4xl font-[family-name:var(--font-display)] font-bold tracking-tight text-text-primary leading-[1.08] text-[length:var(--font-size-hero)]">
          {t('hero.title')}
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-text-secondary">
          {t('hero.description')}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button variant="primary" size="lg" href="/contact">
            {t('hero.ctaPrimary')}
          </Button>
          <Link
            to="/work"
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
