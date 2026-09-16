export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56949492042"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chatea con nosotros por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-card-hover transition hover:scale-105"
    >
      <span aria-hidden="true">💬</span>
    </a>
  );
}
