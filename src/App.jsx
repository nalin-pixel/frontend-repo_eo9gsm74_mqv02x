import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Savings from './components/Savings'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Savings />
        <CTA />
      </main>
      <footer className="border-t border-slate-200/70 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="tracking-tight">© {new Date().getFullYear()} Solera</div>
          <div className="space-x-6">
            <a href="#features" className="hover:text-slate-700 transition-colors">Functies</a>
            <a href="#savings" className="hover:text-slate-700 transition-colors">Besparing</a>
            <a href="#contact" className="hover:text-slate-700 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App