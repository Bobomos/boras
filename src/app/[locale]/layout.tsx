import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import { locales } from "@/content/types";
import { getLocale, siteUrl } from "@/lib/site";
import { LanguageSuggestionBanner } from "@/components/language-suggestion-banner";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Bora Sıpal — Product strategy, brand and experience", template: "%s — Bora Sıpal" },
  description: "Product strategy, direction, brand and digital experience for complex and AI products.",
  icons: { icon: "/logo.svg" },
};

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

type LocaleLayoutProps = { children: React.ReactNode; params: Promise<{ locale: string }> };

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: value } = await params;
  const locale = getLocale(value);
  if (!locale) notFound();
  return <html lang={locale} className={`${inter.variable} ${instrument.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><LanguageSuggestionBanner locale={locale} />{children}</body></html>;
}
