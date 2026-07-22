import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/content/data";
import type { Locale } from "@/content/types";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader({ locale, overlay = false }: { locale: Locale; overlay?: boolean }) {
  const copy = siteCopy[locale];
  return (
    <header className={`site-header${overlay ? " site-header--overlay" : ""}`}>
      <div className="nav-shell">
        <Link className="brand" href={`/${locale}`} aria-label="Bora Sıpal, home"><Image src="/logo.svg" alt="" width={95} height={40} priority /></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href={`/${locale}/thinking`}>{copy.nav.thinking}</Link>
          <Link href={`/${locale}/work`}>{copy.nav.work}</Link>
          <LanguageSwitcher locale={locale} />
          <a className="nav-cta" href="https://www.linkedin.com/in/borasipal/" target="_blank" rel="noreferrer">{copy.nav.conversation}<span className="sr-only"> (opens in a new tab)</span></a>
        </nav>
        <MobileNavigation locale={locale} />
      </div>
    </header>
  );
}
