import { ProjectType } from "@/types/project";
import client from "./sanity.client";

export const getProjects = async () => {
  const projects: ProjectType[] = await client.fetch(`*[_type == "project"]`);
  return projects;
};
