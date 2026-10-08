import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import App from './App'
import { AfterFirstCommit } from './components/layout/AfterFirstCommit'
import { preloadRoute } from './routes'
import i18n, { loadLanguage, startupLanguages } from './i18n/config'
import './styles/globals.css'

function app(afterFirstCommit?: () => void) {
  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <AfterFirstCommit run={afterFirstCommit}>
            <App />
          </AfterFirstCommit>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

async function start() {
  const container = document.getElementById('root')!
  const { pathname } = window.location
  const languages = startupLanguages(pathname)

  // Landing on a code-split page: fetch its chunk first so the first render already shows the
  // page instead of suspending. The language bundles load alongside.
  const [, htmlLangReady, preferredReady] = await Promise.all([
    preloadRoute(pathname),
    loadLanguage(languages.html),
    loadLanguage(languages.preferred),
  ])

  // scripts/prerender.mjs stamps #root with the URL it rendered. Only that exact page can be
  // hydrated: 404.html is served for every unknown URL, and the static host redirects the
  // slashless form of a page, so anything else gets a fresh client render.
  if (container.dataset.prerendered === pathname && htmlLangReady) {
    // Hydrate in the language the HTML was rendered in. A visitor whose saved or browser
    // language differs (unprefixed pages only) switches right after hydration: same flash of
    // English as a fresh render would give, but the static DOM is kept, not rebuilt.
    await i18n.changeLanguage(languages.html)
    const switchLanguage =
      languages.preferred !== languages.html && preferredReady
        ? () => void i18n.changeLanguage(languages.preferred)
        : undefined
    hydrateRoot(container, app(switchLanguage))
    return
  }

  await i18n.changeLanguage(preferredReady ? languages.preferred : languages.html)
  createRoot(container).render(app())
}

void start()
