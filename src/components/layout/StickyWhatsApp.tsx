import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import { SOCIAL } from '../../utils/constants'
import { umamiAttrs } from '../../utils/analytics'

// Phones only: one fixed WhatsApp button, so the fastest way to reach Gabriel is always one
// tap away on long pages. Hidden on the client walkthrough, which has its own layout.
export function StickyWhatsApp() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  if (pathname.startsWith('/beit-toureef')) return null
  return (
    <a
      href={SOCIAL.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full border border-accent-gold bg-accent-gold px-4 py-3 text-sm font-medium text-text-inverse no-underline shadow-lg md:hidden"
      {...umamiAttrs('cta-whatsapp', { location: 'sticky' })}
    >
      <WhatsAppIcon size={18} />
      {t('sticky.whatsapp')}
    </a>
  )
}
