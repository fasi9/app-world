const nodes = [
  { x: 200, y: 60, label: "AI" },
  { x: 340, y: 150, label: "DEV" },
  { x: 290, y: 320, label: "DESIGN" },
  { x: 110, y: 320, label: "MARKETING" },
  { x: 60, y: 150, label: "QA" },
];

/**
 * Static poster for the hero: the five-node "Intelligence Core" motif
 * (brief section 6) rendered as an inline SVG. Doubles as the WebGL
 * scene's loading/fallback poster in Phase 2 — no raster asset, no
 * layout shift, and it's the page's LCP element instead of a canvas.
 */
export function IntelligenceCorePoster({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 380"
      className={className}
      role="img"
      aria-label="An abstract network of five connected nodes representing AI, development, design, marketing, and QA"
    >
      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="190" r="170" fill="url(#core-glow)" />

      {nodes.map((node, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return (
          <line
            key={`edge-${node.label}`}
            x1={node.x}
            y1={node.y}
            x2={next.x}
            y2={next.y}
            stroke="#A78BFA"
            strokeOpacity="0.45"
            strokeWidth="1"
          />
        );
      })}
      {nodes.map((node) => (
        <line
          key={`spoke-${node.label}`}
          x1={200}
          y1={190}
          x2={node.x}
          y2={node.y}
          stroke="#22D3EE"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      ))}

      <circle cx="200" cy="190" r="14" fill="#22D3EE" />

      {nodes.map((node) => (
        <g key={node.label}>
          <circle cx={node.x} cy={node.y} r="7" fill="#F7F8FC" stroke="#22D3EE" strokeWidth="1.5" />
          <text
            x={node.x}
            y={node.y + (node.y < 190 ? -16 : 24)}
            textAnchor="middle"
            fontSize="10"
            fontFamily="var(--font-mono, monospace)"
            letterSpacing="0.1em"
            fill="#F7F8FC"
            opacity="0.7"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
