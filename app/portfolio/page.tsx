import React from "react";
import Project from "./project";
import { ProjectType } from "@/types/project";
import { getProjects } from "../../lib/project";

const totalProjects = Array.from(Array(10).keys());
export default async function page() {
  const projects = await getProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-4 px-2">
      {projects &&
        projects.map((project: ProjectType) => (
          <Project project={project} key={project.title} />
        ))}
    </div>
  );
}
