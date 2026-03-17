import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SOCIAL } from '../../utils/constants'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-[1200px] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="font-[family-name:var(--font-display)] text-lg font-bold text-text-primary hover:text-accent-gold transition-colors no-underline"
          >
            Likwiid
          </Link>
          <span className="text-text-tertiary text-sm">
            &copy; {CURRENT_YEAR} Likwiid. Founded by Gabriel Ghoussoub.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
