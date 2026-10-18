// Generated geometry for the research-cycle figure (coordinates of the original
// 2934x1650 diagram). Edit positions here; ResearchCycleFigure.tsx draws them.
export const BAND = { width: 175, radiusMid: 554.5 };
export const BAND_COLORS = { left: ["#f4dce1", "#e8bdc5"], right: ["#f1deab", "#d6a93f"], yTailTop: 290, yBottom: 1504, yHead: 430 };
export const EXCHANGE_COLORS = { red: "#efd2d7", gold: "#efdcaa" };
export const ARROWHEAD_COLOR = "#c8961c";

export const cycleLayouts = {
  desktop: {
    viewBox: "708 19 1546 1558",
    labelSize: 60,
    centerSize: 56,
    tail: { cx: 1251.3, cy: 367.9 },
    arrowhead: "M2000.9 413.7L1608.8 317.7L1829.2 568.3Z",
    flow: "M1251.3 367.9A554.5 554.5 0 1 0 1915.1 491",
    exchange: {
      path: "M1085 828.5L1229 682L1229 755L1814 755L1814 682L1958 828.5L1814 975L1814 898L1229 898L1229 975Z",
      x1: 1085,
      x2: 1958,
      lines: [
        { x: 1521.5, y: 817.3, text: "AI to synthesize and" },
        { x: 1521.5, y: 880, text: "analyze neuroimaging" },
      ],
    },
    icons: { x: 730, y: 41, width: 1502, height: 1514 },
    stages: {
      imaging: {
        band: "M1251.3 367.9A554.5 554.5 0 0 0 968.4 1009.3",
        gradient: "left",
        label: [{ x: 1040, y: 433, text: "Imaging" }, { x: 1040, y: 500.2, text: "the brain" }],
        labelBox: [899.4, 368, 281.1, 157.2],
        icons: [[721, 684, 380, 291]],
      },
      understanding: {
        band: "M966.4 1001.8A554.5 554.5 0 0 0 1506.9 1416.5",
        gradient: "left",
        label: [{ x: 1008, y: 1200, text: "Understanding" }, { x: 1008, y: 1267.2, text: "the brain" }],
        labelBox: [781.9, 1135, 452.1, 157.2],
        icons: [[1262, 1376, 192, 190], [1366, 1192, 140, 218], [1506, 1192, 68, 160]],
      },
      advancing: {
        band: "M1499.1 1416.5A554.5 554.5 0 0 0 2022.7 668.7",
        gradient: "right",
        label: [
          { x: 1925, y: 1216, text: "Advancing artificial" },
          { x: 1925, y: 1283.2, text: "intelligence" },
        ],
        labelBox: [1636, 1151, 578, 157.2],
        icons: [[1885, 622, 356, 420], [1506, 1352, 170, 214]],
      },
      improving: {
        band: "M2025.4 676A554.5 554.5 0 0 0 1915.1 491",
        gradient: "right",
        label: [{ x: 2048, y: 250, text: "Improving" }, { x: 2048, y: 317.2, text: "brain health" }],
        labelBox: [1864.4, 185, 367.1, 157.2],
        icons: [[1293, 31, 429, 374]],
      },
    },
  },
  mobile: {
    viewBox: "669 19 1661 1558",
    labelSize: 86,
    centerSize: 74,
    tail: { cx: 1251.3, cy: 367.9 },
    arrowhead: "M2000.9 413.7L1608.8 317.7L1829.2 568.3Z",
    flow: "M1251.3 367.9A554.5 554.5 0 1 0 1915.1 491",
    exchange: {
      path: "M1075 828.5L1236 585L1236 695L1807 695L1807 585L1968 828.5L1807 1072L1807 962L1236 962L1236 1072Z",
      x1: 1075,
      x2: 1968,
      lines: [
        { x: 1521.5, y: 772.3, text: "AI to synthesize" },
        { x: 1521.5, y: 855.1, text: "and analyze" },
        { x: 1521.5, y: 938, text: "neuroimaging" },
      ],
    },
    icons: { x: 730, y: 41, width: 1502, height: 1514 },
    stages: {
      imaging: {
        band: "M1251.3 367.9A554.5 554.5 0 0 0 968.4 1009.3",
        gradient: "left",
        label: [{ x: 1005, y: 377.8, text: "Imaging" }, { x: 1005, y: 474.1, text: "the brain" }],
        labelBox: [811.3, 289.8, 387.3, 214.3],
        icons: [[721, 684, 380, 291]],
      },
      understanding: {
        band: "M966.4 1001.8A554.5 554.5 0 0 0 1506.9 1416.5",
        gradient: "left",
        label: [{ x: 990, y: 1204.8, text: "Understanding" }, { x: 990, y: 1301.1, text: "the brain" }],
        labelBox: [673.8, 1116.8, 632.4, 214.3],
        icons: [[1262, 1376, 192, 190], [1366, 1192, 140, 218], [1506, 1192, 68, 160]],
      },
      advancing: {
        band: "M1499.1 1416.5A554.5 554.5 0 0 0 2022.7 668.7",
        gradient: "right",
        label: [
          { x: 1985, y: 1236.6, text: "Advancing" },
          { x: 1985, y: 1333, text: "artificial" },
          { x: 1985, y: 1429.3, text: "intelligence" },
        ],
        labelBox: [1730.7, 1148.6, 508.6, 310.7],
        icons: [[1885, 622, 356, 420], [1506, 1352, 170, 214]],
      },
      improving: {
        band: "M2025.4 676A554.5 554.5 0 0 0 1915.1 491",
        gradient: "right",
        label: [{ x: 2070, y: 210.8, text: "Improving" }, { x: 2070, y: 307.1, text: "brain health" }],
        labelBox: [1814.7, 122.8, 510.6, 214.3],
        icons: [[1293, 31, 429, 374]],
      },
    },
  },
} as const;
