// Post-build prerender: generate per-route HTML files from dist/index.html with
// route-specific title/description/OG meta, per-route JSON-LD, and a static content
// block inside #root so email link scanners, social previews, and no-JS/AI crawlers
// see real content. React replaces the #root contents on hydration, so the runtime
// app is unchanged.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const baseHtml = readFileSync(join(dist, 'index.html'), 'utf8')

const SITE_URL = 'https://likwiid.com'

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Canonical URLs use a trailing slash to match how GitHub Pages serves directory
// index.html files (a non-slash request 301s to the slash form). Keeping canonical,
// og:url, and sitemap consistent with the served URL avoids redirect chains.
const canonicalUrl = (path) => (path ? `${SITE_URL}/${path}/` : `${SITE_URL}/`)

// Visually hidden (sr-only) via INLINE styles so it applies before any CSS loads: crawlers,
// link scanners, and no-JS parsers still read it in the DOM, but it never flashes for users
// during the gap between first paint and React hydration. React replaces #root on mount.
const block = (heading, body) => `
    <div style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0">
      <h1>${escapeHtml(heading)}</h1>
      <p>${escapeHtml(body)}</p>
      <p><a href="${SITE_URL}/contact/">Contact Likwiid</a> &middot; <a href="https://wa.me/96176160979">WhatsApp +961 76 160 979</a> &middot; <a href="mailto:gabriel@likwiid.com">gabriel@likwiid.com</a></p>
    </div>`

// Replace an attribute-carrying meta/link tag, asserting the pattern actually matched so a
// future change to attribute order/quoting fails the build loudly instead of silently no-oping.
// Uses a replacer FUNCTION so values containing "$" (e.g. "$1,500") are inserted literally
// and never interpreted as regex backreferences.
function replaceOrThrow(html, regex, replacer, label) {
  let matched = false
  const out = html.replace(regex, (...args) => {
    matched = true
    return replacer(...args)
  })
  if (!matched) throw new Error(`prerender: pattern for "${label}" did not match: base HTML changed?`)
  return out
}

