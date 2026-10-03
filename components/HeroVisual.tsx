
"use client";

import { useEffect, useState } from "react";

const pipeline = ["RAW DATA", "CLEAN", "EXPLORE", "FEATURES", "MODEL", "EVALUATE"];
const scores = [0.62, 0.71, 0.8, 0.88, 0.93, 0.94];

const stack = ["React", "Next.js", "Node.js"];

const codeLines = [
  "export async function POST(req) {",
  "  const { features } = await req.json();",
  "  const score = await predict(features);",
  "  return Response.json({ score });",
  "}",
];

const tags = [
  { t: "python", web: false },
  { t: "react", web: true },
  { t: "sql", web: false },
  { t: "next.js", web: true },
  { t: "pandas", web: false },
  { t: "node.js", web: true },
  { t: "scikit-learn", web: false },
];

const xs = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400];
const ys = [120, 110, 118, 90, 96, 64, 72, 44, 50, 22, 30];
const linePoints = xs.map((x, i) => `${x},${ys[i]}`).join(" ");
const linePath = "M" + xs.map((x, i) => `${x},${ys[i]}`).join(" L");
const areaPath = `${linePath} L400,160 L0,160 Z`;

const R = 30;
const CIRC = 2 * Math.PI * R;

function DataIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 18 8.5 11l4 3.5L20 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="6" r="1.6" fill="currentColor" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PanelHeader({
  icon,
  title,
  file,
}: {
  icon: React.ReactNode;
  title: string;
  file: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] bg-accent/10 text-accent">
        {icon}
      </span>

      <div className="min-w-0">
        <h3 className="truncate text-[13.5px] font-semibold leading-tight tracking-tight">
          {title}
        </h3>

        <p className="mt-0.5 truncate font-mono text-[10px] text-muted">
          {file}
        </p>
      </div>
    </div>
  );
}

