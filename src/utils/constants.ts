export const SITE = {
  name: 'Likwiid',
  title: 'Likwiid | Software Studio',
  description:
    'Likwiid is a software studio founded by Gabriel Ghoussoub. Full-stack development, cloud architecture, AI integration, and VR experiences. Based in Beirut, shipping worldwide.',
  url: 'https://likwiid.com',
} as const

export const SOCIAL = {
  github: 'https://github.com/GabrielGhsoub',
  linkedin: 'https://linkedin.com/in/gabriel-ghoussoub',
  email: 'gabriel@likwiid.com',
  whatsapp: 'https://wa.me/96176160979',
  phone: '+961 76 160 979',
} as const

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How We Work', path: '/process' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
] as const

// Secondary links surfaced in the footer so key pages (incl. the booking-websites landing
// page) are reachable and crawlable from every page.
export const FOOTER_LINKS = [
  { label: 'Services', path: '/services' },
  { label: 'How We Work', path: '/process' },
  { label: 'Booking Websites', path: '/booking-websites' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
] as const

export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || 'https://api.likwiid.com/submit'
