export default function CTA() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900">Klaar om slimmer met energie om te gaan?</h3>
        <p className="mt-2 text-slate-700">Vraag een vrijblijvende demo aan en ontdek wat Solera voor jouw huishouden kan betekenen.</p>
        <form className="mt-6 grid sm:grid-cols-3 gap-3">
          <input type="text" placeholder="Naam" className="col-span-1 sm:col-span-1 rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <input type="email" placeholder="E-mail" className="col-span-1 sm:col-span-1 rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <button className="col-span-1 rounded-lg bg-emerald-600 text-white px-4 py-2 font-semibold hover:bg-emerald-700">Verstuur</button>
        </form>
        <p className="mt-3 text-xs text-slate-500">We reageren binnen één werkdag.</p>
      </div>
    </section>
  );
}
