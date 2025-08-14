"use client";
import { useTranslation } from "@/utils/useTranslation";
import { AiOutlineCheckCircle } from "react-icons/ai";
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
  const prefixTitle = tProjects(`${selectedProject.key}.prefixTitle`);
  const suffixTitle = tProjects(`${selectedProject.key}.suffixTitle`);
  const paragraphs = tProjects(
    `${selectedProject.key}.paragraphs`
  ) as unknown as string[];
  const features = tProjects(
    `${selectedProject.key}.features`
  ) as unknown as string[];

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between sm:items-center gap-2 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {prefixTitle}
            {/* <span className="text-white-100 mx-2.5">–</span> */}
          </h2>
          <h3 className="text-xl sm:text-xl md:text-2xl">{suffixTitle}</h3>
          {/* <h3 className="text-1xl sm:text-2xl md:text-3xl">{suffixTitle}</h3> */}
        </div>
        <div className="flex flex-col xs:flex-row sm:flex-row justify-between sm:items-center gap-6 relative">
          <Badges iconLists={selectedProject.iconLists} />
          <ExternalLinks
            linkDemo={selectedProject.linkDemo}
            linkGithub={selectedProject.linkGithub}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 mb-20">
        {/* <div className="relative rounded-3xl mb-6">
          <ImageProject
            img={selectedProject.img}
            title={prefixTitle}
            tallBackground
          />
        </div> */}
        <div className="relative rounded-3xl mb-6">
          {/* Desktop/Tablet (≥640px) : image simple */}
          <img
            src={selectedProject.img}
            alt={prefixTitle}
            className="hidden sm:block w-full rounded-t-xl"
          />

          {/* Mobile (<640px) : on garde ImageProject uniquement en mobile */}
          <div className="sm:hidden">
            <ImageProject
              img={selectedProject.img}
              title={prefixTitle}
              tallBackground
            />
          </div>
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
                <AiOutlineCheckCircle className="text-lightblue-200 text-xl" />
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
