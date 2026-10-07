import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'

const ROWS = [
  { key: 'apps', to: '/services', linkKey: 'linkServices' },
  { key: 'booking', to: '/direct', linkKey: 'linkDirect' },
  { key: 'ai', to: '/services', linkKey: 'linkServices' },
] as const

export function WhatWeBuild() {
  const { t } = useTranslation()
  const localize = useLocalizedPath()

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title={t('whatWeBuild.title')} />

        <Reveal className="border-b border-border">
          {ROWS.map((row) => (
            <div
              key={row.key}
              className="grid gap-3 border-t border-border py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10"
            >
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                {t(`whatWeBuild.${row.key}Title`)}
              </h3>
              <div>
                <p className="max-w-2xl text-text-secondary leading-relaxed">{t(`whatWeBuild.${row.key}Body`)}</p>
                <div className="mt-3">
                  <Link
                    to={localize(row.to)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-gold no-underline hover:underline"
                  >
                    {t(`whatWeBuild.${row.linkKey}`)}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
