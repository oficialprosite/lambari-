import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react'
import { mapaUrl, site } from '../content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Visite() {
  return (
    <section id="visite" className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
      <SectionHeader index="05" label="Visite" title="Barão Geraldo, todos os dias." />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div className="divide-y divide-white/10 border-y border-white/10">
          <div className="flex gap-5 py-7">
            <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ember" />
            <div>
              <p className="label text-white/35">Endereço</p>
              <p className="mt-2.5 text-lg leading-snug tracking-[-0.01em]">{site.endereco.rua}</p>
              <p className="mt-1 text-sm text-white/45">{site.endereco.bairro}</p>
              <p className="text-sm text-white/45">
                {site.endereco.cidade} · {site.endereco.cep}
              </p>
            </div>
          </div>

          <div className="flex gap-5 py-7">
            <Phone size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ember" />
            <div>
              <p className="label text-white/35">Reservas</p>
              <div className="mt-2.5 flex flex-col gap-1.5">
                {site.telefones.map((telefone) => (
                  <a
                    key={telefone.link}
                    href={`tel:${telefone.link}`}
                    className="font-mono text-lg tracking-tight transition-colors duration-300 hover:text-ember"
                  >
                    {telefone.rotulo}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-5 py-7">
            <Clock size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ember" />
            <div>
              <p className="label text-white/35">Horário</p>
              <p className="mt-2.5 font-mono text-lg tracking-tight">
                {site.horario.abertura}:00 — {site.horario.fechamento}:00
              </p>
              <p className="mt-1 text-sm text-white/45">{site.horario.dias}</p>
            </div>
          </div>
        </div>

        <Reveal offset={36}>
          <div className="relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden border border-white/10 bg-surface p-8">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.07]"
              aria-hidden="true"
            >
              <defs>
                <pattern id="grade" width="56" height="56" patternUnits="userSpaceOnUse">
                  <path d="M56 0H0v56" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grade)" />
            </svg>

            <div className="relative">
              <span className="label text-white/35">Como chegar</span>
              <p className="mt-4 max-w-xs text-xl leading-snug tracking-[-0.02em]">
                A 5 minutos da Unicamp, com valet na porta.
              </p>
            </div>

            <div className="relative flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-ember" />
              </span>
              <span className="font-mono text-xs text-white/50">
                {site.endereco.cidade} · {site.endereco.cep}
              </span>
            </div>

            <a
              href={mapaUrl}
              target="_blank"
              rel="noreferrer"
              className="relative mt-8 inline-flex items-center justify-between gap-4 rounded-full bg-bone px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-ember hover:text-bone"
            >
              Abrir no Google Maps
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
