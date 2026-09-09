import { useEffect, useState } from 'react'
import { site } from '../content'
import { useReveal } from '../hooks/useReveal'

const metricas = [
  { valor: site.anos, prefixo: '', rotulo: 'Anos de brasa', nota: `Desde ${site.fundacao}` },
  { valor: site.totais.cortes, prefixo: '+', rotulo: 'Cortes no rodízio', nota: 'Bovino, suíno, aves e cordeiro' },
  { valor: site.totais.buffet, prefixo: '+', rotulo: 'Itens no buffet', nota: 'Saladas, quentes e japonesa' },
  {
    valor: site.horario.fechamento - site.horario.abertura,
    prefixo: '',
    rotulo: 'Horas por dia',
    nota: `${site.horario.dias}, sem fechar` ,
  },
]

function Contador({ alvo, prefixo }: { alvo: number; prefixo: string }) {
  const { ref, revealed } = useReveal<HTMLSpanElement>()
  const [valor, setValor] = useState(0)

  useEffect(() => {
    if (!revealed) return

    let frame = 0
    const inicio = performance.now()

    const tick = (agora: number) => {
      const t = Math.min(1, (agora - inicio) / 1200)
      setValor(Math.round(alvo * (1 - Math.pow(1 - t, 3))))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [revealed, alvo])

  return (
    <span ref={ref} className="font-mono text-5xl font-light tracking-[-0.04em] md:text-6xl">
      {prefixo}
      {valor}
    </span>
  )
}

export default function Numeros() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
      <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-4">
        {metricas.map((metrica) => (
          <div key={metrica.rotulo} className="bg-ink p-6 md:p-8">
            <Contador alvo={metrica.valor} prefixo={metrica.prefixo} />
            <p className="mt-4 text-sm text-bone">{metrica.rotulo}</p>
            <p className="mt-1 text-xs text-white/35">{metrica.nota}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
