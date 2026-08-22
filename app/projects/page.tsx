import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Practical projects demonstrating experience with machine learning, data analysis, and software development.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="~/PROJECTS"
        title="Selected Work"
        subtitle="Practical projects demonstrating my experience with machine learning, data analysis, and software development."
      />

      <section>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-14 sm:py-20">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.slug} className={!p.featured ? "md:col-span-2 md:max-w-xl" : ""}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
