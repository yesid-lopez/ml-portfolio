import client from "./sanity.client";

export const getSkills = async () => {
  const skills = await client.fetch(`*[_type == "skill"]`);
  return skills;
};
