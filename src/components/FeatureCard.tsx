import type { ReactNode } from "react";
import { Icon } from "./Icon";

type FeatureCardProps = {
  title: string;
  body: ReactNode;
  icon?: string;
};

export function FeatureCard({ title, body, icon }: FeatureCardProps) {
  return (
    <article className="card feature-card">
      {icon ? (
        <span className="feature-icon" aria-hidden="true">
          <Icon name={icon} />
        </span>
      ) : null}
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}
