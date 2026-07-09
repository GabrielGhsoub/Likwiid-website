import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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

// Small text-based language switcher: EN PT ES IT FR. Never redirects automatically;
// language only changes when the visitor clicks.
export function LanguageLinks({ variant = 'row' }: { variant?: 'row' | 'stack' }) {
  const { i18n } = useTranslation()
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

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn('flex items-center', variant === 'row' ? 'gap-0.5' : 'flex-wrap gap-1')}
    >
      {SUPPORTED_LANGUAGES.map((lang) => {
        const active = lang === current
        return (
          <button
            key={lang}
            type="button"
            onClick={() => choose(lang)}
            aria-pressed={active}
            aria-label={LANG_NAMES[lang]}
            lang={lang}
            className={cn(
              'min-h-9 min-w-9 cursor-pointer rounded px-1.5 text-xs font-medium font-[family-name:var(--font-mono)] transition-colors',
              active
                ? 'text-accent-gold'
                : 'text-text-tertiary hover:text-text-primary',
            )}
          >
            {LANG_CODES[lang]}
          </button>
        )
      })}
    </div>
  )
}
