export type ActionItem = {
  title: string;
  narrative: string;
  impact: "Revenue" | "Pipeline" | "Product" | "Brand";
  deadline: string;
  effort: "Low" | "Medium" | "High";
};

function impactBadge(impact: ActionItem["impact"]) {
  switch (impact) {
    case "Revenue":
      return "bg-emerald-500/10 border-emerald-400/30 text-emerald-200";
    case "Pipeline":
      return "bg-sky-500/10 border-sky-400/30 text-sky-200";
    case "Product":
      return "bg-purple-500/10 border-purple-400/30 text-purple-200";
    default:
      return "bg-amber-500/10 border-amber-400/30 text-amber-200";
  }
}

function effortColor(effort: ActionItem["effort"]) {
  switch (effort) {
    case "Low":
      return "text-emerald-300";
    case "Medium":
      return "text-amber-200";
    default:
      return "text-rose-300";
  }
}

export function ActionBoard({ items }: { items: ActionItem[] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <header className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Agent action board</h3>
          <p className="text-sm text-white/60">
            Tactical moves sequenced to unlock monthly revenue milestones.
          </p>
        </div>
      </header>

      <div className="grid gap-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/45 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${impactBadge(item.impact)}`}
                >
                  {item.impact}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/70">{item.narrative}</p>
            </div>
            <div className="flex flex-col items-start gap-2 text-sm text-white/70 sm:items-end">
              <span className="font-semibold text-white/80">
                Due {item.deadline}
              </span>
              <span className={effortColor(item.effort)}>Effort · {item.effort}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

