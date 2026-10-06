// Post-build prerender: generate per-route HTML files from dist/index.html with
// route-specific title/description/OG meta, per-route JSON-LD, and a static content
// block inside #root so email link scanners, social previews, and no-JS/AI crawlers
// see real content. React replaces the #root contents on hydration, so the runtime
// app is unchanged.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
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

// Titles match CaseStudy.tsx (`${project.title}: Case Study | Likwiid`) so document.title
// does not change after hydration. Copy mirrors oneLiner/description in src/data/projects.ts.
const caseStudies = {
  'padel-booking': {
    title: 'Padel Booking Platform: Case Study | Likwiid',
    description:
      'A booking and league app for padel players and clubs in Lebanon, live on the App Store and Google Play, with a web admin portal for league organizers.',
    heading: 'Padel Booking Platform',
    summary:
      'Padel Lebanon lets players book courts, find matches at their level and play in organized leagues. It is live on iOS and Android. A web admin portal lets organizers create leagues, manage players and staff, and open or close weekly check-in, while pairings, scores and standings update automatically.',
  },
  'gcg-website': {
    title: 'GCG Website: Case Study | Likwiid',
    description:
      'Website for a science consulting firm, with a clear path for every audience: companies, research teams, students, families and investors.',
    heading: 'GCG Website',
    summary:
      'Ghoussoub Consulting Group offers research support, tutoring and investment advice to very different clients. The new website gives each audience its own clear starting point and an easy way to request a consultation.',
  },
  voxflow: {
    title: 'VoxFlow: Case Study | Likwiid',
    description:
      'A private, offline app that guides people through 10 minutes of daily voice practice, with recordings that never leave the phone.',
    heading: 'VoxFlow',
    summary:
      'VoxFlow puts the timer, instructions, recorder and reading material for voice recovery into one calm 10 minute routine. It needs no account, keeps every recording on the phone, and lets users compare an early recording with a recent one.',
  },
  'personal-fitness-tracker': {
    title: 'Personal Fitness Tracker: Case Study | Likwiid',
    description:
      'A running coach app that guides each run by heart rate through a 12 week plan, fully offline.',
    heading: 'Personal Fitness Tracker',
    summary:
      'The app connects to a chest heart rate strap and coaches the runner live through a 12 week plan. After each run it explains what happened and how training is going. All data stays on the phone.',
  },
  breathebreak: {
    title: 'BreatheBreak: Case Study | Likwiid',
    description:
      'A Mac menu bar app that reminds desk workers to take short breathing breaks, and stays quiet during calls and Focus mode.',
    heading: 'BreatheBreak',
    summary:
      'BreatheBreak sits in the Mac menu bar and prompts short breathing exercises during the workday. It stays quiet during calls, in Focus mode and outside working hours, and all data stays on the Mac.',
  },
  'sems-energy-management': {
    title: 'SEMS: Smart Energy Management: Case Study | Likwiid',
    description:
      'An app showing Lebanese homes where their power comes from and what it costs: grid, generator, solar and batteries in one view.',
    heading: 'SEMS: Smart Energy Management',
    summary:
      'Many Lebanese homes switch between grid power, a generator, solar panels and batteries in a single day. SEMS shows in one place which source is running, what each device uses and what it all costs.',
  },
}

