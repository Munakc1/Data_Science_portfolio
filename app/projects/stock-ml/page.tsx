import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/data";

const project = projects.find((p) => p.slug === "stock-ml")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
};

export default function StockMlPage() {
  return (
    <>
      <ProjectDetail project={project} />
      <CTASection />
    </>
  );
}
