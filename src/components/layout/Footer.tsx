import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SOCIAL } from '../../utils/constants'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

const CURRENT_YEAR = new Date().getFullYear()

function WaveDivider() {
  return (
    <div className="relative h-12 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
          fill="var(--color-bg-secondary)"
          fillOpacity="0.2"
        />
      </svg>
    </div>
  )
}

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="mt-0">
      <WaveDivider />
      <div className="border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center font-[family-name:var(--font-display)] text-lg font-bold text-text-primary hover:text-accent-gold transition-colors no-underline"
          >
            Likwiid
          </Link>
          <span className="text-text-tertiary text-sm">
            {t('footer.copyright', { year: CURRENT_YEAR })}
          </span>
          <span className="text-text-tertiary text-sm" aria-hidden="true">&middot;</span>
          <Link
            to="/privacy"
            className="inline-flex min-h-11 items-center text-text-tertiary text-sm hover:text-text-primary transition-colors no-underline"
          >
            {t('footer.privacy')}
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={SOCIAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={20} />
          </a>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="p-3 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      </div>
    </footer>
  )
}
