import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'
import { LogoMark } from '../components/ui/Logo'

export default function NotFound() {
  const { t } = useTranslation()
  useEffect(() => { document.title = t('notFound.documentTitle') }, [t])

  return (
    <PageTransition>
      <div className="pt-28 pb-16 px-6 min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <LogoMark className="h-12 mx-auto mb-6 text-text-primary" />
          <h1 className="text-6xl font-bold font-[family-name:var(--font-display)] text-text-primary mb-4">404</h1>
          <p className="text-text-secondary text-lg mb-8">
            {t('notFound.description', {
              defaultValue: 'This page does not exist. It may have moved, or the link may be wrong.',
            })}
          </p>
          <Button variant="primary" size="lg" href="/">
            {t('notFound.backHome', { defaultValue: 'Back to home' })}
          </Button>
        </div>
      </div>
    </PageTransition>
  )
}
