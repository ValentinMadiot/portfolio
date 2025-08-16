"use client";
import ProjectCard from "@/components/Projects/ProjectCard";
import projects from "@/data/projects.json";
import TransitionLink from "@/utils/transitionLinks";
import { useTranslation } from "@/utils/useTranslation";
import { AiOutlineArrowRight } from "react-icons/ai";

const RecentProjects = () => {
  const t = useTranslation("projects");

  const SELECT = [
    "bakery",
    "fruit",
    "pizzeria",
    "plant",
    "lighting",
    "construction",
    "realestate",
    "travel2",
  ];

  return (
    <div className="max-w-6xl mx-auto py-20" id="projects">
      <h1 className="heading">
        {t("recentTitlePrefix")}{" "}
        <span className="text-blue">{t("recentTitleEmphasis")}</span>
      </h1>

      <div className="mt-12 text-center">
        <TransitionLink
          href="/gallery"
          aria-label={t("viewGallery")}
          className="inline-flex items-center text-center gap-2 text-white/80 hover:text-white transition">
          <AiOutlineArrowRight
            size="1.5rem"
            className="motion-safe:animate-arrow will-change-transform"
            aria-hidden="true"
          />
          <span className="text-2xl">{t("viewGallery")}</span>
        </TransitionLink>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {/* {projects
          // .filter((project) => project.id >= 1 && project.id <= 8)
          .filter(
            (project) =>
              project.key && project.id && SELECT.includes(project.key)
          )
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))} */}
        {SELECT.map((k) => projects.find((p) => p.key === k))
          .filter(Boolean)
          .map((p) => (
            <ProjectCard key={p!.id} project={p!} />
          ))}
      </div>

      <div className="mt-12 text-center">
        <TransitionLink
          href="/gallery"
          aria-label={t("viewGallery")}
          className="inline-flex items-center text-center gap-2 text-white/80 hover:text-white transition">
          <AiOutlineArrowRight
            size="1.5rem"
            className="motion-safe:animate-arrow will-change-transform"
            aria-hidden="true"
          />
          <span className="text-2xl">{t("viewGallery")}</span>
        </TransitionLink>
      </div>
    </div>
  );
};

export default RecentProjects;
