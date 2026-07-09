import { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { m, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
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

const MENU_TRANSITION = { duration: 0.16, ease: [0.22, 1, 0.36, 1] as const }
// Slides in from the trigger side: downward for the header, upward for the drawer footer.
const MENU_DOWN = { initial: { opacity: 0, y: -6, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -6, scale: 0.98 } }
const MENU_UP = { initial: { opacity: 0, y: 6, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 6, scale: 0.98 } }

// The /work page has real per-locale URLs; switching language there navigates to the
// matching URL so the address bar, canonical, and content stay in agreement.
function workPathFor(lang: Lang): string {
  return lang === 'en' ? '/work' : `/${lang}/work`
}

function isWorkIndexPath(pathname: string): boolean {
  return /^\/(?:(?:pt|es|it|fr)\/)?work\/?$/.test(pathname)
}

// Custom select-style language picker. A native <select> popup is OS-rendered: it
// overlaps the control and ignores the site theme, so the options panel here is our
// own, themed via design tokens (light and dark), opening with a gap below the
// trigger (above it in the mobile drawer, which sits at the bottom of the screen).
export function LanguageLinks({ variant = 'row' }: { variant?: 'row' | 'stack' }) {
  const { i18n, t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current: Lang = getRouteLanguage(location.pathname) ?? (isSupported(i18n.language) ? i18n.language : 'en')
  const compact = variant === 'row'

  useEffect(() => {
    if (!open) return
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const choose = (lang: Lang) => {
    saveLanguage(lang)
    void setLanguage(lang)
    setOpen(false)
    if (isWorkIndexPath(location.pathname)) {
      navigate(workPathFor(lang))
    }
  }

  const menuMotion = compact ? MENU_DOWN : MENU_UP

  return (
    <div ref={ref} className={cn('relative', compact ? 'inline-flex' : 'block w-full')}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('language.label')}
        className={cn(
          'flex cursor-pointer items-center justify-between rounded-lg border border-border bg-bg-secondary text-text-primary transition-[border-color,box-shadow] duration-300',
          'hover:border-border-hover focus:outline-none focus-visible:border-accent-gold focus-visible:shadow-[0_0_0_3px_var(--color-accent-gold-dim)]',
          compact ? 'min-h-9 gap-1.5 py-1.5 pl-2.5 pr-2' : 'w-full min-h-11 gap-2 py-3 pl-4 pr-3',
        )}
      >
        <span className={cn(compact ? 'text-xs font-medium font-[family-name:var(--font-mono)]' : 'text-sm font-medium')}>
          {compact ? LANG_CODES[current] : LANG_NAMES[current]}
        </span>
        <ChevronDown
          size={compact ? 13 : 16}
          className={cn('text-text-tertiary transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            initial={menuMotion.initial}
            animate={menuMotion.animate}
            exit={menuMotion.exit}
            transition={MENU_TRANSITION}
            className={cn(
              'absolute z-50 min-w-[160px] overflow-hidden rounded-lg border border-border bg-bg-secondary shadow-xl',
              compact ? 'right-0 top-full mt-2' : 'bottom-full left-0 right-0 mb-2',
            )}
          >
            <ul role="listbox" aria-label={t('language.label')} className="py-1">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const active = lang === current
                return (
                  <li key={lang}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={active}
                      lang={lang}
                      onClick={() => choose(lang)}
                      className={cn(
                        'flex w-full cursor-pointer items-center justify-between gap-6 px-4 py-2.5 text-left text-sm transition-colors',
                        active ? 'text-accent-gold' : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary',
                      )}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="w-6 font-[family-name:var(--font-mono)] text-xs text-text-tertiary">{LANG_CODES[lang]}</span>
                        {LANG_NAMES[lang]}
                      </span>
                      {active && <Check size={15} />}
                    </button>
                  </li>
                )
              })}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
