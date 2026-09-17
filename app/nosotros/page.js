import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Nosotros",
  description:
    "Foscam Chile: cámaras de vigilancia y servicios de instalación desde 2012. Conoce quiénes somos.",
};

const compareRows = [
  {
    need: "Vigilar el interior de la casa",
    rec: "Cámara IP de interior (ej. Foscam X5)",
    why: "Detección de personas por IA, audio bidireccional, no necesita resistencia al agua",
  },
  {
    need: "Vigilar patio, entrada o fachada",
    rec: "Cámara IP de exterior IP66 (ej. Foscam V5P)",
    why: "Resiste lluvia y clima, visión nocturna con luz, sirena disuasiva",
  },
  {
    need: "Casa o local sin buena señal WiFi",
    rec: "Cámara o grabador con conexión PoE",
    why: "Alimentación y datos por el mismo cable de red, sin depender del WiFi",
  },
  {
    need: "Ya tengo cámaras análogas/CCTV",
    rec: "Grabador XVR",
    why: "Acepta cámaras análogas por coaxial y, en varios modelos, también cámaras IP",
  },
  {
    need: "Negocio con muchas cámaras (8+)",
    rec: "Grabador NVR de 16 a 32 canales + disco 2TB+",
    why: "Escala a más cámaras sin perder rendimiento ni días de respaldo",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-ivory py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-heading text-3xl font-semibold text-ink">
            Nosotros somos Foscam en Chile
          </h1>
          <p className="mt-4 text-ink/80">
            Foscam Chile es una empresa que vende cámaras de vigilancia y ofrece servicios de
            instalación, configuración y mantención de equipos de seguridad. Foscam llegó al
            mercado local en enero de 2012, uno de los primeros países de Sudamérica en
            distribuir la marca. Hemos obtenido certificaciones importantes: aprobación FCC en
            todas nuestras cámaras IP inalámbricas, y certificación internacional CE y RoHS
            desde el inicio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="font-heading text-2xl font-semibold text-ink">Datos de contacto</h2>
        <p className="mt-4 text-ink/80">
          <strong className="text-ink">Foscam Chile</strong>
          <br />
          Teléfono / WhatsApp: +56 9 4949 2042
          <br />
          Sitio web: foscam.cl
        </p>
        <p className="mt-4 text-ink/80">
          Todos nuestros productos cuentan con garantía oficial del fabricante y soporte técnico
          en español.
        </p>
      </section>

      <section className="bg-ivory py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            ¿Qué cámara elegir según tu necesidad?
          </h2>
          <div className="mt-6 overflow-x-auto rounded-base bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-xs uppercase tracking-wide text-taupe">
                  <th className="p-4">Necesidad</th>
                  <th className="p-4">Recomendación</th>
                  <th className="p-4">Por qué</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.need} className="border-b border-ink/5 last:border-0">
                    <td className="p-4 font-medium text-ink">{row.need}</td>
                    <td className="p-4 text-ink/80">{row.rec}</td>
                    <td className="p-4 text-ink/60">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
