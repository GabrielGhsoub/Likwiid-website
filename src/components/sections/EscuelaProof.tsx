import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'
import { PhoneFrame } from '../ui/DeviceFrame'
import { ClientQuote } from './ClientQuote'
import { projects } from '../../data/projects'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'
import { umamiAttrs } from '../../utils/analytics'

const ESCUELA_SLUG = 'escuela-nautica-valencia'
const escuela = projects.find((p) => p.slug === ESCUELA_SLUG)
export const ESCUELA_PHONE_IMAGE = '/images/projects/escuela-nautica/phone-top.webp'

// The one named tourism client, shown as the lead proof on Home, Work and Direct.
export function EscuelaProof({ flush = false }: { flush?: boolean }) {
  const { t } = useTranslation()
  const localize = useLocalizedPath()
  if (!escuela) return null

  return (
    <section className={`py-12 md:py-16${flush ? '' : ' px-6'}`} aria-labelledby="escuela-proof-heading">
      <Reveal className="mx-auto grid max-w-[1200px] items-center gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-14">
        <div className="mx-auto w-[200px] md:w-full">
          <PhoneFrame>
            <img
              src={ESCUELA_PHONE_IMAGE}
              alt={t('home.proofImageAlt')}
              width={390}
              height={844}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </PhoneFrame>
        </div>
        <div>
          <p className="m-0 text-sm font-medium uppercase tracking-wider text-accent-gold font-[family-name:var(--font-mono)]">
            {t('home.proofEyebrow')}
          </p>
          <h2
            id="escuela-proof-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-4xl"
          >
            {t('home.proofTitle')}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">{t('home.proofBody')}</p>
          {escuela.quote && <ClientQuote quote={escuela.quote} className="mt-6" compact />}
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2">
            {escuela.liveUrl && (
              <a
                href={escuela.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 font-medium text-accent-gold no-underline hover:underline"
                {...umamiAttrs('proof-live', { project: ESCUELA_SLUG })}
              >
                {t('home.proofLive')}
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            )}
            <Link
              to={localize(`/work/${ESCUELA_SLUG}`)}
              className="inline-flex min-h-11 items-center gap-2 font-medium text-text-primary no-underline hover:text-accent-gold"
            >
              {t('home.proofCase')}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
