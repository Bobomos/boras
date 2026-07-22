export function Arrow({ direction = "right" }: { direction?: "right" | "left" }) {
  return (
    <svg aria-hidden="true" className={`arrow arrow--${direction}`} viewBox="0 0 16 16" width="16" height="16">
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
