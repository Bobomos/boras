import Link from "next/link";
import type { ReactNode } from "react";

export function PillButton({ href, children, variant = "dark", arrow = false }: { href: string; children: ReactNode; variant?: "dark" | "outline"; arrow?: boolean }) {
  return (
    <Link className={`pill pill--${variant}`} href={href}>
      <span>{children}</span>
      {arrow ? <span aria-hidden="true">→</span> : null}
    </Link>
  );
}
