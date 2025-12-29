"use client";

import { useMemo, useState } from "react";

const scenarioPresets = [
  {
    name: "Stability",
    targetMonthlyIncome: 6000,
    billableHours: 70,
    bufferPercentage: 20,
  },
  {
    name: "Growth",
    targetMonthlyIncome: 9000,
    billableHours: 85,
    bufferPercentage: 28,
  },
  {
    name: "Scale",
    targetMonthlyIncome: 12000,
    billableHours: 95,
    bufferPercentage: 32,
  },
];

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export function RatePlanner() {
  const [targetMonthlyIncome, setTargetMonthlyIncome] = useState(9000);
  const [billableHours, setBillableHours] = useState(82);
  const [bufferPercentage, setBufferPercentage] = useState(25);

  const calculations = useMemo(() => {
    const bufferMultiplier = 1 + bufferPercentage / 100;
    const breakEvenRate = targetMonthlyIncome / billableHours;
    const recommendedRate = breakEvenRate * bufferMultiplier;
    const projectedAnnualRevenue = recommendedRate * billableHours * 12 * 0.92;
    const profitAfterBuffer = targetMonthlyIncome * bufferMultiplier - targetMonthlyIncome;

    return {
      breakEvenRate,
      recommendedRate,
      projectedAnnualRevenue,
      profitAfterBuffer,
      bufferMultiplier,
    };
  }, [targetMonthlyIncome, billableHours, bufferPercentage]);

  return (
    <section className="h-full w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg shadow-xl">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Smart Rate Planner
            </h3>
            <p className="text-sm text-white/70">
              Tune your targets and let the agent project the rates that
              protect profit and growth.
            </p>
          </div>
          <div className="flex gap-2">
            {scenarioPresets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => {
                  setTargetMonthlyIncome(preset.targetMonthlyIncome);
                  setBillableHours(preset.billableHours);
                  setBufferPercentage(preset.bufferPercentage);
                }}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/80 transition hover:border-white/30 hover:text-white"
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <label className="flex flex-col gap-2 text-sm text-white/80">
            Target monthly income
            <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
              <input
                type="range"
                min={4000}
                max={15000}
                step={500}
                value={targetMonthlyIncome}
                onChange={(event) =>
                  setTargetMonthlyIncome(Number(event.target.value))
                }
                className="w-full"/>
              <div className="mt-3 text-lg font-semibold text-white">
                {formatCurrency(targetMonthlyIncome)}
              </div>
            </div>
          </label>

          <label className="flex flex-col gap-2 text-sm text-white/80">
            Billable hours / month
            <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
              <input
                type="range"
                min={40}
                max={140}
                step={1}
                value={billableHours}
                onChange={(event) => setBillableHours(Number(event.target.value))}
                className="w-full"
              />
              <div className="mt-3 text-lg font-semibold text-white">
                {billableHours} hrs
              </div>
            </div>
          </label>

          <label className="flex flex-col gap-2 text-sm text-white/80">
            Safety buffer (expenses, taxes)
            <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
              <input
                type="range"
                min={10}
                max={45}
                step={1}
                value={bufferPercentage}
                onChange={(event) =>
                  setBufferPercentage(Number(event.target.value))
                }
                className="w-full"
              />
              <div className="mt-3 text-lg font-semibold text-white">
                {bufferPercentage}%
              </div>
            </div>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <p className="text-xs uppercase tracking-wide text-white/50">
              Break-even rate
            </p>
            <p className="text-2xl font-semibold text-white">
              {formatCurrency(calculations.breakEvenRate)}
            </p>
          </div>
          <div className="rounded-2xl border border-purple-400/50 bg-gradient-to-br from-purple-500/30 to-fuchsia-500/20 p-4">
            <p className="text-xs uppercase tracking-wide text-purple-200/80">
              Recommended rate
            </p>
            <p className="text-3xl font-semibold text-white">
              {formatCurrency(calculations.recommendedRate)}
            </p>
            <p className="mt-1 text-xs text-white/70">
              Includes {bufferPercentage}% buffer for taxes, admin, and margin.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <p className="text-xs uppercase tracking-wide text-white/50">
              Annual runway (net)
            </p>
            <p className="text-2xl font-semibold text-white">
              {formatCurrency(calculations.projectedAnnualRevenue)}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <p className="text-xs uppercase tracking-wide text-white/50">
              Buffer reserve
            </p>
            <p className="text-2xl font-semibold text-white">
              {formatCurrency(calculations.profitAfterBuffer)}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
          With the {bufferPercentage}% safety net the agent recommends a rate of
          <span className="font-semibold"> {formatCurrency(calculations.recommendedRate)} </span>
          per hour to keep you on track for your goals.
        </div>
      </div>
    </section>
  );
}

