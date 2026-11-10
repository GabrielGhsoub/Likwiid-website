import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { SOCIAL } from '../../utils/constants'
import { umamiAttrs } from '../../utils/analytics'

export function ContactBlock() {
  const { t } = useTranslation()

  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-xl border border-border bg-bg-secondary p-6 md:p-12">
          <div className="flex items-start gap-4">
            <img
              src="/gabriel-112.webp"
              alt={t('founderLine.photoAlt')}
              width={56}
              height={56}
              loading="lazy"
              decoding="async"
              className="h-14 w-14 shrink-0 rounded-full border border-border bg-bg-tertiary object-cover object-top"
            />
            <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-4xl">
              {t('contactBlock.title')}
            </h2>
          </div>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">{t('contactBlock.body')}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <WhatsAppButton location="contact-block" variant="primary" />
            <Button variant="secondary" size="lg" href="/contact" umamiEvent="cta-contact" umamiData={{ location: 'contact-block' }}>
              {t('contactBlock.cta')}
            </Button>
          </div>
          <p className="mt-5 text-sm text-text-tertiary">
            {t('contactBlock.whatsappNote')} {t('contactBlock.emailPrefix')}{' '}
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
