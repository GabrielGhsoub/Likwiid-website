import { createContext, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import type { Lang } from '../../i18n/detectLanguage'

// The language a guide is written in. A guide's chrome (byline, summary label, sources) always
// matches its text, whatever language the rest of the site is showing: the English guides live
// at unprefixed URLs, which follow the visitor's language.
export const GuideContext = createContext<Lang | null>(null)

/** A translator fixed to the language of the guide being rendered. */
export function useGuideT() {
  const lang = useContext(GuideContext)
  if (!lang) throw new Error('Guide components must render inside <GuideLayout>')
  return useTranslation(undefined, { lng: lang }).t
}

export const GUIDE_AUTHOR = 'Gabriel Ghoussoub'
