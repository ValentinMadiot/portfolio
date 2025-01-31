"use client";
import { useState } from "react";
import { GrDocumentUser } from "react-icons/gr";

import { cn } from "@/lib/utils";
import Lottie from "react-lottie";

import animationData from "@/data/confetti.json";
import Button from "./Button";
import { BackgroundGradientAnimation } from "./GradientBg";
import GlobeDemo from "./GridGlob";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 max-w-6xl mx-auto",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  description2,
  description3,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  description2?: string | React.ReactNode;
  description3?: string | React.ReactNode;
  id?: Number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["React.js", "Next.js", "Typescript", "Tailwind", "Vercel"];
  const rightLists = ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    window.open("https://cvdesignr.com/p/677c0a3bc8d51?hl=en_GB", "_blank");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,67,224,1) 35%, rgba(0,212,255,1) 100%)",
      }}>
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center  w-full h-full"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            " transition duration-200 relative md:h-full min-h-60 flex flex-col px-5 p-3 sm:p-5 lg:p-10"
          )}>
          <div className="font-sans text-lg lg:text-3xl max-w-lg font-bold z-10 mb-5">
            {id === 2 ? (
              <div className="text-end">{title}</div>
            ) : id === 4 ? (
              <div className="text-center md:text-start mt-16 lg:mt-0">
                {id !== 1 && title}
              </div>
            ) : (
              title
            )}
          </div>
          {id === 1 && (
            <>
              <div className="font-sans font-normal tracking-wide md:max-w-100 text-lg text-lightblue-100 z-10">
                {description}
              </div>
              <br />
              <div className="font-sans font-normal tracking-wide md:max-w-100 text-lg text-lightblue-100 z-10">
                {description2}
              </div>
              <br />
              <div className="font-sans font-normal tracking-wide md:max-w-100 text-lg text-lightblue-100 z-10">
                {description3}
              </div>
              <br />
            </>
          )}
          {id === 2 && (
            <div className="absolute inset-0 z-0">
              <GlobeDemo />
            </div>
          )}

          {id === 3 && (
            <div className="flex gap-1 md:gap-6 lg:gap-5 w-fit absolute right-2">
              <div className="flex flex-col gap-3 md:gap-6 lg:gap-8 md:mb-28 lg:mb-0">
                {leftLists.map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-lightblue-100">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 md:gap-6 lg:gap-8 md:mt-28 lg:mt-0">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {rightLists.map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-lightblue-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <Button
                title={"Parcourez mon CV"}
                icon={<GrDocumentUser />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
