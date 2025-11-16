import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Savings from './components/Savings'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Savings />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="font-semibold text-slate-900">Solera</span>
            <span className="text-sm">© {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm text-slate-600">Slim energiebeheer voor thuis</div>
        </div>
      </footer>
    </div>
  )
}

export default App