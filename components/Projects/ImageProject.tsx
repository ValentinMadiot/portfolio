/* eslint-disable @next/next/no-img-element */
import React from "react";

type ImageProjectProps = {
  img: string;
  title: string;
  tallBackground?: boolean;
  imgRotate?: boolean;
  isGridThreeCols?: boolean;
};

const ImageProject: React.FC<ImageProjectProps> = ({
  img,
  title,
  tallBackground,
  imgRotate,
  isGridThreeCols,
}) => {
  return (
    <>
      <div className="relative items-center justify-center overflow-hidden rounded-3xl hidden sm:flex">
        <div
          className={`relative w-full overflow-hidden bg-[#13162d] ${
            tallBackground
              ? "h-[360px] sm:h-[390px] md:h-[490px] min-[900px]:h-[570px]"
              : isGridThreeCols
              ? "h-full"
              : "h-full xl:h-[360px]"
          }`}
        >
          <img src="/bg.png" alt="card background image" />
        </div>
        <img
          src={img}
          alt={title}
          className={`z-10 absolute -bottom-5 md:-bottom-40 min-[900px]:-bottom-52 lg:-bottom-5 w-[85%] sm:w-[80%] rounded-xl ${
            imgRotate ? "transform rotate-2" : ""
          }`}
        />
      </div>
      <img
        src={img}
        alt={title}
        className={`w-full block sm:hidden rounded-xl`}
      />
    </>
  );
};

export default ImageProject;
