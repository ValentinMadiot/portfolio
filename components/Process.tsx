/* eslint-disable @next/next/no-img-element */
import { processApproach } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Process = () => {
  return (
    <div className="max-w-6xl mx-auto pt-20 pb-44">
      <h1 className="heading">
        Mon <span className="text-blue">Approche</span>
      </h1>
      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {processApproach.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800">
            <div className="flex flex-col justify-center items-center px-6 py-8 lg:p-8 gap-2 lg:gap-8">
              <div className="h-[130px] flex flex-col items-center justify-center">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-24 w-20 mb-4"
                />
              </div>
              <div className="">
                <h2 className="text-center text-xl md:text-[22px] font-bold">
                  {card.title}
                </h2>
                <p className="text-start text-white-100 font-light  text-base mt-6">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Process;
