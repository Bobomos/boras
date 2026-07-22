"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteCopy } from "@/content/data";
import type { Locale } from "@/content/types";
import { LanguageSwitcher } from "./language-switcher";

export function MobileNavigation({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const copy = siteCopy[locale];
  useEffect(() => { document.body.classList.toggle("menu-open", open); return () => document.body.classList.remove("menu-open"); }, [open]);
  return (
    <div className="mobile-nav">
      <button className="mobile-nav__trigger" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>{open ? copy.nav.close : copy.nav.menu}</button>
      {open ? (
        <div className="mobile-nav__panel" id="mobile-menu">
          <div className="mobile-nav__top"><Link href={`/${locale}`} onClick={() => setOpen(false)}><Image src="/logo.svg" alt="Bora Sıpal" width={95} height={40} /></Link><button onClick={() => setOpen(false)}>{copy.nav.close}</button></div>
          <nav aria-label="Mobile navigation">
            <Link href={`/${locale}/thinking`} onClick={() => setOpen(false)}>{copy.nav.thinking}</Link>
            <Link href={`/${locale}/work`} onClick={() => setOpen(false)}>{copy.nav.work}</Link>
            <Link href={`/${locale}#services`} onClick={() => setOpen(false)}>{copy.nav.services}</Link>
            <a href="https://www.linkedin.com/in/borasipal/" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>{copy.nav.conversation}<span className="sr-only"> (opens in a new tab)</span></a>
          </nav>
          <LanguageSwitcher locale={locale} compact />
        </div>
      ) : null}
    </div>
  );
}
