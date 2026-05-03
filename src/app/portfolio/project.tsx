import sanityClient from "@/lib/sanity.client";
import { ProjectType } from "@/types/project";

import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

type ProjectWithCover = ProjectType & { cover: NonNullable<ProjectType["cover"]> };

function ProjectCover({ project }: { project: ProjectWithCover }) {
  const coverProps = useNextSanityImage(sanityClient, project.cover);

  return (
    <Image
      alt={`${project.title} project cover`}
      src={coverProps.src}
      fill
      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  );
}

export default function Project({ project }: { project: ProjectType }) {
  const isExternal = project.url?.startsWith("http");
  const visibleTools = project.tools?.slice(0, 5) ?? [];
  const hiddenToolsCount = Math.max((project.tools?.length ?? 0) - visibleTools.length, 0);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-blue-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.055]">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        {project.cover ? (
          <ProjectCover project={project as ProjectWithCover} />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/20 via-slate-900 to-violet-500/20 px-6 text-center text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            {project.area ?? "Project preview"}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {project.area && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
            {project.area}
          </p>
        )}
        <h2 className="text-xl font-bold text-white">{project.title}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        {project.impact && (
          <p className="mt-4 rounded-2xl border border-blue-300/15 bg-blue-400/[0.06] p-4 text-sm leading-6 text-blue-100">
            <span className="font-semibold text-blue-200">Impact: </span>
            {project.impact}
          </p>
        )}

        {visibleTools.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {visibleTools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
              >
                {tool}
              </span>
            ))}
            {hiddenToolsCount > 0 && (
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                +{hiddenToolsCount} more
              </span>
            )}
          </div>
        )}

        {project.url && (
          <a
            href={project.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="mt-6 inline-flex w-fit rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-100 hover:shadow-xl hover:shadow-blue-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            View project
          </a>
        )}
      </div>
    </article>
  );
}
