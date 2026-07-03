import { useState, useRef, useEffect } from 'react'
import type { ContactSubmitPayload } from '../types'
import { FORM_ENDPOINT } from '../utils/constants'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const REQUEST_TIMEOUT_MS = 10_000
// Submissions faster than this are almost certainly automated (a human can't fill the form
// this quickly). Combined with the honeypot field, this drops the bulk of bot spam client-side.
const MIN_ELAPSED_MS = 1_200

export function useFormSubmit() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort()
    }
  }, [])

  const submit = async (data: ContactSubmitPayload) => {
    // Silently drop bots (honeypot filled or near-instant submit): show success so the bot
    // gets no signal, but never hit the network.
    const honeypotTripped = Boolean(data.website && data.website.trim() !== '')
    const tooFast = typeof data.elapsedMs === 'number' && data.elapsedMs < MIN_ELAPSED_MS
    if (honeypotTripped || tooFast) {
      setStatus('success')
      return
    }

    abortControllerRef.current?.abort()
    const controller = new AbortController()
    abortControllerRef.current = controller
    // Fail a hung endpoint instead of leaving the button stuck on "Sending…".
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    setStatus('submitting')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      })

      setStatus(response.ok ? 'success' : 'error')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        // Timeout aborts should surface as an error; unmount/resubmit aborts should not.
        if (controller.signal.aborted && abortControllerRef.current === controller) {
          setStatus('error')
        }
        return
      }
      setStatus('error')
    } finally {
      clearTimeout(timeout)
    }
  }

  const reset = () => setStatus('idle')

  return { status, submit, reset }
}