const caseStudies = {
  'padel-booking': {
    title: 'Padel Booking Platform: Case Study | Likwiid',
    description:
      'A mobile platform for the Lebanese padel community: league management, skill-based matchmaking, player profiles, and real-time court booking. Live on iOS and Android.',
    heading: 'Padel Booking Platform',
    summary:
      'A full-featured React Native app that moved a padel community off WhatsApp DMs into owned booking and league workflows: matchmaking, standings, and court check-in. Live on the App Store and Google Play.',
  },
  'gcg-website': {
    title: 'GCG Consulting Website: Case Study | Likwiid',
    description:
      'A premium consulting website for Ghoussoub Consulting Group with audience pathways, R&D and tutoring service pages, and conversion-ready consultation flows.',
    heading: 'GCG Website',
    summary:
      'A polished React and Vite website that made a broad, technical consulting offer feel clear and credible across organizations, research teams, students, investors, and partners.',
  },
  'sems-energy-management': {
    title: 'SEMS Smart Energy Management: Case Study | Likwiid',
    description:
      'A software-first energy platform unifying EDL grid, generator, solar, and battery data into one real-time cost-control dashboard for Lebanese households.',
    heading: 'SEMS: Smart Energy Management',
    summary:
      'A TypeScript monorepo (Expo app, NestJS API, TimescaleDB telemetry) that turns fragmented grid, generator, solar, and battery data into one source-aware cost dashboard.',
  },
  'personal-fitness-tracker': {
    title: 'Personal Fitness Tracker: Case Study | Likwiid',
    description:
      'A local-first endurance training app: daily readiness scoring, heart-rate-zone guidance, run logging, and 12-week plan progress on one on-device dashboard.',
    heading: 'Personal Fitness Tracker',
    summary:
      'An Expo React Native app with on-device SQLite storage, BLE heart-rate support, and a structured 12-week endurance plan: readiness, run history, and plan adherence in one view.',
  },
  voxflow: {
    title: 'VoxFlow Vocal Re-education App: Case Study | Likwiid',
    description:
      'A calm, offline-first vocal re-education app with guided daily practice, private on-device recordings, A/B comparison, and progress tracking.',
    heading: 'VoxFlow',
    summary:
      'A quiet, clinically grounded Expo app that packages daily vocal practice into a private, repeatable, offline-first routine: guided sessions, recordings, and a progress calendar.',
  },
  breathebreak: {
    title: 'BreatheBreak macOS Menu-bar App: Case Study | Likwiid',
    description:
      'A macOS menu-bar wellness utility that turns screen-heavy workdays into gentle breathing check-ins with phased reminders, quick resets, and Control Pause tracking.',
    heading: 'BreatheBreak',
    summary:
      'A lightweight SwiftUI menu-bar app that keeps recovery cues present but unobtrusive during deep work: phased reminders, meeting-aware smart pause, and CP trends.',
  },
  'linkedin-templates-extension': {
    title: 'LinkedIn Templates Chrome Extension: Case Study | Likwiid',
    description:
      'A privacy-first Manifest V3 Chrome extension that saves reusable LinkedIn message templates with smart variables and one-click insertion: no risky automation.',
    heading: 'LinkedIn Templates Extension',
    summary:
      'A React and TypeScript MV3 extension for outreach teams: searchable templates, smart variables like first name and company, synced settings, and local-first privacy.',
  },
  'healthcare-pdf-api': {
    title: 'Healthcare PDF API: Case Study | Likwiid',
    description:
      'A compliance-focused NestJS backend for medical PDF generation: API-key auth, AES-256-GCM encryption, audit trails, webhooks, and retention policies.',
    heading: 'Healthcare PDF API',
    summary:
      'A modular NestJS backend for controlled medical document workflows: scoped API keys, encrypted storage, traceable audit events, webhook retries, and automated expiry.',
  },
  'padel-admin-portal': {
    title: 'Padel Admin Portal: Case Study | Likwiid',
    description:
      'A web admin dashboard for the Padel platform: league lifecycle management, role-based user administration, real-time standings, and check-in controls.',
    heading: 'Padel Admin Portal',
    summary:
      'A React admin companion that gives league operators a dashboard to run leagues, manage players by role, and control check-in without touching the database.',
  },
  'ai-fitness-coach': {
    title: 'AI Fitness Coach: Case Study | Likwiid',
    description:
      'A mobile fitness app with an AI coach that generates personalized 12-week programs, gives real-time form cues, and adapts training to performance history.',
    heading: 'AI Fitness Coach',
    summary:
      'An Expo app with an LLM-powered coach that knows the user’s full program and history: form cues, RPE-based load recommendations, and weekly progress summaries.',
  },
  'bully-ai': {
    title: 'Bully.ai Productivity App: Case Study | Likwiid',
    description:
      'A React Native productivity app that fights procrastination with escalating notifications, five bully personalities, and an ADHD toolbox.',
    heading: 'Bully.ai',
    summary:
      'A behavioral-psychology productivity app with an escalating notification system, five personalities, commitment contracts, and an ADHD toolbox of courses and exercises.',
  },
  salsaflow: {
    title: 'SalsaFlow Motion Trainer: Case Study | Likwiid',
    description:
      'An Expo mobile app using device sensors and AI for real-time salsa movement analysis, posture scoring, and personalized drill feedback.',
    heading: 'SalsaFlow',
    summary:
      'An Expo app using accelerometer, gyroscope, and camera with a rule-based AI coach to give dancers affordable, objective feedback on posture, timing, and movement.',
  },
}

