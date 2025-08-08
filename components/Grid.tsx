"use client";
import { useTranslation } from "@/utils/useTranslation";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  const t = useTranslation("grid");
  const cards = [
    {
      id: 1,
      title: "",
      desc1: t("desc1"),
      desc2: t("desc2"),
      desc3: t("desc3"),
      className: "lg:col-span-3 md:col-span-6 md:row-span-4",
      imgClassName: "",
      titleClassName: "",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: t("title1"),
      desc1: t("desc4"),
      desc2: t("desc5"),
      className: "lg:col-span-2 md:col-span-3 md:row-span-4",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: t("title2"),
      desc: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "assets/grid.svg",
      spareImg: "assets/grid4.svg",
    },
    {
      id: 2,
      title: t("title3"),
      desc: "",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-start",
      img: "",
      spareImg: "assets/grid.svg",
    },
    {
      id: 6,
      title: t("title4"),
      desc: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-70 text-center",
      img: "",
      spareImg: "",
    },
    // {
    //   id: 2,
    //   title: "Je suis basé entre Paris et Montpellier",
    //   desc1: "Ouvert à de nouvelles collaborations",
    //   className:
    //     "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[10rem] lg:min-h-fit",
    //   imgClassName: "",
    //   titleClassName: "justify-start",
    //   img: "",
    //   spareImg: "",
    // },
  ];

  return (
    <section id="about">
      <BentoGrid className="w-full pt-5 xl:pt-10 pb-20">
        {cards.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title ? t(item.title as string) : undefined}
            description={item.desc1 ? t(item.desc1 as string) : undefined}
            description2={item.desc2 ? t(item.desc2 as string) : undefined}
            description3={item.desc3 ? t(item.desc3 as string) : undefined}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
