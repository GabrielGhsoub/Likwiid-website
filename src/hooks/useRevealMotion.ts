import { useEffect, useRef } from 'react'
import { useMotionValue, type Transition } from 'framer-motion'
import { useMountedFromHtml } from './useHydrated'

const HIDDEN = { opacity: 0, y: 16 }
const DEFAULT_VIEWPORT = { once: true, amount: 0.1 } as const
const DEFAULT_TRANSITION: Transition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] }

interface RevealOptions {
  transition?: Transition
  amount?: number
}

/**
 * Motion props for the site's fade-up-on-view pattern, spread onto an `m.*` element.
 *
 * Mounted after hydration (client-side navigation): starts hidden and fades up when 10% of
 * it scrolls into view, as before.
 *
 * Already in the prerendered HTML: renders fully visible, so the static page shows every
 * section before (and without) JavaScript. After hydration, a block that is still below the
 * fold is hidden while off screen and fades up on view like the rest; one already on screen
 * stays put instead of blinking out.
 */
export function useRevealMotion<T extends Element = HTMLDivElement>({
  transition = DEFAULT_TRANSITION,
  amount = DEFAULT_VIEWPORT.amount,
}: RevealOptions = {}) {
  const fromHtml = useMountedFromHtml()
  const ref = useRef<T>(null)
  const opacity = useMotionValue(1)
  const y = useMotionValue(0)

  useEffect(() => {
    if (!fromHtml) return
    const el = ref.current
    if (el && el.getBoundingClientRect().top > window.innerHeight) {
      opacity.set(HIDDEN.opacity)
      y.set(HIDDEN.y)
    }
  }, [fromHtml, opacity, y])

  const visible = { opacity: 1, y: 0 }
  const viewport = { once: true, amount }
  return fromHtml
    ? { ref, initial: false as const, style: { opacity, y }, whileInView: visible, viewport, transition }
    : { ref, initial: HIDDEN, whileInView: visible, viewport, transition }
}
