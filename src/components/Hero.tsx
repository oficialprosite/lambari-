import { useState } from 'react'
import heroPoster from '../assets/fotos/hero-poster.jpg'
import heroVideo from '../assets/video/hero-carne.mp4'
import { emUmaLinha, horarioDoDia, site } from '../content'
import { useExitProgress } from '../hooks/useScroll'
import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'

export default function Hero() {
  const { ref, progress } = useExitProgress<HTMLElement>()
  const [tocando, setTocando] = useState(false)
  const [principal] = site.telefones

  // Both layers drift together, so the hand-off from still to video is invisible.
  // Drifts down slower than the page scrolls and dims on the way out.
  const camada = {
    transform: `translate3d(0, ${progress * 14}vh, 0) scale(${1 + progress * 0.1})`,
    filter: `brightness(${1 - progress * 0.5})`,
  }

  return (
    <section id="topo" ref={ref} className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* 44 KB still that lands immediately, so the fold is never a black screen.
          It also stays put if the video never plays — data saver, codec, slow link. */}
      <img
        src={heroPoster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={camada}
      />

      <video
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        onPlaying={() => setTocando(true)}
        style={{ ...camada, opacity: tocando ? 1 : 0 }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/20 to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/20 to-transparent" />

      <div
        className="relative z-10 flex h-full flex-col justify-end text-cream"
        style={{
          opacity: Math.max(0, 1 - progress * 1.5),
          transform: `translate3d(0, ${progress * -60}px, 0)`,
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-14 md:px-10 md:pb-20">
          <FadeIn duration={900}>
            <div className="mb-7 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember-bright" />
              {/* Scales with the viewport so it never wraps to a second line. */}
              <span
                className="label whitespace-nowrap text-cream/65"
                style={{ fontSize: 'clamp(7px, 2.2vw, 11px)' }}
              >
                Churrascaria · Barão Geraldo · Desde {site.fundacao}
              </span>
            </div>
          </FadeIn>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <AnimatedHeading
                text={'Rodízio\nsem hora\npara acabar.'}
                className="text-[2.15rem] font-medium leading-[0.95] tracking-[-0.015em] sm:text-[2.75rem] md:text-6xl lg:text-7xl xl:text-8xl"
                initialDelay={350}
                charDelay={26}
              />

              <FadeIn delay={1100} duration={900}>
                <p className="mt-7 max-w-lg text-base leading-relaxed text-cream/70 md:text-lg">
                  Rodízio completo em Campinas desde {site.fundacao}. Mais de {site.totais.cortes}{' '}
                  cortes na brasa e um buffet com mais de {site.totais.buffet} opções, incluindo
                  culinária japonesa.
                </p>
              </FadeIn>

              <FadeIn delay={1350} duration={900}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#reserva"
                    className="rounded-full bg-ember px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-cream hover:text-ink"
                  >
                    Reservar mesa
                  </a>
                  <a
                    href="#cortes"
                    className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:border-cream hover:bg-cream hover:text-ink"
                  >
                    Ver os cortes
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={1600} duration={900}>
              <dl className="divide-y divide-cream/15 border-y border-cream/15 lg:ml-auto lg:w-full lg:max-w-sm">
                {[
                  { termo: 'Hoje', valor: emUmaLinha(horarioDoDia(new Date())) },
                  { termo: 'Endereço', valor: site.endereco.rua },
                  { termo: 'Telefone', valor: principal.rotulo },
                ].map((linha) => (
                  <div key={linha.termo} className="flex items-baseline justify-between gap-6 py-3.5">
                    <dt className="label text-cream/45">{linha.termo}</dt>
                    <dd className="text-right font-mono text-xs text-cream/85">{linha.valor}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-5 z-10 hidden justify-center md:flex"
        style={{ opacity: Math.max(0, 1 - progress * 3) }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="label text-[9px] text-cream/40">Role</span>
          <span className="h-8 w-px bg-gradient-to-b from-cream/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
