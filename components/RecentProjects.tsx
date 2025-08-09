"use client";
import ProjectCard from "@/components/Projects/ProjectCard";
import projects from "@/data/projects.json";
import { useTranslation } from "@/utils/useTranslation";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const RecentProjects = () => {
  const t = useTranslation("projects");

  return (
    <div className="max-w-6xl mx-auto py-20" id="projects">
      <h1 className="heading">
        {t("recentTitlePrefix")}{" "}
        <span className="text-blue">{t("recentTitleEmphasis")}</span>
      </h1>

      <div className="mt-12 text-center">
        <Link
          href="/gallery"
          aria-label={t("viewGallery")}
          className="inline-flex items-center text-center gap-2 text-lightblue-200 hover:text-white transition">
          <AiOutlineArrowRight size="1.25rem" />
          <span>{t("viewGallery")}</span>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {projects
          .filter((project) => project.id >= 1 && project.id <= 8)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/gallery"
          aria-label={t("viewGallery")}
          className="inline-flex items-center text-center gap-2 text-lightblue-200 hover:text-white transition">
          <AiOutlineArrowRight size="1.25rem" />
          <span>{t("viewGallery")}</span>
        </Link>
      </div>
    </div>
  );
};

export default RecentProjects;
