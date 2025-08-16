"use client";
import BackButton from "@/components/BackButton";
import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import LanguageToggleButton from "@/components/ui/LanguageToggleButton";
import ScrollUpButton from "@/components/ui/ScrollToUp";
import { Spotlight } from "@/components/ui/Spotlight";
import { useTranslation } from "@/utils/useTranslation";

const Legacy = () => {
  const t = useTranslation("legacy");

  return (
    <>
      <div className="lg:pb-20 pt-8 fade-in">
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

        <div className="flex flex-col gap-10 mt-12 relative lg:max-w-5xl mx-auto z-[2]">
          <div className="flex justify-between items-center">
            <BackButton fallbackHref="/#contact" />
            <LanguageToggleButton />
          </div>
          <div className="flex flex-col gap-6 pb-8 sm:pb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {t("title")}
            </h2>
            <p className="flex gap-1 text-lg">📅 {t("updateDate")}</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("generalInfoHeading")}
            </h3>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;
                {t("companyName")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;
                {t("legalForm")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;
                {t("headOffice")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;
                {t("sirenNumber")}
              </li>
            </ul>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("contactHeading")}
            </h3>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;📧&nbsp;&nbsp;
                {t("email")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;📞&nbsp;&nbsp;
                {t("phone")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;🌐&nbsp;&nbsp;
                {t("website")}
              </li>
            </ul>

            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("hostingHeading")}
            </h3>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;
                {t("hostName")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;
                {t("hostAddress")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;
                {t("hostPhone")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;
                {t("hostWebsite")}
              </li>
            </ul>

            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("intellectualPropertyHeading")}
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              {t("intellectualPropertyParagraph1")}
            </p>
            <p className="flex flex-col gap-6 text-lg">
              &nbsp;&nbsp;&nbsp;❌&nbsp;&nbsp;{" "}
              {t("intellectualPropertyParagraph2")}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("responsibilitiesHeading")}
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              {t("responsibilitiesParagraph1")}
            </p>
            <p className="flex flex-col gap-6 text-lg">
              &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;
              {t("responsibilitiesParagraph2")}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("jurisdictionHeading")}
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              {t("jurisdictionParagraph")}
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("finalContactHeading")}
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              {t("finalContactIntro")}
            </p>
            <ul>
              <li className="flex gap-1 text-lg mb-5">
                &nbsp;&nbsp;&nbsp;📧 {t("finalContactEmail")}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col border-t border-white/10"></div>
      </div>
      <ScrollUpButton />
    </>
  );
};

export default Legacy;
