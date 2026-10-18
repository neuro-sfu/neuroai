import type { ReactNode } from "react";

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Why Now", href: "#why-now" },
  { label: "Training", href: "#training" },
  { label: "Team", href: "#team" },
];

export const contact = {
  email: "neuroai@sfu.ca",
  url: "[contact page link]",
};

export const studentApplication = {
  url: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=fmfoBInJuUeGGdg9Wl9sZ5UnmKN79CNHrobFkJjJfX9UNEJaMURTRU1SVTEyMzFDT0RJS0VaOVVMMyQlQCN0PWcu&route=shorturl",
  title: "Interested in joining as a student?",
  body: "Tell us about your background and interests through our short application form, and we will be in touch about opportunities in the Neuro+AI community.",
  cta: "Apply as a student",
};

export const hero = {
  title: "SFU Neuro+AI: Bridging Brain Imaging and Artificial Intelligence",
  subtitle:
    "Bringing together neuroscience, neurotechnology, brain imaging, and artificial intelligence to better understand the brain and improve brain health.",
};

export const diagramAlt =
  "Diagram showing Neuro+AI connections between imaging the brain, understanding the brain, advancing artificial intelligence, and improving brain health, with AI used to synthesize and analyze neuroimaging.";

export const challenge: ReactNode[] = [
  <>
    Brain disorders - including Alzheimer's disease, Parkinson's disease, depression and
    schizophrenia - are the{" "}
    <ExtLink href="https://www.who.int/news/item/14-03-2024-over-1-in-3-people-affected-by-neurological-conditions--the-leading-cause-of-illness-and-disability-worldwide">
      leading cause of disease burden
    </ExtLink>{" "}
    worldwide. Their impact is accelerating as aging populations and rising healthcare demands drive
    costs.
  </>,
  "AI-driven technologies have the power to transform how we understand and treat brain diseases, unlocking new possibilities in diagnosis, prediction, and personalized care. Today, many AI systems lack the biological grounding needed to model complex brain data, while neuroscience research often cannot fully leverage the power of modern AI. Realizing that potential requires close collaboration between AI and neuroscience researchers, bringing together computational tools and the scientific grounding to apply them.",
];

export const missionIntro: ReactNode[] = [
  <>
    SFU's Neuro+AI initiative brings together a cluster of researchers from the SFU{" "}
    <ExtLink href="https://www.sfu.ca/neuro-institute.html">
      Institute for Neuroscience and Neurotechnology (INN)
    </ExtLink>{" "}
    and the SFU{" "}
    <ExtLink href="https://vinci.sfu.ca/">
      Visual, Interactive, and Intelligent Computing Institute (VINCI)
    </ExtLink>{" "}
    committed to working at the intersection of brain science and AI.
  </>,
];

export const strengthsIntro =
  "With a focus on imaging as an enabling technology, we build upon three strengths unique to SFU:";

type FeatureItem = {
  icon: string;
  title: string;
  body: ReactNode;
};

export const strengths: FeatureItem[] = [
  {
    icon: "scan",
    title: "Integrated brain imaging",
    body: (
      <>
        The only{" "}
        <ExtLink href="https://www.sfu.ca/research/researcher-resources/resources/advanced-imaging.html">
          combined facility
        </ExtLink>{" "}
        for magnetic resonance imaging (MRI) and magnetoencephalography (MEG) in Western Canada.
      </>
    ),
  },
  {
    icon: "eye",
    title: "Computer vision and AI",
    // TODO: Confirm wording/source for public launch.
    body: (
      <>
        Canada's #1 computer vision research{" "}
        <ExtLink href="https://csrankings.org/#/index?vision&ca">program</ExtLink>.
      </>
    ),
  },
  {
    icon: "network",
    title: "Brain simulation",
    body: (
      <>
        The Canadian home for{" "}
        <ExtLink href="https://thevirtualbrain.org/tvb/zwei/">The Virtual Brain</ExtLink> platform, an
        international consortium for brain simulation.
      </>
    ),
  },
];

export const capabilitiesIntro =
  "Together, we aim to develop solutions to address critical societal challenges using state-of-the-art imaging, neuroscience research and AI techniques:";

