import { useState, useRef, useEffect } from 'react'
import type { ContactFormData } from '../types'
import { FORM_ENDPOINT } from '../utils/constants'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function useFormSubmit() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort()
    }
  }, [])

  const submit = async (data: ContactFormData) => {
    abortControllerRef.current?.abort()
    const controller = new AbortController()
    abortControllerRef.current = controller

    setStatus('submitting')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      setStatus('error')
    }
  }

  const reset = () => setStatus('idle')

  return { status, submit, reset }
}
