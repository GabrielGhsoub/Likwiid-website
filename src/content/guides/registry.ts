import type { ComponentType } from 'react'
import { SUPPORTED_LANGUAGES, isSupported, type Lang } from '../../i18n/detectLanguage'
import { lazyRoute, type PreloadableRoute } from '../../utils/lazyRoute'

// Every guide page, one code-split chunk per language version: src/content/guides/<slug>/<lang>.tsx.
// The folder name is the URL slug (/guides/<slug>/, /pt/guides/<slug>/). Only the loaders live
// here, so the routing code can know which versions exist without downloading any article.
const modules = import.meta.glob<{ default: ComponentType }>('./*/*.tsx')

export const GUIDE_PAGES: Record<string, Partial<Record<Lang, PreloadableRoute>>> = {}

for (const [path, load] of Object.entries(modules)) {
  const match = path.match(/^\.\/([a-z0-9-]+)\/([a-z]{2})\.tsx$/)
  if (!match || !isSupported(match[2])) continue
  const [, slug, lang] = match
  GUIDE_PAGES[slug] = { ...GUIDE_PAGES[slug], [lang]: lazyRoute(load) }
}

/** The page component for a guide in one language, if that version exists. */
export const guidePage = (slug: string | undefined, lang: Lang): PreloadableRoute | undefined =>
  slug ? GUIDE_PAGES[slug]?.[lang] : undefined

/** Languages a guide exists in, in the site's language order. Empty for an unknown slug. */
export const guideLanguages = (slug: string): Lang[] =>
  SUPPORTED_LANGUAGES.filter((lang) => Boolean(GUIDE_PAGES[slug]?.[lang]))
