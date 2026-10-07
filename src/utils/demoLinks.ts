import { DIRECT_DEMO_ORIGIN, FRAME_DEMO_ORIGIN, withLikwiidReturn, type DemoTheme } from '../config/demoOrigins'

// Languages the Direct demo ships with; other site languages fall back to the demo default.
const DIRECT_DEMO_LANGS = ['pt', 'en', 'es'] as const

/** Full-page Direct demo URL for a property slug, in the visitor's language when the
    demo supports it. backPath is the likwiid.com page the demo's "Back to Likwiid"
    chip returns to. theme is the surface the visitor is reading likwiid.com in, so the
    demo opens matching it. Uses the /p/ pages, not the embed=1 widget view. */
export function directDemoHref(
  lang: string,
  backPath: string,
  slug = 'quinta-likwiid',
  theme?: DemoTheme,
): string {
  const base = `${DIRECT_DEMO_ORIGIN}/p/${slug}`
  const short = (lang ?? '').slice(0, 2)
  const localized = (DIRECT_DEMO_LANGS as readonly string[]).includes(short) ? `${base}?lang=${short}` : base
  return withLikwiidReturn(localized, backPath, theme)
}

/** Frame demo URL for a portfolio slug (or the owner panel with kind 'admin'). */
export function frameDemoHref(
  backPath: string,
  slug = 'ana-likwiid',
  kind: 'p' | 'admin' = 'p',
  theme?: DemoTheme,
): string {
  return withLikwiidReturn(`${FRAME_DEMO_ORIGIN}/${kind}/${slug}`, backPath, theme)
}
