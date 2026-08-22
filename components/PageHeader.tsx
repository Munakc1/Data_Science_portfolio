export default function PageHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="grid-bg border-b border-border">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 pt-14 pb-12 sm:pt-20 sm:pb-16 reveal">
        <p className="eyebrow mb-4">{label}</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 text-muted max-w-xl text-[15px] sm:text-base leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
