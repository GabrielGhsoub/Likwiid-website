// Where the product demos are hosted. Both are GitHub Pages project sites today;
// they will flip to https://frame.likwiid.com and https://direct.likwiid.com once
// DNS for those subdomains exists. Build every demo link from these constants so
// the cutover is a two-line change.
export const FRAME_DEMO_ORIGIN = 'https://frame.likwiid.com'
export const DIRECT_DEMO_ORIGIN = 'https://direct.likwiid.com'

export type DemoTheme = 'light' | 'dark'

/** Appends from=likwiid (which makes the demo show its "Back to Likwiid" chip),
    back=<path> (the likwiid.com page that chip returns the visitor to) and, when
    known, theme=<light|dark> so the demo opens in the surface the visitor was
    already reading in instead of whatever their OS prefers. Honours any query
    string already on the URL. Keep this the single place where the demo
    hand-off params are built. */
export function withLikwiidReturn(url: string, backPath: string, theme?: DemoTheme): string {
  const themeParam = theme ? `&theme=${theme}` : ''
  return `${url}${url.includes('?') ? '&' : '?'}from=likwiid&back=${backPath}${themeParam}`
}
