const stats = [
  { number: "+10", label: "Años en Chile" },
  { number: "+500", label: "Instalaciones realizadas" },
  { number: "100%", label: "Garantía oficial Foscam" },
];

export default function TrustStats() {
  return (
    <section className="bg-navy-deep py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-10 px-4 text-center">
        {stats.map((s) => (
          <div key={s.label} className="min-w-[160px]">
            <span className="block font-mono text-3xl font-semibold">{s.number}</span>
            <span className="text-xs uppercase tracking-wide text-taupe">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
