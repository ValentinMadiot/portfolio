/* eslint-disable react/prop-types */
import { PiCheckCircle } from "react-icons/pi";
import ImageProject from "./ImageProject";
import { Project } from "@/utils/helpers";
import Badges from "./Badges";
import ExternalLinks from "../ExternalLinks";

type ProjectDescriptionProps = {
  selectedProject: Project;
};

export const ProjectDescription = ({
  selectedProject,
}: ProjectDescriptionProps) => {
  return (
    <>
      <div className="flex flex-col gap-6 pb-8 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {selectedProject.title}
        </h2>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 relative">
          <Badges iconLists={selectedProject.iconLists} />
          <ExternalLinks
            linkDemo={selectedProject.linkDemo}
            linkGithub={selectedProject.linkGithub}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 mb-20">
        <div className="relative rounded-3xl mb-6">
          <ImageProject
            img={selectedProject.img}
            title={selectedProject.title}
            tallBackground
          />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
          Contexte
        </h3>
        <div className="flex flex-col gap-6 text-lg text-white-100">
          {selectedProject.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
          Features
        </h3>
        <ul className="py-4 flex flex-col gap-4 text-base sm:text-lg">
          {selectedProject.features.map((feature, index) => (
            <li key={index} className="flex items-start sm:items-center gap-2">
              <div className="sm:pt-0">
                <PiCheckCircle className="text-lightblue-200 text-xl" />
              </div>
              <p className="leading-5 text-white-100">{feature}</p>
            </li>
          ))}
        </ul>
        <div className="border-l-8 border-[#7aa0fa]">
          <p className="text-lg pl-4">
            <span className="font-bold text-lightblue-200">
              Nature du projet :{" "}
            </span>
            {selectedProject.isClientProject ? "Projet Client" : "Personnel"}
          </p>
        </div>
      </div>
    </>
  );
};
