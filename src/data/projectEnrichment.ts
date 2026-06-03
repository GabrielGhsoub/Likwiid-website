import type { Project } from '../types'

// AUTO-GENERATED case-study enrichment, keyed by project slug.
// Sourced from deep research of each project's source repository.
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
    "description": "Padel Lebanon is a shipped, production React Native (Expo) app built for Lebanon's padel community. It turns informal WhatsApp and Instagram coordination into a real platform: discovering and booking courts, finding partners by a 12-tier padel skill rating (D- to A+), and running full competitive leagues with weekly check-ins, automated pairings, live standings, and playoff brackets. The app is live on both the App Store and Google Play (v1.1.1), is fully trilingual (English, Arabic with RTL, French), and is engineered offline-first for Lebanon's unreliable connectivity.",
    "challenge": "Lebanon's padel scene ran entirely on WhatsApp groups, Instagram DMs, and phone calls. There was no way to see real court availability, find a partner at your level, or run a structured league with standings and playoffs. Compounding this, players contend with intermittent internet, RTL Arabic alongside English and French, and a payment landscape with no dominant card rails. The product had to feel instant and reliable even on a weak connection, speak the local language, and absorb the entire competitive-league workflow that clubs were managing by hand in spreadsheets and chat threads.",
    "approach": "Built as an Expo SDK 54 / React Native 0.81 app on the New Architecture, with Expo Router file-based navigation across 42 screens and 16+ feature modules. State is split cleanly: Zustand (24 stores) for client state with persisted auth, and TanStack Query for server state with a 24-hour offline cache and connectivity-aware online detection. The backend is a custom NestJS REST API (70+ endpoints across 17 typed service modules), wired through a hardened Axios client that does single-flight JWT refresh, proactive pre-expiry token rotation, request cancellation, and Sentry error capture. The standout system is a complete league engine — registration, weekly availability check-in, four pairing algorithms (random, skill-based, Swiss, round-robin), 2v2 score submission and confirmation, standings, per-player statistics, and a semifinal-to-final playoff bracket. The UI is NativeWind (Tailwind) with a dark design system and Reanimated animations, and the whole app is internationalized at ~1,494 keys per language across English, Arabic (full RTL), and French.",
    "results": "Delivered and released to both app stores a feature-complete platform: court discovery and booking, a 12-tier skill-rating system, player matchmaking and match requests, post-match peer ratings, a marketplace, friends, gamification, and a full competitive league lifecycle through playoffs. Universal deep links (padellb.club) drive email verification, password reset, and shareable league invites with join codes. The app ships with Playwright E2E coverage for the core league journeys (check-in, pairing generation, standings, playoffs, mid-season join) and Sentry monitoring, and runs offline-first so players can browse and review their schedule with a dead connection.",
    "businessResult": "Replaced WhatsApp- and spreadsheet-run padel coordination with a live, store-published platform that owns booking, matchmaking, and full league play.",
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
        "description": "End-to-end league lifecycle: create and configure a league, weekly availability check-in, four pairing methods (random, skill-based, Swiss, round-robin), 2v2 score submission and admin confirmation, live standings and statistics, and a semifinal-to-final playoff bracket — with manual pairing override and external-player support."
      },
      {
        "title": "12-tier skill rating and matchmaking",
        "description": "A real padel classification from D- to A+ (mapped to a 1-12 backend scale) powers player discovery, skill-banded leagues, and post-match peer ratings, so players are matched against genuinely comparable opponents."
      },
      {
        "title": "Offline-first for unreliable networks",
        "description": "TanStack Query caches data for 24 hours with connectivity-aware online detection, layered over an AsyncStorage store with an in-memory cache for synchronous reads — so the app stays usable through Lebanon's frequent outages."
      },
      {
        "title": "Trilingual with full Arabic RTL",
        "description": "English, Arabic, and French localized at roughly 1,494 translation keys each, with runtime language switching and full right-to-left layout support for Arabic."
      },
      {
        "title": "Court discovery and booking",
        "description": "Browse and filter courts by type, price, and location, view availability and pricing, and complete a guided booking flow with promo codes and locally-relevant payment options (OMT Pay reference, cash at venue)."
      },
      {
        "title": "Shareable invites via universal deep links",
        "description": "Universal links on padellb.club drive league join codes, email verification, and password reset, so a league organizer can share a single tappable link that opens straight into the app."
      }
    ],
    "architecture": [
      {
        "area": "Data & state",
        "detail": "Two-tier state: Zustand (24 stores) for persisted client state and TanStack Query for server state. Server data caches for 24h with retry/backoff; an AsyncStorage layer with an in-memory cache provides synchronous reads for store hydration."
      },
      {
        "area": "Backend & auth",
        "detail": "Custom NestJS REST API (not Supabase, despite older docs) consumed via 17 typed service modules. A hardened Axios client (services/api/client.ts) handles JWT bearer auth, proactive pre-expiry refresh, single-flight refresh to avoid token-rotation races, 401 retry, request cancellation, and API version/deprecation headers."
      },
      {
        "area": "League domain",
        "detail": "The league engine models the full competitive lifecycle in typed DTOs (shared/types/league.types.ts): leagues, weeks, availability/check-in, 2v2 matches, standings, statistics, and a playoff bracket — with management, player, week, match, stats, and playoff sub-APIs and dedicated stores split into fetch/filter/mutation actions."
      },
      {
        "area": "Navigation & deep links",
        "detail": "Expo Router file-based routing across 42 screens with grouped auth/app layouts. Universal links on padellb.club (iOS associated domains, Android autoVerify intent filters) drive league shares, email verification, and password reset."
      },
      {
        "area": "Reliability & delivery",
        "detail": "Sentry error reporting and breadcrumbs, local file logging for debugging, ScreenErrorBoundary components, Playwright E2E specs for league flows, and EAS Build plus OTA updates (version 1.1.1) shipping to both stores."
      }
    ],
    "highlights": [
      "Single-flight, proactive JWT refresh: tokens are decoded client-side and refreshed ~60s before expiry, with concurrent 401s awaiting one shared refresh promise to prevent rotation races (services/api/client.ts).",
      "A genuinely complete tournament system rare in hobby apps: Swiss and round-robin pairing, manual pairing builder with external players, score confirmation workflow, forfeits, and a semifinal-to-final playoff bracket.",
      "Diagnosed and systematically worked around a real OkHttp 4.12.0 + nginx bug (Android GET requests without query params returning 400) by adding cache-busting params across 90+ endpoints, documented in CLAUDE.md.",
      "Offline-first engineering tuned for Lebanon: 24h query cache, connectivity-aware online manager via expo-network, and a sync in-memory storage cache so the UI hydrates instantly without awaiting disk.",
      "Deep, maintainable internationalization: ~1,494 keys per language across EN/AR/FR with runtime switching and full RTL forcing for Arabic.",
      "Feature-first architecture at scale: 16+ domain modules, 259 feature components, 24 stores, and 17 typed API services, all under TypeScript strict mode."
    ]
  },
  "padel-admin-portal": {
    "oneLiner": "Admin console for running player-based padel leagues: pairings, scoring, standings and playoffs",
    "description": "A web admin console that lets padel league operators run an entire weekly league season from the browser instead of touching a database. Organizers create leagues, manage rosters, generate weekly 2v2 match pairings with one click, record set-by-set scores, watch standings recompute automatically, and run a semi-final/final playoff bracket to crown a champion. It is the operator-facing companion to the Padel Booking mobile app and talks to the same production NestJS API, so admin actions and the player app stay in sync.",
    "challenge": "Padel leagues are deceptively messy to administer: every week you have to decide who plays with and against whom, keep teams fair, handle players who do not show up, capture set scores, and keep an accurate, tie-broken leaderboard — all while a season is live. Doing this by hand or in spreadsheets does not scale, and editing the production database directly is risky. The league operators needed a safe, fast, role-restricted console that encodes the league rules (pairing logic, points, tie-breakers, lifecycle states) so the right thing happens by default.",
    "approach": "Built a React 19 + Vite single-page admin app using TanStack Router for type-safe routing with auth guards and TanStack Query for server-state caching and optimistic-feeling mutations, with Zustand stores for auth/theme/notification state and Radix UI primitives styled with Tailwind v4. The portal is organized feature-first (leagues, users, plus disabled-but-built clubs/courts/bookings/dashboard modules) and centers on a seven-tab league workspace: Overview, Players, Weeks, Matches, Standings, Statistics, and Playoff. The heavy lifting lives in a NestJS 11 + TypeORM + PostgreSQL backend (38 league endpoints across five controllers) that implements the real pairing algorithms, points/tie-break math, and playoff progression. Auth is JWT with refresh-token rotation, hardened against concurrent-refresh races with a Redis lock, and the portal is locked to superadmin/admin/court_manager roles.",
    "results": "A working, deployed admin portal that drives a full league lifecycle end to end — from registration through weekly pairings and scoring to a playoff champion — without anyone editing the database. Operators get one-click weekly pairings in five modes (random, skill-based, Swiss, manual, and a fairness-optimizing round-robin), live auto-recomputed standings with set/game tie-breakers, per-player statistics, week-by-week check-in availability, and a semi-final/final bracket. The backend is covered by a Jest test suite focused on the highest-risk logic (pairing, scoring, standings, stats) and ships through a CI/CD pipeline with automated database backups before every deploy.",
    "businessResult": "Turned running a padel league from spreadsheet-and-database guesswork into a few clicks per week, with fair pairings and tie-broken standings handled automatically.",
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
        "title": "One-click weekly match pairings, five ways",
        "description": "Generate 2v2 pairings for a given week via Random, Skill-based (by player level), Swiss (by points/wins/set-difference), Round-robin (fairness-optimized), or fully Manual assignment — with automatic bye handling when player count is not divisible by four."
      },
      {
        "title": "Fairness-optimizing round-robin engine",
        "description": "The round-robin generator reads every past match in the league, builds teammate and opponent matrices, and greedily forms teams that maximize never-before-seen partner and opponent combinations, even choosing the best of three team arrangements per group."
      },
      {
        "title": "Set-by-set scoring with auto-recomputed standings",
        "description": "Record up to three sets per match; the backend awards configurable win/draw/loss points and recomputes the live leaderboard ranked by points with sets-won, set-difference, and game-difference tie-breakers."
      },
      {
        "title": "Seven-tab league workspace",
        "description": "Each league opens into Overview, Players, Weeks, Matches, Standings, Statistics, and Playoff tabs — covering roster management (promote/demote/remove), weekly check-in availability, score submission and forfeits, and a semi-final/final bracket."
      },
      {
        "title": "Role-restricted access with token rotation",
        "description": "Login is gated to admin roles only; the portal decodes the JWT, verifies role server-side, and transparently rotates refresh tokens on 401 — with a Redis lock on the backend preventing concurrent-refresh race conditions."
      },
      {
        "title": "Resilient, defensive API layer",
        "description": "A normalization layer maps loosely-typed backend JSON into strict frontend types, tolerates multiple response shapes for standings/statistics, sanitizes search input, and a lazy-route loader auto-retries chunk loads after deployments."
      }
    ],
    "architecture": [
      {
        "area": "Data layer",
        "detail": "TanStack Query owns server state with feature-scoped hooks (use-leagues, use-admin); a normalization module in leagues-api.ts converts raw backend JSON into strict TypeScript types and reconciles divergent field names (team1/team1Players, isCompleted/status, score.sets shapes)."
      },
      {
        "area": "Backend domain",
        "detail": "NestJS 11 + TypeORM + PostgreSQL with a modular leagues domain split into controllers, services (pairing, scoring, standings, stats, checkin, playoff), repositories, and entities (League, LeaguePlayer, LeagueWeek, LeagueMatch, LeagueWeekCheckin)."
      },
      {
        "area": "Auth & authorization",
        "detail": "Passport JWT with access + refresh tokens; refresh tokens are bcrypt-hashed and stored in Redis with a TTL, rotation is protected by a Redis lock, and the admin portal restricts access to superadmin/admin/court_manager roles, verified server-side on every session check."
      },
      {
        "area": "Routing & resilience",
        "detail": "TanStack Router with a beforeLoad auth guard that redirects unauthenticated users (preserving intended destination), lazy-loaded route chunks wrapped in a retry-with-reload helper to survive post-deploy chunk hash changes, and a 401 interceptor that transparently refreshes tokens and retries the original request."
      },
      {
        "area": "Delivery",
        "detail": "Dockerized frontend (nginx) and backend; backend ships via GitHub Actions CI to GHCR and Ansible-driven deploys that take a pre-deployment Postgres backup, run migrations, and health-check before cutover, with daily/weekly/monthly backup retention."
      }
    ],
    "highlights": [
      "Round-robin pairing uses a genuine combinatorial fairness heuristic — opponent/teammate matrices built from match history, mutual-need scoring, and best-of-three team-arrangement selection — not just a shuffle.",
      "Refresh-token rotation is hardened against the real-world concurrent-refresh race with a Redis lock and single retry, instead of naively letting parallel 401s clobber each other.",
      "The frontend API layer is defensively written: it tolerates paginated-vs-flat-vs-nested response shapes, single-vs-array envelopes, and multiple backend field spellings, so the UI stays robust as the backend evolves.",
      "Auth store derives isAuthenticated from persisted user on rehydrate and distinguishes genuine auth failures (401/403, clear tokens) from transient errors (429/5xx/network, keep session) so a flaky network doesn't kick admins to the login screen.",
      "Lazy routes are wrapped in a chunk-load retry that falls back to a full reload, eliminating the classic stale-chunk white screen after a deploy.",
      "Configurable league economics and rules are first-class: per-league win/draw/loss points, min/max players, skill-level bounds, visibility, and join codes are modeled in the entity rather than hard-coded.",
      "Clear product focus: courts/clubs/bookings/dashboard modules are fully built but intentionally route-disabled, keeping the shipped surface tight around league operations."
    ]
  },
  "gcg-website": {
    "oneLiner": "Science-driven consulting site with audience pathways, privacy-first analytics, and accessible theming",
    "description": "A production marketing website for Ghoussoub Consulting Group (GCG), a science-led firm spanning strategic consulting, R&D collaboration, STEM tutoring, and investment diligence. The site frames a broad, technical service offering as four clear \"entry points\" by audience, then routes each into dedicated service pages and a single conversion flow. It is built as a React 19 + Vite single-page app, deployed to GitHub Pages with a hand-built SPA redirect, a full SEO/JSON-LD layer, and privacy-first analytics. The design language is custom throughout: navy-and-gold restraint, hand-coded SVG molecular networks, DNA helices, and oscilloscope waveforms rendered with Framer Motion rather than stock imagery.",
    "challenge": "GCG's offering is unusually broad for a single brand: it has to read as credible to organizations, research teams, students and families, and investors at the same time, without diluting into a generic agency landing page or over-promising results the young firm cannot yet evidence. The core problem was structural, not cosmetic: how do you make a wide, jargon-heavy service portfolio feel clear and trustworthy to five different audiences in one coherent site, while keeping the public copy honest (no fabricated client outcomes), the experience fast and accessible, and the whole thing deployable on free static hosting with clean URLs.",
    "approach": "Built a React 19 / TypeScript 6 / Vite 8 SPA with React Router 7 and a Tailwind CSS 4 design system driven entirely by CSS custom properties, so light, dark, and system themes resolve from one token set with a no-flash inline theme script. The information architecture leads with a \"Choose Your Path\" section that segments four audiences and links each to a tailored destination (R&D, tutoring, invest, or the consulting anchor). Service depth lives in dedicated routes for Research & Development and Tutoring, each with its own methodology pipeline, deliverable artifacts, and SEO metadata. Trust is engineered deliberately: an ExpertiseStandards section explicitly separates \"representative examples\" from approved client outcomes, and a privacy-aware Umami analytics layer (disabled until a website ID is set, with Do-Not-Track respected) instruments CTAs, contact submits, and newsletter intent via named events. The signature science visuals — a memoized molecular network with distance-based bonding, a generated DNA double-helix, oscilloscope waveforms, and an orbital field — are all hand-built SVG with Framer Motion, and every animation honors prefers-reduced-motion. Deployment uses GitHub Pages with a four-part SPA routing solution (Vite base path, router basename, a 404.html sessionStorage capture, and an index.html restore) plus a CI gate that runs lint, typecheck, and build before publishing.",
    "results": "Delivered a live, deployed consulting platform (9 routes including four legal/utility pages) with clear audience segmentation, methodology-driven service pages, refined light/dark/system theming, JSON-LD structured data for Organization and WebSite schemas, an accessible navigation system with focus trapping and ARIA wiring, and a conversion flow built around a validated, animated contact form. Because there is no backend, lead capture is handled honestly through pre-filled mailto drafts for both the contact form and newsletter, with analytics events marking intent at each step. The build is strict (TypeScript with noUnusedLocals/noUnusedParameters; CI fails on any lint, type, or build error), vendor code is split into react and motion chunks for faster loads, and routes are lazy-loaded.",
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
        "description": "A 'Choose Your Path' section segments four audiences (organizations, research teams, students/families, partners/investors), each with its own signal, proof-point chips, and route into a tailored service or diligence page."
      },
      {
        "title": "Dedicated science service pages",
        "description": "Full R&D and Tutoring pages, each with a multi-step methodology pipeline (5-step R&D discovery-to-innovation flow, 4-stage tutoring learning loop), deliverable artifacts, and page-specific SEO metadata and canonical URLs."
      },
      {
        "title": "Hand-built animated science visuals",
        "description": "A memoized SVG molecular network that draws bonds by node distance, a procedurally generated DNA double-helix, composite-sine oscilloscope waveforms, and a rotating orbital field — all custom code, no stock assets."
      },
      {
        "title": "Privacy-first analytics with honest lead capture",
        "description": "Umami integration stays disabled until a website ID is set, respects Do-Not-Track, and fires named events for CTAs, contact submits, and newsletter intent. With no backend, forms open pre-filled mailto drafts instead of implying server-side persistence."
      },
      {
        "title": "Light/dark/system theming with no flash",
        "description": "A CSS-custom-property token system resolves all three theme modes from one source of truth, persisted to localStorage and applied via an inline pre-paint script in index.html to avoid a flash of incorrect theme."
      },
      {
        "title": "GitHub Pages SPA with clean deep links",
        "description": "A four-part redirect scheme (Vite base path, router basename, 404.html sessionStorage capture, index.html restore) makes client-side routes survive direct loads and refreshes on static hosting."
      }
    ],
    "architecture": [
      {
        "area": "Rendering & routing",
        "detail": "React 19 SPA with React Router 7; routes are lazy-loaded via React.lazy in src/config/routes.tsx and split into vendor-react and vendor-motion chunks in vite.config.ts."
      },
      {
        "area": "Theming",
        "detail": "Single CSS-custom-property token set in src/index.css drives light/dark/system; ThemeContext persists to localStorage key 'gcg-theme' and an inline script in index.html sets data-theme before paint to prevent flash."
      },
      {
        "area": "SEO & structured data",
        "detail": "A useSEO hook (src/shared/hooks/use-seo.ts) imperatively upserts title, canonical, OpenGraph, Twitter, and JSON-LD per route; src/shared/seo.ts emits Organization and WebSite schema.org JSON-LD plus a sitemap.xml and robots.txt."
      },
      {
        "area": "Analytics",
        "detail": "Umami integration in src/shared/analytics.ts + Analytics.tsx is feature-flagged off until VITE_UMAMI_WEBSITE_ID is set, respects Do-Not-Track, and exposes trackAnalyticsEvent plus data-umami-event attributes across CTAs, contact, and newsletter flows."
      },
      {
        "area": "Deployment",
        "detail": "GitHub Actions workflow gates on npm run check (lint + typecheck) and build, then publishes dist to GitHub Pages; SPA deep links survive via a 404.html sessionStorage capture and index.html restore tied to the /gcg-website/ base path."
      }
    ],
    "highlights": [
      "Custom generative SVG art: generateNodes/generateBonds in Hero.tsx build a molecular graph and connect atoms only within a 220px bond distance; the DNA helix is computed from sinusoidal strands with cross-rungs — all memoized and reduced-motion aware.",
      "Accessibility is wired in, not bolted on: focus-visible outlines, a prefers-reduced-motion media query that neutralizes animations, mobile-menu focus trapping with aria-modal and app-root aria-hidden management, and 44px minimum touch targets on hero controls.",
      "Honesty as a design constraint: ExpertiseStandards explicitly separates 'representative examples' from approved client outcomes, and forms use mailto drafts rather than faking server-side lead capture — a deliberate credibility choice documented in AGENTS.md.",
      "Strict engineering hygiene: TypeScript 6 with noUnusedLocals/noUnusedParameters, path aliases and barrel exports, Husky + lint-staged + Prettier, and a CI pipeline that fails the deploy on any lint/type/build error.",
      "Animated, validated contact UX: floating-label inputs with per-field focus dimming, spring-based valid/invalid indicators, shake-on-error, and an idle/loading/success submit button — built as small composable subcomponents.",
      "A polished 404 experience ('This Page Drifted Out Of Orbit') with three recovery paths and noindex metadata, integrated into the same SPA redirect system rather than a dead end."
    ]
  },
  "sems-energy-management": {
    "oneLiner": "One dashboard for homes juggling EDL grid, generators, solar and batteries in Lebanon",
    "description": "SEMS is a software-first energy management platform for households that run on several unreliable power sources at once: the EDL state grid, neighborhood diesel generators (ishtirak), rooftop solar, and battery storage. It pairs an Expo React Native mobile app with a NestJS API backed by PostgreSQL and TimescaleDB, and a purpose-built simulation engine that models real Lebanese energy behavior so the entire product can be proven before any hardware (CT clamps, Zigbee sensors, Raspberry Pi hub) is connected. The result is a single live dashboard showing what is powering the home right now, what each device is costing, and how source switches affect the monthly bill.",
    "challenge": "Almost every consumer energy product assumes a stable single-source grid (Sense is US split-phase only, Emporia is cloud-locked, Tesla's app is hardware-locked). None handle the everyday Lebanese reality where a home draws from grid + generator + solar + battery on the same day. With EDL supplying only 6-10 hours daily, generators billed at $0.33-$0.38/kWh plus fixed monthly fees, and a tiered EDL tariff ($0.10/$0.27/$0.40 per kWh), families have no single place to see which source is active, what each appliance costs, or how an outage or source switch changes their spend. The harder engineering problem is proving all of this works credibly with no meter hardware available yet.",
    "approach": "I designed a TypeScript Turborepo (pnpm) with all technology decisions frozen upfront, then built it end to end: a NestJS 10 API with 11 Prisma models, PostgreSQL 16 + TimescaleDB hypertables for telemetry, Redis 7 for caching and Socket.io pub/sub, custom JWT auth with rotating refresh tokens, and an Expo SDK 54 (React 19 / RN 0.81) app using Expo Router, TanStack Query and Zustand. The keystone is a deterministic, seedable data-generator package that simulates 24-hour Lebanese energy cycles, region-based EDL schedules, generator auto-start on outage, season-adjusted solar bell curves, battery state-of-charge, temperature-correlated HVAC, occupancy-driven lighting, plus realistic sensor noise and dropout, so the analytics and UX are validated against believable data before hardware. A shared package holds Zod schemas as the single source of truth (validated by both backend and app) alongside Lebanese energy constants and source-aware cost math.",
    "results": "The Phase 1 POC is built and verified working end to end. On 2026-02-24 the backend was exercised against live TimescaleDB and Redis containers: every documented endpoint across auth, devices, energy sources, telemetry, energy analytics, tariffs and health returned its expected status, the TimescaleDB hypertable and both continuous aggregates (hourly and daily) materialized correctly, and the simulator seeded 7,205 readings for a one-day range in under 0.1 seconds. The mobile app ships authentication with token-refresh retry, a live energy dashboard (active source, real-time watts, daily cost, top consumers), room-grouped device management with 14 device types, analytics with period selection and cost/source breakdowns, and tariff and home-profile configuration tuned to Lebanese tiers and generator amperage subscriptions. Four predefined scenarios (summer heavy-AC, winter minimal-solar, EDL blackout day, generator failure) let the full product be demoed without any meter hardware.",
    "businessResult": "Turns fragmented grid, generator, solar and battery usage into one source-aware cost dashboard, validated end to end before any hardware spend.",
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
        "description": "Shows the active power source (EDL grid, generator, solar or battery), real-time total watts, today's estimated cost and the home's top consumers in one view, updated over a WebSocket connection."
      },
      {
        "title": "Source-aware cost engine",
        "description": "Cost math reflects Lebanon's real tariffs: EDL's tiered rate, generator per-kWh plus fixed monthly amperage fees, and solar/battery, so every kWh is priced against whichever source produced it."
      },
      {
        "title": "Realistic Lebanese energy simulator",
        "description": "A seedable generator models region-based EDL schedules, generator auto-start on outage, season-adjusted solar curves, battery state-of-charge, temperature-correlated HVAC and occupancy-driven lighting, complete with sensor noise and dropout, so the product is provable before any hardware."
      },
      {
        "title": "Scenario-driven demos",
        "description": "Four built-in scenarios (summer heavy-AC, winter minimal-solar, EDL blackout day, generator failure) let stakeholders see how the app behaves through outages and source transitions on demand."
      },
      {
        "title": "Room-grouped device management",
        "description": "CRUD across 14 device types with rated wattage, deferrable/essential flags and room assignment, plus per-device consumption and cost drill-down in analytics."
      },
      {
        "title": "Time-series analytics on TimescaleDB",
        "description": "Telemetry lands in a TimescaleDB hypertable with auto-materialized hourly and daily continuous aggregates, powering fast day/week/month history, cost breakdowns and source breakdowns."
      }
    ],
    "architecture": [
      {
        "area": "Monorepo",
        "detail": "Turborepo + pnpm workspace with two apps (NestJS backend, Expo mobile) and two packages (@sems/shared for Zod schemas/constants/cost utils, @sems/data-generator for simulation). packages/shared is the single source of truth validated by both backend and app."
      },
      {
        "area": "Data layer",
        "detail": "PostgreSQL 16 + TimescaleDB. energy_readings is a hypertable (created via raw SQL since Prisma can't model hypertables), with energy_hourly and energy_daily continuous aggregates, compression after 7 days and 90-day retention. 11 Prisma models cover users, homes, rooms, devices, sources, tariffs, telemetry and source transitions."
      },
      {
        "area": "Real-time",
        "detail": "Socket.io gateway on an /energy namespace, JWT-authenticated on connect, joining a per-home room (home:{homeId}) and broadcasting energy:current, source:transition and device:update events. Redis adapter enables horizontal scaling; the mobile client auto-reconnects and drives an OfflineBanner from connection state."
      },
      {
        "area": "Auth",
        "detail": "Custom JWT auth (Passport.js, bcrypt): 15-minute HS256 access tokens plus 64-byte opaque refresh tokens stored SHA-256-hashed, rotated on each use with family-based theft detection. JwtAuthGuard protects routes and a HomeOwnerGuard scopes home-owned resources; the app transparently retries on 401 via the refresh flow."
      },
      {
        "area": "Mobile state & UX",
        "detail": "Expo Router file-based navigation, TanStack Query for server state (tuned stale/refetch windows per data type) with Lebanese demo data as instant placeholderData, and three Zustand stores (auth persisted to expo-secure-store, settings to AsyncStorage, realtime in-memory). Charts are hand-built rather than off-the-shelf."
      }
    ],
    "highlights": [
      "Deterministic, seedable simulation: SeededRandom plus modeled physics (temperature-correlated HVAC, cloud-cover-driven solar, battery SoC, source-transition gap timing) make demo data reproducible and believable without any meters.",
      "Domain accuracy baked into code: Lebanese constants encode tiered EDL rates, generator amperage tiers and monthly fees, brownout/overvoltage voltage thresholds (180-250V) and seasonal peak-sun-hours, so cost and behavior reflect the real market.",
      "Zod schemas as one source of truth shared by backend and mobile, with types inferred via z.infer, eliminating client/server drift.",
      "Real end-to-end verification, not just a paper design: the e2e report documents bugs found and fixed (Redis circular dependency, missing continuous aggregates, TimescaleDB grant) and every endpoint exercised against live containers.",
      "Production-minded DevOps: multi-stage backend Dockerfile with a non-root user, GitHub Actions CI with 4-layer caching and service containers, Husky + lint-staged, and a shared ESLint config with base/nestjs/react-native presets.",
      "Resilient mobile data flow: TanStack Query placeholderData shows realistic content instantly while the live query resolves, and a WebSocket-driven OfflineBanner animates in on disconnect."
    ]
  },
  "voxflow": {
    "oneLiner": "Offline-first vocal re-education: a guided 10-minute routine with private recordings and A/B compare",
    "description": "VoxFlow is an Android-first mobile app that turns the scattered tools of voice practice — a timer, written instructions, a voice recorder, and reference reading — into a single, calm, clinically-sequenced 10-minute routine. Built with Expo and React Native, it runs entirely offline: there is no account, no server, and no telemetry, and every recording and progress entry stays on the user's own device. The product is deliberately quiet and non-gamified, designed to feel like sitting down in a practice room rather than opening a wellness feed.",
    "challenge": "People recovering from chronic throat tension or hypernasal speech rarely stick with practice, because a session usually means juggling several apps: a timer for pacing, notes for the exercises, a recorder for tracking change, and articles for understanding the anatomy. That friction breaks consistency, and most off-the-shelf voice or wellness apps add social pressure, streak guilt, and cloud accounts on top of it. VoxFlow had to fold all of those jobs into one steady flow, keep it usable with no connectivity and no login, and hold a strictly non-judgmental clinical tone — while still doing genuinely hard engineering like a time-driven routine engine and a fair A/B recording comparison.",
    "approach": "We modelled the practice as a deterministic routine engine: a single source-of-truth phase timeline (six phases, thirteen timed instructions, exactly 600 seconds) that derives the current phase, exercise, breathing cue, and Mum-scale pitch purely from elapsed time, so playback, progress bars, and voice cues all stay in sync from one clock. Recording is handled with expo-audio at high-quality preset, with live input-level metering classified into too-quiet / steady / too-loud guidance and a deterministic waveform generated from the captured file bytes. The A/B comparison is its own playback engine supporting single, sequential, and interleaved listening modes, with a run-token pattern that cleanly cancels in-flight playback when the user switches modes. All state is persisted through namespaced, schema-validated AsyncStorage with file handles for audio, the screen is kept awake during sessions, and learning content (ten articles with hand-drawn SVG anatomy diagrams) and reading passages in four languages ship in the bundle so nothing needs the network.",
    "results": "VoxFlow ships as a complete, installable Android app (package com.likwiid.voxflow) covering the full loop: onboarding with a permanent Day-Zero baseline recording, the guided six-phase session with breath-paced visuals and haptics, a private recordings library, three-mode A/B comparison against the baseline, a progress calendar with weekly targets and a private milestone timeline (Day 7/14/30/60/90), a milestone-gated learn library, and a settings screen with a full local JSON data export. Because there is no backend, the app makes zero network calls at runtime and every byte of user data — recordings included — remains device-local, which is both the privacy promise and the architecture.",
    "businessResult": "Packaged fragmented vocal practice into one private, offline-first 10-minute routine with built-in progress and comparison.",
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
        "description": "A single deterministic timeline drives the entire 10-minute session — current phase, active instruction, breathing cue, and Mum-scale pitch are all derived from one elapsed-time clock, with pause, skip-phase, and restart support."
      },
      {
        "title": "Three-mode A/B voice comparison",
        "description": "Listen to the Day-Zero baseline against a later recording in single, back-to-back sequential, or interleaved segment-by-segment modes, with clean cancellation when switching so playback never overlaps."
      },
      {
        "title": "Private on-device recording with live coaching",
        "description": "High-quality capture via expo-audio with real-time level metering that flags too-quiet / steady / too-loud, plus a waveform rendered from the actual audio file bytes — all stored locally, never uploaded."
      },
      {
        "title": "Offline-first, account-free privacy model",
        "description": "No login, no server, no telemetry. All sessions, recordings, and progress persist in namespaced, schema-validated local storage, making the app fully usable with zero connectivity."
      },
      {
        "title": "Clinical learn library with custom anatomy diagrams",
        "description": "Ten curated articles across anatomy, practice, framework, and safety categories, several gated behind practice milestones, illustrated with seven hand-drawn react-native-svg diagrams rendered inline in markdown."
      },
      {
        "title": "Private progress without gamification",
        "description": "A monthly practice calendar, configurable weekly target (4 or 5 days), qualifying-week streak logic, and a Day 7/14/30/60/90 milestone timeline — framed as quiet acknowledgement, never points or leaderboards."
      }
    ],
    "architecture": [
      {
        "area": "Routine engine",
        "detail": "A pure, time-indexed timeline in src/routine/ (phases.ts, timeline.ts) computes phase windows, the active instruction, and the Mum-scale pitch cue from a single elapsed-seconds value, keeping UI, audio cues, and progress bars perfectly in sync."
      },
      {
        "area": "Local data layer",
        "detail": "AsyncStorage with versioned, namespaced keys (voxflow.app-data.v1, @voxflow/recordings/v1) and defensive runtime schema validation on read (src/storage/app-store.ts, src/recording/recording-storage.ts); a React context provider persists on every mutation."
      },
      {
        "area": "Audio capture & playback",
        "detail": "expo-audio drives recording (HIGH_QUALITY preset, live metering, audio-mode management for record/playback) and the comparison player; waveforms are derived deterministically from file bytes via expo-file-system (src/recording/waveform.ts)."
      },
      {
        "area": "Offline content & i18n",
        "detail": "All learning and practice content ships in the bundle: 10 typed learn articles with milestone gating and inline SVG diagrams, plus 35 reading passages across English, Arabic (RTL), French, and Italian (src/content/)."
      },
      {
        "area": "Data portability",
        "detail": "A storage-adapter-abstracted JSON export (src/export/json-export.ts) snapshots all keys, derives sessions/recordings/settings/profile collections, and collects file:// audio references — giving users a portable backup without any cloud."
      }
    ],
    "highlights": [
      "Run-token cancellation pattern in the A/B player ensures switching playback modes mid-listen never leaves two recordings overlapping — a subtle correctness detail most apps get wrong.",
      "Deterministic waveform generation reads real audio bytes (RMS per bar, header-skipped, peak-normalized) with a seeded fallback, so visualizations are stable and reproducible without a heavy DSP dependency.",
      "Breathing orb animation is tuned to a real breath cadence (~4.2s expand, 0.85s hold, 4.6s contract) with layered halo/ring/core opacity curves, and disables the native driver only on web to avoid warnings.",
      "Strict product-voice discipline: a custom check-no-em-dash.js copy linter and CONTEXT.md banned-word list (leaderboard, badge, points, streak-as-reward) enforce the calm, non-gamified clinical tone in CI-style checks.",
      "Full TypeScript domain modelling — discriminated unions for instruction IDs, phase IDs, recording kinds, and cue events make the routine engine and storage layer type-safe end to end.",
      "Feature-sliced architecture (src/features/* with co-located components, themes, and hooks) plus Expo Router file-based navigation keeps the codebase navigable and each surface self-contained."
    ]
  },
  "personal-fitness-tracker": {
    "oneLiner": "Local-first endurance coach with live BLE heart-rate guidance and an in-run AI co-pilot",
    "description": "StaminaForge is a local-first mobile training app (Expo SDK 55 / React Native) built around a structured 12-week heart-rate-zone protocol. It pairs over Bluetooth with a Garmin HRM-Dual chest strap, streams live heart rate at 1Hz, and coaches the run in real time with voice cues — keeping the athlete in Zone 2 / under their MAF ceiling on easy days and driving the work on interval days. On top of the deterministic on-device coach, it layers an optional AI co-pilot that gives sparse, context-aware spoken check-ins during the run and writes plain-language post-run reports. All training history lives in on-device SQLite; nothing requires an account, and the app runs end-to-end without the cloud.",
    "challenge": "Endurance apps tend to fail in two ways: they either bury training context behind generic cloud charts, or they nag with shallow alerts that ignore how the run is actually going. StaminaForge had to do harder things well — read a live BLE heart-rate stream reliably enough to coach off it, run a genuinely structured 12-week plan (Z2 base, Norwegian 4x4 intervals, strides, tempo finishes, a 5K time trial), and turn noisy phone GPS into trustworthy distance, pace, and elevation — all on-device, one-handed, with the screen off. Layering AI on top without it talking over the safety-critical real-time cues or becoming dead weight offline added a second axis of difficulty.",
    "approach": "The architecture cleanly separates a pure, side-effect-free coach engine (a state machine that takes one HR sample plus elapsed time and returns 0..N cues) from the I/O around it: a singleton BLE manager parsing GATT 0x180D heart-rate frames, an expo-location GPS reducer, and an async audio dispatcher so speech never blocks the HR hot path. State is Zustand; durable history is SQLite (WAL, foreign keys, 12 tables) with metrics computed at query time. A second AI layer talks to a self-hosted proxy: it builds a scoped training context, streams responses over SSE, and runs every AI suggestion through a strict validator that only allows a small set of bounded, non-destructive app actions. Live in-run AI check-ins are throttled and explicitly told not to duplicate the local real-time cues, with a deterministic fallback so the coach still speaks when the network is gone. GPS altitude is cloud-corrected against the free Open-Meteo DEM and rendered on a keyless MapLibre + CARTO basemap, with grade-adjusted pace and terrain segmentation derived from the corrected track.",
    "results": "The result is a complete, test-backed training companion across eight screens — Today/readiness, Run, Program, History, Routes, and Coach. During a run it shows live zone-colored HR at 1Hz, speaks zone, interval, cadence, nasal-breathing, and fueling guidance, and (optionally) lets the athlete talk to an AI coach by voice. After a run it stores the full HR and GPS trace, cloud-corrects elevation, computes MAF pace, grade-adjusted pace, zone distribution, aerobic decoupling, VDOT, and CTL/ATL/TSB training load, and produces an AI-written report with concrete next steps. Sixteen analytics modules and 93 unit tests cover the safety-critical math (zones, MAF, guardrails, elevation, route matching, injury risk, AI parsing). It runs fully offline by default, with optional encrypted multi-device sync and GPX export when the athlete wants their data elsewhere.",
    "businessResult": "Turned a structured 12-week endurance plan into a single on-device coach that guides the run live and explains it afterward.",
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
        "description": "Pairs with a Garmin HRM-Dual chest strap, streams HR at 1Hz, and speaks real-time cues that keep easy days under the MAF ceiling and push the work on interval days — including an escalating 'scream mode' alarm when HR runs too far over."
      },
      {
        "title": "In-run AI co-pilot with voice",
        "description": "Optional AI coach gives sparse, context-aware spoken check-ins mid-run and answers spoken questions ('can I push?'), deliberately layered above the deterministic cues so it never duplicates or drowns out the safety-critical real-time guidance."
      },
      {
        "title": "Structured 12-week endurance protocol",
        "description": "A full periodized plan — Zone 2 base building, Norwegian 4x4 intervals, end-of-run strides, a Z3 tempo finish, deload weeks, and a closing 5K time trial — each session with its own HR ceiling, targets, and coaching logic."
      },
      {
        "title": "Cloud-corrected elevation and grade-adjusted pace",
        "description": "Noisy phone-GPS altitude is corrected against the free Open-Meteo DEM, then used to compute grade-adjusted pace (GAP), terrain segmentation, and a per-segment data-quality strip so elevation numbers are actually trustworthy."
      },
      {
        "title": "Deep post-run analytics",
        "description": "Every run produces MAF pace, zone distribution, aerobic decoupling, VDOT, CTL/ATL/TSB training load, recovery HR drop, and HRV-based readiness — plus injury-risk and overtraining warnings from mileage jumps, repeated niggles, and shoe wear."
      },
      {
        "title": "Local-first with optional sync and export",
        "description": "All history lives in on-device SQLite and the app works fully offline; an optional sync service backs the full dataset up to a self-hosted VPS for multi-device restore, and any run can be exported as standard GPX."
      }
    ],
    "architecture": [
      {
        "area": "Real-time HR pipeline",
        "detail": "Garmin HRM-Dual frames (GATT 0x180D) parsed by a singleton BLE manager, throttled to 1Hz, fanned out through a Zustand store to the live UI, the active-run reducer (zone classification, distance, splits), and a pure coach engine — with a settings-gated mock HR source that swaps in transparently for development."
      },
      {
        "area": "Pure coach engine",
        "detail": "lib/coach/engine.ts is a side-effect-free state machine: tick(sample, elapsedMs, cadence) returns cues with no I/O, using monotonic run time (paused time excluded). It handles Z2 ceilings, gray-zone education, scream-mode escalation, interval/strides/tempo phases, cadence, and fueling — with per-cue cooldowns. Audio is dispatched asynchronously so it never blocks the HR hot path."
      },
      {
        "area": "Local-first data layer",
        "detail": "On-device SQLite (WAL, foreign keys, 12 tables incl. runs, hr_samples, gps_points, hrv_samples, baselines, shoes, plus AI conversation tables) stores raw samples with no write-time aggregation; metrics aggregate at query time. Preferences/profile persist via Zustand + AsyncStorage. No account or cloud required to run."
      },
      {
        "area": "Bounded AI layer",
        "detail": "AI talks to a self-hosted proxy with SSE streaming and a balanced-JSON parser; every model suggestion passes through a strict validator (lib/ai/actions.ts) that only permits a small set of bounded, non-destructive actions (e.g. MAF adjustment clamped to +/-10 bpm). Live check-ins are throttled, deduped against local cues, and fall back to a deterministic coach when offline."
      },
      {
        "area": "Elevation and mapping",
        "detail": "GPS altitude is cloud-corrected against the keyless Open-Meteo DEM API (batched, timeout + retry, degrades to nulls, never throws) and rendered on a keyless MapLibre + CARTO dark basemap, with grade-adjusted pace, terrain segmentation, and a data-quality strip derived from the corrected track."
      }
    ],
    "highlights": [
      "Coach engine is a pure state machine (ADR-0004) — deterministic, fully unit-testable, and decoupled from BLE, audio, and React, which is why the safety-critical cue logic has dense test coverage.",
      "Audio cues never block the HR pipeline: the engine emits CoachCue values that an async dispatcher consumes, protecting the real-time loop from speech latency.",
      "AI is layered as an additive intelligence, not a crutch — live in-run prompts are explicitly instructed not to repeat local HR/zone/cadence cues, are throttled to one check-in every ~5 min, and degrade to a deterministic fallback coach on timeout or offline.",
      "Defense-in-depth on AI output: a hand-written validator coerces and bounds every suggested action (clamped cadence, MAF adjustment, recovery hours) so a hallucinated or hostile response can never trigger a destructive app action.",
      "TypeScript strict with no `any`; Zod validation only at true boundaries (BLE bytes, raw SQLite rows, GPS callbacks), with a single append-only `types/index.ts` as the cross-module contract (ADR-0008).",
      "Honest engineering around messy sensors: GPS jitter is smoothed before elevation gain is counted, DEM correction degrades gracefully to nulls instead of throwing, and a data-quality strip tells the user which parts of the track were actually reliable.",
      "Eight documented ADRs capture the load-bearing decisions (local-only, Zustand+SQLite, cardio-only, pure coach engine, lazy BLE singleton with mock, pedometer cadence, raw SVG charts, types-as-contract)."
    ]
  },
  "ai-fitness-coach": {
    "oneLiner": "Agentic AI strength coach that adapts weights, cues, and your workout in real time from training history",
    "description": "A local-first React Native (Expo) strength-training app built around an agentic AI coach that knows the athlete's full program, set-by-set history, and pre-workout readiness. Instead of static spreadsheets, the coach pre-fills working and warmup weights with plate math, streams form cues per exercise, reacts to each completed set, and can restructure the live workout from a single line of natural-language feedback. All training data lives on-device in SQLite and is reachable by the coach without leaving the phone, with an optional self-hosted backend for cross-device backup and LLM access.",
    "challenge": "Off-the-shelf fitness apps ship static programs that ignore how the last set actually went, while a real coach who adjusts load, swaps a painful movement, or calls a deload is expensive and not in the room mid-set. The hard part is not a chat box bolted onto a tracker. It is feeding a model enough structured context (program block, week, RPE targets, per-set history, readiness, substitutions) to give load and form advice that is actually safe and specific, then letting it take concrete, reversible actions on the live session without corrupting the workout state.",
    "approach": "Built an Expo SDK 54 / React Native 0.81 app (New Architecture) on expo-router, with a normalized SQLite schema (11 migrations) modeling weeks, days, exercises, RPE-tagged sets, pre-workout assessments, AI conversations and an audit log of AI modifications. A context builder serializes the athlete's program, last several weeks of working sets, today's readiness and completed sets into a compact prompt. The coach reaches a self-hosted Claude (model 'opus') proxy over SSE so the app ships no API key; responses stream token-by-token and structured JSON (batch weight suggestions, per-exercise cues, agentic actions) is parsed with a balanced-bracket extractor that tolerates fenced or noisy output. During a workout, free-text or voice feedback is turned into typed actions (adjust weight/reps, swap to a pre-defined substitute, skip sets, add rest, or just reply), each applied to React state and persisted as an undoable modification. Deload weeks flip every prompt into a conservative mode, and an optional VPS sync service backs up and restores user data across devices while protecting local data on first sync.",
    "results": "A shipped Android build (release APK, mid-2026) of a complete training loop: program browser by week and day, pre-workout readiness assessment, an active-workout screen with AI-prefilled weights, streaming form cues, throttled post-set feedback and live PR detection, an agentic feedback input, a post-workout debrief, and a full Coach chat tab with program-aware context and quick actions. The current program is Jeff Nippard's Pure Bodybuilding Upper/Lower (10 weeks plus a programmed recovery/deload), with exercise substitutions, demo videos, FTS5 exercise search, rep-tempo guidance and spoken cues. Cross-device sync, kg/lb handling with plate math, and a retry-and-fallback path (history-based weights when the model is unavailable) make it usable as a daily driver, validated through extensive on-device QA captures.",
    "businessResult": "Demonstrates a production-grade pattern for embedding an agentic LLM into a real-time, offline-first mobile workflow with safe, reversible actions.",
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
        "description": "A single line of typed or spoken feedback (\"shoulder hurts\", \"go lighter\") is parsed into typed actions: adjust weight or reps, swap to a pre-defined substitute, skip sets, or add rest. Every action is applied live and saved as an undoable modification."
      },
      {
        "title": "Context-aware weight and cue generation",
        "description": "Before a session the coach reads the athlete's program block, RPE targets, readiness assessment and recent set history to suggest working and warmup weights with explicit plate math, plus a form cue per exercise."
      },
      {
        "title": "Readiness-driven, deload-safe advice",
        "description": "A pre-workout assessment (energy, sleep, stress, soreness, last meal) feeds every prompt, and deload weeks flip the coach into a conservative mode that refuses to add weight or push to failure."
      },
      {
        "title": "Streaming program-aware chat coach",
        "description": "A dedicated Coach tab streams responses token-by-token with full context of the 10-week program, this week's schedule and the last 12 sessions, with quick actions for program structure, deload and form questions."
      },
      {
        "title": "Live PR detection and post-set feedback",
        "description": "Completed working sets trigger PR checks and a brief AI reaction on whether the load was appropriate, throttled to avoid spamming the athlete mid-session."
      },
      {
        "title": "Offline-first data with cross-device sync",
        "description": "All training data is stored on-device in SQLite; an optional self-hosted backend backs up and restores user tables and preferences across devices while protecting local data on first sync."
      }
    ],
    "architecture": [
      {
        "area": "Data layer",
        "detail": "Normalized SQLite (expo-sqlite) with weeks, days, program_exercises, RPE-tagged workout_sets, pre_workout_assessments, exercise_substitutions, and ai_conversations/ai_messages/ai_modifications; FTS5 virtual table with triggers for exercise search; 11-version migration chain with transactional upgrades and reseeds."
      },
      {
        "area": "AI integration",
        "detail": "Coach talks to a self-hosted Claude ('opus') proxy on a VPS over Server-Sent Events. The app ships no model key; callAPI buffers SSE, streamAPI renders tokens live, and a balanced-bracket parseJSON extracts structured action/weight payloads from fenced or noisy responses."
      },
      {
        "area": "Agentic action loop",
        "detail": "useWorkoutAI builds fresh session context per request, asks the model for an action array, then applies each action to React state and writes an undoable row to ai_modifications, so AI edits to the live workout are auditable and reversible."
      },
      {
        "area": "Context engineering",
        "detail": "aiContext.ts serializes program overview, per-exercise multi-week working-set history, readiness assessment, substitutions and today's completed sets into token-budgeted prompts (history capped at ~8 weeks, chat context capped at last 12 sessions), with kg/lb normalization and plate-math reasoning."
      },
      {
        "area": "Offline-first + sync",
        "detail": "All reads/writes hit local SQLite first; an optional syncService backs up user tables plus Zustand-persisted preferences to a /api/sync endpoint and restores them transactionally, with a first-sync guard that refuses to overwrite existing local data."
      }
    ],
    "highlights": [
      "Resilience-first AI path: history-based weights pre-fill instantly from the DB, the model refines them, and a two-attempt retry plus a visible 'using history as fallback' card keeps the workout usable when the LLM is flaky.",
      "Safety baked into prompts and data: deload weeks propagate a 'do not add weight, stay 3-4 RIR' constraint into every coaching, post-set and batch-weight prompt, and swaps are restricted to pre-vetted substitutions matched by exact-then-substring lookup.",
      "Auditable AI: every AI change to a live session is persisted to ai_modifications with before/after JSON and surfaced with an Undo control, so the model never silently mutates the workout.",
      "Hand-rolled SSE streaming via ReadableStream with incremental buffering and a non-streaming fallback, plus a custom balanced-bracket JSON extractor that survives markdown fences and trailing prose.",
      "Disciplined feature-based TypeScript architecture (features/coach, features/workout, shared/db/repositories) with path aliases, repository pattern over SQLite, and Zustand stores for workout, assessment, timer and AI card state.",
      "Domain craft: a rep-tempo engine derives seconds-per-rep from exercise name and equipment for accurate timers, weights carry their unit through history so kg/lb is never ambiguous, and plate math is rendered in the model's reasoning."
    ]
  },
  "bully-ai": {
    "oneLiner": "A behavioral-psychology productivity app that escalates from gentle nudges to nuclear roasts",
    "description": "Bully.ai is a React Native productivity app for chronic procrastinators and people with ADHD, built around a deliberately confrontational hook: instead of cheerful reminders, it sends a five-step cascade of notifications that escalate from a friendly nudge to a \"nuclear\" roast as a task slips past its deadline. The notification voice is driven by AI: at task creation the app makes a single batched call to a self-hosted Claude proxy and pre-generates all five escalation messages in the user's chosen personality, then bakes them into the OS-scheduled notifications. It pairs the bullying core with a genuine support layer — an in-app ADHD learning system, structured \"reminder type\" routines (posture resets, a salsa-practice drill, sit-with-boredom timers), a once-a-week grace mechanic, and an anonymous NestJS backend that powers leaderboards and social-proof comparisons.",
    "challenge": "Positive-reinforcement productivity apps tend to fail the exact people who need them most — chronic procrastinators and ADHD users for whom a soft \"don't forget!\" reminder is trivially ignorable. The product bet was that humor, guilt, and escalating pressure cut through where gentle nudges don't. That creates two hard engineering problems. First, notifications fire from the operating system when the app's JavaScript isn't running, so every piece of escalating, AI-personalized copy has to exist before the notification is scheduled — there is no \"generate it at fire time.\" Second, the app needed to feel personal and varied across five distinct comedic personalities without shipping a brittle pile of switch statements, and to degrade gracefully whenever the AI or network is unavailable so a notification never arrives blank.",
    "approach": "Built on Expo SDK 54 and React Native 0.81 with the New Architecture, strict TypeScript, Expo Router, Zustand v5 with persistence, and NativeWind v4. The escalation engine is a pure-function module: a single ESCALATION_CONFIG maps each of five levels (gentle → sarcastic → disappointed → aggressive → nuclear) to a minute-offset threshold relative to the due time (-30, 0, +60, +360, +1440), and snoozing accelerates escalation by 30 minutes per snooze. At task creation an orchestrator schedules template-based notifications immediately, then asynchronously upgrades them: it asks a self-hosted Claude proxy (Opus, over SSE) to generate all five level-specific bodies in ONE batched call, in the selected personality voice, under an 80-character notification limit, caches them on the task, and reschedules — falling back to handwritten template copy on any failure. Distinct task experiences (plain to-do, posture routine, 5-phase salsa drill, boredom timer) are implemented as a plugin registry of \"reminder types\" rather than conditionals, each contributing its own executor UI, config form, and post-session tracking schema. A companion NestJS + Prisma/PostgreSQL + Redis backend provides anonymous, device-ID-only social proof, weekly leaderboards, scarcity counters, and IAP validation. The codebase is documented with eight architecture decision records.",
    "results": "A fully functional, Android-buildable app spanning task management, an AI-personalized escalating notification system, a live AI chat tab that streams responses from the proxy in the active personality, five comedic personalities, four pluggable reminder types, a 5-course / 8-exercise ADHD learning system, 42 daily psychology tips, productivity stats with streaks and community comparison, a once-per-week grace escape, commitment contracts, and a native home-screen widget on both iOS (SwiftUI) and Android (Kotlin). Behind it sits a production-shaped NestJS backend with nine modules, Swagger docs, Redis-cached aggregation, an hourly percentile cron protected by a Redis distributed lock, constant-time API-key auth, and 21 spec files. The architecture is deliberately resilient: every AI path has a template fallback so notifications and chat never fail silently.",
    "businessResult": "Turned a memorable \"the app that bullies you\" hook into a real, resilient product with an AI-personalized notification engine and an anonymous social-proof backend.",
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
        "description": "A five-stage notification cascade (gentle to nuclear) whose copy is generated by Claude in the user's chosen personality, pre-rendered at task creation in one batched call, and cached on the task so OS-fired notifications always have fresh, on-voice text — with handwritten templates as a fallback."
      },
      {
        "title": "Five distinct bully personalities",
        "description": "Disappointed Friend, Drill Sergeant, Passive-Aggressive, Existential, and Hype Beast — each with its own tone instructions for the AI plus a full bank of handwritten template messages, driving both notifications and the live chat tab."
      },
      {
        "title": "Pluggable reminder types",
        "description": "Beyond standard to-dos, tasks can run as guided experiences — a posture-reset routine, a 5-phase timed salsa-practice drill, or a sit-with-boredom timer — each implemented as a registry plugin with its own full-screen executor, config form, and session-tracking schema."
      },
      {
        "title": "Live AI chat coach",
        "description": "A dedicated chat tab streams responses token-by-token from the self-hosted Claude proxy in the active personality voice, with optimistic message rendering and an in-voice fallback when the network drops."
      },
      {
        "title": "ADHD learning system",
        "description": "Five structured courses (ADHD brain science, time blindness, sustainable routines, hyperfocus, emotional regulation) plus eight quick interactive exercises with timers and badges, and 42 rotating daily psychology tips."
      },
      {
        "title": "Anonymous social-proof backend",
        "description": "A NestJS + Prisma + Redis service that tracks completions by device ID only (no PII), computes weekly leaderboards and daily percentile ranks via an hourly cron, and validates in-app purchases — fueling the app's 'you're in the bottom X%' pressure messaging."
      }
    ],
    "architecture": [
      {
        "area": "Pre-generated notifications",
        "detail": "Because OS notifications fire without the app's JS running, all escalating copy is baked at schedule time. The orchestrator schedules template notifications instantly, then asynchronously upgrades them with AI text and reschedules (src/features/notifications/orchestrator.ts, ADR-0002)."
      },
      {
        "area": "Reminder-type plugin registry",
        "detail": "Task 'experiences' (standard/posture/salsa/boredom) are a registry of plugins, each with an executor, config form, and tracking schema, rather than a switch statement — adding a type is dropping a file and registering it (src/features/reminders/registry.ts, ADR-0001)."
      },
      {
        "area": "Self-hosted Claude proxy",
        "detail": "All AI runs through a self-hosted proxy over SSE using the Opus model; the client supports both buffered and true streaming reads, strips markdown fences, and uses balanced-bracket JSON extraction for robustness. The bearer token lives in EXPO_PUBLIC env vars, never git (src/shared/services/apiClient.ts, ADR-0008)."
      },
      {
        "area": "Local-first state with persisted Zustand",
        "detail": "Domain state lives in persisted Zustand stores (task, settings, stats, learn, reminderSessions) with memoized selectors and a hydration boundary; sessions share one store partitioned by reminder type so each type carries its own tracking schema (ADR-0003, ADR-0006)."
      },
      {
        "area": "Anonymous backend with resilient aggregation",
        "detail": "NestJS service keys everything on a client-generated device UUID (no PII), Redis-caches social proof, and runs an hourly percentile-aggregation cron guarded by a Redis SET NX distributed lock; admin endpoints use a constant-time (timingSafeEqual) API-key guard (bully-api social-proof.service.ts, api-key.guard.ts)."
      }
    ],
    "highlights": [
      "Notification copy is character-budgeted to 80 chars and emoji-free in the AI prompt because it has to fit a real phone notification — the AI is constrained to ship-ready strings, not prose.",
      "Every AI path degrades gracefully: notifications fall back to handwritten personality templates, and the chat tab swaps in an in-voice error line, so the product never shows a blank or broken state when the network or model fails.",
      "Snoozing accelerates escalation by 30 minutes per snooze — a small, deliberate behavioral-design touch that punishes procrastination instead of rewarding it.",
      "Cross-platform native home-screen widget shipped via a custom Expo config plugin, with a SwiftUI implementation for iOS, a Kotlin provider for Android, and an App Group bridge so the native widget can read app data.",
      "Engineering decisions are captured in 8 lightweight ADRs (plugin registry, pre-generated roasts, partitioned sessions store, stable Zustand selectors, self-hosted proxy token handling), signaling a deliberate, documented architecture rather than ad-hoc code.",
      "The companion backend is production-shaped: Swagger docs, helmet, throttling/rate-limit guards, liveness/readiness health probes, Dockerized Postgres + Redis, a performance-index migration, and 21 unit/spec files."
    ]
  },
  "breathebreak": {
    "oneLiner": "Native macOS menu-bar coach that turns screen-heavy days into Buteyko-paced breathing check-ins",
    "description": "BreatheBreak (codebase: ScreenBreathe) is a native macOS menu-bar utility that keeps recovery breathing present during deep work without ever stealing focus. It lives entirely in the status bar as an LSUIElement agent — no Dock icon, no main window — and surfaces gentle chimes, edge toasts, and an occasional centered breathing overlay on a phase-driven schedule. A Buteyko-inspired training model automatically paces reminders from frequent (7-minute) to sustaining (30-minute) intervals, while twice-daily Control Pause checks track the user's CO2 tolerance over time. Everything is local: sessions are stored on-device with SwiftData and can be exported to CSV. Built for macOS 14+, fully App Sandbox compliant, with launch-at-login via the modern ServiceManagement API.",
    "challenge": "A breathing tool only works if people actually use it mid-task — but anything that demands you open an app, switch windows, or sit through a forced animation breaks the very focus it claims to protect. The hard problem was presence without interruption: cue recovery breathing throughout a workday while staying silent during the exact moments interruptions are most damaging — live video calls, macOS Focus/Do Not Disturb sessions, and off-hours. It also had to avoid reminder fatigue, since a fixed interval is either too naggy at first or too sparse to build a habit, and it had to do all of this inside the macOS App Sandbox, where there is no public API to even ask whether Focus mode is on.",
    "approach": "Built as a pure SwiftUI + AppKit menu-bar app using the MenuBarExtra window scene, with three deliberately different interruption tiers: a silent icon pulse (lungs.fill to wind), a small top-of-screen edge toast that runs a 70px breathing animation on every display, and a full 420x340 floating NSPanel overlay reserved for deeper resets. A DispatchSourceTimer drives the schedule and persists its next fire date so reminders survive relaunches. The reminder engine layers four independent skip guards — active-hours window (Asia/Beirut), user pause, in-meeting detection, and system Focus mode — before ever firing. Meeting detection polls NSWorkspace running apps for known conferencing bundle IDs (Zoom, Teams, Webex, FaceTime); Focus detection works around the missing public API by reading the DoNotDisturb Assertions.json database plus the controlcenter/ncprefs preference domains and listening for DND distributed notifications. A TrainingPhase state machine (training/consolidation/maintenance) auto-advances based on weekly completion rate, and a four-exercise breathing engine (Physiological Sigh, Quick Reset, Box Breath, Control Pause) renders synchronized circle-scale animations from declarative phase arrays. Sessions persist via SwiftData with Swift Charts visualizing 7-day Control Pause trends.",
    "results": "Delivered a complete, sandbox-compliant macOS 14+ companion that runs invisibly in the menu bar. It ships a live countdown popover with a +5-minute snooze and one-hour pause, a \"Breathe Now\" trigger, a context-aware reminder engine that respects calls, Focus mode, and active hours, and the full Buteyko progression with auto-leveling suggestions. The Control Pause feature gives a guided breath-hold timer, instant CO2-tolerance rating, daily streaks, rolling averages, and a Swift Charts 7-day trend sparkline. All data stays on-device via SwiftData with one-tap CSV export, configurable system chimes, launch-at-login through SMAppService, and a stealth mode for the quietest possible footprint.",
    "businessResult": "Kept recovery breathing present all day without ever pulling users out of deep work, calls, or Focus mode.",
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
        "description": "Before any reminder fires it checks four independent guards — active-hours window, manual pause, in-meeting state, and system Focus/DND — so cues never interrupt calls, focus sessions, or off-hours."
      },
      {
        "title": "Buteyko-inspired adaptive progression",
        "description": "A three-phase training model (7 → 15 → 30 minute intervals) that auto-suggests leveling up when weekly completion is high, or easing off when fatigue shows, so the cadence matches the user's habit instead of nagging."
      },
      {
        "title": "Three-tier, focus-respecting interruptions",
        "description": "Most cues are a silent menu-bar icon pulse or a small top-of-screen breathing toast; only every fourth cycle escalates to a centered floating overlay — present without being disruptive."
      },
      {
        "title": "Control Pause CO2-tolerance tracking",
        "description": "Twice-daily guided breath-hold checks with instant rating, on-device history, daily streaks, rolling averages, and a 7-day Swift Charts trend rendered right in the menu bar."
      },
      {
        "title": "Local-first data with CSV export",
        "description": "Every session is stored on-device with SwiftData and never leaves the Mac; users can export their full breathing history to CSV in one tap and reset all data on demand."
      },
      {
        "title": "Sandbox-native macOS integration",
        "description": "Runs as a Dock-less LSUIElement agent, registers launch-at-login via the modern SMAppService API, and infers macOS Focus state by reading the DoNotDisturb assertions database — all within the App Sandbox."
      }
    ],
    "architecture": [
      {
        "area": "App shell",
        "detail": "SwiftUI MenuBarExtra scene with .window style, run as an LSUIElement agent (no Dock icon). AppState is the @MainActor ObservableObject source of truth; BreathReminderManager owns scheduling; an OverlayCoordinator bridges Combine state to AppKit windows."
      },
      {
        "area": "Scheduling",
        "detail": "A DispatchSourceTimer drives repeating reminders and persists its next fire date in UserDefaults, with a one-shot-then-repeat path used for snooze and relaunch restoration. Twice-daily Control Pause checks use UNCalendarNotificationTrigger calendar notifications instead."
      },
      {
        "area": "OS integration in the sandbox",
        "detail": "Focus/DND state is inferred by reading ~/Library/DoNotDisturb/DB/Assertions.json plus the controlcenter and ncprefs preference domains and DND distributed notifications, since macOS exposes no public API. Meeting state comes from polling NSWorkspace running apps for known conferencing bundle IDs. Launch-at-login uses SMAppService.mainApp."
      },
      {
        "area": "Data layer",
        "detail": "SwiftData @Model BreathSession persists timestamp, exercise type, completion, duration, and optional Control Pause seconds. AppState runs #Predicate fetch descriptors for today's sessions, streaks, rolling CP averages, and weekly completion rate; Swift Charts renders the 7-day CP trend; CSV export streams the full history."
      },
      {
        "area": "Presentation layers",
        "detail": "Three AppKit window types coexist with SwiftUI hosting views: a borderless floating NSPanel overlay (fade in/out, joins all Spaces), a per-display NSPanel edge toast, and a standalone settings NSWindow — all driven by declarative BreathPhase animations and synchronized circle-scale transitions."
      }
    ],
    "highlights": [
      "Solved the App Sandbox Focus-mode problem with a layered fallback: parse the DoNotDisturb Assertions.json database, fall back to controlcenter/ncprefs domains, and subscribe to com.apple.dnd.stateChanged distributed notifications — with throttled, cached reads so it can be called at high frequency.",
      "Three-tier interruption design (silent icon pulse → edge toast → full overlay) keyed to cycle count and training phase, so the app stays present without ever feeling naggy.",
      "Adaptive reminder cadence: a TrainingPhase state machine that reads weekly completion rate and offers to level up at 80%+ or ease off below 50%, turning a fixed timer into a habit-building protocol.",
      "Declarative breathing engine — each exercise is a pure array of BreathPhase(instruction, duration, targetScale) values that both the full overlay and the mini toast animate identically, including a two-stage expansion for the physiological sigh.",
      "Resilient scheduling: DispatchSourceTimer with a persisted next-fire-date so reminders survive app relaunch, plus a one-shot-then-repeat pattern that makes snooze and missed-reminder handling clean.",
      "Defensive audio playback with a three-approach fallback (NSSound named → NSSound from file → AudioServices system sound) so chimes still play across macOS quirks, with a strong reference held to survive ARC mid-playback.",
      "Clean separation of concerns across AppState, BreathReminderManager, ProcessMonitor, FocusModeObserver, SoundManager and an OverlayCoordinator — Combine pipelines wire settings changes (sound, phase, CP alarm times) straight through to the right subsystem."
    ]
  },
  "linkedin-templates-extension": {
    "oneLiner": "Privacy-first LinkedIn template manager: a Manifest V3 extension with an optional team-sync backend",
    "description": "A Chrome Manifest V3 extension that lets recruiters, SDRs, and founder-led sellers store reusable LinkedIn message templates and insert them in one click, with profile variables like first name and company filled in automatically. It runs entirely on manual, user-initiated actions, so it sidesteps the bot-detection and account-ban risk that comes with LinkedIn automation tools. The extension is local-first and works fully offline; a separate, optional NestJS backend adds account-based cloud sync and shared team libraries for power users.",
    "challenge": "High-volume outreach teams send the same connection notes, follow-ups, and InMails over and over, but their snippets live scattered across Notes, Google Docs, and inboxes. The obvious fix, automation tooling, is exactly what LinkedIn scans for and bans accounts over. The hard part is doing this without automation: injecting a native-feeling control directly into LinkedIn's constantly-changing, React-rendered message composers, scraping profile data reliably from several different page layouts, and writing text into contenteditable editors in a way LinkedIn's own React state actually registers, all while keeping user data private by default.",
    "approach": "Built the extension in React 18 and TypeScript on Manifest V3, bundled with Webpack and styled with Tailwind. A content script uses a MutationObserver to watch LinkedIn's dynamic DOM and inject a LinkedIn-styled Templates button into messaging, connection-request, and InMail composers as they appear. Insertion writes via textContent and dispatches a synthetic input event so LinkedIn's React picks up the change, and an in-page dropdown offers live search plus full arrow-key/Enter/Escape keyboard navigation. A background service worker brokers all storage through a typed message protocol; templates, categories, and settings persist in chrome.storage.sync with an automatic fallback to local storage when the sync quota is exceeded. A separate NestJS + PostgreSQL backend (JWT auth with bcrypt, TypeORM, Swagger) provides optional cloud sync and premium team-shared template libraries.",
    "results": "Delivered a working, build-ready extension covering all three LinkedIn compose surfaces, with a polished popup (search, category chips, usage counts, skeleton loading, success feedback) and a full options dashboard for creating, editing, duplicating, importing, and exporting templates as JSON. Variable handling is automatic: the editor detects {{variables}} live as you type and renders them as chips, and insertion replaces them from scraped profile data, falling back to the literal token when a value is missing. Generated icons, six default categories, and seed templates ship in the box; the UI was validated against real flows with Playwright (captured screenshots of the filled editor, category view, settings, and a successful in-popup insertion). The optional backend implements register/login, template CRUD, and premium-gated team creation and membership.",
    "businessResult": "Turned scattered LinkedIn snippets into one-click, personalized outreach without the account-ban risk of automation tools.",
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
        "title": "One-click insertion across every LinkedIn composer",
        "description": "A MutationObserver injects a native-styled Templates button into messaging, connection-request, and InMail editors the moment they render, then writes text in a way LinkedIn's React state actually registers."
      },
      {
        "title": "Smart profile variables",
        "description": "Templates use {{firstName}}, {{company}}, {{jobTitle}}, and more; the extension scrapes these from the profile, messaging sidebar, or search results and substitutes them on insert, gracefully leaving the token in place when data is missing."
      },
      {
        "title": "Live variable detection in the editor",
        "description": "The template editor parses {{...}} tokens as you type and surfaces them as detected-variable chips, so users always know exactly what will be personalized."
      },
      {
        "title": "Keyboard-navigable in-page search",
        "description": "The injected dropdown supports instant search plus full arrow-key, Enter, and Escape navigation, so a template can be found and inserted without ever touching the mouse."
      },
      {
        "title": "Local-first with optional cloud and team sync",
        "description": "Everything works offline via chrome.storage.sync with a quota-aware local fallback; an optional NestJS backend adds account-based cloud sync and premium shared team libraries with owner-controlled membership."
      },
      {
        "title": "Import / export and category organization",
        "description": "Templates export to a portable JSON file and re-import in one step, organized across six color-coded categories (Sales, Recruiting, Networking, Job Search, and more) with per-template usage tracking."
      }
    ],
    "architecture": [
      {
        "area": "Content script + DOM resilience",
        "detail": "A long-lived MutationObserver watches document.body for added nodes and matches LinkedIn editor selectors, deduplicating injection with a data-templatesInjected flag so dynamic React re-renders never produce duplicate buttons."
      },
      {
        "area": "React state-safe text insertion",
        "detail": "Insertion sets editor.textContent and dispatches a bubbling synthetic 'input' Event so LinkedIn's own React controlled inputs detect the change, rather than naively setting innerHTML."
      },
      {
        "area": "Typed message bus",
        "detail": "Popup and content script never touch storage directly; they round-trip a typed MessageType protocol (GET_TEMPLATES, INSERT_TEMPLATE, INCREMENT_USAGE, etc.) through a background service worker that owns the StorageManager."
      },
      {
        "area": "Quota-aware storage layer",
        "detail": "StorageManager wraps chrome.storage.sync and catches QUOTA_BYTES errors to transparently fall back to chrome.storage.local, seeding default categories and templates on first run."
      },
      {
        "area": "Optional NestJS backend",
        "detail": "A standalone NestJS + PostgreSQL service (TypeORM entities for users, templates, teams) provides JWT/bcrypt auth, template CRUD, Swagger docs at /docs, CORS for the extension, and premium-gated team sharing where only owners can manage membership."
      }
    ],
    "highlights": [
      "XSS-safe by construction: all user-supplied template content is rendered through an escapeHtml helper (textContent round-trip) before being placed in the injected dropdown, so template bodies and category colors can never inject markup.",
      "Insertion is engineered around how LinkedIn's React composer actually works, dispatching synthetic input events so the message is recognized rather than silently dropped on send.",
      "Full keyboard accessibility in the injected UI: search auto-focus, arrow-key roving focus with scrollIntoView, Enter to insert, Escape to dismiss, plus a Ctrl/Cmd+Shift+T command shortcut and a right-click context-menu entry scoped to editable LinkedIn fields.",
      "Graceful degradation everywhere: missing profile values fall back to the literal {{token}}, sync-quota overflow falls back to local storage, and an empty state guides users to create their first template.",
      "Polished, LinkedIn-native visual craft: pulse animation on the injected button, an arrow-anchored dropdown, success toasts, skeleton-loading popup states, and color-coded category chips.",
      "Verified, not just claimed: the UI was driven and screenshotted with Playwright (popup insertion, filled editor with live variable chips, categories, and settings), and the build ships generated 16/32/48/128px icons ready for the Chrome Web Store."
    ]
  },
  "healthcare-pdf-api": {
    "oneLiner": "A HIPAA-aligned NestJS reference API for generating, encrypting, and auditing medical PDFs",
    "description": "Healthcare PDF API is a production-grade NestJS reference backend that turns structured clinical data into encrypted, audit-tracked medical PDFs. It ships five pre-built medical document templates (medical report, prescription, lab results, patient summary, CMS-1500 insurance form), AES-256-GCM encryption of both PHI payloads and the rendered PDFs on disk, scoped API-key authentication, a full HIPAA-style audit trail, async generation via a Redis-backed job queue with webhook callbacks, and automated retention/expiry. It is documented end-to-end through a custom-themed Swagger UI and a self-hosted marketing landing page served by the API itself.",
    "challenge": "A PDF renderer is the easy part of clinical document workflows. The hard part is everything around it: controlling who can generate or download a document, encrypting Protected Health Information (PHI) at rest, never leaking PHI into logs, recording an immutable trail of every generation/access/deletion event for compliance, enforcing predictable deletion rules, and giving integration teams clean, self-serve API documentation. The system needed to satisfy those security and auditability constraints while still being fast and pleasant to integrate against.",
    "approach": "Built as a modular NestJS 10 application in TypeScript with one bounded module per concern: auth, encryption, pdf-generation, templates, audit, webhooks, and health. PDFs render via headless Chrome (Puppeteer) from Handlebars templates, with both a synchronous endpoint and an asynchronous path backed by a Bull/Redis queue that retries three times with exponential backoff and fires webhook callbacks on completion or failure. A single EncryptionService centralizes AES-256-GCM for PHI objects and raw PDF buffers plus SHA-256 hashing for API keys, so secrets are never stored in plaintext. Persistence is PostgreSQL via TypeORM with versioned migrations that also seed the five default templates. The whole surface is hardened with Helmet, CORS allow-listing, two tiers of rate limiting, strict global validation pipes, and a Winston logger that regex-redacts PHI fields before anything hits disk.",
    "results": "Delivered a fully documented, Docker-deployable API with sync and async PDF generation, five seeded medical templates, scoped + hashed API keys with optional IP whitelisting and per-key daily limits, AES-256-GCM encryption of PHI and PDFs at rest, a queryable audit trail with filtering and pagination, webhook delivery with retry, Kubernetes-style health and readiness probes that check Postgres/Redis/storage, and a nightly cron that auto-expires documents past their retention window. The codebase is backed by 96 unit tests across seven service/guard suites and a branded, try-it-out Swagger reference plus a polished self-hosted landing page.",
    "businessResult": "Demonstrates enterprise backend depth: sensitive-data handling, encryption, auditability, and clean API operations a healthcare integrator could actually build on.",
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
        "description": "A single AES-256-GCM service encrypts both the clinical data payload and the rendered PDF buffer before they touch disk; even the stored file path is encrypted. API keys are SHA-256 hashed and shown to the caller exactly once."
      },
      {
        "title": "Sync and async generation with webhooks",
        "description": "Generate a PDF inline, or queue it on a Redis-backed Bull worker that retries three times with exponential backoff and POSTs a signed-style webhook (pdf.generation.completed / failed) to the caller's URL when done."
      },
      {
        "title": "Five seeded medical templates",
        "description": "Medical report, DEA-style prescription, lab results with reference ranges, patient summary, and a CMS-1500 insurance claim form — all Handlebars templates seeded via migration, with required-field metadata and optional confidential watermarking."
      },
      {
        "title": "HIPAA-style audit trail",
        "description": "Every generation, download, deletion, and auth attempt is written to an indexed audit_logs table with actor, resource, IP, user agent, and a compliance note — then queryable by action, user, resource, and date range with pagination."
      },
      {
        "title": "Scoped API-key access control",
        "description": "Per-key permissions (generate / manage templates / view audit logs), per-key daily generation limits enforced against the database, optional IP whitelisting, expiry, and usage tracking — all checked in a single guard."
      },
      {
        "title": "Automated retention and expiry",
        "description": "A nightly cron job deletes PDFs past their configurable retention window (default 30 days), removing the encrypted file and soft-deleting the record while logging the deletion for compliance."
      }
    ],
    "architecture": [
      {
        "area": "Data layer",
        "detail": "PostgreSQL via TypeORM with four core tables (api_keys, templates, pdf_generations, audit_logs) and five versioned migrations; audit_logs carries indexed columns on action, userId, organizationId, and timestamp for fast compliance queries."
      },
      {
        "area": "Async processing",
        "detail": "Bull queue on Redis decouples PDF rendering from the request; the @Processor worker renders via Puppeteer, encrypts, persists, and fires webhooks through @OnQueueCompleted / @OnQueueFailed hooks. Default rate limits are 100 req/15min globally and 10 req/15min on auth."
      },
      {
        "area": "Security & auth",
        "detail": "ApiKeyGuard validates SHA-256-hashed keys (from X-API-Key, Bearer, or query), enforces IP whitelist and expiry, and audits every attempt. Helmet (CSP + HSTS), CORS allow-listing, and global ValidationPipe with forbidNonWhitelisted lock down the surface."
      },
      {
        "area": "PHI safety",
        "detail": "Winston console transport regex-redacts ssn/dob/phone/email/address/patient_name/diagnosis from logs; PHI payloads are encrypted before persistence and never written in plaintext anywhere."
      },
      {
        "area": "Operability",
        "detail": "/health and /health/ready run parallel subsystem checks against Postgres, Redis, and the storage volume for load-balancer and Kubernetes-style probes; the service ships with a Dockerfile and docker-compose, custom-themed Swagger at /api/docs, and a self-hosted HTML landing page."
      }
    ],
    "highlights": [
      "Single source of truth for cryptography: one EncryptionService handles object encryption, file-buffer encryption, hashing, and token generation, with the GCM auth tag packed alongside the IV so tampering is detectable on decrypt.",
      "Defense-in-depth auth: hashed keys, scoped permissions, DB-enforced daily limits, IP whitelisting, expiry, and two-tier rate limiting — with failed attempts audited rather than silently dropped.",
      "Audit logging is fail-safe: a logging failure returns null instead of throwing, so compliance instrumentation can never take down a clinical request path.",
      "Real async architecture, not a fake-out: the Bull processor mirrors the sync renderer but adds queue-level retry, completion/failure webhooks, and webhookDelivered tracking persisted back to the record.",
      "Documentation as a product: branded Swagger UI with custom CSS/favicon, tagged endpoints, example DTOs, and a hand-built responsive landing page served directly from the API.",
      "Genuinely tested: 96 unit tests cover encryption round-trips, auth/guard logic, audit queries, template CRUD, webhook retries, and PDF generation paths."
    ]
  },
  "salsaflow": {
    "oneLiner": "A WebXR salsa trainer for Meta Quest that grades your dancing beat-by-beat against a live partner",
    "description": "SalsaFlow is an immersive virtual-reality salsa instructor that runs entirely in the browser on a Meta Quest headset. The student stands in a warm virtual practice studio facing a rigged dance partner, picks a move from a 15-step curriculum, and dances to spatial Latin music while the app tracks their head and hands and grades timing and movement quality on every beat. It is built on the Immersive Web SDK (IWSDK) and Three.js using an entity-component-system architecture, with motion driven by real CMU and Mixamo motion-capture data. The goal: give dancers objective, real-time feedback on posture and timing — the kind normally only available from a private instructor.",
    "challenge": "Salsa is learned by feel, and the only reliable feedback loop is an expensive private instructor watching your timing and frame. Replicating that in software is hard: you need a believable partner who moves in time, a way to measure whether the student is actually on the beat, and feedback that is legible in the middle of dancing — all running at VR frame rates (72-90 FPS, ~11-14 ms per frame) where a single per-frame allocation can drop frames and break immersion. On top of that, the source motion-capture data is raw BVH with a different skeleton than the visual dancer, and WebXR only exposes head and hand poses (no full-body tracking), so the grading system has to infer quality from sparse signals.",
    "approach": "Built as a browser-native WebXR app on the Immersive Web SDK (IWSDK) over Three.js, structured as a strict ECS with one system per file. A central BeatClock singleton acts as the single timing authority — every other system (instructor, drill, tempo trainer, metronome, footprints, rhythm bar) phase-locks to it via signal subscriptions rather than polling. The virtual partner is a Mixamo dancer FBX onto which raw CMU subject-61 salsa BVH clips are retargeted at load time via SkeletonUtils, with a custom closed-form two-bone IK solver overriding the partner's arm each frame so its hand reaches toward the student's hand. Motion grading converts the user's head-and-hand poses into head-local space, builds a per-beat movement reference from the instructor clip, and grades each beat green/yellow/red on timing and direction. Everything in the hot path is allocation-free: math objects are pre-allocated in init() and reused, with zero-allocation rolling buffers for motion sampling. Progress, unlock chains, and settings persist locally via IndexedDB with a graceful in-memory fallback.",
    "results": "A working immersive prototype with four distinct practice modes (guided Lesson, Free Practice, repetition Drill, and an adaptive Tempo Trainer that ramps BPM on good scores and backs off on poor ones), a 15-move curriculum spanning beginner to advanced with chained unlocks, five spatial-audio salsa tracks each with its own BPM, and three layers of live in-VR feedback: a head-locked rhythm bar showing early/late timing, color-coded hand glows, and beat-synced floor footprints teaching the classic 8-count step pattern. A built-in motion-capture recorder can export the student's head and full 25-joint-per-hand WebXR hand poses at 30 Hz as JSON for offline analysis. It installs as a PWA and runs offline once cached.",
    "businessResult": "Demonstrates that affordable, objective salsa coaching can run entirely in-browser on a consumer VR headset — no app store, no native build, no instructor required.",
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
        "title": "Live VR dance partner from real mocap",
        "description": "A rigged Mixamo dancer performs the selected move using raw CMU salsa BVH clips retargeted onto its skeleton at load time, with a custom two-bone IK solver making the partner reach toward the student's hand so they can take the lead grip."
      },
      {
        "title": "Beat-by-beat motion grading",
        "description": "The app samples the student's head and hands, converts them to head-local space, and grades each beat green/yellow/red on timing and movement direction against a per-beat reference derived from the instructor clip."
      },
      {
        "title": "Four practice modes including an adaptive tempo trainer",
        "description": "Guided Lesson, Free Practice, repetition Drill, and a Tempo Trainer that automatically raises BPM after consecutive good passes and eases off after poor ones — teaching the student to hold the pocket at higher tempos."
      },
      {
        "title": "Three layers of in-VR feedback",
        "description": "A head-locked rhythm bar shows whether you're early or late, color-coded glows track each hand, and eight beat-synced floor footprints teach the classic 1-2-3-pause-5-6-7-pause salsa step pattern."
      },
      {
        "title": "15-move curriculum with chained unlocks",
        "description": "Moves span beginner, intermediate and advanced (basic step through enchufla, copa, hammerlock and combos); completing a move unlocks its dependents, with progress and best scores persisted locally."
      },
      {
        "title": "Built-in mocap recorder",
        "description": "A keyboard-triggered recorder captures head pose plus all 25 WebXR hand joints per hand at 30 Hz and exports a versioned JSON session for offline movement analysis."
      }
    ],
    "architecture": [
      {
        "area": "Rendering & framework",
        "detail": "Browser-native WebXR via the Immersive Web SDK (IWSDK) over Three.js, entered with SessionMode.ImmersiveVR and hand tracking enabled (src/index.ts). Studio scene built entirely through ECS transform entities (src/scene/studio.ts)."
      },
      {
        "area": "Architecture pattern",
        "detail": "Strict entity-component-system (elics) with one system per file. Systems are registered before entities so query 'qualify' subscriptions fire. State is held in Preact Signals; systems react to signal changes instead of polling."
      },
      {
        "area": "Timing",
        "detail": "A single BeatClock singleton (src/audio/beat-clock.ts) computes beats from performance.now() and emits ticks every 60000/bpm ms, catching up missed beats after GC hitches. All audio/instructor/drill/feedback systems phase-lock to it."
      },
      {
        "area": "Motion pipeline",
        "detail": "CMU BVH clips are retargeted onto a Mixamo FBX skeleton via SkeletonUtils with an explicit CMU->Mixamo bone map; root XZ translation is stripped to keep the partner planted; a hand-authored closed-form two-bone IK solver (src/instructor/two-bone-ik.ts) overrides the arm each frame to reach the student."
      },
      {
        "area": "Persistence & offline",
        "detail": "IndexedDB-backed ProgressStore (src/persistence/progress.ts) for unlocks, best scores, practice time and settings, with a transparent in-memory fallback; ships as an installable PWA with a service worker for offline play."
      }
    ],
    "highlights": [
      "Allocation-free VR hot paths: every Vector3/Quaternion/Matrix4 used per frame is pre-allocated in init() and reused, with zero-allocation rolling ring buffers (Float32Array/Float64Array) in the motion tracker to avoid GC frame drops",
      "Hand-written closed-form two-bone IK solver with pole-vector handling and max-reach clamping, applied after the animation mixer so the partner's arm tracks the student's hand without external IK libraries",
      "Robust motion-capture retargeting between mismatched skeletons (CMU subject-61 to Mixamo) with an explicit structural bone map and root-translation stripping so the dancer stays on its riser",
      "Head-local-space motion normalization so 'hand moves forward' means the same thing regardless of which way the player is facing in the room",
      "Single-source-of-truth timing: one BeatClock drives instructor, drills, metronome, tempo trainer and all feedback, with catch-up logic for frames that exceed a beat interval",
      "Graceful degradation throughout — IndexedDB falls back to in-memory, missing hand bones fall back to the skeleton root, and listener errors are isolated so one bad subscriber can't break the beat clock",
      "Research-driven build: docs/research contains nine sourced design memos (WebXR hand tracking, beat detection, mocap, arm IK, dance-VR UX) grounding the engineering decisions"
    ]
  }
}
