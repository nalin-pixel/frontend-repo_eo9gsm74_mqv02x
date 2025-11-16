import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CountUp({ to, duration = 1.2, suffix = "" }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start;
    const from = 0;
    const raf = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      const v = Math.floor(from + (to - from) * p);
      setVal(v);
      if (p < 1) requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, [to, duration]);
  return <span>{val}{suffix}</span>;
}

export default function Savings() {
  return (
    <section id="savings" className="py-24 bg-[linear-gradient(180deg,#f8fafc,white)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h3 className="text-[32px] font-semibold text-black tracking-tight">Zichtbare besparing, elke dag</h3>
            <p className="mt-3 text-[15px] text-slate-600 leading-relaxed">
              Met slimme planning en automatische aansturing verlaagt Solera je energierekening zonder extra moeite. Gemiddeld zien gebruikers binnen 3 maanden duidelijke resultaten.
            </p>
            <ul className="mt-6 space-y-2 text-[14px] text-slate-700">
              <li>• Minder netafname door beter eigen verbruik</li>
              <li>• Laad je EV op daluren en bij hoge zonopbrengst</li>
              <li>• Optimaliseer je thuisaccu op basis van prijs en weer</li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -2 }} className="rounded-xl border p-5 text-center">
                  <div className="text-[32px] font-semibold text-black"><CountUp to={27} suffix="%" /></div>
                  <div className="text-xs text-slate-500">Lagere kosten</div>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="rounded-xl border p-5 text-center">
                  <div className="text-[32px] font-semibold text-black"><CountUp to={18} suffix="%" /></div>
                  <div className="text-xs text-slate-500">Meer eigen verbruik</div>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="rounded-xl border p-5 text-center">
                  <div className="text-[32px] font-semibold text-black">2-3 mnd</div>
                  <div className="text-xs text-slate-500">Terugverdientijd</div>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="rounded-xl border p-5 text-center">
                  <div className="text-[32px] font-semibold text-black">100%</div>
                  <div className="text-xs text-slate-500">Automatisch</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
