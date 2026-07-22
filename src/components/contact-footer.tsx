import { siteCopy } from "@/content/data";
import type { Locale } from "@/content/types";

export function ContactFooter({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].footer;
  return <footer className="contact-footer" id="services"><div className="content-column"><h2>{copy.title}</h2><p>{copy.copy}</p><div className="footer-links"><a href="mailto:hello@boras.design">{copy.email}</a><a href="https://www.linkedin.com/in/borasipal/" rel="noreferrer" target="_blank">{copy.linkedin}<span className="sr-only"> (opens in a new tab)</span></a></div></div><p className="footer-note">{copy.note}</p></footer>;
}
