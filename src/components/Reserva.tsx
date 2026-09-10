import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { site, whatsappComMensagem } from '../content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const OCASIOES = [
  'Almoço em família',
  'Jantar entre amigos',
  'Confraternização de empresa',
  'Aniversário',
  'Ceia de Natal ou Réveillon',
]

/** Half-hour slots across the whole service, so nobody picks a closed time. */
const HORARIOS = Array.from({ length: (site.horario.fechamento - site.horario.abertura) * 2 }, (_, i) => {
  const minutos = site.horario.abertura * 60 + i * 30
  return `${String(Math.floor(minutos / 60)).padStart(2, '0')}:${String(minutos % 60).padStart(2, '0')}`
})

const PESSOAS = [...Array.from({ length: 12 }, (_, i) => String(i + 1)), '13 ou mais']

function hojeLocal() {
  const agora = new Date()
  const mes = String(agora.getMonth() + 1).padStart(2, '0')
  const dia = String(agora.getDate()).padStart(2, '0')
  return `${agora.getFullYear()}-${mes}-${dia}`
}

/** Built from the parts so the date is read in local time, not shifted by UTC. */
function porExtenso(iso: string) {
  const [ano, mes, dia] = iso.split('-').map(Number)
  return new Date(ano, mes - 1, dia).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

const campo =
  'w-full rounded-sm border border-ink/15 bg-cream px-4 py-3 text-base text-ink outline-none transition-colors duration-200 focus:border-ember'

export default function Reserva() {
  const [data, setData] = useState('')
  const [horario, setHorario] = useState('')
  const [pessoas, setPessoas] = useState('')
  const [ocasiao, setOcasiao] = useState('')
  const [nome, setNome] = useState('')

  const completo = data !== '' && horario !== '' && pessoas !== ''

  const mensagem = useMemo(() => {
    const linhas = [`Olá! Gostaria de reservar uma mesa na ${site.nome}.`, '']

    if (data) linhas.push(`Data: ${porExtenso(data)}`)
    if (horario) linhas.push(`Horário: ${horario}`)
    if (pessoas) linhas.push(`Pessoas: ${pessoas}`)
    if (ocasiao) linhas.push(`Ocasião: ${ocasiao}`)
    if (nome.trim()) linhas.push(`Nome: ${nome.trim()}`)

    return linhas.join('\n')
  }, [data, horario, pessoas, ocasiao, nome])

  return (
    <section id="reserva" className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeader
          index="05"
          label="Reserva"
          title="Sua mesa, sem vai e volta."
          description="Preencha os campos e o WhatsApp abre com a mensagem pronta. A casa recebe tudo de uma vez, em vez de perguntar data, horário e número de pessoas uma a uma."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="label text-ink/45">Data</span>
                <input
                  type="date"
                  value={data}
                  min={hojeLocal()}
                  onChange={(evento) => setData(evento.target.value)}
                  className={`mt-2.5 ${campo}`}
                />
              </label>

              <label className="block">
                <span className="label text-ink/45">Horário</span>
                <select
                  value={horario}
                  onChange={(evento) => setHorario(evento.target.value)}
                  className={`mt-2.5 ${campo}`}
                >
                  <option value="">Selecione</option>
                  {HORARIOS.map((hora) => (
                    <option key={hora} value={hora}>
                      {hora}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="label text-ink/45">Pessoas</span>
                <select
                  value={pessoas}
                  onChange={(evento) => setPessoas(evento.target.value)}
                  className={`mt-2.5 ${campo}`}
                >
                  <option value="">Selecione</option>
                  {PESSOAS.map((quantidade) => (
                    <option key={quantidade} value={quantidade}>
                      {quantidade}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="label text-ink/45">Ocasião</span>
                <select
                  value={ocasiao}
                  onChange={(evento) => setOcasiao(evento.target.value)}
                  className={`mt-2.5 ${campo}`}
                >
                  <option value="">Opcional</option>
                  {OCASIOES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="label text-ink/45">Nome</span>
                <input
                  type="text"
                  value={nome}
                  onChange={(evento) => setNome(evento.target.value)}
                  placeholder="Opcional"
                  className={`mt-2.5 ${campo} placeholder:text-ink/30`}
                />
              </label>
            </div>
          </Reveal>

          <Reveal delay={120} offset={36}>
            <div className="flex h-full flex-col rounded-sm border border-ink/10 bg-cream p-6 md:p-8">
              <span className="label text-ink/45">A mensagem que vai ser enviada</span>

              <pre className="mt-5 flex-1 whitespace-pre-wrap font-mono text-sm leading-relaxed text-ink/70">
                {mensagem}
              </pre>

              <a
                href={completo ? whatsappComMensagem(mensagem) : undefined}
                target="_blank"
                rel="noreferrer"
                aria-disabled={!completo}
                className={`mt-8 inline-flex items-center justify-between gap-4 rounded-full px-6 py-3.5 text-sm font-medium transition-colors duration-300 ${
                  completo
                    ? 'bg-ember text-cream hover:bg-ink'
                    : 'pointer-events-none bg-ink/10 text-ink/35'
                }`}
              >
                {completo ? 'Abrir no WhatsApp' : 'Escolha data, horário e pessoas'}
                <ArrowUpRight size={16} strokeWidth={2} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
