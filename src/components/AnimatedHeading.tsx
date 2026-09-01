import { useEffect, useState } from 'react'

type AnimatedHeadingProps = {
  /** Text to animate. Split into lines on "\n". */
  text: string
  className?: string
  /** Delay between each character, in ms. */
  charDelay?: number
  /** Delay before the whole animation starts, in ms. */
  initialDelay?: number
  /** Transition duration for each character, in ms. */
  duration?: number
  style?: React.CSSProperties
}

/** Splits a line into word chunks, keeping the trailing space with its word. */
function splitIntoWords(line: string) {
  const words: { chars: string[]; startIndex: number }[] = []
  let current: string[] = []
  let startIndex = 0

  line.split('').forEach((char, index) => {
    if (current.length === 0) startIndex = index
    current.push(char)
    if (char === ' ') {
      words.push({ chars: current, startIndex })
      current = []
    }
  })

  if (current.length > 0) words.push({ chars: current, startIndex })
  return words
}

export default function AnimatedHeading({
  text,
  className = '',
  charDelay = 30,
  initialDelay = 200,
  duration = 500,
  style,
}: AnimatedHeadingProps) {
  const lines = text.split('\n')
  const [visible, setVisible] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []

    lines.forEach((line, lineIndex) => {
      const lineLength = line.length
      line.split('').forEach((_, charIndex) => {
        const key = `${lineIndex}-${charIndex}`
        const delay =
          initialDelay + lineIndex * lineLength * charDelay + charIndex * charDelay
        timeouts.push(
          setTimeout(() => {
            setVisible((prev) => ({ ...prev, [key]: true }))
          }, delay),
        )
      })
    })

    return () => timeouts.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, charDelay, initialDelay])

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {splitIntoWords(line).map((word) => (
            <span key={word.startIndex} className="inline-block whitespace-nowrap">
              {word.chars.map((char, offset) => {
                const charIndex = word.startIndex + offset
                const key = `${lineIndex}-${charIndex}`
                const isVisible = visible[key]
                return (
                  <span
                    key={key}
                    className="inline-block"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-18px)',
                      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                )
              })}
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}
