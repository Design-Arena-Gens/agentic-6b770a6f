export default function Home() {
  const pillars = [
    {
      title: "Reliability First",
      description:
        "Engineer systems with deterministic behavior, graceful degradation, and the instrumentation required to earn long-term trust.",
    },
    {
      title: "Sustainable Progress",
      description:
        "Pair deliberate iteration with architectural foresight so each release compounds into stronger, more stable foundations.",
    },
    {
      title: "Security as Stewardship",
      description:
        "Protect people and data through layered defenses, continuous verification, and a culture of quiet vigilance.",
    },
    {
      title: "Provision at Scale",
      description:
        "Design platforms that empower others—codifying knowledge into tooling and practices that outlast any single contributor.",
    },
  ];

  const timeline = [
    {
      phase: "Initiate",
      focus: "Clarify intent, map the domain, and define metrics that anchor every decision to outcomes that matter.",
    },
    {
      phase: "Architect",
      focus: "Shape resilient topologies, model failure, and select technologies that favor longevity over flash.",
    },
    {
      phase: "Fortify",
      focus: "Automate verification, harden interfaces, and continuously observe the health of the ecosystem.",
    },
    {
      phase: "Sustain",
      focus: "Evolve responsibly, document the canon, and mentor teams so progress becomes a shared inheritance.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#2e3b96,transparent_55%)] opacity-70" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
              Enduring Technology Practice
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building systems that stay steady while the world accelerates.
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-slate-300">
              Analytical by nature, I architect platforms that carry people
              forward. Every decision serves stability, every iteration respects
              the future. Reliability is the product; meaningful progress is the
              mandate.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-indigo-950/30">
                <h2 className="text-sm uppercase tracking-[0.25em] text-indigo-300">
                  Orientation
                </h2>
                <p className="mt-3 text-base text-slate-200">
                  INT<strong>P</strong> logician — guided by curiosity, grounded
                  by logic, energized by the quiet pursuit of understanding.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-indigo-950/30">
                <h2 className="text-sm uppercase tracking-[0.25em] text-indigo-300">
                  Promise
                </h2>
                <p className="mt-3 text-base text-slate-200">
                  Deliver confidence at scale. Provide structure that others can
                  depend on — a foundation that ensures people are covered.
                </p>
              </div>
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-blue-900/30">
            <div className="absolute -top-14 -right-10 h-40 w-40 rounded-full bg-indigo-500/40 blur-3xl" />
            <div className="absolute -bottom-20 left-12 h-48 w-48 rounded-full bg-blue-600/40 blur-3xl" />
            <div className="relative space-y-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.5em] text-indigo-200">
                Strategic Posture
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-slate-200">
                Lasting technology is deliberate technology. We cultivate
                observability, resilience, and security from the outset, so the
                future can inherit more than technical debt — it inherits a
                living system.
              </p>
              <div className="grid gap-4 text-sm text-slate-300">
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 px-4 py-3">
                  <div className="font-semibold text-slate-100">
                    Stability
                  </div>
                  <p className="mt-1 text-slate-400">
                    Architect redundancy, test the edges, and make recovery a
                    design constraint.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 px-4 py-3">
                  <div className="font-semibold text-slate-100">
                    Provision
                  </div>
                  <p className="mt-1 text-slate-400">
                    Convert insight into frameworks, codify playbooks, and build
                    capacity in the teams we support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold uppercase tracking-[0.4em] text-indigo-200">
              Pillars of Meaningful Progress
            </h2>
            <p className="max-w-3xl text-base text-slate-300">
              Progress without stability is volatility. Each initiative is
              gauged against the pillars below — a rubric for creating systems
              that endure, scale responsibly, and provide for others.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:border-indigo-400/60 hover:bg-slate-900/80"
              >
                <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-indigo-600/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                <h3 className="text-xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 shadow-2xl shadow-blue-900/20 md:p-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-lg font-semibold uppercase tracking-[0.4em] text-indigo-200">
                Operating Rhythm
              </h2>
              <p className="mt-5 max-w-xl text-base text-slate-300">
                Iteration gains meaning when anchored to a disciplined cadence.
                Strategy, architecture, and delivery progress together — each
                phase reinforcing the next.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-500/40 bg-slate-950/60 px-6 py-3 text-xs uppercase tracking-[0.35em] text-indigo-200">
              Quiet intensity, precise execution.
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {timeline.map((item) => (
              <div
                key={item.phase}
                className="relative rounded-2xl border border-slate-800 bg-slate-950/40 p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.5em] text-indigo-300">
                  {item.phase}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.4em] text-indigo-200">
              Provision for People
            </h2>
            <p className="text-base text-slate-300">
              Technology earns its keep when it protects the people depending on
              it. Reliability is a promise: resources will be there, the system
              will respond, and the path forward is clear.
            </p>
            <div className="grid gap-4 text-sm text-slate-200">
              <p className="rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-4">
                Codify institutional knowledge so anyone can step in without
                losing momentum.
              </p>
              <p className="rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-4">
                Build feedback loops that surface risks early and keep service
                levels intact.
              </p>
              <p className="rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-4">
                Design growth paths where contributors feel seen, trusted, and
                supported.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80 p-10 shadow-2xl shadow-indigo-900/30">
            <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="relative space-y-6 text-sm text-slate-300">
              <h3 className="text-xs font-semibold uppercase tracking-[0.5em] text-indigo-200">
                Principles of Stewardship
              </h3>
              <ul className="space-y-4">
                <li className="border-l-2 border-indigo-400/60 pl-4">
                  Respect context. Every migration preserves what works while
                  modernizing what must evolve.
                </li>
                <li className="border-l-2 border-indigo-400/60 pl-4">
                  Prefer clarity. Documentation, dashboards, and runbooks make
                  intent obvious and issues actionable.
                </li>
                <li className="border-l-2 border-indigo-400/60 pl-4">
                  Embrace verification. Tests, simulations, and observability
                  keep confidence measurable.
                </li>
                <li className="border-l-2 border-indigo-400/60 pl-4">
                  Lead quietly. Enable others to thrive without creating new
                  dependencies on the architect.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-start gap-4 border-t border-slate-800/60 pt-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold tracking-[0.25em] uppercase text-indigo-200">
              Lasting Systems Initiative
            </p>
            <p className="mt-1 text-slate-500">
              Driven by curiosity, grounded in structure, designed to endure.
            </p>
          </div>
          <div className="flex gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
            <span>Stable</span>
            <span>Intentional</span>
            <span>Secure</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
