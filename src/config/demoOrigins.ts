// Where the product demos are hosted. Both are GitHub Pages project sites today;
// they will flip to https://frame.likwiid.com and https://direct.likwiid.com once
// DNS for those subdomains exists. Build every demo link from these constants so
// the cutover is a two-line change.
export const FRAME_DEMO_ORIGIN = 'https://gabrielghsoub.github.io/likwiid-frame-demo'
export const DIRECT_DEMO_ORIGIN = 'https://gabrielghsoub.github.io/likwiid-direct-demo'

/** Appends from=likwiid (which makes the demo show its "Back to Likwiid" chip)
    and back=<path> (the likwiid.com page that chip returns the visitor to),
    honouring any query string already on the URL. Keep this the single place
    where the demo return params are built. */
export function withLikwiidReturn(url: string, backPath: string): string {
  return `${url}${url.includes('?') ? '&' : '?'}from=likwiid&back=${backPath}`
}
