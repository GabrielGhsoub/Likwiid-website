import type { Project } from '../types'

// Case-study detail, keyed by project slug and merged onto the base records in projects.ts.
// keyFeatures and metrics are visible on the page, so they stay plain English. architecture
// and highlights only render inside the collapsed "Technical details" section, which is
// where framework names, versions and engineering notes belong.

type ProjectEnrichment = Partial<Pick<Project, 'role' | 'metrics' | 'keyFeatures' | 'architecture' | 'highlights'>>

export const projectEnrichment: Record<string, ProjectEnrichment> = {
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
      'Zero runtime network calls, every byte stays device-local',
      'Waveforms rendered deterministically from the actual audio file bytes',
      'Ten milestone-gated articles with seven hand-drawn anatomy diagrams',
    ],
  },
  'personal-fitness-tracker': {
    role: 'Design, development and testing',
    metrics: [
      { value: '12 wk', label: 'Training plan' },
      { value: '1 s', label: 'Heart rate updates' },
      { value: '8', label: 'Screens' },
    ],
    keyFeatures: [
      {
        title: 'Live coaching from a heart rate strap',
        description: 'Connects over Bluetooth and speaks up when you drift out of your target zone.',
      },
      {
        title: 'Optional voice assistant',
        description: 'Ask a question mid run and get a short spoken answer.',
      },
      {
        title: 'A structured 12 week plan',
        description: 'Easy runs, intervals, recovery weeks and a final 5K time trial.',
      },
      {
        title: 'Fair pace on hills',
        description: 'Corrects phone GPS height data so effort on climbs is measured fairly.',
      },
      {
        title: 'A clear review after every run',
        description: 'Effort, pace, training load and early warnings about overtraining.',
      },
      {
        title: 'Works offline',
        description: 'Everything is stored on the phone, with optional sync and export to other running apps.',
      },
    ],
    architecture: [
      {
        area: 'Real-time HR pipeline',
        detail: 'Garmin HRM-Dual GATT 0x180D frames parsed by a singleton react-native-ble-plx manager, throttled to 1Hz, fanned out via Zustand to UI, run reducer and coach engine.',
      },
      {
        area: 'Pure coach engine',
        detail: 'Side-effect-free tick(sample, elapsedMs, cadence) returning cues on monotonic run time: Z2 ceilings, intervals, cadence and fueling with per-cue cooldowns.',
      },
      {
        area: 'Local-first data layer',
        detail: 'React Native 0.83 on Expo SDK 55; expo-sqlite (WAL, 12 tables) stores raw samples, metrics computed at query time.',
      },
      {
        area: 'Bounded AI layer',
        detail: 'Self-hosted proxy with SSE streaming; a strict validator permits only bounded, non-destructive actions, with an offline fallback.',
      },
      {
        area: 'Elevation and mapping',
        detail: 'GPS altitude corrected against the Open-Meteo DEM, rendered on MapLibre + CARTO with grade-adjusted pace (GAP) and terrain segments.',
      },
    ],
    highlights: [
      'Coach engine is a pure state machine: deterministic, decoupled from BLE, audio and React, densely unit tested (93 Vitest tests)',
      'Audio cues never block the HR pipeline; an async dispatcher keeps speech latency off the hot path',
      'Post-run analytics: MAF pace, decoupling, VDOT and CTL/ATL/TSB training load across 16 modules',
      'A validator bounds every AI action (for example MAF clamped to +/-10 bpm) so a bad response cannot do harm',
      'TypeScript strict, no `any`; Zod only at real boundaries (BLE bytes, SQLite rows, GPS)',
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
    role: 'Architecture, design and development',
    metrics: [
      { value: '4', label: 'Power sources in one view' },
      { value: '14', label: 'Device types' },
      { value: '4', label: 'Demo scenarios' },
    ],
    keyFeatures: [
      {
        title: 'One live dashboard',
        description: "Shows the active power source, current usage, today's cost and the biggest consumers.",
      },
      {
        title: 'Cost by power source',
        description: 'Prices every unit on real grid tariffs, generator fees, solar and battery.',
      },
      {
        title: 'A realistic home simulator',
        description: 'Models power cuts, generator start up, solar output and air conditioning use.',
      },
      {
        title: 'Ready made demos',
        description: 'Four scenarios show outages and source changes without any hardware.',
      },
      {
        title: 'Devices by room',
        description: 'Add devices to rooms and see what each one costs to run.',
      },
      {
        title: 'History and trends',
        description: 'Hourly and daily breakdowns of cost and power source.',
      },
    ],
    architecture: [
      {
        area: 'Monorepo',
        detail: 'Turborepo + pnpm: NestJS 10 API and Expo SDK 54 app, a shared Zod and cost package as single source of truth, and a data generator package.',
      },
      {
        area: 'Data layer',
        detail: 'PostgreSQL 16 + TimescaleDB via Prisma 6; energy_readings hypertable with hourly and daily continuous aggregates, compression and retention.',
      },
      {
        area: 'Real-time',
        detail: 'JWT-authed Socket.io gateway with per-home rooms and a Redis 7 adapter; auto-reconnect with an offline banner.',
      },
      {
        area: 'Auth',
        detail: 'Passport JWT with bcrypt: 15 minute access tokens, rotating hashed refresh tokens with family theft detection.',
      },
    ],
    highlights: [
      'Deterministic seedable simulation (HVAC, solar, battery state of charge) seeds 7,205 readings per day in under 0.1s',
      'Lebanese domain constants encode grid tiers, generator fees, voltage thresholds and seasonal sun hours',
      'Zod schemas shared by backend and mobile, eliminating client and server drift',
      'Verified end to end against live TimescaleDB and Redis containers across about 38 endpoints',
    ],
  },
}
