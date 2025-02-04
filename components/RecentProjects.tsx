/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React from "react";
import ProjectCard from "./Projects/ProjectCard";

const RecentProjects = () => {
  return (
    <div className="max-w-6xl mx-auto py-20" id="projects">
      <h1 className="heading">
        Une sélection de mes{" "}
        <span className="text-blue">meilleurs projets</span>
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
