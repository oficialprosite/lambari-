import { usePageProgress } from '../hooks/useScroll'

export default function ScrollProgress() {
  const progress = usePageProgress()

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-px bg-white/10">
      <div
        className="h-full origin-left bg-ember"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
