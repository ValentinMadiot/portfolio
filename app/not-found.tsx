"use client";
import BackButton from "@/components/BackButton";
import { useTranslation } from "@/contexts/LanguageContext";
import { PiGhost } from "react-icons/pi";

/**
 * Custom 404 Not Found page.
 * Displays a user-friendly message when a page is not found.
 */
export default function NotFound() {
  const { t } = useTranslation();

  return (
    // <div className="grid min-h-[100dvh] place-content-center px-4 py-20">
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      {/* Back Button */}
      <BackButton />

      {/* Content */}
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Icon */}
        <PiGhost className="text-5xl text-lightblue-200" aria-hidden="true" />

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white">
          {t("404 - Page non trouvée")}
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-300">{t("L'URL est invalide.")}</p>
        {/* <Link href="/" className="text-blue-600 underline">
          {t("Retour")}
        </Link> */}
      </div>
    </div>
  );
}
