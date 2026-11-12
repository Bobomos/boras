export const locales = ["en", "it", "tr"] as const;
export type Locale = (typeof locales)[number];

export type RichTextBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "source"; label: string; title: string; byline: string; href: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured: boolean;
  draft?: boolean;
  coverImage?: {
    src: string;
    width: number;
    height: number;
    objectPosition: string;
  };
  seoTitle: string;
  seoDescription: string;
  intro?: string;
  body: RichTextBlock[];
};

export type Project = {
  slug: string;
  name: string;
  year: number;
  summary: string;
  description?: string;
  role?: string;
  services?: string[];
  status?: string;
  featured: boolean;
  caseStudyAvailable: boolean;
  externalUrl?: string;
  coverImage?: string;
  gallery?: Array<{ src: string; alt: string; caption?: string }>;
  sections: ProjectSection[];
};

export type ProjectSection = {
  title: string;
  eyebrow?: string;
  body?: string;
  paragraphs?: string[];
  list?: string[];
  quote?: string;
  visual?: "fragmentation" | "workspace" | "trust" | "schema" | "ingestion" | "matching" | "eligibility" | "information-system" | "writing-intents" | "result-hierarchy" | "evidence" | "query-flow" | "platforms" | "design-system";
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
