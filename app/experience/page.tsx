import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Muna K.C. in full-stack development, data science, and machine learning.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader label="/EXPERIENCE" title="Experience" />

      <section>
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-20">
          
          {/* Experience Cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {experience.map((job, index) => (
              <article
                key={`${job.title}-${index}`}
                className="rounded-[8px] border border-border bg-card p-6 sm:p-8"
              >
                {/* Header */}
                <div className="border-b border-border pb-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
                        {job.type}
                      </p>

                      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {job.title}
                      </h2>

                      <p className="mt-1 text-sm text-muted">
                        {job.company}
                      </p>
                    </div>

                    <span className="shrink-0 font-mono text-xs text-accent">
                      {job.period}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                    Technologies
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mt-7">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                    Responsibilities
                  </h3>

                  <ul className="space-y-3">
                    {job.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-[14px] leading-relaxed text-foreground/85"
                      >
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />

                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Note */}
                <div className="mt-7 border-t border-border pt-5">
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    Experience Summary
                  </h3>

                  <p className="text-sm leading-relaxed text-muted">
                    {job.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}