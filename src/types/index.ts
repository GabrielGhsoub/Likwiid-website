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

export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  client: string
  category: ProjectCategory
  year: string
  description: string
  challenge: string
  approach: string
  results: string
  techStack: string[]
  images: string[]
  featured: boolean
  gradient: string
  platform: 'mobile' | 'web'
  liveUrl?: string
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
