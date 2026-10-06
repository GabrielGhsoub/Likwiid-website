import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'
import { founder } from '../../data/personal'

export function Founder() {
  const { t } = useTranslation()

  return (
    <section id="founder" className="scroll-mt-24 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
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
      </div>
    </section>
  )
}
