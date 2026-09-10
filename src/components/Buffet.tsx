import buffetJapones from '../assets/fotos/buffet-japones-detalhe.webp'
import { buffet, site } from '../content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Buffet() {
  return (
    <section id="buffet" className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
      <SectionHeader
        index="03"
        label="Buffet"
        title={`Mais de ${site.totais.buffet} opções antes de a primeira carne chegar.`}
      />

      <Reveal offset={36}>
        <img
          src={buffetJapones}
          alt="Ilha de culinária japonesa do buffet, com sushi, sashimi e acompanhamentos"
          loading="lazy"
          className="mt-14 aspect-[16/9] w-full rounded-sm object-cover"
        />
      </Reveal>

      {/* Reads as a menu card rather than a feature grid: hairline columns,
          serif headings, and the fine print set at the foot like a real menu. */}
      <div className="mt-14 overflow-hidden rounded-sm border border-ink/12 bg-white">
        <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {buffet.map((grupo, index) => (
            <Reveal key={grupo.titulo} delay={index * 90} className="h-full bg-white">
              <div className="h-full px-7 py-8 md:px-8">
                <span className="label text-ink/25">{String(index + 1).padStart(2, '0')}</span>

                <h3 className="mt-3 text-xl leading-snug md:text-[1.375rem]">{grupo.titulo}</h3>
                <div className="mt-4 h-0.5 w-9 bg-ember" />

                <ul className="mt-6 space-y-3">
                  {grupo.itens.map((item) => (
                    <li key={item} className="text-[0.9375rem] leading-snug text-ink/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="border-t border-ink/10 px-7 py-5 md:px-8">
          <p className="label text-ink/35">
            A composição muda todos os dias conforme a feira da manhã
          </p>
        </div>
      </div>
    </section>
  )
}
