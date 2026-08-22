import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { education, training } from "@/lib/data";

export const metadata: Metadata = {
  title: "Education & Training",
  description: "Education and training background of Muna K.C. in Computer Science, Data Science, and Machine Learning.",
};

export default function EducationPage() {
  return (
    <>
      <PageHeader label="~/EDUCATION" title="Education & Training" />

      <section>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-14 sm:py-20 space-y-6 max-w-3xl">
          {/* Education */}
          <div className="border border-border rounded-[8px] bg-card p-7 sm:p-8">
            <p className="eyebrow mb-3">Education</p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              {education.degree}
            </h2>
            <p className="mt-2 text-muted text-sm">
              {education.school} · {education.location}
            </p>
            <p className="mt-1 font-mono text-xs text-accent">
              Expected Graduation: {education.graduation}
            </p>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="eyebrow mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="font-mono text-xs border border-border rounded-full px-3 py-1.5 text-foreground/75"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Training */}
          <div className="border border-border rounded-[8px] bg-card p-7 sm:p-8">
            <p className="eyebrow mb-3">Training</p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              {training.title}
            </h2>
            <p className="mt-2 text-muted text-sm">{training.provider}</p>
            <p className="mt-1 font-mono text-xs text-accent">{training.duration}</p>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Intensive Training Program covering practical foundations across
              artificial intelligence, machine learning, and data science.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
