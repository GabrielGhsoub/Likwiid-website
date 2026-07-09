import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'
import { SUPPORTED_LANGUAGES, saveLanguage, isSupported, getRouteLanguage, type Lang } from '../../i18n/detectLanguage'
import { setLanguage } from '../../i18n/config'

const LANG_CODES: Record<Lang, string> = { en: 'EN', pt: 'PT', es: 'ES', it: 'IT', fr: 'FR' }
const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
  it: 'Italiano',
  fr: 'Français',
}

// The /work page has real per-locale URLs; switching language there navigates to the
// matching URL so the address bar, canonical, and content stay in agreement.
function workPathFor(lang: Lang): string {
  return lang === 'en' ? '/work' : `/${lang}/work`
}

function isWorkIndexPath(pathname: string): boolean {
  return /^\/(?:(?:pt|es|it|fr)\/)?work\/?$/.test(pathname)
}

// Language select: EN PT ES IT FR. Never redirects automatically; language only
// changes when the visitor picks one.
export function LanguageLinks({ variant = 'row' }: { variant?: 'row' | 'stack' }) {
  const { i18n, t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const current: Lang = getRouteLanguage(location.pathname) ?? (isSupported(i18n.language) ? i18n.language : 'en')

  const choose = (lang: Lang) => {
    saveLanguage(lang)
    void setLanguage(lang)
    if (isWorkIndexPath(location.pathname)) {
      navigate(workPathFor(lang))
    }
  }

  const compact = variant === 'row'

  return (
    <div className={cn('relative', compact ? 'inline-flex' : 'block w-full')}>
      <select
        value={current}
        onChange={(e) => choose(e.target.value as Lang)}
        aria-label={t('language.label')}
        className={cn(
          'appearance-none cursor-pointer rounded-lg border border-border bg-bg-secondary text-text-primary focus:outline-none focus:border-accent-gold focus:shadow-[0_0_0_3px_var(--color-accent-gold-dim)] transition-[border-color,box-shadow] duration-300',
          compact
            ? 'min-h-9 py-1.5 pl-2.5 pr-7 text-xs font-medium font-[family-name:var(--font-mono)]'
            : 'w-full min-h-11 py-3 pl-4 pr-9 text-sm',
        )}
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang} value={lang} lang={lang}>
            {compact ? LANG_CODES[lang] : LANG_NAMES[lang]}
          </option>
        ))}
      </select>
      <ChevronDown
        size={compact ? 13 : 16}
        className={cn(
          'pointer-events-none absolute top-1/2 -translate-y-1/2 text-text-tertiary',
          compact ? 'right-2' : 'right-3',
        )}
      />
    </div>
  )
}
