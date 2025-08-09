"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/utils/useTranslation";
import {
  AiOutlineRise,
  AiOutlineSend,
  AiOutlineTranslation,
  AiOutlineUser,
} from "react-icons/ai";
import { FloatingNav } from "./ui/FloatingNav";

const navItems = [
  {
    name: "Profil",
    link: "#about",
    icon: <AiOutlineUser />,
  },
  {
    name: "Projets",
    link: "#projects",
    icon: <AiOutlineRise />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <AiOutlineSend />,
  },
  {
    // Cette entrée est un simple placeholder ; son label et son comportement sont définis dynamiquement dans le composant selon la langue en cours.
    name: "Translate",
    link: "",
    icon: <AiOutlineTranslation />,
  },
];

const Navbar = () => {
  const t = useTranslation("navbar");
  const { lang, setLang } = useLanguage();

  // Fonction utilitaire pour changer de langue.
  const toggleLanguage = () => setLang(lang === "fr" ? "en" : "fr");

  // On traduit les 3 premiers items et on personnalise le dernier pour
  // basculer entre EN et FR selon la langue actuelle.
  const navItemsLocalized = navItems.map((item, idx) => {
    const isToggle = idx === navItems.length - 1;
    if (isToggle) {
      return {
        ...item,
        name: lang === "fr" ? "FR" : "EN",
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
      <div className="absolute left-1 top-28 z-40"></div>
    </div>
  );
};

export default Navbar;
