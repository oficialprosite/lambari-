import { site, whatsappUrl } from '../content'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.02em]">{site.nome}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/50">{site.descricao}</p>
          </div>

          <div className="flex flex-col gap-1.5 md:items-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm transition-colors duration-300 hover:text-ember-bright"
            >
              WhatsApp {site.whatsapp.rotulo}
            </a>
            {site.telefones.map((telefone) => (
              <a
                key={telefone.link}
                href={`tel:${telefone.link}`}
                className="font-mono text-sm text-cream/60 transition-colors duration-300 hover:text-ember-bright"
              >
                {telefone.rotulo}
              </a>
            ))}
            <p className="mt-2 font-mono text-xs text-cream/35">
              {site.endereco.rua} · {site.endereco.cidade}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="label text-cream/35">
            © {new Date().getFullYear()} {site.nome}
          </span>
          <span className="label text-cream/35">Feito por Buzz e Rodi</span>
        </div>
      </div>
    </footer>
  )
}
