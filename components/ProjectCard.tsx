import Link from "next/link";
import type { Project } from "@/lib/data";
import { site } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-border bg-card rounded-[8px] p-6 sm:p-8 transition-shadow hover:shadow-[0_4px_24px_rgba(21,21,21,0.06)]">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-3xl sm:text-4xl text-border font-semibold select-none">
          {project.number}
        </span>
        <span className="eyebrow mt-2 text-right">{project.category}</span>
      </div>

      <h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight">
        {project.title}
      </h3>
      <p className="mt-3 text-muted text-[15px] leading-relaxed">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="font-mono text-[10.5px] border border-border rounded-full px-2.5 py-1 text-foreground/75"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-6">
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-medium text-accent hover:text-accent-dark inline-flex items-center gap-1"
        >
          View Project <span aria-hidden="true">→</span>
        </Link>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-foreground/70 hover:text-foreground inline-flex items-center gap-1"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
