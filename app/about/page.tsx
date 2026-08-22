import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { education, recruiterSignals } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muna K.C., a Computer Science student focused on Data Science and Machine Learning, Python, SQL, and data analysis.",
};

const workWith = [
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
];

const facts = [
  { label: "Expected Graduation", value: education.graduation },
  { label: "Primary Data Science Language", value: "Python" },
  { label: "Data & Database Analysis", value: "SQL" },
  { label: "Predictive Modeling Focus", value: "ML" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader label="~/ABOUT" title="About Muna" />

      <section>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-14 sm:py-20 grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="border border-border rounded-[8px] bg-card p-5">
                  <p className="text-2xl font-mono font-semibold text-accent">{f.value}</p>
                  <p className="mt-1 text-xs text-muted leading-snug">{f.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-[15px] leading-relaxed text-foreground/85 max-w-2xl">
            <p>
              I am a Computer Science student focused on Data Science and Machine
              Learning. I enjoy transforming raw data into meaningful insights and
              building machine learning solutions that can support real-world
              decisions.
            </p>
            <p>
              My work focuses on data preprocessing, exploratory analysis, feature
              engineering, machine learning, model evaluation, visualization, and
              SQL-based data analysis.
            </p>
            <p>
              Alongside my Data Science focus, I have professional frontend
              development experience, allowing me to understand how analytical
              solutions can be integrated into practical software products.
            </p>

            <div className="pt-6">
              <p className="eyebrow mb-4">What I Work With</p>
              <div className="flex flex-wrap gap-2">
                {workWith.map((w) => (
                  <span
                    key={w}
                    className="font-mono text-xs border border-border rounded-full px-3 py-1.5 text-foreground/75"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter signals */}
      <section className="border-t border-border grid-bg">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-24">
          <p className="eyebrow mb-4">~/SUMMARY</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-md mb-10">
            What I Bring
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {recruiterSignals.map((r) => (
              <div key={r.title} className="border border-border rounded-[8px] bg-card p-6">
                <h3 className="font-semibold text-sm tracking-wide uppercase text-accent">
                  {r.title}
                </h3>
                <p className="mt-3 text-[15px] text-muted leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
