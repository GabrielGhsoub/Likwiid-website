import type { Lang } from '../i18n/detectLanguage'

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  icon: string
  techStack: string[]
  deliverables: string[]
}

export type ProjectStatus = 'live' | 'shipped' | 'inDevelopment'

export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  client: string
  // Honest delivery state shown on the work index: 'live' = running in production or in
  // app stores, 'shipped' = finished build not publicly released, 'inDevelopment'.
  status: ProjectStatus
  category: ProjectCategory
  year: string
  description: string
  challenge: string
  approach: string
  results: string
  businessResult?: string
  techStack: string[]
  images: string[]
  previewImage?: string
  previewAlt?: string
  // Shown in the "Selected work" block on Home.
  featured: boolean
  platform: 'mobile' | 'web'
  platformLabel?: string
  liveUrl?: string
  liveLabel?: string
  androidUrl?: string
  // A second product shipped as part of the same engagement (e.g. an admin portal),
  // rendered as its own section with its own screenshots on the case study page.
  companion?: ProjectCompanion
  // --- Rich case-study fields (optional; sections hide gracefully when absent) ---
  oneLiner?: string
  role?: string
  metrics?: ProjectMetric[]
  keyFeatures?: ProjectFeature[]
  architecture?: ProjectArchitectureNote[]
  highlights?: string[]
  // Client words for the case study. Only ever a real quote the client approved for
  // publication; leave it out until then and the section does not render.
  quote?: ProjectQuote
}

/**
 * A client quote shown as a pull quote on a client case study page.
 *
 * - `text`: the quote per site language, e.g. `{ en: '...', fr: '...' }`. At least one
 *   language is required. The page language is used when present, then English, then
 *   whichever language the client wrote it in (marked with a `lang` attribute).
 * - `name`: the person quoted, exactly as they agreed to be named.
 * - `role`: their job title or relationship to the project.
 * - `company`: optional organization, shown after the role.
 * - `photo`: optional path under /public to a small square headshot.
 */
export interface ProjectQuote {
  text: ProjectQuoteText
  name: string
  role: string
  company?: string
  photo?: string
}

export type ProjectQuoteText = Partial<Record<Lang, string>>

export interface ProjectCompanion {
  title: string
  summary: string
  platform: 'mobile' | 'web'
  images: string[]
}

export interface ProjectMetric {
  value: string
  label: string
  basis?: string
}

export interface ProjectFeature {
  title: string
  description?: string
}

export interface ProjectArchitectureNote {
  area: string
  detail?: string
}

export type ProjectCategory = 'Enterprise' | 'Mobile' | 'IoT' | 'AI' | 'All'

export interface ContactFormData {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
}

export interface ContactSubmitPayload extends ContactFormData {
  // Honeypot field: must stay empty for real humans. Bots that auto-fill it are dropped.
  website?: string
  // Milliseconds from form render to submit - near-instant submits are almost always bots.
  elapsedMs?: number
  // Campaign tags and landing page captured from the visit (see utils/analytics.ts).
  attribution?: ContactAttribution
}

export interface ContactAttribution {
  source?: string
  medium?: string
  campaign?: string
  content?: string
  term?: string
  ref?: string
  landingPage?: string
  referrer?: string
  // Site language the visitor was reading when they sent the form.
  locale?: string
}
