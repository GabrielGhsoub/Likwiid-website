import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Check, Minus } from 'lucide-react'
import { PageTransition } from '../layout/PageTransition'
import { Button } from '../ui/Button'
import { BUTTON_LINK_PRIMARY_LG } from '../ui/buttonLink'
import { directDemoHref } from '../../utils/demoLinks'
import { useTheme } from '../../hooks/useTheme'
import { umamiAttrs } from '../../utils/analytics'
import { useCurrentLanguage, useLocalizedPath } from '../../i18n/useLocalizedPath'
import type { Lang } from '../../i18n/detectLanguage'
import type { DirectMarketContent, DirectMarketSection } from '../../data/directMarkets/types'

const H2 = 'text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary'
const H3 = 'text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary'
const LINK = 'inline-flex items-center gap-1.5 font-medium text-accent-gold no-underline hover:underline'

function Section({ section, localize }: { section: DirectMarketSection; localize: (path: string) => string }) {
  const headingId = `${section.id}-heading`
  return (
    <section aria-labelledby={headingId} className="mt-20">
      {section.kind === 'panel' || section.kind === 'proof' ? (
        <div className="rounded-xl border border-border bg-bg-secondary p-8 md:p-12">
          <h2 id={headingId} className={H2}>
            {section.title}
          </h2>
          {section.kind === 'panel' ? (
            <>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.note && <p className="mt-6 max-w-3xl text-sm text-text-tertiary leading-relaxed">{section.note}</p>}
            </>
          ) : (
            <>
              <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">{section.body}</p>
              <Link to={localize(section.to)} className={`mt-6 ${LINK}`}>
                {section.linkLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </>
          )}
        </div>
      ) : (
        <>
          <h2 id={headingId} className={H2}>
            {section.title}
          </h2>
          {section.intro && <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">{section.intro}</p>}
          {section.kind === 'steps' && (
            <ol className="mt-8 grid gap-6 md:grid-cols-2">
              {section.items.map((item, index) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-sm text-text-tertiary font-[family-name:var(--font-mono)]"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className={H3}>{item.title}</h3>
                    <p className="mt-1 text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}
          {section.kind === 'cards' && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {section.items.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-bg-secondary p-6">
                  <Check size={20} className="text-text-tertiary" aria-hidden="true" />
                  <h3 className={`mt-3 ${H3}`}>{item.title}</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
          {section.kind === 'points' && (
            <ul className="mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary leading-relaxed">
                  <Minus size={18} className="mt-1 shrink-0 text-text-tertiary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  )
}

/**
 * A Likwiid Direct page for one market or kind of business. `contents` holds the page in every
 * language it exists in; the reader's language picks one (the URL prefix wins), and a page
 * that exists in one language only always shows that one.
 */
export function DirectMarketPage({ contents }: { contents: Partial<Record<Lang, DirectMarketContent>> }) {
  const lang = useCurrentLanguage()
  const content = contents[lang] ?? Object.values(contents)[0]!
  const localize = useLocalizedPath()
  // The demo's "Back to Likwiid" chip returns to this page.
  const backPath = useLocation().pathname
  const { theme } = useTheme()

  useEffect(() => {
    document.title = content.docTitle
  }, [content.docTitle])

  return (
    <PageTransition>
      <div className="px-6 pt-28 pb-16" data-direct-market={content.market}>
        <div className="mx-auto max-w-[1200px]">
          <nav aria-label={content.breadcrumbLabel} className="mb-8 text-sm text-text-tertiary">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to={localize('/direct')} className="text-text-secondary no-underline hover:text-text-primary hover:underline">
                  {content.directCrumb}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-text-primary">
                {content.crumb}
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
              {content.eyebrow}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary leading-tight">
              {content.h1}
            </h1>
            {content.intro.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? 'mt-6 text-lg text-text-secondary leading-relaxed' : 'mt-4 text-text-secondary leading-relaxed'}
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={directDemoHref(content.lang, backPath, content.demo, theme)}
                className={BUTTON_LINK_PRIMARY_LG}
                {...umamiAttrs('demo-launch', { product: 'direct', demo: content.demo, location: `direct-${content.market}` })}
              >
                {content.ctaDemo}
              </a>
              <Button
                variant="secondary"
                size="lg"
                href="/contact"
                umamiEvent="cta-start-project"
                umamiData={{ location: `direct-${content.market}-hero` }}
              >
                {content.ctaTalk}
              </Button>
            </div>
            <p className="mt-4 text-sm text-text-tertiary leading-relaxed">{content.demoNote}</p>
          </div>

          {content.sections.map((section) => (
            <Section key={section.id} section={section} localize={localize} />
          ))}

          {/* FAQ: always visible, the same questions and answers as the FAQPage JSON-LD. */}
          <section aria-labelledby="faq-heading" className="mt-20">
            <h2 id="faq-heading" className={H2}>
              {content.faqTitle}
            </h2>
            <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {content.faq.map((item) => (
                <div key={item.q}>
                  <h3 className={H3}>{item.q}</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing */}
          <section aria-labelledby="closing-heading" className="mt-20 text-center">
            <h2 id="closing-heading" className={H2}>
              {content.closingTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary leading-relaxed">{content.closingBody}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                umamiEvent="cta-start-project"
                umamiData={{ location: `direct-${content.market}-footer` }}
              >
                {content.ctaTalk}
              </Button>
              <Link to={localize('/direct')} className={LINK}>
                {content.backToDirect}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}
