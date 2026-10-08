// Post-build prerender: generate per-route HTML files from dist/index.html with
// route-specific title/description/OG meta, per-route JSON-LD, and the page itself rendered
// into #root by the server bundle (src/entry-server.tsx, built to dist-ssr/ by
// `vite build --ssr`). The browser hydrates that HTML (src/main.tsx), so visitors, email link
// scanners, social previews and no-JS crawlers all get the real page before any JavaScript.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const localesDir = join(__dirname, '..', 'src', 'locales')
const baseHtml = readFileSync(join(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(join(__dirname, '..', 'dist-ssr', 'entry-server.js')).href)

const SITE_URL = 'https://likwiid.com'

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Canonical URLs use a trailing slash to match how GitHub Pages serves directory
// index.html files (a non-slash request 301s to the slash form). Keeping canonical,
// og:url, and sitemap consistent with the served URL avoids redirect chains.
const canonicalUrl = (path) => (path ? `${SITE_URL}/${path}/` : `${SITE_URL}/`)

// Replace an attribute-carrying meta/link tag, asserting the pattern actually matched so a
// future change to attribute order/quoting fails the build loudly instead of silently no-oping.
// Uses a replacer FUNCTION so values containing "$" are inserted literally
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
  },
  'gcg-website': {
    title: 'GCG Website: Case Study | Likwiid',
    description:
      'Website for a science consulting firm, with a clear path for every audience: companies, research teams, students, families and investors.',
    heading: 'GCG Website',
  },
  voxflow: {
    title: 'VoxFlow: Case Study | Likwiid',
    description:
      'A private, offline app that guides people through 10 minutes of daily voice practice, with recordings that never leave the phone.',
    heading: 'VoxFlow',
  },
  'personal-fitness-tracker': {
    title: 'Personal Fitness Tracker: Case Study | Likwiid',
    description:
      'A running coach app that guides each run by heart rate through a 12 week plan, fully offline.',
    heading: 'Personal Fitness Tracker',
  },
  breathebreak: {
    title: 'BreatheBreak: Case Study | Likwiid',
    description:
      'A Mac menu bar app that reminds desk workers to take short breathing breaks, and stays quiet during calls and Focus mode.',
    heading: 'BreatheBreak',
  },
  'sems-energy-management': {
    title: 'SEMS: Smart Energy Management: Case Study | Likwiid',
    description:
      'An app showing Lebanese homes where their power comes from and what it costs: grid, generator, solar and batteries in one view.',
    heading: 'SEMS: Smart Energy Management',
  },
}

const routes = {
  privacy: {
    title: 'Privacy Policy | Likwiid',
    description: 'Likwiid privacy policy.',
    robots: 'noindex,follow',
  },
  'beit-toureef-walkthrough': {
    title: 'Beit Toureef Walkthrough | Likwiid',
    description: 'Private website walkthrough prepared for Beit Toureef.',
    robots: 'noindex,nofollow',
  },
  'beit-toureef-poc': {
    title: 'Beit Toureef Walkthrough | Likwiid',
    description: 'Private website walkthrough prepared for Beit Toureef.',
    robots: 'noindex,nofollow',
  },
}

