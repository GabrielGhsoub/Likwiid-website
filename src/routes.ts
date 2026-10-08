import { lazyRoute, type PreloadableRoute } from './utils/lazyRoute'
import { LOCALIZED_PAGES, LOCALIZED_TOOLS, PREFIXED_LANGUAGES, type LocalizedPage, type LocalizedTool } from './i18n/localeRoutes'

// Code-split pages. Home is imported statically by App.tsx; everything else loads on demand.
export const Services = lazyRoute(() => import('./pages/Services'))
export const Portfolio = lazyRoute(() => import('./pages/Portfolio'))
export const CaseStudy = lazyRoute(() => import('./pages/CaseStudy'))
export const Contact = lazyRoute(() => import('./pages/Contact'))
export const Privacy = lazyRoute(() => import('./pages/Privacy'))
export const BeitToureefPoc = lazyRoute(() => import('./pages/BeitToureefPoc'))
export const Direct = lazyRoute(() => import('./pages/Direct'))
export const Frame = lazyRoute(() => import('./pages/Frame'))
export const Products = lazyRoute(() => import('./pages/Products'))
export const NotFound = lazyRoute(() => import('./pages/NotFound'))
export const OtaCommissionCalculator = lazyRoute(() => import('./pages/OtaCommissionCalculator'))
export const PortfolioCostCalculator = lazyRoute(() => import('./pages/PortfolioCostCalculator'))

// Home is bundled with the app shell, so it has no chunk to preload.
type LazyLocalizedPage = Exclude<LocalizedPage, 'home'>
const LAZY_LOCALIZED_PAGES = LOCALIZED_PAGES.filter((page): page is LazyLocalizedPage => page !== 'home')
const LOCALIZED_ROUTES: Record<LazyLocalizedPage, PreloadableRoute> = {
  work: Portfolio,
  direct: Direct,
  frame: Frame,
  products: Products,
  services: Services,
  contact: Contact,
}

export const TOOL_ROUTES: Record<LocalizedTool, PreloadableRoute> = {
  'ota-commission-calculator': OtaCommissionCalculator,
  'portfolio-cost-calculator': PortfolioCostCalculator,
}

const STATIC_ROUTES: Record<string, PreloadableRoute> = {
  '/services': Services,
  '/contact': Contact,
  '/privacy': Privacy,
  '/beit-toureef-walkthrough': BeitToureefPoc,
  ...Object.fromEntries(LAZY_LOCALIZED_PAGES.map((page) => [`/${page}`, LOCALIZED_ROUTES[page]])),
  ...Object.fromEntries(
    PREFIXED_LANGUAGES.flatMap((lang) =>
      LAZY_LOCALIZED_PAGES.map((page) => [`/${lang}/${page}`, LOCALIZED_ROUTES[page]]),
    ),
  ),
  ...Object.fromEntries(
    ['', ...PREFIXED_LANGUAGES.map((lang) => `/${lang}`)].flatMap((prefix) =>
      LOCALIZED_TOOLS.map((tool) => [`${prefix}/tools/${tool}`, TOOL_ROUTES[tool]]),
    ),
  ),
}

const LOCALIZED_CASE_STUDY_PATH = new RegExp(`^/(?:${PREFIXED_LANGUAGES.join('|')})/work/[^/]+$`)

// Page chunk for a landing URL, if it is one of the code-split pages. Anything not listed
// here (home, redirects, unknown paths) simply renders through Suspense as before.
function routeFor(pathname: string): PreloadableRoute | undefined {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  if (STATIC_ROUTES[path]) return STATIC_ROUTES[path]
  if (/^\/work\/[^/]+$/.test(path)) return CaseStudy
  if (LOCALIZED_CASE_STUDY_PATH.test(path)) return CaseStudy
  return undefined
}

/** Loads the landing page's chunk before the first render. Never rejects. */
export function preloadRoute(pathname: string): Promise<void> {
  const route = routeFor(pathname)
  return route ? route.preload().catch(() => undefined) : Promise.resolve()
}