const routes = {
  '': {
    title: 'Likwiid | Founder-Led Software Studio',
    description:
      'Likwiid is a founder-led software studio. We lead with strategy before code (landscape, audit, and blueprint), then architect, build, and evolve web and mobile products. Based in Beirut, shipping worldwide.',
    content: block(
      'Likwiid: Software that flows',
      'A founder-led software studio in Beirut shipping web and mobile products worldwide. We lead with strategy before code: booking websites, full-stack development, cloud architecture, and AI integration. Replies within 24 hours.'
    ),
  },
  services: {
    title: 'Services | Likwiid',
    description:
      'Booking and ordering websites, full-stack web and mobile development, cloud and DevOps, AI integration and AI-code remediation, and software architecture consulting.',
    content: block(
      'Services',
      'Booking and ordering websites, full-stack web and mobile development, cloud and DevOps, AI integration, AI-code remediation, and software architecture consulting.'
    ),
  },
  work: {
    title: 'Work | Likwiid',
    description:
      'Selected work: booking platforms, healthcare APIs, IoT energy management, and AI products built by Likwiid. We also build direct booking websites for small hotels, guesthouses, and tour operators.',
    content: block(
      'Our Work',
      'Selected projects: a court booking platform live on iOS and Android with an admin portal, a healthcare PDF API, IoT energy management, and productivity tools. We also build direct booking websites for small hotels, guesthouses, and tour operators.'
    ),
    hreflang: true,
  },
  'pt/work': {
    lang: 'pt',
    title: 'Projetos | Likwiid',
    description:
      'Projetos selecionados: plataformas de reservas, APIs de saúde, gestão de energia IoT e produtos com IA construídos pela Likwiid. Criamos sites com reservas diretas para pequenos hotéis, casas de hóspedes e operadores turísticos.',
    content: block(
      'Os nossos projetos',
      'Projetos selecionados: uma plataforma de reservas de campos disponível para iOS e Android com portal de administração, uma API de documentos de saúde, gestão de energia IoT e ferramentas de produtividade. Também criamos sites com reservas diretas para pequenos hotéis, casas de hóspedes e operadores turísticos.'
    ),
    hreflang: true,
  },
  'es/work': {
    lang: 'es',
    title: 'Proyectos | Likwiid',
    description:
      'Proyectos seleccionados: plataformas de reservas, APIs sanitarias, gestión energética IoT y productos con IA creados por Likwiid. Creamos webs con reserva directa para hoteles pequeños, casas de huéspedes y operadores turísticos.',
    content: block(
      'Nuestro trabajo',
      'Proyectos seleccionados: una plataforma de reservas de pistas disponible en iOS y Android con portal de administración, una API de documentos sanitarios, gestión energética IoT y herramientas de productividad. También creamos webs con reserva directa para hoteles pequeños, casas de huéspedes y operadores turísticos.'
    ),
    hreflang: true,
  },
  'it/work': {
    lang: 'it',
    title: 'Progetti | Likwiid',
    description:
      'Progetti selezionati: piattaforme di prenotazione, API sanitarie, gestione energetica IoT e prodotti con IA realizzati da Likwiid. Creiamo siti con prenotazione diretta per piccoli hotel, guest house e tour operator.',
    content: block(
      'I nostri progetti',
      'Progetti selezionati: una piattaforma di prenotazione campi disponibile su iOS e Android con portale di amministrazione, una API per documenti sanitari, gestione energetica IoT e strumenti di produttività. Creiamo anche siti con prenotazione diretta per piccoli hotel, guest house e tour operator.'
    ),
    hreflang: true,
  },
  'fr/work': {
    lang: 'fr',
    title: 'Projets | Likwiid',
    description:
      "Projets sélectionnés : plateformes de réservation, API santé, gestion d'énergie IoT et produits IA créés par Likwiid. Nous créons des sites avec réservation directe pour petits hôtels, maisons d'hôtes et voyagistes.",
    content: block(
      'Nos projets',
      "Projets sélectionnés : une plateforme de réservation de terrains disponible sur iOS et Android avec portail d'administration, une API de documents de santé, la gestion d'énergie IoT et des outils de productivité. Nous créons aussi des sites avec réservation directe pour petits hôtels, maisons d'hôtes et voyagistes."
    ),
    hreflang: true,
  },
  about: {
    title: 'About | Likwiid',
    description:
      'Likwiid is a founder-led software studio led by Gabriel Ghoussoub, a full-stack engineer with 5+ years across fintech, insurtech, satellite monitoring, IoT, and VR.',
    content: block(
      'About Likwiid',
      'A founder-led studio led by Gabriel Ghoussoub, a full-stack engineer with 5+ years across fintech, insurtech, satellite monitoring, IoT, and VR. Based in Beirut, working worldwide.'
    ),
  },
  contact: {
    title: 'Contact | Likwiid',
    description:
      'Start a conversation about your project. WhatsApp +961 76 160 979 or gabriel@likwiid.com. We reply within 24 hours.',
    content: block(
      'Contact',
      'Have a project in mind? Reach out on WhatsApp at +961 76 160 979 or email gabriel@likwiid.com. We reply within 24 hours.'
    ),
  },
  'booking-websites': {
    title: 'Booking Websites for Salons, Clinics & Small Hotels | Likwiid',
    description:
      'Simple, fast websites where your customers book and pay online. From $1,500, most projects $8,000 to $15,000, delivered in 2 to 4 weeks. Commission-free bookings you own.',
    content: block(
      'Websites with online booking for salons, clinics, and small hotels',
      'Your customers want to book at 11pm from their phone. We build simple, fast websites where customers book and pay online: real availability, deposits, automatic reminders, and a site you own. From $1,500, most projects $8,000 to $15,000, in 2 to 4 weeks.'
    ),
  },
  direct: {
    title: 'Likwiid Direct, a Direct Booking Engine for Small Stays | Likwiid',
    description:
      "A commission-free booking engine that lives inside your existing website. Options that change the price, card deposits, and the guest's language done properly. Try the live demo.",
    content: block(
      'Likwiid Direct: bookings that flow straight to you',
      'Likwiid Direct is a direct booking engine for small stays and experiences. No commission, no middleman, no lock-in. You keep your domain, your payment account and your guest list. Try the live demo: Quinta Likwiid is a fictional guesthouse built so you can click through the exact engine we would build for you, with options that change the price, card deposits, and every step in the language the guest picks.'
    ),
  },
  products: {
    title: 'Products | Likwiid',
    description:
      'Likwiid builds two products: Likwiid Direct, a commission-free direct booking engine for small stays, and Likwiid Frame, a portfolio engine photographers own as files. Both have live demos you can try.',
    content: block(
      'Products built by Likwiid',
      'Beyond client work, Likwiid builds two products. Likwiid Direct is a commission-free direct booking engine for small stays and experiences that lives inside the website you already have. Likwiid Frame is a premium portfolio engine for photographers, with client proofing, a print shop and booking, owned as files with no subscription. Both have live demos with fictional brands and simulated payment steps.'
    ),
  },
  frame: {
    title: 'Likwiid Frame, a Portfolio Engine for Photographers | Likwiid',
    description:
      'A premium photographer portfolio you own as files: client proofing, a print shop, booking, and an image pipeline that keeps your licence metadata. Pay once, no subscription. Try the live demos.',
    content: block(
      'Likwiid Frame: a portfolio you own, down to the files',
      'Likwiid Frame is a config-driven portfolio engine for photographers. One config folder plus your photo folders becomes a premium site with client proofing, a print shop and booking. You pay once, keep your own domain, and own the site as files. Try the live demos: Ana Likwiid Photography and Studio Likwiid are fictional brands built so you can click through the exact engine we would build for you, including the owner panel.'
    ),
  },
  privacy: {
    title: 'Privacy Policy | Likwiid',
    description: 'Likwiid privacy policy.',
    content: '',
    robots: 'noindex,follow',
  },
  'beit-toureef-walkthrough': {
    title: 'Beit Toureef Walkthrough | Likwiid',
    description: 'Private website walkthrough prepared for Beit Toureef.',
    content: '',
    robots: 'noindex,nofollow',
  },
  'beit-toureef-poc': {
    title: 'Beit Toureef Walkthrough | Likwiid',
    description: 'Private website walkthrough prepared for Beit Toureef.',
    content: '',
    robots: 'noindex,nofollow',
  },
}

