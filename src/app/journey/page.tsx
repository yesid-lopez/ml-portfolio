import type { Metadata } from "next";
import { getJobs } from "../../lib/journey";
import { Journey } from "../../types/journey";
import { formatDateString } from "../../utils/dateFormat";

export const metadata: Metadata = {
  title: "Journey | Yesid López",
  description:
    "Explore Yesid López's professional journey across AI engineering, machine learning, and software delivery.",
};

const highlights = [
  "AI engineering",
  "Voice agents",
  "MLOps at scale",
  "Production ML",
  "RAG products",
];

const categoryLabels: Record<NonNullable<Journey["category"]>, string> = {
  work: "Work",
  project: "Project",
  education: "Education",
  paper: "Research",
  award: "Award",
};

const Page = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-dot-white/[0.12]" />
      <div className="absolute left-[-10rem] top-20 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-[-12rem] right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_34%),linear-gradient(to_bottom,rgba(2,6,23,0.1),#020617_80%)]" />

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
            Professional path
          </p>
          <h1 className="bg-gradient-to-br from-white via-slate-100 to-blue-200 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
            Journey
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            A timeline of the roles, projects, research, and hackathon wins that
            shaped how I build reliable AI-powered products — from voice agents
            and RAG applications to production ML platforms.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <Timeline />
      </section>
    </main>
  );
};

const Timeline = async () => {
  const jobs = await getJobs();

  if (!jobs?.length) {
    return (
      <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center text-slate-300 backdrop-blur">
        Journey entries are being updated. Please check back soon.
      </div>
    );
  }

  return (
    <div className="relative mx-auto mt-20 max-w-5xl">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-300/0 via-blue-300/50 to-blue-300/0 md:left-1/2 md:block" />

      <ol className="space-y-8 md:space-y-14">
        {jobs.map((job: Journey, index: number) => {
          const isEven = index % 2 === 0;

          return (
            <li
              key={job._id}
              className={`relative grid gap-5 md:grid-cols-2 md:gap-10 ${
                isEven ? "" : "md:[&>article]:col-start-2"
              }`}
            >
              <div className="absolute left-4 top-8 hidden h-3 w-3 rounded-full border border-blue-200 bg-blue-400 shadow-[0_0_24px_rgba(96,165,250,0.8)] md:left-1/2 md:block md:-translate-x-1/2" />

              <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.06] sm:p-7">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
                  {formatDateString(job.startDate)} — {job.endDate ? formatDateString(job.endDate) : "Present"}
                </p>
                {job.category ? (
                  <span className="mt-4 inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                    {categoryLabels[job.category]}
                  </span>
                ) : null}
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  {job.title}
                </h2>
                <p className="mt-1 text-base font-medium text-slate-300">
                  {job.company}
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  {job.description}
                </p>

                {job.highlights?.length ? (
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {job.tools?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Page;
