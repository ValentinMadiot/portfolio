// Aggregate all language dictionaries and infer useful types.
import en from "./en";
import fr from "./fr";

export const translations = { en, fr } as const;

export type SupportedLanguages = keyof typeof translations;

// Derive the namespaces from the English dictionary type
export type TranslationNamespace = keyof typeof en;

export default translations;