const workSlugs = Object.keys(caseStudies)
for (const slug of workSlugs) {
  const cs = caseStudies[slug]
  routes[`work/${slug}`] = {
    title: cs.title,
    description: cs.description,
    content: block(cs.heading, cs.summary),
    breadcrumb: [
      { name: 'Work', path: 'work' },
      { name: cs.heading, path: `work/${slug}` },
    ],
    creativeWork: cs,
  }
}

const BREADCRUMB_LABELS = {
  services: 'Services',
  work: 'Work',
  about: 'About',
  contact: 'Contact',
  'booking-websites': 'Booking Websites',
  direct: 'Likwiid Direct',
  frame: 'Likwiid Frame',
  products: 'Products',
}

function jsonLdGraph(path, meta) {
  const graph = []
  const items = [{ name: 'Home', path: '' }]
  const crumb = meta.breadcrumb ?? (BREADCRUMB_LABELS[path] ? [{ name: BREADCRUMB_LABELS[path], path }] : null)
  if (crumb) {
    items.push(...crumb)
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: canonicalUrl(item.path),
      })),
    })
  }
  if (meta.creativeWork) {
    graph.push({
      '@type': 'CreativeWork',
      name: meta.creativeWork.heading,
      headline: meta.creativeWork.heading,
      description: meta.creativeWork.description,
      url: canonicalUrl(path),
      creator: { '@type': 'Organization', name: 'Likwiid', url: SITE_URL },
      inLanguage: 'en',
    })
  }
  if (!graph.length) return ''
  const doc = { '@context': 'https://schema.org', '@graph': graph }
  return `\n    <script type="application/ld+json">\n${JSON.stringify(doc, null, 2)}\n    </script>`
}

