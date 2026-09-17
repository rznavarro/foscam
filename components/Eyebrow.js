function Diamond() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
    </svg>
  );
}

export default function Eyebrow({ children, center = false }) {
  return (
    <div
      className={`mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-brass ${
        center ? "justify-center" : ""
      }`}
    >
      <Diamond />
      <span>{children}</span>
      <Diamond />
    </div>
  );
}
