import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

export type FaqKey = 'cost' | 'site' | 'after' | 'pay' | 'platform' | 'money' | 'stop'

interface FaqListProps {
  title: string
  items: readonly FaqKey[]
  id?: string
}

// Questions an owner asks before writing. Native <details>, so it works without JavaScript
// and the answers are in the prerendered HTML.
export function FaqList({ title, items, id = 'faq' }: FaqListProps) {
  const { t } = useTranslation()
  return (
    <section id={id} className="scroll-mt-24 px-6 py-12 md:py-16" aria-labelledby={`${id}-heading`}>
      <Reveal className="mx-auto max-w-[1200px]">
        <h2
          id={`${id}-heading`}
          className="text-3xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-4xl"
        >
          {title}
        </h2>
        <div className="mt-8 max-w-3xl divide-y divide-border border-y border-border">
          {items.map((key) => (
            <details key={key} className="group py-1">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-medium text-text-primary [&::-webkit-details-marker]:hidden">
                {t(`faq.${key}Q`)}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-text-tertiary transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="m-0 pb-4 leading-relaxed text-text-secondary">{t(`faq.${key}A`)}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
