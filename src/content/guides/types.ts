import type { Lang } from '../../i18n/detectLanguage'

// Search and listing copy for one language version of a guide. The title is the visible
// heading; docTitle is the <title> (62 characters at most, checked by scripts/check-dist.mjs)
// and description the meta description (160 at most).
export interface GuideCopy {
  title: string
  docTitle: string
  description: string
}

export interface GuideSource {
  label: string
  href: string
}

// One guide: src/content/guides/<slug>/meta.ts. The language versions it exists in are the
// <lang>.tsx files next to it, and every one of them needs copy here.
export interface GuideMeta {
  // Position on the guides index, lowest first.
  order: number
  // ISO dates for the Article structured data and the byline.
  datePublished: string
  dateModified: string
  copy: Partial<Record<Lang, GuideCopy>>
}
