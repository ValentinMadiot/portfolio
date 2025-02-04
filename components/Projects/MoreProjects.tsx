/* eslint-disable react/prop-types */
import ProjectCard from "./ProjectCard";
import { projects } from "@/data";

export const MoreProjects = ({ slug }: { slug: string | string[] }) => {
  return (
    <div className="flex flex-col pt-20 mb-40 border-t border-white/10">
      <h1 className="text-[32px] md:text-4xl text-center lg:text-left text-white font-bold mb-12">
        Une sélection de mes{" "}
        <span className="text-blue">meilleurs projets</span>
      </h1>
      <div className="grid lg:grid-cols-3 gap-6">
        {projects.map(
          (project) =>
            project.slug !== slug && (
              <ProjectCard key={project.id} {...project} isGridThreeCols />
            )
        )}
      </div>
    </div>
  );
};
