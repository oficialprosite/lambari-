import { Baby, Car, Snowflake, Users } from 'lucide-react'
import { estrutura } from '../content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const icones = [Car, Baby, Snowflake, Users]

export default function Estrutura() {
  return (
    <section id="estrutura" className="border-y border-white/10 bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeader
          index="04"
          label="Estrutura"
          title="Feita para almoço de família e jantar de mesa cheia."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {estrutura.map((item, index) => {
            const Icone = icones[index]

            return (
              <Reveal key={item.titulo} delay={index * 90}>
                <div className="border-t border-white/15 pt-6">
                  <Icone size={22} strokeWidth={1.5} className="text-ember" />
                  <h3 className="mt-5 text-lg font-medium tracking-[-0.02em]">{item.titulo}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/45">{item.descricao}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
