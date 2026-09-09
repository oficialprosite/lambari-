import heroVideo from '../assets/video/hero-carne.mp4'
import { site } from '../content'
import { useExitProgress } from '../hooks/useScroll'
import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'

export default function Hero() {
  const { ref, progress } = useExitProgress<HTMLElement>()
  const [principal] = site.telefones

  return (
    <section id="topo" ref={ref} className="relative h-screen w-full overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        // Drifts down slower than the page scrolls and dims on the way out.
        style={{
          transform: `translate3d(0, ${progress * 14}vh, 0) scale(${1 + progress * 0.1})`,
          filter: `brightness(${1 - progress * 0.55})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/25 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/20 to-transparent" />

      <div
        className="relative z-10 flex h-full flex-col justify-end"
        style={{
          opacity: Math.max(0, 1 - progress * 1.5),
          transform: `translate3d(0, ${progress * -60}px, 0)`,
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-14 md:px-10 md:pb-20">
          <FadeIn duration={900}>
            <div className="mb-7 flex items-start gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
              <span className="label text-white/55">
                Churrascaria · Barão Geraldo · Desde {site.fundacao}
              </span>
            </div>
          </FadeIn>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <AnimatedHeading
                text={'O ponto exato,\na cada corte.'}
                className="text-[2.75rem] font-medium leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl"
                initialDelay={350}
                charDelay={26}
              />

              <FadeIn delay={1100} duration={900}>
                <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
                  Rodízio completo em Campinas desde {site.fundacao}. Mais de {site.totais.cortes}{' '}
                  cortes na brasa e um buffet com mais de {site.totais.buffet} opções, incluindo
                  culinária japonesa.
                </p>
              </FadeIn>

              <FadeIn delay={1350} duration={900}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href={`tel:${principal.link}`}
                    className="rounded-full bg-bone px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-ember hover:text-bone"
                  >
                    Reservar mesa
                  </a>
                  <a
                    href="#cortes"
                    className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-bone transition-colors duration-300 hover:border-ember hover:text-ember"
                  >
                    Ver os cortes
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={1600} duration={900}>
              <dl className="divide-y divide-white/10 border-y border-white/10 lg:ml-auto lg:w-full lg:max-w-sm">
                {[
                  { termo: 'Hoje', valor: `${site.horario.abertura}h — ${site.horario.fechamento}h` },
                  { termo: 'Endereço', valor: site.endereco.rua },
                  { termo: 'Telefone', valor: principal.rotulo },
                ].map((linha) => (
                  <div key={linha.termo} className="flex items-baseline justify-between gap-6 py-3.5">
                    <dt className="label text-white/35">{linha.termo}</dt>
                    <dd className="text-right font-mono text-xs text-white/80">{linha.valor}</dd>
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
          <span className="label text-[9px] text-white/30">Role</span>
          <span className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
