"use client";

import NotFound from "@/app/not-found";
import BackButton from "@/components/BackButton";
import { MoreProjects } from "@/components/Projects/MoreProjects";
import { ProjectDescription } from "@/components/Projects/ProjectDescription";
import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import { Spotlight } from "@/components/ui/Spotlight";
import { findProjectBySlug } from "@/utils/helpers";
import { useParams } from "next/navigation";
import { useLayoutEffect } from "react";

export const projects = [
  {
    id: 1,
    title: "Sushi Restaurant",
    slug: "sushi-restaurant",
    des: "Création d'une landing page moderne et minimaliste pour un artisan, développée en HTML, CSS et JavaScript. Enrichie d'animations fluides grâce à ScrollReveal.js.",
    img: "",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    linkDemo: "https://sushi-restaurant-vm.netlify.app/",
    linkGithub:
      "https://github.com/ValentinMadiot/sushi-restaurant_ui?tab=readme-ov-file",
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
    title: "Pizzeria",
    slug: "pizzeria",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    linkDemo: "https://pizzeria-paris.netlify.app/",
    linkGithub: "https://github.com/ValentinMadiot/pizza-restaurant_ui",
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
    title: "Maraicher",
    slug: "fruits-shop",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    linkDemo: "https://maraicher-fruits.netlify.app/",
    linkGithub:
      "https://github.com/ValentinMadiot/fruits-shop_ui?tab=readme-ov-file",
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
    title: "Construct",
    slug: "construction-company",
    des: "Création d'une landing page moderne et minimaliste pour un artisan, développée en HTML, CSS et JavaScript. Enrichie d'animations fluides grâce à ScrollReveal.js.",
    img: "",
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

const ProjectDetail = () => {
  const params = useParams();
  const slug = params.slug;
  const selectedProject = findProjectBySlug(projects, slug);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  if (!selectedProject) {
    return <NotFound />;
  }

  return (
    <>
      <div className="pb-20 pt-8 fade-in">
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

        <div className="flex flex-col gap-10 mt-32 relative lg:max-w-4xl mx-auto">
          <BackButton />
          <div className="">
            <ProjectDescription selectedProject={selectedProject} />
          </div>
        </div>
        <MoreProjects slug={slug} />
      </div>
    </>
  );
};

export default ProjectDetail;
