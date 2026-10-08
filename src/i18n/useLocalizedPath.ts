import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { DEFAULT_LANGUAGE, getRouteLanguage, isSupported, type Lang } from './detectLanguage'
import { localizedHref, localizedPageOf, withTrailingSlash } from './localeRoutes'

// The language a visitor is reading in: the URL prefix wins on localized routes, the active
// i18n language everywhere else, English as the last resort.
export function useCurrentLanguage(): Lang {
  const location = useLocation()
  const { i18n } = useTranslation()
  return getRouteLanguage(location.pathname) ?? (isSupported(i18n.language) ? i18n.language : DEFAULT_LANGUAGE)
}

// Rewrites an internal path to its localized form when one exists (/contact -> /pt/contact/,
// / -> /pt/, /#founder -> /pt/#founder for a Portuguese reader). A query string or hash is kept
// as is. Pages that only exist in English, and English itself, keep their path. Every result
// ends in a slash, the form the static host serves without a redirect.
export function useLocalizedPath(): (path: string) => string {
  const lang = useCurrentLanguage()
  return useCallback(
    (path: string) => {
      const split = path.search(/[?#]/)
      const pathname = split === -1 ? path : path.slice(0, split)
      const suffix = split === -1 ? '' : path.slice(split)
      const page = localizedPageOf(pathname)
      return `${page ? localizedHref(page, lang) : withTrailingSlash(pathname)}${suffix}`
    },
    [lang],
  )
}
