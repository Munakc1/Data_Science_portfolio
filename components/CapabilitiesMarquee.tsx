import { capabilities } from "@/lib/data";

export default function CapabilitiesMarquee() {
  const marqueeItems = [...capabilities, ...capabilities];

  return (
    <section
      className="w-full overflow-hidden border-y border-border bg-panel py-5"
      aria-label="Technologies and capabilities"
    >
      <div className="mx-auto max-w-[1180px] overflow-hidden">
        <div className="flex w-max animate-marquee">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center whitespace-nowrap"
            >
              <span className="px-4 font-mono text-xs text-muted sm:px-5">
                {item}
              </span>

              <span
                className="h-1 w-1 rounded-full bg-accent"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}