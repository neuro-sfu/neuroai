import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import {
  ARROWHEAD_COLOR,
  BAND,
  BAND_COLORS,
  EXCHANGE_COLORS,
  cycleLayouts,
} from "../content/researchCycleLayout";
import { cycleStages, diagramAlt } from "../content/siteContent";
import type { CycleStageId } from "../content/siteContent";

// Research-cycle figure, redrawn from the original diagram (same layout and icons).
// The neuroscience half of the band is red, the AI half gold, both getting stronger
// toward the arrowhead. Clicking, tapping or pressing Enter on a stage highlights
// it and fades the rest; doing it again clears the highlight.

type StageKey = Exclude<CycleStageId, "exchange">;
type LayoutName = keyof typeof cycleLayouts;

const STAGE_KEYS: StageKey[] = ["imaging", "understanding", "advancing", "improving"];

// Icons that stay lit while the two-way exchange is selected: the two fields it links.
const ICON_STAGES: Record<StageKey, string> = {
  imaging: "imaging exchange",
  understanding: "understanding",
  advancing: "advancing exchange",
  improving: "improving",
};

// Numbered badges above the labels show the reading order (red side, then gold side).
const BADGES: Record<StageKey, { n: string; fill: string; text: string }> = {
  imaging: { n: "1", fill: "#a6192e", text: "#fff" },
  understanding: { n: "2", fill: "#a6192e", text: "#fff" },
  advancing: { n: "3", fill: ARROWHEAD_COLOR, text: "#18191b" },
  improving: { n: "4", fill: ARROWHEAD_COLOR, text: "#18191b" },
};
const BADGE_RADIUS: Record<LayoutName, number> = { desktop: 30, mobile: 46 };

function badgeCenter(labelBox: readonly number[], r: number) {
  const [x, y, width] = labelBox;
  return { cx: x + width / 2, cy: y - r + 6 };
}

type CycleSvgProps = {
  name: LayoutName;
  selected: CycleStageId | null;
  onToggle: (id: CycleStageId) => void;
};

