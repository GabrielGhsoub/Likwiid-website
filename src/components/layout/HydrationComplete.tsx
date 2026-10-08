import { useEffect } from 'react'
import { runAfterHydration } from '../../utils/afterHydration'

// Rendered last inside App's route <Suspense>: its effect runs once the routed page has
// hydrated (or rendered), which is when deferred startup work may change what renders.
export function HydrationComplete() {
  useEffect(() => {
    runAfterHydration()
  }, [])
  return null
}
