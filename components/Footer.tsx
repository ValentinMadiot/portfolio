"use client";
import TransitionLink from "@/utils/transitionLinks";
import { useTranslation } from "@/utils/useTranslation";
import { AiOutlineMail } from "react-icons/ai";
import SocialMediaLinks from "./SocialMediaLinks";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  const t = useTranslation("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-[1440px] mx-auto relative " id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/assets/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 -z-10"
        />
      </div>

      <div className="flex flex-col items-center my-24 z-10">
        <h1 className="heading xxs:max-w-[600px]">
          {t("headingPart1")}
          <span className="text-blue"> {t("headingPart2")}</span>
        </h1>
        <p className="text-blue-100 text-lg md:mt-10 m-5 text-center xxs:max-w-[600px] md:max-w-[750px]">
          {t("description")}
        </p>
        <a href="mailto:valentin.madiot@gmail.com" className="mb-5">
          <MagicButton
            title={t("contactButton")}
            icon={<AiOutlineMail />}
            position="right"
          />
        </a>
        <article className="flex items-center md:gap-3 gap-6">
          <SocialMediaLinks />
        </article>
      </div>

      <div className="flex p-10 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="text-white/80 md:text-base text-sm md:font-normal font-light cursor-default">
          Copyright © {year} Valentin Madiot
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-5 md:mt-0 items-center">
          <TransitionLink
            href="/confidentiality"
            aria-label="Politique de confidentialité"
            className="text-white/80 hover:text-white md:text-base text-sm md:font-normal font-light cursor-pointer">
            {t("privacyPolicy")}
          </TransitionLink>
          <TransitionLink
            href="/legacy"
            aria-label="Mentions légales"
            className="text-white/80 hover:text-white md:text-base text-sm md:font-normal font-light cursor-pointer">
            {t("legalMentions")}
          </TransitionLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
