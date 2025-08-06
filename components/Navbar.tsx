"use client";
import { useLanguage, useTranslation } from "@/contexts/LanguageContext";
import {
  PiPaperPlaneTilt,
  PiTranslate,
  PiTrendUp,
  PiUser,
} from "react-icons/pi";
import { FloatingNav } from "./ui/FloatingNav";

const navItems = [
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
  {
    // Cette entrée est un simple placeholder ; son label et son comportement
    // sont définis dynamiquement dans le composant selon la langue en cours.
    name: "Translate",
    link: "",
    icon: <PiTranslate />,
  },
];

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  // Fonction utilitaire pour changer de langue.
  const toggleLanguage = () => setLanguage(language === "fr" ? "en" : "fr");

  // On traduit les 3 premiers items et on personnalise le dernier pour
  // basculer entre EN et FR selon la langue actuelle.
  const navItemsLocalized = navItems.map((item, idx) => {
    const isToggle = idx === navItems.length - 1;
    if (isToggle) {
      return {
        ...item,
        name: language === "fr" ? "FR" : "EN",
        onClick: toggleLanguage,
      };
    }
    return {
      ...item,
      name: t(item.name),
    };
  });

  return (
    <div className="flex justify-end relative">
      {/* La barre flottante affiche désormais la bascule de langue en dernier */}
      <FloatingNav navItems={navItemsLocalized} />
      <div className="absolute left-1 top-28 z-40">
        {/* Vous pouvez ajouter ici d’autres éléments comme vos liens sociaux ou un thème sombre */}
      </div>
    </div>
  );
};

export default Navbar;
