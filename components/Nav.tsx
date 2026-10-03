"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";

function GithubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.55 2.36 1.11 2.93.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.04A9.4 9.4 0 0 1 12 6.85c.85 0 1.71.12 2.51.35 1.91-1.31 2.75-1.04 2.75-1.04.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5C19.14 20.51 22 16.7 22 12.2 22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.25 8.75h3.4V21h-3.4V8.75Zm6.2 0h3.26v1.68h.05c.45-.85 1.56-1.75 3.22-1.75 3.44 0 4.08 2.27 4.08 5.22V21h-3.4v-5.55c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94V21h-3.4V8.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-border bg-[#F7F5F0]/95 backdrop-blur-[2px] transition-[padding] duration-200 ${
        scrolled ? "py-0" : "py-0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-7 sm:px-10 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <img
            src="/logo (3).png"
            alt={`${site.name} logo`}
            className="h-10 sm:h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 lg:gap-10 xl:gap-11 mx-10 lg:mx-16"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative text-sm font-medium py-2 whitespace-nowrap transition-colors ${
                isActive(item.href)
                  ? "text-accent"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.label}

              <span
                className={`absolute -bottom-[1px] left-0 h-[2px] bg-accent transition-all ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6 shrink-0">
          {/* GitHub */}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile in a new tab"
            className="text-foreground/70 hover:text-accent transition-colors"
          >
            <GithubIcon />
          </a>

          {/* LinkedIn */}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile in a new tab"
            className="text-foreground/70 hover:text-accent transition-colors"
          >
            <LinkedInIcon />
          </a>

          {/* Resume */}
          <a
            href="/data_science_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume in a new tab"
            className="ml-2 text-sm font-medium border border-foreground/80 rounded-[4px] px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex flex-col justify-center items-center gap-1.5 w-10 h-10 -mr-2"
        >
          <span
            className={`block h-[1.5px] w-6 bg-foreground transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />

          <span
            className={`block h-[1.5px] w-6 bg-foreground transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`block h-[1.5px] w-6 bg-foreground transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-border bg-[#F7F5F0] transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[560px]" : "max-h-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="flex flex-col px-5 py-4 gap-1"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`py-3 text-base border-b border-border/70 last:border-none ${
                isActive(item.href)
                  ? "text-accent font-medium"
                  : "text-foreground/85"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-5 pt-4">
            {/* GitHub */}
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile in a new tab"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              <GithubIcon />
            </a>

            {/* LinkedIn */}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile in a new tab"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              <LinkedInIcon />
            </a>

            {/* Resume */}
            <a
              href="/data_science_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in a new tab"
              className="ml-auto text-sm font-medium border border-foreground/80 rounded-[4px] px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}