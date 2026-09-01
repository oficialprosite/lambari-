import { useEffect, useState, type ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  /** Delay before the fade starts, in ms. */
  delay?: number
  /** Duration of the fade, in ms. */
  duration?: number
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 1000,
  className = '',
}: FadeInProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  )
}
