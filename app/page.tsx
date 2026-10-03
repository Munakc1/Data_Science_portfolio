import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { capabilities, experience, education, projects, site, workflow } from "@/lib/data";
import CapabilitiesMarquee from "@/components/CapabilitiesMarquee";

export default function Home() {
  const featured = projects.filter((p) => p.featured).concat(
    projects.filter((p) => !p.featured)
  );

  return (
    <>
      {/* HERO */}
      <section className="grid-bg border-b border-border">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-14 sm:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          <div className="reveal">
            <p className="eyebrow mb-4">~/DATA-SCIENCE + FULL-STACK</p>
            <p className="font-mono text-xs text-muted mb-6 tracking-wide">
              DATA SCIENCE • MACHINE LEARNING • PYTHON • SQL • NEXT.JS • NODE.JS
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Data Science
              <br />
              & Full-Stack Developer
            </h1>
            <p className="mt-5 text-lg text-foreground/80">
              Building Intelligent Solutions with Data, AI & Full-Stack Development.
            </p>
            <p className="mt-5 max-w-2xl text-muted leading-relaxed text-[15px]">
              I build data-driven solutions and modern web applications using Data
              Science, Machine Learning, and Full-Stack technologies. I work with
              Python, Pandas, NumPy, Scikit-learn, React, Next.js, TypeScript, Node.js,
              Express, MongoDB, and REST APIs. I enjoy turning data and ideas into
              useful, real-world applications.
            </p>



            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium rounded-[6px] px-6 py-3 hover:bg-accent-dark transition-colors"
              >
                View Selected Work
              </Link>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/80 text-sm font-medium rounded-[6px] px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                GitHub ↗
              </a>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground/70 hover:text-accent underline underline-offset-4"
              >
                Resume
              </Link>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] text-muted">
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
              OPEN TO DATA SCIENCE & FULL-STACK OPPORTUNITIES
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      {/* <section className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-8 flex flex-wrap items-center gap-x-8 gap-y-3 justify-center sm:justify-between">
          {capabilities.map((c, i) => (
            <span key={c} className="flex items-center gap-8">
              <span className="font-mono text-xs sm:text-sm tracking-wide text-foreground/75">
                {c}
              </span>
              {i < capabilities.length - 1 && (
                <span className="hidden sm:inline text-border" aria-hidden="true">
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </section> */}
      <CapabilitiesMarquee />

      {/* ABOUT PREVIEW */}
      {/* <section className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-[1fr_1.4fr] gap-10">
          <div>
            <p className="eyebrow mb-4">~/ABOUT</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
              Building With Data, Learning Through Practice.
            </h2>
          </div>
          <div>
            <p className="text-muted leading-relaxed text-[15px] max-w-xl">
              I am a Computer Science student focused on Data Science and Machine
              Learning. I enjoy transforming raw data into meaningful insights and
              building machine learning solutions that can support real-world
              decisions.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark"
            >
              Read More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section> */}

      {/* SELECTED WORK */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-4">~/PROJECTS</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Selected Work
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-medium text-accent hover:text-accent-dark inline-flex items-center gap-1"
            >
              All Projects <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featured.slice(0, 2).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW PREVIEW */}
      <section className="border-b border-border grid-bg">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-24">
          <p className="eyebrow mb-4">~/APPROACH</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-lg">
            How I Approach Data Problems
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {workflow.map((w) => (
              <div
                key={w.step}
                className="flex items-center gap-2 bg-card border border-border rounded-full pl-3 pr-4 py-2"
              >
                <span className="font-mono text-[11px] text-accent">{w.step}</span>
                <span className="text-sm text-foreground/85">{w.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* EXPERIENCE + EDUCATION PREVIEW */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-24">
          <div className="grid md:grid-cols-3 gap-6">

            {/* DATA SCIENCE + MACHINE LEARNING */}
            <div className="border border-border rounded-[8px] p-8 bg-card">
              <p className="eyebrow mb-4">~/DATA SCIENCE + ML</p>

              <h3 className="text-xl font-semibold tracking-tight">
                Data Science & Machine Learning
              </h3>

              <p className="text-muted mt-1 text-sm">
                Python · Pandas · NumPy · Scikit-learn
              </p>

              <p className="text-muted mt-4 text-sm leading-6">
                Hands-on experience building machine learning workflows,
                including data preprocessing, analysis, feature engineering,
                model training, and evaluation.
              </p>

              <Link
                href="/experience"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark"
              >
                View Experience <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* FULL-STACK DEVELOPMENT */}
            <div className="border border-border rounded-[8px] p-8 bg-card">
              <p className="eyebrow mb-4">~/FULL-STACK DEVELOPMENT</p>

              <h3 className="text-xl font-semibold tracking-tight">
                Full-Stack Developer
              </h3>

              <p className="text-muted mt-1 text-sm">
                React · Next.js · Node.js · TypeScript
              </p>

              <p className="text-muted mt-4 text-sm leading-6">
                Experience developing responsive web applications with
                modern frontend and backend technologies, APIs, databases,
                and production-focused workflows.
              </p>

              <Link
                href="/experience"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark"
              >
                View Experience <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* EDUCATION */}
            <div className="border border-border rounded-[8px] p-8 bg-card">
              <p className="eyebrow mb-4">~/EDUCATION</p>

              <h3 className="text-xl font-semibold tracking-tight">
                B.Sc. CSIT
              </h3>

              <p className="text-muted mt-1 text-sm">
                Expected {education.graduation}
              </p>

              <p className="text-muted mt-4 text-sm leading-6">
                Computer Science and Information Technology with a focus
                on software development, data science, machine learning,
                databases, and practical technical projects.
              </p>

              <Link
                href="/education"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark"
              >
                View Education <span aria-hidden="true">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>


      <CTASection />
    </>
  );
}
