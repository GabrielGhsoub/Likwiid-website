import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import App from './App'
import { preloadRoute } from './routes'
import './i18n/config'
import './styles/globals.css'

// Landing on a code-split page: fetch its chunk first so the first render already shows the
// page, instead of committing the loading spinner and swapping the page in a beat later.
void preloadRoute(window.location.pathname).then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>,
  )
})
