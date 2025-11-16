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
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Alles in één Energy Management System</h2>
          <p className="mt-3 text-slate-700">Koppel en beheer al je apparaten in huis – Solera regelt het automatisch.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 grid place-content-center rounded-lg bg-emerald-100 text-emerald-700">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-lg font-semibold text-slate-900">{title}</div>
              <p className="mt-1 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
