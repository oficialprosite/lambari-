import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { site } from '../content'
import { useScrolledPast } from '../hooks/useScroll'

const links = [
  { label: 'Cortes', href: '#cortes' },
  { label: 'Ponto', href: '#ponto' },
  { label: 'Buffet', href: '#buffet' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Reserva', href: '#reserva' },
  { label: 'Visite', href: '#visite' },
]

export default function Navbar() {
  const scrolled = useScrolledPast(24)
  const [open, setOpen] = useState(false)
  const [principal] = site.telefones

  // Over the hero video the bar is transparent with light type; once the cream
  // page scrolls under it, it flips to a solid light bar with dark type.
  const claro = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        claro ? 'border-b border-ink/10 bg-cream/90 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-6 transition-all duration-500 md:px-10 ${
          scrolled ? 'h-16' : 'h-20 md:h-24'
        }`}
      >
        <a href="#topo" className="flex items-baseline gap-3">
          <span
            className={`text-lg font-semibold tracking-[-0.02em] transition-colors duration-500 ${
              claro ? 'text-ink' : 'text-cream'
            }`}
          >
            {site.nome}
          </span>
          <span
            className={`label hidden transition-colors duration-500 sm:block ${
              claro ? 'text-ink/40' : 'text-cream/60'
            }`}
          >
            Campinas
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-300 ${
                claro ? 'text-ink/60 hover:text-ink' : 'text-cream/70 hover:text-cream'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${principal.link}`}
            className={`hidden items-center gap-2 font-mono text-xs transition-colors duration-300 hover:text-ember md:flex ${
              claro ? 'text-ink/60' : 'text-cream/70'
            }`}
          >
            <Phone size={13} strokeWidth={1.75} />
            {principal.rotulo}
          </a>

          <a
            href="#reserva"
            className="rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-ink"
          >
            Reservar
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-500 lg:hidden ${
              claro ? 'border-ink/20 text-ink/80' : 'border-cream/30 text-cream'
            }`}
          >
            {open ? <X size={16} strokeWidth={1.75} /> : <Menu size={16} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink/10 px-6 pb-6 pt-2 lg:hidden">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-ink/5 py-3.5 text-lg text-ink/80"
            >
              {link.label}
              <span className="label text-ink/25">{String(index + 1).padStart(2, '0')}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
