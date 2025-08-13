"use client";

import BackButton from "@/components/BackButton";
import ProjectCard from "@/components/Projects/ProjectCard";
import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import LanguageToggleButton from "@/components/ui/LanguageToggleButton";
import ScrollUpButton from "@/components/ui/ScrollToUp";
import { Spotlight } from "@/components/ui/Spotlight";
import projects from "@/data/projects.json";
import { useTranslation } from "@/utils/useTranslation";
import { useLayoutEffect } from "react";

const Gallery = () => {
  const t = useTranslation("gallery");

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <div className="pb-20 fade-in">
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

        <div className="flex flex-col mt-12 relative max-w-6xl mx-auto z-[2]">
          <div className="flex justify-between items-center">
            <BackButton />
            <LanguageToggleButton />
          </div>

          <h1 className="heading my-12">{t("title")}</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
      <ScrollUpButton />
    </>
  );
};

export default Gallery;
