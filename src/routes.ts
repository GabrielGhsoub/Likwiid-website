import { lazyRoute, type PreloadableRoute } from './utils/lazyRoute'
import { DIRECT_MARKET_ROUTES, LOCALIZED_PAGES, LOCALIZED_TOOLS, PREFIXED_LANGUAGES, type DirectMarket, type LocalizedPage, type LocalizedTool } from './i18n/localeRoutes'
import { DEFAULT_LANGUAGE, isSupported } from './i18n/detectLanguage'
import { guidePage } from './content/guides/registry'

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

// Direct market pages (/pt/direct/alojamento-local, /direct/padel-clubs, ...): one chunk per
// page, carrying its copy in every language it exists in.
export const DIRECT_MARKET_PAGES: Record<DirectMarket, PreloadableRoute> = {
  'alojamento-local': lazyRoute(() => import('./pages/directMarkets/AlojamentoLocal')),
  'casa-rural': lazyRoute(() => import('./pages/directMarkets/CasaRural')),
  'agriturismo-bb': lazyRoute(() => import('./pages/directMarkets/AgriturismoBb')),
  'chambres-d-hotes': lazyRoute(() => import('./pages/directMarkets/ChambresDHotes')),
  'padel-clubs': lazyRoute(() => import('./pages/directMarkets/PadelClubs')),
  'dive-centres': lazyRoute(() => import('./pages/directMarkets/DiveCentres')),
}
export const Guides = lazyRoute(() => import('./pages/Guides'))

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
  guides: Guides,
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
  ...Object.fromEntries(DIRECT_MARKET_ROUTES.map(({ market, path }) => [path, DIRECT_MARKET_PAGES[market]])),
}

const LOCALIZED_CASE_STUDY_PATH = new RegExp(`^/(?:${PREFIXED_LANGUAGES.join('|')})/work/[^/]+$`)
const GUIDE_PATH = new RegExp(`^(?:/(${PREFIXED_LANGUAGES.join('|')}))?/guides/([^/]+)$`)

// A guide article's own chunk (/guides/<slug>, /pt/guides/<slug>), when that version exists.
function guideRouteFor(path: string): PreloadableRoute | undefined {
  const match = path.match(GUIDE_PATH)
  if (!match) return undefined
  const lang = isSupported(match[1]) ? match[1] : DEFAULT_LANGUAGE
  return guidePage(match[2], lang)
}

// Page chunk for a landing URL, if it is one of the code-split pages. Anything not listed
// here (home, redirects, unknown paths) simply renders through Suspense as before.
function routeFor(pathname: string): PreloadableRoute | undefined {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  if (STATIC_ROUTES[path]) return STATIC_ROUTES[path]
  if (/^\/work\/[^/]+$/.test(path)) return CaseStudy
  if (LOCALIZED_CASE_STUDY_PATH.test(path)) return CaseStudy
  return guideRouteFor(path)
}

/** Loads the landing page's chunk before the first render. Never rejects. */
export function preloadRoute(pathname: string): Promise<void> {
  const route = routeFor(pathname)
  return route ? route.preload().catch(() => undefined) : Promise.resolve()
}
