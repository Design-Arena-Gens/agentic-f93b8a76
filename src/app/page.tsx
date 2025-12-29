import { ActionBoard } from "@/components/ActionBoard";
import type { ActionItem } from "@/components/ActionBoard";
import { OpportunityGrid } from "@/components/OpportunityGrid";
import type { Opportunity } from "@/components/OpportunityGrid";
import { PipelinePanel } from "@/components/PipelinePanel";
import type { PipelineStage } from "@/components/PipelinePanel";
import { RatePlanner } from "@/components/RatePlanner";

const quickMetrics = [
  {
    label: "Projected MRR",
    value: "$8,640",
    delta: "+18% vs last month",
    tone: "positive",
  },
  {
    label: "Pipeline Coverage",
    value: "3.1×",
    delta: "Needed: 2.4×",
    tone: "neutral",
  },
  {
    label: "Focus Time",
    value: "26 hrs/week",
    delta: "Goal: 24 hrs/week",
    tone: "positive",
  },
  {
    label: "Cash Buffer",
    value: "12 weeks",
    delta: "Add 2 weeks for Q4",
    tone: "warning",
  },
];

const pipelineStages: PipelineStage[] = [
  {
    stage: "Lead Intel",
    deals: 11,
    value: 18400,
    winRate: 22,
    averageDays: 4,
    focus: "Automations + founder-led startups",
  },
  {
    stage: "Discovery",
    deals: 5,
    value: 13200,
    winRate: 41,
    averageDays: 6,
    focus: "UX sprint + async workshop",
  },
  {
    stage: "Proposal",
    deals: 3,
    value: 9600,
    winRate: 55,
    averageDays: 3,
    focus: "Scope templates + retainer upgrade",
  },
  {
    stage: "Contract",
    deals: 2,
    value: 6800,
    winRate: 78,
    averageDays: 2,
    focus: "Add success metrics + case study",
  },
];

const opportunities: Opportunity[] = [
  {
    title: "AI Onboarding revamp",
    clientType: "Series B SaaS · Remote · 4-week sprint",
    budget: 7200,
    confidence: "High",
    nextStep: "Send voice walkthrough before Thursday stand-up.",
    channel: "Warm founder intro",
  },
  {
    title: "Marketplace retention audit",
    clientType: "Bootstrapped marketplace · async collaboration",
    budget: 5400,
    confidence: "Medium",
    nextStep: "Prototype churn report and attach scorecard.",
    channel: "Contra shortlist",
  },
  {
    title: "Productized retainer",
    clientType: "3 retainers left · Ops-heavy subscription",
    budget: 2800,
    confidence: "High",
    nextStep: "Schedule 20-min ROI review with Claire (renewal).",
    channel: "Existing client expansion",
  },
  {
    title: "Notion systems build",
    clientType: "Fractional COO collective · mix remote/on-site",
    budget: 4800,
    confidence: "Medium",
    nextStep: "Ship notion loom with annotated workspace map.",
    channel: "Superpath community",
  },
  {
    title: "Lifecycle email revamp",
    clientType: "DTC wellness · 3 flows + automation",
    budget: 3600,
    confidence: "High",
    nextStep: "Craft mini-case with uplift metrics by Wednesday.",
    channel: "TheGigList feed",
  },
  {
    title: "Async design partner",
    clientType: "Developer tools · 6-week async engagement",
    budget: 8200,
    confidence: "Medium",
    nextStep: "Bundle user-research add-on + loom Q&A.",
    channel: "Personal newsletter reply",
  },
];

const actions: ActionItem[] = [
  {
    title: "Ship 3-layer proposal template",
    narrative:
      "Merge discovery notes into the modular scope doc so upgrades are snap-in ready.",
    impact: "Revenue",
    deadline: "Friday",
    effort: "Medium",
  },
  {
    title: "Launch 1-hour deep-dive offer",
    narrative:
      "Productize the kickoff workshop into a high-conversion front-door for new clients.",
    impact: "Pipeline",
    deadline: "Tomorrow",
    effort: "Low",
  },
  {
    title: "Automate testimonial requests",
    narrative:
      "Trigger async video asks after milestones to fuel social proof and rates.",
    impact: "Brand",
    deadline: "Next Monday",
    effort: "Low",
  },
  {
    title: "Publish mid-sprint metrics pack",
    narrative:
      "Bundle the new KPI dashboards as an upsell-ready asset for retainers.",
    impact: "Product",
    deadline: "Wednesday",
    effort: "High",
  },
];

