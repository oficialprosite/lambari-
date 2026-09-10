import { useEffect, useState } from 'react'
import { statusAgora } from '../content'

/** Recomputes every minute, so a tab left open crosses a service boundary correctly. */
export function useStatusAgora() {
  const [status, setStatus] = useState(() => statusAgora())

  useEffect(() => {
    const id = setInterval(() => setStatus(statusAgora()), 60_000)
    return () => clearInterval(id)
  }, [])

  return status
}
