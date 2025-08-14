"use client";
import BackButton from "@/components/BackButton";
import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import LanguageToggleButton from "@/components/ui/LanguageToggleButton";
import ScrollUpButton from "@/components/ui/ScrollToUp";
import { Spotlight } from "@/components/ui/Spotlight";
import { useTranslation } from "@/utils/useTranslation";

const Confidentiality = () => {
  const t = useTranslation("confidentiality");

  return (
    <>
      <div className="pb-20 pt-8 fade-in">
        <ScrollUpButton />

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
            <BackButton />
            <LanguageToggleButton />
          </div>
          <div className="flex flex-col gap-6 pb-8 sm:pb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {t("title")}
            </h2>
            <p className="flex gap-1 text-lg">📅 {t("effectiveDate")}</p>
            <p className="flex flex-col gap-6 text-lg">{t("intro1")} </p>
            <p className="flex flex-col gap-6 text-lg">{t("intro2")}</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("dataCollectedHeading")}
            </h3>
            <h4 className="text-xl sm:text-2xl font-bold text-lightblue-200">
              {t("personalInfoSubheading")}
            </h4>
            <p className="flex flex-col gap-6 text-lg">
              {t("personalInfoExplanation")}
            </p>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;{t("personalInfoBullet1")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;
                {t("personalInfoBullet2")}
              </li>
            </ul>
            <h4 className="text-xl sm:text-2xl font-bold text-lightblue-200">
              {t("nonPersonalInfoSubheading")}
            </h4>
            <p className="flex flex-col gap-6 text-lg">
              {t("nonPersonalInfoExplanation")}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("useOfInformationHeading")}
            </h3>
            <p>{t("useOfInfoParagraph")}</p>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;{t("useOfInfoBullet1")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;
                {t("useOfInfoBullet2")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;
                {t("useOfInfoBullet3")}
              </li>
            </ul>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("dataSharingHeading")}
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              &nbsp;&nbsp;&nbsp;❌&nbsp;&nbsp;
              {t("dataSharingParagraph")}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("cookiesHeading")}
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              {t("cookiesParagraph")}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("retentionHeading")}
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              {t("retentionParagraph")}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("rightsHeading")}
            </h3>
            <p className="flex flex-col gap-6 text-lg">{t("rightsIntro")}</p>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;
                {t("rightsBullet1")}
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;
                {t("rightsBullet2")}
              </li>
            </ul>
            <p className="flex flex-col gap-6 text-lg">
              {t("rightsParagraph")}
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("modificationsHeading")}
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              {t("modificationsParagraph")}
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              {t("contactHeading")}
            </h3>

            <p className="flex flex-col gap-6 text-lg">
              {t("contactParagraph")}
            </p>
            <p className="text-lg mb-5">
              &nbsp;&nbsp;&nbsp;📧 {t("emailLabel")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confidentiality;
