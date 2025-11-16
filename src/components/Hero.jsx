import { motion } from "framer-motion";
import { Sun, Car, WashingMachine, Battery, PlugZap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Slim energiebeheer voor thuis – bespaar automatisch met Solera
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-slate-700"
            >
              Koppel zonnepanelen, thuisaccu, laadpaal en slimme apparaten. Solera plant en stuurt automatisch aan op de goedkoopste en groenste momenten.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-lg bg-emerald-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-emerald-700">Plan een demo</a>
              <a href="#features" className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">Ontdek functies</a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-700">
              <div className="flex items-center gap-2"><Sun className="h-5 w-5 text-amber-500" /> Zonnepanelen</div>
              <div className="flex items-center gap-2"><Battery className="h-5 w-5 text-emerald-600" /> Thuisaccu</div>
              <div className="flex items-center gap-2"><PlugZap className="h-5 w-5 text-indigo-600" /> Laadpaal</div>
              <div className="flex items-center gap-2"><WashingMachine className="h-5 w-5 text-teal-600" /> Slimme apparaten</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-xl border p-4">
                  <div className="text-2xl font-bold text-slate-900">+18%</div>
                  <div className="text-xs text-slate-500">Meer eigen verbruik</div>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="text-2xl font-bold text-slate-900">-27%</div>
                  <div className="text-xs text-slate-500">Lagere energiekosten</div>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500">Automatisch</div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-slate-900 p-4 text-white">
                <div className="text-sm text-slate-300">Huidig plan</div>
                <div className="mt-1 font-semibold">Laad auto 22:00–06:00 • Zet wasmachine aan om 13:00 • Schaal PV terug bij piek 12:30</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
