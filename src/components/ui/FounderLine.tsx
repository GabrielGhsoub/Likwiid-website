import { useTranslation } from 'react-i18next'
import { cn } from '../../utils/cn'

// Gabriel's face and one sentence, shown in the first screen of every landing page so the
// reader sees who will answer before anything else.
export function FounderLine({ className }: { className?: string }) {
  const { t } = useTranslation()
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <img
        src="/gabriel-112.webp"
        srcSet="/gabriel-112.webp 112w, /gabriel-560.webp 560w"
        sizes="64px"
        alt={t('founderLine.photoAlt')}
        width={64}
        height={64}
        decoding="async"
        className="h-16 w-16 shrink-0 rounded-full border border-border bg-bg-tertiary object-cover object-top"
      />
      <p className="m-0 max-w-md text-base leading-snug text-text-primary">{t('founderLine.text')}</p>
    </div>
  )
}
