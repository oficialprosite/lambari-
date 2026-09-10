import { site } from '../content'

const itens = [
  `Desde ${site.fundacao}`,
  `+${site.totais.cortes} cortes na brasa`,
  `+${site.totais.buffet} itens de buffet`,
  'Culinária japonesa',
  'Espaço kids',
  'Estacionamento gratuito',
  site.horarioResumo,
]

export default function Ticker() {
  return (
    <div className="relative overflow-hidden border-b border-ink/10 bg-white py-4">
      {/* The list is rendered twice so the -50% loop lands on an identical frame. */}
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copia) => (
          <ul key={copia} className="flex shrink-0 items-center" aria-hidden={copia === 1}>
            {itens.map((item) => (
              <li key={item} className="flex items-center">
                <span className="label whitespace-nowrap text-ink/55">{item}</span>
                <span className="mx-7 h-1 w-1 rotate-45 bg-ember" />
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}
