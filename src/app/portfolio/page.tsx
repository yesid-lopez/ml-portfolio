import { getProjects } from "@/lib/project";

import Project from "./project";

export const metadata = {
  title: "Projects | Yesid López",
  description:
    "Selected AI, machine learning, and data product projects by Yesid López.",
};

export default async function Page() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-28 text-white sm:px-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
            Portfolio
          </p>
          <h1 className="bg-gradient-to-br from-white via-slate-100 to-blue-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Selected AI and ML projects
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            A curated set of production-minded AI applications, machine learning
            systems, and data-driven products.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Project project={project} key={project._id} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-slate-300 shadow-2xl shadow-blue-950/20 backdrop-blur">
            Projects are being updated. Please check back soon.
          </div>
        )}
      </section>
    </main>
  );
}
