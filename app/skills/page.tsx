import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { skillCategories, workflow } from "@/lib/data";

export const metadata: Metadata = {
  title: "Technical Skills",
  description:
    "Tools and concepts Muna K.C. uses across data science, machine learning, and software development.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        label="~/SKILLS"
        title="Technical Skills"
        subtitle="Tools and concepts I use across data science, machine learning, and software development."
      />

      <section>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-14 sm:py-20">
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((cat) => {
              const isWeb = cat.title === "Web Development";
              return (
                <div
                  key={cat.number}
                  className={`border rounded-[8px] p-6 sm:p-7 bg-card ${
                    isWeb ? "border-border opacity-90 sm:col-span-1" : "border-border"
                  } ${cat.title === "Machine Learning" || cat.title === "Data Science" ? "sm:col-span-2" : ""}`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">{cat.number}</span>
                    <h2 className="text-lg font-semibold tracking-tight">{cat.title}</h2>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs border border-border rounded-full px-3 py-1.5 text-foreground/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-t border-border grid-bg">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-24">
          <p className="eyebrow mb-4">~/APPROACH</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-lg mb-10">
            How I Approach Data Problems
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.map((w) => (
              <li key={w.step} className="border border-border rounded-[8px] bg-card p-5">
                <span className="font-mono text-xs text-accent">{w.step}</span>
                <h3 className="mt-2 font-semibold text-sm tracking-wide uppercase">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{w.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
