import Link from "next/link";
import type { Project } from "@/lib/data";
import { site } from "@/lib/data";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="eyebrow mb-3">{title}</h2>
      <div className="text-[15px] leading-relaxed text-foreground/85 max-w-2xl">
        {children}
      </div>
    </div>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const s = project.sections ?? {};

  return (
    <>
      <div className="grid-bg border-b border-border">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 pt-14 pb-12 sm:pt-20 sm:pb-16">
          <Link
            href="/projects"
            className="text-sm text-muted hover:text-accent inline-flex items-center gap-1 mb-6"
          >
            <span aria-hidden="true">←</span> All Projects
          </Link>

          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <p className="eyebrow mb-4">{project.category}</p>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
                {project.title}
              </h1>
              <p className="mt-4 text-muted max-w-xl text-[15px] leading-relaxed">
                {project.description}
              </p>
            </div>
            <span className="font-mono text-5xl text-border font-semibold select-none">
              {project.number}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="font-mono text-xs border border-border rounded-full px-3 py-1.5 text-foreground/75 bg-card"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/80 text-sm font-medium rounded-[6px] px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors"
            >
              View Repository ↗
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-14 sm:py-20 grid lg:grid-cols-[1fr_1.4fr] gap-12">
          {/* Workflow sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <p className="eyebrow mb-4">Workflow</p>
            <ol className="space-y-2">
              {project.workflow.map((w, i) => (
                <li
                  key={w}
                  className="flex items-center gap-3 border border-border rounded-[6px] bg-card px-3 py-2.5"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-foreground/85">{w}</span>
                </li>
              ))}
            </ol>

            {s.models && s.models.length > 0 && (
              <div className="mt-8">
                <p className="eyebrow mb-4">Models</p>
                <div className="flex flex-wrap gap-2">
                  {s.models.map((m) => (
                    <span
                      key={m}
                      className="font-mono text-xs border border-border rounded-full px-3 py-1.5 text-foreground/75"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sections */}
          <div>
            {s.overview && <Block title="Overview">{s.overview}</Block>}
            {s.problem && <Block title="Problem">{s.problem}</Block>}
            {s.data && <Block title="Data">{s.data}</Block>}
            {s.preprocessing && <Block title="Preprocessing">{s.preprocessing}</Block>}
            {s.featureEngineering && (
              <Block title="Feature Engineering">{s.featureEngineering}</Block>
            )}
            {s.evaluation && <Block title="Evaluation">{s.evaluation}</Block>}
            {s.visualizations && s.visualizations.length > 0 && (
              <Block title="Visualizations">
                <div className="flex flex-wrap gap-2">
                  {s.visualizations.map((v) => (
                    <span
                      key={v}
                      className="font-mono text-xs border border-border rounded-full px-3 py-1.5 text-muted"
                    >
                      {v}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted">
                  Real visualizations from the project notebook are available in the repository.
                </p>
              </Block>
            )}
            {s.challenges && <Block title="Challenges">{s.challenges}</Block>}
            {s.lessons && <Block title="Lessons Learned">{s.lessons}</Block>}
            {s.future && <Block title="Future Improvements">{s.future}</Block>}

            <Block title="Repository">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-dark font-medium inline-flex items-center gap-1"
              >
                View source on GitHub <span aria-hidden="true">↗</span>
              </a>
            </Block>
          </div>
        </div>
      </section>
    </>
  );
}
