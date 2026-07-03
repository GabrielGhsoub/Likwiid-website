import type { PersonalInfo, Stat } from '../types'

export const personalInfo: PersonalInfo = {
  name: 'Gabriel Ghoussoub',
  title: 'Founder & Full-Stack Software Engineer',
  location: 'Beirut, Lebanon',
  bio: "Likwiid is a founder-led software studio led by Gabriel Ghoussoub, a full-stack software engineer with 5+ years of experience shipping production software across fintech, insurtech, satellite monitoring, IoT, and VR. We lead with strategy before code and build end-to-end, from architecture to deployment, for startups and enterprises alike.",
  stats: [
    { value: '99.95%', key: 'uptime', label: 'System Uptime' },
    { value: '10+', key: 'productsShipped', label: 'Products Shipped' },
    { value: '< 24h', key: 'replyTime', label: 'Reply Time' },
    { value: '5+', key: 'industriesServed', label: 'Industries Served' },
  ],
}

export const stats: Stat[] = personalInfo.stats

export const aboutSections = {
  founder: {
    name: 'Gabriel Ghoussoub',
    role: 'Founder & Lead Engineer',
    bio: "Gabriel is a full-stack software engineer with 5+ years of experience building production systems across fintech, insurtech, satellite monitoring, IoT, and VR. He holds a degree in Computer and Communications Engineering from Antonine University. He's led cross-functional teams of up to 5 engineers, reduced deployment times by 93%, and achieved 99.95% system uptime through CI/CD and performance optimization.",
  },
  journey: [
    {
      period: '2021',
      role: 'Computer & Communications Engineering',
      company: 'Antonine University',
      description: 'Graduated with a degree in Computer and Communications Engineering.',
    },
    {
      period: '2021',
      role: 'Java Developer Intern',
      company: 'Blom Bank',
      description: 'Enhanced a Java Spring-based employee access system, integrating over 20 new features.',
    },
    {
      period: '2021',
      role: 'Web Developer',
      company: 'WonderEight Agency',
      description: 'Delivered 15+ client-focused websites using PHP and WordPress. Built Python scripts to automate web scraping for market data.',
    },
    {
      period: '2022 - 2024',
      role: 'Java Software Engineer',
      company: 'EmblemHealth (via Inspire Innovations)',
      description:
        'Developed scalable microservices with Spring Boot and Kubernetes. Reduced deployment times from 4 hours to 15 minutes. Achieved 90% test coverage with JUnit/Mockito.',
    },
    {
      period: '2024',
      role: 'Software Engineer',
      company: 'GCG (Ghoussoub Consulting Group)',
      description:
        'Designed an automated IoT energy management system with Angular UI, delivering 15% reduction in energy costs through predictive analytics.',
    },
    {
      period: '2024 - 2025',
      role: 'Mid-level Software Engineer',
      company: 'Bcom (Intelsat)',
      description:
        'Re-architected the Inpulse monitoring tool using fully reactive stack (Java WebFlux, React). Improved system responsiveness by 40% under high data loads.',
    },
    {
      period: '2025',
      role: 'Senior Software Engineer',
      company: 'Lawyers Syndicate',
      description:
        'Led a team of 5 engineers building a national digital identity card integrating banking functionalities and identity/access control.',
    },
    {
      period: '2025 - Present',
      role: 'Software Engineer',
      company: 'Speedlane',
      description:
        'Engineering scalable backend services and APIs using Node.js, TypeScript, Elixir, and NestJS. Full-stack development with Java Spring Boot and React.',
    },
    {
      period: '2025 - Present',
      role: 'Founder',
      company: 'Likwiid',
      highlight: true,
      description:
        'Founded Likwiid as a digital studio. Full-stack development, cloud architecture, AI integration, and VR experiences for clients worldwide.',
    },
  ],
  philosophy:
    'Software should flow. Like water adapting to any container, great engineering adapts to any problem. The name Likwiid embodies this belief: fluidity and adaptability in everything we build.',
  interests: [
    'Salsa dancing',
    'Formula 1',
    'Space exploration',
    'AI agent architectures',
    'VR development for Meta Quest',
    'IoT energy management',
  ],
} as const
