"use client";
import { useLanguage } from "@/context/LanguageContext";
import { AiOutlineTranslation } from "react-icons/ai";

type Props = {
  className?: string;
};

export default function LanguageToggleButton({ className = "" }: Props) {
  const { lang, setLang } = useLanguage();
  const toggleLanguage = () => setLang(lang === "fr" ? "en" : "fr");

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className={[
        "inline-flex items-center gap-2 rounded-md border border-white px-3 py-1.5",
        "text-sm font-medium",
        "bg-[#000319] text-[white]",
        "hover:text-lightblue-200 hover:border-lightblue-200 transition",
        "shadow-[0_6px_14px_rgba(0,0,0,0.15)]",
        className,
      ].join(" ")}>
      {lang === "fr" ? "FR" : "EN"}
      <AiOutlineTranslation className="text-base" />
    </button>
  );
}
