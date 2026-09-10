import { Baby, CircleParking, Snowflake, Users } from 'lucide-react'
import fachadaNoite from '../assets/fotos/fachada-noite.webp'
import salaoBuffet from '../assets/fotos/salao-buffet.webp'
import salao from '../assets/fotos/salao.webp'
import { estrutura } from '../content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const icones = [CircleParking, Baby, Snowflake, Users]

export default function Estrutura() {
  return (
    <section id="estrutura" className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeader
          index="04"
          label="Estrutura"
          title="Feita para família, empresa e turma de amigos."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-[1fr_1.35fr] md:gap-5">
          <Reveal offset={36}>
            <img
              src={fachadaNoite}
              alt="Fachada da Estância Grill iluminada à noite"
              loading="lazy"
              className="h-full min-h-[280px] w-full rounded-sm object-cover"
            />
          </Reveal>

          <div className="grid gap-4 md:gap-5">
            <Reveal delay={90} offset={36}>
              <img
                src={salao}
                alt="Salão amplo com mesas postas e vista para o jardim"
                loading="lazy"
                className="aspect-[16/9] w-full rounded-sm object-cover"
              />
            </Reveal>

            <Reveal delay={180} offset={36}>
              <img
                src={salaoBuffet}
                alt="Ilha central de buffet no salão"
                loading="lazy"
                className="aspect-[16/9] w-full rounded-sm object-cover"
              />
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {estrutura.map((item, index) => {
            const Icone = icones[index]

            return (
              <Reveal key={item.titulo} delay={index * 90}>
                <div className="border-t border-ink/15 pt-6">
                  <Icone size={22} strokeWidth={1.5} className="text-ember" />
                  <h3 className="mt-5 text-lg font-medium tracking-[-0.02em]">{item.titulo}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/55">{item.descricao}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
