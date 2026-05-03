import { ProjectType } from "@/types/project";
import client from "./sanity.client";

export const getProjects = async () => {
  const projects: ProjectType[] = await client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      description,
      area,
      url,
      cover
    }
  `);

  return projects;
};