export const capabilities: FeatureItem[] = [
  {
    icon: "activity",
    title: "World-class neuroimaging and computational modeling expertise",
    body: "MEG, fMRI, EEG, PET and the essential data analytics and informatics foundation.",
  },
  {
    icon: "sparkles",
    title: "State-of-the-art AI methods",
    body: "Including multimodal foundation models, computer vision, 3D graphics and physical AI.",
  },
  {
    icon: "people",
    title: "Interdisciplinary collaboration",
    body: "Between computer science, molecular and neurochemical biology, physiology, psychology and clinical researchers.",
  },
];

export const missionClosing =
  "We focus on intricate multi-factor brain conditions shaped by genetic, environmental, and developmental influences that unfold across the lifespan. By bringing these domains together, we aim to move toward well-integrated, clinically meaningful breakthroughs.";

export const diagramText =
  "SFU Neuro+AI connects brain imaging, brain understanding, artificial intelligence, and brain health. AI can help synthesize and analyze neuroimaging data, while neuroscience provides biological grounding for more meaningful and responsible AI systems.";

export const whyNowIntro =
  "AI is already transforming fields such as climate modelling, drug discovery, and medical diagnosis. In brain health, arguably the most complex frontier, its potential is even greater.";

export const whyNowBarrierLead: ReactNode = (
  <>
    Still, a 2025 Brain Canada Foundation{" "}
    <ExtLink href="https://braincanada.ca/files/future-forward-ai-neuroscience.pdf">report</ExtLink>{" "}
    highlights a major barrier:
  </>
);

export const whyNowBarriers = [
  "Many clinicians, researchers, and decision-makers lack state-of-the-art AI literacy,",
  "Many AI experts lack the research or clinical context,",
  "Translation from research to real-world impact remains limited.",
];

export const whyNowClosing =
  "SFU Neuro+AI is designed to overcome this barrier, ensuring that advances in AI are responsible, grounded, and directly translate into real benefits for patients and clinicians.";

type TrainingCard = {
  icon: string;
  title: string;
  body: ReactNode;
};

export const training: { intro: string[]; cards: TrainingCard[] } = {
  intro: [
    "Solving these challenges requires a new kind of researcher, fluent in both brain science and AI.",
    "We support students with backgrounds in disciplines related to neuroscience or artificial intelligence, such as computer science, neuroscience, cognitive science, molecular biology and biochemistry, and psychology.",
  ],
  cards: [
    {
      icon: "code",
      title: "For computing science students",
      body: (
        <>
          Computing science graduate students interested in neuroscience can explore courses such as
          Biomedical Computer Vision (
          <ExtLink href="https://www.sfu.ca/students/calendar/2026/summer/courses/cmpt/763.html">
            CMPT 763
          </ExtLink>
          ) and those offered by the Translational and Integrative Neuroscience (TRAIN) graduate
          specialization (
          <ExtLink href="https://www.sfu.ca/outlines.html?2025/fall/neur/800/g100">
            NEUR 800
          </ExtLink>
          ,{" "}
          <ExtLink href="https://www.sfu.ca/students/calendar/2026/summer/courses/neur/801.html">
            NEUR 801
          </ExtLink>
          ), an annual MEG Summer Camp, and guest seminars.
        </>
      ),
    },
    {
      icon: "brain",
      title: "For neuroscience students",
      body: (
        <>
          Neuroscience graduate students looking to build AI knowledge can explore two orientation
          courses:{" "}
          <ExtLink href="https://www.sfu.ca/outlines.html?2026/fall/cmpt/891/g100">
            CMPT 891
          </ExtLink>{" "}
          (Computing Research Orientation) and{" "}
          <ExtLink href="https://www.sfu.ca/students/calendar/2026/summer/courses/cmpt/218.html">
            CMPT 218 / 983
          </ExtLink>{" "}
          (Special Topics in Computing Science - Foundation Models for Scientists), which covers
          large language models and vision transformers with no advanced computing background
          required.
        </>
      ),
    },
  ],
};

export const getInvolved = {
  intro:
    "We are building a collaborative ecosystem and welcome inquiries from prospective students, collaborators, and organizations.",
  opportunities: [
    "Undergraduate, graduate and post-doctoral training",
    "Research collaborations",
    "Institutional and industry partnership",
    "Philanthropic investment",
  ],
  closing: "Together, we can move from possibility to impact!",
  contactLead: "Get in touch at:",
};

export const teamIntro =
  "SFU Neuro+AI brings together researchers working across neuroscience, neurotechnology, visual computing, artificial intelligence, and brain health.";
