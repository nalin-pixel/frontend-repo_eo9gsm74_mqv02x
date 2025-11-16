import { Menu, Sun, Battery, Plug, Home } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 grid place-content-center text-white shadow-lg">
              <Sun className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Solera</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900">Functies</a>
            <a href="#how" className="hover:text-slate-900">Hoe het werkt</a>
            <a href="#savings" className="hover:text-slate-900">Besparing</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800">
              Vraag demo aan
            </a>
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
