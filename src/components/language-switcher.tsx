"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/content/types";

function localePath(pathname: string, locale: Locale) {
  const parts = pathname.split("/");
  if (locales.includes(parts[1] as Locale)) parts[1] = locale;
  else parts.splice(1, 0, locale);
  return parts.join("/") || `/${locale}`;
}

export function LanguageSwitcher({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const pathname = usePathname();
  return (
    <div className={compact ? "locale-links locale-links--mobile" : "locale-links"} aria-label="Language selection">
      {locales.map((item) => (
        <Link key={item} href={localePath(pathname, item)} hrefLang={item} lang={item} aria-current={item === locale ? "page" : undefined}>
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
