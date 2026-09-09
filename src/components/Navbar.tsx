import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { site } from '../content'
import { useScrolledPast } from '../hooks/useScroll'

const links = [
  { label: 'Cortes', href: '#cortes' },
  { label: 'Ponto', href: '#ponto' },
  { label: 'Buffet', href: '#buffet' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Visite', href: '#visite' },
]

export default function Navbar() {
  const scrolled = useScrolledPast(24)
  const [open, setOpen] = useState(false)
  const [principal] = site.telefones

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled || open ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-6 transition-all duration-500 md:px-10 ${
          scrolled ? 'h-16' : 'h-20 md:h-24'
        }`}
      >
        <a href="#topo" className="flex items-baseline gap-3">
          <span className="text-lg font-semibold tracking-[-0.02em]">{site.nome}</span>
          <span className="label hidden text-white/35 sm:block">Campinas</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors duration-300 hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${principal.link}`}
            className="hidden items-center gap-2 font-mono text-xs text-white/60 transition-colors duration-300 hover:text-ember md:flex"
          >
            <Phone size={13} strokeWidth={1.75} />
            {principal.rotulo}
          </a>

          <a
            href="#visite"
            className="rounded-full bg-bone px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-ember hover:text-bone"
          >
            Reservar
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 lg:hidden"
          >
            {open ? <X size={16} strokeWidth={1.75} /> : <Menu size={16} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-6 pb-6 pt-2 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/5 py-3.5 text-lg text-white/80"
            >
              {link.label}
              <span className="label text-white/25">
                {String(links.indexOf(link) + 1).padStart(2, '0')}
              </span>
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
