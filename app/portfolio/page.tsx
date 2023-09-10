import React from "react";
import Project from "./project";

const totalProjects = Array.from(Array(10).keys());
export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-4 px-2">
      {totalProjects.map((project) => (
        <Project />
      ))}
    </div>
  );
}
