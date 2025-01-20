export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Présentation",
    description: `"Développeur web full-stack, je conçois des sites modernes, réactifs et optimisés, parfaitement adaptés aux besoins des particuliers et des petites entreprises. Mon objectif : associer design intuitif, performance technique et services comme le SEO et le copywriting pour maximiser votre présence en ligne.

    Ma stack inclut React et Next.js pour le frontend, ainsi que Node.js et MongoDB pour le backend, garantissant des applications robustes et complètes. J’intègre aussi des outils d’IA tels que ChatGPT, Git Copilot et Midjourney pour enrichir mon flux de travail.

    Passionné et déterminé, je perfectionne continuellement mes compétences techniques et humaines (autonomie, communication, adaptabilité). Toujours prêt à relever de nouveaux défis, je suis à votre disposition pour collaborer et concrétiser vos projets."`,
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 ",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 2,
  //   title: "Peu importe votre fuseau horaire, je m’assure d’être disponible pour répondre à vos besoins",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 3,
    title: "Stack",
    description: "En progression constante",
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
    title: "Vous souhaitez démarrer un projet ensemble ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const workExperience = [
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

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ValentinMadiot",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/valentinmadiot/",
  },
  {
    id: 3,
    img: "/wha.svg",
    link: "https://wa.me/33677505531",
  },
];
