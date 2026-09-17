export default function ChevronKnob({ size = "h-9 w-9", bg = "bg-brass-dark" }) {
  return (
    <span className={`flex ${size} shrink-0 items-center justify-center rounded-full ${bg}`}>
      <svg viewBox="0 0 18 18" width="40%" height="40%" fill="none" aria-hidden="true">
        <path
          d="m6.6 3.6 6 5.4-6 5.4"
          stroke="#fff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