// The /work cluster: every localized variant plus x-default pointing at English, per
// Google's localized-pages guidance. Injected into each of the five work routes.
const WORK_HREFLANG_LINKS = [
  ['en', `${SITE_URL}/work/`],
  ['pt', `${SITE_URL}/pt/work/`],
  ['es', `${SITE_URL}/es/work/`],
  ['it', `${SITE_URL}/it/work/`],
  ['fr', `${SITE_URL}/fr/work/`],
  ['x-default', `${SITE_URL}/work/`],
]
  .map(([lang, href]) => `    <link rel="alternate" hreflang="${lang}" href="${href}" />`)
  .join('\n')

function renderRoute(path, meta) {
  let html = baseHtml
  const url = canonicalUrl(path)
  const noindex = Boolean(meta.robots)

  html = replaceOrThrow(
    html,
    /<html lang="en"/,
    () => `<html lang="${meta.lang ?? 'en'}"`,
    'html lang'
  )
  html = replaceOrThrow(html, /<title>[^<]*<\/title>/, () => `<title>${escapeHtml(meta.title)}</title>`, 'title')
  html = replaceOrThrow(
    html,
    /<meta name="description" content="[^"]*"/,
    () => `<meta name="description" content="${escapeHtml(meta.description)}"`,
    'description'
  )
  html = replaceOrThrow(
    html,
    /<meta property="og:title" content="[^"]*"/,
    () => `<meta property="og:title" content="${escapeHtml(meta.title)}"`,
    'og:title'
  )
  html = replaceOrThrow(
    html,
    /<meta property="og:description" content="[^"]*"/,
    () => `<meta property="og:description" content="${escapeHtml(meta.description)}"`,
    'og:description'
  )
  html = replaceOrThrow(
    html,
    /<meta property="og:url" content="[^"]*"/,
    () => `<meta property="og:url" content="${url}"`,
    'og:url'
  )
  html = replaceOrThrow(
    html,
    /<meta name="twitter:title" content="[^"]*"/,
    () => `<meta name="twitter:title" content="${escapeHtml(meta.title)}"`,
    'twitter:title'
  )
  html = replaceOrThrow(
    html,
    /<meta name="twitter:description" content="[^"]*"/,
    () => `<meta name="twitter:description" content="${escapeHtml(meta.description)}"`,
    'twitter:description'
  )

  // Canonical: point to self for indexable pages; for noindex pages, swap the canonical
  // for a robots meta so crawlers get an explicit exclusion and no competing canonical.
  html = replaceOrThrow(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    () =>
      noindex
        ? `<meta name="robots" content="${meta.robots}" />`
        : `<link rel="canonical" href="${url}" />`,
    'canonical'
  )

  if (meta.hreflang) {
    html = html.replace('</head>', `${WORK_HREFLANG_LINKS}\n  </head>`)
  }

  if (!noindex) {
    const graph = jsonLdGraph(path, meta)
    if (graph) html = html.replace('</head>', `${graph}\n  </head>`)
  }

  if (meta.content) {
    html = html.replace('<div id="root"></div>', `<div id="root">${meta.content}</div>`)
  }
  return html
}

let count = 0
for (const [path, meta] of Object.entries(routes)) {
  const html = renderRoute(path, meta)
  if (path === '') {
    writeFileSync(join(dist, 'index.html'), html)
  } else {
    mkdirSync(join(dist, path), { recursive: true })
    writeFileSync(join(dist, path, 'index.html'), html)
  }
  count++
}

// SPA fallback for unknown routes: built from the ORIGINAL base HTML (empty #root), with a
// 404-specific title, noindex, and no canonical so GitHub Pages serves a proper 404 status
// without indexing the shell as a duplicate of the homepage.
let notFound = replaceOrThrow(
  baseHtml,
  /<title>[^<]*<\/title>/,
  () => '<title>Page not found (404) | Likwiid</title>',
  '404 title'
)
notFound = replaceOrThrow(
  notFound,
  /<link rel="canonical" href="[^"]*" \/>/,
  () => '<meta name="robots" content="noindex,follow" />',
  '404 canonical'
)
notFound = notFound.replace(
  '<div id="root"></div>',
  `<div id="root">${block('Page not found', 'The page you are looking for does not exist. Return to the Likwiid home page or get in touch.')}</div>`
)
writeFileSync(join(dist, '404.html'), notFound)

console.log(`prerender: wrote ${count} routes + 404.html`)
