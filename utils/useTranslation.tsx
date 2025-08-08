"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TranslationNamespace, translations } from "../locales/index";

export const useTranslation = (namespace?: TranslationNamespace) => {
  const { lang } = useLanguage();
  return (key: string) => {
    const dict = translations[lang];
    let section = namespace ? dict[namespace] : dict;
    // prise en charge des clés imbriquées
    const parts = key.split(".");
    let result: any = section;
    for (const part of parts) {
      result = result?.[part];
      if (result === undefined) break;
    }
    return result ?? key;
  };
};