const routes = {
  '': {
    title: 'Likwiid | Software Studio',
    description:
      'Likwiid is a founder-led studio in Beirut that builds booking websites, web apps and mobile apps for independent hotels and founders worldwide.',
    content: block(
      'Booking websites and apps for independent hotels and founders.',
      'Likwiid is run by Gabriel Ghoussoub from Beirut, works with clients worldwide, and replies within 24 hours. We build booking websites, web and mobile products, AI integrations, and rescue stuck codebases.'
    ),
  },
  services: {
    title: 'Services | Likwiid',
    description:
      'Four kinds of work: web and mobile products, booking websites for hospitality and appointments from $1,500, AI integration and automation, and architecture, cloud and code rescue.',
    content: block(
      'Services',
      'Web and mobile products built end to end. Booking websites for hospitality and appointments, from $1,500. AI integration and automation that saves real time. Architecture, cloud and code rescue for stuck codebases. Founder-led, two to three projects at a time, replies within 24 hours.'
    ),
  },
  work: {
    title: 'Work | Likwiid',
    description:
      'Selected work by Likwiid: a padel booking platform live on iOS and Android, a consulting website, and studio products for voice practice, running, breathing breaks and home energy.',
    content: block(
      'Our Work',
      'Client work: a padel booking and league platform live on iOS and Android with a web admin portal, and a website for a science consulting firm. Studio products: VoxFlow, Personal Fitness Tracker, BreatheBreak and SEMS. We also build direct booking websites for small hotels, guesthouses, and tour operators.'
    ),
    hreflang: true,
  },
  'pt/work': {
    lang: 'pt',
    title: 'Projetos | Likwiid',
    description:
      'Projetos selecionados da Likwiid: uma plataforma de reservas de padel disponível para iOS e Android, um site de consultoria e produtos próprios para prática vocal, corrida, pausas de respiração e energia doméstica.',
    content: block(
      'Os nossos projetos',
      'Trabalho para clientes: uma plataforma de reservas e ligas de padel disponível para iOS e Android com portal de administração web, e um site para uma consultora científica. Produtos próprios: VoxFlow, Personal Fitness Tracker, BreatheBreak e SEMS. Também criamos sites com reservas diretas para pequenos hotéis, casas de hóspedes e operadores turísticos.'
    ),
    hreflang: true,
  },
  'es/work': {
    lang: 'es',
    title: 'Proyectos | Likwiid',
    description:
      'Proyectos seleccionados de Likwiid: una plataforma de reservas de pádel disponible en iOS y Android, una web de consultoría y productos propios para práctica vocal, running, pausas de respiración y energía doméstica.',
    content: block(
      'Nuestro trabajo',
      'Trabajo para clientes: una plataforma de reservas y ligas de pádel disponible en iOS y Android con portal de administración web, y una web para una consultora científica. Productos propios: VoxFlow, Personal Fitness Tracker, BreatheBreak y SEMS. También creamos webs con reserva directa para hoteles pequeños, casas de huéspedes y operadores turísticos.'
    ),
    hreflang: true,
  },
  'it/work': {
    lang: 'it',
    title: 'Progetti | Likwiid',
    description:
      'Progetti selezionati di Likwiid: una piattaforma di prenotazione padel disponibile su iOS e Android, un sito di consulenza e prodotti propri per pratica vocale, corsa, pause di respirazione ed energia domestica.',
    content: block(
      'I nostri progetti',
      'Lavori per clienti: una piattaforma di prenotazione e campionati di padel disponibile su iOS e Android con portale di amministrazione web, e un sito per una società di consulenza scientifica. Prodotti propri: VoxFlow, Personal Fitness Tracker, BreatheBreak e SEMS. Creiamo anche siti con prenotazione diretta per piccoli hotel, guest house e tour operator.'
    ),
    hreflang: true,
  },
  'fr/work': {
    lang: 'fr',
    title: 'Projets | Likwiid',
    description:
      "Projets sélectionnés de Likwiid : une plateforme de réservation de padel disponible sur iOS et Android, un site de conseil et des produits maison pour la pratique vocale, la course, les pauses respiration et l'énergie domestique.",
    content: block(
      'Nos projets',
      "Projets clients : une plateforme de réservation et de ligues de padel disponible sur iOS et Android avec portail d'administration web, et un site pour un cabinet de conseil scientifique. Produits maison : VoxFlow, Personal Fitness Tracker, BreatheBreak et SEMS. Nous créons aussi des sites avec réservation directe pour petits hôtels, maisons d'hôtes et voyagistes."
    ),
    hreflang: true,
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
  contact: 'Contact',
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
  () => '<title>Page Not Found | Likwiid</title>',
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

// Removed pages: tiny standalone documents (not the app shell) so old links, bookmarks
// and crawlers land on the replacement page. The client-side <Navigate replace> routes in
// App.tsx cover in-app navigation; these cover direct hits on the static host.
const redirects = {
  about: { target: `${SITE_URL}/#founder`, canonical: canonicalUrl('') },
  'booking-websites': { target: canonicalUrl('direct') },
  'work/ai-fitness-coach': { target: canonicalUrl('work') },
  'work/bully-ai': { target: canonicalUrl('work') },
  'work/salsaflow': { target: canonicalUrl('work') },
  'work/healthcare-pdf-api': { target: canonicalUrl('work') },
  'work/linkedin-templates-extension': { target: canonicalUrl('work') },
  'work/padel-admin-portal': { target: canonicalUrl('work/padel-booking') },
}

const redirectStub = (target, canonical) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Moved | Likwiid</title>
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta http-equiv="refresh" content="0; url=${escapeHtml(target)}" />
  </head>
  <body>
    <p>This page has moved. <a href="${escapeHtml(target)}">Continue to ${escapeHtml(target)}</a>.</p>
  </body>
</html>
`

for (const [path, { target, canonical }] of Object.entries(redirects)) {
  if (routes[path]) throw new Error(`prerender: "${path}" is both a route and a redirect`)
  mkdirSync(join(dist, path), { recursive: true })
  writeFileSync(join(dist, path, 'index.html'), redirectStub(target, canonical ?? target))
}

console.log(`prerender: wrote ${count} routes, ${Object.keys(redirects).length} redirect stubs + 404.html`)
