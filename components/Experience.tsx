import { Button } from "./ui/MovingBorders";

const workExperience = [
  {
    id: 1,
    title: "Développeur Web",
    date: "Depuis 2022",
    company: "Freelance ",
    location: " Remote",
    desc: "Je conçois et développe des sites web adaptés aux besoins des particuliers et des petites entreprises, en mettant l'accent sur des designs sur mesure, responsives et intuitifs. Mon travail englobe l'optimisation des performances, le renforcement du référencement naturel (SEO) pour améliorer la visibilité en ligne, ainsi que la production de contenus uniques et conformes aux droits d'auteur. J'offre également des services de création de logos et de gestion des réseaux sociaux, visant à renforcer l'identité de marque et à engager efficacement les audiences dans divers domaines.",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Développeur Web",
    date: "Novembre 2022",
    company: "OpenClassRooms ",
    location: " Certificat",
    desc: "Spécialisé dans le développement frontend et la gestion des APIs backend, allant de leur intégration à leur création sur mesure. Expertise en conception d’applications web responsives, en optimisation des performances et en amélioration de l’expérience utilisateur. Gestion complète de projets, de la planification à la livraison, sous encadrement. Réalisation notable : Groupomania, une plateforme de médias sociaux full-stack développée avec la stack MERN.",
    className: "md:col-span-2",
  },
];

const Experience = () => {
  return (
    <section className="max-w-6xl mx-auto pt-20" id="experiences">
      <h1 className="heading">
        Mes
        <span className="text-blue"> Experiences</span>
      </h1>

      <div className="w-full max-w-6xl mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10 mx-auto">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800">
            <div className=" flex lg:flex-row flex-col lg:item-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              {/* <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' /> */}
              <div className="">
                <h2 className="text-start text-lg lg:text-3xl md:text-2xl font-bold">
                  {card.title}
                </h2>
                <p className="text-start text-base mt-1 text-white-100">
                  {card.date}
                </p>
                <p className="text-start text-base mt-3 text-lightblue-200 font-medium">
                  <span className="">{card.company}</span>
                  &nbsp;&nbsp;—&nbsp;&nbsp;{card.location}
                </p>
                <p className="text-start text-base text-white-100 font-light mt-3 ">
                  {card.desc}
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
