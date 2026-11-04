"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type PropertyKey = "apartment" | "flat";

interface PropertyTabContextValue {
  active: PropertyKey;
  setActive: (key: PropertyKey) => void;
}

const PropertyTabContext = createContext<PropertyTabContextValue | undefined>(undefined);

export function PropertyTabProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<PropertyKey>("apartment");

  return (
    <PropertyTabContext.Provider value={{ active, setActive }}>
      {children}
    </PropertyTabContext.Provider>
  );
}

export function usePropertyTab() {
  const ctx = useContext(PropertyTabContext);
  if (!ctx) {
    throw new Error("usePropertyTab must be used within a PropertyTabProvider");
  }
  return ctx;
}
