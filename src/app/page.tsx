import about from "@/data/about.json";
import areas from "@/data/areas.json";

import React from "react";
import { getSkills } from "@/lib/skills";
import { getJobs } from "@/lib/journey";
import Navbar from "../components/navbar";

export default async function page() {
  const skills = await getSkills();

  const jobs = await getJobs();

  return (
    <div>
      content
    </div>
  );
}