// Localized pages in every language (/, /pt/, /direct/, /fr/contact/, ...): titles come from
// the same locale keys the pages set as document.title after hydration, descriptions and
// structured data labels from the `seo` block. Keep the page list in sync with
// src/i18n/localeRoutes.ts and public/sitemap.xml.
const LANGUAGES = ['en', 'pt', 'es', 'it', 'fr']
const PREFIXED_LANGUAGES = LANGUAGES.slice(1)
const OG_LOCALES = { en: 'en_GB', pt: 'pt_PT', es: 'es_ES', it: 'it_IT', fr: 'fr_FR' }
const localizedRoute = (lang, page) => (lang === 'en' ? page : page ? `${lang}/${page}` : lang)
const LOCALIZED_PAGES = {
  '': (l) => ({ title: l.home.documentTitle, description: l.seo.home.description }),
  services: (l) => ({ title: l.services.documentTitle, description: l.seo.services.description, crumb: l.nav.services }),
  work: (l) => ({ title: l.portfolio.documentTitle, description: l.seo.work.description, crumb: l.nav.work }),
  contact: (l) => ({ title: l.contact.documentTitle, description: l.seo.contact.description, crumb: l.nav.contact }),
  direct: (l) => ({
    title: l.direct.docTitle,
    description: l.seo.direct.description,
    crumb: 'Likwiid Direct',
    service: { name: 'Likwiid Direct', serviceType: l.seo.direct.serviceType },
  }),
  frame: (l) => ({
    title: l.frame.docTitle,
    description: l.seo.frame.description,
    crumb: 'Likwiid Frame',
    service: { name: 'Likwiid Frame', serviceType: l.seo.frame.serviceType },
  }),
  products: (l) => ({ title: l.products.docTitle, description: l.seo.products.description, crumb: l.nav.products }),
}
const locales = Object.fromEntries(
  LANGUAGES.map((lang) => [lang, JSON.parse(readFileSync(join(localesDir, `${lang}.json`), 'utf8'))])
)
for (const lang of LANGUAGES) {
  const locale = locales[lang]
  for (const [page, pick] of Object.entries(LOCALIZED_PAGES)) {
    const { title, description, crumb, service } = pick(locale)
    if (!title || !description) throw new Error(`prerender: missing ${lang} copy for ${page || 'home'}`)
    const path = localizedRoute(lang, page)
    routes[path] = {
      lang,
      title,
      description,
      hreflang: true,
      breadcrumb: crumb ? [{ name: crumb, path }] : undefined,
      service,
    }
  }
}

const workSlugs = Object.keys(caseStudies)
for (const slug of workSlugs) {
  const cs = caseStudies[slug]
  routes[`work/${slug}`] = {
    title: cs.title,
    description: cs.description,
    breadcrumb: [
      { name: 'Work', path: 'work' },
      { name: cs.heading, path: `work/${slug}` },
    ],
    creativeWork: cs,
  }
}

function jsonLdGraph(path, meta) {
  const graph = []
  const lang = meta.lang ?? 'en'
  const items = [{ name: locales[lang].seo.breadcrumbHome, path: localizedRoute(lang, '') }]
  if (meta.breadcrumb) {
    items.push(...meta.breadcrumb)
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
  if (meta.service) {
    // No offers or prices: the site publishes none, and this is a description of the
    // service, not a rich result request.
    graph.push({
      '@type': 'Service',
      '@id': `${canonicalUrl(path)}#service`,
      name: meta.service.name,
      serviceType: meta.service.serviceType,
      description: meta.description,
      url: canonicalUrl(path),
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'Worldwide',
      inLanguage: lang,
    })
  }
  if (meta.creativeWork) {
    graph.push({
      '@type': 'CreativeWork',
      name: meta.creativeWork.heading,
      headline: meta.creativeWork.heading,
      description: meta.creativeWork.description,
      url: canonicalUrl(path),
      creator: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    })
  }
  if (!graph.length) return ''
  const doc = { '@context': 'https://schema.org', '@graph': graph }
  return `\n    <script type="application/ld+json">\n${JSON.stringify(doc, null, 2)}\n    </script>`
}

// A localized cluster (home, services, contact, work, direct, frame, products): every
// language variant plus x-default pointing at English, per Google's localized-pages
// guidance. Injected into each route of the cluster.
function hreflangLinks(path) {
  const page = path.replace(/^(?:pt|es|it|fr)(?:\/|$)/, '')
  return [
    ['en', canonicalUrl(page)],
    ...PREFIXED_LANGUAGES.map((lang) => [lang, canonicalUrl(localizedRoute(lang, page))]),
    ['x-default', canonicalUrl(page)],
  ]
    .map(([lang, href]) => `    <link rel="alternate" hreflang="${lang}" href="${href}" />`)
    .join('\n')
}

// Share card per route: the product pages (and their localized variants) get their own
// card so links pasted into WhatsApp or email preview the product; everything else keeps
// the studio card. og:image and twitter:image always match.
const OG_IMAGES = { direct: 'og-direct.png', frame: 'og-frame.png' }
const ogImageUrl = (path) => `${SITE_URL}/${OG_IMAGES[path.replace(/^(?:pt|es|it|fr)\//, '')] ?? 'og-image.png'}`

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
  const lang = meta.lang ?? 'en'
  const ogLocale = OG_LOCALES[lang]
  const ogAlternates = meta.hreflang
    ? LANGUAGES.filter((other) => other !== lang)
        .map((other) => `\n    <meta property="og:locale:alternate" content="${OG_LOCALES[other]}" />`)
        .join('')
    : ''
  html = replaceOrThrow(
    html,
    /<meta property="og:locale" content="[^"]*" \/>/,
    () => `<meta property="og:locale" content="${ogLocale}" />${ogAlternates}`,
    'og:locale'
  )
  const ogImage = ogImageUrl(path)
  html = replaceOrThrow(
    html,
    /<meta property="og:image" content="[^"]*"/,
    () => `<meta property="og:image" content="${ogImage}"`,
    'og:image'
  )
  html = replaceOrThrow(
    html,
    /<meta name="twitter:image" content="[^"]*"/,
    () => `<meta name="twitter:image" content="${ogImage}"`,
    'twitter:image'
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
    html = html.replace('</head>', `${hreflangLinks(path)}\n  </head>`)
  }

  if (!noindex) {
    const graph = jsonLdGraph(path, meta)
    if (graph) html = html.replace('</head>', `${graph}\n  </head>`)
  }

  return html
}

