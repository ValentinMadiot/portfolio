"use client";
import { useTranslation } from "@/contexts/LanguageContext";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const gridItems = [
  {
    id: 1,
    title: "",
    description: `Développeur Web, je conçois des sites modernes, réactifs et optimisés, parfaitement adaptés aux besoins des particuliers et des petites entreprises. Mon objectif : associer design intuitif, performance technique et services comme le SEO et le copywriting pour maximiser votre présence en ligne.`,
    description2: `Ma stack inclut React et Next.js pour le frontend, ainsi que Node.js et MongoDB pour le backend, garantissant des applications robustes et complètes. J’intègre aussi des outils d’IA tels que ChatGPT et Midjourney pour enrichir mon flux de travail.`,
    description3: `Passionné et déterminé, je perfectionne continuellement mes compétences techniques et humaines (autonomie, communication, adaptabilité). Toujours prêt à relever de nouveaux défis, je suis à votre disposition pour collaborer et concrétiser vos projets.`,
    className: "lg:col-span-3 md:col-span-6 md:row-span-4",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 2,
  //   title: "Je suis basé entre Paris et Montpellier",
  //   description: "Ouvert à de nouvelles collaborations",
  //   className:
  //     "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[10rem] lg:min-h-fit",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 3,
    title: "Stack",
    description: "En progression",
    description2: "constante",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionné de technologie et de développement.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 2,
    title:
      "Peu importe votre fuseau horaire, je m’assure d’être disponible pour répondre à vos besoins",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Apprenez-en plus sur moi !",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-70 text-center",
    img: "",
    spareImg: "",
  },
];

const Grid = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <BentoGrid className="w-full pt-5 xl:pt-10 pb-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title ? t(item.title as string) : undefined}
            description={
              item.description ? t(item.description as string) : undefined
            }
            description2={
              item.description2 ? t(item.description2 as string) : undefined
            }
            description3={
              item.description3 ? t(item.description3 as string) : undefined
            }
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
