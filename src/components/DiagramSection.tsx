import { diagramAlt, diagramText } from "../content/siteContent";

export function DiagramSection() {
  return (
    <section id="cycle" className="section diagram-section" aria-labelledby="cycle-title">
      <div className="section-inner diagram-layout">
        <div className="diagram-copy">
          <p className="eyebrow">Research cycle</p>
          <h2 id="cycle-title">How Neuro+AI connects discovery and impact</h2>
          <p>{diagramText}</p>
        </div>
        <div className="diagram-image-wrap">
          <img src={`${import.meta.env.BASE_URL}images/neuro-ai-diagram.png`} alt={diagramAlt} />
        </div>
      </div>
    </section>
  );
}
