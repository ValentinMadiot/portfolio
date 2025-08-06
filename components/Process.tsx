/* eslint-disable @next/next/no-img-element */
import { Button } from "./ui/MovingBorders";

const Process = () => {
  const processApproach = [
    {
      id: 1,
      title: "Analyse et Planification",
      desc: "Dans cette première étape, nous mettons un point d’honneur à bien comprendre vos besoins et vos objectifs. Cela passe par des échanges approfondis pour clarifier vos attentes, identifier les fonctionnalités essentielles et élaborer une stratégie claire et détaillée. En parallèle, nous analysons votre audience cible afin de garantir que le produit final sera en parfaite adéquation avec leurs besoins et vos ambitions.",
      thumbnail: "/exp3.svg",
    },
    {
      id: 2,
      title: "Développement",
      desc: "Forts d’une vision claire de votre projet, nous entamons la phase de conception et développement. Nous créons d’abord des maquettes interactives pour donner vie à vos idées et vous permettre de visualiser le futur produit. Une fois ces maquettes validées, nous entamons le développement en utilisant les technologies les plus performantes et les standards actuels. La collaboration reste au cœur du processus : des points réguliers permettent de recueillir vos retours et d’ajuster le projet en temps réel, afin de garantir que le résultat final correspond parfaitement à vos attentes.",
      thumbnail: "/exp1.svg",
    },
    {
      id: 3,
      title: "Livraison et Support",
      desc: "Lors de cette phase cruciale, nous effectuons des tests rigoureux pour garantir un produit fiable, performant et exempt de bugs. Cela comprend des vérifications approfondies de l’interface utilisateur et des tests de performance pour s’assurer que tout fonctionne de manière optimale. Une fois validé, nous livrons le produit dans les délais convenus. Enfin, nous restons disponibles grâce à un support post-lancement, pour répondre à vos questions ou résoudre rapidement toute problématique qui pourrait survenir.",
      thumbnail: "/exp2.svg",
    },
    // {
    //   id: 1,
    //   title: "Découverte et Planification",
    //   desc: "Lors de cette phase initiale, nous prenons le temps de bien comprendre les besoins et les objectifs de votre projet. Cela inclut des réunions approfondies pour discuter de vos attentes, la définition des fonctionnalités clés, et l'établissement d'un plan d'action détaillé. Nous analysons également votre audience cible pour nous assurer que le produit final répondra à leurs besoins.",
    //   thumbnail: "/exp3.svg",
    // },
    // {
    //   id: 2,
    //   title: "Conception et Développement",
    //   desc: "Avec une compréhension claire de vos besoins, nous passons à la conception et au développement. Cette phase inclut la création de maquettes pour visualiser le produit final. Une fois approuvés, nous procédons au développement en utilisant les meilleures pratiques et technologies modernes. Des revues régulières et des feedbacks sont intégrés pour garantir que le projet progresse selon vos attentes.", // change to md:col-span-2
    //   thumbnail: "/exp1.svg",
    // },
    // {
    //   id: 3,
    //   title: "Tests et Livraison",
    //   desc: "La phase finale consiste à tester minutieusement le produit pour s'assurer qu'il est fonctionnel, performant et sans bugs majeurs. Cela inclut des tests d'interface utilisateur et des vérifications de performance. Après avoir obtenu votre approbation finale, nous procédons à la livraison du produit. Vous bénéficiez également d'un support post-lancement pour résoudre toute question ou problème qui pourrait survenir.", // change to md:col-span-2
    //   thumbnail: "/exp2.svg",
    // },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-20 pb-44">
      <h1 className="heading">
        Mon <span className="text-blue">Approche</span>
      </h1>
      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {processApproach.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800">
            <div className="flex flex-col justify-center items-center px-6 py-8 lg:p-8 gap-2 lg:gap-8">
              <div className="h-[130px] flex flex-col items-center justify-center">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-24 w-20 mb-4"
                />
              </div>
              <div className="">
                <h2 className="text-center text-xl md:text-[22px] font-bold">
                  {card.title}
                </h2>
                <p className="text-start text-white-100 font-light  text-base mt-6">
                  {card.desc}
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
