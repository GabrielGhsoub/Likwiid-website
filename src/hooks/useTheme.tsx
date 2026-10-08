/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { useHydrated } from './useHydrated'

type Theme = 'dark' | 'light'

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: 'light',
  toggleTheme: () => {},
})

// The inline script in index.html puts the saved theme (or the OS preference) on <html>
// before first paint, so the class is the source of truth when the app boots.
function readDocumentTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

// Theme used for markup the prerender produced. Anything that must look right before
// hydration is styled from the .dark/.light class on <html> instead (see globals.css).
const PRERENDER_THEME: Theme = 'light'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readDocumentTheme)
  // The static HTML was rendered without knowing the visitor's theme. Hydrate with the same
  // value, then render the real one in the commit right after.
  const hydrated = useHydrated()
  const renderedTheme = hydrated ? theme : PRERENDER_THEME

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('likwiid-theme', next)
      } catch {
        /* ignore (private mode / disabled storage) */
      }
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: renderedTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
