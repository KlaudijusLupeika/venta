"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "lt";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Returns the English or Lithuanian string depending on current language. */
  t: (en: string, lt: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (en: string, lt: string) => (lang === "lt" ? lt : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
