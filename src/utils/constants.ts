export const SITE = {
  name: 'Likwiid',
  title: 'Likwiid | Software Studio',
  description:
    'Likwiid is a founder-led studio in Beirut that builds booking websites, web apps and mobile apps for independent hotels and founders worldwide.',
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
  { label: 'Work', path: '/work' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
] as const

export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || 'https://api.likwiid.com/submit'
