// Testimonios reales tomados de la página "Nosotros" de foscam.cl
const testimonials = [
  {
    name: "Nahir Guerrero Droguett",
    quote:
      "Las cámaras IP Foscam son las mejores, lo que más me gusta es que funcionan desde mi celular no importa donde esté. Veo mi negocio desde la casa y eso me encanta.",
  },
  {
    name: "Luz Angélica Rodríguez Santo",
    quote:
      "Hoy estuve en soporte técnico y atienden de maravilla, excelente su atención, amabilidad y paciencia. Recomiendo las cámaras de vigilancia Foscam.",
  },
  {
    name: "Gabriel Boré",
    quote:
      "Quiero agradecer el apoyo al tener que reconfigurar una cámara de mi casa. La asesoría y disposición a ayudar me permitieron recuperar mi cámara en un muy corto plazo. ¡Muchas gracias!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 font-heading text-2xl font-semibold text-ink">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-base border border-ink/10 bg-white p-6 shadow-card"
            >
              <span className="font-heading text-3xl text-signal-red">“</span>
              <p className="mt-2 text-sm text-ink/80">{t.quote}</p>
              <p className="mt-4 font-heading text-sm font-medium text-ink">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
