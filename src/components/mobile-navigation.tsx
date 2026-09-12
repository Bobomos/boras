"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteCopy } from "@/content/data";
import type { Locale } from "@/content/types";
import { LanguageSwitcher } from "./language-switcher";

export function MobileNavigation({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const copy = siteCopy[locale];
  const closeMenu = () => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return () => document.body.classList.remove("menu-open");

    const panel = panelRef.current;
    const focusable = () => [...(panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])];
    requestAnimationFrame(() => focusable()[0]?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); closeMenu(); return; }
      if (event.key !== "Tab") return;
      const items = focusable(); if (!items.length) return;
      const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.classList.remove("menu-open"); };
  }, [open]);
  return (
    <div className="mobile-nav">
      <button ref={triggerRef} className="mobile-nav__trigger" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => open ? closeMenu() : setOpen(true)}>{open ? copy.nav.close : copy.nav.menu}</button>
      {open ? (
        <div ref={panelRef} className="mobile-nav__panel" id="mobile-menu" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
          <h2 id="mobile-menu-title" className="sr-only">{copy.nav.menu}</h2>
          <div className="mobile-nav__top"><Link href={`/${locale}`} onClick={closeMenu}><Image src="/logo.svg" alt="Bora Sıpal" width={95} height={40} /></Link><button type="button" onClick={closeMenu}>{copy.nav.close}</button></div>
          <nav aria-label="Mobile navigation">
            <Link href={`/${locale}/thinking`} onClick={closeMenu}>{copy.nav.thinking}</Link>
            <Link href={`/${locale}/work`} onClick={closeMenu}>{copy.nav.work}</Link>
            <a href="https://www.linkedin.com/in/borasipal/" target="_blank" rel="noreferrer" onClick={closeMenu}>{copy.nav.conversation}<span className="sr-only"> (opens in a new tab)</span></a>
          </nav>
          <LanguageSwitcher locale={locale} compact />
        </div>
      ) : null}
    </div>
  );
}
