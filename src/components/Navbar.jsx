import { useEffect, useState } from "react";
import { Menu, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled
        ? "backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/80 border-b border-slate-200 shadow-sm"
        : "backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/60 border-b border-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <motion.div
              initial={{ scale: 0.9, rotate: -8, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 grid place-content-center text-white shadow-lg"
            >
              <Sun className="h-5 w-5" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Solera</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            {[
              { href: "#features", label: "Functies" },
              { href: "#how", label: "Hoe het werkt" },
              { href: "#savings", label: "Besparing" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <motion.a
                whileHover={{ y: -1 }}
                key={item.href}
                href={item.href}
                className="relative hover:text-slate-900"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-emerald-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ y: -1, boxShadow: "0 10px 20px -10px rgba(16,185,129,0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800"
            >
              Vraag demo aan
            </motion.a>
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
