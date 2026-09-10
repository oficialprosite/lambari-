import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import fachadaDia from '../assets/fotos/fachada-dia.webp'
import { emUmaLinha, horarios, mapaUrl, site, whatsappUrl } from '../content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Visite() {
  return (
    <section id="visite" className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeader index="06" label="Visite" title="Barão Geraldo, todos os dias." />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            <div className="flex gap-5 py-7">
              <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ember" />
              <div>
                <p className="label text-ink/40">Endereço</p>
                <p className="mt-2.5 text-lg leading-snug tracking-[-0.01em]">{site.endereco.rua}</p>
                <p className="mt-1 text-sm text-ink/55">{site.endereco.bairro}</p>
                <p className="text-sm text-ink/55">
                  {site.endereco.cidade} · {site.endereco.cep}
                </p>
              </div>
            </div>

            <div className="flex gap-5 py-7">
              <MessageCircle size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ember" />
              <div>
                <p className="label text-ink/40">WhatsApp</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2.5 inline-block font-mono text-lg tracking-tight transition-colors duration-300 hover:text-ember"
                >
                  {site.whatsapp.rotulo}
                </a>
              </div>
            </div>

            <div className="flex gap-5 py-7">
              <Phone size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ember" />
              <div>
                <p className="label text-ink/40">Telefone</p>
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
                <p className="label text-ink/40">Horário</p>
                <div className="mt-2.5 flex flex-col gap-3">
                  {horarios.map((entrada) => (
                    <div key={entrada.dias}>
                      <p className="text-sm text-ink/55">{entrada.dias}</p>
                      <p className="mt-0.5 font-mono text-lg tracking-tight">
                        {emUmaLinha(entrada)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Reveal offset={36}>
            <div className="flex h-full flex-col">
              <img
                src={fachadaDia}
                alt="Entrada da Estância Grill, com estacionamento coberto"
                loading="lazy"
                className="aspect-[16/10] w-full rounded-sm object-cover"
              />

              <p className="mt-6 text-lg leading-snug text-ink/70">
                A 5 minutos da Unicamp, com estacionamento gratuito na porta.
              </p>

              <a
                href={mapaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-between gap-4 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-ember"
              >
                Abrir no Google Maps
                <ArrowUpRight size={16} strokeWidth={2} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
