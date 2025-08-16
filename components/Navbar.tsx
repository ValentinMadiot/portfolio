"use client";
import { useTranslation } from "@/utils/useTranslation";
import {
  AiOutlineHome,
  AiOutlineRise,
  AiOutlineSend,
  AiOutlineUser,
} from "react-icons/ai";
import { FloatingNav } from "./ui/FloatingNav";

type NavKey = "home" | "profile" | "projects" | "contact";

const baseItems: {
  key: NavKey;
  href: string;
  icon: JSX.Element;
}[] = [
  { key: "home", href: "/#", icon: <AiOutlineHome /> },
  { key: "profile", href: "/#about", icon: <AiOutlineUser /> },
  { key: "projects", href: "/#projects", icon: <AiOutlineRise /> },
  { key: "contact", href: "/#contact", icon: <AiOutlineSend /> },
];

const Navbar = () => {
  const t = useTranslation("navbar");

  const navItemsLocalized = baseItems.map((item) => ({
    name: t(item.key),
    href: item.href,
    icon: item.icon,
  }));

  return (
    <div className="pointer-events-none">
      <FloatingNav navItems={navItemsLocalized} />
    </div>
  );
};

export default Navbar;
