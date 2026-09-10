import { useStatusAgora } from '../hooks/useStatusAgora'

type StatusAgoraProps = {
  /** Over the hero video the type is light; on the cream page it is dark. */
  tom?: 'claro' | 'escuro'
  className?: string
}

export default function StatusAgora({ tom = 'escuro', className = '' }: StatusAgoraProps) {
  const { aberto, rotulo } = useStatusAgora()

  const brasa = tom === 'claro' ? 'bg-ember-bright' : 'bg-ember'
  const apagado = tom === 'claro' ? 'bg-cream/40' : 'bg-ink/30'

  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="relative flex h-2 w-2 shrink-0">
        {aberto && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${brasa}`}
          />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${aberto ? brasa : apagado}`} />
      </span>

      <span className={`label ${tom === 'claro' ? 'text-cream/70' : 'text-ink/55'}`}>{rotulo}</span>
    </span>
  )
}
