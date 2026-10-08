import type { Lang } from '../../i18n/detectLanguage'
import type { GuideCopy, GuideMeta } from './types'

// Listing and search copy of every guide, read eagerly: the guides index, the article layout
// and the prerender (through src/entry-server.tsx) all need it, and it is small.
const modules = import.meta.glob<{ default: GuideMeta }>('./*/meta.ts', { eager: true })

export const GUIDE_META: Record<string, GuideMeta> = Object.fromEntries(
  Object.entries(modules).flatMap(([path, mod]) => {
    const slug = path.match(/^\.\/([a-z0-9-]+)\/meta\.ts$/)?.[1]
    return slug ? [[slug, mod.default]] : []
  }),
)

export interface GuideListing extends GuideCopy {
  slug: string
  datePublished: string
  dateModified: string
}

/** Guides that have copy in `lang`, in index order. */
export function guidesIn(lang: Lang): GuideListing[] {
  return Object.entries(GUIDE_META)
    .filter(([, meta]) => meta.copy[lang])
    .sort(([a, metaA], [b, metaB]) => metaA.order - metaB.order || a.localeCompare(b))
    .map(([slug, meta]) => ({
      slug,
      datePublished: meta.datePublished,
      dateModified: meta.dateModified,
      ...(meta.copy[lang] as GuideCopy),
    }))
}

/** Copy for one guide in one language. */
export const guideCopy = (slug: string, lang: Lang): GuideCopy | undefined => GUIDE_META[slug]?.copy[lang]
