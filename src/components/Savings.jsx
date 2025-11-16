export default function Savings() {
  return (
    <section id="savings" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Zichtbare besparing, elke dag</h3>
            <p className="mt-3 text-slate-700">
              Met slimme planning en automatische aansturing verlaagt Solera je energierekening zonder dat je ernaar om hoeft te kijken. Gemiddeld zien gebruikers binnen 3 maanden duidelijke resultaten.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Minder netafname door beter eigen verbruik</li>
              <li>• Laad je EV op daluren en bij hoge zonopbrengst</li>
              <li>• Optimaliseer je thuisaccu op basis van prijs en weer</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border p-4 text-center">
                <div className="text-3xl font-bold text-emerald-600">27%</div>
                <div className="text-xs text-slate-500">Lagere kosten</div>
              </div>
              <div className="rounded-xl border p-4 text-center">
                <div className="text-3xl font-bold text-emerald-600">18%</div>
                <div className="text-xs text-slate-500">Meer eigen verbruik</div>
              </div>
              <div className="rounded-xl border p-4 text-center">
                <div className="text-3xl font-bold text-emerald-600">2-3 mnd</div>
                <div className="text-xs text-slate-500">Terugverdientijd</div>
              </div>
              <div className="rounded-xl border p-4 text-center">
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-xs text-slate-500">Automatisch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
