import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

const RecentProject = () => {
  return (
    <div id="projects" className="sm:p-20 py-20 px-3">
      <h1 className="heading">
        Selection de
        <span className="text-blue"> mes projets récent</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center lg:mt-12">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="px-20 h-[32rem] flex items-center justify-center sm:w-[470px] w-[80vw]">
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center w-[80vw] sm:w-[350px] h-[fit] sm:h-[fit] lg:h-[fit]  overflow-hidden rounded-3xl mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="font-light text-sm md:text-base line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-lightblue-100">
                    Site Web
                  </p>
                  <FaLocationArrow className="ms-3" color="#4643e0" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject