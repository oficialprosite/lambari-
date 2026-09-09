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

      <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {buffet.map((grupo, index) => (
          <Reveal key={grupo.titulo} delay={index * 90} className="group h-full bg-ink">
            <div className="flex h-full flex-col">
              <div className="relative h-44 shrink-0 overflow-hidden">
                <img
                  src={grupo.foto}
                  alt={grupo.titulo}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <span className="label absolute left-6 top-5 text-white/70 md:left-8">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-5 md:p-8 md:pt-6">
                <h3 className="text-xl font-medium tracking-[-0.02em]">{grupo.titulo}</h3>

                <ul className="mt-6 space-y-2.5">
                  {grupo.itens.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/50">
                      <span className="h-px w-3 shrink-0 bg-ember/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
