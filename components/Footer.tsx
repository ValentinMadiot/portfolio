/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa";
import SocialMediaLinks from "./SocialMediaLinks";
import MagicButton from "./ui/MagicButton";
// import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import TransitionLink from "@/utils/transitionLinks";

const Footer = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();
  const router = useRouter();

  return (
    <footer className="w-full relative -z-1" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center my-24">
        <h1 className="heading lg:max-w-[45vw]">
          {t("Ensemble, donnons vie à")}{" "}
          <span className="text-blue"> {t("vos idées!")}</span>
        </h1>
        <p className="text-blue-100 text-lg md:mt-10 m-5 text-center">
          {t(
            "Discutons dès maintenant de la manière dont je peux transformer vos idées en solutions concrètes et innovantes."
          )}
        </p>
        <a href="mailto:valentin.madiot@gmail.com" className="mb-5">
          <MagicButton
            title={t("Entrons en contact!")}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <article className="flex items-center md:gap-3 gap-6">
          <SocialMediaLinks />
        </article>
      </div>

      <div className="flex p-10 md:flex-row flex-col justify-between items-center relative">
        <p className="text-white-200 md:text-base text-sm md:font-normal font-light">
          Copyright © {year} | Valentin Madiot
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-5 md:mt-0 items-center">
          <TransitionLink
            href="/confidentiality"
            aria-label="Politique de confidentialité"
            className="dark:hover:text-blue text-white-200 md:text-base text-sm md:font-normal font-light cursor-pointer">
            {t("Politique de confidentialité")}
          </TransitionLink>
          <TransitionLink
            href="/legacy"
            aria-label="Mentions légales"
            className="dark:hover:text-blue text-white-200 md:text-base text-sm md:font-normal font-light cursor-pointer">
            {t("Mentions légales")}
          </TransitionLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
