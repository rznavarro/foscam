export default function FaqSection({ title = "Preguntas frecuentes", items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="bg-offwhite py-14">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-6 font-heading text-2xl font-semibold text-ink">{title}</h2>
        <div className="divide-y divide-ink/10">
          {items.map((item) => (
            <div key={item.q} className="py-4">
              <h3 className="mb-2 font-heading text-base font-medium text-ink">{item.q}</h3>
              <p className="text-sm text-ink/80">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
