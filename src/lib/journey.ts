import client from "./sanity.client";
import { Journey } from "../types/journey";

export const getJobs = async (): Promise<Journey[]> => {
  const jobs = await client.fetch(
    `*[_type == "journey"] | order(startDate desc)`
  );
  return jobs;
};
