import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'

const STEPS = ['how1', 'how2', 'how3'] as const

export function HowItWorks() {
  const { t } = useTranslation()
  return (
    <section className="px-6 py-12 md:py-16" aria-labelledby="how-heading">
      <Reveal className="mx-auto max-w-[1200px]">
        <h2
          id="how-heading"
          className="text-3xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-4xl"
        >
          {t('home.howTitle')}
        </h2>
        <ol className="mt-8 grid gap-4 p-0 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step} className="flex list-none gap-4 rounded-xl border border-border bg-bg-secondary p-5">
              <span className="text-2xl font-semibold leading-none text-accent-gold font-[family-name:var(--font-mono)]">
                {i + 1}
              </span>
              <span className="text-lg leading-snug text-text-primary">{t(`home.${step}`)}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-text-secondary">{t('home.howAfter')}</p>
      </Reveal>
    </section>
  )
}
