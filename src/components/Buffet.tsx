import ilhaFrios from '../assets/fotos/ilha-frios.jpeg'
import japones from '../assets/fotos/japones.jpeg'
import queijos from '../assets/fotos/queijos.jpeg'
import quentes from '../assets/fotos/quentes.jpeg'
import { buffet, site } from '../content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const galeria = [
  { foto: japones, legenda: 'Mesa japonesa', alt: 'Sushi, sashimi e uramaki na mesa japonesa' },
  { foto: ilhaFrios, legenda: 'Ilha de frios', alt: 'Ilha central com queijos, embutidos e antepastos' },
  { foto: queijos, legenda: 'Queijos e conservas', alt: 'Tábua de queijos curados, gorgonzola e conservas' },
  { foto: quentes, legenda: 'Quentes do dia', alt: 'Prato quente montado com ervas e legumes' },
]

export default function Buffet() {
  return (
    <section id="buffet" className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
      <SectionHeader
        index="03"
        label="Buffet"
        title={`Mais de ${site.totais.buffet} opções antes de a primeira carne chegar.`}
      />

      {/* Four equal frames rather than one hero shot: the point of the section
          is how much there is, and equal weight says that better than hierarchy. */}
      <div className="mt-14 grid grid-cols-2 gap-3 md:gap-5">
        {galeria.map((item, index) => (
          <Reveal key={item.legenda} delay={index * 90} offset={36}>
            <figure>
              <img
                src={item.foto}
                alt={item.alt}
                loading="lazy"
                className="aspect-[3/2] w-full rounded-sm object-cover"
              />
              <figcaption className="label mt-3 text-ink/45">{item.legenda}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
        {buffet.map((grupo, index) => (
          <Reveal key={grupo.titulo} delay={index * 80}>
            <div className="py-6 md:flex md:items-baseline md:gap-8">
              <div className="flex shrink-0 items-baseline gap-4 md:w-64">
                <span className="label text-ember">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-xl leading-snug md:text-2xl">{grupo.titulo}</h3>
              </div>
              <p className="mt-2.5 pl-[3.25rem] text-[0.9375rem] leading-relaxed text-ink/60 md:mt-0 md:pl-0">
                {grupo.itens.join(' · ')}
              </p>
            </div>
          </Reveal>
        ))}

        <p className="label py-5 text-ink/35">
          A composição muda todos os dias conforme a feira da manhã
        </p>
      </div>
    </section>
  )
}
