import { motion, useScroll, useTransform } from "framer-motion";
import { Sun, Car, WashingMachine, Battery, PlugZap } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-teal-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-300/40 blur-3xl"
        style={{ y: yParallax }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-teal-300/40 blur-3xl"
        style={{ y: yParallax }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Slim energiebeheer voor thuis – bespaar automatisch met Solera
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-slate-700"
            >
              Koppel zonnepanelen, thuisaccu, laadpaal en slimme apparaten. Solera plant en stuurt automatisch aan op de goedkoopste en groenste momenten.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center rounded-lg bg-emerald-600 text-white px-5 py-3 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] hover:bg-emerald-700"
              >
                Plan een demo
              </motion.a>
              <motion.a
                whileHover={{ x: 2 }}
                href="#features"
                className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Ontdek functies
              </motion.a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-700">
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2"><Sun className="h-5 w-5 text-amber-500" /> Zonnepanelen</motion.div>
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2"><Battery className="h-5 w-5 text-emerald-600" /> Thuisaccu</motion.div>
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2"><PlugZap className="h-5 w-5 text-indigo-600" /> Laadpaal</motion.div>
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2"><WashingMachine className="h-5 w-5 text-teal-600" /> Slimme apparaten</motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl overflow-hidden">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-10 bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-transparent rounded-[40px] blur-2xl"
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              />
              <div className="relative grid grid-cols-3 gap-4 text-center">
                {[{v:"+18%", l:"Meer eigen verbruik"},{v:"-27%", l:"Lagere energiekosten"},{v:"100%", l:"Automatisch"}].map((card, i) => (
                  <motion.div key={i} whileHover={{ y: -3 }} className="rounded-xl border p-4 bg-white/90">
                    <div className="text-2xl font-bold text-slate-900">{card.v}</div>
                    <div className="text-xs text-slate-500">{card.l}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-6 rounded-xl bg-slate-900 p-4 text-white"
              >
                <div className="text-sm text-slate-300">Huidig plan</div>
                <div className="mt-1 font-semibold">Laad auto 22:00–06:00 • Zet wasmachine aan om 13:00 • Schaal PV terug bij piek 12:30</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
