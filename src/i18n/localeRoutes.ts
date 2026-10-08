import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type Lang } from './detectLanguage'

// Pages that exist at a locale-prefixed URL (/pt/, /pt/direct, /fr/contact, ...). The prefix is
// the source of truth for the language on those routes; English stays unprefixed. Keep this
// list in sync with scripts/prerender.mjs and public/sitemap.xml.
export const LOCALIZED_PAGES = ['home', 'work', 'direct', 'frame', 'products', 'services', 'contact'] as const
export type LocalizedPage = (typeof LOCALIZED_PAGES)[number]

export const PREFIXED_LANGUAGES = SUPPORTED_LANGUAGES.filter((lang) => lang !== DEFAULT_LANGUAGE)

// Case studies that also exist at a locale-prefixed URL (/pt/work/padel-booking). The others
// are English only and keep their /work/<slug> URL in every language. Keep this list in sync
// with scripts/prerender.mjs and public/sitemap.xml.
export const LOCALIZED_CASE_STUDIES: readonly string[] = ['padel-booking']

export const isLocalizedCaseStudy = (slug: string | undefined): boolean => LOCALIZED_CASE_STUDIES.includes(slug ?? '')

// Free calculators under /tools/<slug>, in every language (/pt/tools/<slug>, same English slug
// like the rest of the site). Keep this list in sync with scripts/prerender.mjs and
// public/sitemap.xml.
export const LOCALIZED_TOOLS = ['ota-commission-calculator', 'portfolio-cost-calculator'] as const
export type LocalizedTool = (typeof LOCALIZED_TOOLS)[number]

const isLocalizedTool = (slug: string | undefined): slug is LocalizedTool =>
  (LOCALIZED_TOOLS as readonly string[]).includes(slug ?? '')

// The URL a tool is linked at: /tools/<slug>/ in English, /pt/tools/<slug>/ and so on.
export const localizedToolHref = (tool: LocalizedTool, lang: Lang): string =>
  lang === DEFAULT_LANGUAGE ? `/tools/${tool}/` : `/${lang}/tools/${tool}/`

// URL segment of each page: the home page has none, so it lives at / and /pt.
const pageSlug = (page: LocalizedPage): string => (page === 'home' ? '' : page)

const PAGE_BY_SLUG = new Map<string, LocalizedPage>(LOCALIZED_PAGES.map((page) => [pageSlug(page), page]))

export function localizedPath(page: LocalizedPage, lang: Lang): string {
  const slug = pageSlug(page)
  if (lang === DEFAULT_LANGUAGE) return `/${slug}`
  return slug ? `/${lang}/${slug}` : `/${lang}`
}

// GitHub Pages serves every page as a directory index and 301s /direct to /direct/, so links
// use the slash form that the canonical, sitemap and hreflang already point at. File paths
// (anything with an extension in the last segment) are left alone.
export function withTrailingSlash(pathname: string): string {
  if (pathname.endsWith('/')) return pathname
  const last = pathname.slice(pathname.lastIndexOf('/') + 1)
  return last.includes('.') ? pathname : `${pathname}/`
}

// The URL a localized page is linked at: /direct/, /pt/direct/, /pt/.
export const localizedHref = (page: LocalizedPage, lang: Lang): string => withTrailingSlash(localizedPath(page, lang))

const isPrefixedLanguage = (segment: string | undefined): boolean =>
  (PREFIXED_LANGUAGES as readonly string[]).includes(segment ?? '')

// The localized page a pathname points at, or null for pages that only exist in English.
// Accepts an optional trailing slash: /pt, /pt/, /contact and /fr/contact/ all resolve.
export function localizedPageOf(pathname: string): LocalizedPage | null {
  const segments = pathname.split('/').filter(Boolean)
  if (isPrefixedLanguage(segments[0])) segments.shift()
  if (segments.length > 1) return null
  return PAGE_BY_SLUG.get(segments[0] ?? '') ?? null
}

// The localized case study a pathname points at (/work/padel-booking, /fr/work/padel-booking/),
// or null for any other path.
function localizedCaseStudyOf(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean)
  if (isPrefixedLanguage(segments[0])) segments.shift()
  return segments.length === 2 && segments[0] === 'work' && isLocalizedCaseStudy(segments[1]) ? segments[1] : null
}

// The tool a pathname points at (/tools/ota-commission-calculator, /fr/tools/<slug>/), or null.
function localizedToolOf(pathname: string): LocalizedTool | null {
  const segments = pathname.split('/').filter(Boolean)
  if (isPrefixedLanguage(segments[0])) segments.shift()
  return segments.length === 2 && segments[0] === 'tools' && isLocalizedTool(segments[1]) ? segments[1] : null
}

// The URL of the page at `pathname` in another language: a localized page (/pt/direct/), a
// localized case study (/pt/work/padel-booking/) or a tool (/pt/tools/<slug>/). Null for pages
// that only exist in English.
export function localizedHrefOf(pathname: string, lang: Lang): string | null {
  const page = localizedPageOf(pathname)
  if (page) return localizedHref(page, lang)
  const tool = localizedToolOf(pathname)
  if (tool) return localizedToolHref(tool, lang)
  const slug = localizedCaseStudyOf(pathname)
  if (!slug) return null
  return lang === DEFAULT_LANGUAGE ? `/work/${slug}/` : `/${lang}/work/${slug}/`
}
