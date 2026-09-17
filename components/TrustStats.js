const stats = [
  { number: "+10", label: "Años en Chile" },
  { number: "+500", label: "Instalaciones realizadas" },
];

export default function TrustStats() {
  return (
    <section className="px-4 py-6">
      <div className="reveal glass-card mx-auto flex max-w-6xl flex-wrap justify-center divide-x divide-brass/10 rounded-[2rem] px-6 py-12 sm:gap-0">
        {stats.map((s) => (
          <div key={s.label} className="min-w-[180px] px-8 text-center">
            <span className="block font-mono text-3xl font-semibold text-ivory">
              {s.number}
            </span>
            <span className="text-xs uppercase tracking-wide text-taupe">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
