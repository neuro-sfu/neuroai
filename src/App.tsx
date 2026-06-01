import { DiagramSection } from "./components/DiagramSection";
import { FeatureCard } from "./components/FeatureCard";
import { Footer } from "./components/Footer";
import { GetInvolved } from "./components/GetInvolved";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { TeamGrid } from "./components/TeamGrid";
import { TrainingSection } from "./components/TrainingSection";
import {
  challenge,
  capabilities,
  capabilitiesIntro,
  missionClosing,
  missionIntro,
  strengths,
  strengthsIntro,
  teamIntro,
  whyNowBarrierLead,
  whyNowBarriers,
  whyNowClosing,
  whyNowIntro,
} from "./content/siteContent";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Section id="about" eyebrow="About" title="The challenge">
          <div className="prose">
            {challenge.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Section>
        <Section id="mission" title="Our Mission" tone="soft">
          <div className="prose prose-narrow">
            {missionIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>
        <Section id="strengths" title="Built on SFU strengths">
          <p className="section-intro">{strengthsIntro}</p>
          <div className="grid grid-3">
            {strengths.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
            ))}
          </div>
        </Section>
        <Section id="capabilities" title="Research capabilities" tone="soft">
          <p className="section-intro">{capabilitiesIntro}</p>
          <div className="grid grid-3">
            {capabilities.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
            ))}
          </div>
          <p className="section-intro section-outro">{missionClosing}</p>
        </Section>
        <DiagramSection />
        <Section id="why-now" eyebrow="Why now" title="Why This Matters Now" tone="soft">
          <div className="prose prose-narrow">
            <p>{whyNowIntro}</p>
            <p>{whyNowBarrierLead}</p>
            <ul>
              {whyNowBarriers.map((barrier) => (
                <li key={barrier}>{barrier}</li>
              ))}
            </ul>
            <p>{whyNowClosing}</p>
          </div>
        </Section>
        <TrainingSection />
        <GetInvolved />
        <Section id="team" title="Our team">
          <p className="section-intro">{teamIntro}</p>
          <TeamGrid />
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
