"use client";
import { useTranslation } from "@/utils/useTranslation";
import Link from "next/link";
import React from "react";
import ExternalLinks from "../ExternalLinks";
import Badges from "./Badges";
import ImageProject from "./ImageProject";

type ProjectCardProps = {
  id: number;
  key: string;
  slug: string;
  img: string;
  iconLists: string[];
  linkDemo: string;
  linkGithub: string;
  isGridThreeCols?: boolean;
};

const ProjectCard: React.FC<{ project: ProjectCardProps }> = ({ project }) => {
  const t = useTranslation("projects");

  // Récupération des champs textuels traduits
  const title = t(`${project.key}.title`);
  const desc = t(`${project.key}.desc`);

  return (
    <div className="relative border border-white/10 rounded-2xl pb-5 transform transition-colors duration-500 ease-in-out max-sm:hover:bg-[#13162d]">
      <Link href={`/projects/${project.slug}`} className="">
        <div className="">
          <ImageProject
            img={project.img}
            title={title}
            isGridThreeCols={project.isGridThreeCols}
            imgRotate
          />
          <h1 className="font-bold text-lg sm:text-2xl lg:text-xl xl:text-2xl line-clamp-1 mt-7 px-5">
            {title}
          </h1>
          <p className="sm:text-base text-white-100 md:text-lg lg:text-base xl:text-lg text-sm font-light line-clamp-3 mt-3 px-5">
            {desc}
          </p>
          <div className="flex items-center justify-between mt-7 mb-3 px-5">
            <Badges iconLists={project.iconLists} />
          </div>
        </div>
      </Link>
      <div className="mt-6 sm:mt-0">
        <ExternalLinks
          linkDemo={project.linkDemo}
          linkGithub={project.linkGithub}
          className="sm:absolute sm:right-5 sm:bottom-10 ml-5"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
