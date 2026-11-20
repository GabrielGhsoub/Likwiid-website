import type { Project } from '../types'

// Case-study detail, keyed by project slug and merged onto the base records in projects.ts.
// keyFeatures and metrics are visible on the page, so they stay plain English. architecture
// and highlights only render inside the collapsed "Technical details" section, which is
// where framework names, versions and engineering notes belong.

type ProjectEnrichment = Partial<Pick<Project, 'role' | 'metrics' | 'keyFeatures' | 'architecture' | 'highlights'>>

export const projectEnrichment: Record<string, ProjectEnrichment> = {
  parallel: {
    role: 'Technical lead, Gabriel Ghoussoub: architecture, mobile app, backend, infrastructure and store releases',
    metrics: [
      { value: '6', label: 'Lebanese resorts, with 30 landmarks on the map' },
      { value: '46%', label: 'Faster from tap to Home on a Galaxy S10+' },
      { value: '0 s', label: 'Of GPS an hour on a resting Galaxy S10+, down from 1128 s' },
    ],
    keyFeatures: [
      {
        title: 'A live map of your squad',
        description: 'Friends appear as skiers on a 3D map of the resort, with how far away they are and one tap to find them.',
      },
      {
        title: 'Sharing you control',
        description: 'Your squad sees you only after you check in, only at a ski resort, and each check-in ends by itself after 8 hours.',
      },
      {
        title: 'A forecast for each mountain',
        description: 'Wind, snow depth, freezing level and visibility at slope height, with a sign that shows when the weather models agree.',
      },
      {
        title: 'Resort maps and landmarks',
        description: 'Pistes and lifts over the terrain, and 30 landmarks across the six resorts with their height, history and tips.',
      },
      {
        title: 'Monitors and schools',
        description: 'Ski and snowboard monitors and schools listed by resort, with their profile and a direct line on WhatsApp.',
      },
      {
        title: 'Arabic, English and French',
        description: 'The whole app in three languages, with a full right to left layout in Arabic.',
      },
    ],
    architecture: [
      {
        area: 'App',
        detail: 'React Native and Expo from one codebase for iOS and Android, with expo-router, TanStack Query, Zustand and i18next. JavaScript changes ship over the air with EAS Update. On a weak mountain signal, reads give up early and the app stays usable.',
      },
      {
        area: 'Map',
        detail: "MapLibre GL in a WebView, with OpenFreeMap tiles, Mapterhorn terrain and OpenSkiMap pistes. Lifts, trees, snowfall and 3D riders are drawn in a three.js layer, and each rider's GPS fixes play back slightly late, like a video buffer, so sparse updates still move smoothly.",
      },
      {
        area: 'Backend',
        detail: 'NestJS 11, Postgres 17 with PostGIS and pg_cron, and Redis. The React admin dashboard and the public website are built and served from the same stack.',
      },
      {
        area: 'Weather',
        detail: 'A self hosted Open-Meteo service reads open weather model data, and the API refreshes it in the background so forecasts stay quick.',
      },
      {
        area: 'Battery',
        detail: 'On Android, GPS drops to balanced power once the phone rests or leaves the slopes, which turns it off in practice. A 60 second task keeps squads updated even when Samsung phones freeze the app after the screen goes off.',
      },
    ],
    highlights: [
      'Tap to Home from 2442 ms to 1315 ms on a Galaxy S10+, over 12 launches of each build',
      'GPS standing still with the screen off, from 1128 s an hour to 0 on the same phone, with the squad still getting a position every minute',
      'Over 1,100 automated tests in the app',
      'Report and block in squads, and account deletion inside the app',
    ],
  },
  'padel-booking': {
    role: 'Design, development and app store launch',
    metrics: [
      { value: '2', label: 'App stores, live' },
      { value: '3', label: 'Languages, including Arabic' },
      { value: '12', label: 'Skill levels, D- to A+' },
    ],
    keyFeatures: [
      {
        title: 'Court booking',
        description: 'Find a court, see the price and book in a few taps.',
      },
      {
        title: 'Matches at your level',
        description: 'A 12 level rating from D- to A+ pairs players of similar skill.',
      },
      {
        title: 'Full league seasons',
        description: 'Leagues run from sign up through weekly pairings and scores to the playoff final.',
      },
      {
        title: 'Live standings',
        description: 'Tables update as soon as scores are entered, with fair tie breakers.',
      },
      {
        title: 'Organizer tools on the web',
        description: 'Manage players and staff by role, and open or close weekly check-in.',
      },
      {
        title: 'Three languages',
        description: 'English, Arabic and French, with a full right to left layout for Arabic.',
      },
    ],
    architecture: [
      {
        area: 'Mobile app',
        detail: 'React Native 0.81 on Expo SDK 54 (New Architecture), Expo Router across 42 screens, NativeWind and Reanimated.',
      },
      {
        area: 'Data & state',
        detail: 'Zustand (24 stores) for client state; TanStack Query for server state with a 24h offline cache.',
      },
      {
        area: 'Backend & auth',
        detail: 'NestJS 11 REST API (70+ endpoints, TypeORM, PostgreSQL) via 17 typed client modules; Axios with single-flight JWT refresh.',
      },
      {
        area: 'Admin portal',
        detail: 'React 19 and Vite SPA with TanStack Router and Query, Zustand, Radix UI and Tailwind CSS 4, on the same NestJS API.',
      },
      {
        area: 'League engine',
        detail: 'Five pairing modes (random, skill based, Swiss, fairness round robin, manual), set and game tie breakers, playoff bracket.',
      },
      {
        area: 'Reliability & delivery',
        detail: 'Sentry, error boundaries, Playwright E2E, EAS Build and OTA updates; Docker, GitHub Actions and a database backup before every deploy.',
      },
    ],
    highlights: [
      'Single-flight, proactive JWT refresh about 60s before expiry to prevent rotation races',
      'Round robin pairing uses a real fairness heuristic built from teammate and opponent history, not a shuffle',
      'Refresh token rotation on the admin side guarded by a Redis lock against concurrent refreshes',
      'Worked around an OkHttp 4.12 + nginx bug via cache-busting params on 90+ endpoints',
      'Offline first: 24h cache, expo-network online manager, synchronous in-memory hydration',
      'About 1,494 i18n keys per language across EN/AR/FR with full Arabic RTL',
    ],
  },
  'escuela-nautica-valencia': {
    role: 'Design, development and launch',
    metrics: [
      { value: '3', label: 'Steps to book a seat' },
      { value: '30 min', label: 'Seat hold while paying' },
      { value: '15 Oct 2026', label: 'Live with real payments since' },
    ],
    keyFeatures: [
      {
        title: 'Open days at a glance',
        description: 'A calendar shows the days the school has opened and how many seats are left.',
      },
      {
        title: 'ID checked before payment',
        description: 'DNI, NIE and passport numbers are validated, so typos are caught before anyone pays.',
      },
      {
        title: 'Deposit by card',
        description: "Students pay the seat deposit by card, into the school's own payment account.",
      },
      {
        title: 'Seats held while paying',
        description: 'A seat is held for 30 minutes during payment and released if it is not paid.',
      },
      {
        title: 'An email for both sides',
        description: 'The student gets a receipt and the school gets a notice, both in Spanish. The student also gets a reminder the day before.',
      },
      {
        title: 'Booking closes by itself',
        description: 'An empty day closes 48 hours before. A day that already has students closes at 14:00 the day before.',
      },
      {
        title: 'Phone bookings in the same list',
        description: 'The school adds by hand the students who booked by phone, so every day shows all its seats in one place.',
      },
      {
        title: 'Only the data it needs',
        description: 'ID numbers are deleted 30 days after the course date.',
      },
    ],
    architecture: [
      {
        area: 'Front end',
        detail: 'React and Vite single page app, Spanish with an English toggle, and self hosted fonts.',
      },
      {
        area: 'Backend',
        detail: "A small PHP 8 API with no framework and SQLite, deployed on the school's existing IONOS shared hosting.",
      },
      {
        area: 'Payments',
        detail: "Stripe Checkout (card) on the school's own Stripe account; webhooks confirm paid bookings, unpaid holds expire after 30 minutes.",
      },
      {
        area: 'School panel',
        detail: 'Password protected: bookings per day, manual entries for phone bookings, print and CSV export per day, whole day cancellation with a notice to students, refunds, a password reset, the official licence form as a filled PDF, and the open days and seats that drive the public calendar.',
      },
      {
        area: 'Security & privacy',
        detail: 'CSP and HSTS headers, rate limiting, and ID numbers purged 30 days after the course date.',
      },
    ],
    highlights: [
      "Runs on the school's existing shared hosting, with no new services to pay for",
      "Everything lives under the school's own domain and Stripe account, so it owns the payments and the data",
      'Seat holds keep a five seat boat from being overbooked while students are on the payment page',
      'Checksum validation of DNI and NIE numbers before payment',
      'From static prototype to a Stripe connected page in five days',
    ],
  },
  'gcg-website': {
    role: 'Design, development and launch',
    metrics: [
      { value: '9', label: 'Pages' },
      { value: '4', label: 'Audience paths' },
      { value: '2', label: 'Color themes' },
    ],
    keyFeatures: [
      {
        title: 'A path for each audience',
        description: 'A "Choose your path" section sends four audiences to pages written for them.',
      },
      {
        title: 'Clear service pages',
        description: 'Research and tutoring pages explain the method, what clients get and what happens next.',
      },
      {
        title: 'Custom science illustrations',
        description: 'Hand drawn, animated molecules, DNA and waveforms instead of stock images.',
      },
      {
        title: 'Privacy friendly visitor stats',
        description: 'Analytics that respect Do Not Track and collect no personal data.',
      },
      {
        title: 'Light and dark modes',
        description: "Follows the visitor's system setting, with no flash when the page loads.",
      },
      {
        title: 'A contact route on every path',
        description: 'Each page ends with a ready to send consultation request.',
      },
    ],
    architecture: [
      {
        area: 'Rendering & routing',
        detail: 'React 19 SPA on Vite 8 with React Router 7; routes lazy loaded and split into vendor-react and vendor-motion chunks.',
      },
      {
        area: 'Theming',
        detail: 'Tailwind CSS 4 with one CSS token set; ThemeContext persists to localStorage, an inline script sets data-theme before paint.',
      },
      {
        area: 'SEO & structured data',
        detail: 'useSEO hook upserts title, canonical, OG, Twitter and JSON-LD per route; Organization and WebSite schemas, sitemap, robots.',
      },
      {
        area: 'Analytics',
        detail: 'Umami, feature flagged until VITE_UMAMI_WEBSITE_ID is set; respects Do Not Track; data-umami-event across flows.',
      },
      {
        area: 'Deployment',
        detail: 'GitHub Actions gates on lint, typecheck and build; GitHub Pages deep links survive via 404.html capture and index.html restore.',
      },
    ],
    highlights: [
      'Generative SVG art: molecular graph bonds atoms within 220px, sinusoidal DNA helix, all memoized and reduced-motion aware',
      'Accessibility wired in: focus-visible outlines, reduced-motion query, mobile menu focus trapping, 44px touch targets',
      'Honesty as a constraint: representative examples kept separate from real outcomes; mailto drafts instead of fake lead capture',
      'Strict hygiene: TypeScript 6 strict with noUnusedLocals/Parameters, Husky, lint-staged, Prettier, CI fails on any error',
      'Framer Motion 12 contact UX: floating labels, valid and invalid indicators, idle, loading and success states',
    ],
  },
  'rag-regulation': {
    role: 'Design, development and evaluation',
    metrics: [
      { value: '98.3%', label: 'Right article in the top 5', basis: '60 answerable test questions' },
      { value: '0.996', label: 'Faithfulness to sources', basis: 'scored by a separate model' },
      { value: '8 of 8', label: 'Out of scope questions declined' },
    ],
    keyFeatures: [
      {
        title: 'Answers you can check',
        description: 'Every statement links to the act, article and paragraph it relies on, with the source passage one click away.',
      },
      {
        title: 'Says when it does not know',
        description: 'If the retrieved texts do not cover the question, the answer says so instead of guessing.',
      },
      {
        title: 'English and German',
        description: 'Ask in either language and get sources in the same language, or pick the language of the sources yourself.',
      },
      {
        title: 'Two ways to search, then a second look',
        description: 'Meaning based search and exact word search run together, and a reranking model puts the best passages first.',
      },
      {
        title: 'Measured, not assumed',
        description: 'A test set of 68 questions compares three retrieval modes on hit rate, ranking, faithfulness and declines.',
      },
      {
        title: 'Runs on one machine',
        description: 'Docker Compose starts the database and the app. Embeddings and reranking use local open models.',
      },
    ],
    architecture: [
      {
        area: 'Corpus',
        detail: 'Five acts from EUR-Lex in English and German, parsed into 4,771 article and paragraph passages with their citations.',
      },
      {
        area: 'Retrieval',
        detail: 'PostgreSQL 17 with pgvector (HNSW) for vectors and BM25 over the full text index, fused by reciprocal rank, then a multilingual cross encoder reranker.',
      },
      {
        area: 'Embeddings',
        detail: 'multilingual-e5-small through Spring AI ONNX transformers, in the JVM, so no text leaves the machine for embedding.',
      },
      {
        area: 'Generation',
        detail: 'Claude through the Anthropic Java SDK with a structured reply: an answerable flag and the answer with a source marker after each statement.',
      },
      {
        area: 'Front end and delivery',
        detail: 'React and Vite with clickable citations, served by Spring Boot; Docker Compose for the app and database.',
      },
    ],
    highlights: [
      'Hybrid plus rerank lifted the right article in the top 5 from 95.0% (vector only) to 98.3%, and MRR from 0.866 to 0.947',
      'A first keyword ranking made hybrid search worse than vector only, so it was replaced with BM25 and the README says so',
      'Every number on this page comes from the evaluation results committed in the repository',
    ],
  },
  voxflow: {
    role: 'Design, development and release',
    metrics: [
      { value: '10 min', label: 'Daily routine' },
      { value: '6', label: 'Practice phases' },
      { value: '3', label: 'Ways to compare recordings' },
    ],
    keyFeatures: [
      {
        title: 'A guided 10 minute routine',
        description: 'Six phases tell you what to do, when to breathe and which note to aim for. Pause, skip or restart any time.',
      },
      {
        title: 'Hear your progress',
        description: 'Play an early recording against a recent one, one after the other or interleaved.',
      },
      {
        title: 'Live feedback while recording',
        description: 'The app tells you if you are too quiet or too loud. Recordings never leave the phone.',
      },
      {
        title: 'No account, no internet',
        description: 'Everything is stored on the device and nothing is sent anywhere.',
      },
      {
        title: 'A short learning library',
        description: 'Ten articles with simple diagrams unlock as you progress.',
      },
      {
        title: 'Progress without pressure',
        description: 'A calendar and a weekly goal, with no points or leaderboards.',
      },
    ],
    architecture: [
      {
        area: 'Routine engine',
        detail: 'Pure time-indexed timeline (six phases summing to 600s) derives phase, instruction, breath cue and pitch from one clock.',
      },
      {
        area: 'App shell',
        detail: 'React Native 0.81, Expo SDK 54 and Expo Router, React 19, TypeScript; expo-haptics and expo-keep-awake for sessions.',
      },
      {
        area: 'Local data layer',
        detail: 'Versioned, namespaced AsyncStorage with schema validation on read; context persists every mutation.',
      },
      {
        area: 'Audio capture & playback',
        detail: 'expo-audio HIGH_QUALITY recording with live metering; waveforms derived from file bytes; run-token A/B playback.',
      },
      {
        area: 'Offline content & export',
        detail: 'Bundled articles with react-native-svg diagrams, 35 passages in EN, AR (RTL), FR, IT; JSON export via expo-file-system.',
      },
    ],
    highlights: [
      'Three A/B compare modes with run-token playback cancellation',
      'Zero runtime network calls: every byte stays on the device',
      'Waveforms rendered deterministically from the actual audio file bytes',
      'Ten milestone-gated articles with seven hand-drawn anatomy diagrams',
    ],
  },
  basemile: {
    role: 'Design, development and open source release',
    metrics: [
      { value: '3', label: 'Run types' },
      { value: '4', label: 'Trends tracked over time' },
      { value: '0', label: 'Accounts, servers or sync' },
    ],
    keyFeatures: [
      {
        title: 'Three run types',
        description: 'Long runs in Zone 2 under a MAF ceiling, Medium runs at 75 to 85% of max, and Brief runs as 30/60 repeats or a 4x4.',
      },
      {
        title: 'Live heart rate from a chest strap',
        description: 'Pairs with any standard Bluetooth heart rate strap. The Garmin HRM-Dual is the tested one.',
      },
      {
        title: 'Spoken cues that work offline',
        description: "Cues use the phone's own voice, so the coach keeps talking with no signal and, on Android, with the screen off.",
      },
      {
        title: 'Voice Mode',
        description: 'A hands free screen that holds a strict heart rate band and tells you when you drift out of it.',
      },
      {
        title: 'Trends, routes and tests',
        description: 'MAF pace, decoupling, training load and weekly Zone 2 minutes, a heat map of your routes, and tests such as resting and max heart rate.',
      },
      {
        title: 'Your runs stay on the phone',
        description: 'No account, server or sync. The only network use is weather, elevation and map tiles, and weather and elevation can be switched off.',
      },
    ],
    architecture: [
      {
        area: 'App shell',
        detail: 'Expo SDK 55 and React Native 0.83 with Expo Router and TypeScript. Android is the main tested platform; the iPhone build is on the App Store.',
      },
      {
        area: 'Heart rate over BLE',
        detail: 'react-native-ble-plx scans for the 0x180D service and parses 0x2A37 frames (uint8 or uint16 heart rate, energy expended, RR intervals), throttled into a Zustand store at most once a second.',
      },
      {
        area: 'Screen off on Android',
        detail: 'A small local Expo module runs a foreground service and keeps a headless JS task pending until the run ends, so cues keep coming with the screen off.',
      },
      {
        area: 'Voice',
        detail: "expo-speech with the phone's own text to speech engine, so every cue works offline.",
      },
      {
        area: 'Maps',
        detail: 'MapLibre with an inline, trimmed OpenFreeMap vector style. The style ships in the app, so the run track still draws with no signal.',
      },
      {
        area: 'Data',
        detail: 'Runs and samples in SQLite on the device. Open-Meteo provides weather and terrain elevation, behind a switch in Settings.',
      },
    ],
    highlights: [
      'Fully local: no account, no server, no sync, no AI, and Android cloud backup turned off for the app',
      'The only network calls are Open-Meteo (weather and elevation, optional) and OpenFreeMap map tiles, with no key',
      'A mock heart rate source writes to the same store as the strap, so the run screen is testable without one',
      'More than 400 Vitest tests, from the 0x2A37 parser to the coach cues',
      'GPL-3.0-or-later, with SPDX licence headers on the source files',
    ],
  },
  plateclimb: {
    role: 'Design, development and open source release',
    metrics: [
      { value: '12', label: 'Weeks in the program' },
      { value: '2', label: 'Swaps for each exercise' },
      { value: '0', label: 'Accounts, servers or sync' },
    ],
    keyFeatures: [
      {
        title: 'One 12 week program',
        description: 'Block 1 is heavier, Block 2 uses higher reps, and week 12 is off.',
      },
      {
        title: 'A clear weekly rhythm',
        description: 'Three lifting days, three cardio days, and a rest and mobility day.',
      },
      {
        title: 'Every lift prescribed',
        description: 'Sets, rep range, RPE target, rest and a starting weight for each exercise.',
      },
      {
        title: 'Fast set logging',
        description: 'Your last weights are filled in, with a rest timer between sets. You decide when to add weight.',
      },
      {
        title: 'Swaps and form help',
        description: 'Two swaps per exercise when a machine is taken, plus exercise photos and links to free form videos.',
      },
      {
        title: 'Your workouts stay on the phone',
        description: 'No account, server or sync. The only network use is loading exercise photos.',
      },
    ],
    architecture: [
      {
        area: 'App shell',
        detail: 'Expo SDK 54 and React Native with Expo Router and TypeScript. Android is the main tested platform; the iPhone build is on the App Store.',
      },
      {
        area: 'Program as data',
        detail: 'The 12 week Foundational Fitness program ships inside the app as local data: blocks, weeks, days, exercises, prescriptions and two substitutions per lift.',
      },
      {
        area: 'Workout log',
        detail: 'Sets, weights and reps are stored in SQLite on the device. The next session pre-fills from the last one, and no weight goes up on its own.',
      },
      {
        area: 'Exercise photos',
        detail: 'Loaded from the public free-exercise-db on GitHub, with a bundled placeholder when the phone is offline.',
      },
    ],
    highlights: [
      'Fully local: no account, no server, no sync and no AI',
      'Weights pre-filled from the program the first time, then from the last session',
      'A rest timer between sets, warm-up ramps, and kg or lb with plate sized steps',
      'GPL-3.0-or-later, with SPDX licence headers on the source files',
    ],
  },
  woop: {
    role: 'Design, development and open source release',
    metrics: [
      { value: '4', label: 'Steps, one question per screen' },
      { value: '13', label: 'Findings in the Science tab' },
      { value: '0', label: 'Internet permissions, accounts or streaks' },
    ],
    keyFeatures: [
      {
        title: 'One question per screen',
        description: 'Wish, Outcome, Obstacle and Plan each get a screen, with autosave, voice input and examples one tap away.',
      },
      {
        title: 'An if-then plan for each obstacle',
        description: 'Up to three obstacles, each with its own "If…, then I will…" plan, the "if" filled in from the obstacle.',
      },
      {
        title: 'One minute check-ins',
        description: 'Re-read the WOOP, say whether the obstacle showed up, then tune the plan, keep going or let the wish go.',
      },
      {
        title: 'Reminders that bring you back',
        description: 'Prompts to write a new WOOP on the days you choose, and a check-in schedule for each WOOP.',
      },
      {
        title: 'A home screen widget',
        description: 'The if-then plan you focus on, one glance away, with a check-in button when one is due.',
      },
      {
        title: 'The science, rated',
        description: 'Each finding the app relies on, labelled Strong, Good, Early, Hypothesis or Practitioner.',
      },
    ],
    architecture: [
      {
        area: 'App shell',
        detail: 'Kotlin and Jetpack Compose (Material 3) in a single activity with Navigation Compose. Android 8 and up, target SDK 36.',
      },
      {
        area: 'Data',
        detail: 'Room (SQLite) on the device for WOOPs, obstacles, check-ins and reminders. No internet permission, no account, and Android backup turned off.',
      },
      {
        area: 'Reminders',
        detail: 'AlarmManager with exact alarms, rescheduled after a reboot, a time change or an app update. Notifications open straight into the new WOOP or the right check-in.',
      },
      {
        area: 'Widget',
        detail: 'Jetpack Glance draws the focus plan as one sentence and sizes the text so the "then" part is never cut off. It redraws when a WOOP changes or a check-in falls due.',
      },
    ],
    highlights: [
      'No internet permission: the app cannot send anything anywhere',
      'Atkinson Hyperlegible typeface, large touch targets, dark mode, tested at 200% font size',
      'No streaks or scores: "Let it go" counts as an outcome, next to "Achieved"',
      '15 unit tests for reminder timing and 11 database tests on the emulator',
      'GPL-3.0-or-later, with SPDX licence headers on the source files',
    ],
  },
  breathebreak: {
    role: 'Design, development and release',
    metrics: [
      { value: '4', label: 'Breathing exercises' },
      { value: '3', label: 'Reminder levels' },
    ],
    keyFeatures: [
      {
        title: 'Knows when to stay quiet',
        description: 'Skips reminders outside work hours, during calls and in Focus mode.',
      },
      {
        title: 'Adapts to your habits',
        description: 'Suggests more or fewer reminders based on how many sessions you complete each week.',
      },
      {
        title: 'Gentle by default',
        description: 'Most reminders are a small icon pulse or a corner note. Only some open a full exercise.',
      },
      {
        title: 'Breath hold tracking',
        description: 'A daily breath hold check with streaks, averages and a 7 day chart.',
      },
      {
        title: 'Your data stays on your Mac',
        description: 'Every session is stored locally, with one click export to a spreadsheet.',
      },
      {
        title: 'Runs in the background',
        description: 'No Dock icon, and it can start automatically when you log in.',
      },
    ],
    architecture: [
      {
        area: 'App shell',
        detail: 'SwiftUI MenuBarExtra window scene as an LSUIElement agent on macOS 14+; @MainActor AppState as source of truth, OverlayCoordinator bridges Combine to AppKit.',
      },
      {
        area: 'Scheduling',
        detail: 'DispatchSourceTimer with persisted next-fire date and one-shot-then-repeat for snooze; Control Pause uses UNCalendarNotificationTrigger.',
      },
      {
        area: 'OS integration',
        detail: 'Focus inferred from DoNotDisturb Assertions.json plus controlcenter/ncprefs; meetings via NSWorkspace bundle-ID polling; launch at login via SMAppService.',
      },
      {
        area: 'Data layer',
        detail: 'SwiftData @Model BreathSession with #Predicate fetches for streaks, Control Pause averages and weekly rate; Swift Charts trend; CSV export.',
      },
    ],
    highlights: [
      'Solved the App Sandbox Focus-mode gap (no public API) by parsing DoNotDisturb Assertions.json with fallbacks, throttled and cached',
      'Three-tier interruption design (icon pulse, edge toast, NSPanel overlay) keyed to cycle count and Buteyko-inspired training phase',
      'TrainingPhase state machine offers to level up at 80%+ weekly completion or ease off below 50%',
      'Declarative breathing engine: each exercise is an array of BreathPhase values the overlay and toast animate identically',
      'Defensive audio with a three-approach fallback (NSSound named, NSSound from file, AudioServices)',
    ],
  },
  'sems-energy-management': {
    role: 'Hardware, architecture, design and development',
    metrics: [
      { value: '7', label: 'Metered circuits', basis: 'watts, volts, amps and kWh each' },
      { value: '3', label: 'Ways to control it', basis: 'phone app, wall screen and voice' },
      { value: '0', label: 'Cloud services for voice', basis: 'speech and replies run on the hub' },
    ],
    keyFeatures: [
      {
        title: 'Power per circuit',
        description: 'Watts, volts, amps and kWh for each metered circuit, a house total, and 24 hour and 7 day graphs with kWh per day.',
      },
      {
        title: 'Safe switching',
        description: 'Each circuit can be turned on or off from the app or the wall, always with a confirm step first.',
      },
      {
        title: 'Home control',
        description: 'Motorized curtains over 433 MHz, the air conditioner over the local network, and TV boxes with remote keys and volume.',
      },
      {
        title: 'Local voice',
        description: 'Hold to talk in the phone app. Speech to text, the intent and the spoken reply all run on the hub, with no cloud.',
      },
      {
        title: 'Room sensors',
        description: 'Temperature, humidity, pressure, light, gas and water leak readings, with push alerts when something is wrong.',
      },
      {
        title: 'Looks after itself',
        description: 'The hub watches its own temperature and network, recovers on its own after an outage and sends an alert when it does.',
      },
    ],
    architecture: [
      {
        area: 'Hub',
        detail: 'Raspberry Pi 4 running Home Assistant in Docker, with our own TypeScript server (Fastify and SQLite) on top that the app and screen talk to.',
      },
      {
        area: 'Devices',
        detail: 'ESP32 boards on ESPHome drive the curtains over 433 MHz and read the room sensors. Metered Wi-Fi breakers, the air conditioner and the TV boxes join through Home Assistant.',
      },
      {
        area: 'Apps',
        detail: 'An Android app in React Native and Expo with 5 tabs, paired by QR code or a typed code, and a touch wall screen served by the hub. Away from home the app connects through a relay.',
      },
      {
        area: 'Voice',
        detail: 'Speech to Phrase for speech to text, Home Assistant intents and Piper for spoken replies, all on the Pi.',
      },
    ],
    highlights: [
      'The phone app and the wall screen compute power history with the same rules, held together by a shared test, so both show the same numbers',
      'Readings are honest about their limits: the breakers report through their vendor only a few times a day, and the screens say so instead of faking live data',
      'Every action that cuts power or restarts something needs a second tap, and the server only accepts commands from a fixed allowlist',
      'Planned: one second whole house metering with a PZEM-004T on an ESP32, and detecting grid, generator or cut so the water heater runs only on grid power',
      'Planned: generator and roof boards, water and fuel tank levels, solar water heater probes and voice points in each room',
    ],
  },
}
