"use client";
import { useTranslation } from "@/utils/useTranslation";
import { Button } from "./ui/MovingBorders";

const Process = () => {
  const t = useTranslation("process");
  const steps = [
    {
      title: t("step1Title"),
      desc: t("step1Desc"),
      thumbnail: "/exp3.svg",
    },
    {
      title: t("step2Title"),
      desc: t("step2Desc"),
      thumbnail: "/exp1.svg",
    },
    {
      title: t("step3Title"),
      desc: t("step3Desc"),
      thumbnail: "/exp2.svg",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto pt-20 pb-44">
      <h1 className="heading">
        {t("titlePrefix")}
        <span className="text-blue"> {t("titleSuffix")}</span>
      </h1>
      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {steps.map((step, idx) => (
          <Button
            key={idx}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800">
            <div className="flex flex-col justify-center items-center px-6 py-8 lg:p-8 gap-2 lg:gap-8">
              <div className="h-[130px] flex flex-col items-center justify-center">
                <img
                  src={step.thumbnail}
                  alt={step.thumbnail}
                  className="lg:w-32 md:w-24 w-20 mb-4"
                />
              </div>
              <div className="">
                <h2 className="text-center text-xl md:text-[22px] font-bold">
                  {step.title}
                </h2>
                <p className="text-start text-white-100 font-light  text-base mt-6">
                  {step.desc}
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
