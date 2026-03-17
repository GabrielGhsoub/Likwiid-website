import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

// --- Shared IntersectionObserver singleton infrastructure ---

type ObserverCallback = (entry: IntersectionObserverEntry) => void

const observers = new Map<
  string,
  {
    observer: IntersectionObserver
    elements: Map<Element, ObserverCallback>
  }
>()

function getObserverKey(threshold: number, rootMargin: string): string {
  return `${threshold}|${rootMargin}`
}

function subscribe(
  element: Element,
  callback: ObserverCallback,
  threshold: number,
  rootMargin: string,
): () => void {
  const key = getObserverKey(threshold, rootMargin)

  if (!observers.has(key)) {
    const elements = new Map<Element, ObserverCallback>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = elements.get(entry.target)
          if (cb) cb(entry)
        })
      },
      { threshold, rootMargin },
    )
    observers.set(key, { observer, elements })
  }

  const record = observers.get(key)!
  record.elements.set(element, callback)
  record.observer.observe(element)

  return () => {
    record.observer.unobserve(element)
    record.elements.delete(element)
    if (record.elements.size === 0) {
      record.observer.disconnect()
      observers.delete(key)
    }
  }
}

// --- Hook ---

export function useScrollAnimation({
  threshold = 0.2,
  triggerOnce = true,
  rootMargin = '0px',
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const unsubscribe = subscribe(
      element,
      (entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            unsubscribe()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      threshold,
      rootMargin,
    )

    return unsubscribe
  }, [threshold, triggerOnce, rootMargin])

  return { ref, isVisible }
}
