"use client";
import ProjectCard from "@/components/Projects/ProjectCard";
import projects from "@/data/projects.json";
import { useTranslation } from "@/utils/useTranslation";

export const MoreProjects = ({ slug }: { slug: string | string[] }) => {
  const t = useTranslation("projects");

  return (
    <div className="flex flex-col pt-20 mb-40 border-t border-white/10">
      <h1 className="text-[32px] md:text-4xl text-center lg:text-left text-white font-bold mb-12">
        {t("recentTitlePrefix")}{" "}
        <span className="text-blue">{t("recentTitleEmphasis")}</span>
      </h1>
      <div className="grid lg:grid-cols-3 gap-6">
        {projects.map(
          (project) =>
            project.slug !== slug && (
              <ProjectCard key={project.id} project={project} />
            )
        )}
      </div>
    </div>
  );
};
