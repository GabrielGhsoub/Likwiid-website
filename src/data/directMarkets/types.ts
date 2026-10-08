import type { Lang } from '../../i18n/detectLanguage'
import type { DirectMarket } from '../../i18n/localeRoutes'

// Copy for one Likwiid Direct market page in one language. Each page is written for its own
// market, so the sections differ in kind, order and number from page to page; the layout in
// src/components/sections/DirectMarketPage.tsx renders whatever the page lists.

export interface TitledItem {
  title: string
  desc: string
}

export type DirectMarketSection =
  /** How a booking typically goes for this kind of business, as numbered steps. */
  | { kind: 'steps'; id: string; title: string; intro?: string; items: TitledItem[] }
  /** What Likwiid Direct handles, as cards. Only features the public demos show. */
  | { kind: 'cards'; id: string; title: string; intro?: string; items: TitledItem[] }
  /** Short points, such as the problems this kind of business runs into. */
  | { kind: 'points'; id: string; title: string; intro?: string; items: string[] }
  /** A boxed aside: local rules (hedged, with a note to check with the authority) or what Direct does not do. */
  | { kind: 'panel'; id: string; title: string; paragraphs: string[]; note?: string }
  /** Real proof: a case study in the reader's language. */
  | { kind: 'proof'; id: string; title: string; body: string; linkLabel: string; to: string }

export interface FaqItem {
  q: string
  a: string
}

export interface DirectMarketContent {
  market: DirectMarket
  lang: Lang
  /** <title>, at most 62 characters. */
  docTitle: string
  /** Meta description, at most 160 characters. */
  description: string
  /** Last breadcrumb item, visible and in BreadcrumbList. */
  crumb: string
  eyebrow: string
  h1: string
  intro: string[]
  /** The public demo closest to this kind of business. */
  demo: 'quinta-likwiid' | 'atelier-likwiid' | 'escuela-likwiid'
  ctaDemo: string
  ctaTalk: string
  /** Says the demo is fictional and its checkout simulated. */
  demoNote: string
  sections: DirectMarketSection[]
  faqTitle: string
  faq: FaqItem[]
  closingTitle: string
  closingBody: string
  /** Visible breadcrumb label for the Direct page. */
  directCrumb: string
  /** Closing link back to the Direct page. */
  backToDirect: string
  breadcrumbLabel: string
}

/** A page in every language it exists in. */
export type DirectMarketContents = Partial<Record<Lang, DirectMarketContent>>
