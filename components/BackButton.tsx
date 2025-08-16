"use client";
import { useTranslation } from "@/utils/useTranslation";
import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

type BackButtonProps = {
  fallbackHref?: string;
  className?: string;
  "aria-label"?: string;
};

export default function BackButton({
  fallbackHref = "/",
  className = "flex items-center gap-1 text-lg text-white/80 hover:text-white pb-[2px] cursor-pointer w-fit",
  "aria-label": ariaLabel,
}: BackButtonProps) {
  const router = useRouter();
  const t = useTranslation("backButton");

  const handleClick = () => {
    if (typeof window === "undefined") {
      router.push(fallbackHref);
      return;
    }

    const before = window.location.href;

    // Si le "back" fonctionne, un popstate est déclenché -> on annule le fallback.
    const cancelFallback = () => clearTimeout(timer);
    window.addEventListener("popstate", cancelFallback, { once: true });

    const timer = window.setTimeout(() => {
      // Si l’URL n’a pas changé, on force le fallback
      if (window.location.href === before) {
        router.replace(fallbackHref);
      }
    }, 300);

    // Tente le retour
    router.back();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel ?? t("back")}>
      <AiOutlineArrowLeft aria-hidden="true" />
      <span>{t("back")}</span>
    </button>
  );
}
