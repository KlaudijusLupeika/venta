"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { usePropertyTab, type PropertyKey } from "@/lib/PropertyTabContext";
import { propertyTabs } from "@/lib/content";

const KEYS: PropertyKey[] = ["apartment", "flat"];

export default function PropertyTabs() {
  const { t } = useLanguage();
  const { active, setActive } = usePropertyTab();

  return (
    <div className="sticky top-[64px] md:top-[72px] z-[400]">
      <div className="bg-paper/95 backdrop-blur-md border-b border-hairline">
        <div className="max-w-wrap mx-auto px-5 md:px-8 grid grid-cols-2">
          {KEYS.map((key) => {
            const tab = propertyTabs[key];
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                aria-current={isActive}
                className="group relative flex items-center justify-center gap-3 py-4 md:py-5 transition-colors"
              >
                <div
                  className={`relative w-9 h-9 md:w-11 md:h-11 rounded-sm overflow-hidden shrink-0 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-45 group-hover:opacity-75"
                  }`}
                >
                  <Image src={tab.thumb} alt={t(tab.name.en, tab.name.lt)} fill sizes="44px" quality={90} className="object-cover" />
                </div>
                <div className="text-left">
                  <span
                    className={`block font-serif text-[14px] sm:text-[16px] md:text-[18px] leading-tight transition-colors ${
                      isActive ? "text-ink" : "text-pebble group-hover:text-stone"
                    }`}
                  >
                    {t(tab.name.en, tab.name.lt)}
                  </span>
                  <span
                    className={`hidden sm:block text-[10.5px] uppercase tracking-[0.06em] mt-0.5 transition-colors ${
                      isActive ? "text-stone" : "text-pebble/60"
                    }`}
                  >
                    {t(tab.tagline.en, tab.tagline.lt)}
                  </span>
                </div>
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-center transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
