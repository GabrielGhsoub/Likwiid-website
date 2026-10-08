import { useState, useSyncExternalStore } from 'react'

const subscribeNever = () => () => {}

/**
 * False while the page is prerendered and while the browser hydrates that HTML, true on every
 * render after. Values that only the browser knows (saved theme, the clock, session storage)
 * branch on this so the hydration render reproduces the prerendered markup exactly, then
 * update in the commit right after. A tree mounted with createRoot sees true from the start.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  )
}

/**
 * True when this component's first render was the prerender or the hydration of it, i.e. its
 * markup already sat in the static HTML. Frozen at mount: a component that mounts later
 * (client-side navigation) gets false.
 */
export function useMountedFromHtml(): boolean {
  const hydrated = useHydrated()
  const [fromHtml] = useState(!hydrated)
  return fromHtml
}