const offerStack = [
  {
    name: "Strategy Intensive",
    structure: "1-week async + live review",
    pricing: "$1.9k",
    conversion: "62% to retained",
  },
  {
    name: "Build Sprint",
    structure: "4-week fixed scope",
    pricing: "$5.4k",
    conversion: "38% upsell to maintenance",
  },
  {
    name: "Operations Retainer",
    structure: "Monthly · productized",
    pricing: "$2.8k",
    conversion: "Avg 8-month lifetime",
  },
];

const intelligenceHighlights = [
  {
    title: "Best-fit segment this week",
    detail: "Founder-led SaaS with churn 6-10% and urgent onboarding gaps.",
  },
  {
    title: "Signal spike",
    detail: "Mentions of \"async operator\" roles up 23% across job feeds.",
  },
  {
    title: "Rate sensitivity",
    detail: "Deals close fastest between $4.5k-6.5k with premium onboarding add-on.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070f]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-24 h-72 w-72 rounded-full bg-purple-500/40 blur-3xl" />
        <div className="absolute right-[-120px] top-64 h-80 w-80 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(69,30,220,0.25),_transparent_55%)]" />
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-16 sm:px-10">
        <header className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                Freelance earnings agent
              </p>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">
                Operate like a revenue team of one.
              </h1>
              <p className="text-base text-white/70">
                Your always-on co-pilot that surfaces the right clients, plans
                resilient pricing, and keeps cashflow predictable without
                burning out.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-white/70">
              <div className="flex items-center justify-between text-white">
                <span>Weekly goal</span>
                <span className="text-lg font-semibold text-emerald-300">
                  $2,450
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Booked</span>
                <span className="text-white/80">$1,680</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Gap</span>
                <span className="text-amber-200">$770</span>
              </div>
              <p className="pt-2 text-[13px]">
                Agent suggests prioritising the AI onboarding revamp lead to
                close the gap by Thursday.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg"
            >
              <p className="text-xs uppercase tracking-wide text-white/60">
                {metric.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                {metric.value}
              </p>
              <p
                className={`mt-4 text-sm ${
                  metric.tone === "positive"
                    ? "text-emerald-200"
                    : metric.tone === "warning"
                    ? "text-amber-200"
                    : "text-white/60"
                }`}
              >
                {metric.delta}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <PipelinePanel
              stages={pipelineStages}
              actions={
                <div className="flex gap-2 text-xs text-white/60">
                  <span className="rounded-full border border-white/10 px-3 py-1">
                    Win target · 50%
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1">
                    Follow-ups due · 4
                  </span>
                </div>
              }
            />
          </div>
          <div className="lg:col-span-2">
            <RatePlanner />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <OpportunityGrid opportunities={opportunities} />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-2">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">Offer stack</h3>
              <p className="mt-2 text-sm text-white/60">
                Package mix optimised for high-margin recurring revenue.
              </p>
              <div className="mt-5 space-y-4">
                {offerStack.map((offer) => (
                  <div
                    key={offer.name}
                    className="rounded-2xl border border-white/10 bg-black/45 p-4"
                  >
                    <p className="text-sm uppercase tracking-wide text-white/40">
                      {offer.structure}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {offer.name}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="text-emerald-200 font-semibold">
                        {offer.pricing}
                      </span>
                      <span className="text-white/60">{offer.conversion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/40 p-6">
              <h3 className="text-xl font-semibold text-white">
                Intelligence feed
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Signals captured across job boards, DMs, and client slack.
              </p>
              <ul className="mt-4 space-y-4">
                {intelligenceHighlights.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/40 p-4"
                  >
                    <p className="text-sm uppercase tracking-wide text-white/40">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        <ActionBoard items={actions} />

        <footer className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/60 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Ready to scale? Ask the agent to draft a launch plan for the new
              async systems retainer.
            </p>
            <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15">
              Run playbook
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