// URL the static host serves a route at (GitHub Pages redirects /direct to /direct/). The
// client only hydrates when its location.pathname is exactly this (see src/main.tsx).
const servedPath = (path) => (path ? `/${path}/` : '/')

// Routes that render a client-side redirect: there is no page to prerender, so #root stays
// empty and the browser renders (and redirects) as before.
const CLIENT_ONLY = new Set(['beit-toureef-poc'])

// The rendered page goes into #root, stamped with the URL it was rendered for.
async function withAppHtml(html, url, expectedLang) {
  const app = await render(url)
  if (app.lang !== expectedLang) throw new Error(`prerender: ${url} rendered in "${app.lang}", expected "${expectedLang}"`)
  if (app.html.includes('aria-label="Loading"')) throw new Error(`prerender: ${url} rendered its loading fallback`)
  return replaceOrThrow(
    html,
    /<div id="root"><\/div>/,
    () => `<div id="root" data-prerendered="${escapeHtml(url)}">${app.html}</div>`,
    `#root for ${url}`
  )
}

let count = 0
for (const [path, meta] of Object.entries(routes)) {
  let html = renderRoute(path, meta)
  if (!CLIENT_ONLY.has(path)) html = await withAppHtml(html, servedPath(path), meta.lang ?? 'en')
  if (path === '') {
    writeFileSync(join(dist, 'index.html'), html)
  } else {
    mkdirSync(join(dist, path), { recursive: true })
    writeFileSync(join(dist, path, 'index.html'), html)
  }
  count++
}

// SPA fallback for unknown routes: built from the ORIGINAL base HTML, with a 404-specific
// title, noindex, and no canonical so GitHub Pages serves a proper 404 status without
// indexing the shell as a duplicate of the homepage. #root holds the rendered not-found page
// so it shows before JavaScript; it is served for every unknown URL, so the client renders
// it afresh (or routes to the real page) instead of hydrating.
const NOT_FOUND_URL = '/404/'
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
const notFoundApp = await render(NOT_FOUND_URL)
notFound = replaceOrThrow(notFound, /<div id="root"><\/div>/, () => `<div id="root">${notFoundApp.html}</div>`, '404 #root')
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
