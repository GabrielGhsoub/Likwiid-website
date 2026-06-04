import type { Project } from '../types'

// AUTO-GENERATED case-study enrichment, keyed by project slug.
// Sourced from deep research of each project's source repository, then condensed for concision.
// Merged onto the base project records in projects.ts (enrichment overrides base).

type ProjectEnrichment = Partial<
  Pick<
    Project,
    | 'oneLiner'
    | 'description'
    | 'challenge'
    | 'approach'
    | 'results'
    | 'businessResult'
    | 'role'
    | 'timeline'
    | 'techStack'
    | 'metrics'
    | 'keyFeatures'
    | 'architecture'
    | 'highlights'
  >
>

export const projectEnrichment: Record<string, ProjectEnrichment> = {
  "padel-booking": {
    "oneLiner": "Production padel app for Lebanon: league engine, skill-based matchmaking, and court booking",
    "description": "Production React Native (Expo) app for Lebanon's padel community. Court booking, skill-based matchmaking, and full competitive leagues, live on the App Store and Google Play.",
    "challenge": "Lebanon's padel scene ran on WhatsApp and spreadsheets, with no real court availability, no level-based matchmaking, and no structured leagues, all on unreliable internet.",
    "approach": "Expo SDK 54 / RN 0.81 New Architecture app: Expo Router (42 screens), Zustand plus TanStack Query with a 24h offline cache, and a custom NestJS REST API (70+ endpoints) behind a hardened Axios client.",
    "results": "Shipped to both stores: court booking, 12-tier skill ratings, matchmaking, peer ratings, and a full league lifecycle through playoffs. Offline-first, trilingual (EN/AR/FR with RTL), with universal deep links, Playwright E2E, and Sentry monitoring.",
    "businessResult": "Replaced WhatsApp and spreadsheet coordination with a store-published platform owning booking, matchmaking, and league play.",
    "role": "Solo product design, mobile + backend integration, build & store release",
    "timeline": "2025 build; shipped to App Store and Google Play (v1.1.1)",
    "techStack": [
      "React Native",
      "Expo SDK 54",
      "Expo Router",
      "TypeScript",
      "NestJS REST API",
      "JWT Auth",
      "Zustand",
      "TanStack Query",
      "NativeWind",
      "Reanimated",
      "i18next",
      "Axios",
      "Sentry",
      "EAS Build & Updates",
      "Playwright"
    ],
    "metrics": [
      {
        "value": "12-tier",
        "label": "Skill rating scale (D- to A+)",
        "basis": "data/constants/skill-levels.ts SKILL_LEVEL_LABELS plus 1-12 numeric mapping; ratings.api.ts RATING_SCALE"
      },
      {
        "value": "70+",
        "label": "REST API endpoints integrated",
        "basis": "17 *.api.ts modules in services/api/ and 90+ endpoint workarounds documented in CLAUDE.md"
      },
      {
        "value": "3 languages / ~1,494 keys each",
        "label": "Trilingual EN/AR/FR with RTL",
        "basis": "i18n/en.json, ar.json, fr.json; en.json has 1,494 colon-delimited keys; i18n/config.ts forces RTL for Arabic"
      },
      {
        "value": "4",
        "label": "League pairing algorithms",
        "basis": "PairingMethod enum in shared/types/league.types.ts: random, skill_based, swiss, round_robin"
      },
      {
        "value": "24h",
        "label": "Offline cache window",
        "basis": "shared/lib/queryClient.ts gcTime 1000*60*60*24 with expo-network onlineManager listener"
      }
    ],
    "keyFeatures": [
      {
        "title": "Full competitive league engine",
        "description": "Check-in, four pairing algorithms, 2v2 scoring, standings, and playoff bracket."
      },
      {
        "title": "12-tier skill rating and matchmaking",
        "description": "D- to A+ ratings power discovery, skill-banded leagues, and peer ratings."
      },
      {
        "title": "Offline-first for unreliable networks",
        "description": "24h TanStack Query cache with connectivity-aware detection over AsyncStorage."
      },
      {
        "title": "Trilingual with full Arabic RTL",
        "description": "EN/AR/FR at ~1,494 keys each, runtime switching, full RTL for Arabic."
      },
      {
        "title": "Court discovery and booking",
        "description": "Filter courts, view pricing, book with promo codes and local payment options."
      },
      {
        "title": "Shareable invites via deep links",
        "description": "Universal links on padellb.club drive join codes, verification, and resets."
      }
    ],
    "architecture": [
      {
        "area": "Data & state",
        "detail": "Zustand (24 stores) for client state; TanStack Query for server state, 24h cache"
      },
      {
        "area": "Backend & auth",
        "detail": "NestJS REST API via 17 typed modules; Axios client with single-flight JWT refresh"
      },
      {
        "area": "League domain",
        "detail": "Typed DTOs for weeks, check-in, 2v2 matches, standings, stats, playoff bracket"
      },
      {
        "area": "Navigation & deep links",
        "detail": "Expo Router across 42 screens; padellb.club universal links for shares and auth"
      },
      {
        "area": "Reliability & delivery",
        "detail": "Sentry, error boundaries, Playwright E2E, EAS Build and OTA updates (v1.1.1)"
      }
    ],
    "highlights": [
      "Single-flight, proactive JWT refresh ~60s before expiry to prevent rotation races",
      "Complete tournament system: Swiss, round-robin, manual pairing, score confirmation, playoffs",
      "Worked around an OkHttp 4.12 + nginx bug via cache-busting params on 90+ endpoints",
      "Offline-first: 24h cache, expo-network online manager, synchronous in-memory hydration",
      "~1,494 i18n keys per language across EN/AR/FR with full Arabic RTL",
      "Feature-first scale: 16+ modules, 259 components, 24 stores, 17 typed API services"
    ]
  },
  "padel-admin-portal": {
    "oneLiner": "Admin console for running player-based padel leagues: pairings, scoring, standings and playoffs",
    "description": "A React admin console for running padel leagues from the browser instead of the database. Operators manage rosters, generate weekly 2v2 pairings, record scores, and run playoffs against the same NestJS API powering the player app.",
    "challenge": "Running a live padel season means weekly fair pairings, no-shows, set scores, and tie-broken standings. Spreadsheets do not scale, and editing the production database directly is risky.",
    "approach": "A React 19 + Vite SPA with TanStack Router (auth-guarded), TanStack Query, Zustand, and Radix UI on Tailwind v4. The pairing, scoring, standings, and playoff logic lives in a NestJS 11 + TypeORM + PostgreSQL backend.",
    "results": "A deployed portal driving the full league lifecycle without touching the database: one-click weekly pairings in five modes, auto-recomputed tie-broken standings, per-player stats, and a semi-final/final bracket. Jest covers the high-risk logic; CI/CD backs up the DB before every deploy.",
    "businessResult": "Turned league admin from spreadsheet guesswork into a few clicks a week, with fair pairings and standings automatic.",
    "role": "Solo design, build and ship (full-stack: React admin portal + NestJS backend)",
    "timeline": "~Jan–Mar 2025 (backend scaffolded late Jan, admin portal iterated through mid-Mar per git/file dates)",
    "techStack": [
      "React 19",
      "TypeScript",
      "Vite 7",
      "TanStack Router",
      "TanStack Query",
      "Zustand",
      "Radix UI",
      "Tailwind CSS v4",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Framer Motion",
      "axios",
      "NestJS 11",
      "TypeORM",
      "PostgreSQL",
      "Redis",
      "Passport JWT",
      "Docker"
    ],
    "metrics": [
      {
        "value": "5 pairing methods",
        "label": "Pairing algorithms",
        "basis": "PairingMethod enum (random, skill_based, swiss, manual, round_robin) in src/modules/leagues/enums/pairing-method.enum.ts; logic in league-pairing.service.ts"
      },
      {
        "value": "7 league tabs",
        "label": "League workspace views",
        "basis": "TabsTrigger values (overview, players, weeks, matches, standings, statistics, playoff) in Padel-Admin/src/pages/league-details.tsx"
      },
      {
        "value": "38 league endpoints",
        "label": "Backend league API surface",
        "basis": "Count of @Get/@Post/@Put/@Delete decorators across src/modules/leagues/controllers/ (5 controllers)"
      },
      {
        "value": "JWT + rotating refresh",
        "label": "Auth model",
        "basis": "auth.service.ts: signAsync access (1h) + refresh (30d), storeRefreshToken hashed in Redis, REFRESH_LOCK_PREFIX guards concurrent refresh"
      }
    ],
    "keyFeatures": [
      {
        "title": "Weekly pairings, five ways",
        "description": "Random, skill-based, Swiss, fairness round-robin, or manual, with auto bye handling."
      },
      {
        "title": "Fairness-optimizing round-robin",
        "description": "Builds teammate/opponent matrices from match history to maximize fresh matchups."
      },
      {
        "title": "Scoring with live standings",
        "description": "Set-by-set scores recompute the leaderboard with set and game tie-breakers."
      },
      {
        "title": "Seven-tab league workspace",
        "description": "Overview, Players, Weeks, Matches, Standings, Statistics, and Playoff in one view."
      },
      {
        "title": "Role-gated auth with token rotation",
        "description": "Admin-only access; refresh tokens rotate on 401, Redis lock prevents races."
      }
    ],
    "architecture": [
      {
        "area": "Data layer",
        "detail": "TanStack Query with feature-scoped hooks; a normalization module maps raw JSON to strict types."
      },
      {
        "area": "Backend domain",
        "detail": "NestJS 11 + TypeORM + PostgreSQL; leagues split into pairing, scoring, standings, stats, playoff services."
      },
      {
        "area": "Auth",
        "detail": "Passport JWT; bcrypt-hashed refresh tokens in Redis, lock-protected rotation, server-side role checks."
      },
      {
        "area": "Delivery",
        "detail": "Dockerized nginx frontend; GitHub Actions to GHCR, Ansible deploys with pre-deploy Postgres backup."
      }
    ],
    "highlights": [
      "Round-robin uses a real combinatorial fairness heuristic, not just a shuffle.",
      "Refresh-token rotation hardened against concurrent-refresh races with a Redis lock.",
      "API layer tolerates paginated, flat, nested, and multi-spelling backend shapes.",
      "Auth store separates real 401/403 failures from transient network errors to keep sessions alive.",
      "Lazy routes retry chunk loads, then full-reload, killing stale-chunk white screens after deploys.",
      "Per-league points, player limits, skill bounds, and join codes are modeled, not hard-coded."
    ]
  },
  "gcg-website": {
    "oneLiner": "Science-driven consulting site with audience pathways, privacy-first analytics, and accessible theming",
    "description": "Production marketing site for Ghoussoub Consulting Group, a science-led firm spanning consulting, R&D, STEM tutoring, and investment diligence. A React 19 SPA that frames a broad offering as four audience entry points.",
    "challenge": "Make a wide, jargon-heavy portfolio read as credible to five very different audiences in one coherent site, while staying honest, fast, accessible, and deployable on free static hosting with clean URLs.",
    "approach": "Built a React 19 / TypeScript / Vite 8 SPA with React Router 7 and a Tailwind CSS 4 token system resolving light/dark/system themes from one source. A \"Choose Your Path\" section segments four audiences into tailored routes; hand-built SVG science visuals run on Framer Motion with reduced-motion support; privacy-first Umami analytics track intent.",
    "results": "Live 9-route platform with audience segmentation, methodology-driven R&D and tutoring pages, JSON-LD structured data, accessible navigation with focus trapping, and an animated validated contact flow. With no backend, lead capture uses honest pre-filled mailto drafts. Strict CI gates every deploy on lint, typecheck, and build.",
    "businessResult": "Turned a broad, five-audience science offering into one credible, conversion-ready site that stays honest as the firm grows.",
    "role": "Solo design, build, and ship",
    "timeline": "~April to May 2026 (31 commits, first commit 2026-04-07, latest 2026-05-15)",
    "techStack": [
      "React 19",
      "TypeScript 6 (strict)",
      "Vite 8",
      "Tailwind CSS 4",
      "React Router 7",
      "Framer Motion 12",
      "React Icons",
      "Umami Analytics",
      "GitHub Actions",
      "GitHub Pages"
    ],
    "metrics": [
      {
        "value": "9",
        "label": "Routes",
        "basis": "src/config/routes.tsx + src/shared/constants/routes.ts: Home, Invest, Careers, Tutoring, Research, Privacy, Terms, Accessibility, NotFound"
      },
      {
        "value": "4",
        "label": "Audience pathways",
        "basis": "PATHWAYS array in src/components/Pathways.tsx (Organizations, Research Teams, Students & Families, Partners & Investors)"
      },
      {
        "value": "3 themes",
        "label": "Light / dark / system",
        "basis": "src/contexts/ThemeContext.tsx theme modes; CSS variables in src/index.css :root and [data-theme='dark']; no-flash inline script in index.html"
      },
      {
        "value": "0",
        "label": "Backend / network calls for forms",
        "basis": "AGENTS.md 'no backend integration'; Contact.tsx and Footer.tsx use mailto: drafts only"
      }
    ],
    "keyFeatures": [
      {
        "title": "Audience pathway routing",
        "description": "A 'Choose Your Path' section routes four audiences into tailored service pages."
      },
      {
        "title": "Dedicated science service pages",
        "description": "R&D and tutoring pages with methodology pipelines, deliverables, and per-page SEO."
      },
      {
        "title": "Hand-built animated science visuals",
        "description": "Custom SVG molecular networks, DNA helix, and oscilloscope waveforms; no stock assets."
      },
      {
        "title": "Privacy-first analytics, honest lead capture",
        "description": "Umami respects Do-Not-Track; forms open mailto drafts, no fake server persistence."
      },
      {
        "title": "No-flash light/dark/system theming",
        "description": "One CSS-token set drives all themes via an inline pre-paint script."
      },
      {
        "title": "GitHub Pages SPA with clean deep links",
        "description": "Four-part redirect scheme keeps client-side routes working on static hosting."
      }
    ],
    "architecture": [
      {
        "area": "Rendering & routing",
        "detail": "React 19 SPA, React Router 7; routes lazy-loaded and split into vendor-react and vendor-motion chunks."
      },
      {
        "area": "Theming",
        "detail": "One CSS-token set in index.css; ThemeContext persists to localStorage, inline script sets data-theme pre-paint."
      },
      {
        "area": "SEO & structured data",
        "detail": "useSEO hook upserts title, canonical, OG, Twitter, JSON-LD per route; Organization + WebSite schemas, sitemap, robots."
      },
      {
        "area": "Analytics",
        "detail": "Umami feature-flagged off until VITE_UMAMI_WEBSITE_ID set; respects Do-Not-Track; data-umami-event across flows."
      },
      {
        "area": "Deployment",
        "detail": "GitHub Actions gates on lint, typecheck, build; deep links survive via 404.html capture and index.html restore."
      }
    ],
    "highlights": [
      "Generative SVG art: molecular graph bonds atoms within 220px; sinusoidal DNA helix, all memoized and reduced-motion aware",
      "Accessibility wired in: focus-visible outlines, reduced-motion media query, mobile-menu focus trapping, 44px touch targets",
      "Honesty as a constraint: ExpertiseStandards separates representative examples from real outcomes; mailto over fake lead capture",
      "Strict hygiene: TypeScript noUnusedLocals/Parameters, Husky, lint-staged, Prettier, CI fails on any lint/type/build error",
      "Animated validated contact UX: floating labels, spring valid/invalid indicators, shake-on-error, idle/loading/success states",
      "Polished 404 ('Drifted Out Of Orbit') with three recovery paths, noindex, inside the same SPA redirect system"
    ]
  },
  "sems-energy-management": {
    "oneLiner": "One dashboard for homes juggling EDL grid, generators, solar and batteries in Lebanon",
    "description": "A software-first energy platform for Lebanese homes running EDL grid, diesel generators, solar and batteries at once. One live dashboard shows what's powering the home, what it costs, and how source switches hit the bill.",
    "challenge": "Consumer energy products assume a stable single-source grid; none handle a Lebanese home drawing from grid, generator, solar and battery the same day — and it had to be proven with no meter hardware yet.",
    "approach": "A TypeScript Turborepo (pnpm) built end to end: NestJS 10 + Prisma over PostgreSQL 16/TimescaleDB and Redis, an Expo SDK 54 app, and a deterministic simulator modeling real Lebanese energy cycles to validate everything before hardware.",
    "results": "Phase 1 POC verified end to end against live TimescaleDB and Redis: ~38 endpoints returned expected status, both continuous aggregates materialized, and the simulator seeded 7,205 readings/day in under 0.1s. The app ships auth, live dashboard, device management, analytics and four demo scenarios.",
    "businessResult": "Unifies grid, generator, solar and battery into one source-aware cost dashboard, validated end to end before any hardware spend.",
    "role": "Solo architecture, design, build and verification (full-stack)",
    "timeline": "Phase 1 POC built Feb 2026 (architecture frozen, monorepo scaffolded, backend + mobile + simulation engine, end-to-end verified against live containers on 2026-02-24)",
    "techStack": [
      "React Native",
      "Expo SDK 54",
      "Expo Router",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "NestJS 10",
      "Prisma 6",
      "PostgreSQL 16",
      "TimescaleDB",
      "Redis 7",
      "Socket.io",
      "Zod",
      "Turborepo",
      "pnpm",
      "Docker"
    ],
    "metrics": [
      {
        "value": "4",
        "label": "power sources unified",
        "basis": "SourceType enum (EDL, GENERATOR, SOLAR, BATTERY) in apps/backend/prisma/schema.prisma and packages/shared/src/constants/source-types.ts"
      },
      {
        "value": "14",
        "label": "device types modeled",
        "basis": "DeviceType enum in apps/backend/prisma/schema.prisma (REFRIGERATOR, HVAC, WATER_HEATER, ... EV_CHARGER, OTHER)"
      },
      {
        "value": "7,205 readings/day in <0.1s",
        "label": "simulator throughput",
        "basis": "docs/e2e-test-report.md Data Generator CLI: seed generated 7,205 readings for a 1-day range in <0.1s"
      },
      {
        "value": "~38 REST endpoints, all verified",
        "label": "backend API surface",
        "basis": "docs/ARCHITECTURE.md endpoint table and docs/e2e-test-report.md showing each auth/devices/sources/telemetry/energy/tariff/health endpoint returning expected status against live TimescaleDB + Redis"
      }
    ],
    "keyFeatures": [
      {
        "title": "Multi-source live dashboard",
        "description": "Active source, real-time watts, today's cost and top consumers over WebSocket."
      },
      {
        "title": "Source-aware cost engine",
        "description": "Prices each kWh on Lebanon's real EDL tiers, generator amperage fees, solar and battery."
      },
      {
        "title": "Lebanese energy simulator",
        "description": "Seedable model of EDL schedules, generator auto-start, solar, battery and HVAC with sensor noise."
      },
      {
        "title": "Scenario-driven demos",
        "description": "Four built-in scenarios show outages and source transitions without meter hardware."
      },
      {
        "title": "Room-grouped device management",
        "description": "CRUD across 14 device types with wattage, flags and per-device cost drill-down."
      },
      {
        "title": "TimescaleDB time-series analytics",
        "description": "Hypertable with hourly and daily continuous aggregates power fast cost and source breakdowns."
      }
    ],
    "architecture": [
      {
        "area": "Monorepo",
        "detail": "Turborepo + pnpm: NestJS and Expo apps, shared Zod/cost package as single source of truth, data-generator package."
      },
      {
        "area": "Data layer",
        "detail": "PostgreSQL 16 + TimescaleDB; energy_readings hypertable, hourly/daily aggregates, compression, retention; 11 Prisma models."
      },
      {
        "area": "Real-time",
        "detail": "JWT-authed Socket.io /energy gateway, per-home rooms, Redis adapter for scaling, auto-reconnect with OfflineBanner."
      },
      {
        "area": "Auth",
        "detail": "Custom JWT (Passport, bcrypt): 15-min access tokens, rotating hashed refresh tokens with family theft detection, route guards."
      }
    ],
    "highlights": [
      "Deterministic seedable simulation with modeled physics (HVAC, solar, battery SoC) makes demo data reproducible without meters",
      "Lebanese domain constants encode EDL tiers, generator fees, voltage thresholds and seasonal sun hours",
      "Zod schemas as one source of truth shared by backend and mobile, eliminating client/server drift",
      "Real end-to-end verification: e2e report documents bugs found and fixed against live containers",
      "Production DevOps: multi-stage non-root Dockerfile, GitHub Actions CI with caching, Husky + lint-staged"
    ]
  },
  "voxflow": {
    "oneLiner": "Offline-first vocal re-education: a guided 10-minute routine with private recordings and A/B compare",
    "description": "VoxFlow is an Android-first, fully offline app that folds voice-practice timer, instructions, recorder, and reference reading into one calm, clinically-sequenced 10-minute routine. No account, no server, no telemetry.",
    "challenge": "Voice-recovery practice fails because a session means juggling a timer, notes, recorder, and articles — while most apps add streak guilt and cloud accounts. VoxFlow had to unify all of it offline, account-free, in a non-judgmental clinical tone.",
    "approach": "Built with Expo and React Native around a deterministic routine engine: one phase timeline (six phases, 600s) derives phase, exercise, breath cue, and pitch from a single clock. expo-audio handles capture with live metering; a run-token A/B player cancels cleanly across modes.",
    "results": "A complete installable Android app (com.likwiid.voxflow): onboarding with a permanent Day-Zero baseline, guided six-phase session, recordings library, three-mode A/B compare, progress calendar with milestone timeline, gated learn library, and local JSON export. Zero runtime network calls — all data stays device-local.",
    "businessResult": "Packaged fragmented vocal practice into one private, offline 10-minute routine with built-in progress and comparison.",
    "role": "Solo design, build and ship (Likwiid)",
    "timeline": "Core build concentrated over a focused sprint in May 2026 (16 commits, foundation through QA hardening)",
    "techStack": [
      "React Native 0.81",
      "Expo SDK 54",
      "TypeScript",
      "Expo Router",
      "expo-audio",
      "AsyncStorage",
      "expo-file-system",
      "react-native-svg",
      "expo-haptics",
      "expo-keep-awake",
      "React 19"
    ],
    "metrics": [
      {
        "value": "10-minute",
        "label": "guided routine",
        "basis": "src/routine/phases.ts — six phase durations sum to exactly 600 seconds (90+120+120+120+90+60)"
      },
      {
        "value": "6 phases / 13 steps",
        "label": "clinical sequence",
        "basis": "src/routine/phases.ts — routinePhases array with 13 RoutineStep entries and stepDetails map"
      },
      {
        "value": "3 A/B modes",
        "label": "baseline comparison",
        "basis": "src/recording/use-compare-playback.ts — playSlot (single), playSequential, playInterleaved with run-token cancellation"
      },
      {
        "value": "0 network calls",
        "label": "fully offline",
        "basis": "No HTTP client or backend in package.json; all data via AsyncStorage + expo-file-system, no auth flow anywhere in src/"
      }
    ],
    "keyFeatures": [
      {
        "title": "Time-driven six-phase routine engine",
        "description": "One deterministic clock drives phase, instruction, breath cue, and pitch; pause/skip/restart supported."
      },
      {
        "title": "Three-mode A/B voice comparison",
        "description": "Baseline vs later recording in single, sequential, or interleaved modes with clean cancellation."
      },
      {
        "title": "Private on-device recording with live coaching",
        "description": "High-quality expo-audio capture, too-quiet/steady/too-loud metering, waveform from file bytes — never uploaded."
      },
      {
        "title": "Offline-first, account-free privacy",
        "description": "No login, server, or telemetry; all data in namespaced, schema-validated local storage."
      },
      {
        "title": "Clinical learn library with custom diagrams",
        "description": "Ten milestone-gated articles with seven hand-drawn react-native-svg anatomy diagrams in markdown."
      },
      {
        "title": "Private progress without gamification",
        "description": "Monthly calendar, weekly target, streak logic, and Day 7/14/30/60/90 timeline — no points or leaderboards."
      }
    ],
    "architecture": [
      {
        "area": "Routine engine",
        "detail": "Pure time-indexed timeline (src/routine/) derives phase, instruction, and pitch from elapsed seconds."
      },
      {
        "area": "Local data layer",
        "detail": "Versioned, namespaced AsyncStorage with schema validation on read; context persists every mutation."
      },
      {
        "area": "Audio capture & playback",
        "detail": "expo-audio HIGH_QUALITY recording, live metering, and waveforms derived from file bytes."
      },
      {
        "area": "Offline content & i18n",
        "detail": "Bundled 10 gated articles with SVG diagrams plus 35 passages in EN, AR (RTL), FR, IT."
      },
      {
        "area": "Data portability",
        "detail": "Storage-abstracted JSON export snapshots all keys and file:// audio refs — no cloud."
      }
    ],
    "highlights": [
      "10-minute routine: six phases summing to exactly 600 seconds",
      "Three A/B compare modes with run-token playback cancellation",
      "Zero network calls — every byte stays device-local",
      "10 learn articles, 35 reading passages across 4 languages incl. Arabic RTL",
      "Waveforms rendered deterministically from actual audio file bytes"
    ]
  },
  "personal-fitness-tracker": {
    "oneLiner": "Local-first endurance coach with live BLE heart-rate guidance and an in-run AI co-pilot",
    "description": "StaminaForge is a local-first React Native (Expo SDK 55) endurance app that pairs over Bluetooth with a Garmin HRM-Dual strap to coach a structured 12-week heart-rate-zone plan live, then explains each run afterward. Runs fully offline.",
    "challenge": "Read a live BLE heart-rate stream reliably enough to coach off it, run a real 12-week plan, and turn noisy phone GPS into trustworthy pace and elevation, all on-device, screen-off, one-handed.",
    "approach": "A pure, side-effect-free coach engine (state machine returning cues) is decoupled from a singleton BLE manager, GPS reducer, and async audio. State runs on Zustand, history on SQLite. An optional AI layer streams over SSE through a self-hosted proxy, bounded by a strict action validator.",
    "results": "A test-backed companion across eight screens. Live 1Hz zone-colored HR with spoken zone, interval, cadence, and fueling cues; optional voice AI coach. Post-run it stores the full trace, cloud-corrects elevation, and computes MAF pace, GAP, decoupling, VDOT, and CTL/ATL/TSB load. 16 analytics modules, 93 unit tests, optional sync and GPX export.",
    "businessResult": "A single on-device coach that guides a 12-week endurance plan live and explains it afterward.",
    "role": "Solo design, build and ship",
    "timeline": "~5 weeks (Apr 28 – Jun 3, 2026, per git history)",
    "techStack": [
      "React Native 0.83",
      "Expo SDK 55",
      "TypeScript (strict)",
      "Zustand",
      "SQLite (expo-sqlite, WAL)",
      "react-native-ble-plx",
      "NativeWind",
      "MapLibre + CARTO",
      "react-native-svg",
      "Reanimated",
      "Zod",
      "expo-location",
      "expo-sensors",
      "expo-speech",
      "expo-speech-recognition",
      "Vitest"
    ],
    "metrics": [
      {
        "value": "12-week",
        "label": "periodized training protocol",
        "basis": "lib/protocol/plan.ts RUN_SPECS — weeks 1-12 with Z2, intervals, strides, tempo finish, 5K time trial; PROTOCOL_WEEKS=12 in config/constants.ts"
      },
      {
        "value": "1 Hz",
        "label": "live HR coaching pipeline",
        "basis": "CONTEXT.md HR pipeline + UI_HR_UPDATE_INTERVAL_MS=1000 in config/constants.ts; BLE samples throttled to 1Hz at source"
      },
      {
        "value": "16",
        "label": "on-device analytics modules",
        "basis": "lib/metrics/ contains 16 files: load, vdot, decoupling, hrv, maf, injuryRisk, overtraining, terrain, trends, compliance, insights, review, cadence, elevation, shoes, zones"
      },
      {
        "value": "93",
        "label": "unit tests across safety-critical logic",
        "basis": "grep of test/ — 93 it()/test() cases in 36 describe blocks covering zones, maf, guardrails, elevation, route matching, injuryRisk, AI parsing"
      }
    ],
    "keyFeatures": [
      {
        "title": "Live heart-rate coaching over Bluetooth",
        "description": "Pairs with a Garmin HRM-Dual, streams 1Hz HR, speaks real-time cues plus a scream-mode over-ceiling alarm."
      },
      {
        "title": "In-run AI co-pilot with voice",
        "description": "Optional AI gives sparse spoken check-ins and answers voice questions without duplicating safety-critical cues."
      },
      {
        "title": "Structured 12-week endurance protocol",
        "description": "Z2 base, Norwegian 4x4 intervals, strides, tempo finish, deloads, and a closing 5K time trial."
      },
      {
        "title": "Cloud-corrected elevation and grade-adjusted pace",
        "description": "Open-Meteo DEM corrects GPS altitude, driving GAP, terrain segmentation, and a data-quality strip."
      },
      {
        "title": "Deep post-run analytics",
        "description": "MAF pace, zone distribution, decoupling, VDOT, CTL/ATL/TSB load, plus injury-risk and overtraining warnings."
      },
      {
        "title": "Local-first with optional sync and export",
        "description": "On-device SQLite, fully offline; optional self-hosted multi-device sync and GPX export."
      }
    ],
    "architecture": [
      {
        "area": "Real-time HR pipeline",
        "detail": "Garmin HRM-Dual GATT 0x180D frames parsed by a singleton BLE manager, throttled to 1Hz, fanned out via Zustand to UI, run reducer, and coach engine; settings-gated mock source for dev."
      },
      {
        "area": "Pure coach engine",
        "detail": "lib/coach/engine.ts: side-effect-free tick(sample, elapsedMs, cadence) returning cues on monotonic run time, handling Z2 ceilings, scream-mode, intervals, cadence, and fueling with per-cue cooldowns."
      },
      {
        "area": "Local-first data layer",
        "detail": "On-device SQLite (WAL, foreign keys, 12 tables) stores raw samples with no write-time aggregation; metrics compute at query time. Preferences via Zustand + AsyncStorage. No account or cloud."
      },
      {
        "area": "Bounded AI layer",
        "detail": "Self-hosted proxy with SSE streaming and a balanced-JSON parser; a strict validator (lib/ai/actions.ts) permits only bounded, non-destructive actions. Check-ins throttled, deduped, with deterministic offline fallback."
      },
      {
        "area": "Elevation and mapping",
        "detail": "GPS altitude cloud-corrected against the keyless Open-Meteo DEM (batched, retry, degrades to nulls), rendered on a keyless MapLibre + CARTO basemap with GAP and terrain segmentation."
      }
    ],
    "highlights": [
      "Coach engine is a pure state machine (ADR-0004): deterministic, decoupled from BLE/audio/React, densely unit-tested.",
      "Audio cues never block the HR pipeline; an async dispatcher consumes cues so speech latency stays off the hot path.",
      "AI is additive: in-run prompts won't repeat local cues, throttle to ~one check-in per 5 min, and fall back offline.",
      "Defense-in-depth: a validator bounds every AI action (e.g. MAF clamped +/-10 bpm) so a bad response can't do harm.",
      "TypeScript strict, no `any`; Zod only at real boundaries (BLE bytes, SQLite rows, GPS), with types-as-contract (ADR-0008).",
      "Honest sensor handling: GPS smoothed before elevation gain, DEM degrades to nulls, data-quality strip flags bad track.",
      "Eight ADRs capture the load-bearing decisions (local-only, Zustand+SQLite, pure coach engine, lazy BLE singleton)."
    ]
  },
  "ai-fitness-coach": {
    "oneLiner": "Agentic AI strength coach that adapts weights, cues, and your workout in real time from training history",
    "description": "A local-first React Native (Expo) strength app whose agentic AI coach knows the athlete's full program, set-by-set history, and pre-workout readiness, and can restructure the live workout from one line of feedback.",
    "challenge": "Off-the-shelf apps ship static programs that ignore how the last set went. The hard part is feeding a model enough structured context to give safe, specific load advice, then letting it take reversible actions on the live session without corrupting workout state.",
    "approach": "Built an Expo SDK 54 / RN 0.81 (New Architecture) app on a normalized SQLite schema (11 migrations). A context builder serializes program, recent sets and readiness into compact prompts for a self-hosted Claude proxy over SSE, so no API key ships. Free-text or voice feedback becomes typed, undoable actions persisted as auditable modifications.",
    "results": "Shipped an Android release APK of a full training loop: program browser, readiness assessment, active-workout screen with AI-prefilled weights, streaming cues, throttled post-set feedback, live PR detection, agentic input, and a program-aware Coach chat. Runs Jeff Nippard's 10-week Upper/Lower with deload, substitutions, FTS5 search, plate math, and a history-based fallback when the model is down.",
    "businessResult": "A production-grade pattern for embedding an agentic LLM into a real-time, offline-first mobile workflow with safe, reversible actions.",
    "role": "Solo design, build and ship",
    "timeline": "~Feb 2026 to May 2026 (active git history; release APK May 2026)",
    "techStack": [
      "React Native",
      "Expo SDK 54",
      "TypeScript",
      "Expo Router",
      "expo-sqlite (SQLite)",
      "Zustand",
      "NativeWind",
      "Claude (self-hosted SSE proxy)",
      "Reanimated",
      "expo-speech"
    ],
    "metrics": [
      {
        "value": "7",
        "label": "agentic action types",
        "basis": "AIAction union and executeAIAction switch in src/features/workout/hooks/useWorkoutAI.ts (adjust_weight, adjust_reps, swap_exercise, skip_exercise, skip_remaining_sets, add_rest, message)"
      },
      {
        "value": "11",
        "label": "SQLite schema migrations",
        "basis": "SCHEMA_VERSION = 11 with migrateV1..migrateV10toV11 in src/shared/db/migrate.ts"
      },
      {
        "value": "0",
        "label": "API keys shipped in the app",
        "basis": "LLM access is via a self-hosted Claude proxy at src/shared/config/api.ts; callAPI/streamAPI in src/shared/services/apiClient.ts send a bearer token to the proxy, not to Anthropic directly"
      },
      {
        "value": "10-week",
        "label": "periodized program + deload",
        "basis": "Pure Bodybuilding Upper/Lower seed in src/data/seedData.ts and buildProgramOverview; deload week inserted via migrateV5toV6 in src/shared/db/migrate.ts"
      }
    ],
    "keyFeatures": [
      {
        "title": "Agentic in-workout coaching",
        "description": "One typed or spoken line becomes typed actions: adjust load, swap, skip, or add rest, each undoable."
      },
      {
        "title": "Context-aware weights and cues",
        "description": "Reads program block, RPE targets, readiness and set history to prefill weights with plate math."
      },
      {
        "title": "Readiness-driven, deload-safe advice",
        "description": "A pre-workout assessment feeds every prompt; deload weeks flip the coach conservative."
      },
      {
        "title": "Streaming program-aware chat",
        "description": "A Coach tab streams token-by-token with the 10-week program and last 12 sessions in context."
      },
      {
        "title": "Live PR detection and post-set feedback",
        "description": "Working sets trigger PR checks and a brief, throttled AI reaction on load appropriateness."
      },
      {
        "title": "Offline-first with cross-device sync",
        "description": "All data lives on-device in SQLite; an optional self-hosted backend backs up and restores it."
      }
    ],
    "architecture": [
      {
        "area": "Data layer",
        "detail": "Normalized SQLite: weeks, days, RPE-tagged sets, assessments, AI tables, FTS5 search, 11 transactional migrations."
      },
      {
        "area": "AI integration",
        "detail": "Self-hosted Claude (opus) proxy over SSE; no model key ships, with live token streaming and JSON parsing."
      },
      {
        "area": "Agentic action loop",
        "detail": "useWorkoutAI builds fresh context, applies each action to state, and writes an undoable ai_modifications row."
      },
      {
        "area": "Context engineering",
        "detail": "aiContext.ts serializes program, multi-week history, readiness and substitutions into token-budgeted prompts."
      },
      {
        "area": "Offline-first + sync",
        "detail": "Reads/writes hit local SQLite first; optional sync backs up tables and prefs with a first-sync overwrite guard."
      }
    ],
    "highlights": [
      "Resilience-first: history-based weights prefill instantly, the model refines them, and retries plus a visible fallback card keep workouts usable.",
      "Safety in prompts and data: deload constraints propagate into every prompt; swaps are limited to pre-vetted substitutions.",
      "Auditable AI: every live-session change is saved to ai_modifications with before/after JSON and an Undo control.",
      "Hand-rolled SSE streaming with a non-streaming fallback and a balanced-bracket JSON extractor that survives noisy output.",
      "Feature-based TypeScript: repository pattern over SQLite plus Zustand stores for workout, assessment, timer and AI state.",
      "Domain craft: a rep-tempo engine sets timers, weights carry their unit through history, and plate math drives the model's reasoning."
    ]
  },
  "bully-ai": {
    "oneLiner": "A behavioral-psychology productivity app that escalates from gentle nudges to nuclear roasts",
    "description": "A React Native productivity app for procrastinators and ADHD users that swaps cheerful reminders for a five-step notification cascade escalating from a gentle nudge to a nuclear roast, paired with a real ADHD support layer and anonymous social-proof backend.",
    "challenge": "Soft reminders are trivially ignored by the people who need them most. Notifications fire from the OS when the app's JS isn't running, so all AI-personalized escalating copy must exist before scheduling, and degrade gracefully when AI or network fails.",
    "approach": "Built on Expo SDK 54 / React Native 0.81 New Architecture, TypeScript, Zustand, and NativeWind. A pure-function escalation engine maps five levels to minute-offset thresholds; one batched Claude Opus call pre-generates all five personality bodies at task creation, cached and rescheduled, with template fallbacks. Reminder types are a plugin registry; a NestJS + Prisma + Redis backend powers anonymous social proof.",
    "results": "A buildable app with AI-escalating notifications, a streaming AI chat tab, five personalities, four pluggable reminder types, an ADHD learning system, stats with community comparison, and native iOS/Android home-screen widgets. Behind it sits a production-shaped NestJS backend with nine modules, Redis-cached aggregation, an hourly percentile cron, and constant-time auth. Every AI path has a template fallback.",
    "businessResult": "Turned a memorable \"the app that bullies you\" hook into a resilient product with an AI notification engine and anonymous social-proof backend.",
    "role": "Solo design, build and ship (mobile app + companion backend)",
    "timeline": "Active development through 2025 into 2026 (mobile commits through Apr 2026, backend through Mar 2026)",
    "techStack": [
      "React Native",
      "Expo SDK 54",
      "TypeScript",
      "Expo Router",
      "Zustand",
      "NativeWind",
      "Expo Notifications",
      "Reanimated",
      "Claude (Opus) via self-hosted proxy",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Swift",
      "Kotlin"
    ],
    "metrics": [
      {
        "value": "5-stage",
        "label": "escalation ladder, gentle to nuclear",
        "basis": "ESCALATION_CONFIG in src/features/escalation/services/engine.ts defines 5 levels with thresholds -30/0/+60/+360/+1440 minutes"
      },
      {
        "value": "1 batched",
        "label": "AI call generates all 5 notification bodies",
        "basis": "src/features/notifications/services/aiRoasts.ts generateAIMessages() requests all levels in one Opus proxy call, cached on Task.aiMessages"
      },
      {
        "value": "5 personalities x 4 reminder types",
        "label": "of comedic voice and task experience",
        "basis": "5 files in src/features/escalation/services/personalities/ + ReminderTypeId union (standard|posture|salsa|boredom) registered in src/features/reminders/registry.ts"
      },
      {
        "value": "9 modules / 21 test specs",
        "label": "in the companion NestJS backend",
        "basis": "src/modules in bully-api has 9 modules (social-proof, completions, leaderboard, scarcity, purchases, content, challenges, admin, health); 21 *.spec.ts files"
      }
    ],
    "keyFeatures": [
      {
        "title": "AI-personalized escalating notifications",
        "description": "Five-stage cascade, Claude-generated per personality, pre-rendered in one batched call, template fallback."
      },
      {
        "title": "Five bully personalities",
        "description": "Disappointed Friend, Drill Sergeant, Passive-Aggressive, Existential, Hype Beast across notifications and chat."
      },
      {
        "title": "Pluggable reminder types",
        "description": "Posture reset, 5-phase salsa drill, boredom timer as registry plugins with their own executor UI."
      },
      {
        "title": "Live AI chat coach",
        "description": "Token-by-token streaming from the Claude proxy in the active personality, with in-voice fallback."
      },
      {
        "title": "ADHD learning system",
        "description": "Five courses, eight interactive exercises with badges, 42 rotating daily psychology tips."
      },
      {
        "title": "Anonymous social-proof backend",
        "description": "NestJS + Prisma + Redis tracks completions by device ID, computing leaderboards and percentile ranks."
      }
    ],
    "architecture": [
      {
        "area": "Pre-generated notifications",
        "detail": "Orchestrator schedules template notifications instantly, then asynchronously upgrades with AI text and reschedules."
      },
      {
        "area": "Reminder-type plugin registry",
        "detail": "Each task experience is a plugin with executor, config form, and tracking schema, not a switch."
      },
      {
        "area": "Self-hosted Claude proxy",
        "detail": "All AI runs over SSE on Opus; buffered/streaming reads, fence stripping, bearer token in EXPO_PUBLIC env."
      },
      {
        "area": "Anonymous resilient backend",
        "detail": "Device-UUID keys, Redis-cached, hourly percentile cron under SET NX lock, timingSafeEqual API guard."
      }
    ],
    "highlights": [
      "AI copy is constrained to 80-char, emoji-free strings to fit real phone notifications",
      "Every AI path degrades gracefully: template notifications and an in-voice chat fallback, never a blank state",
      "Snoozing accelerates escalation by 30 minutes per snooze, punishing procrastination",
      "Cross-platform widget via custom Expo plugin: SwiftUI on iOS, Kotlin on Android, App Group bridge",
      "Eight ADRs document plugin registry, pre-generated roasts, partitioned store, and proxy token handling",
      "Production-shaped backend: Swagger, helmet, rate limits, health probes, Dockerized Postgres + Redis, 21 specs"
    ]
  },
  "breathebreak": {
    "oneLiner": "Native macOS menu-bar coach that turns screen-heavy days into Buteyko-paced breathing check-ins",
    "description": "BreatheBreak is a native macOS menu-bar coach that keeps recovery breathing present during deep work without stealing focus. It runs Dock-less as an LSUIElement agent, paces Buteyko-inspired reminders, and tracks Control Pause CO2 tolerance — all on-device.",
    "challenge": "A breathing tool only works mid-task, but opening an app or sitting through forced animations breaks the focus it protects. The goal: cue breathing all day while staying silent during calls, Focus mode, and off-hours.",
    "approach": "A SwiftUI + AppKit MenuBarExtra app with three interruption tiers (icon pulse, edge toast, floating NSPanel overlay). A DispatchSourceTimer drives scheduling; a TrainingPhase state machine auto-paces reminders; sessions persist via SwiftData.",
    "results": "A sandbox-compliant macOS 14+ companion that runs invisibly: countdown popover with snooze/pause, context-aware reminders respecting calls and Focus mode, full Buteyko progression, and Control Pause tracking with streaks and a Swift Charts 7-day trend.",
    "businessResult": "Keeps recovery breathing present all day without pulling users out of deep work, calls, or Focus mode.",
    "role": "Solo design, build and ship",
    "timeline": "Built March 2026 (source commits 12–31 Mar 2026); shipping as v1.0.0",
    "techStack": [
      "Swift",
      "SwiftUI",
      "AppKit",
      "SwiftData",
      "Swift Charts",
      "Combine",
      "UserNotifications",
      "ServiceManagement",
      "AudioToolbox"
    ],
    "metrics": [
      {
        "value": "4",
        "label": "guided breathing exercises",
        "basis": "ExerciseType.swift defines quickReset, boxBreath, physiologicalSigh, controlPause with declarative BreathPhase arrays"
      },
      {
        "value": "3-phase",
        "label": "adaptive training model",
        "basis": "TrainingPhase.swift: training (7m) / consolidation (15m) / maintenance (30m) with auto-progression in AppState.checkPhaseProgression()"
      },
      {
        "value": "4 skip guards",
        "label": "before every reminder",
        "basis": "BreathReminderManager.shouldSkipReminder() checks active hours, pause, in-meeting (ProcessMonitor), and Focus mode (FocusModeObserver)"
      },
      {
        "value": "100% on-device",
        "label": "no network calls",
        "basis": "SwiftData local store (ScreenBreatheApp.swift ModelContainer), UserDefaults settings, CSV export via NSSavePanel; no networking code anywhere in the repo"
      }
    ],
    "keyFeatures": [
      {
        "title": "Context-aware reminder engine",
        "description": "Four skip guards — active hours, pause, in-meeting, system Focus/DND — gate every cue."
      },
      {
        "title": "Buteyko adaptive progression",
        "description": "Three-phase model (7/15/30 min) auto-levels to weekly completion rate."
      },
      {
        "title": "Three-tier interruptions",
        "description": "Silent icon pulse and edge toast; only every fourth cycle escalates to a full overlay."
      },
      {
        "title": "Control Pause CO2 tracking",
        "description": "Guided breath-hold checks with streaks, averages, and a 7-day Swift Charts trend."
      },
      {
        "title": "Local-first with CSV export",
        "description": "Every session stays on-device via SwiftData; one-tap CSV export."
      },
      {
        "title": "Sandbox-native integration",
        "description": "Dock-less LSUIElement agent, SMAppService launch-at-login, Focus inferred inside the sandbox."
      }
    ],
    "architecture": [
      {
        "area": "App shell",
        "detail": "SwiftUI MenuBarExtra .window scene, LSUIElement agent; @MainActor AppState as source of truth, OverlayCoordinator bridges Combine to AppKit."
      },
      {
        "area": "Scheduling",
        "detail": "DispatchSourceTimer with persisted next-fire date and one-shot-then-repeat for snooze; Control Pause uses UNCalendarNotificationTrigger."
      },
      {
        "area": "OS integration",
        "detail": "Focus inferred from DoNotDisturb Assertions.json plus controlcenter/ncprefs; meetings via NSWorkspace bundle-ID polling; launch via SMAppService."
      },
      {
        "area": "Data layer",
        "detail": "SwiftData @Model BreathSession with #Predicate fetches for streaks, CP averages, weekly rate; Swift Charts trend; CSV export."
      }
    ],
    "highlights": [
      "Solved the App Sandbox Focus-mode gap (no public API) by parsing DoNotDisturb Assertions.json, falling back to controlcenter/ncprefs domains, and subscribing to DND notifications — throttled and cached for high-frequency reads.",
      "Three-tier interruption design (icon pulse to edge toast to full overlay) keyed to cycle count and training phase — present without nagging.",
      "TrainingPhase state machine reads weekly completion: offers to level up at 80%+ or ease off below 50%, turning a fixed timer into a habit protocol.",
      "Declarative breathing engine — each exercise is an array of BreathPhase(instruction, duration, targetScale) values the overlay and toast animate identically.",
      "Resilient scheduling: DispatchSourceTimer with a persisted next-fire date survives relaunch, plus a one-shot-then-repeat pattern for clean snooze handling.",
      "Defensive audio with a three-approach fallback (NSSound named, NSSound from file, AudioServices) and a strong reference held to survive ARC mid-playback.",
      "Clean separation across AppState, BreathReminderManager, ProcessMonitor, FocusModeObserver, SoundManager, and OverlayCoordinator, wired via Combine."
    ]
  },
  "linkedin-templates-extension": {
    "oneLiner": "Privacy-first LinkedIn template manager: a Manifest V3 extension with an optional team-sync backend",
    "description": "A Chrome Manifest V3 extension for recruiters and SDRs to store reusable LinkedIn message templates and insert them in one click, with profile variables auto-filled. Local-first and offline; an optional NestJS backend adds team sync.",
    "challenge": "Outreach teams reuse the same snippets, scattered across docs and inboxes. Automation tools solve it but get accounts banned, so personalization had to work through manual, native-feeling injection into LinkedIn's shifting React composers.",
    "approach": "Built in React 18, TypeScript, and Webpack on Manifest V3. A content script's MutationObserver injects a Templates button into LinkedIn composers; an optional NestJS + PostgreSQL backend adds JWT auth, cloud sync, and team libraries.",
    "results": "A build-ready extension covering all three compose surfaces, with a polished popup, options dashboard, and JSON import/export. Variables auto-detect as chips and fill from scraped profile data. Validated end-to-end with Playwright; optional backend ships auth, CRUD, and team sharing.",
    "businessResult": "Turns scattered LinkedIn snippets into one-click personalized outreach, without the ban risk of automation tools.",
    "role": "Solo design, build and ship (extension + backend), via a multi-agent build pipeline",
    "timeline": "Built April 2026; ~95% to Chrome Web Store submission (icons and store assets present, privacy policy pending)",
    "techStack": [
      "Chrome Extension MV3",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Webpack 5",
      "Chrome Storage API",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "JWT",
      "Swagger",
      "Playwright"
    ],
    "metrics": [
      {
        "value": "3 surfaces",
        "label": "LinkedIn composers supported",
        "basis": "content-script.ts injects into .msg-form__contenteditable (messaging), .connect-button-send-invite__custom-message (connection requests), and .compose-form__message-editor (InMail)"
      },
      {
        "value": "7+ profile variables",
        "label": "Auto-filled fields",
        "basis": "src/utils/variables.ts profileVars: firstName, lastName, fullName, headline, company, jobTitle, location, plus custom variables"
      },
      {
        "value": "0 network calls",
        "label": "Required by default",
        "basis": "Extension persists entirely to chrome.storage.sync/local (src/utils/storage.ts); README states no data is sent to external servers and the NestJS backend is optional"
      },
      {
        "value": "~5,000 lines",
        "label": "TypeScript across extension + API",
        "basis": "src/ totals ~4,064 lines (content-script.ts 841, Options.tsx 782, Popup.tsx 337) and backend/src ~1,005 lines"
      }
    ],
    "keyFeatures": [
      {
        "title": "One-click insertion across every composer",
        "description": "A MutationObserver injects a native button into messaging, connect, and InMail editors."
      },
      {
        "title": "Smart profile variables",
        "description": "Scrapes {{firstName}}, {{company}}, and more, substituting on insert."
      },
      {
        "title": "Live variable detection",
        "description": "Editor parses {{...}} tokens as you type, surfacing them as chips."
      },
      {
        "title": "Keyboard-navigable in-page search",
        "description": "Injected dropdown with search and full arrow/Enter/Escape navigation."
      },
      {
        "title": "Local-first with optional team sync",
        "description": "Offline via chrome.storage; optional NestJS backend adds cloud and team libraries."
      }
    ],
    "architecture": [
      {
        "area": "Content script + DOM resilience",
        "detail": "A MutationObserver matches editor selectors, deduping injection via a data flag against React re-renders."
      },
      {
        "area": "React state-safe insertion",
        "detail": "Sets textContent and dispatches a bubbling synthetic input event so React detects the change."
      },
      {
        "area": "Typed message bus",
        "detail": "Popup and content script round-trip a typed protocol through a service worker owning storage."
      },
      {
        "area": "Quota-aware storage",
        "detail": "Wraps chrome.storage.sync, catching quota errors to fall back to local and seeding defaults."
      },
      {
        "area": "Optional NestJS backend",
        "detail": "NestJS + PostgreSQL with JWT/bcrypt auth, template CRUD, Swagger, and owner-managed team sharing."
      }
    ],
    "highlights": [
      "XSS-safe by construction: template content round-trips through textContent before injection",
      "Insertion dispatches synthetic input events so LinkedIn's React composer registers the text",
      "Full keyboard access plus a Ctrl/Cmd+Shift+T shortcut and right-click context menu",
      "Graceful degradation: missing values keep the literal token; sync-quota overflow falls back to local",
      "LinkedIn-native polish: button pulse, anchored dropdown, toasts, skeleton states",
      "Verified with Playwright screenshots; ships 16/32/48/128px icons for the Web Store"
    ]
  },
  "healthcare-pdf-api": {
    "oneLiner": "A HIPAA-aligned NestJS reference API for generating, encrypting, and auditing medical PDFs",
    "description": "A production-grade NestJS reference backend that turns structured clinical data into encrypted, audit-tracked medical PDFs. Built for healthcare integrators needing HIPAA-aligned PHI handling out of the box.",
    "challenge": "Rendering a PDF is easy; the hard part is access control, encrypting PHI at rest, keeping it out of logs, an immutable compliance audit trail, and clean self-serve docs.",
    "approach": "A modular NestJS 10 app with one bounded module per concern. Puppeteer renders Handlebars templates via sync and async (Bull/Redis) paths; a single EncryptionService centralizes AES-256-GCM and SHA-256, with PostgreSQL/TypeORM persistence.",
    "results": "Docker-deployable API with sync/async generation, five seeded templates, scoped hashed API keys, AES-256-GCM encryption of PHI and PDFs, a queryable audit trail, retry webhooks, health probes, and nightly retention expiry — backed by 96 unit tests.",
    "businessResult": "Enterprise backend depth: encryption, auditability, and clean API operations a healthcare integrator could build on.",
    "role": "Solo architecture, build and documentation",
    "techStack": [
      "NestJS 10",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Puppeteer",
      "Handlebars",
      "Redis",
      "Bull",
      "Passport/JWT",
      "Swagger/OpenAPI",
      "Winston",
      "Helmet",
      "Docker",
      "Jest"
    ],
    "metrics": [
      {
        "value": "5",
        "label": "medical document templates",
        "basis": "templates/*.hbs and migration 1712534400004-SeedDefaultTemplates.ts: medical-report, prescription, lab-results, patient-summary, insurance-form"
      },
      {
        "value": "AES-256-GCM",
        "label": "encryption at rest",
        "basis": "src/modules/encryption/encryption.service.ts — encrypt/encryptBuffer use aes-256-gcm with per-record IV + auth tag; 32-byte key enforced"
      },
      {
        "value": "96",
        "label": "unit tests across 7 suites",
        "basis": "grep of it()/test() in src/**/*.spec.ts: encryption 17, auth 18, audit 16, templates 14, pdf-generation 15, webhooks 6, api-key guard 10"
      },
      {
        "value": "3x retry + backoff",
        "label": "async webhook delivery",
        "basis": "pdf-generation.service.ts Bull queue (attempts:3, exponential backoff) and webhook.service.ts sendWebhook retry loop"
      }
    ],
    "keyFeatures": [
      {
        "title": "Encrypted-at-rest PHI and PDFs",
        "description": "One AES-256-GCM service encrypts payload, PDF, and file path; API keys SHA-256 hashed."
      },
      {
        "title": "Sync and async generation with webhooks",
        "description": "Inline or Bull-queued rendering with 3x backoff retry and completion/failure webhooks."
      },
      {
        "title": "Five seeded medical templates",
        "description": "Report, prescription, lab results, patient summary, CMS-1500 — Handlebars, seeded via migration."
      },
      {
        "title": "HIPAA-style audit trail",
        "description": "Every generate/download/delete/auth event logged with actor, IP, agent; queryable and paginated."
      },
      {
        "title": "Scoped API-key access control",
        "description": "Per-key permissions, DB-enforced daily limits, IP whitelisting, and expiry in one guard."
      },
      {
        "title": "Automated retention and expiry",
        "description": "Nightly cron deletes PDFs past their retention window and logs the deletion."
      }
    ],
    "architecture": [
      {
        "area": "Data layer",
        "detail": "PostgreSQL/TypeORM, four tables, five migrations; audit_logs indexed for fast compliance queries"
      },
      {
        "area": "Async processing",
        "detail": "Bull/Redis queue renders via Puppeteer, encrypts, persists, and fires webhooks on completion/failure"
      },
      {
        "area": "Security & auth",
        "detail": "ApiKeyGuard checks hashed keys, IP whitelist, expiry; Helmet, CORS allow-list, global ValidationPipe"
      },
      {
        "area": "PHI safety",
        "detail": "Winston regex-redacts ssn/dob/phone/email/diagnosis; PHI encrypted before persistence, never plaintext"
      },
      {
        "area": "Operability",
        "detail": "/health and /health/ready probe Postgres, Redis, storage; Docker, Swagger, and landing page included"
      }
    ],
    "highlights": [
      "Single cryptography source of truth: GCM auth tag packed with IV so tampering fails on decrypt",
      "Defense-in-depth auth: hashed keys, scoped perms, daily limits, IP whitelist, two-tier rate limiting",
      "Fail-safe audit logging returns null instead of throwing, never breaking a clinical request",
      "Real async: Bull processor mirrors sync renderer plus retry, webhooks, and delivery tracking",
      "Docs as product: branded Swagger UI and a self-hosted landing page served by the API",
      "96 unit tests across encryption, auth, audit, templates, webhooks, and generation"
    ]
  },
  "salsaflow": {
    "oneLiner": "A WebXR salsa trainer for Meta Quest that grades your dancing beat-by-beat against a live partner",
    "description": "SalsaFlow is a browser-native WebXR salsa instructor for Meta Quest. Students dance with a rigged virtual partner while the app grades timing and movement quality on every beat.",
    "challenge": "Replicating a private instructor's feedback in software means a partner who moves on time, beat-accurate grading from only WebXR head and hand poses, and zero dropped frames at 72-90 FPS.",
    "approach": "A strict ECS WebXR app on IWSDK and Three.js. A BeatClock singleton is the sole timing authority; all systems phase-lock via Preact Signals. CMU salsa BVH retargets onto a Mixamo dancer, with a custom two-bone IK solver and allocation-free hot paths.",
    "results": "A working prototype with four practice modes, a 15-move curriculum with chained unlocks, five spatial-audio tracks, and three layers of live feedback. A built-in recorder exports 25-joint hand poses at 30 Hz. Installs as an offline PWA.",
    "businessResult": "Proves objective salsa coaching can run in-browser on a consumer VR headset, with no app store or instructor.",
    "role": "Solo design, build and ship",
    "timeline": "2025-2026 (research docs dated April 2026); in active development",
    "techStack": [
      "TypeScript",
      "Immersive Web SDK (IWSDK)",
      "Three.js",
      "WebXR",
      "elics ECS",
      "Preact Signals",
      "Vite",
      "UIKitML",
      "IndexedDB",
      "Meta Quest 3",
      "PWA / Service Worker"
    ],
    "metrics": [
      {
        "value": "15 moves",
        "label": "Curriculum size",
        "basis": "CURRICULUM array in src/curriculum/moves.ts — 15 MoveDefinitions across beginner/intermediate/advanced with unlock chains"
      },
      {
        "value": "4 modes",
        "label": "Practice modes",
        "basis": "Lesson, Free Practice, Drill (src/modes/drill.ts), Tempo Trainer (src/modes/tempo-trainer.ts), wired in src/index.ts and menu-system.ts"
      },
      {
        "value": "25 joints/hand @ 30 Hz",
        "label": "Mocap capture fidelity",
        "basis": "JOINT_NAMES (25 WebXR hand joints) and SAMPLE_PERIOD_MS = 1000/30 in src/capture/joint-recorder.ts"
      },
      {
        "value": "72-90 FPS budget",
        "label": "VR frame target",
        "basis": "VR performance context in AGENTS.md and the allocation-free hot-path design across motion-tracker.ts, two-bone-ik.ts and instructor.ts"
      }
    ],
    "keyFeatures": [
      {
        "title": "Live VR partner from real mocap",
        "description": "Mixamo dancer runs CMU salsa BVH, reaching toward the student via custom IK."
      },
      {
        "title": "Beat-by-beat motion grading",
        "description": "Head-local head and hand poses graded green/yellow/red on timing and direction."
      },
      {
        "title": "Four practice modes",
        "description": "Lesson, Free Practice, Drill, and a Tempo Trainer that adapts BPM to performance."
      },
      {
        "title": "Three layers of in-VR feedback",
        "description": "Rhythm bar, color-coded hand glows, and beat-synced floor footprints."
      },
      {
        "title": "15-move curriculum",
        "description": "Beginner to advanced with chained unlocks and locally persisted scores."
      },
      {
        "title": "Built-in mocap recorder",
        "description": "Exports head plus 25 hand joints per hand at 30 Hz as JSON."
      }
    ],
    "architecture": [
      {
        "area": "Rendering & framework",
        "detail": "Browser WebXR via IWSDK over Three.js; studio built from ECS transform entities."
      },
      {
        "area": "Architecture pattern",
        "detail": "Strict elics ECS, one system per file; state in Preact Signals, no polling."
      },
      {
        "area": "Timing",
        "detail": "BeatClock singleton emits ticks every 60000/bpm ms, catching up missed beats."
      },
      {
        "area": "Motion pipeline",
        "detail": "CMU BVH retargeted to Mixamo via SkeletonUtils; two-bone IK overrides arm per frame."
      },
      {
        "area": "Persistence & offline",
        "detail": "IndexedDB ProgressStore with in-memory fallback; installable offline PWA."
      }
    ],
    "highlights": [
      "Allocation-free VR hot paths: per-frame math objects pre-allocated, zero-allocation ring buffers to avoid GC drops",
      "Hand-written closed-form two-bone IK with pole-vector and max-reach clamping, no external libraries",
      "Robust CMU-to-Mixamo retargeting with explicit bone map and root-translation stripping",
      "Head-local motion normalization so direction is facing-independent",
      "Single BeatClock drives all timing with catch-up logic after GC hitches",
      "Graceful degradation: IndexedDB to in-memory, missing bones to root, isolated listener errors"
    ]
  }
}