export default function HeroVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) {
      setActive(pipeline.length - 1);
      return;
    }

    const id = setInterval(() => {
      setActive((a) => (a + 1) % pipeline.length);
    }, 1300);

    return () => clearInterval(id);
  }, []);

  const score = scores[active];

  return (
    <div
      className="reveal hv-root hv-card relative w-full overflow-hidden rounded-[12px] border border-border bg-card"
      style={{ animationDelay: "120ms" }}
      role="img"
      aria-label="Illustrative diagram of my work as a data scientist, machine learning practitioner, and full-stack developer: a machine learning workflow from raw data to evaluation, connected through an API to a web dashboard built with React, Next.js and Node.js."
    >
      <style>{`
        .hv-root {
          container-type: inline-size;
          container-name: hv;
        }

        .hv-card {
          box-shadow: 0 30px 70px -36px rgba(126, 33, 29, 0.4);
        }

        .hv-glow {
          position: absolute;
          top: -110px;
          right: -110px;
          width: 320px;
          height: 320px;
          border-radius: 9999px;
          pointer-events: none;
          background: radial-gradient(
            closest-side,
            rgba(166, 43, 36, 0.16),
            transparent
          );
          animation: hv-breathe 6s ease-in-out infinite;
        }

        @keyframes hv-breathe {
          50% {
            transform: scale(1.15);
            opacity: 0.7;
          }
        }

        .hv-sweep {
          position: absolute;
          left: 0;
          top: 0;
          height: 2px;
          width: 35%;
          background: linear-gradient(
            90deg,
            transparent,
            #A62B24,
            transparent
          );
          animation: hv-sweep 4.5s ease-in-out infinite;
        }

        @keyframes hv-sweep {
          from {
            transform: translateX(-100%);
          }

          to {
            transform: translateX(300%);
          }
        }

        .hv-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          align-items: stretch;
        }

        .hv-conn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 36px;
        }

        .hv-conn-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          border-left: 2px dashed rgba(26, 26, 26, 0.22);
        }

        .hv-packet {
          position: absolute;
          left: 50%;
          top: 0;
          width: 8px;
          height: 8px;
          margin-left: -4px;
          border-radius: 9999px;
          background: #A62B24;
          box-shadow: 0 0 12px 3px rgba(166, 43, 36, 0.5);
          animation: hv-ty 2.4s ease-in-out infinite;
        }

        @keyframes hv-ty {
          0% {
            top: 0;
            opacity: 0;
          }

          15%,
          85% {
            opacity: 1;
          }

          100% {
            top: calc(100% - 8px);
            opacity: 0;
          }
        }

        @keyframes hv-tx {
          0% {
            left: 0;
            opacity: 0;
          }

          15%,
          85% {
            opacity: 1;
          }

          100% {
            left: calc(100% - 8px);
            opacity: 0;
          }
        }

        @container hv (min-width: 520px) {
          .hv-grid {
            grid-template-columns:
              minmax(0, 1fr)
              36px
              minmax(0, 1fr);
          }

          .hv-conn {
            height: auto;
            width: 36px;
          }

          .hv-conn-line {
            top: 50%;
            bottom: auto;
            left: 0;
            right: 0;
            border-left: 0;
            border-top: 2px dashed rgba(26, 26, 26, 0.22);
          }

          .hv-packet {
            left: 0;
            top: 50%;
            margin: -4px 0 0 0;
            animation-name: hv-tx;
          }
        }

        .hv-line {
          stroke-dasharray: 1;
          stroke-dashoffset: 0;
          animation: hv-draw 5s linear infinite;
        }

        @keyframes hv-draw {
          0% {
            stroke-dashoffset: 1;
          }

          55%,
          100% {
            stroke-dashoffset: 0;
          }
        }

        .hv-area {
          animation: hv-area 5s ease-out infinite;
        }

        @keyframes hv-area {
          0%,
          35% {
            opacity: 0;
          }

          65%,
          100% {
            opacity: 1;
          }
        }

        .hv-dot {
          transform-box: fill-box;
          transform-origin: center;
          animation: hv-pop 5s ease-out infinite;
        }

        @keyframes hv-pop {
          0% {
            opacity: 0;
            transform: scale(0);
          }

          6%,
          92% {
            opacity: 1;
            transform: scale(1);
          }

          100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        .hv-float {
          animation: hv-float 4s ease-in-out infinite;
        }

        @keyframes hv-float {
          50% {
            transform: translateY(-2px);
          }
        }

        .hv-code-line {
          animation: hv-in 0.6s ease-out backwards;
        }

        @keyframes hv-in {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
        }

        .hv-cursor {
          animation: hv-blink 1s steps(1) infinite;
        }

        @keyframes hv-blink {
          50% {
            opacity: 0;
          }
        }

        .hv-live {
          animation: hv-ping 2s ease-out infinite;
        }

        @keyframes hv-ping {
          from {
            box-shadow: 0 0 0 0 rgba(166, 43, 36, 0.45);
          }

          to {
            box-shadow: 0 0 0 7px rgba(166, 43, 36, 0);
          }
        }

        .hv-marquee {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent,
            #000 8%,
            #000 92%,
            transparent
          );
          mask-image: linear-gradient(
            90deg,
            transparent,
            #000 8%,
            #000 92%,
            transparent
          );
        }

        .hv-track {
          display: flex;
          gap: 0.5rem;
          width: max-content;
          animation: hv-marq 30s linear infinite;
        }

        .hv-marquee:hover .hv-track {
          animation-play-state: paused;
        }

        @keyframes hv-marq {
          to {
            transform: translateX(calc(-50% - 0.25rem));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hv-glow,
          .hv-sweep,
          .hv-packet,
          .hv-line,
          .hv-area,
          .hv-dot,
          .hv-float,
          .hv-code-line,
          .hv-cursor,
          .hv-live,
          .hv-track {
            animation: none;
          }

          .hv-pulse {
            display: none;
          }
        }
      `}</style>

      <span className="hv-glow" aria-hidden="true" />
      <span className="hv-sweep" aria-hidden="true" />

      {/* Window bar */}
      <div className="relative flex items-center gap-2 border-b border-border bg-[#FBFAF7] px-3.5 py-2">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />

        <span className="ml-2 truncate font-mono text-[10.5px] tracking-wide text-muted">
          data + web — illustrative
        </span>

        <span className="ml-auto flex shrink-0 items-center gap-2 font-mono text-[10px] text-muted">
          <span className="hv-live h-2 w-2 rounded-full bg-accent" />
          running
        </span>
      </div>

      <div className="relative p-3.5 sm:p-4">
        <div className="hv-grid">
          {/* Data Science & Machine Learning panel */}
          <section className="flex h-full flex-col rounded-[10px] border border-border bg-[#FBFAF7] p-3">
            <PanelHeader
              icon={<DataIcon />}
              title="Data Science & ML"
              file="workflow.ipynb"
            />

            <div className="mt-2.5 flex flex-wrap items-center gap-x-1 gap-y-1.5 font-mono text-[9px]">
              {pipeline.map((step, i) => (
                <span key={step} className="flex items-center gap-1">
                  <span
                    className={`rounded-[4px] border px-1.5 py-0.5 transition-all duration-500 ${
                      i === active
                        ? "scale-105 border-accent bg-accent/10 text-accent"
                        : i < active
                          ? "border-foreground/30 bg-card text-foreground/80"
                          : "border-border bg-card text-muted"
                    }`}
                  >
                    {step}
                  </span>

                  {i < pipeline.length - 1 && (
                    <span
                      className={`transition-colors duration-500 ${
                        i < active ? "text-accent" : "text-muted"
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>

            <div
              className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-border/70"
              aria-hidden="true"
            >
              <div
                className="h-full bg-accent transition-all duration-700 ease-out"
                style={{
                  width: `${((active + 1) / pipeline.length) * 100}%`,
                }}
              />
            </div>

            <div className="grid-bg mt-2.5 flex flex-1 flex-col rounded-[8px] border border-border bg-card p-2.5">
              <p className="mb-1 font-mono text-[9.5px] tracking-wide text-muted">
                model accuracy over iterations
              </p>

              <div className="flex flex-1 items-center justify-center">
                <svg
                  viewBox="0 0 400 160"
                  className="h-auto max-h-[84px] w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="hvFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#A62B24"
                        stopOpacity="0.2"
                      />
                      <stop
                        offset="100%"
                        stopColor="#A62B24"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d={areaPath}
                    fill="url(#hvFill)"
                    className="hv-area"
                  />

                  <polyline
                    points={linePoints}
                    pathLength={1}
                    fill="none"
                    stroke="#A62B24"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="hv-line"
                  />

                  {xs.map((x, i) => (
                    <circle
                      key={x}
                      cx={x}
                      cy={ys[i]}
                      r="2.8"
                      fill="#7E211D"
                      className="hv-dot"
                      style={{
                        animationDelay: `${i * 0.25}s`,
                      }}
                    />
                  ))}

                  <circle r="5" fill="#A62B24" className="hv-pulse">
                    <animateMotion
                      dur="5s"
                      repeatCount="indefinite"
                      path={linePath}
                      calcMode="linear"
                      keyPoints="0;1;1"
                      keyTimes="0;0.55;1"
                    />
                  </circle>
                </svg>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-1 gap-1.5 font-mono text-[9.5px]">
              <div className="truncate rounded-[4px] border border-border bg-card px-2 py-1 text-foreground/80">
                <span className="text-muted">x = </span>
                [0.42, 1.03, -0.87, 2.15, 0.06]
              </div>

              <div className="flex items-center gap-1.5 rounded-[4px] border border-border bg-card px-2 py-1 text-foreground/80">
                <span className="text-accent">SELECT</span>
                <span className="truncate">signal FROM ohlcv;</span>
              </div>
            </div>
          </section>

          {/* Connector: model → API → app */}
          <div className="hv-conn" aria-hidden="true">
            <span className="hv-conn-line" />
            <span className="hv-packet" />

            <span className="relative z-10 rounded-full border border-border bg-card px-1.5 py-0.5 font-mono text-[9px] text-muted">
              API
            </span>
          </div>

          {/* Full-stack panel */}
          <section className="flex h-full flex-col rounded-[10px] border border-border bg-[#FBFAF7] p-3">
            <PanelHeader
              icon={<CodeIcon />}
              title="Full-Stack Web Dev"
              file="app/dashboard/page.tsx"
            />

            {/* Browser mock */}
            <div className="mt-2.5 overflow-hidden rounded-[8px] border border-border bg-card">
              <div className="flex items-center gap-1 border-b border-border bg-[#FBFAF7] px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
                <span className="h-1.5 w-1.5 rounded-full bg-border" />

                <span className="ml-1.5 min-w-0 flex-1 truncate rounded-[4px] border border-border bg-card px-1.5 font-mono text-[9px] text-muted">
                  localhost:3000/dashboard
                </span>
              </div>

              <div className="flex items-center gap-3 px-3 py-2">
                <svg
                  viewBox="0 0 80 80"
                  className="h-[52px] w-[52px] shrink-0"
                  aria-hidden="true"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r={R}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.12"
                    strokeWidth="6"
                  />

                  <circle
                    cx="40"
                    cy="40"
                    r={R}
                    fill="none"
                    stroke="#A62B24"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={CIRC}
                    strokeDashoffset={CIRC * (1 - score)}
                    transform="rotate(-90 40 40)"
                    style={{
                      transition: "stroke-dashoffset 0.9s ease",
                    }}
                  />

                  <text
                    x="40"
                    y="45"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="600"
                    fill="currentColor"
                    className="font-mono"
                  >
                    {Math.round(score * 100)}%
                  </text>
                </svg>

                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[9.5px] tracking-wide text-muted">
                    live prediction score
                  </p>

                  <p className="mt-0.5 text-[12px] font-semibold leading-snug tracking-tight">
                    Served via Next.js API
                  </p>
                </div>
              </div>
            </div>

            {/* Stack */}
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {stack.map((name, i) => (
                <div
                  key={name}
                  className="hv-float flex items-center justify-center gap-1.5 rounded-[6px] border border-border bg-card px-1 py-1"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="truncate text-[11px] font-semibold tracking-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            {/* Code */}
            <pre className="mt-2 flex flex-1 flex-col justify-center overflow-x-auto rounded-[6px] border border-border bg-card px-2.5 py-1.5 font-mono text-[9.5px] leading-[1.5] text-foreground/80">
              {codeLines.map((line, i) => (
                <span
                  key={i}
                  className="hv-code-line block whitespace-pre"
                  style={{
                    animationDelay: `${0.8 + i * 0.35}s`,
                  }}
                >
                  {line}

                  {i === codeLines.length - 1 && (
                    <span className="hv-cursor ml-0.5 text-accent">
                      ▌
                    </span>
                  )}
                </span>
              ))}
            </pre>
          </section>
        </div>

        {/* Skills strip */}
        <div className="hv-marquee mt-3">
          <div className="hv-track font-mono text-[10.5px] text-muted">
            {[...tags, ...tags].map((tag, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card px-2.5 py-0.5"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    tag.web ? "bg-foreground/60" : "bg-accent"
                  }`}
                />

                {tag.t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
