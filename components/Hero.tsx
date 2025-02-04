import React from "react";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { DotBackgroundDemo } from "./ui/DotBackgroundDemo";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { PiArrowRight } from "react-icons/pi";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";

const Hero = () => {
  return (
    <div className="h-screen m-auto flex flex-col justify-center md:pt-20 items-center">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="lightblue"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <DotBackgroundDemo />

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-lightblue-100 max-w-80">
            Créateur d’Interfaces Web Uniques
          </p>
          <TextGenerateEffect
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl"
            words="Concrétisez vos idées avec des solutions web immersives"
          />
          <p className="text-lightblue-100 text-center tracking-wide md:tracking-wider text-sm md:text-lg max-w-xl sm:max-w-2xl lg:max-w-3xl">
            Hi ! Je m’appelle Valentin, développeur front-end passionné,
            spécialisé en React, Next.js et WordPress.
          </p>
          <Link href="#projects" className="my-10 xl:my-5">
            <MagicButton
              title="Découvrez mes projets"
              icon={<PiArrowRight />}
              position="right"
            />
          </Link>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
};

export default Hero;
