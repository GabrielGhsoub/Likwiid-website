import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'
import { founder, cofounder } from '../../data/personal'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'

// The strip fills the 1200px container, so retina screens need the 2400px source
const STRIP_SIZES = '(min-width: 1248px) 1200px, calc(100vw - 48px)'
const STRIP_CLASS =
  'block w-full h-auto aspect-[3/1] md:aspect-[5/1] rounded-xl border border-border bg-bg-tertiary object-cover'

export function Founder() {
  const { t } = useTranslation()
  const localize = useLocalizedPath()

  return (
    <section id="founder" className="scroll-mt-24 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-12 md:mb-16">
          <figure>
            {/* Art directed: 5:1 strip from md up, 3:1 crop on phones, one photograph per theme */}
            <picture className="block [.dark_&]:hidden">
              <source
                media="(min-width: 768px)"
                srcSet="/images/beirut-bay-1600.webp 1600w, /images/beirut-bay-2400.webp 2400w"
                sizes={STRIP_SIZES}
                width={2400}
                height={480}
              />
              <img
                src="/images/beirut-bay-m800.webp"
                srcSet="/images/beirut-bay-m800.webp 800w, /images/beirut-bay-m1600.webp 1600w"
                sizes={STRIP_SIZES}
                alt={t('founder.imageAltDay')}
                width={1600}
                height={533}
                loading="lazy"
                decoding="async"
                className={STRIP_CLASS}
              />
            </picture>
            <picture className="hidden [.dark_&]:block">
              <source
                media="(min-width: 768px)"
                srcSet="/images/beirut-night-1600.webp 1600w, /images/beirut-night-2400.webp 2400w"
                sizes={STRIP_SIZES}
                width={2400}
                height={480}
              />
              <img
                src="/images/beirut-night-m800.webp"
                srcSet="/images/beirut-night-m800.webp 800w, /images/beirut-night-m1600.webp 1600w"
                sizes={STRIP_SIZES}
                alt={t('founder.imageAlt')}
                width={1600}
                height={533}
                loading="lazy"
                decoding="async"
                className={`${STRIP_CLASS} opacity-[0.88]`}
              />
            </picture>
            <figcaption className="mt-3 text-sm text-text-tertiary">{t('founder.imageCaption')}</figcaption>
          </figure>
        </Reveal>
        <Reveal className="grid items-center gap-10 md:grid-cols-[280px_minmax(0,1fr)] md:gap-16">
          <img
            src={founder.photo}
            srcSet={`/gabriel-560.webp 560w, ${founder.photo} ${founder.photoWidth}w`}
            sizes="280px"
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
              to={localize('/contact')}
              className="mt-6 inline-flex items-center gap-1.5 font-medium text-accent-gold no-underline hover:underline"
            >
              {t('founder.cta')}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <Reveal className="mt-12 grid items-center gap-6 border-t border-border pt-10 md:mt-16 md:grid-cols-[280px_minmax(0,1fr)] md:gap-16">
          <img
            src={cofounder.photo}
            alt={t('founder.cofounderPhotoAlt')}
            width={cofounder.photoWidth}
            height={cofounder.photoHeight}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[280px] h-auto rounded-xl border border-border bg-bg-tertiary object-cover"
          />
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary">
              {cofounder.name}
            </h3>
            <p className="mt-1 text-text-tertiary">{t('founder.cofounderRole')}</p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              {t('founder.cofounderLine1')} {t('founder.cofounderLine2')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
