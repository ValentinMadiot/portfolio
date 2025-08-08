"use client";
import BackButton from "@/components/BackButton";
import { useTranslation } from "@/utils/useTranslation";
import { PiGhost } from "react-icons/pi";

export default function NotFound() {
  const t = useTranslation("notFound");

  return (
    <div className="grid min-h-[100dvh] place-content-center px-4 py-20">
      <BackButton />

      <div className="flex flex-col items-center gap-6 text-center">
        <PiGhost className="text-5xl text-lightblue-200" aria-hidden="true" />
        <h1 className="text-4xl font-bold text-white">{t("title")}</h1>
        <p className="text-xl text-gray-300">{t("message")}</p>
      </div>
    </div>
  );
}
