import { useEffect, useRef, useState } from 'react'

const listeners = new Set<() => void>()
let queued = false

function flush() {
  queued = false
  for (const listener of listeners) listener()
}

function schedule() {
  if (queued) return
  queued = true
  requestAnimationFrame(flush)
}

// Every scroll-driven hook shares one listener and one frame, so a page full of
// them still reads the layout once per frame instead of once per component.
function subscribe(onFrame: () => void) {
  if (listeners.size === 0) {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  }

  listeners.add(onFrame)
  onFrame()

  return () => {
    listeners.delete(onFrame)
    if (listeners.size === 0) {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }
}

const clamp = (value: number) => Math.min(1, Math.max(0, value))

/** How far the whole document has been scrolled, from 0 to 1. */
export function usePageProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(
    () =>
      subscribe(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? clamp(window.scrollY / max) : 0)
      }),
    [],
  )

  return progress
}

export function useScrolledPast(offset: number) {
  const [past, setPast] = useState(false)

  useEffect(() => subscribe(() => setPast(window.scrollY > offset)), [offset])

  return past
}

/** 0 while the element still covers the fold, 1 once it has scrolled fully past the top. */
export function useExitProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)

  useEffect(
    () =>
      subscribe(() => {
        const element = ref.current
        if (!element) return
        const { top, height } = element.getBoundingClientRect()
        setProgress(height > 0 ? clamp(-top / height) : 0)
      }),
    [],
  )

  return { ref, progress }
}

/** 0 when a tall container pins to the top of the viewport, 1 when its bottom reaches the fold. */
export function useStickyProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)

  useEffect(
    () =>
      subscribe(() => {
        const element = ref.current
        if (!element) return
        const { top, height } = element.getBoundingClientRect()
        const travel = height - window.innerHeight
        setProgress(travel > 0 ? clamp(-top / travel) : 0)
      }),
    [],
  )

  return { ref, progress }
}
