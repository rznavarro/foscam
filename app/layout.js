import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const heading = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Foscam Chile | Cámaras de Seguridad IP, NVR/XVR y Hogar Inteligente",
    template: "%s | Foscam Chile",
  },
  description:
    "Cámaras de seguridad IP, grabadores NVR/XVR y accesorios de videovigilancia en Chile. Garantía oficial y soporte técnico en español.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${heading.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
