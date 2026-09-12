"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { type Locale } from "@/content/types";

const messages: Record<Locale, { question: Record<Locale, string>; action: Record<Locale, string> }> = {
  en: {
    question: { en: "", it: "Would you prefer to read the site in Italian?", tr: "Would you prefer to read the site in Turkish?" },
    action: { en: "", it: "Switch to Italian", tr: "Switch to Turkish" },
  },
  it: {
    question: { en: "Preferisci leggere il sito in inglese?", it: "", tr: "Preferisci leggere il sito in turco?" },
    action: { en: "Passa all’inglese", it: "", tr: "Passa al turco" },
  },
  tr: {
    question: { en: "Siteyi İngilizce okumak ister misiniz?", it: "Siteyi İtalyanca okumak ister misiniz?", tr: "" },
    action: { en: "İngilizceye geç", it: "İtalyancaya geç", tr: "" },
  },
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
      <span>{messages[locale].question[suggested]}</span>
      <button onClick={switchLanguage}>{messages[locale].action[suggested]} <span aria-hidden="true">→</span></button>
      <button className="language-banner__close" onClick={dismiss} aria-label="Dismiss language suggestion">×</button>
    </aside>
  );
}
