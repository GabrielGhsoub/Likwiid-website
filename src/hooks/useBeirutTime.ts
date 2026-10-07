import { useEffect, useState } from 'react'

const TIME_ZONE = 'Asia/Beirut'
const TICK_MS = 30_000

const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: TIME_ZONE,
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

export interface BeirutTime {
  /** Wall clock time in Beirut, e.g. "22:41" */
  label: string
  /** ISO 8601 instant for the <time> element's dateTime attribute */
  iso: string
}

function read(): BeirutTime {
  const now = new Date()
  // Some engines render midnight as "24:00" with hour12 false
  const label = formatter.format(now).replace(/^24/, '00')
  return { label, iso: now.toISOString() }
}

/** Current time in Beirut, refreshed every 30 seconds. */
export function useBeirutTime(): BeirutTime {
  const [time, setTime] = useState<BeirutTime>(read)

  useEffect(() => {
    const update = () =>
      setTime((prev) => {
        const next = read()
        return prev.label === next.label ? prev : next
      })
    update()
    const id = window.setInterval(update, TICK_MS)
    return () => window.clearInterval(id)
  }, [])

  return time
}
