"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

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

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "lt"
      ? "Venta City Apartments — poilsis Ventoje, Lietuvoje"
      : "Venta City Apartments — Whole House Rental in Venta, Lithuania";

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      lang === "lt"
        ? "Visas namas jūsų poilsiui Ventoje. Keturi miegamieji, dvi svetainės, sodas ir saugi automobilių stovėjimo vieta netoli miesto centro."
        : "A whole house to yourselves in Venta, Lithuania. Four bedrooms, two living rooms, a garden, secure parking — walking distance to the town centre."
    );
  }, [lang]);

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
