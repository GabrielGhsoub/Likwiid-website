import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'
import { founder, cofounder } from '../../data/personal'

export function Founder() {
  const { t } = useTranslation()

  return (
    <section id="founder" className="scroll-mt-24 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-12 md:mb-16">
          <figure>
            {/* Art directed: 5:1 strip from md up, 3:1 crop on phones */}
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/images/beirut-skyline.webp"
                width={1600}
                height={320}
              />
              <img
                src="/images/beirut-skyline-800.webp"
                alt={t('founder.imageAlt')}
                width={800}
                height={267}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto aspect-[3/1] md:aspect-[5/1] rounded-xl border border-border bg-bg-tertiary object-cover [.dark_&]:opacity-[0.88]"
              />
            </picture>
            <figcaption className="mt-3 text-sm text-text-tertiary">{t('founder.imageCaption')}</figcaption>
          </figure>
        </Reveal>
        <Reveal className="grid items-center gap-10 md:grid-cols-[280px_minmax(0,1fr)] md:gap-16">
          <img
            src={founder.photo}
            alt={t('founder.photoAlt')}
            width={founder.photoWidth}
            height={founder.photoHeight}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[280px] h-auto rounded-xl border border-border bg-bg-tertiary object-cover"
          />
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary">
              {founder.name}
            </h2>
            <p className="mt-2 text-text-tertiary">{t('founder.role')}</p>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              {t('founder.bio1')} {t('founder.bio2')} {t('founder.bio3')}
            </p>
            <p className="mt-6 font-medium text-text-primary">{t('founder.promise')}</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 font-medium text-accent-gold no-underline hover:underline"
            >
              {t('founder.cta')}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <Reveal className="mt-12 grid items-center gap-6 border-t border-border pt-10 md:mt-16 md:grid-cols-[280px_minmax(0,1fr)] md:gap-16">
          <div
            aria-hidden="true"
            className="flex h-20 w-20 items-center justify-center rounded-xl border border-border bg-bg-tertiary text-2xl font-bold font-[family-name:var(--font-display)] text-text-tertiary"
          >
            {cofounder.monogram}
          </div>
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary">
              {cofounder.name}
            </h3>
            <p className="mt-1 text-text-tertiary">{t('founder.cofounderRole')}</p>
            <p className="mt-4 text-text-secondary leading-relaxed">{t('founder.cofounderLine')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
