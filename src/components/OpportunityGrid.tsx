export type Opportunity = {
  title: string;
  clientType: string;
  budget: number;
  confidence: "High" | "Medium" | "Low";
  nextStep: string;
  channel: string;
};

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function confidenceColor(confidence: Opportunity["confidence"]) {
  switch (confidence) {
    case "High":
      return "text-emerald-300 bg-emerald-500/10 border-emerald-400/30";
    case "Medium":
      return "text-amber-200 bg-amber-500/10 border-amber-400/30";
    default:
      return "text-rose-200 bg-rose-500/10 border-rose-400/30";
  }
}

export function OpportunityGrid({ opportunities }: { opportunities: Opportunity[] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <header className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Opportunity radar</h3>
          <p className="text-sm text-white/60">
            High-fit prospects surfaced by the agent from your job feeds and network.
          </p>
        </div>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {opportunities.map((opportunity) => (
          <article
            key={opportunity.title}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-lg font-semibold text-white">
                {opportunity.title}
              </h4>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${confidenceColor(
                  opportunity.confidence,
                )}`}
              >
                {opportunity.confidence}
              </span>
            </div>
            <p className="text-sm text-white/60">{opportunity.clientType}</p>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <span>
                Budget window: <strong className="text-white">{formatCurrency(opportunity.budget)}</strong>
              </span>
              <span>
                Channel: <strong className="text-white">{opportunity.channel}</strong>
              </span>
            </div>
            <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
              Next step: {opportunity.nextStep}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

