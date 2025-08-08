"use client";
import ProjectCard from "@/components/Projects/ProjectCard";
import projects from "@/data/projects.json";
import { useTranslation } from "@/utils/useTranslation";

const RecentProjects = () => {
  const t = useTranslation("projects");

  return (
    <div className="max-w-6xl mx-auto py-20" id="projects">
      <h1 className="heading">
        {t("recentTitlePrefix")}{" "}
        <span className="text-blue">{t("recentTitleEmphasis")}</span>
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
