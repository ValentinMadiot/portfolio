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
      {/* Desktop / Tablet */}
      <div className="relative hidden sm:flex items-center justify-center overflow-hidden rounded-t-2xl group">
        <div
          className={`relative w-full overflow-hidden bg-[#13162d] ${
            tallBackground
              ? "h-[360px] sm:h-[390px] md:h-[490px] min-[900px]:h-[570px]"
              : isGridThreeCols
              ? "aspect-[5/3] md:aspect-[16/10] min-h-[220px]"
              : "aspect-[16/10] xl:h-[360px] min-h-[220px]"
          }`}
        />
        {/* Image projet */}
        <img
          src={img}
          alt={title}
          className={[
            "absolute z-10 rounded-xl sm:w-[90%]",
            imgRotate
              ? "transform-gpu will-change-transform transition-transform duration-500 ease-in-out group-hover:rotate-2 hover:scale-105"
              : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          ].join(" ")}
        />
      </div>

      {/* Mobile */}
      <img
        src={img}
        alt={title}
        className={[
          "block w-full sm:hidden rounded-xl",
          imgRotate
            ? "transform-gpu will-change-transform transition-transform duration-500 ease-in-out hover:rotate-2"
            : "",
        ].join(" ")}
      />
    </>
  );
};

export default ImageProject;
