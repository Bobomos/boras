import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/icons";
import { ConcoroIngestionVisual } from "@/components/concoro-case-visuals";
import { ConcoroRadarVisual } from "@/components/concoro-radar-visual";
import { SiteHeader } from "@/components/site-header";
import { projects, siteCopy } from "@/content/data";
import { locales, type Locale } from "@/content/types";
import { getLocale, getProject, pageMetadata, siteUrl } from "@/lib/site";

type CaseVisualType = NonNullable<(typeof projects)["en"][number]["sections"][number]["visual"]>;

const visualCopy = {
  en: {
    fragmentation: ["A fragmented workflow becoming one workspace", "Word", "Email", "Research", "Signature", "LexHero workspace"],
    trust: ["AI proposal reviewed by a legal professional", "AI proposes", "Evidence stays visible", "Lawyer decides"],
    workspace: ["LexHero workspace with document navigation, canvas and total chat", "Documents", "Contract draft", "Original brief", "Legal sources", "Service agreement", "Review clause 4 against the source.", "Suggested revision ready."],
    schema: ["An unstructured public notice converted into a consistent opportunity schema", "Official notice · PDF", "Concoro opportunity", "Role", "Location", "Qualification", "Deadline", "Eligibility", "Status"],
    ingestion: ["Document ingestion and normalisation flow", "Collect", "Extract", "Structure", "Validate", "Publish"],
    matching: ["Candidate profile matched across three semantic dimensions", "Candidate profile", "Education", "Experience", "Preferences", "Role core", "Requirements", "Domain context", "Prioritised result", "Relevant", "Eligible", "Current"],
    eligibility: ["Relevance and eligibility evaluated separately", "Semantic relevance", "Strong professional fit", "Operations · Administration", "Structured eligibility", "Requirements checked", "Degree · Deadline · Status", "Why this appears", "Your degree and operations experience align with the role."],
    system: ["The Concoro information system connecting source notices to candidate decisions", "Source notices", "Shared information model", "Search", "Profiles", "Matching", "Alerts", "Candidate decisions"],
    intents: ["Writing intents connected through one product system", "Search", "Correct", "Compare", "Translate", "Continue writing"],
    hierarchy: ["Five levels of result information", "Primary response", "Suggested alternatives", "Real examples", "Sources", "Next actions"],
    languageEvidence: ["A language suggestion connected to inspectable evidence", "Your sentence", "Suggested expression", "Usage examples", "Visible sources", "It is technically correct, but something feels wrong.", "It is correct, but it doesn’t sound natural."],
    query: ["One query remains visible across writing actions", "Original query", "Search", "Compare", "Translate", "Improve"],
    platforms: ["Behavioural continuity across web, desktop and mobile", "Web", "Desktop", "Mobile", "Same product logic"],
    designSystem: ["A design system built for variable language content", "Foundations", "Components", "Content states", "Responsive rules", "Future capabilities"]
  },
  it: {
    fragmentation: ["Un flusso frammentato diventa un unico spazio di lavoro", "Word", "Email", "Ricerca", "Firma", "Spazio LexHero"],
    trust: ["Una proposta AI revisionata da un professionista legale", "L’AI propone", "Le prove restano visibili", "L’avvocato decide"],
    workspace: ["Spazio LexHero con navigazione documenti, Canvas e Total Chat", "Documenti", "Bozza del contratto", "Brief originale", "Fonti legali", "Contratto di servizio", "Controlla la clausola 4 rispetto alla fonte.", "Revisione suggerita pronta."],
    schema: ["Un bando non strutturato diventa uno schema coerente", "Bando ufficiale · PDF", "Opportunità Concoro", "Ruolo", "Sede", "Titolo", "Scadenza", "Idoneità", "Stato"],
    ingestion: ["Flusso di ingestion e normalizzazione", "Raccogli", "Estrai", "Struttura", "Valida", "Pubblica"],
    matching: ["Profilo candidato confrontato su tre dimensioni semantiche", "Profilo candidato", "Formazione", "Esperienza", "Preferenze", "Nucleo del ruolo", "Requisiti", "Contesto", "Risultato prioritario", "Pertinente", "Idoneo", "Attivo"],
    eligibility: ["Pertinenza e idoneità valutate separatamente", "Pertinenza semantica", "Forte compatibilità professionale", "Operations · Amministrazione", "Idoneità strutturata", "Requisiti verificati", "Titolo · Scadenza · Stato", "Perché appare", "Il tuo titolo e l’esperienza operativa sono in linea con il ruolo."],
    system: ["Il sistema Concoro collega i bandi alle decisioni dei candidati", "Bandi originali", "Modello informativo condiviso", "Ricerca", "Profili", "Matching", "Alert", "Decisioni del candidato"],
    intents: ["Intenti di scrittura collegati in un unico sistema", "Cerca", "Correggi", "Confronta", "Traduci", "Continua a scrivere"],
    hierarchy: ["Cinque livelli di informazione nei risultati", "Risposta principale", "Alternative suggerite", "Esempi reali", "Fonti", "Azioni successive"],
    languageEvidence: ["Un suggerimento collegato a prove verificabili", "La tua frase", "Espressione suggerita", "Esempi d’uso", "Fonti visibili", "Tecnicamente è corretta, ma qualcosa non torna.", "È corretta, ma non suona naturale."],
    query: ["Una query resta visibile durante le azioni di scrittura", "Query originale", "Cerca", "Confronta", "Traduci", "Migliora"],
    platforms: ["Continuità comportamentale su web, desktop e mobile", "Web", "Desktop", "Mobile", "Stessa logica di prodotto"],
    designSystem: ["Un design system per contenuti linguistici variabili", "Fondazioni", "Componenti", "Stati del contenuto", "Regole responsive", "Capacità future"]
  },
  tr: {
    fragmentation: ["Parçalı iş akışı tek çalışma alanına dönüşüyor", "Word", "E-posta", "Araştırma", "İmza", "LexHero çalışma alanı"],
    trust: ["Bir hukukçu tarafından incelenen yapay zekâ önerisi", "Yapay zekâ önerir", "Kanıt görünür kalır", "Avukat karar verir"],
    workspace: ["Belge navigasyonu, Canvas ve Total Chat içeren LexHero alanı", "Belgeler", "Sözleşme taslağı", "Özgün brief", "Hukuk kaynakları", "Hizmet sözleşmesi", "4. maddeyi kaynakla karşılaştır.", "Önerilen revizyon hazır."],
    schema: ["Yapılandırılmamış kamu ilanı tutarlı fırsat şemasına dönüşüyor", "Resmî ilan · PDF", "Concoro fırsatı", "Rol", "Konum", "Nitelik", "Son tarih", "Uygunluk", "Durum"],
    ingestion: ["Belge alma ve normalizasyon akışı", "Topla", "Çıkar", "Yapılandır", "Doğrula", "Yayımla"],
    matching: ["Aday profili üç semantik boyutta eşleştiriliyor", "Aday profili", "Eğitim", "Deneyim", "Tercihler", "Rol çekirdeği", "Gereksinimler", "Alan bağlamı", "Öncelikli sonuç", "İlgili", "Uygun", "Güncel"],
    eligibility: ["İlgi ve uygunluk ayrı değerlendiriliyor", "Semantik ilgi", "Güçlü profesyonel uyum", "Operasyon · İdari işler", "Yapılandırılmış uygunluk", "Gereksinimler kontrol edildi", "Eğitim · Tarih · Durum", "Neden gösteriliyor", "Eğitiminiz ve operasyon deneyiminiz rolle uyumlu."],
    system: ["Concoro bilgi sistemi kaynak ilanları aday kararlarına bağlıyor", "Kaynak ilanlar", "Ortak bilgi modeli", "Arama", "Profiller", "Eşleştirme", "Bildirimler", "Aday kararları"],
    intents: ["Yazma niyetleri tek ürün sisteminde birleşiyor", "Ara", "Düzelt", "Karşılaştır", "Çevir", "Yazmaya devam et"],
    hierarchy: ["Sonuç bilgisinin beş katmanı", "Ana yanıt", "Önerilen alternatifler", "Gerçek örnekler", "Kaynaklar", "Sonraki eylemler"],
    languageEvidence: ["İncelenebilir kanıta bağlı dil önerisi", "Cümleniz", "Önerilen ifade", "Kullanım örnekleri", "Görünür kaynaklar", "Teknik olarak doğru, ama bir şey yanlış hissettiriyor.", "Doğru, fakat doğal duyulmuyor."],
    query: ["Tek sorgu yazma eylemleri boyunca görünür kalıyor", "Özgün sorgu", "Ara", "Karşılaştır", "Çevir", "Geliştir"],
    platforms: ["Web, masaüstü ve mobilde davranışsal devamlılık", "Web", "Masaüstü", "Mobil", "Aynı ürün mantığı"],
    designSystem: ["Değişken dil içeriği için tasarım sistemi", "Temeller", "Bileşenler", "İçerik durumları", "Responsive kurallar", "Gelecek yetenekler"]
  }
} satisfies Record<Locale, Record<string, string[]>>;

function CaseVisual({ type, locale }: { type: CaseVisualType; locale: Locale }) {
  const v = visualCopy[locale];
  if (type === "ingestion") return <ConcoroIngestionVisual copy={v.ingestion} />;
  return null;
}

export function generateStaticParams() { return locales.flatMap((locale) => projects[locale].map((project) => ({ locale, slug: project.slug }))); }
type CaseStudyPageProps = { params: Promise<{ locale: string; slug: string }> };
export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> { const values = await params; const locale = getLocale(values.locale); const project = locale ? getProject(locale, values.slug) : null; return locale && project ? pageMetadata(locale, project.name, project.summary, `/work/${project.slug}`) : {}; }
export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const values = await params; const locale = getLocale(values.locale); if (!locale) notFound(); const project = getProject(locale, values.slug); if (!project) notFound(); const copy = siteCopy[locale].work; const list = projects[locale]; const next = list[(list.findIndex((item) => item.slug === project.slug) + 1) % list.length];
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: copy.indexTitle, item: `${siteUrl}/${locale}/work` }, { "@type": "ListItem", position: 2, name: project.name, item: `${siteUrl}/${locale}/work/${project.slug}` }] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} /><SiteHeader locale={locale} /><main id="main-content" className={`case-page case-page--${project.slug}`}><div className="case-shell"><Link className="back-link" href={`/${locale}/work`}><Arrow direction="left" />{copy.back}</Link><header className="case-header"><div><p className="eyebrow">{project.year} · {copy.caseStudyLabel}</p><h1>{project.name}</h1><p className="case-summary">{project.summary}</p></div><dl><div><dt>{copy.role}</dt><dd>{project.role}</dd></div><div><dt>{copy.services}</dt><dd>{project.services?.join(", ")}</dd></div><div><dt>{copy.status}</dt><dd>{project.status}</dd></div></dl></header><div className="case-sections">{project.slug === "concoro" ? <div className="case-opening-visual"><ConcoroRadarVisual label={visualCopy[locale].schema[0]} /></div> : null}{project.sections.map((section) => <section key={section.title} className={section.visual ? "case-section case-section--visual" : "case-section"}><div className="case-section__heading">{section.eyebrow ? <p className="case-section__eyebrow">{section.eyebrow}</p> : null}<h2>{section.title}</h2></div><div className="case-section__content">{section.body ? <p>{section.body}</p> : null}{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list ? <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}{section.quote ? <blockquote>{section.quote}</blockquote> : null}</div>{section.visual ? <CaseVisual type={section.visual} locale={locale} /> : null}</section>)}</div><Link className="next-project" href={`/${locale}/work/${next.slug}`}><span>{copy.next}</span><strong>{next.name}</strong><Arrow /></Link></div></main></>;
}
