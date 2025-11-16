import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Subtle gradient lights like Apple hero */}
      <motion.div
        className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)]"
        style={{ y: yParallax }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.16),transparent_60%)]"
        style={{ y: yParallax }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-[44px] sm:text-[56px] leading-[1.05] font-semibold tracking-tight text-black"
            >
              Solera. Slim energiebeheer. Mooier. Rustiger. Efficiënter.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-[17px] text-slate-600"
            >
              Koppel zonnepanelen, thuisaccu, laadpaal en slimme apparaten. Solera plant en stuurt automatisch aan op de goedkoopste en groenste momenten.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-[13px] font-semibold shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] hover:bg-black/90"
              >
                Plan een demo
              </motion.a>
              <a
                href="#features"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-[13px] font-semibold text-black hover:bg-slate-50"
              >
                Ontdek functies
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-700">
              {["Zonnepanelen","Thuisaccu","Laadpaal","Slimme apparaten"].map((l, i) => (
                <motion.div key={i} whileHover={{ y: -2 }} className="text-[13px] text-slate-600">
                  {l}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-md rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] overflow-hidden">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-10 rounded-[40px]"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 10 }}
                style={{ background:
                  "radial-gradient(600px circle at 0% 0%, rgba(0,0,0,0.06), transparent 40%)," +
                  "radial-gradient(600px circle at 100% 100%, rgba(0,0,0,0.05), transparent 40%)" }}
              />
              <div className="relative grid grid-cols-3 gap-4 text-center">
                {[{v:"+18%", l:"Meer eigen verbruik"},{v:"-27%", l:"Lagere energiekosten"},{v:"100%", l:"Automatisch"}].map((card, i) => (
                  <motion.div key={i} whileHover={{ y: -2 }} className="rounded-2xl border p-4 bg-white/90">
                    <div className="text-2xl font-semibold text-black">{card.v}</div>
                    <div className="text-xs text-slate-500">{card.l}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-6 rounded-xl bg-black p-4 text-white"
              >
                <div className="text-xs/5 text-white/70">Huidig plan</div>
                <div className="mt-1 text-[13px] font-medium">Laad auto 22:00–06:00 • Zet wasmachine aan om 13:00 • Schaal PV terug bij piek 12:30</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
