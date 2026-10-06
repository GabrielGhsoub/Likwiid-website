import type { Service } from '../types'

// English source copy. Other languages overlay it from `servicesData.<id>` in their
// locale files (see i18n/localizedContent.ts). techStack is kept for the type shape
// but no longer rendered.
export const services: Service[] = [
  {
    id: 'products',
    slug: 'web-and-mobile-products',
    title: 'Web and mobile products',
    shortDescription: 'Web apps, mobile apps and the backends behind them, built end to end.',
    longDescription:
      'We design and build web apps, iOS and Android apps, dashboards and the systems behind them. You work with one team from the first sketch to the launch, and the code is yours.',
    icon: 'Code',
    techStack: [],
    deliverables: [
      'Web applications and dashboards',
      'iOS and Android apps',
      'APIs, databases and integrations',
      'Launch, hosting and handover',
    ],
  },
  {
    id: 'booking',
    slug: 'booking-websites',
    title: 'Booking websites for hospitality and appointments',
    shortDescription: 'Websites where guests and clients book and pay you directly.',
    longDescription:
      'For small hotels, guesthouses, tour operators, salons and clinics that want bookings without paying a platform commission. Guests see real availability, pay a deposit and get reminders, and you keep the site, the bookings and the guest list.',
    icon: 'CalendarCheck',
    techStack: [],
    deliverables: [
      'Mobile-first design and build',
      'Online booking with card deposits',
      'Reminders by email or WhatsApp',
      'Calendar sync with the platforms you already use',
    ],
  },
  {
    id: 'ai',
    slug: 'ai-integration',
    title: 'AI integration and automation',
    shortDescription: 'AI features and automations that save real time.',
    longDescription:
      'We add AI where it earns its place: answering customer questions, reading documents, drafting replies or moving data between tools. Every feature ships with a fallback and running costs you can predict.',
    icon: 'Brain',
    techStack: [],
    deliverables: [
      'AI features inside your product',
      'Document and email processing',
      'Automations between the tools you use',
      'Assistants that answer from your own content',
    ],
  },
  {
    id: 'architecture',
    slug: 'architecture-cloud-code-rescue',
    title: 'Architecture, cloud and code rescue',
    shortDescription: 'A senior review, a cleaner cloud setup, or a rescue for a stuck codebase.',
    longDescription:
      'Some projects need a clear review before they need more code. We audit architecture and code, set up cloud hosting and deployment pipelines, and clean up codebases, including ones written fast with AI tools, so your team can ship again.',
    icon: 'Wrench',
    techStack: [],
    deliverables: [
      'Architecture and code audits',
      'Cloud setup and deployment pipelines',
      'Refactoring and test coverage',
      'A written plan with clear priorities',
    ],
  },
]
