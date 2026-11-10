import { useTranslation } from 'react-i18next'
import { Button } from './Button'
import { WhatsAppIcon } from './WhatsAppIcon'
import { SOCIAL } from '../../utils/constants'

interface WhatsAppButtonProps {
  location: string
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
}

export function WhatsAppButton({ location, variant = 'secondary', size = 'lg' }: WhatsAppButtonProps) {
  const { t } = useTranslation()
  return (
    <Button variant={variant} size={size} href={SOCIAL.whatsapp} umamiEvent="cta-whatsapp" umamiData={{ location }}>
      <WhatsAppIcon size={18} />
      {t('hero.ctaWhatsapp')}
    </Button>
  )
}
