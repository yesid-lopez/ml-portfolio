import { getProjects } from "@/lib/project";

import Project from "./project";

const totalProjects = Array.from(Array(10).keys());
export default async function page() {
  const projects = await getProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-4 px-2">
      {projects &&
        totalProjects.map((id) => <Project project={projects[0]} key={id} />)}
    </div>
  );
}
