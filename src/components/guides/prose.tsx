import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { withTrailingSlash } from '../../i18n/localeRoutes'
import { useGuideT } from './guideContext'

// Building blocks for guide articles (src/content/guides/<slug>/<lang>.tsx). Articles are
// written as JSX with these, so the prerendered HTML carries the full text and the styling
// stays in one place.

interface Children {
  children: ReactNode
}

/** The short summary at the top of an article: a list of <Li> items. */
export function Summary({ children }: Children) {
  const t = useGuideT()
  return (
    <aside className="rounded-xl border border-border bg-bg-secondary px-6 py-5">
      <p className="m-0 text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
        {t('guides.summaryTitle')}
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-text-primary leading-relaxed marker:text-text-tertiary">{children}</ul>
    </aside>
  )
}

export function H2({ children, id }: Children & { id?: string }) {
  return (
    <h2
      id={id}
      className="mt-12 scroll-mt-24 text-2xl md:text-3xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary"
    >
      {children}
    </h2>
  )
}

export function H3({ children }: Children) {
  return <h3 className="mt-8 text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">{children}</h3>
}

export function P({ children }: Children) {
  return <p className="mt-4 text-text-secondary leading-relaxed">{children}</p>
}

export function Ul({ children }: Children) {
  return <ul className="mt-4 list-disc space-y-2 pl-5 text-text-secondary leading-relaxed marker:text-text-tertiary">{children}</ul>
}

export function Ol({ children }: Children) {
  return <ol className="mt-4 list-decimal space-y-2 pl-5 text-text-secondary leading-relaxed marker:text-text-tertiary">{children}</ol>
}

export function Li({ children }: Children) {
  return <li className="pl-1">{children}</li>
}

/** Emphasis inside running text. */
export function B({ children }: Children) {
  return <strong className="font-semibold text-text-primary">{children}</strong>
}

/** A link to another page of this site, e.g. <A to="/pt/direct/">. Always in the slash form. */
export function A({ to, children }: Children & { to: string }) {
  const split = to.search(/[?#]/)
  const href = split === -1 ? withTrailingSlash(to) : `${withTrailingSlash(to.slice(0, split))}${to.slice(split)}`
  return (
    <Link to={href} className="font-medium text-accent-gold underline-offset-2 hover:underline">
      {children}
    </Link>
  )
}

/** A link to another website (sources, official pages). Opens in a new tab. */
export function Ext({ href, children }: Children & { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-accent-gold underline-offset-2 hover:underline">
      {children}
    </a>
  )
}

/** A highlighted aside inside the text: a caveat, an example, a tip. */
export function Note({ children, title }: Children & { title?: ReactNode }) {
  return (
    <div className="mt-6 rounded-xl border border-border border-l-4 border-l-accent-gold bg-bg-secondary px-5 py-4">
      {title && <p className="m-0 font-semibold font-[family-name:var(--font-display)] text-text-primary">{title}</p>}
      <div className="text-text-secondary leading-relaxed [&>p:first-child]:mt-0 [&>p]:mt-3">{children}</div>
    </div>
  )
}

/** A small data table, e.g. a worked example. Scrolls sideways on narrow screens. */
export function Table({ caption, head, rows }: { caption?: ReactNode; head: ReactNode[]; rows: ReactNode[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-left text-sm">
        {caption && <caption className="px-4 pt-3 text-left text-sm text-text-tertiary">{caption}</caption>}
        <thead>
          <tr className="border-b border-border">
            {head.map((cell, i) => (
              <th key={i} scope="col" className="px-4 py-3 font-semibold text-text-primary">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-border last:border-b-0">
              {row.map((cell, c) => (
                <td key={c} className="px-4 py-3 align-top text-text-secondary">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
