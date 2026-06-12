import { hero } from "../content/siteContent";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Simon Fraser University research initiative</p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button" href="#get-involved">
              Get involved
            </a>
            <a className="button button-secondary" href="#team">
              Meet the team
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="/images/group-neuroai.jpg"
            alt="SFU Neuro+AI researchers standing together in an atrium"
          />
        </div>
      </div>
    </section>
  );
}
