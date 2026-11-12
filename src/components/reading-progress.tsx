"use client";

import { useEffect, useRef } from "react";

export function ReadingProgress({ articleId, label }: { articleId: string; label: string }) {
  const progressRef = useRef<HTMLProgressElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    const article = document.getElementById(articleId);
    if (!progress || !article) return;

    const update = () => {
      const scrollTop = Math.max(0, window.scrollY);
      const end = article.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;
      progress.value = end <= 0 ? 1 : Math.min(1, scrollTop / end);
    };

    const observer = new ResizeObserver(update);
    observer.observe(article);
    observer.observe(document.body);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [articleId]);

  return <progress ref={progressRef} className="reading-progress" max={1} value={0} aria-label={label} />;
}
