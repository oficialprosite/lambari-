const links = ['Nossa História', 'Cardápio', 'Eventos', 'Unidades']

export default function Navbar() {
  return (
    <header className="px-6 pt-6 md:px-12 lg:px-16">
      <nav className="liquid-glass flex items-center justify-between rounded-xl px-4 py-2">
        <a href="#" className="text-2xl font-semibold tracking-tight">
          Estância Churrascaria
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm transition-colors duration-300 hover:text-gray-300"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors duration-300 hover:bg-[#FF6F00] hover:text-white"
        >
          Fazer Reserva
        </button>
      </nav>
    </header>
  )
}
