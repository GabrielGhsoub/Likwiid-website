import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'
import { founder, cofounder } from '../../data/personal'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'

type Person = { name: string; photo: string; photoWidth: number; photoHeight: number }

export function Founder() {
  const { t } = useTranslation()
  const localize = useLocalizedPath()

  return (
    <section id="founder" className="scroll-mt-24 px-6 py-12 md:py-16" aria-labelledby="founder-heading">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2
            id="founder-heading"
            className="text-3xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)] md:text-4xl"
          >
            {t('founder.title')}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <TeamMember
            id="gabriel"
            person={founder}
            srcSet={`/gabriel-112.webp 112w, /gabriel-560.webp 560w`}
            photoAlt={t('founder.photoAlt')}
            role={t('founder.role')}
            bio={`${t('founder.bio1')} ${t('founder.bio3')}`}
          />
          <TeamMember
            id="emile"
            person={cofounder}
            srcSet={`/emile-112.webp 112w, ${cofounder.photo} ${cofounder.photoWidth}w`}
            photoAlt={t('founder.cofounderPhotoAlt')}
            role={t('founder.cofounderRole')}
            bio={`${t('founder.cofounderLine1')} ${t('founder.cofounderLine2')}`}
          />
        </div>
        <Reveal className="mt-8 max-w-3xl">
          <p className="m-0 font-medium text-text-primary">{t('founder.promise')}</p>
          <p className="mt-2 text-text-secondary">{t('founder.languages')}</p>
          <Link
            to={localize('/contact')}
            className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-medium text-accent-gold no-underline hover:underline"
          >
            {t('founder.cta')}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

type TeamMemberProps = {
  // Anchor for direct links such as likwiid.com/#emile
  id: string
  person: Person
  srcSet: string
  photoAlt: string
  role: string
  bio: string
}

function TeamMember({ id, person, srcSet, photoAlt, role, bio }: TeamMemberProps) {
  return (
    <Reveal id={id} className="flex scroll-mt-24 gap-5 rounded-xl border border-border bg-bg-secondary p-5">
      <img
        src={person.photo}
        srcSet={srcSet}
        sizes="112px"
        alt={photoAlt}
        width={112}
        height={112}
        loading="lazy"
        decoding="async"
        className="h-24 w-24 shrink-0 rounded-full border border-border bg-bg-tertiary object-cover object-top md:h-28 md:w-28"
      />
      <div>
        <h3 className="text-xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-display)]">
          {person.name}
        </h3>
        <p className="mt-1 text-sm text-text-tertiary">{role}</p>
        <p className="mt-3 leading-relaxed text-text-secondary">{bio}</p>
      </div>
    </Reveal>
  )
}
