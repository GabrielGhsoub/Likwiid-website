import { useSyncExternalStore } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SOCIAL } from '../../utils/constants'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import { Logo } from '../ui/Logo'
import { umamiAttrs } from '../../utils/analytics'
import { useCurrentLanguage, useLocalizedPath } from '../../i18n/useLocalizedPath'
import { DIRECT_MARKET_SLUGS, directMarketLanguages, directMarketPath, withTrailingSlash } from '../../i18n/localeRoutes'

const FOOTER_LINK =
  'inline-flex min-h-11 items-center text-text-tertiary text-sm hover:text-text-primary transition-colors no-underline'
const FOOTER_HEADING = 'm-0 text-xs font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]'

const subscribeNever = () => () => {}
const currentYear = () => new Date().getFullYear()
// The prerendered HTML carries the build year; hydration reuses it so the markup matches,
// then the visitor's own year renders if it differs (a build from last December).
const buildYear = () => __BUILD_YEAR__

export function Footer() {
  const { t } = useTranslation()
  const year = useSyncExternalStore(subscribeNever, currentYear, buildYear)
  const localize = useLocalizedPath()
  const lang = useCurrentLanguage()
  const markets = DIRECT_MARKET_SLUGS.filter((market) => directMarketLanguages(market).includes(lang))
  return (
    <footer className="mt-0 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 py-8 flex flex-col gap-2">
        {/* Where to go next: the product, the pages per trade, the guides and the calculators. */}
        <nav aria-label={t('footer.work')} className="mb-4 grid gap-6 border-b border-border pb-6 sm:grid-cols-3">
          <ul className="m-0 flex list-none flex-col p-0">
            <li><Link to={localize('/direct')} className={FOOTER_LINK}>{t('footer.direct')}</Link></li>
            <li><Link to={localize('/work')} className={FOOTER_LINK}>{t('footer.work')}</Link></li>
            <li><Link to={localize('/guides')} className={FOOTER_LINK}>{t('guides.crumb')}</Link></li>
            <li><Link to={localize('/software')} className={FOOTER_LINK}>{t('footer.otherSoftware')}</Link></li>
          </ul>
          {markets.length > 0 && (
            <div>
              <p className={FOOTER_HEADING}>{t('footer.byTrade')}</p>
              <ul className="m-0 flex list-none flex-col p-0">
                {markets.map((market) => (
                  <li key={market}>
                    <Link to={withTrailingSlash(directMarketPath(market, lang))} className={FOOTER_LINK}>
                      {t(`direct.marketLinks.${market}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <p className={FOOTER_HEADING}>{t('footer.calculators')}</p>
            <ul className="m-0 flex list-none flex-col p-0">
              <li><Link to={localize('/tools/ota-commission-calculator')} className={FOOTER_LINK}>{t('footer.otaCalculator')}</Link></li>
              <li><Link to={localize('/tools/portfolio-cost-calculator')} className={FOOTER_LINK}>{t('footer.portfolioCalculator')}</Link></li>
            </ul>
          </div>
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-start">
          <Link
            to={localize('/')}
            className="inline-flex min-h-11 items-center text-text-primary transition-opacity hover:opacity-75 no-underline"
          >
            <Logo className="h-5" />
          </Link>
          <span className="text-text-tertiary text-sm">
            {t('footer.copyright', { year })}
          </span>
          <span className="hidden text-text-tertiary text-sm sm:inline" aria-hidden="true">&middot;</span>
          <Link to={localize('/privacy')} className={FOOTER_LINK}>
            {t('footer.privacy')}
          </Link>
        </div>

        {/* Tagline and contact icons share one row on desktop; they stack, centred, on mobile.
            The icon row is pulled right by its own padding so the last glyph lines up with
            the content edge. */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-6">
          <p className="m-0 text-text-tertiary text-sm text-center sm:text-left">
            {t('footer.tagline')}
          </p>

          <div className="flex shrink-0 items-center gap-2 sm:-mr-3">
            <a
              href={SOCIAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="WhatsApp"
              {...umamiAttrs('cta-whatsapp', { location: 'footer' })}
            >
              <WhatsAppIcon size={20} />
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="GitHub"
              {...umamiAttrs('social-click', { network: 'github', location: 'footer' })}
            >
              <Github size={20} />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="LinkedIn"
              {...umamiAttrs('social-click', { network: 'linkedin', location: 'footer' })}
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${SOCIAL.email}`}
              className="p-3 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Email"
              {...umamiAttrs('cta-email', { location: 'footer' })}
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
