import Reveal from './Reveal'

type SectionHeaderProps = {
  index: string
  label: string
  title: string
  description?: string
  className?: string
}

export default function SectionHeader({
  index,
  label,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="label text-ember">{index}</span>
          <span className="h-px w-10 bg-ink/20" />
          <span className="label text-ink/45">{label}</span>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-[1.08] tracking-[-0.03em] md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={160}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/55">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
