import { motion } from "framer-motion";
import { Sun, Battery, PlugZap, Gauge, CalendarClock, Leaf } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Slim PV-Management",
    desc: "Schaal zonnepanelen automatisch terug bij negatieve prijzen of netcongestie.",
  },
  {
    icon: Battery,
    title: "Thuisaccu Orchestratie",
    desc: "Laad en ontlaad op het optimale moment met weers- en prijsvoorspelling.",
  },
  {
    icon: PlugZap,
    title: "Smart Charging",
    desc: "Laad je EV wanneer de stroom het goedkoopst en groenst is.",
  },
  {
    icon: Gauge,
    title: "Realtime Inzicht",
    desc: "Bekijk productie, verbruik en netlevering in één duidelijk dashboard.",
  },
  {
    icon: CalendarClock,
    title: "Automatische Plannen",
    desc: "Kies je voorkeuren en laat Solera de rest doen – volledig handsfree.",
  },
  {
    icon: Leaf,
    title: "Groener Wonen",
    desc: "Maximaliseer eigen verbruik en verlaag je CO₂-voetafdruk.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[32px] font-semibold text-black tracking-tight"
          >
            Alles in één Energy Management System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="mt-3 text-[15px] text-slate-600"
          >
            Koppel en beheer al je apparaten in huis – Solera regelt het automatisch.
          </motion.p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -2 }}
              className="group relative rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]"
            >
              <div className="h-10 w-10 grid place-content-center rounded-xl bg-slate-100 text-black">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-[17px] font-semibold text-black">{title}</div>
              <p className="mt-1 text-[14px] leading-relaxed text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
