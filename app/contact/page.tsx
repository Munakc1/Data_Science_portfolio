import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Muna K.C. for entry-level Data Science, Machine Learning, and Data Analytics opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="~/CONTACT"
        title="Let's Connect"
        subtitle="I'm open to entry-level opportunities in Data Science, Machine Learning, Data Analytics, and related technical roles."
      />

      <section>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-14 sm:py-20 grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-2">Email</p>
              <a href={`mailto:${site.email}`} className="text-lg hover:text-accent transition-colors">
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">Phone</p>
              <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="text-lg hover:text-accent transition-colors">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">Location</p>
              <p className="text-lg">{site.location}</p>
            </div>

            <div className="pt-4 border-t border-border space-y-3">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile in a new tab"
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-accent"
              >
                GitHub ↗
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile in a new tab"
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-accent"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="eyebrow mb-2">Resume</p>
              <p className="text-sm text-muted leading-relaxed">
                Resume available on request — reach out by email and I&apos;ll send it over.
              </p>
            </div>
          </div>

          <div className="border border-border rounded-[8px] bg-card p-7 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-lg mx-auto">
            Let&apos;s Build Something With Data.
          </h2>
        </div>
      </section>
    </>
  );
}
