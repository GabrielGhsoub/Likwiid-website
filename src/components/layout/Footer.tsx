import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SOCIAL } from '../../utils/constants'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import { Logo } from '../ui/Logo'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="mt-0 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 py-8 flex flex-col gap-2">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-start">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center text-text-primary transition-opacity hover:opacity-75 no-underline"
          >
            <Logo className="h-5" />
          </Link>
          <span className="text-text-tertiary text-sm">
            {t('footer.copyright', { year: CURRENT_YEAR })}
          </span>
          <span className="hidden text-text-tertiary text-sm sm:inline" aria-hidden="true">&middot;</span>
          <Link
            to="/privacy"
            className="inline-flex min-h-11 items-center text-text-tertiary text-sm hover:text-text-primary transition-colors no-underline"
          >
            {t('footer.privacy')}
          </Link>
        </div>

        {/* Tagline and contact icons share one row on desktop; they stack, centred, on mobile.
            The icon row is pulled right by its own padding so the last glyph lines up with
            the content edge. */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-6">
          <p className="m-0 text-text-tertiary text-sm text-center sm:text-left">
            {t('footer.tagline', {
              defaultValue: 'Beirut, Lebanon. Working worldwide. Replies within 24 hours.',
            })}
          </p>

          <div className="flex shrink-0 items-center gap-2 sm:-mr-3">
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
