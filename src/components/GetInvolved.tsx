import { contact, getInvolved, studentApplication } from "../content/siteContent";
import { Section } from "./Section";

const hasRealEmail = contact.email.includes("@") && !contact.email.includes("[");

export function GetInvolved() {
  return (
    <Section id="get-involved" title="Get Involved" tone="soft">
      <p className="section-intro">{getInvolved.intro}</p>
      <p className="opportunities-label">Opportunities include:</p>
      <div className="grid grid-4 opportunity-grid">
        {getInvolved.opportunities.map((opportunity) => (
          <article className="card opportunity-card" key={opportunity}>
            <p>{opportunity}</p>
          </article>
        ))}
      </div>
      <div className="contact-panel" aria-label="Contact information">
        <div className="contact-panel-main">
          <p className="closing-line">{getInvolved.closing}</p>
          {hasRealEmail ? (
            <p className="contact-lead">
              {getInvolved.contactLead}{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          ) : (
            <p className="contact-lead">
              Reach out to explore studentships, collaborations, and partnerships.
            </p>
          )}
        </div>
        <div className="contact-panel-action">
          <a className="button" href={studentApplication.url} target="_blank" rel="noreferrer">
            {studentApplication.cta}
          </a>
          {hasRealEmail ? (
            <a className="button" href={`mailto:${contact.email}`}>
              Contact us at {contact.email}
            </a>
          ) : (
            <span className="button button-disabled" aria-disabled="true">
              Contact us at neuroai@sfu.ca
            </span>
          )}
        </div>
      </div>
    </Section>
  );
}
