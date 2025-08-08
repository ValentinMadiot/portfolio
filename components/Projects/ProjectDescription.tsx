"use client";
import { useTranslation } from "@/utils/useTranslation";
import { PiCheckCircle } from "react-icons/pi";
import ExternalLinks from "../ExternalLinks";
import Badges from "./Badges";
import ImageProject from "./ImageProject";

type ProjectDescriptionProps = {
  selectedProject: {
    id: number;
    key: string;
    slug: string;
    img: string;
    iconLists: string[];
    linkDemo: string;
    linkGithub: string;
    isClientProject: boolean;
  };
};

export const ProjectDescription = ({
  selectedProject,
}: ProjectDescriptionProps) => {
  // Un hook pour les données spécifiques aux projets
  const tProjects = useTranslation("projects");
  // Un hook pour les libellés génériques (Contexte, Fonctionnalités, etc.)
  const tLabels = useTranslation("projectDescription");

  // On récupère les champs traduits en utilisant la clé du projet
  const title = tProjects(`${selectedProject.key}.title`);
  const paragraphs = tProjects(
    `${selectedProject.key}.paragraphs`
  ) as unknown as string[];
  const features = tProjects(
    `${selectedProject.key}.features`
  ) as unknown as string[];

  return (
    <>
      <div className="flex flex-col gap-6 pb-8 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
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
            title={title}
            tallBackground
          />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
          {tLabels("context")}
        </h3>
        <div className="flex flex-col gap-6 text-lg text-white-100">
          {paragraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
          {tLabels("features")}
        </h3>
        <ul className="py-4 flex flex-col gap-4 text-base sm:text-lg">
          {features?.map((feature, index) => (
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
              {tLabels("projectNatureLabel")}{" "}
            </span>
            {selectedProject.isClientProject
              ? tLabels("clientProject")
              : tLabels("personalProject")}
          </p>
        </div>
      </div>
    </>
  );
};
