import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { education, recruiterSignals } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muna K.C., a Computer Science student and developer working across Data Science, Machine Learning and Full-Stack Web Development with Python, SQL, React, Next.js and Node.js.",
};

const skillGroups = [
  {
    title: "Data Science & ML",
    file: "workflow.ipynb",
    items: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Machine Learning",
      "Statistics",
      "Data Analysis",
    ],
  },
  {
    title: "Full-Stack Development",
    file: "app/page.tsx",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Git",
    ],
  },
];

const facts = [
  { label: "Expected Graduation", value: education.graduation },
  { label: "Primary Data Science Language", value: "Python" },
  { label: "Data & Database Analysis", value: "SQL" },
  { label: "Predictive Modeling Focus", value: "ML" },
  { label: "Frontend & Full-Stack", value: "Next.js" },
  { label: "Backend & APIs", value: "Node.js" },
];

const approach = [
  {
    step: "01",
    title: "Understand the data",
    text: "Cleaning, exploring and engineering features so the problem is clear before any model is trained.",
  },
  {
    step: "02",
    title: "Build and evaluate",
    text: "Training machine learning models in Python and measuring them honestly with the right metrics.",
  },
  {
    step: "03",
    title: "Ship it as a product",
    text: "Wrapping the result in an API and a clean web interface with Node.js, React and Next.js.",
  },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-reveal {
          opacity: 0;
          transform: translateY(22px);
          animation: about-reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .about-reveal-delay-1 {
          animation-delay: 120ms;
        }

        .about-reveal-delay-2 {
          animation-delay: 220ms;
        }

        .about-reveal-delay-3 {
          animation-delay: 320ms;
        }

        .about-reveal-delay-4 {
          animation-delay: 420ms;
        }

        @keyframes about-reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-float {
          animation: about-float 5s ease-in-out infinite;
        }

        @keyframes about-float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        .about-card {
          position: relative;
          overflow: hidden;
        }

        .about-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(
            circle at 0% 0%,
            rgba(166, 43, 36, 0.08),
            transparent 42%
          );
          transition: opacity 400ms ease;
        }

        .about-card:hover::before {
          opacity: 1;
        }

        .about-card::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #A62B24,
            transparent
          );
          transform: translateX(-100%);
          transition: transform 700ms ease;
        }

        .about-card:hover::after {
          transform: translateX(100%);
        }

        .about-skill {
          transition:
            transform 250ms ease,
            border-color 250ms ease,
            background-color 250ms ease,
            color 250ms ease;
        }

        .about-skill:hover {
          transform: translateY(-2px);
        }

        .about-number {
          transition:
            transform 300ms ease,
            letter-spacing 300ms ease;
        }

        .about-card:hover .about-number {
          transform: scale(1.04);
          letter-spacing: 0.02em;
        }

        .about-step-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          overflow: hidden;
          background: rgba(26, 26, 26, 0.08);
        }

        .about-step-line::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 45%;
          background: #A62B24;
          transform: translateX(-120%);
          transition: transform 800ms ease;
        }

        .about-card:hover .about-step-line::after {
          transform: translateX(240%);
        }

        .about-dot {
          position: relative;
        }

        .about-dot::before {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          left: -15px;
          top: 50%;
          border-radius: 9999px;
          background: #A62B24;
          transform: translateY(-50%) scale(0.6);
          opacity: 0;
          transition:
            opacity 250ms ease,
            transform 250ms ease;
        }

        .about-dot:hover::before {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .about-reveal,
          .about-float {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .about-card::after,
          .about-step-line::after {
            transition: none;
          }
        }
      `}</style>

      <PageHeader label="" title="About Me" />

      {/* Intro / At a glance */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.4fr]">
          {/* left: quick facts */}
          <div className="about-reveal lg:sticky lg:top-24 lg:h-fit">
            <p className="eyebrow mb-4">~/AT-A-GLANCE</p>

            <div className="grid grid-cols-2 gap-4">
              {facts.map((f, index) => (
                <div
                  key={f.label}
                  className={`about-card about-float group relative overflow-hidden rounded-lg border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-accent ${
                    index % 2 === 0
                      ? "about-reveal-delay-1"
                      : "about-reveal-delay-2"
                  }`}
                  style={{
                    animationDelay: `${100 + index * 70}ms`,
                  }}
                >
                  <span
                    className="absolute left-0 top-0 h-full w-0.75 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <p className="about-number relative z-10 font-mono text-2xl font-semibold text-accent">
                    {f.value}
                  </p>

                  <p className="relative z-10 mt-1 text-xs leading-snug text-muted">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* right: story + skills */}
          <div className="max-w-2xl about-reveal about-reveal-delay-2">
            <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Data scientist and{" "}
              <span className="text-accent">full-stack developer.</span>
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-foreground/85">
              <p>
                I am a Computer Science student working across Data Science,
                Machine Learning and Full-Stack Web Development. I enjoy
                turning raw data into meaningful insights, and then turning
                those insights into products people can actually use.
              </p>

              <p>
                On the data side, my work covers data preprocessing,
                exploratory analysis, feature engineering, machine learning,
                model evaluation, visualization and SQL-based analysis.
              </p>

              <p>
                On the web side, I build with React, Next.js, TypeScript,
                Node.js, Express, MongoDB and REST APIs. With professional
                frontend development experience behind me, I understand how an
                analytical solution fits into a real software product, from the
                model to the API to the interface.
              </p>
            </div>

            <div className="pt-10">
              <p className="eyebrow mb-5">What I Work With</p>

              <div className="grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group, index) => (
                  <div
                    key={group.title}
                    className="about-card about-reveal rounded-[10px] border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-accent"
                    style={{
                      animationDelay: `${350 + index * 140}ms`,
                    }}
                  >
                    <div className="relative z-10 flex items-baseline justify-between gap-3">
                      <h3 className="text-sm font-semibold tracking-tight">
                        {group.title}
                      </h3>

                      <span className="truncate font-mono text-[10px] text-muted">
                        {group.file}
                      </span>
                    </div>

                    <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                      {group.items.map((w) => (
                        <span
                          key={w}
                          className="about-skill about-dot font-mono text-xs rounded-full border border-border px-3 py-1.5 text-foreground/75 transition hover:border-accent hover:bg-accent/5 hover:text-accent"
                        >
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="about-reveal">
            <p className="eyebrow mb-4">~/APPROACH</p>

            <h2 className="mb-10 max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">
              From raw data to a working product
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {approach.map((a, index) => (
              <div
                key={a.step}
                className="about-card about-reveal group relative rounded-lg border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent"
                style={{
                  animationDelay: `${180 + index * 120}ms`,
                }}
              >
                <span className="about-step-line" aria-hidden="true" />

                <p className="relative z-10 font-mono text-sm font-semibold text-accent">
                  {a.step}
                </p>

                <h3 className="relative z-10 mt-3 text-base font-semibold tracking-tight">
                  {a.title}
                </h3>

                <p className="relative z-10 mt-2 text-[14px] leading-relaxed text-muted">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter signals */}
      <section className="grid-bg border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="about-reveal">
            <p className="eyebrow mb-4">~/SUMMARY</p>

            <h2 className="mb-10 max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
              What I Bring
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {recruiterSignals.map((r, index) => (
              <div
                key={r.title}
                className="about-card about-reveal group relative rounded-lg border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent"
                style={{
                  animationDelay: `${180 + index * 120}ms`,
                }}
              >
                <span
                  className="absolute left-0 top-0 h-full w-0.75 origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100"
                  aria-hidden="true"
                />

                <h3 className="relative z-10 text-sm font-semibold uppercase tracking-wide text-accent">
                  {r.title}
                </h3>

                <p className="relative z-10 mt-3 text-[15px] leading-relaxed text-muted">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}