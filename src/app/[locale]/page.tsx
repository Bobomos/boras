import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/article-list";
import { ContactFooter } from "@/components/contact-footer";
import { LogoMarquee } from "@/components/logo-marquee";
import { PillButton } from "@/components/pill-button";
import { ProcessDiagram } from "@/components/process-diagram";
import { ProjectList } from "@/components/project-list";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { articles, projects, siteCopy } from "@/content/data";
import { getLocale, pageMetadata, siteUrl } from "@/lib/site";

type LocalePageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = getLocale((await params).locale); if (!locale) return {};
  return pageMetadata(locale, "Bora Sıpal — Product strategy, brand and experience", "Product strategy, direction, brand and digital experience for complex and AI products.");
}

export default async function HomePage({ params }: LocalePageProps) {
  const locale = getLocale((await params).locale); if (!locale) notFound();
  const copy = siteCopy[locale];
  const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Bora Sıpal", url: `${siteUrl}/${locale}`, jobTitle: "Product and marketing leader", sameAs: ["https://www.linkedin.com/in/borasipal/"], knowsAbout: ["Product strategy", "Product direction", "Brand", "Digital experience", "AI products"] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
    <main id="main-content">
      <section className="hero dotted-grid">
        <SiteHeader locale={locale} overlay />
        <div className="hero__content">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 className={locale === "tr" ? "hero-title hero-title--turkish" : "hero-title"} aria-label={`${copy.hero.before} ${copy.hero.emphasis} ${copy.hero.after}`}><span aria-hidden="true">{copy.hero.before}{" "}<br /><em>{copy.hero.emphasis}</em> <span className="hero-title__after">{copy.hero.after}</span></span></h1>
          <div className="hero__actions"><PillButton href="#selected-work">{copy.hero.primary}</PillButton><PillButton href="#selected-thinking" variant="outline">{copy.hero.secondary}</PillButton></div>
          <p className="hero__support">{copy.hero.support}</p>
        </div>
        <LogoMarquee />
      </section>
      <section className="editorial-section" id="selected-thinking"><div className="content-column"><SectionHeading title={copy.thinking.title}><p className="section-intro preline">{copy.thinking.intro}</p><p>{copy.thinking.description}</p></SectionHeading><ArticleList articles={articles[locale]} locale={locale} compact showCovers /></div></section>
      <section className="process-section"><div className="content-column"><SectionHeading title={copy.process.title}><p>{copy.process.description}</p></SectionHeading></div><ProcessDiagram /></section>
      <section className="editorial-section work-section" id="selected-work"><div className="content-column"><SectionHeading title={copy.work.title}><p className="section-intro">{copy.work.intro}</p></SectionHeading><ProjectList projects={projects[locale]} locale={locale} /></div></section>
    </main>
    <ContactFooter locale={locale} />
  </>;
}
