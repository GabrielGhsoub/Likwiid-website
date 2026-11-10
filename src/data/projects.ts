import type { Project } from '../types'
import { projectEnrichment } from './projectEnrichment'

// Visible copy lives here and stays plain: what it is, who it is for, what changed.
// Framework and version names belong in techStack (short names, no versions) and in
// projectEnrichment.ts (architecture, highlights), which render inside the collapsed
// "Technical details" section.

const projectCatalog: Project[] = [
  {
    id: 'parallel',
    status: 'inDevelopment',
    slug: 'parallel',
    title: 'Parallel Ski App',
    subtitle: 'A ski and snowboard companion for Lebanon, with snow forecasts and a live map of your friends',
    client: 'Parallel Inc',
    category: 'Mobile',
    year: '2026',
    oneLiner: "A ski and snowboard app for Lebanon's six resorts, with a live squad map and snow forecasts.",
    description:
      "Parallel brings Lebanon's six ski resorts into one app: Mzaar, Cedars, Laqlouq, Faqra, Zaarour and Qanat Bakish. Riders get a forecast for each mountain, 3D resort maps, a live map of their friends and a direct line to monitors and schools, in Arabic, English and French. Gabriel Ghoussoub leads the engineering for Parallel Inc.",
    challenge:
      'A day on the slopes means knowing the weather on that mountain, finding your friends across a resort and reaching an instructor. The app has to draw live positions on a 3D map on ordinary phones, keep working on a weak mobile signal and leave enough battery for the drive home.',
    approach:
      'We built one app for iOS and Android, with its own server, admin dashboard and public website, so a change reaches all of them quickly. The map draws pistes, lifts and each friend as a skier over the terrain. Sharing stays in the rider\'s hands: your squad sees you only after you check in, only at a ski resort, and each check in ends by itself after 8 hours.',
    results:
      'Parallel is getting ready for the App Store and Google Play ahead of the 2026 to 2027 ski season, and its website is live. On a Galaxy S10+, opening the app now takes 1.3 seconds instead of 2.4, and a phone at rest asks for no GPS at all, where it used to run GPS for 19 minutes an hour.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'PostgreSQL', 'PostGIS', 'Redis', 'MapLibre', 'three.js', 'TanStack Query', 'Zustand', 'i18next'],
    images: [
      '/images/projects/parallel/home.webp',
      '/images/projects/parallel/map.webp',
      '/images/projects/parallel/squad.webp',
      '/images/projects/parallel/forecast.webp',
      '/images/projects/parallel/monitors.webp',
      '/images/projects/parallel/events.webp',
    ],
    previewImage: '/images/projects/parallel/map.webp',
    previewAlt: 'Parallel map of Mzaar with pistes, lifts and three friends drawn as skiers',
    featured: true,
    platform: 'mobile',
    liveUrl: 'https://parallel-leb.com',
    liveLabel: 'parallel-leb.com',
  },
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
    id: 'escuela-nautica-valencia',
    status: 'live',
    slug: 'escuela-nautica-valencia',
    title: 'Boat Licence Course Booking',
    subtitle: 'Online booking and seat deposits for a boat licence school in Valencia',
    client: 'Escuela Náutica de Valencia',
    category: 'Enterprise',
    year: '2026',
    oneLiner: 'A booking page where students pick a course day and pay a seat deposit online.',
    description:
      "Escuela Náutica de Valencia teaches the Licencia de Navegación, with practical sessions on the school's own boat and five seats per day. Students now pick a day, enter their details and pay a deposit to hold their seat, on a page under the school's own domain.",
    challenge:
      'Each course day has five seats on the boat. The school wanted students to choose a day and secure a seat online, under its own domain and its own Stripe account, on the hosting it already had.',
    approach:
      'We built a booking page in three steps: pick a day, enter your details, pay the deposit by card or Bizum. A seat is held for 30 minutes while the student pays and released if the payment does not go through. The main school website stays as it is.',
    results:
      'The page is live in Spanish with an English toggle, five days after the first prototype. Each payment sends the student a receipt and the school a notice, and the school manages days and seats from its own panel.',
    businessResult:
      'Escuela Náutica de Valencia now takes course bookings and seat deposits online, on its own domain and its own Stripe account.',
    techStack: ['React', 'Vite', 'PHP', 'SQLite', 'Stripe Checkout'],
    images: [
      '/images/projects/escuela-nautica/booking.webp',
      '/images/projects/escuela-nautica/calendar.webp',
      '/images/projects/escuela-nautica/details.webp',
      '/images/projects/escuela-nautica/phone.webp',
    ],
    previewAlt: 'Escuela Náutica de Valencia booking page for the Licencia de Navegación course',
    companion: {
      title: 'The school panel',
      summary:
        'Behind a password, the school sees the bookings for each day, exports them as a spreadsheet, cancels a booking and opens or closes days with their number of seats. The public calendar updates from the same data, and ID numbers are deleted 30 days after the course.',
      platform: 'web',
      images: ['/images/projects/escuela-nautica-panel/login.webp'],
    },
    featured: true,
    platform: 'web',
    liveUrl: 'https://reservas.escuelanauticadevalencia.es/',
    liveLabel: 'Live Site',
    quote: {
      originalLang: 'es',
      name: 'Dani',
      role: 'Escuela Náutica de Valencia',
      text: {
        es: 'les explicaría que me has diseñado una herramienta teniendo en cuenta todas las necesidades concretas que tengo haciéndome más fácil la gestión de mis alumnos y ahorrándome mucho tiempo delante del ordenador y no navegando que es de lo que se trata mi escuela. También le diría que has entendido perfectamente mis demandas y has sabido darles forma de una manera muy práctica.',
        en: 'I would tell them that you designed a tool for me around all the specific needs I have, which makes managing my students easier and saves me a lot of time in front of the computer instead of sailing, which is what my school is about. I would also say that you understood my requests perfectly and gave them shape in a very practical way.',
      },
    },
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
    id: 'basemile',
    status: 'live',
    slug: 'basemile',
    title: 'BaseMile',
    subtitle: 'A free, open source running coach that guides each run by heart rate',
    client: 'Likwiid',
    category: 'Mobile',
    year: '2026',
    oneLiner: 'A free, open source heart rate running coach that runs entirely on the phone.',
    description:
      "BaseMile is a running coach for the cardio days of the Foundational Fitness week from Andrew Huberman's book Protocols. It pairs with a Bluetooth chest strap, speaks cues with the phone's own voice and turns each run into clear trends. It is an independent project, not affiliated with or endorsed by Andrew Huberman or Huberman Lab.",
    challenge:
      'Most fitness apps want an account, a subscription and the cloud. A heart rate coach also has to keep talking with the phone in a pocket, the screen off and no signal.',
    approach:
      'We built three run types: Long runs in Zone 2 under a MAF ceiling, Medium runs at 75 to 85% of max heart rate, and Brief runs as 30/60 repeats or a 4x4. Everything runs on the phone, with no account, no server, no sync and no AI.',
    results:
      'Released as open source on 18 October 2026 under the GPL-3.0, with a signed Android APK on GitHub. Since 31 October 2026 it is also free on the App Store for iPhone.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'SQLite', 'Bluetooth LE', 'MapLibre', 'Vitest'],
    images: [
      '/images/projects/basemile/ios-live-run.webp',
      '/images/projects/basemile/ios-voice-mode.webp',
      '/images/projects/basemile/ios-run-detail.webp',
      '/images/projects/basemile/ios-trends.webp',
      '/images/projects/basemile/ios-run-picker.webp',
    ],
    previewImage: '/images/projects/basemile/ios-live-run.webp',
    previewAlt: 'BaseMile live run screen with the heart rate in Zone 2 and the coach on',
    featured: false,
    platform: 'mobile',
    liveUrl: 'https://github.com/likwiid/basemile',
    liveLabel: 'Source on GitHub',
    iosUrl: 'https://apps.apple.com/app/basemile/id6824560584',
    androidUrl: 'https://github.com/likwiid/basemile/releases/latest',
    androidLabel: 'Android APK',
    openSource: { name: 'BaseMile', anchor: 'basemile' },
  },
  {
    id: 'plateclimb',
    status: 'live',
    slug: 'plateclimb',
    title: 'PlateClimb',
    subtitle: 'A free, open source workout app for the 12 week Foundational Fitness program',
    client: 'Likwiid',
    category: 'Mobile',
    year: '2026',
    oneLiner: 'A free, open source workout app that runs one 12 week program, fully offline.',
    description:
      'PlateClimb ships one program, Foundational Fitness, over 12 weeks. Each week has three lifting days, three cardio days and a rest and mobility day, following the structure Andrew Huberman describes in Protocols. It is an independent project, not affiliated with or endorsed by Andrew Huberman or Huberman Lab.',
    challenge:
      'Most fitness apps want an account, a subscription and the cloud, then leave you to build the program yourself. Following a set plan in the gym should take a few taps and no signal.',
    approach:
      'We put the whole program in the app as local data. Block 1, weeks 1 to 6, is heavier. Block 2, weeks 7 to 11, uses higher reps. Week 12 is off. Every lift comes with sets, a rep range, an RPE target, rest and a starting weight.',
    results:
      'Released as open source on 18 October 2026 under the GPL-3.0, with a signed Android APK on GitHub. Since 2 November 2026 it is also free on the App Store for iPhone.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    images: [
      '/images/projects/plateclimb/ios-week.webp',
      '/images/projects/plateclimb/ios-day.webp',
      '/images/projects/plateclimb/ios-set.webp',
      '/images/projects/plateclimb/ios-rest.webp',
      '/images/projects/plateclimb/summary.webp',
      '/images/projects/plateclimb/exercise.webp',
    ],
    previewImage: '/images/projects/plateclimb/ios-day.webp',
    previewAlt: 'PlateClimb legs day with the sets, reps, weight and rest for each exercise',
    featured: false,
    platform: 'mobile',
    liveUrl: 'https://github.com/likwiid/plateclimb',
    liveLabel: 'Source on GitHub',
    iosUrl: 'https://apps.apple.com/app/plateclimb/id6824561382',
    androidUrl: 'https://github.com/likwiid/plateclimb/releases/latest',
    androidLabel: 'Android APK',
    openSource: { name: 'PlateClimb', anchor: 'plateclimb' },
  },
  {
    id: 'woop',
    status: 'live',
    slug: 'woop',
    title: 'WOOP',
    subtitle: 'A calm Android planner for WOOP goal setting, with if-then plans and short check-ins',
    client: 'Likwiid',
    category: 'Mobile',
    year: '2026',
    oneLiner: 'A free, open source Android planner for WOOP goal setting that never goes online.',
    description:
      "WOOP walks you through the four steps of mental contrasting, Wish, Outcome, Obstacle and Plan, the method from Gabriele Oettingen's research that Andrew Huberman covers in Protocols. It turns each obstacle into an if-then plan and brings you back for short check-ins. It is an independent project, not affiliated with or endorsed by Gabriele Oettingen, WOOP My Life, Andrew Huberman or Huberman Lab.",
    challenge:
      'WOOP works best when you write it down and re-read it when motivation dips. Paper gets lost, and most productivity apps add streaks, scores and accounts that make a hard day worse. The plan has to stay in view without asking for attention.',
    approach:
      'We gave every step its own screen, with one question, autosave and examples on tap. Each obstacle gets its own if-then plan, the plan you focus on sits in a home screen widget, and reminders bring you back for a one minute check-in that tunes the plan when it did not work.',
    results:
      'Released as open source on 25 October 2026 under the GPL-3.0, with a signed Android APK on GitHub. The app has no internet permission, so nothing you write can leave the phone.',
    techStack: ['Kotlin', 'Jetpack Compose', 'Room', 'Glance'],
    images: [
      '/images/projects/woop/today.webp',
      '/images/projects/woop/plan.webp',
      '/images/projects/woop/check-in.webp',
      '/images/projects/woop/science.webp',
      '/images/projects/woop/widget.webp',
    ],
    previewImage: '/images/projects/woop/today.webp',
    previewAlt: 'WOOP Today screen with the wish in focus and its if-then plan',
    featured: false,
    platform: 'mobile',
    liveUrl: 'https://github.com/likwiid/woop',
    liveLabel: 'Source on GitHub',
    androidUrl: 'https://github.com/likwiid/woop/releases/latest',
    androidLabel: 'Android APK',
    openSource: { name: 'WOOP', anchor: 'woop' },
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
  'parallel',
  'padel-booking',
  'escuela-nautica-valencia',
  'gcg-website',
  'voxflow',
  'basemile',
  'plateclimb',
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
