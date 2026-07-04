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
  // app stores, 'shipped' = built end to end but not publicly released, 'inDevelopment'.
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
  featured: boolean
  spotlight?: boolean
  gradient: string
  platform: 'mobile' | 'web'
  platformLabel?: string
  liveUrl?: string
  liveLabel?: string
  androidUrl?: string
  // --- Rich case-study fields (optional; sections hide gracefully when absent) ---
  oneLiner?: string
  role?: string
  timeline?: string
  metrics?: ProjectMetric[]
  keyFeatures?: ProjectFeature[]
  architecture?: ProjectArchitectureNote[]
  highlights?: string[]
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

export interface Skill {
  name: string
  category: SkillCategory
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'Mobile' | 'AI & Data' | 'Other'

export interface Stat {
  value: string
  label: string
  // Stable i18n key (under the `stats` namespace) so labels can be renamed without breaking
  // translation lookups.
  key: string
}

export interface PersonalInfo {
  name: string
  title: string
  location: string
  bio: string
  stats: Stat[]
}

export interface NavLink {
  label: string
  path: string
}

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
}
