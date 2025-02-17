import { PiPaperPlaneTilt, PiTrendUp, PiUser } from "react-icons/pi";

export const navItems = [
  {
    name: "Profil",
    link: "/#about",
    icon: <PiUser />,
  },
  {
    name: "Projets",
    link: "/#projects",
    icon: <PiTrendUp />,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: <PiPaperPlaneTilt />,
  },
];

export const gridItems = [
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

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    slug: "solar-system-planets-to-explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    linkDemo: "",
    linkGithub: "project-name",
    isClientProject: true,
    paragraphs: [
      "Mon client, une entreprise spécialisée dans l'accompagnement des PME, souhaitait développer un outil en ligne pour simplifier et automatiser l'estimation des crédits d'impôt auxquels ses clients pourraient prétendre. Le but était de centraliser toutes les informations nécessaires, de permettre aux utilisateurs de soumettre leurs simulations en ligne, et de leur fournir des récapitulatifs précis par email.",
      "J'ai conçu et développé une application web interactive permettant aux utilisateurs d'entrer les informations de leur entreprise et de simuler les crédits d'impôt auxquels ils sont éligibles en temps réel. L'application intègre une interface intuitive pour la sélection des crédits d'impôt et la saisie des données nécessaires.",
      "La solution comprend également un système d'authentification via une API pour sauvegarder automatiquement les résultats dans un CRM (Wix) et assurer un suivi précis des simulations. J'ai mis en place l'envoi automatisé d'emails récapitulatifs via Mandrill, garantissant que les utilisateurs reçoivent un résumé clair de leurs estimations.",
      "J'ai utilisé React, Next.js et Zustand pour le développement frontend, combinés avec des API externes (Wix CRM et Mandrill) pour le backend, assurant ainsi une architecture évolutive et performante. Ce projet a permis à mon client de centraliser et automatiser efficacement le processus de simulation des crédits d'impôt pour ses prospects, tout en facilitant la gestion des données et le suivi des résultats.",
    ],
    paragraphContexte: [],
    paragraphSolution: [],
    paragraphResultat: [],
    paragraphTechno: [],
    features: [
      "Interface intuitive pour simuler des crédits d'impôt",
      "Gestion des formules spécifiques pour chaque crédit",
      "Envoi d'emails via l'API Mandrill",
      "Résultats de simulation envoyés automatiquement par mail",
      "Sauvegarde des données de simulation dans les contacts Wix",
    ],
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    slug: "Yoom-Video-Conferencing-App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    linkDemo: "",
    linkGithub: "pygmalion-simulator",
    isClientProject: true,
    paragraphs: [
      "Actuellement, je travaille sur le développement d'une landing page de vente pour une formation en trading, conçue pour maximiser les conversions et attirer de nouveaux clients. En parallèle, le client m'a demandé de développer une plateforme complète où ses clients pourront accéder à leurs vidéos de formation, suivre leur progression, et bénéficier d'un espace personnel sécurisé.",
      "Le projet suit une approche complète du cycle de développement, allant de la conception initiale à la mise en production. Je prends en charge le design en utilisant Figma, tout en m'occupant du copywriting pour maximiser l'impact marketing. Chaque section de la landing page est pensée pour optimiser l'engagement à l'aide de techniques de marketing digital.",
      "La landing page comprendra des fonctionnalités avancées telles que l'intégration de Stripe pour les paiements sécurisés et un système de réservation en ligne via l'API Calendly. Quant à la plateforme, elle inclura un système d'authentification pour sécuriser l'accès aux espaces personnels des utilisateurs et une gestion des vidéos permettant aux clients de suivre leur progression de manière intuitive.",
      "Pour les vidéos de formation, je prévois d'utiliser un service d'hébergement cloud tel qu'AWS, garantissant des performances optimales et une scalabilité adaptée aux besoins du projet. Cela permettra de centraliser et sécuriser les contenus tout en offrant une expérience utilisateur fluide et fiable.",
      "Le projet utilise Next.js et Tailwind CSS pour garantir performance et flexibilité, ainsi que des solutions externes telles que Stripe et Calendly pour les paiements et la planification. Ces technologies permettent de construire un écosystème robuste et intuitif, répondant aux besoins des utilisateurs et du client.",
    ],

    // paragraphs : [
    //   "Développement d'une landing page de vente pour une formation en trading Forex, conçue pour maximiser les conversions et attirer de nouveaux clients. L'objectif était de créer un site moderne, engageant et optimisé, intégrant des solutions de paiement et de réservation en ligne pour une expérience utilisateur fluide.",
    //   "Le projet a été réalisé en tenant compte de toutes les étapes du cycle de développement, de la conception initiale à la mise en ligne. J'ai pris en charge le design en utilisant Figma, tout en assurant le copywriting pour optimiser l'impact marketing. Chaque section de la page a été structurée pour maximiser l'engagement, en s’appuyant sur des techniques de marketing digital.",
    //   "La page comprend plusieurs fonctionnalités avancées, comme l'intégration de Stripe pour les paiements sécurisés, un système de réservation en ligne via l’API Calendly, ainsi qu'un blog intégré pour améliorer le référencement et attirer du trafic organique. J'ai également développé un espace admin pour gérer facilement les publications d'articles.",
    //   "Le projet a été réalisé avec Next.js et Tailwind CSS pour une performance et une flexibilité optimales. J’ai également intégré des solutions externes comme Stripe et Calendly pour les paiements et la planification, offrant ainsi une expérience utilisateur complète et fluide."
    // ],
    features: [
      "Design personnalisé et responsive",
      "Sections marketing optimisées pour le SEO",
      "Système de blog pour publier des articles",
      "Amélioration du SEO avec des articles",
      "Intégration de Stripe pour les paiements",
      "Paiement en ligne sécurisé",
      "Authentification sécurisée pour l’administration",
      "Réservation en ligne via l’API Calendly",
    ],
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    slug: "AI-Image-SaaS-Canva-Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    linkDemo: "",
    linkGithub: "pygmalion-simulator",
    isClientProject: true,
    paragraphs: [
      "Actuellement, je développe le site web d'une agence de communication digitale. Le projet inclut une refonte complète du design, incluant la création d'un nouveau logo, afin d'aligner l'image de marque avec les valeurs et les objectifs de l'agence. Ce site sera un outil clé pour l’agence, permettant de gérer le blog de manière autonome grâce à un back-office sur mesure.",
      "Le site intègrera des fonctionnalités avancées, notamment un système de gestion des articles du blog où l’administratrice pourra publier, modifier et supprimer des articles en toute simplicité. La sécurité et l’authentification sont gérées via Firebase, assurant un accès sécurisé au back-office.",
      "En plus de ces fonctionnalités, j’ajoute un système de prise de rendez-vous en ligne via l’intégration de Calendly, facilitant ainsi la gestion des rendez-vous clients directement depuis le site. Le projet est développé en Next.js et TypeScript, garantissant des performances optimales et un référencement optimisé pour les moteurs de recherche.",
    ],
    features: [
      "Design personnalisé et responsive",
      "Sections marketing optimisées pour le SEO",
      "Optimisation pour la conversion",
      "Back-office personnalisé pour gérer les articles",
      "Publier, modifier, supprimer des articles",
      "Authentification sécurisée pour l’administration",
      "Système de rendez-vous en ligne via Calendly",
    ],
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    slug: "Animated-Apple-Iphone-3D-Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    linkDemo: "",
    linkGithub: "pygmalion-simulator",
    isClientProject: true,
    paragraphs: [
      "J'ai initialement développé un site e-commerce pour une cliente spécialisée dans la vente de bijoux artisanaux, afin de l'aider à promouvoir et vendre ses créations en ligne. Cependant, suite à la mise en pause du projet à la demande de la cliente, je l'ai transformé en projet personnel, en le réorientant vers la vente de vêtements et d'accessoires.",
      "Le projet inclut plusieurs fonctionnalités essentielles : ajout de produits au panier, gestion des commandes, et une page dédiée permettant aux utilisateurs de consulter l'historique de leurs commandes.",
      "Je me suis également chargé de la conception et de l'optimisation de l'interface utilisateur, en veillant à offrir une navigation intuitive et une expérience utilisateur fluide, adaptée aux besoins des clients potentiels du site.",
      "Le site a été développé en utilisant Next.js, TypeScript, et Tailwind CSS pour le frontend. Wix est utilisé pour la gestion du backend, couvrant les fonctionnalités liées aux produits, aux stocks, et aux commandes.",
    ],
    features: [
      "Catalogue de produits avec filtrage (taille, prix)",
      "Gestion dynamique du panier",
      "Système de paiement intégré",
      "Page de profil pour l’historique des commandes",
      "Suivi des statuts de commande",
      "Gestion des profils utilisateurs",
      "Mise à jour des informations personnelles",
      "Authentification sécurisée des utilisateurs",
    ],
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

export const processApproach = [
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
  {
    id: 4,
    img: "/resume.svg",
    link: "https://cvdesignr.com/p/677c0a3bc8d51?hl=en_GB",
  },
];
