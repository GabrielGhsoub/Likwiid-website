import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'fullstack',
    slug: 'full-stack-development',
    title: 'Full-Stack Web & Mobile Development',
    shortDescription:
      'Building production applications from database to UI. Web apps, mobile apps, APIs — solutions that work seamlessly across every layer.',
    longDescription:
      'From enterprise insurance portals serving thousands of users to personal training apps, we build the full vertical. Our stack is fluid: React and React Native for the frontend, Java/Spring Boot or Node.js/NestJS on the backend, with PostgreSQL or MongoDB for data. We adapt to what the project needs.',
    icon: 'Code',
    techStack: ['React', 'React Native', 'Expo', 'Java', 'Spring Boot', 'Node.js', 'NestJS', 'PostgreSQL', 'MongoDB'],
    deliverables: [
      'Web applications',
      'Mobile apps (iOS/Android)',
      'REST/GraphQL APIs',
      'Database architecture',
    ],
  },
  {
    id: 'cloud',
    slug: 'cloud-devops',
    title: 'Cloud & DevOps Consulting',
    shortDescription:
      'Infrastructure as Code, CI/CD pipelines, containerization, and cloud architecture for teams that need to scale fluidly.',
    longDescription:
      'We design and implement cloud infrastructure that scales with demand. From setting up your first CI/CD pipeline to migrating monoliths to microservices on Kubernetes, we help teams ship faster with confidence.',
    icon: 'Cloud',
    techStack: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'Ansible', 'GitHub Actions', 'GitLab CI'],
    deliverables: [
      'Cloud migration plans',
      'Infrastructure as Code setup',
      'CI/CD pipelines',
      'Monitoring dashboards',
      'Cost optimization audits',
    ],
  },
  {
    id: 'ai',
    slug: 'ai-integration',
    title: 'AI/ML Integration & Automation',
    shortDescription:
      'Integrating AI capabilities into existing products. LLM-powered features, intelligent automation, and agent workflows that adapt to your domain.',
    longDescription:
      'AI is only valuable when it solves real problems. We integrate LLMs, build intelligent automation pipelines, and design multi-agent systems that actually ship to production — not just demos.',
    icon: 'Brain',
    techStack: ['Anthropic Claude API', 'OpenAI', 'LangChain', 'Python', 'Multi-agent Systems'],
    deliverables: [
      'AI-powered features',
      'Chatbots',
      'Document processing pipelines',
      'Automation workflows',
      'AI code review agents',
    ],
  },
  {
    id: 'vr',
    slug: 'vr-development',
    title: 'VR/XR Development',
    shortDescription:
      'Building immersive experiences for Meta Quest and beyond. From concept to deployed VR application.',
    longDescription:
      'Immersive technology is the next interface. We build VR applications and interactive 3D experiences for Meta Quest, focusing on practical use cases — from training simulations to creative tools.',
    icon: 'Glasses',
    techStack: ['Unity', 'Godot', 'Meta Quest SDK', 'C#'],
    deliverables: [
      'VR applications',
      '3D interactive experiences',
      'XR prototypes',
    ],
  },
  {
    id: 'consulting',
    slug: 'architecture-consulting',
    title: 'Software Architecture & Consulting',
    shortDescription:
      'Technical strategy, architecture reviews, and system design for teams that need senior-level guidance to navigate complexity.',
    longDescription:
      'Sometimes you need a second pair of experienced eyes. We provide architecture reviews, system design consultations, and technical strategy for teams navigating complex decisions — channeling complexity into clean, manageable systems.',
    icon: 'LayoutDashboard',
    techStack: ['System Design', 'Microservices', 'Event-Driven Architecture', 'Domain-Driven Design'],
    deliverables: [
      'Architecture decision records',
      'System design documents',
      'Tech stack recommendations',
      'Code audits',
      'Team mentorship sessions',
    ],
  },
  {
    id: 'ai-remediation',
    slug: 'ai-code-remediation',
    title: 'AI Code Maintenance & Remediation',
    shortDescription:
      'Shipped fast with AI-generated code? We clean it up. Refactoring, testing, and dissolving technical debt.',
    longDescription:
      'AI-generated code gets you to market fast, but it accumulates debt faster. We audit, refactor, add test coverage, optimize performance, and document codebases that were built with AI assistance — so your team can move fast again.',
    icon: 'Wrench',
    techStack: ['Code Quality', 'Testing', 'Performance Profiling', 'Refactoring', 'Documentation'],
    deliverables: [
      'Code quality audits',
      'Refactoring plans',
      'Test suite implementation',
      'Performance profiling',
      'Documentation',
    ],
  },
]
