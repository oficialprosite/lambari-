import Buffet from './components/Buffet'
import Casa from './components/Casa'
import Cortes from './components/Cortes'
import Estrutura from './components/Estrutura'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Ponto from './components/Ponto'
import Reserva from './components/Reserva'
import ScrollProgress from './components/ScrollProgress'
import Ticker from './components/Ticker'
import Visite from './components/Visite'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Ticker />
        <Casa />
        <Cortes />
        <Ponto />
        <Buffet />
        <Estrutura />
        <Reserva />
        <Visite />
      </main>

      <Footer />
    </>
  )
}
