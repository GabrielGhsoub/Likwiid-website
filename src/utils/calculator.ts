import type { Lang } from '../i18n/detectLanguage'

// Shared helpers for the /tools/ calculators. Everything runs in the browser on the numbers
// the visitor types: nothing is sent, stored or prefilled with example amounts.

export const CURRENCIES = ['none', 'EUR', 'GBP', 'USD'] as const
export type Currency = (typeof CURRENCIES)[number]
export const CURRENCY_SYMBOLS: Record<Currency, string> = { none: '', EUR: '€', GBP: '£', USD: '$' }

const NUMBER_LOCALES: Record<Lang, string> = { en: 'en-GB', pt: 'pt-PT', es: 'es-ES', it: 'it-IT', fr: 'fr-FR' }

/**
 * Reads a number the way people type it in any of the site's languages: "1500", "1 500",
 * "1.500", "1,500", "149,90", "1.234,56" or "1,234.56". When both separators appear, the last
 * one is the decimal mark. A lone separator followed by exactly three digits is a thousands
 * separator; any other lone separator is the decimal mark. Returns null for an empty field
 * and NaN for anything that is not a non-negative number.
 */
export function parseNumber(raw: string): number | null {
  const s = raw.trim().replace(/[\s\u00a0\u202f'%]/g, '')
  if (!s) return null
  if (!/^\d*[.,]?\d*(?:[.,]\d+)*$/.test(s)) return Number.NaN
  const lastDot = s.lastIndexOf('.')
  const lastComma = s.lastIndexOf(',')
  let normalized: string
  if (lastDot !== -1 && lastComma !== -1) {
    const decimal = lastDot > lastComma ? '.' : ','
    const thousands = decimal === '.' ? ',' : '.'
    normalized = s.split(thousands).join('').replace(decimal, '.')
  } else {
    const sep = lastDot !== -1 ? '.' : lastComma !== -1 ? ',' : ''
    const parts = sep ? s.split(sep) : [s]
    const isThousands = parts.length > 2 || (parts.length === 2 && parts[0] !== '' && parts[0] !== '0' && parts[1].length === 3)
    normalized = isThousands ? parts.join('') : parts.join('.')
  }
  const value = Number(normalized)
  return Number.isFinite(value) && value >= 0 ? value : Number.NaN
}

/** Formats an amount in the visitor's language, with the chosen currency or none. */
export function formatAmount(value: number, lang: Lang, currency: Currency): string {
  const locale = NUMBER_LOCALES[lang]
  if (currency === 'none') return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value)
  return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0, minimumFractionDigits: 0 }).format(value)
}

export const formatPercent = (value: number, lang: Lang): string =>
  new Intl.NumberFormat(NUMBER_LOCALES[lang], { style: 'percent', maximumFractionDigits: 1 }).format(value / 100)

export const formatCount = (value: number, lang: Lang): string =>
  new Intl.NumberFormat(NUMBER_LOCALES[lang], { maximumFractionDigits: 1 }).format(value)
