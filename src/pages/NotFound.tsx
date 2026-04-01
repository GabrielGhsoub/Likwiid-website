import { useEffect } from 'react'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'

export default function NotFound() {
  useEffect(() => { document.title = 'Page Not Found | Likwiid' }, [])

  return (
    <PageTransition>
      <div className="pt-20 pb-16 px-6 min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold font-[family-name:var(--font-display)] text-text-primary mb-4">404</h1>
          <p className="text-text-secondary text-lg mb-8">
            This page doesn&apos;t exist. It may have been moved or the URL might be wrong.
          </p>
          <Button variant="primary" size="lg" href="/">
            Back to home
          </Button>
        </div>
      </div>
    </PageTransition>
  )
}
