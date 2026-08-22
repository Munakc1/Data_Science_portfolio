import Link from "next/link";
import { site } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-24 text-center">
        <p className="eyebrow mb-4">~/CONNECT</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl mx-auto">
          Let&apos;s Build Something With Data.
        </h2>
        <p className="mt-4 text-muted max-w-md mx-auto text-[15px] leading-relaxed">
          Interested in working together or discussing an opportunity? I&apos;d be happy to connect.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium rounded-[6px] px-6 py-3 hover:bg-accent-dark transition-colors"
          >
            Contact Me
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/80 text-sm font-medium rounded-[6px] px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
          >
            View GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
