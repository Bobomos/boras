"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { type Locale } from "@/content/types";

const messages: Record<Locale, { question: string; action: string }> = {
  en: { question: "Would you prefer to read the site in English?", action: "Switch to English" },
  it: { question: "Preferisci leggere il sito in italiano?", action: "Passa all’italiano" },
  tr: { question: "Siteyi Türkçe okumak ister misiniz?", action: "Türkçeye geç" },
};

function browserLocale(): Locale | null {
  const code = navigator.language.toLowerCase().split("-")[0];
  return code === "en" || code === "it" || code === "tr" ? code : null;
}

export function LanguageSuggestionBanner({ locale }: { locale: Locale }) {
  const [suggested, setSuggested] = useState<Locale | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const detected = browserLocale();
    const key = detected ? `boras:language-dismissed:${locale}:${detected}` : "";
    const timer = window.setTimeout(() => {
      if (detected && detected !== locale && localStorage.getItem(key) !== "1") setSuggested(detected);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [locale]);

  if (!suggested) return null;
  const dismissKey = `boras:language-dismissed:${locale}:${suggested}`;
  const switchLanguage = () => {
    document.cookie = `preferred-locale=${suggested}; path=/; max-age=31536000; samesite=lax`;
    router.push(pathname.replace(/^\/(en|it|tr)(?=\/|$)/, `/${suggested}`));
  };
  const dismiss = () => { localStorage.setItem(dismissKey, "1"); setSuggested(null); };

  return (
    <aside className="language-banner" aria-label="Language suggestion">
      <span>{messages[suggested].question}</span>
      <button onClick={switchLanguage}>{messages[suggested].action} <span aria-hidden="true">→</span></button>
      <button className="language-banner__close" onClick={dismiss} aria-label="Dismiss language suggestion">×</button>
    </aside>
  );
}
