import Link from "next/link";
import { nav, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#F7F5F0]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-semibold tracking-tight">{site.name}</p>
            <p className="eyebrow mt-1">Data Science &amp; Machine Learning</p>
            <p className="text-sm text-muted mt-2">Python • SQL • Machine Learning</p>
            <p className="text-sm text-muted mt-2 max-w-xs">
              Full-Stack Web Developer specializing in React, Next.js &amp; Node.js
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:flex sm:gap-14">
            <div>
              <p className="eyebrow mb-3">Navigate</p>
              <ul className="flex flex-col gap-2 text-sm">
                {nav.slice(1).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-foreground/80 hover:text-accent transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-3">Connect</p>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-accent transition-colors"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-accent transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-foreground/80 hover:text-accent transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted font-mono">
          <p>© 2026 Muna K.C.</p>
          <p>Kathmandu, Nepal</p>
        </div>
      </div>
    </footer>
  );
}