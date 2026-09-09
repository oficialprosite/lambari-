import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  /** Delay before the element starts appearing, in ms. */
  delay?: number
  /** Distance in px the content travels up as it appears. */
  offset?: number
  className?: string
}

export default function Reveal({ children, delay = 0, offset = 28, className = '' }: RevealProps) {
  const { ref, revealed } = useReveal()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'none' : `translate3d(0, ${offset}px, 0)`,
        transition: `opacity 900ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 900ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
