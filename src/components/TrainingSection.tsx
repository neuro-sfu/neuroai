import { studentApplication, training } from "../content/siteContent";
import { FeatureCard } from "./FeatureCard";
import { Section } from "./Section";

export function TrainingSection() {
  return (
    <Section id="training" title="Training the Next Generation">
      <div className="prose prose-narrow section-intro-block">
        {training.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="grid grid-2">
        {training.cards.map((card) => (
          <FeatureCard key={card.title} icon={card.icon} title={card.title} body={card.body} />
        ))}
      </div>
      <div className="apply-callout">
        <div>
          <h3>{studentApplication.title}</h3>
          <p>{studentApplication.body}</p>
        </div>
        <a className="button" href={studentApplication.url} target="_blank" rel="noreferrer">
          {studentApplication.cta}
        </a>
      </div>
    </Section>
  );
}
