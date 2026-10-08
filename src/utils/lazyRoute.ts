import { lazy, type ComponentType } from 'react'

type RouteModule = { default: ComponentType }

export type PreloadableRoute = ReturnType<typeof lazy<ComponentType>> & {
  preload: () => Promise<void>
}

// React.lazy with a preload() hook. Once preload() has resolved, the lazy component hands
// React an already-settled thenable, so it renders on the first pass instead of suspending.
// That matters on the landing route: a suspended first render commits the Suspense fallback,
// and React then holds the real page back behind its fallback throttle (about 300ms).
export function lazyRoute(factory: () => Promise<RouteModule>): PreloadableRoute {
  let loaded: RouteModule | undefined
  const load = () =>
    factory().then((mod) => {
      loaded = mod
      return mod
    })

  const Component = lazy(() => {
    if (loaded) {
      const mod = loaded
      // A synchronous thenable: React's lazy resolves it in the same call.
      return { then: (resolve: (value: RouteModule) => void) => resolve(mod) } as unknown as Promise<RouteModule>
    }
    return load()
  }) as PreloadableRoute

  Component.preload = () => load().then(() => undefined)
  return Component
}
