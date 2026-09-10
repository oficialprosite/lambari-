import salaoCheio from '../assets/fotos/salao-cheio.webp'
import { site } from '../content'
import Reveal from './Reveal'

export default function Casa() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal offset={36}>
          <img
            src={salaoCheio}
            alt="Salão da Estância Grill durante o jantar, com mesas ocupadas"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </Reveal>

        <div>
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-ember" />
              <span className="label text-ink/45">A casa</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 text-3xl font-medium leading-[1.08] tracking-[-0.03em] md:text-5xl">
              {site.anos} anos na mesma esquina.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/65 md:text-lg">
              A Estância abriu em {site.fundacao} em Barão Geraldo e nunca mudou de endereço. No
              domingo o salão enche de família; na sexta, de confraternização de empresa; no meio da
              semana, de quem trabalha e estuda por aqui.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/65 md:text-lg">
              O que não muda é o rodízio: carne saindo da brasa até você virar a ficha.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="label mt-10 border-t border-ink/10 pt-5 text-ink/40">
              +{site.totais.cortes} cortes · +{site.totais.buffet} itens no buffet ·{' '}
              {site.horario.abertura}h às {site.horario.fechamento}h
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
