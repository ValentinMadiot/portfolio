"use client";

import { projects } from "@/data";
import { findProjectBySlug } from "@/utils/helpers";
import { ProjectDescription } from "@/components/Projects/ProjectDescription";
import BackButton from "@/components/BackButton";
import { useParams } from "next/navigation";
import { MoreProjects } from "@/components/Projects/MoreProjects";
import { Spotlight } from "@/components/ui/Spotlight";
import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import { PiSmileyXEyes } from "react-icons/pi";
import { useLayoutEffect } from "react";
import NotFound from "@/app/not-found";

const ProjectDetail = () => {
  const params = useParams();
  const slug = params.slug;
  const selectedProject = findProjectBySlug(projects, slug);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  if (!selectedProject) {
    return <NotFound />;
  }

  return (
    <>
      <div className="pb-20 pt-8 fade-in">
        <div className="">
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

        <div className="flex flex-col gap-10 mt-32 relative lg:max-w-4xl mx-auto">
          <BackButton />
          <div className="">
            <ProjectDescription selectedProject={selectedProject} />
          </div>
        </div>
        <MoreProjects slug={slug} />
      </div>
    </>
  );
};

export default ProjectDetail;
