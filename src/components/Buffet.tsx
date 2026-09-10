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
        description="A composição muda todos os dias conforme a feira da manhã. Estas são as famílias fixas do buffet."
      />

      <Reveal offset={36}>
        <img
          src={buffetJapones}
          alt="Ilha de culinária japonesa do buffet, com sushi, sashimi e acompanhamentos"
          loading="lazy"
          className="mt-14 aspect-[16/9] w-full rounded-sm object-cover"
        />
      </Reveal>

      <div className="mt-14 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
        {buffet.map((grupo, index) => (
          <Reveal key={grupo.titulo} delay={index * 90} className="h-full bg-white">
            <div className="flex h-full flex-col p-6 md:p-8">
              <span className="label text-ink/30">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-xl font-medium tracking-[-0.02em]">{grupo.titulo}</h3>

              <ul className="mt-6 space-y-2.5">
                {grupo.itens.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink/60">
                    <span className="h-px w-3 shrink-0 bg-ember" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
