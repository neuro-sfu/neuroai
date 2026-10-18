import { diagramAlt } from "../content/siteContent";

// Research-cycle figure, redrawn from the original diagram (same layout and icons).
// Coordinates are those of the original 2934x1650 image. The neuroscience half of
// the band is red, the AI half is gold, both getting stronger toward the arrowhead.
// A larger-text version is used when the figure is narrow (see .nai-figure in
// globals.css).
const RED_TINT = "#efd2d7";
const GOLD_TINT = "#efdcaa";
const GOLD = "#c8961c";
const BAND_WIDTH = 175;

export function ResearchCycleFigure() {
  const icons = `${import.meta.env.BASE_URL}images/neuro-ai-icons.png`;
  return (
    <>
      <svg className="nai-figure nai-figure-desktop" viewBox="708 19 1546 1558" role="img" aria-label={diagramAlt}>
        <defs>
          <linearGradient id="nai-xg-desktop" gradientUnits="userSpaceOnUse" x1="1085" y1="0" x2="1958" y2="0">
            <stop offset="0.4" stopColor={RED_TINT} />
            <stop offset="0.6" stopColor={GOLD_TINT} />
          </linearGradient>
          <linearGradient id="nai-bl-desktop" gradientUnits="userSpaceOnUse" x1="0" y1="290" x2="0" y2="1504">
            <stop offset="0" stopColor="#f4dce1" />
            <stop offset="1" stopColor="#e8bdc5" />
          </linearGradient>
          <linearGradient id="nai-br-desktop" gradientUnits="userSpaceOnUse" x1="0" y1="1504" x2="0" y2="430">
            <stop offset="0" stopColor="#f1deab" />
            <stop offset="1" stopColor="#d6a93f" />
          </linearGradient>
        </defs>
        <circle cx="1251.3" cy="367.9" r={BAND_WIDTH / 2} fill="url(#nai-bl-desktop)" />
        <path d="M1251.3 367.9A554.5 554.5 0 0 0 1503 1416.5" fill="none" stroke="url(#nai-bl-desktop)" strokeWidth={BAND_WIDTH} />
        <path d="M1503 1416.5A554.5 554.5 0 0 0 1915.1 491" fill="none" stroke="url(#nai-br-desktop)" strokeWidth={BAND_WIDTH} />
        <path d="M2000.9 413.7L1608.8 317.7L1829.2 568.3Z" fill={GOLD} stroke={GOLD} strokeWidth="8" strokeLinejoin="round" />
        <path d="M1085 828.5L1229 682L1229 755L1814 755L1814 682L1958 828.5L1814 975L1814 898L1229 898L1229 975Z" fill="url(#nai-xg-desktop)" />
        <text className="nai-center" textAnchor="middle" fontSize="56"><tspan x="1521.5" y="817.3">AI to synthesize and</tspan><tspan x="1521.5" y="880">analyze neuroimaging</tspan></text>
        <image href={icons} x="730" y="41" width="1502" height="1514" />
        <text className="nai-label" textAnchor="middle" fontSize="60"><tspan x="1040" y="433">Imaging</tspan><tspan x="1040" y="500.2">the brain</tspan></text>
        <text className="nai-label" textAnchor="middle" fontSize="60"><tspan x="2048" y="250">Improving</tspan><tspan x="2048" y="317.2">brain health</tspan></text>
        <text className="nai-label" textAnchor="middle" fontSize="60"><tspan x="1008" y="1200">Understanding</tspan><tspan x="1008" y="1267.2">the brain</tspan></text>
        <text className="nai-label" textAnchor="middle" fontSize="60"><tspan x="1925" y="1216">Advancing artificial</tspan><tspan x="1925" y="1283.2">intelligence</tspan></text>
      </svg>
      <svg className="nai-figure nai-figure-mobile" viewBox="669 19 1661 1558" role="img" aria-label={diagramAlt}>
        <defs>
          <linearGradient id="nai-xg-mobile" gradientUnits="userSpaceOnUse" x1="1075" y1="0" x2="1968" y2="0">
            <stop offset="0.4" stopColor={RED_TINT} />
            <stop offset="0.6" stopColor={GOLD_TINT} />
          </linearGradient>
          <linearGradient id="nai-bl-mobile" gradientUnits="userSpaceOnUse" x1="0" y1="290" x2="0" y2="1504">
            <stop offset="0" stopColor="#f4dce1" />
            <stop offset="1" stopColor="#e8bdc5" />
          </linearGradient>
          <linearGradient id="nai-br-mobile" gradientUnits="userSpaceOnUse" x1="0" y1="1504" x2="0" y2="430">
            <stop offset="0" stopColor="#f1deab" />
            <stop offset="1" stopColor="#d6a93f" />
          </linearGradient>
        </defs>
        <circle cx="1251.3" cy="367.9" r={BAND_WIDTH / 2} fill="url(#nai-bl-mobile)" />
        <path d="M1251.3 367.9A554.5 554.5 0 0 0 1503 1416.5" fill="none" stroke="url(#nai-bl-mobile)" strokeWidth={BAND_WIDTH} />
        <path d="M1503 1416.5A554.5 554.5 0 0 0 1915.1 491" fill="none" stroke="url(#nai-br-mobile)" strokeWidth={BAND_WIDTH} />
        <path d="M2000.9 413.7L1608.8 317.7L1829.2 568.3Z" fill={GOLD} stroke={GOLD} strokeWidth="8" strokeLinejoin="round" />
        <path d="M1075 828.5L1236 585L1236 695L1807 695L1807 585L1968 828.5L1807 1072L1807 962L1236 962L1236 1072Z" fill="url(#nai-xg-mobile)" />
        <text className="nai-center" textAnchor="middle" fontSize="74"><tspan x="1521.5" y="772.3">AI to synthesize</tspan><tspan x="1521.5" y="855.1">and analyze</tspan><tspan x="1521.5" y="938">neuroimaging</tspan></text>
        <image href={icons} x="730" y="41" width="1502" height="1514" />
        <text className="nai-label" textAnchor="middle" fontSize="86"><tspan x="1005" y="377.8">Imaging</tspan><tspan x="1005" y="474.1">the brain</tspan></text>
        <text className="nai-label" textAnchor="middle" fontSize="86"><tspan x="2070" y="210.8">Improving</tspan><tspan x="2070" y="307.1">brain health</tspan></text>
        <text className="nai-label" textAnchor="middle" fontSize="86"><tspan x="990" y="1204.8">Understanding</tspan><tspan x="990" y="1301.1">the brain</tspan></text>
        <text className="nai-label" textAnchor="middle" fontSize="86"><tspan x="1985" y="1196.6">Advancing</tspan><tspan x="1985" y="1293">artificial</tspan><tspan x="1985" y="1389.3">intelligence</tspan></text>
      </svg>
    </>
  );
}
