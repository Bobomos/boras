import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactFooter } from "@/components/contact-footer";
import { ProjectList } from "@/components/project-list";
import { SiteHeader } from "@/components/site-header";
import { projects, siteCopy } from "@/content/data";
import { getLocale, pageMetadata } from "@/lib/site";

type LocalePageProps = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> { const locale = getLocale((await params).locale); return locale ? pageMetadata(locale, siteCopy[locale].work.indexTitle, siteCopy[locale].work.indexIntro, "/work") : {}; }
export default async function WorkPage({ params }: LocalePageProps) { const locale = getLocale((await params).locale); if (!locale) notFound(); const copy = siteCopy[locale]; return <><SiteHeader locale={locale} /><main id="main-content" className="index-page"><div className="content-column"><header className="page-intro"><p className="eyebrow">Bora Sıpal</p><h1>{copy.work.indexTitle}</h1><p>{copy.work.indexIntro}</p></header><ProjectList projects={projects[locale]} locale={locale} expanded={false} /></div></main><ContactFooter locale={locale} /></>; }
