import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/80 border-b border-slate-200/60 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]"
          : "backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/60 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[17px] font-semibold tracking-tight"
            >
              Solera
            </motion.span>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-[13px] text-slate-700">
            {[
              { href: "#features", label: "Functies" },
              { href: "#savings", label: "Besparing" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative hover:text-black transition-colors"
              >
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-[12px] font-medium hover:bg-black/90 transition-colors"
            >
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
