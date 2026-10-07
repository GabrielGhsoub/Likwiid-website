import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type Lang } from './detectLanguage'

// Pages that exist at a locale-prefixed URL (/pt/direct, /fr/work, ...). The prefix is the
// source of truth for the language on those routes; English stays unprefixed. Keep this list
// in sync with scripts/prerender.mjs and public/sitemap.xml.
export const LOCALIZED_PAGES = ['work', 'direct', 'frame', 'products'] as const
export type LocalizedPage = (typeof LOCALIZED_PAGES)[number]

export const PREFIXED_LANGUAGES = SUPPORTED_LANGUAGES.filter((lang) => lang !== DEFAULT_LANGUAGE)

export function localizedPath(page: LocalizedPage, lang: Lang): string {
  return lang === DEFAULT_LANGUAGE ? `/${page}` : `/${lang}/${page}`
}

const LOCALIZED_PATH = new RegExp(
  `^/(?:(?:${PREFIXED_LANGUAGES.join('|')})/)?(${LOCALIZED_PAGES.join('|')})/?$`,
)

// The localized page a pathname points at, or null for pages that only exist in English.
export function localizedPageOf(pathname: string): LocalizedPage | null {
  const match = LOCALIZED_PATH.exec(pathname)
  return match ? (match[1] as LocalizedPage) : null
}
