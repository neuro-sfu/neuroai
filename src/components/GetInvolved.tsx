import { contact, getInvolved } from "../content/siteContent";
import { Section } from "./Section";

const hasRealEmail = contact.email.includes("@") && !contact.email.includes("[");
const hasRealUrl = !contact.url.includes("[") && contact.url.includes(".");
const hasContact = hasRealEmail || hasRealUrl;

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
          {hasContact ? (
            <>
              <p className="contact-lead">{getInvolved.contactLead}</p>
              <dl className="contact-list">
                {hasRealEmail ? (
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </dd>
                  </div>
                ) : null}
                {hasRealUrl ? (
                  <div>
                    <dt>Contact page</dt>
                    <dd>
                      <a href={contact.url}>{contact.url}</a>
                    </dd>
                  </div>
                ) : null}
              </dl>
            </>
          ) : (
            <p className="contact-lead">
              Reach out to explore studentships, collaborations, and partnerships.
            </p>
          )}
        </div>
        <div className="contact-panel-action">
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
