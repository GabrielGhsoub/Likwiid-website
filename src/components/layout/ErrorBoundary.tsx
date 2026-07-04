import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

// App-level error boundary so a render-time exception shows a recoverable fallback
// (reload / contact) instead of a blank white page. Kept dependency-free and un-animated.
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Unhandled render error:', error, info)
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-semibold text-text-primary mb-3">Something went wrong</h1>
          <p className="text-text-secondary mb-6">
            Sorry, the page hit an unexpected error. Reloading usually fixes it. If it keeps
            happening, get in touch and we&rsquo;ll sort it out.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-md bg-accent-gold px-5 py-2.5 font-medium text-bg-primary"
            >
              Reload page
            </button>
            <a
              href="mailto:gabriel@likwiid.com"
              className="rounded-md border border-border px-5 py-2.5 font-medium text-text-primary"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    )
  }
}
