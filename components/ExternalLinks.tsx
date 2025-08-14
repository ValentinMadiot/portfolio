"use client";
import { AiOutlineGithub, AiOutlineLogout } from "react-icons/ai";

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
        target="_blank"
        className="flex justify-center items-center gap-1 text-white/80 hover:text-white">
        <AiOutlineGithub className="ms-1" />
        <p>Code</p>
      </a>
      <a
        href={linkDemo !== "" ? linkDemo : undefined}
        onClick={(e) => {
          if (linkDemo === "") {
            e.preventDefault();
          }
        }}
        target="_blank"
        className={`flex justify-center items-center gap-1 text-white/80 hover:text-white ${
          linkDemo === "" ? "cursor-not-allowed " : ""
        }`}>
        <AiOutlineLogout className="ms-3" />
        <p>Demo</p>
      </a>
    </div>
  );
};

export default ExternalLinks;
