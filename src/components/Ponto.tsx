import { pontos } from '../content'
import { useStickyProgress } from '../hooks/useScroll'

const primeiro = pontos[0].temperatura
const ultimo = pontos[pontos.length - 1].temperatura

export default function Ponto() {
  const { ref, progress } = useStickyProgress<HTMLElement>()

  const ativo = Math.min(pontos.length - 1, Math.floor(progress * pontos.length))
  const temperatura = Math.round(primeiro + progress * (ultimo - primeiro))

  return (
    <section id="ponto" ref={ref} className="relative h-[320vh] bg-surface">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          <div className="flex items-center gap-4">
            <span className="label text-ember">02</span>
            <span className="h-px w-10 bg-white/20" />
            <span className="label text-white/45">Ponto</span>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
              Você escolhe o ponto.
              <br />
              A brasa executa.
            </h2>

            <div className="lg:pb-2">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-6xl font-light tracking-[-0.04em] text-ember md:text-7xl">
                  {temperatura}
                </span>
                <span className="font-mono text-2xl text-white/40">°C</span>
              </div>
              <p className="label mt-2 text-white/35">Temperatura no centro da peça</p>
            </div>
          </div>

          <div className="mt-14 md:mt-20">
            <div className="relative">
              <div
                className="h-1.5 w-full rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, #A3122A 0%, #C13B24 30%, #C97A2C 55%, #8E5C36 78%, #5E4739 100%)',
                }}
              />

              <div
                className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ember bg-ink"
                style={{ left: `${progress * 100}%` }}
              />

              <div className="mt-5 flex justify-between">
                {pontos.map((ponto, index) => (
                  <div
                    key={ponto.nome}
                    className="flex flex-1 flex-col items-start transition-opacity duration-500"
                    style={{ opacity: index === ativo ? 1 : 0.3 }}
                  >
                    <span className="h-2 w-px bg-white/40" />
                    <span className="mt-2 font-mono text-[10px] text-white/60 md:text-xs">
                      {ponto.temperatura}°
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-10 h-28 md:h-24">
              {pontos.map((ponto, index) => (
                <div
                  key={ponto.nome}
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    opacity: index === ativo ? 1 : 0,
                    transform: index === ativo ? 'none' : 'translate3d(0, 14px, 0)',
                  }}
                  aria-hidden={index !== ativo}
                >
                  <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-4xl">{ponto.nome}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/50 md:text-base">
                    {ponto.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
