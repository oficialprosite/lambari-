import Buffet from './components/Buffet'
import Cortes from './components/Cortes'
import Estrutura from './components/Estrutura'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Numeros from './components/Numeros'
import Ponto from './components/Ponto'
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
        <Numeros />
        <Cortes />
        <Ponto />
        <Buffet />
        <Estrutura />
        <Visite />
      </main>

      <Footer />
    </>
  )
}
