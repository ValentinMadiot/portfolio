"use client";

import translations from "@/locales";
import { createContext, ReactNode, useContext, useState } from "react";

/**
 * A simple language context to provide the current language and a way to change it.
 *
 * The portfolio defaults to French ("fr").  The language can be toggled between
 * French and English ("en") at runtime.  Components can call the `useLanguage`
 * hook to read or update the current language, and `useTranslation` to
 * translate arbitrary strings using the dictionaries defined in `locales/en.ts`
 * and `locales/fr.ts`.  If a translation key is missing the original key is
 * returned so the UI continues to render.
 */

export type Language = "fr" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "fr",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

/**
 * Hook returning a translation function.  Pass a key (for example, a French
 * string) and it will return the corresponding translation in the current
 * language.  If the key is not found in the dictionary, the key itself is
 * returned.  This means you can progressively add translations over time
 * without breaking the interface.
 */
export const useTranslation = () => {
  const { language } = useLanguage();
  return {
    t: (key: string): string => {
      const dict = (translations as Record<string, Record<string, string>>)[
        language
      ];
      return dict && dict[key] ? dict[key] : key;
    },
  };
};
