import { useEffect, useRef, useState } from 'react'
import { cortes, site } from '../content'
import { useStickyProgress } from '../hooks/useScroll'

export default function Cortes() {
  const { ref, progress } = useStickyProgress<HTMLDivElement>()
  const trilhoRef = useRef<HTMLDivElement>(null)
  const [distancia, setDistancia] = useState(0)

  useEffect(() => {
    const trilho = trilhoRef.current
    if (!trilho) return

    const medir = () => setDistancia(Math.max(0, trilho.scrollWidth - window.innerWidth))

    const observer = new ResizeObserver(medir)
    observer.observe(trilho)
    window.addEventListener('resize', medir)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', medir)
    }
  }, [])

  const atual = Math.min(cortes.length, Math.floor(progress * cortes.length) + 1)

  return (
    // The section is exactly as tall as the track is wide, so one pixel of
    // vertical scroll moves the track by one pixel.
    <section
      id="cortes"
      ref={ref}
      className="relative bg-white"
      style={{ height: `calc(100vh + ${distancia}px)` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-4">
                <span className="label text-ember">01</span>
                <span className="h-px w-10 bg-ink/20" />
                <span className="label text-ink/45">Cortes</span>
              </div>
              <h2 className="mt-5 max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
                Mais de {site.totais.cortes} cortes girando na brasa.
              </h2>
            </div>

            <div className="hidden shrink-0 text-right md:block">
              <span className="font-mono text-4xl font-light tracking-tight">
                {String(atual).padStart(2, '0')}
              </span>
              <span className="font-mono text-sm text-ink/35"> / {cortes.length}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-14">
          <div
            ref={trilhoRef}
            className="flex w-max gap-4 px-6 md:gap-5 md:px-10"
            style={{ transform: `translate3d(${-progress * distancia}px, 0, 0)` }}
          >
            {cortes.map((corte, index) => (
              <article
                key={corte.nome}
                className="group flex h-[420px] w-[78vw] flex-col overflow-hidden rounded-sm border border-ink/10 bg-cream transition-colors duration-500 hover:border-ember/50 sm:w-[340px] md:h-[460px] md:w-[400px]"
              >
                <div className="relative h-[200px] shrink-0 overflow-hidden md:h-[230px]">
                  <img
                    src={corte.foto}
                    alt={corte.nome}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="label absolute left-5 top-4 rounded-full bg-white/85 px-2 py-1 text-ink/70 backdrop-blur">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="label absolute right-5 top-4 rounded-full bg-charcoal/70 px-2.5 py-1 text-cream backdrop-blur">
                    {corte.origem}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-end p-6 md:p-7">
                  <h3 className="text-2xl font-medium tracking-[-0.02em] transition-colors duration-500 group-hover:text-ember md:text-3xl">
                    {corte.nome}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">{corte.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[1440px] px-6 md:px-10">
          <div className="h-px w-full bg-ink/10">
            <div
              className="h-full origin-left bg-ember"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
