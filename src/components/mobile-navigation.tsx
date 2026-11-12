"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { siteCopy } from "@/content/data";
import type { Locale } from "@/content/types";
import { Arrow } from "./icons";
import { LanguageSwitcher } from "./language-switcher";

export function MobileNavigation({ locale }: { locale: Locale }) {
  const panelRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const { nav } = siteCopy[locale];
  const thinkingHref = `/${locale}/thinking`;
  const workHref = `/${locale}/work`;
  const closeMenu = () => panelRef.current?.close();

  useEffect(() => {
    panelRef.current?.close();
  }, [pathname]);

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 900px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) closeMenu();
    };
    mobileViewport.addEventListener("change", closeOnDesktop);
    return () => mobileViewport.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <div className="mobile-nav">
      <button className="mobile-nav__trigger" type="button" aria-haspopup="dialog" aria-controls="mobile-menu" onClick={() => panelRef.current?.showModal()}>{nav.menu}</button>
      <dialog ref={panelRef} className="mobile-nav__panel" id="mobile-menu" aria-label={nav.menu}>
        <div className="mobile-nav__top nav-shell">
          <Link className="brand" href={`/${locale}`} onClick={closeMenu}>
            <Image src="/logo.svg" alt="Bora Sıpal" width={95} height={40} />
          </Link>
          <button className="mobile-nav__close" type="button" onClick={closeMenu}>
            {nav.close}
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
              <path d="m3 3 8 8m0-8-8 8" fill="none" stroke="currentColor" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="mobile-nav__links" aria-label={nav.menu}>
          <Link href={thinkingHref} aria-current={pathname === thinkingHref ? "page" : undefined} onClick={closeMenu}>{nav.thinking}<Arrow /></Link>
          <Link href={workHref} aria-current={pathname === workHref ? "page" : undefined} onClick={closeMenu}>{nav.work}<Arrow /></Link>
        </nav>
        <div className="mobile-nav__bottom">
          <a className="mobile-nav__contact" href="https://www.linkedin.com/in/borasipal/" target="_blank" rel="noreferrer" onClick={closeMenu}>{nav.conversation}<span className="sr-only"> (opens in a new tab)</span><Arrow /></a>
          <LanguageSwitcher locale={locale} compact onSelect={closeMenu} />
        </div>
      </dialog>
    </div>
  );
}
