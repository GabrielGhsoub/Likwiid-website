import { type ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

// Plain page wrapper. Deliberately not animated: an opacity entrance would delay the
// largest contentful paint and could leave content invisible while the lazily loaded
// animation bundle is still on its way. Sections fade in on view via Reveal instead.
export function PageTransition({ children }: PageTransitionProps) {
  return <div>{children}</div>
}
