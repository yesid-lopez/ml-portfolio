import client from "./sanity.client";

export const getJobs = async () => {
  const jobs = await client.fetch(
    `*[_type == "journey"] | order(startDate desc)`
  );
  return jobs;
};
