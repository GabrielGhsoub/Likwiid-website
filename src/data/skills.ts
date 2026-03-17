import type { Skill, SkillCategory } from '../types'

export const skills: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Framer Motion', category: 'Frontend' },

  { name: 'Java', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },

  { name: 'AWS', category: 'Cloud & DevOps' },
  { name: 'Terraform', category: 'Cloud & DevOps' },
  { name: 'Kubernetes', category: 'Cloud & DevOps' },
  { name: 'Docker', category: 'Cloud & DevOps' },
  { name: 'GitHub Actions', category: 'Cloud & DevOps' },
  { name: 'Ansible', category: 'Cloud & DevOps' },

  { name: 'React Native', category: 'Mobile' },
  { name: 'Expo', category: 'Mobile' },

  { name: 'Claude API', category: 'AI & Data' },
  { name: 'OpenAI', category: 'AI & Data' },
  { name: 'LangChain', category: 'AI & Data' },
  { name: 'Python', category: 'AI & Data' },

  { name: 'Unity', category: 'Other' },
  { name: 'C#', category: 'Other' },
  { name: 'Meta Quest SDK', category: 'Other' },
]

export const skillCategories: SkillCategory[] = [
  'Frontend',
  'Backend',
  'Cloud & DevOps',
  'Mobile',
  'AI & Data',
  'Other',
]
