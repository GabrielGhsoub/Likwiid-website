import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type Lang } from '../../i18n/detectLanguage'
import type { ProjectQuote, ProjectQuoteText } from '../../types'

interface ResolvedQuoteText {
  text: string
  lang: Lang
}

// Page language first, then English, then whichever language the client wrote it in.
function resolveQuoteText(text: ProjectQuoteText, pageLang: string): ResolvedQuoteText | null {
  const order: Lang[] = [pageLang as Lang, DEFAULT_LANGUAGE, ...SUPPORTED_LANGUAGES]
  for (const lang of order) {
    const value = text[lang]?.trim()
    if (value) return { text: value, lang }
  }
  return null
}

interface ClientQuoteProps {
  quote: ProjectQuote
  className?: string
}

// Pull quote for client case studies. Renders nothing unless the quote has text and a name.
export function ClientQuote({ quote, className }: ClientQuoteProps) {
  const { i18n } = useTranslation()
  const pageLang = (i18n.resolvedLanguage ?? i18n.language ?? DEFAULT_LANGUAGE).slice(0, 2)
  const resolved = resolveQuoteText(quote.text, pageLang)
  const name = quote.name.trim()
  if (!resolved || !name) return null

  const attribution = [quote.role.trim(), quote.company?.trim()].filter(Boolean).join(', ')

  return (
    <figure
      className={`relative overflow-hidden rounded-xl border border-border bg-bg-secondary px-6 pb-7 pt-6 md:px-10 md:pb-9 md:pt-8${className ? ` ${className}` : ''}`}
    >
      <span
        aria-hidden="true"
        className="block select-none font-[family-name:var(--font-serif)] h-8 text-7xl leading-none text-accent-gold md:h-10 md:text-8xl"
      >
        &ldquo;
      </span>
      <blockquote lang={resolved.lang !== pageLang ? resolved.lang : undefined} className="mt-3">
        <p className="max-w-2xl text-xl font-medium leading-snug text-text-primary font-[family-name:var(--font-display)] md:text-2xl">
          {resolved.text}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        {quote.photo && (
          <img
            src={quote.photo}
            alt=""
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            className="h-11 w-11 shrink-0 rounded-full border border-border object-cover"
          />
        )}
        <span className="flex min-w-0 flex-col">
          <span className="text-sm font-semibold text-text-primary">{name}</span>
          {attribution && <span className="text-sm text-text-tertiary">{attribution}</span>}
        </span>
      </figcaption>
    </figure>
  )
}
