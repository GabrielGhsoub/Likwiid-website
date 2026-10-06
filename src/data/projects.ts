import type { Project } from '../types'
import { projectEnrichment } from './projectEnrichment'

// Visible copy lives here and stays plain: what it is, who it is for, what changed.
// Framework and version names belong in techStack (short names, no versions) and in
// projectEnrichment.ts (architecture, highlights), which render inside the collapsed
// "Technical details" section.

const projectCatalog: Project[] = [
  {
    id: 'padel-booking',
    status: 'live',
    slug: 'padel-booking',
    title: 'Padel Booking Platform',
    subtitle: 'Court booking, matchmaking and leagues for padel players in Lebanon',
    client: 'Padel Inc',
    category: 'Mobile',
    year: '2025',
    oneLiner: 'A booking and league app for padel players and clubs in Lebanon.',
    description:
      'Padel Lebanon lets players book courts, find matches at their level and play in organized leagues. It is live on the App Store and Google Play, with a web portal for league organizers.',
    challenge:
      'Padel in Lebanon ran on WhatsApp groups and spreadsheets. Players had no easy way to see free courts, find partners at their level or follow a league.',
    approach:
      'We designed one mobile app for players and a web portal for organizers, both working from the same data. The app keeps working on weak connections, which matters in Lebanon.',
    results:
      'The app is live on both stores in English, Arabic and French. Players book, match and compete in one place, and organizers run each league week in a few clicks.',
    businessResult:
      'Padel Inc moved court booking and league play out of WhatsApp groups and into its own app, published on both app stores.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'TanStack Query', 'Zustand', 'NativeWind', 'i18next', 'Sentry', 'React', 'Radix UI', 'Tailwind CSS', 'PostgreSQL'],
    images: [
      '/images/projects/padel/league.webp',
      '/images/projects/padel/play.webp',
    ],
    previewImage: '/images/projects/padel/league.webp',
    previewAlt: 'Padel Lebanon app showing a league with standings and players',
    companion: {
      title: 'The admin portal',
      summary:
        'League organizers use a web portal to create leagues, manage players and staff, and open or close weekly check-in. Pairings, scores and standings update automatically, so nobody edits the database by hand.',
      platform: 'web',
      images: [
        '/images/projects/padel-admin/leagues.webp',
        '/images/projects/padel-admin/league-detail.webp',
        '/images/projects/padel-admin/standings.webp',
        '/images/projects/padel-admin/users.webp',
        '/images/projects/padel-admin/settings.webp',
      ],
    },
    featured: true,
    platform: 'mobile',
    liveUrl: 'https://apps.apple.com/lb/app/padel-lebanon/id6759597948',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.padellebanon.app',
  },
  {
    id: 'gcg-website',
    status: 'live',
    slug: 'gcg-website',
    title: 'GCG Website',
    subtitle: 'Website for a science consulting firm with a clear path for each audience',
    client: 'GCG',
    category: 'Enterprise',
    year: '2026',
    oneLiner: 'Website for a science consulting firm, with a clear path for every audience.',
    description:
      'Ghoussoub Consulting Group offers research support, tutoring and investment advice to very different clients. The new website gives each audience its own clear starting point and an easy way to get in touch.',
    challenge:
      'GCG serves companies, research teams, students, families and investors. Its offer was broad and technical, and needed to feel clear and credible to all of them.',
    approach:
      'We grouped the services into four paths, one per audience, each with its own page and plain explanations. Every page ends with a simple way to request a consultation.',
    results:
      'The site is live with nine pages, light and dark modes, and a contact route on every path. It is fast, accessible and cheap to run.',
    businessResult:
      "GCG now has one site that sends each visitor, from a company to a student's parents, to the right service and a consultation request.",
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion', 'Umami', 'GitHub Actions', 'GitHub Pages'],
    images: [
      '/images/projects/gcg/home.webp',
      '/images/projects/gcg/pathways.webp',
      '/images/projects/gcg/services.webp',
      '/images/projects/gcg/dark-home.webp',
    ],
    previewAlt: 'GCG website home page',
    featured: true,
    platform: 'web',
    liveUrl: 'https://gabrielghsoub.github.io/gcg-website/',
    liveLabel: 'Live Site',
  },
  {
    id: 'voxflow',
    status: 'shipped',
    slug: 'voxflow',
    title: 'VoxFlow',
    subtitle: 'A daily voice practice app that works fully offline',
    client: 'Likwiid',
    category: 'Mobile',
    year: '2026',
    oneLiner: 'A private, offline app that guides people through 10 minutes of daily voice practice.',
    description:
      'VoxFlow puts the timer, instructions, recorder and reading material for voice recovery into one calm 10 minute routine. It needs no account and keeps every recording on the phone.',
    challenge:
      'People doing voice exercises had to juggle a timer, notes, a recorder and articles. Most apps also add streak pressure and cloud accounts, which this audience does not want.',
    approach:
      'We built one guided routine that tells the user what to do at each moment. Recordings stay private, and users can play an early recording next to a recent one to hear their progress.',
    results:
      'A finished Android app with onboarding, guided sessions, a recordings library, side by side comparison, a progress calendar and a short learning library. It works with no internet connection.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'expo-audio', 'AsyncStorage', 'react-native-svg'],
    images: [
      '/images/projects/voxflow/practice.webp',
      '/images/projects/voxflow/session.webp',
      '/images/projects/voxflow/progress.webp',
      '/images/projects/voxflow/compare.webp',
    ],
    previewAlt: 'VoxFlow daily practice screen',
    featured: true,
    platform: 'mobile',
  },
  {
    id: 'personal-fitness-tracker',
    status: 'shipped',
    slug: 'personal-fitness-tracker',
    title: 'Personal Fitness Tracker',
    subtitle: 'A running coach that guides each run by heart rate',
    client: 'Likwiid',
    category: 'Mobile',
    year: '2026',
    oneLiner: 'A running coach app that guides each run by heart rate, fully offline.',
    description:
      'The app connects to a chest heart rate strap and coaches the runner live through a 12 week plan. After each run it explains what happened and how training is going.',
    challenge:
      'Most fitness apps show generic charts and need the cloud. This runner needed live, reliable coaching from a heart rate strap, with the phone in a pocket and the screen off.',
    approach:
      'We built a spoken coach that reacts to heart rate every second and follows a structured plan. All data stays on the phone, and an optional voice assistant answers questions during the run.',
    results:
      "A finished app with eight screens covering today's readiness, live runs, history and trends. It tracks pace, effort and training load across the full 12 week plan.",
    techStack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'SQLite', 'Bluetooth LE', 'NativeWind', 'MapLibre', 'Reanimated', 'Zod', 'Vitest'],
    images: [
      '/images/projects/personal-fitness-tracker/today.webp',
      '/images/projects/personal-fitness-tracker/run.webp',
      '/images/projects/personal-fitness-tracker/history.webp',
      '/images/projects/personal-fitness-tracker/trends.webp',
    ],
    previewAlt: 'Personal Fitness Tracker readiness screen',
    featured: false,
    platform: 'mobile',
  },
  {
    id: 'breathebreak',
    status: 'shipped',
    slug: 'breathebreak',
    title: 'BreatheBreak',
    subtitle: 'Breathing reminders in the Mac menu bar for long screen days',
    client: 'Likwiid',
    category: 'Enterprise',
    year: '2026',
    oneLiner: 'A Mac menu bar app that reminds desk workers to take short breathing breaks.',
    description:
      'BreatheBreak sits in the Mac menu bar and prompts short breathing exercises during the workday. It stays quiet during calls, in Focus mode and outside working hours.',
    challenge:
      'Breathing apps only help if you use them in the middle of a task, but opening one breaks your focus. The reminders had to be there all day without getting in the way.',
    approach:
      'We built three levels of reminder, from a small icon pulse to a full screen exercise that appears only now and then. The schedule adapts to how often the user actually completes a session.',
    results:
      'A finished Mac app with a countdown, snooze, guided breathing exercises and a simple breath hold test with a 7 day trend. All data stays on the Mac.',
    techStack: ['Swift', 'SwiftUI', 'AppKit', 'SwiftData', 'Swift Charts', 'Combine', 'UserNotifications'],
    images: [
      '/images/projects/breathebreak/menubar.webp',
      '/images/projects/breathebreak/overlay.webp',
      '/images/projects/breathebreak/settings.webp',
      '/images/projects/breathebreak/flow.webp',
    ],
    previewAlt: 'BreatheBreak menu bar countdown',
    featured: false,
    platform: 'web',
    platformLabel: 'macOS · Menu bar',
  },
  {
    id: 'sems',
    status: 'inDevelopment',
    slug: 'sems-energy-management',
    title: 'SEMS: Smart Energy Management',
    subtitle: 'One view of grid, generator, solar and battery power for homes in Lebanon',
    client: 'Likwiid',
    category: 'IoT',
    year: '2026',
    oneLiner: 'An app showing Lebanese homes where their power comes from and its cost.',
    description:
      'Many Lebanese homes switch between grid power, a generator, solar panels and batteries in a single day. SEMS shows in one place which source is running, what each device uses and what it all costs.',
    challenge:
      'Energy apps assume one steady power supply, which is not how Lebanese homes work. We also needed to prove the idea before buying any meter hardware.',
    approach:
      "We built the mobile app and its server, plus a realistic simulator of a Lebanese home's daily power cycle. It lets us demo power cuts, generator use and sunny days without any hardware installed.",
    results:
      'The first working version is complete: sign in, a live dashboard, devices by room, cost by power source and four demo scenarios. Connecting real meters is the next step.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'TimescaleDB', 'Redis', 'Socket.io', 'Turborepo', 'Docker'],
    images: [
      '/images/projects/sems/dashboard.webp',
      '/images/projects/sems/analytics.webp',
      '/images/projects/sems/devices.webp',
      '/images/projects/sems/tariffs.webp',
    ],
    previewAlt: 'SEMS live energy dashboard',
    featured: false,
    platform: 'mobile',
  },
]

// Display order on /work and for "Next project" navigation.
const leadProjectIds = [
  'padel-booking',
  'gcg-website',
  'voxflow',
  'personal-fitness-tracker',
  'breathebreak',
  'sems',
]

const leadProjectIdSet = new Set(leadProjectIds)

const withEnrichment = (project: Project): Project => {
  const enrichment = projectEnrichment[project.slug]
  return enrichment ? { ...project, ...enrichment } : project
}

export const projects: Project[] = [
  ...leadProjectIds.map((id) => {
    const project = projectCatalog.find((item) => item.id === id)
    if (!project) throw new Error(`Missing lead project: ${id}`)
    return project
  }),
  ...projectCatalog.filter((project) => !leadProjectIdSet.has(project.id)),
].map(withEnrichment)
