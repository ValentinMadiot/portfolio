"use client";
import { useTranslation } from "@/utils/useTranslation";
import { useRouter } from "next/navigation";
import { TbArrowBack } from "react-icons/tb";
// import Link from "next/link";

export default function BackButton(): JSX.Element {
  const router = useRouter();
  const t = useTranslation("backButton");

  return (
    <button
      className="flex items-center gap-1 text-lg hover:text-white-100 pb-[2px] cursor-pointer w-fit"
      onClick={() => router.back()}>
      <TbArrowBack />
      <span>{t("back")}</span>
    </button>
    //  <Link href="/" className="inline-flex items-center text-blue-600">
    //   ← {t("back")}
    // </Link>
  );
}