function CycleSvg({ name, selected, onToggle }: CycleSvgProps) {
  const layout = cycleLayouts[name];
  const id = (part: string) => `nai-${part}-${name}`;
  const icons = `${import.meta.env.BASE_URL}images/neuro-ai-icons.png`;
  const titleOf = (stage: CycleStageId) => cycleStages.find((s) => s.id === stage)?.title ?? stage;

  const hotspotProps = (stage: CycleStageId) => ({
    className: "nai-hotspot",
    role: "button",
    tabIndex: 0,
    "aria-label": titleOf(stage),
    "aria-pressed": selected === stage,
    onClick: () => onToggle(stage),
    onKeyDown: (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onToggle(stage);
      }
    },
  });

  return (
    <svg className={`nai-figure nai-figure-${name}`} viewBox={layout.viewBox} role="group" aria-label={diagramAlt}>
      <defs>
        <linearGradient id={id("band-left")} gradientUnits="userSpaceOnUse" x1="0" y1={BAND_COLORS.yTailTop} x2="0" y2={BAND_COLORS.yBottom}>
          <stop offset="0" stopColor={BAND_COLORS.left[0]} />
          <stop offset="1" stopColor={BAND_COLORS.left[1]} />
        </linearGradient>
        <linearGradient id={id("band-right")} gradientUnits="userSpaceOnUse" x1="0" y1={BAND_COLORS.yBottom} x2="0" y2={BAND_COLORS.yHead}>
          <stop offset="0" stopColor={BAND_COLORS.right[0]} />
          <stop offset="1" stopColor={BAND_COLORS.right[1]} />
        </linearGradient>
        <linearGradient id={id("exchange")} gradientUnits="userSpaceOnUse" x1={layout.exchange.x1} y1="0" x2={layout.exchange.x2} y2="0">
          <stop offset="0.4" stopColor={EXCHANGE_COLORS.red} />
          <stop offset="0.6" stopColor={EXCHANGE_COLORS.gold} />
        </linearGradient>
        {STAGE_KEYS.map((stage) => (
          <clipPath key={stage} id={id(`icons-${stage}`)}>
            {layout.stages[stage].icons.map(([x, y, width, height], i) => (
              <rect key={i} x={x} y={y} width={width} height={height} />
            ))}
          </clipPath>
        ))}
      </defs>

      <circle
        className="nai-part"
        data-stage="imaging"
        cx={layout.tail.cx}
        cy={layout.tail.cy}
        r={BAND.width / 2}
        fill={`url(#${id("band-left")})`}
      />
      {STAGE_KEYS.map((stage) => (
        <path
          key={stage}
          className="nai-part"
          data-stage={stage}
          d={layout.stages[stage].band}
          fill="none"
          stroke={`url(#${id(`band-${layout.stages[stage].gradient}`)})`}
          strokeWidth={BAND.width}
        />
      ))}
      <path
        className="nai-part"
        data-stage="improving"
        d={layout.arrowhead}
        fill={ARROWHEAD_COLOR}
        stroke={ARROWHEAD_COLOR}
        strokeWidth="8"
        strokeLinejoin="round"
      />
      <path className="nai-flow" d={layout.flow} pathLength={1000} />

      <g className="nai-part" data-stage="exchange">
        <path d={layout.exchange.path} fill={`url(#${id("exchange")})`} />
        <text className="nai-center" textAnchor="middle" fontSize={layout.centerSize}>
          {layout.exchange.lines.map((line) => (
            <tspan key={line.text} x={line.x} y={line.y}>
              {line.text}
            </tspan>
          ))}
        </text>
      </g>

      {STAGE_KEYS.map((stage) => (
        <image
          key={stage}
          className="nai-part"
          data-stage={ICON_STAGES[stage]}
          href={icons}
          x={layout.icons.x}
          y={layout.icons.y}
          width={layout.icons.width}
          height={layout.icons.height}
          clipPath={`url(#${id(`icons-${stage}`)})`}
        />
      ))}

      {STAGE_KEYS.map((stage) => {
        const r = BADGE_RADIUS[name];
        const { cx, cy } = badgeCenter(layout.stages[stage].labelBox, r);
        return (
          <g key={stage} className="nai-part" data-stage={stage}>
            <circle cx={cx} cy={cy} r={r} fill={BADGES[stage].fill} />
            <text className="nai-badge" x={cx} y={cy + r * 0.42} textAnchor="middle" fontSize={r * 1.2} fill={BADGES[stage].text}>
              {BADGES[stage].n}
            </text>
            <text className="nai-label" textAnchor="middle" fontSize={layout.labelSize}>
              {layout.stages[stage].label.map((line) => (
                <tspan key={line.text} x={line.x} y={line.y}>
                  {line.text}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}

      {/* invisible hit areas on top: band segment, label and icons of each stage */}
      {STAGE_KEYS.map((stage) => {
        const s = layout.stages[stage];
        const [lx, ly, lw, lh] = s.labelBox;
        const r = BADGE_RADIUS[name];
        const badge = badgeCenter(s.labelBox, r);
        return (
          <g key={stage} {...hotspotProps(stage)}>
            <path d={s.band} fill="none" stroke="transparent" strokeWidth={BAND.width + 40} />
            {s.icons.map(([x, y, width, height], i) => (
              <rect key={i} x={x} y={y} width={width} height={height} fill="transparent" />
            ))}
            {stage === "improving" ? <path d={layout.arrowhead} fill="transparent" /> : null}
            <circle cx={badge.cx} cy={badge.cy} r={r + 8} fill="transparent" />
            <rect className="nai-focus" x={lx} y={ly} width={lw} height={lh} rx="14" fill="transparent" />
          </g>
        );
      })}
      <g {...hotspotProps("exchange")}>
        <path className="nai-focus" d={layout.exchange.path} fill="transparent" />
      </g>
    </svg>
  );
}

export function ResearchCycleFigure() {
  const [selected, setSelected] = useState<CycleStageId | null>(null);
  const [playing, setPlaying] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // run the flow animation once the figure is properly in view
  useEffect(() => {
    const node = wrapRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPlaying(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const toggle = (stage: CycleStageId) => setSelected((current) => (current === stage ? null : stage));
  const classes = ["nai-cycle", selected ? "has-active" : "", playing ? "is-playing" : ""].filter(Boolean).join(" ");

  return (
    <div ref={wrapRef} className={classes} data-active={selected ?? undefined}>
      <CycleSvg name="desktop" selected={selected} onToggle={toggle} />
      <CycleSvg name="mobile" selected={selected} onToggle={toggle} />

      <div className="nai-steps" role="group" aria-label="Parts of the research cycle">
        {cycleStages.map((stage) => (
          <button
            key={stage.id}
            type="button"
            className={`nai-step nai-step-${stage.id}`}
            aria-pressed={selected === stage.id}
            onClick={() => toggle(stage.id)}
          >
            <span className="nai-step-num" aria-hidden="true">
              {stage.step}
            </span>
            {stage.short}
          </button>
        ))}
      </div>
    </div>
  );
}
