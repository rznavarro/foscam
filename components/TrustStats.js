const stats = [
  { number: "+10", label: "Años en Chile" },
  { number: "+500", label: "Instalaciones realizadas" },
  { number: "100%", label: "Garantía oficial Foscam" },
];

export default function TrustStats() {
  return (
    <section className="px-4 py-6">
      <div className="reveal mx-auto flex max-w-6xl flex-wrap justify-center gap-10 rounded-[2rem] bg-ink px-6 py-12 text-white sm:gap-16">
        {stats.map((s) => (
          <div key={s.label} className="min-w-[140px] text-center">
            <span className="block font-mono text-3xl font-semibold">{s.number}</span>
            <span className="text-xs uppercase tracking-wide text-taupe">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
