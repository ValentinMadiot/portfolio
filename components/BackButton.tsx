"use client";
import { useTranslation } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { TbArrowBack } from "react-icons/tb";

export default function BackButton(): JSX.Element {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <button
      className="flex items-center gap-1 text-lg hover:text-white-100 pb-[2px] cursor-pointer w-fit"
      onClick={() => router.back()}>
      <TbArrowBack />
      <span>{t("Retour")}</span>
    </button>
  );
}
