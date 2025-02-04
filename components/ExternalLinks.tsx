"use client";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ExternalLinks = ({
  linkDemo,
  linkGithub,
  className,
}: {
  linkDemo: string;
  linkGithub: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex items-center text-lg lg:text-base xl:text-lg ${className}`}>
      <a
        href={`https://github.com/ValentinMadiot/${linkGithub}`}
        target="blank_"
        className="flex justify-center items-center gap-1 hover:text-white-100">
        <FiGithub className="ms-3" color="#7aa0fa" />
        <p>GitHub</p>
      </a>
      <a
        href={linkDemo !== "" ? linkDemo : undefined}
        onClick={(e) => {
          if (linkDemo === "") {
            e.preventDefault();
          }
        }}
        target="blank_"
        className={`flex justify-center items-center gap-1 ${
          linkDemo === ""
            ? "cursor-not-allowed text-gray-500"
            : "hover:text-white-100"
        }`}>
        <FiExternalLink className="ms-3" color="#7aa0fa" />
        <p>Demo</p>
      </a>
    </div>
  );
};

export default ExternalLinks;
