import { useState } from 'react'
import picanhaEspeto from '../assets/fotos/picanha-espeto.webp'
import { pontos } from '../content'
import Reveal from './Reveal'

const primeiro = pontos[0].temperatura
const ultimo = pontos[pontos.length - 1].temperatura

/** Diameter of the draggable marker, in px. Keeps it inside the track at both ends. */
const BOLA = 28

export default function Ponto() {
  const [posicao, setPosicao] = useState(50)

  const fracao = posicao / 100
  const ativo = Math.min(pontos.length - 1, Math.floor(fracao * pontos.length))
  const temperatura = Math.round(primeiro + fracao * (ultimo - primeiro))

  return (
    <section id="ponto" className="border-y border-ink/10 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
          <Reveal offset={36}>
            <img
              src={picanhaEspeto}
              alt="Picanha no espeto sendo fatiada na mesa"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-sm object-cover"
            />
          </Reveal>

          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="label text-ember">02</span>
                <span className="h-px w-10 bg-ink/20" />
                <span className="label text-ink/45">Ponto</span>
              </div>
            </Reveal>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
              <Reveal delay={80}>
                <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.012em] md:text-[2.75rem]">
                  Você escolhe o ponto.
                  <br />
                  A brasa executa.
                </h2>
              </Reveal>

              <Reveal delay={160}>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-6xl font-light tracking-[-0.04em] text-ember md:text-7xl">
                      {temperatura}
                    </span>
                    <span className="font-mono text-2xl text-ink/40">°C</span>
                  </div>
                  <p className="label mt-2 text-ink/40">Temperatura no centro da peça</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <div className="mt-12 md:mt-16">
                <div className="relative">
                  <div
                    className="h-1.5 w-full rounded-full"
                    style={{
                      background:
                        'linear-gradient(90deg, #A3122A 0%, #C13B24 30%, #C97A2C 55%, #8E5C36 78%, #5E4739 100%)',
                    }}
                  />

                  {/* A transparent native range sits on top: it brings drag, tap and
                      arrow-key support for free, while the visible marker is ours. */}
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={posicao}
                    onChange={(evento) => setPosicao(Number(evento.target.value))}
                    aria-label="Escolha o ponto da carne"
                    aria-valuetext={`${pontos[ativo].nome}, ${temperatura} graus`}
                    className="ponto-range peer absolute inset-x-0 top-1/2 h-10 w-full -translate-y-1/2"
                  />

                  <div
                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-full border-[3px] border-ember bg-white shadow-sm transition-shadow peer-focus-visible:ring-4 peer-focus-visible:ring-ember/30"
                    style={{
                      width: BOLA,
                      height: BOLA,
                      left: `calc(${BOLA / 2}px + (100% - ${BOLA}px) * ${fracao})`,
                      marginLeft: -BOLA / 2,
                    }}
                  />

                  <div className="mt-5 flex justify-between">
                    {pontos.map((ponto, index) => (
                      <button
                        type="button"
                        key={ponto.nome}
                        onClick={() => setPosicao(((index + 0.5) / pontos.length) * 100)}
                        className="flex flex-1 flex-col items-start transition-opacity duration-300 hover:opacity-100"
                        style={{ opacity: index === ativo ? 1 : 0.35 }}
                      >
                        <span className="h-2 w-px bg-ink/40" />
                        <span className="mt-2 font-mono text-[10px] text-ink/70 md:text-xs">
                          {ponto.temperatura}°
                        </span>
                      </button>
                    ))}
                  </div>

                  <p className="label mt-6 text-ink/30">
                    Arraste a bola ou toque em uma temperatura
                  </p>
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
                      <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-4xl">
                        {ponto.nome}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/60 md:text-base">
                        {ponto.descricao}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
