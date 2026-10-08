import { useEffect, useRef } from 'react'
import { useMountedFromHtml } from './useHydrated'

const HIDDEN = { opacity: 0, y: 16 }
const VISIBLE = { opacity: 1, y: 0 }
const DURATION = 0.4
const EASE = [0.22, 1, 0.36, 1] as const
const DEFAULT_AMOUNT = 0.1

interface RevealOptions {
  /** Seconds before the fade starts, for staggered items. */
  delay?: number
  /** Share of the element that must be in view before it reveals. */
  amount?: number
}

/**
 * Props for the site's fade-up-on-view pattern, spread onto an `m.*` element.
 *
 * Mounted after hydration (client-side navigation): framer-motion starts it hidden and fades
 * it up when `amount` of it scrolls into view, as before.
 *
 * Already in the prerendered HTML: it renders fully visible, so the static page shows every
 * section before (and without) JavaScript. After hydration, a block that is still below the
 * fold gets data-reveal="armed" (hidden by globals.css while it is off screen) and fades up
 * through a CSS transition when it scrolls into view. One already on screen stays put instead
 * of blinking out. This path does not go through framer-motion: its lazily loaded feature
 * bundle resets motion values to their first-render state when it arrives.
 */
export function useRevealMotion<T extends HTMLElement = HTMLDivElement>({
  delay = 0,
  amount = DEFAULT_AMOUNT,
}: RevealOptions = {}) {
  const fromHtml = useMountedFromHtml()
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!fromHtml || !el || typeof IntersectionObserver === 'undefined') return
    if (el.getBoundingClientRect().top <= window.innerHeight) return
    el.style.transitionDelay = delay ? `${delay}s` : ''
    el.dataset.reveal = 'armed'
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        el.dataset.reveal = 'shown'
        observer.disconnect()
      },
      { threshold: amount },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [fromHtml, delay, amount])

  if (fromHtml) return { ref, initial: false as const }
  return {
    ref,
    initial: HIDDEN,
    whileInView: VISIBLE,
    viewport: { once: true, amount },
    transition: { duration: DURATION, delay, ease: EASE },
  }
}
