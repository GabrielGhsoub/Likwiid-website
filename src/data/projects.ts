import type { Project } from '../types'

const projectCatalog: Project[] = [
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
    businessResult: 'Moved community play from DMs into owned booking and league workflows.',
    techStack: ['React Native', 'Expo', 'Supabase', 'Zustand', 'NativeWind', 'TypeScript'],
    images: [
      '/images/projects/padel/home.webp',
      '/images/projects/padel/play.webp',
      '/images/projects/padel/league.webp',
      '/images/projects/padel/profile.webp',
    ],
    featured: true,
    spotlight: true,
    gradient: 'linear-gradient(135deg, #0C1445 0%, #0E7490 100%)',
    platform: 'mobile',
    liveUrl: 'https://apps.apple.com/lb/app/padel-lebanon/id6759597948',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.padellebanon.app',
  },
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
    businessResult: 'Created a credible conversion path for consulting, tutoring, and investor diligence leads.',
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
    spotlight: true,
    gradient: 'linear-gradient(135deg, #000040 0%, #A9822B 100%)',
    platform: 'web',
    liveUrl: 'https://gabrielghsoub.github.io/gcg-website/',
    liveLabel: 'Live Site',
  },
  {
    id: 'sems',
    slug: 'sems-energy-management',
    title: 'SEMS: Smart Energy Management',
    subtitle: 'Multi-source energy visibility and cost control for Lebanese households',
    client: 'Likwiid',
    category: 'IoT',
    year: '2026',
    description:
      'A software-first energy management platform for homes running on EDL grid power, private generators, solar, and battery storage, with real-time monitoring, cost tracking, device analytics, and offline-aware mobile access.',
    challenge:
      'Lebanese households often juggle unreliable grid supply, generator subscriptions, solar systems, and batteries without one place to see what is powering the home, what each device costs, or how source changes affect the monthly bill.',
    approach:
      'Built a TypeScript monorepo with an Expo React Native app, NestJS API, PostgreSQL and TimescaleDB telemetry storage, Redis-backed real-time updates, shared validation schemas, and a simulated Lebanese energy data engine to validate the full product before hardware integration.',
    results:
      'Delivered a working mobile and backend foundation with authentication, device and room management, tariff configuration, current and historical telemetry APIs, source-aware cost calculation, offline cached views, and demo scenarios for EDL outages, generator use, solar production, and device-level consumption.',
    businessResult: 'Turned fragmented EDL, generator, solar, and battery data into one cost-control dashboard.',
    techStack: ['React Native', 'Expo', 'NestJS', 'TimescaleDB', 'PostgreSQL', 'Redis', 'Socket.io', 'TypeScript'],
    images: [
      '/images/projects/sems/dashboard.webp',
      '/images/projects/sems/analytics.webp',
      '/images/projects/sems/devices.webp',
      '/images/projects/sems/tariffs.webp',
      '/images/projects/sems/home-profile.webp',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #0F766E 0%, #2563EB 55%, #F59E0B 100%)',
    platform: 'mobile',
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
    businessResult: 'Turned scattered endurance metrics into a practical readiness and plan-tracking routine.',
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
    businessResult: 'Packaged daily vocal practice into a private, repeatable, offline-first workflow.',
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
    id: 'breathebreak',
    slug: 'breathebreak',
    title: 'BreatheBreak',
    subtitle: 'Mac menu-bar breathing reminders for screen-heavy workdays',
    client: 'Likwiid',
    category: 'Enterprise',
    year: '2026',
    description:
      'A macOS menu-bar wellness utility that turns screen-heavy workdays into gentle breathing check-ins with phased reminders, quick reset exercises, Control Pause tracking, and local session history.',
    challenge:
      'Breathing tools often require opening a separate app, which breaks focus. BreatheBreak needed to keep recovery cues present but unobtrusive during deep work, video calls, and Focus mode.',
    approach:
      'Built a SwiftUI menu-bar app with AppKit overlay windows, SwiftData session logs, notification scheduling, meeting-aware smart pause, training/consolidation/maintenance phases, chimes, stealth mode, launch-at-login support, and CSV export.',
    results:
      'Delivered a lightweight Mac companion with a compact countdown popover, Breathe Now and snooze controls, guided breathing overlays, daily Control Pause checks, streak and average CP metrics, 7-day trends, and settings built for repeat workday use.',
    businessResult: 'Kept wellness prompts present during deep work without asking users to open another app.',
    techStack: ['SwiftUI', 'AppKit', 'SwiftData', 'UserNotifications', 'Combine', 'Charts', 'ServiceManagement'],
    images: [
      '/images/projects/breathebreak/menubar.webp',
      '/images/projects/breathebreak/overlay.webp',
      '/images/projects/breathebreak/settings.webp',
      '/images/projects/breathebreak/flow.webp',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #0F172A 0%, #0F766E 54%, #F59E0B 100%)',
    platform: 'web',
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
    businessResult: 'Reduced repetitive LinkedIn outreach work while keeping users in control of each message.',
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
    id: 'healthcare-pdf-api',
    slug: 'healthcare-pdf-api',
    title: 'Healthcare PDF API',
    subtitle: 'Secure medical document generation with encryption, audit, and retention controls',
    client: 'Likwiid',
    category: 'Enterprise',
    year: '2026',
    description:
      'A compliance-focused NestJS backend for generating medical PDFs from templates or raw HTML, with API key authentication, Swagger documentation, encrypted storage, audit trails, webhooks, and retention policies.',
    challenge:
      'Healthcare document workflows need more than a PDF renderer. They need controlled access, traceable document events, protected PHI, predictable deletion rules, and integration-friendly API documentation for clinical and operations teams.',
    approach:
      'Built modular services for authentication, PDF generation, templates, encryption, audit logging, webhooks, and health checks using NestJS, TypeORM, PostgreSQL, Redis queues, Puppeteer, Handlebars, Docker, and OpenAPI documentation.',
    results:
      'Delivered an API-focused backend with sync and async generation endpoints, five medical document templates, scoped and hashed API keys, AES-256-GCM encryption, audit queries, webhook retry logic, Docker setup, and automated PDF expiry.',
    businessResult: 'Showed enterprise backend depth around sensitive documents, auditability, and API operations.',
    techStack: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Puppeteer', 'Redis', 'Swagger', 'Docker'],
    images: [
      '/images/projects/healthcare-pdf-api/architecture.webp',
      '/images/projects/healthcare-pdf-api/api-contract.webp',
      '/images/projects/healthcare-pdf-api/lifecycle.webp',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #0F766E 0%, #1E3A8A 100%)',
    platform: 'web',
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
    businessResult: 'Gave league operators a dashboard to manage play without touching the database.',
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
    businessResult: 'Explored adaptive coaching workflows that personalize training from user history.',
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
    businessResult: 'Built a memorable productivity concept with a differentiated behavioral hook.',
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
    businessResult: 'Explores affordable movement feedback for dancers outside private lessons.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'expo-sensors', 'expo-camera', 'SQLite', 'Zustand'],
    images: ['/images/projects/salsa/quest3.webp'],
    featured: false,
    gradient: 'linear-gradient(135deg, #115E59 0%, #1D4ED8 100%)',
    platform: 'mobile',
  },
]

const leadProjectIds = [
  'padel-booking',
  'gcg-website',
  'padel-admin',
  'sems',
  'bully-ai',
  'personal-fitness-tracker',
]

const leadProjectIdSet = new Set(leadProjectIds)

export const projects: Project[] = [
  ...leadProjectIds.map((id) => {
    const project = projectCatalog.find((item) => item.id === id)
    if (!project) throw new Error(`Missing lead project: ${id}`)
    return project
  }),
  ...projectCatalog.filter((project) => !leadProjectIdSet.has(project.id)),
]

export const featuredProjects = projects.filter((p) => p.featured)

export const projectCategories = ['All', 'Enterprise', 'Mobile', 'IoT', 'AI'] as const
