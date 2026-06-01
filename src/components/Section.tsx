import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  eyebrow?: string;
  tone?: "default" | "soft";
};

export function Section({ id, title, children, eyebrow, tone = "default" }: SectionProps) {
  return (
    <section id={id} className={tone === "soft" ? "section section-soft" : "section"}>
      <div className="section-inner">
        <div className="section-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
