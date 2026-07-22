import Link from "next/link";
import { siteCopy } from "@/content/data";
import type { Locale, Project } from "@/content/types";
import { PillButton } from "./pill-button";

export function ProjectList({ projects, locale, expanded = true }: { projects: Project[]; locale: Locale; expanded?: boolean }) {
  return (
    <div className={`project-list project-list--cards${expanded ? "" : " project-list--open"}`}>
      {projects.map((project) => (
        <article className={`project-card${expanded ? "" : " project-card--open"}`} key={project.slug}>
          <div className="project-title">
            <h3><Link href={`/${locale}/work/${project.slug}`}>{project.name}</Link></h3>
            <span>{project.year}</span>
          </div>
          <div className="project-card__reveal">
            <div>
              <p>{project.summary}</p>
              {expanded && project.description ? <p>{project.description}</p> : null}
              <PillButton href={`/${locale}/work/${project.slug}`} variant="outline" arrow>{siteCopy[locale].work.caseStudy}</PillButton>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
