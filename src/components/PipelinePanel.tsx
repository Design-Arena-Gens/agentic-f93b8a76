import type { ReactNode } from "react";

export type PipelineStage = {
  stage: string;
  deals: number;
  value: number;
  winRate: number;
  averageDays: number;
  focus: string;
};

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function formatDays(days: number) {
  return `${days} days`;
}

function highlightWinRate(winRate: number) {
  if (winRate >= 50) return "text-emerald-300";
  if (winRate >= 30) return "text-amber-200";
  return "text-rose-300";
}

export function PipelinePanel({
  stages,
  actions,
}: {
  stages: PipelineStage[];
  actions: ReactNode;
}) {
  return (
    <section className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Deal velocity</h3>
          <p className="text-sm text-white/60">
            Live health check across your freelance pipeline.
          </p>
        </div>
        {actions}
      </header>

      <div className="grid gap-3">
        {stages.map((stage) => (
          <div
            key={stage.stage}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-wide text-white/40">
                {stage.stage}
              </p>
              <p className="text-lg font-semibold text-white">
                {stage.deals} active · {formatCurrency(stage.value)}
              </p>
              <p className="text-sm text-white/60">Focus: {stage.focus}</p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
              <span className={highlightWinRate(stage.winRate)}>
                {stage.winRate}% win rate
              </span>
              <span className="text-white/70">
                {formatDays(stage.averageDays)} in stage
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-cyan-400/40 bg-cyan-500/10 p-4 text-sm text-cyan-100">
        <p className="font-semibold">Agent Tip</p>
        <p>
          Shift one discovery call from Discovery to Proposal before Friday to
          stay on pace for {formatCurrency(stages[2]?.value ?? 0)} in closed
          revenue this month.
        </p>
      </div>
    </section>
  );
}
