"use client";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";
import { useTranslation } from "@/utils/useTranslation";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import SocialMediaLinks from "./SocialMediaLinks";
import { DotBackgroundDemo } from "./ui/DotBackgroundDemo";
import LanguageToggleButton from "./ui/LanguageToggleButton";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  const t = useTranslation("hero");

  return (
    <div className="h-screen m-auto flex flex-col justify-center items-center">
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

      <LanguageToggleButton className="absolute top-5 left-5" />

      <div className="flex justify-center relative z-[2]">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-lightblue-100 max-w-80">
            {t("subheading")}
          </p>
          <TextGenerateEffect
            words={t("heading")}
            duration={0.75}
            step={85}
            blur={true}
          />
          {/* <TextGenerateEffect
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl"
            words={t("heading")}
          /> */}
          <p className="text-lightblue-100 text-center tracking-wide md:tracking-wider text-sm md:text-lg max-w-xl sm:max-w-2xl lg:max-w-3xl">
            {t("description")}
          </p>
          <Link href="#projects" className="my-10 xl:my-5 ">
            <MagicButton
              title={t("cta")}
              icon={<AiOutlineArrowRight />}
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
