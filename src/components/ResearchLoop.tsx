const loopItems = [
  "Image the brain",
  "Understand brain function",
  "Advance AI methods",
  "Improve brain health",
];

export function ResearchLoop() {
  return (
    <div
      className="research-loop"
      role="img"
      aria-label="Research loop connecting brain imaging, brain understanding, AI methods, and brain health."
    >
      <div className="loop-center">
        <span>Neuro+AI</span>
        <small>imaging-informed intelligence</small>
      </div>
      {loopItems.map((item, index) => (
        <div className={`loop-node loop-node-${index + 1}`} key={item}>
          <span>{item}</span>
        </div>
      ))}
      <div className="loop-axis loop-axis-horizontal" aria-hidden="true" />
      <div className="loop-axis loop-axis-vertical" aria-hidden="true" />
    </div>
  );
}
