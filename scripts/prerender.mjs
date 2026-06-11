// Post-build prerender: generate per-route HTML files from dist/index.html with
// route-specific title/description/OG meta and a static content block inside #root
// so email link scanners, social previews, and no-JS crawlers see real content.
// React replaces the #root contents on hydration, so the runtime app is unchanged.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const baseHtml = readFileSync(join(dist, 'index.html'), 'utf8')

const SITE_URL = 'https://likwiid.com'

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const block = (heading, body) => `
    <div style="max-width:760px;margin:0 auto;padding:96px 24px;font-family:system-ui,sans-serif">
      <h1>${escapeHtml(heading)}</h1>
      <p>${escapeHtml(body)}</p>
      <p><a href="${SITE_URL}/contact">Contact Likwiid</a> &middot; <a href="https://wa.me/96181398752">WhatsApp +961 81 398 752</a> &middot; <a href="mailto:gabriel@likwiid.com">gabriel@likwiid.com</a></p>
    </div>`

const routes = {
  '': {
    title: 'Likwiid | Software Studio',
    description:
      'Likwiid is a software studio founded by Gabriel Ghoussoub. Full-stack development, cloud architecture, AI integration, and VR experiences. Based in Beirut, shipping worldwide.',
    content: block(
      'Likwiid - Software that flows',
      'A software studio in Beirut shipping web and mobile products worldwide: full-stack development, booking websites, cloud architecture, and AI integration. 15+ websites delivered, replies within 24 hours.'
    ),
  },
  services: {
    title: 'Services | Likwiid',
    description:
      'Full-stack web and mobile development, cloud and DevOps, AI integration, VR experiences, and software architecture consulting.',
    content: block(
      'Services',
      'Full-stack web and mobile development, booking and ordering websites, cloud and DevOps, AI integration, VR experiences, and software architecture consulting.'
    ),
  },
  work: {
    title: 'Work | Likwiid',
    description:
      'Selected work: booking platforms, healthcare APIs, IoT energy management, AI products, and VR experiences built by Likwiid.',
    content: block(
      'Our Work',
      'Selected projects: a court booking platform with payments and admin dashboard, healthcare PDF API, IoT energy management, AI fitness coach, and VR experiences.'
    ),
  },
  about: {
    title: 'About | Likwiid',
    description:
      'Likwiid is a software studio founded by Gabriel Ghoussoub, a full-stack engineer with 5+ years across fintech, insurtech, satellite monitoring, IoT, and VR.',
    content: block(
      'About Likwiid',
      'Founded by Gabriel Ghoussoub, a full-stack engineer with 5+ years of experience across fintech, insurtech, satellite monitoring, IoT, and VR. Based in Beirut, working worldwide.'
    ),
  },
  contact: {
    title: 'Contact | Likwiid',
    description:
      'Start a conversation about your project. WhatsApp +961 81 398 752 or gabriel@likwiid.com. We reply within 24 hours.',
    content: block(
      'Contact',
      'Have a project in mind? Reach out on WhatsApp at +961 81 398 752 or email gabriel@likwiid.com. We reply within 24 hours.'
    ),
  },
  'booking-websites': {
    title: 'Booking Websites for Salons, Clinics & Small Hotels | Likwiid',
    description:
      'Simple, fast websites where your customers book and pay online. From $3,000, most projects $8,000 to $15,000, delivered in 2 to 4 weeks. Commission-free bookings you own.',
    content: block(
      'Websites with online booking for salons, clinics, and small hotels',
      'Your customers want to book at 11pm from their phone. We build simple, fast websites where customers book and pay online: real availability, deposits, automatic reminders, and a site you own. From $3,000, most projects $8,000 to $15,000, in 2 to 4 weeks.'
    ),
  },
  privacy: { title: 'Privacy Policy | Likwiid', description: 'Likwiid privacy policy.', content: '' },
  'beit-toureef-walkthrough': { title: 'Beit Toureef Walkthrough | Likwiid', description: 'Website walkthrough prepared for Beit Toureef.', content: '' },
  'beit-toureef-poc': { title: 'Beit Toureef Walkthrough | Likwiid', description: 'Website walkthrough prepared for Beit Toureef.', content: '' },
}

const workSlugs = [
  'gcg-website', 'personal-fitness-tracker', 'voxflow', 'breathebreak',
  'linkedin-templates-extension', 'healthcare-pdf-api', 'padel-booking',
  'padel-admin-portal', 'ai-fitness-coach', 'bully-ai', 'sems-energy-management', 'salsaflow',
]
for (const slug of workSlugs) {
  const name = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  routes[`work/${slug}`] = {
    title: `${name} | Likwiid`,
    description: `Case study: ${name}, built by Likwiid.`,
    content: '',
  }
}

function renderRoute(path, meta) {
  let html = baseHtml
  const url = path ? `${SITE_URL}/${path}` : `${SITE_URL}/`
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
  html = html.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${escapeHtml(meta.description)}$2`
  )
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escapeHtml(meta.title)}$2`)
  html = html.replace(
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${escapeHtml(meta.description)}$2`
  )
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escapeHtml(meta.title)}$2`)
  html = html.replace(
    /(<meta name="twitter:description" content=")[^"]*(")/,
    `$1${escapeHtml(meta.description)}$2`
  )
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

// SPA fallback for unknown routes
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))
console.log(`prerender: wrote ${count} routes + 404.html`)
