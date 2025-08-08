"use client";
import { useTranslation } from "@/utils/useTranslation";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const t = useTranslation("experience");
  const jobs = [
    {
      id: 1,
      title: t("job1.title"),
      date: t("job1.date"),
      company: t("job1.company"),
      location: t("job1.location"),
      desc: t("job1.desc"),
    },
    {
      id: 2,
      title: t("job2.title"),
      date: t("job2.date"),
      company: t("job2.company"),
      location: t("job2.location"),
      desc: t("job2.desc"),
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
              <div className="md:col-span-2">
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
