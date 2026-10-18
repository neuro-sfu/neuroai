import { diagramText } from "../content/siteContent";
import { ResearchCycleFigure } from "./ResearchCycleFigure";

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
          <ResearchCycleFigure />
        </div>
      </div>
    </section>
  );
}
