import type { RichTextBlock } from "@/content/types";

export function RichText({ blocks }: { blocks: RichTextBlock[] }) {
  return <div className="rich-text">{blocks.map((block, index) => {
    if (block.type === "heading") return <h2 key={index}>{block.text}</h2>;
    if (block.type === "quote") return <blockquote key={index}>{block.text}</blockquote>;
    if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
    if (block.type === "source") return <aside className="article-source" key={index} aria-label={block.label}>
      <span className="article-source__label">{block.label}</span>
      <a href={block.href} target="_blank" rel="noreferrer">
        <span>{block.title}</span>
        <span aria-hidden="true">↗</span>
      </a>
      <span className="article-source__byline">{block.byline}</span>
    </aside>;
    return <p key={index}>{block.text}</p>;
  })}</div>;
}
