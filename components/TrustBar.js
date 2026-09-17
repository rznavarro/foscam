const items = [
  "Envío a todo Chile en 24h",
  "Garantía oficial Foscam",
  "Soporte técnico en español",
];

export default function TrustBar() {
  return (
    <div className="border-y border-ink/10 bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-3 text-xs font-medium uppercase tracking-wide text-ink/70 sm:justify-between sm:text-sm">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
