import Testimonials from "@/components/Testimonials";
import Eyebrow from "@/components/Eyebrow";

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
      <section className="noise-overlay bg-panel py-14">
        <div className="relative z-[2] mx-auto max-w-3xl px-4">
          <Eyebrow>Nosotros</Eyebrow>
          <h1 className="font-heading text-3xl font-semibold text-ivory">
            Nosotros somos Foscam en Chile
          </h1>
          <p className="mt-4 text-ivory/70">
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
        <h2 className="font-heading text-2xl font-semibold text-ivory">Datos de contacto</h2>
        <p className="mt-4 text-ivory/70">
          <strong className="text-ivory">Foscam Chile</strong>
          <br />
          Teléfono / WhatsApp: +56 9 4949 2042
          <br />
          Sitio web: foscam.cl
        </p>
        <p className="mt-4 text-ivory/70">
          Todos nuestros productos cuentan con garantía oficial del fabricante y soporte técnico
          en español.
        </p>
      </section>

      <section className="bg-panel py-14">
        <div className="mx-auto max-w-4xl px-4">
          <Eyebrow>Guía de compra</Eyebrow>
          <h2 className="font-heading text-2xl font-semibold text-ivory">
            ¿Qué cámara elegir según tu necesidad?
          </h2>
          <div className="glass-card mt-6 overflow-x-auto rounded-base">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-brass/10 text-xs uppercase tracking-wide text-taupe">
                  <th className="p-4">Necesidad</th>
                  <th className="p-4">Recomendación</th>
                  <th className="p-4">Por qué</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.need} className="border-b border-brass/5 last:border-0">
                    <td className="p-4 font-medium text-ivory">{row.need}</td>
                    <td className="p-4 text-ivory/70">{row.rec}</td>
                    <td className="p-4 text-ivory/50">{row.why}</td>
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
