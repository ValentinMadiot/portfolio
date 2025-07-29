/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ExternalLinks from "../ExternalLinks";
import Badges from "./Badges";
import ImageProject from "./ImageProject";

type ProjectCardProps = {
  id: number;
  title: string;
  slug: string;
  des: string;
  img: string;
  iconLists: string[];
  linkDemo: string;
  linkGithub: string;
  isGridThreeCols?: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  slug,
  des,
  img,
  iconLists,
  linkDemo,
  linkGithub,
  isGridThreeCols,
}) => {
  return (
    <div className="relative border border-white/10 rounded-2xl p-5 duration-150 transform hover:scale-105">
      <Link href={`/projects/${slug}`} className="">
        <div className="">
          <ImageProject
            img={img}
            title={title}
            isGridThreeCols={isGridThreeCols}
            imgRotate
          />
          <h1 className="font-bold text-lg sm:text-2xl lg:text-xl xl:text-2xl line-clamp-1 mt-7">
            {title}
          </h1>
          <p className="sm:text-base text-white-100 md:text-lg lg:text-base xl:text-lg text-sm font-light line-clamp-3 xl:line-clamp-2 mt-3">
            {des}
          </p>
          <div className="flex items-center justify-between mt-7 mb-3">
            <Badges iconLists={iconLists} />
          </div>
        </div>
      </Link>
      {isGridThreeCols ? (
        <div className="mt-6">
          <ExternalLinks linkDemo={linkDemo} linkGithub={linkGithub} />
        </div>
      ) : (
        <div className="mt-6 sm:mt-0">
          <ExternalLinks
            linkDemo={linkDemo}
            linkGithub={linkGithub}
            className="sm:absolute sm:right-7 sm:bottom-10"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
