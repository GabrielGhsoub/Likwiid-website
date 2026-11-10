import { Trans, useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { FounderLine } from '../ui/FounderLine'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { BUTTON_LINK_PRIMARY_LG } from '../ui/buttonLink'
import { directDemoHref } from '../../utils/demoLinks'
import { useTheme } from '../../hooks/useTheme'
import { umamiAttrs } from '../../utils/analytics'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'

// Plain typographic hero. Nothing here is animated or opacity-gated: the H1 is the
// largest contentful paint and must render on the first frame.
export function Hero() {
  const { t, i18n } = useTranslation()
  const { theme } = useTheme()
  const localize = useLocalizedPath()
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? 'en').slice(0, 2)

  return (
    <section className="relative isolate overflow-hidden px-6 pt-28 pb-10 md:pt-36 md:pb-16">
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

        <p className="mt-5 max-w-2xl text-lg md:text-xl leading-relaxed text-text-secondary">
          {t('hero.description')}
        </p>

        <FounderLine className="mt-6" />

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={directDemoHref(lang, localize('/'), 'quinta-likwiid', theme)}
            className={BUTTON_LINK_PRIMARY_LG}
            {...umamiAttrs('cta-demo', { location: 'hero' })}
          >
            {t('hero.ctaPrimary')}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <WhatsAppButton location="hero" />
        </div>
      </div>
    </section>
  )
}
