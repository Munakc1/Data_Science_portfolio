import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { skillCategories, workflow } from "@/lib/data";

export const metadata: Metadata = {
  title: "Technical Skills",
  description:
    "Tools and concepts Muna K.C. uses across data science, machine learning, and software development.",
  openGraph: {
    title: "Technical Skills | Muna K.C.",
    description:
      "Tools and concepts across data science, machine learning, and software development.",
    type: "website",
  },
};

// Categories that get a full-width card. Everything else sits two-up.
const FEATURED = new Set(["Machine Learning", "Data Science"]);

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        label="/SKILLS"
        title="Technical Skills"
        subtitle="Tools and concepts I use across data science, machine learning, and software development."
      />

      <section aria-labelledby="skills-heading">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-14 sm:py-20">
          <h2 id="skills-heading" className="sr-only">
            Skills by category
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {skillCategories.map((cat) => {
              const featured = FEATURED.has(cat.title);

              return (
                <article
                  key={cat.number}
                  aria-labelledby={`cat-${cat.number}`}
                  className={[
                    "group relative overflow-hidden rounded-[8px] border border-border bg-card",
                    "p-6 sm:p-8 transition-colors duration-200 hover:border-accent/50",
                    featured ? "sm:col-span-2" : "",
                  ].join(" ")}
                >
                  {/* Accent edge: grows on hover, signals the card is a unit */}
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-[0.28] bg-accent transition-transform duration-300 group-hover:scale-y-100 motion-reduce:transition-none"
                  />

                  <header className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-accent">
                        {cat.number}
                      </span>
                      <h3
                        id={`cat-${cat.number}`}
                        className={
                          featured
                            ? "text-xl sm:text-2xl font-semibold tracking-tight"
                            : "text-lg font-semibold tracking-tight"
                        }
                      >
                        {cat.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-muted tabular-nums">
                      {cat.items.length} tools
                    </span>
                  </header>

                  <ul className="mt-5 flex flex-wrap gap-2" role="list">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-foreground/[0.03] px-3.5 py-1.5 font-mono text-xs text-foreground/80 transition-colors duration-150 hover:border-accent/60 hover:text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow: this one IS a sequence, so numbering and a connecting rule make sense */}
      <section
        aria-labelledby="approach-heading"
        className="border-t border-border grid-bg"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-24">
          <p className="eyebrow mb-4">~/APPROACH</p>
          <h2
            id="approach-heading"
            className="mb-12 max-w-lg text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            How I Approach Data Problems
          </h2>

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((w, i) => (
              <li
                key={w.step}
                className="relative rounded-[8px] border border-border bg-card p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/60 font-mono text-xs text-accent">
                    {w.step}
                  </span>
                  {/* Connector line on desktop, hidden after the last step */}
                  {i < workflow.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden h-px flex-1 bg-border lg:block"
                    />
                  )}
                </div>
                <h3 className="mt-4 text-sm font-semibold tracking-wide uppercase">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {w.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}