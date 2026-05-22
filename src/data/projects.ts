import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'gcg-website',
    slug: 'gcg-website',
    title: 'GCG Website',
    subtitle: 'Premium science-consulting website with clear pathways and conversion flows',
    client: 'Ghoussoub Consulting Group',
    category: 'Enterprise',
    year: '2026',
    description:
      'A polished digital presence for Ghoussoub Consulting Group, positioning the firm around science-driven consulting, R&D support, STEM tutoring, and investment diligence.',
    challenge:
      'GCG needed a website that could make a broad, technical service offering feel clear and credible for several audiences: organizations, research teams, students, families, investors, and partners.',
    approach:
      'Built a React and Vite website with structured audience pathways, service pages for R&D and tutoring, investment and careers routes, refined light and dark themes, animated science visuals, SEO metadata, and conversion-ready consultation and contact flows.',
    results:
      'Delivered a premium consulting platform with clear service segmentation, trust-building methodology sections, responsive navigation, legal pages, analytics hooks, and a GitHub Pages deployment.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router'],
    images: [
      '/images/projects/gcg/home.webp',
      '/images/projects/gcg/pathways.webp',
      '/images/projects/gcg/services.webp',
      '/images/projects/gcg/process.webp',
      '/images/projects/gcg/engagement-models.webp',
      '/images/projects/gcg/research.webp',
      '/images/projects/gcg/tutoring.webp',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #000040 0%, #A9822B 100%)',
    platform: 'web',
    liveUrl: 'https://gabrielghsoub.github.io/gcg-website/',
    liveLabel: 'Live Site',
  },
  {
    id: 'personal-fitness-tracker',
    slug: 'personal-fitness-tracker',
    title: 'Personal Fitness Tracker',
    subtitle: 'Heart-rate guided endurance training with readiness and plan progress',
    client: 'Likwiid',
    category: 'Mobile',
    year: '2026',
    description:
      'A local-first mobile training app for endurance athletes, combining daily readiness, heart-rate-zone guidance, run logging, and 12-week plan progress in one focused dashboard.',
    challenge:
      'Most fitness trackers bury training context behind generic charts or cloud-first workflows. This app needed to make readiness, run history, and plan adherence clear on-device for heart-rate guided training.',
    approach:
      'Built an Expo React Native app with SQLite storage, a cardio-focused training protocol, BLE heart-rate strap support, HRV and resting-heart-rate baselines, MAF pace tracking, training-load charts, run history, and plan compliance views.',
    results:
      'Delivered a polished mobile tracker with realistic local run history, readiness scoring, live run preparation, heart-rate-zone targets, weekly trend reviews, MAF progress, and a structured 12-week endurance plan.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Zustand', 'NativeWind', 'BLE'],
    images: [
      '/images/projects/personal-fitness-tracker/today.webp',
      '/images/projects/personal-fitness-tracker/run.webp',
      '/images/projects/personal-fitness-tracker/history.webp',
      '/images/projects/personal-fitness-tracker/trends.webp',
      '/images/projects/personal-fitness-tracker/plan.webp',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #020617 0%, #10B981 100%)',
    platform: 'mobile',
  },
  {
    id: 'voxflow',
    slug: 'voxflow',
    title: 'VoxFlow',
    subtitle: 'Offline vocal re-education with guided practice, recordings, and progress',
    client: 'Likwiid',
    category: 'Mobile',
    year: '2026',
    description:
      'A calm offline-first mobile app for vocal re-education, guiding users through daily 10-minute practice sessions with private recordings, A/B comparison, progress tracking, and clinical learning articles.',
    challenge:
      'Vocal practice can be hard to keep consistent when timers, instructions, recordings, and education live in separate tools. VoxFlow needed to feel private, steady, and clinically grounded without adding social pressure or noisy wellness patterns.',
    approach:
      'Built an Expo React Native app around a six-phase routine, breathing-paced visual feedback, guided exercise cards, local baseline and weekly samples, A/B voice comparison, a progress calendar, milestone articles, and device-only storage.',
    results:
      'Delivered an Android-ready wellness companion with onboarding, guided sessions, saved recordings, comparison workflows, weekly targets, milestone progress, and a quiet article library designed for repeat daily use.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'AsyncStorage', 'Expo Audio'],
    images: [
      '/images/projects/voxflow/practice.webp',
      '/images/projects/voxflow/session.webp',
      '/images/projects/voxflow/progress.webp',
      '/images/projects/voxflow/compare.webp',
      '/images/projects/voxflow/learn.webp',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #F8F5F0 0%, #3D7B7B 100%)',
    platform: 'mobile',
  },
  {
    id: 'linkedin-templates-extension',
    slug: 'linkedin-templates-extension',
    title: 'LinkedIn Templates Extension',
    subtitle: 'Privacy-first Chrome extension for faster LinkedIn outreach',
    client: 'Likwiid',
    category: 'Enterprise',
    year: '2026',
    description:
      'A Manifest V3 Chrome extension for sales, recruiting, and founder-led outreach teams that saves reusable LinkedIn message templates, replaces profile variables, and inserts polished messages without risky automation.',
    challenge:
      'Outreach teams repeat the same LinkedIn messages across prospects, candidates, and follow-ups, but heavy automation can create account risk and still leaves teams managing snippets across notes, docs, and inboxes.',
    approach:
      'Built a React and TypeScript extension with a polished popup, full options dashboard, template categories, variable detection, Chrome Storage sync, import and export, LinkedIn composer insertion, keyboard shortcuts, and local-first privacy controls.',
    results:
      'Delivered a focused productivity tool with searchable templates, one-click insertion feedback, reusable category workflows, smart variables like first name and company, synced settings, and a Chrome Web Store-ready Manifest V3 structure.',
    techStack: ['Chrome Extension MV3', 'React', 'TypeScript', 'Tailwind CSS', 'Webpack', 'Chrome Storage API'],
    images: [
      '/images/projects/linkedin-templates/options-templates.webp',
      '/images/projects/linkedin-templates/options-editor.webp',
      '/images/projects/linkedin-templates/options-settings.webp',
      '/images/projects/linkedin-templates/popup-inserted.webp',
      '/images/projects/linkedin-templates/popup-sales-filter.webp',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #0A66C2 0%, #111827 100%)',
    platform: 'web',
  },
  {
    id: 'padel-booking',
    slug: 'padel-booking',
    title: 'Padel Booking Platform',
    subtitle: 'League management, matchmaking, and real-time court booking',
    client: 'Likwiid',
    category: 'Mobile',
    year: '2025',
    description:
      'A full-featured mobile platform for the Lebanese padel community with league management, player matchmaking, skill-based filtering, and real-time court booking.',
    challenge:
      'The Lebanese padel community lacked a dedicated platform. Courts were booked via WhatsApp and Instagram DMs. There was no way to find players at your skill level, track league standings, or manage competitive play.',
    approach:
      'Built a React Native Expo app with Supabase backend. Features include league creation and management with standings, skill-level-based matchmaking (D- to C+), player profiles with win/loss records, real-time match joining, and court check-in.',
    results:
      'Fully functional app with league management, matchmaking, player profiles, and standings. Active testing with the Beirut padel community.',
    techStack: ['React Native', 'Expo', 'Supabase', 'Zustand', 'NativeWind', 'TypeScript'],
    images: [
      '/images/projects/padel/home.webp',
      '/images/projects/padel/play.webp',
      '/images/projects/padel/league.webp',
      '/images/projects/padel/profile.webp',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #0C1445 0%, #0E7490 100%)',
    platform: 'mobile',
    liveUrl: 'https://apps.apple.com/lb/app/padel-lebanon/id6759597948',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.padellebanon.app',
  },
  {
    id: 'padel-admin',
    slug: 'padel-admin-portal',
    title: 'Padel Admin Portal',
    subtitle: 'Web dashboard for league and player management',
    client: 'Likwiid',
    category: 'Enterprise',
    year: '2025',
    description:
      'A full-featured admin dashboard for managing the Padel Booking Platform. Includes league lifecycle management, user administration with role-based access, real-time standings, match scheduling, and system settings.',
    challenge:
      'The Padel Booking mobile app needed a companion admin portal for league organizers and platform administrators to manage leagues, monitor player activity, and control platform settings without touching a database.',
    approach:
      'Built a React web app with a clean admin UI using shadcn/ui components. Features include league CRUD with multi-tab detail views (overview, players, weeks, matches, standings, statistics, playoffs), user management with role/status filtering, Swiss-system pairing, check-in toggle controls, and theme/notification settings.',
    results:
      'Fully functional admin portal with league lifecycle management, user administration, standings tracking, and real-time check-in controls. Used in active testing with the Beirut padel community.',
    techStack: ['React', 'TypeScript', 'Supabase', 'shadcn/ui', 'Tailwind CSS', 'Vite'],
    images: [
      '/images/projects/padel-admin/leagues.webp',
      '/images/projects/padel-admin/users.webp',
      '/images/projects/padel-admin/league-detail.webp',
      '/images/projects/padel-admin/standings.webp',
      '/images/projects/padel-admin/settings.webp',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #155E75 100%)',
    platform: 'web',
  },
  {
    id: 'ai-fitness-coach',
    slug: 'ai-fitness-coach',
    title: 'AI Fitness Coach',
    subtitle: 'AI-powered personal training with adaptive workout programming',
    client: 'Likwiid',
    category: 'AI',
    year: '2025',
    description:
      'A mobile fitness app with an AI coach that generates personalized 12-week programs, provides real-time form cues, tracks RPE, and adapts training based on performance history.',
    challenge:
      "Most fitness apps offer static programs that don't adapt to the user. Personal trainers are expensive. There was no affordable middle ground that combined structured programming with intelligent, context-aware coaching.",
    approach:
      "Built a React Native Expo app with an AI Coach powered by LLM integration. The coach knows the user's full program, training history, and preferences. It provides exercise-specific form cues, RPE-based load recommendations, nutrition guidance, and weekly progress summaries.",
    results:
      'Working prototype with AI Coach chat, workout tracking with RPE logging, program generation, and workout summary analytics.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Claude API', 'Zustand', 'SQLite'],
    images: [
      '/images/projects/fitness/program.webp',
      '/images/projects/fitness/exercises.webp',
      '/images/projects/fitness/coach.webp',
      '/images/projects/fitness/workout.webp',
      '/images/projects/fitness/assessment.webp',
      '/images/projects/fitness/week.webp',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #0C1445 0%, #164E63 100%)',
    platform: 'mobile',
  },
  {
    id: 'bully-ai',
    slug: 'bully-ai',
    title: 'Bully.ai',
    subtitle: 'The app that guilt-trips you into getting things done',
    client: 'Likwiid',
    category: 'Mobile',
    year: '2025',
    description:
      'A React Native productivity app that uses escalating aggressive notifications to combat procrastination. Built on behavioral psychology principles with 5 bully personalities, an ADHD toolbox with courses and exercises, stats tracking, and community features.',
    challenge:
      "Traditional productivity apps rely on positive reinforcement, which doesn't work for chronic procrastinators and people with ADHD. Users need something that actually cuts through the noise: humor, guilt, and escalating pressure.",
    approach:
      "Built with Expo SDK 54 and React Native New Architecture. Features escalating notification system (gentle to nuclear) with 5 personalities (Disappointed Friend, Drill Sergeant, Passive-Aggressive, Existential, Hype Beast). Includes ADHD Toolbox with courses and quick exercises, commitment contracts based on Cialdini's influence framework, stats with streaks and community comparison, and daily psychology tips.",
    results:
      'Fully functional app with task management, escalating notifications, ADHD learning system, productivity stats, and community features. Targeting chronic procrastinators and Gen Z users.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'NativeWind', 'Expo Notifications'],
    images: [
      '/images/projects/bully/home.webp',
      '/images/projects/bully/learn.webp',
      '/images/projects/bully/stats.webp',
      '/images/projects/bully/add-task.webp',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)',
    platform: 'mobile',
  },
  {
    id: 'sems',
    slug: 'sems-energy-management',
    title: 'SEMS: Smart Energy Management',
    subtitle: 'IoT-powered multi-source energy optimization for Lebanese households',
    client: 'Likwiid',
    category: 'IoT',
    year: '2025 - Present',
    description:
      'A Raspberry Pi hub with mobile app for managing three power sources: state grid, private generators, and solar.',
    challenge:
      'Lebanese households juggle 3 power sources (state grid, private generators, solar) with no unified management tool. Generator costs consume 44% of average household income.',
    approach:
      'Designing a Raspberry Pi hub running Home Assistant OS with a React Native Expo mobile app and cloud backend. Multi-source energy monitoring, AI-driven optimization, and sustainability-first approach.',
    results:
      'In development. Targeting 20-30% energy cost reduction through intelligent source switching and consumption optimization.',
    techStack: ['React Native', 'Expo', 'NestJS', 'PostgreSQL', 'TimescaleDB', 'MQTT', 'Raspberry Pi', 'Zigbee'],
    images: ['/images/projects/sems/placeholder.svg'],
    featured: false,
    gradient: 'linear-gradient(135deg, #134E4A 0%, #1E40AF 100%)',
    platform: 'mobile',
  },
  {
    id: 'salsaflow',
    slug: 'salsaflow',
    title: 'SalsaFlow',
    subtitle: 'AI-powered movement analysis for salsa dancers',
    client: 'Likwiid',
    category: 'AI',
    year: '2025 - Present',
    description:
      'A mobile app using device sensors and AI for real-time salsa movement analysis and personalized feedback.',
    challenge:
      'No affordable personal tool exists for salsa dancers to get objective feedback on posture, timing, and movement quality outside of expensive private lessons.',
    approach:
      'Expo React Native app using device sensors (accelerometer, gyroscope) for real-time movement analysis, camera for video self-review, and a rule-based AI coach that provides specific technique feedback.',
    results:
      'In development. Targeting real-time posture scoring, timing accuracy analysis, and personalized drill recommendations.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'expo-sensors', 'expo-camera', 'SQLite', 'Zustand'],
    images: ['/images/projects/salsa/quest3.webp'],
    featured: false,
    gradient: 'linear-gradient(135deg, #115E59 0%, #1D4ED8 100%)',
    platform: 'mobile',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const projectCategories = ['All', 'Enterprise', 'Mobile', 'IoT', 'AI'] as const
