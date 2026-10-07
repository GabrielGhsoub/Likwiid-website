import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import { SOCIAL } from '../../utils/constants'
import { umamiAttrs } from '../../utils/analytics'

export function ContactBlock() {
  const { t } = useTranslation()

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-xl border border-border bg-bg-secondary p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary">
            {t('contactBlock.title')}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-text-secondary leading-relaxed">{t('contactBlock.body')}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" href="/contact" umamiEvent="cta-start-project" umamiData={{ location: 'contact-block' }}>
              {t('contactBlock.cta')}
            </Button>
            <Button variant="secondary" size="lg" href={SOCIAL.whatsapp} umamiEvent="cta-whatsapp" umamiData={{ location: 'contact-block' }}>
              <WhatsAppIcon size={18} />
              {t('contactBlock.whatsapp')}
            </Button>
          </div>
          <p className="mt-6 text-sm text-text-tertiary">
            {t('contactBlock.emailPrefix')}{' '}
            <a
              href={`mailto:${SOCIAL.email}`}
              className="text-text-secondary underline-offset-4 hover:text-text-primary hover:underline"
              {...umamiAttrs('cta-email', { location: 'contact-block' })}
            >
              {SOCIAL.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
