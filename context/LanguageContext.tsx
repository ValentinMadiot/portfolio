"use client";

import type { SupportedLanguages } from "@/locales";
import { createContext, ReactNode, useContext, useState } from "react";

// Define the shape of the language context
type LanguageContextType = {
  lang: SupportedLanguages;
  setLang: (lang: SupportedLanguages) => void;
};

// Create the context with an undefined default so misuse throws
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provide the current language to descendants.  Defaults to 'fr'.
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<SupportedLanguages>("fr");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to access the current language and setter
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
