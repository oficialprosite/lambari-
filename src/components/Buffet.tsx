import buffetJapones from '../assets/fotos/buffet-japones.webp'
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

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <Reveal offset={36}>
          <img
            src={buffetJapones}
            alt="Ilha de culinária japonesa do buffet, com sushi, sashimi e uramaki"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </Reveal>

        {/* Items run inline instead of stacking: four tight rows read denser and
            more like a menu than four tall columns of single words. */}
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {buffet.map((grupo, index) => (
            <Reveal key={grupo.titulo} delay={index * 80}>
              <div className="py-6">
                <div className="flex items-baseline gap-4">
                  <span className="label text-ember">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl leading-snug md:text-2xl">{grupo.titulo}</h3>
                </div>
                <p className="mt-2.5 pl-[3.25rem] text-[0.9375rem] leading-relaxed text-ink/60">
                  {grupo.itens.join(' · ')}
                </p>
              </div>
            </Reveal>
          ))}

          <p className="label py-5 text-ink/35">
            A composição muda todos os dias conforme a feira da manhã
          </p>
        </div>
      </div>
    </section>
  )
}
