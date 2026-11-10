import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

interface PriceBlockProps {
  // The Frame band is for photographers; pages about stays and activities leave it out.
  showFrame?: boolean
  // The first-property offer belongs next to Likwiid Direct only.
  showFirstProperty?: boolean
  id?: string
}

const BANDS = ['band1', 'band2', 'band3'] as const
const NOTES = ['noFee', 'running', 'written', 'terms'] as const

// One price block for the whole site, so every page states the same figures.
export function PriceBlock({ showFrame = true, showFirstProperty = true, id = 'price' }: PriceBlockProps) {
  const { t } = useTranslation()
  const bands = showFrame ? BANDS : BANDS.slice(0, 2)
  return (
    <section id={id} className="scroll-mt-24 px-6 py-12 md:py-16" aria-labelledby={`${id}-heading`}>
      <Reveal className="mx-auto max-w-[1200px]">
        <h2
          id={`${id}-heading`}
          className="text-3xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-4xl"
        >
          {t('price.title')}
        </h2>
        <dl className="mt-8 grid gap-4 md:grid-cols-3">
          {bands.map((band) => (
            <div key={band} className="rounded-xl border border-border bg-bg-secondary p-5">
              <dt className="text-sm leading-snug text-text-secondary">{t(`price.${band}Name`)}</dt>
              <dd className="m-0 mt-2 text-xl font-semibold leading-snug text-text-primary font-[family-name:var(--font-display)]">
                {t(`price.${band}Price`)}
              </dd>
            </div>
          ))}
        </dl>
        <ul className="mt-6 max-w-3xl space-y-2.5 p-0">
          {NOTES.map((note) => (
            <li key={note} className="flex list-none gap-3 leading-relaxed text-text-secondary">
              <Check size={18} className="mt-1 shrink-0 text-accent-gold" aria-hidden="true" />
              {t(`price.${note}`)}
            </li>
          ))}
        </ul>
        {showFirstProperty && (
          <p className="mt-6 max-w-3xl rounded-lg border border-border bg-bg-secondary/50 p-4 text-sm leading-relaxed text-text-secondary">
            {t('price.firstProperty')}
          </p>
        )}
      </Reveal>
    </section>
  )
}
