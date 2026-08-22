import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Muna K.C., including frontend development internship work.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader label="~/EXPERIENCE" title="Experience" />

      <section>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-14 sm:py-20">
          <div className="max-w-2xl">
            {experience.map((job) => (
              <div key={job.title} className="border border-border rounded-[8px] bg-card p-7 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    {job.title}
                  </h2>
                  <span className="font-mono text-xs text-accent">{job.period}</span>
                </div>
                <p className="mt-1 text-muted text-sm">{job.company}</p>

                <ul className="mt-6 space-y-3">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-[15px] text-foreground/85 leading-relaxed">
                      <span className="text-accent mt-[2px]" aria-hidden="true">
                        —
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 pt-6 border-t border-border text-sm text-muted leading-relaxed">
                  {job.note}
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
