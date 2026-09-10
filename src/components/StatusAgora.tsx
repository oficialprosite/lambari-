import { useStatusAgora } from '../hooks/useStatusAgora'

type StatusAgoraProps = {
  /** Over the hero video the type is light; on the cream page it is dark. */
  tom?: 'claro' | 'escuro'
  className?: string
}

export default function StatusAgora({ tom = 'escuro', className = '' }: StatusAgoraProps) {
  const { aberto, rotulo } = useStatusAgora()

  const claro = tom === 'claro'
  const brasa = claro ? 'bg-ember-bright' : 'bg-ember'

  const pilula = aberto
    ? claro
      ? 'border-ember-bright/50 bg-ember-bright/15 text-cream'
      : 'border-ember/30 bg-ember/10 text-ember'
    : claro
      ? 'border-cream/25 bg-cream/10 text-cream/70'
      : 'border-ink/15 bg-ink/5 text-ink/55'

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] ${pilula} ${className}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        {aberto && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${brasa}`}
          />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            aberto ? brasa : claro ? 'bg-cream/40' : 'bg-ink/25'
          }`}
        />
      </span>
      {rotulo}
    </span>
  )
}
