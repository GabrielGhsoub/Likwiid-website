import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { m, AnimatePresence } from 'framer-motion'
import { Globe, Check, ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'
import { SUPPORTED_LANGUAGES, saveLanguage, isSupported, type Lang } from '../../i18n/detectLanguage'
import { setLanguage } from '../../i18n/config'

const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
}
const LANG_CODES: Record<Lang, string> = { en: 'EN', fr: 'FR', es: 'ES', pt: 'PT' }

const MENU_INITIAL = { opacity: 0, y: -6, scale: 0.98 }
const MENU_ANIMATE = { opacity: 1, y: 0, scale: 1 }
const MENU_EXIT = { opacity: 0, y: -6, scale: 0.98 }
const MENU_TRANSITION = { duration: 0.16, ease: [0.22, 1, 0.36, 1] as const }

export function LanguageSwitcher({ variant = 'icon' }: { variant?: 'icon' | 'full' }) {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current: Lang = isSupported(i18n.language) ? i18n.language : 'en'

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
  }

  const optionList = (
    <ul role="listbox" aria-label={t('language.label')} className="py-1">
      {SUPPORTED_LANGUAGES.map((lang) => {
        const active = lang === current
        return (
          <li key={lang}>
            <button
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => choose(lang)}
              className={cn(
                'flex w-full items-center justify-between gap-6 px-4 py-2.5 text-left text-sm transition-colors cursor-pointer',
                active ? 'text-accent-gold' : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary',
              )}
            >
              <span className="flex items-center gap-2.5">
                <span className="font-[family-name:var(--font-mono)] text-xs text-text-tertiary w-6">{LANG_CODES[lang]}</span>
                {LANG_NAMES[lang]}
              </span>
              {active && <Check size={15} />}
            </button>
          </li>
        )
      })}
    </ul>
  )

  // --- Mobile (full-width) variant: lives in the drawer footer ---
  if (variant === 'full') {
    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-lg bg-bg-tertiary px-4 py-3 text-text-primary transition-colors hover:bg-bg-primary"
        >
          <span className="flex items-center gap-2.5 text-sm font-medium">
            <Globe size={18} />
            {LANG_NAMES[current]}
          </span>
          <ChevronDown size={16} className={cn('text-text-tertiary transition-transform', open && 'rotate-180')} />
        </button>
        <AnimatePresence>
          {open && (
            <m.div
              initial={MENU_INITIAL}
              animate={MENU_ANIMATE}
              exit={MENU_EXIT}
              transition={MENU_TRANSITION}
              className="absolute bottom-full left-0 right-0 z-10 mb-2 overflow-hidden rounded-lg border border-border bg-bg-secondary shadow-xl"
            >
              {optionList}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // --- Desktop icon variant: lives next to the theme toggle ---
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('language.change')}
        className="flex min-h-11 items-center gap-1.5 rounded-full px-2.5 text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary cursor-pointer"
      >
        <Globe size={18} />
        <span className="font-[family-name:var(--font-mono)] text-xs font-medium">{LANG_CODES[current]}</span>
      </button>
      <AnimatePresence>
        {open && (
          <m.div
            initial={MENU_INITIAL}
            animate={MENU_ANIMATE}
            exit={MENU_EXIT}
            transition={MENU_TRANSITION}
            className="absolute right-0 top-full z-50 mt-2 min-w-[170px] overflow-hidden rounded-lg border border-border bg-bg-secondary shadow-xl"
          >
            {optionList}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
