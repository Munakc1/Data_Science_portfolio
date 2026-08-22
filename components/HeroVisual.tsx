const pipeline = ["RAW DATA", "CLEAN", "EXPLORE", "FEATURES", "MODEL", "EVALUATE"];

export default function HeroVisual() {
  return (
    <div
      className="reveal relative rounded-[8px] border border-border bg-card overflow-hidden"
      style={{ animationDelay: "120ms" }}
      role="img"
      aria-label="Illustrative diagram of a machine learning workflow: raw data, cleaning, exploration, feature engineering, modeling, and evaluation."
    >
      {/* terminal top bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-[#FBFAF7]">
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="ml-3 font-mono text-[11px] text-muted tracking-wide">
          workflow.ipynb — illustrative
        </span>
      </div>

      <div className="p-5 sm:p-6">
        {/* pipeline chips */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-3 font-mono text-[10.5px] sm:text-[11px]">
          {pipeline.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span
                className={`px-2.5 py-1.5 rounded-[4px] border ${
                  i === pipeline.length - 1
                    ? "border-accent text-accent"
                    : "border-border text-foreground/80"
                }`}
              >
                {step}
              </span>
              {i < pipeline.length - 1 && (
                <span className="text-muted" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </div>

        {/* chart + grid */}
        <div className="mt-6 grid-bg rounded-[6px] border border-border bg-[#FBFAF7] p-4">
          <svg viewBox="0 0 400 160" className="w-full h-auto" aria-hidden="true">
            <polyline
              points="0,120 40,110 80,118 120,90 160,96 200,64 240,72 280,44 320,50 360,22 400,30"
              fill="none"
              stroke="#A62B24"
              strokeWidth="2"
            />
            {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((x, i) => {
              const ys = [120, 110, 118, 90, 96, 64, 72, 44, 50, 22, 30];
              return <circle key={x} cx={x} cy={ys[i]} r="2.6" fill="#7E211D" />;
            })}
          </svg>
          <p className="mt-2 font-mono text-[10px] text-muted tracking-wide">
            Illustrative ML workflow — conceptual visualization
          </p>
        </div>

        {/* feature vector + labels */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px]">
          <div className="border border-border rounded-[4px] px-3 py-2.5 text-foreground/80">
            <span className="text-muted">x = </span>
            [0.42, 1.03, -0.87, 2.15, 0.06]
          </div>
          <div className="border border-border rounded-[4px] px-3 py-2.5 flex items-center gap-2 text-foreground/80">
            <span className="text-accent">SELECT</span>
            <span className="truncate">signal FROM ohlcv;</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] text-muted">
          <span className="border border-border rounded-full px-2.5 py-1">python</span>
          <span className="border border-border rounded-full px-2.5 py-1">sql</span>
          <span className="border border-border rounded-full px-2.5 py-1">pandas</span>
          <span className="border border-border rounded-full px-2.5 py-1">scikit-learn</span>
        </div>
      </div>
    </div>
  );
}
