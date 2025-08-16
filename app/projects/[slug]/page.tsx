"use client";
import NotFound from "@/app/not-found";
import BackButton from "@/components/BackButton";
// import { MoreProjects } from "@/components/Projects/MoreProjects";
import { ProjectDescription } from "@/components/Projects/ProjectDescription";
import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import LanguageToggleButton from "@/components/ui/LanguageToggleButton";
import { Spotlight } from "@/components/ui/Spotlight";
import projectsJson from "@/data/projects.json";
import { findProjectBySlug, Project as ProjectData } from "@/utils/helpers";
import { useParams } from "next/navigation";
import { useLayoutEffect } from "react";

// On convertit le JSON en tableau typé
const projects: ProjectData[] = projectsJson as ProjectData[];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  // On recherche le projet correspondant au slug
  const selectedProject = findProjectBySlug<ProjectData>(projects, slug);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Cas où le slug ne correspond à aucun projet
  if (!selectedProject) {
    return <NotFound />;
  }

  return (
    <>
      <div className="lg:pb-20 pt-8 fade-in">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="lightblue"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <DotBackgroundDemo />

        <div className="flex flex-col gap-10 mt-12 relative max-w-5xl mx-auto z-[2]">
          <div className="flex justify-between items-center">
            <BackButton fallbackHref="/#projects" />
            <LanguageToggleButton />
          </div>
          <ProjectDescription selectedProject={selectedProject} />
        </div>
        <div className="flex flex-col border-t border-white/10"></div>
      </div>
    </>
  );
};

export default ProjectDetail;
