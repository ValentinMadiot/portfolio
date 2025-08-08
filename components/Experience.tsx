"use client";
import { useTranslation } from "@/utils/useTranslation";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const t = useTranslation("experience");
  const jobs = [
    {
      id: 1,
      title: t("job1Title"),
      date: t("job1Date"),
      company: t("job1Company"),
      location: t("job1Location"),
      desc: t("job1Desc"),
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: t("job2Title"),
      date: t("job2Date"),
      company: t("job2Company"),
      location: t("job2Location"),
      desc: t("job2Desc"),
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto pt-20" id="experiences">
      <h1 className="heading">
        {t("sectionTitlePrefix")}{" "}
        <span className="text-blue">{t("sectionTitleSuffix")}</span>
      </h1>

      <div className="w-full max-w-6xl mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10 mx-auto">
        {jobs.map((jobs, idx) => (
          <Button
            key={idx}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800">
            <div className=" flex lg:flex-row flex-col lg:item-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="">
                <h2 className="text-start text-lg lg:text-3xl md:text-2xl font-bold">
                  {jobs.title}
                </h2>
                <p className="text-start text-base mt-1 text-white-100">
                  {jobs.date}
                </p>
                <p className="text-start text-base mt-3 text-lightblue-200 font-medium">
                  <span className="">{jobs.company}</span>
                  &nbsp;&nbsp;—&nbsp;&nbsp;{jobs.location}
                </p>
                <p className="text-start text-base text-white-100 font-light mt-3 ">
                  {jobs.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
