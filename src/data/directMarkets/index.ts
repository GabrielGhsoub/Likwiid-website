import type { DirectMarket } from '../../i18n/localeRoutes'
import type { DirectMarketContents } from './types'
import alojamentoLocal from './alojamento-local'
import casaRural from './casa-rural'
import agriturismoBb from './agriturismo-bb'
import chambresDHotes from './chambres-d-hotes'
import padelClubs from './padel-clubs'
import diveCentres from './dive-centres'

// Every Direct market page's copy, for the server bundle (prerender reads titles, descriptions,
// breadcrumbs and FAQs from here). Browsers load each page's copy with its own route chunk.
export const DIRECT_MARKET_CONTENT: Record<DirectMarket, DirectMarketContents> = {
  'alojamento-local': alojamentoLocal,
  'casa-rural': casaRural,
  'agriturismo-bb': agriturismoBb,
  'chambres-d-hotes': chambresDHotes,
  'padel-clubs': padelClubs,
  'dive-centres': diveCentres,
}
