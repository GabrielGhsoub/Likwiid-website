import { useTranslation } from 'react-i18next'
import { CalendarCheck, HandCoins, UserCheck } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const CHANGES = [
  { key: 'change1', Icon: CalendarCheck },
  { key: 'change2', Icon: UserCheck },
  { key: 'change3', Icon: HandCoins },
] as const

export function WhatChanges() {
  const { t } = useTranslation()
  return (
    <section className="px-6 py-12 md:py-16" aria-labelledby="changes-heading">
      <Reveal className="mx-auto max-w-[1200px]">
        <h2
          id="changes-heading"
          className="text-3xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-4xl"
        >
          {t('home.changesTitle')}
        </h2>
        <ul className="mt-8 grid gap-4 p-0 md:grid-cols-3">
          {CHANGES.map(({ key, Icon }) => (
            <li key={key} className="flex list-none items-start gap-4 rounded-xl border border-border bg-bg-secondary p-5">
              <Icon size={22} className="mt-0.5 shrink-0 text-accent-gold" aria-hidden="true" />
              <span className="text-lg leading-snug text-text-primary">{t(`home.${key}`)}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
