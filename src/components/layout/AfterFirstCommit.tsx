import { useEffect, type ReactNode } from 'react'

// Runs `run` once the first render (the hydration, when there is one) has committed. Renders
// its children as is, so it adds no markup.
export function AfterFirstCommit({ run, children }: { run?: () => void; children: ReactNode }) {
  useEffect(() => {
    run?.()
  }, [run])
  return children
}
