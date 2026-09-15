"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { marqueeItems } from "@/lib/content";

export default function Marquee() {
  const { t } = useLanguage();
  const items = [...marqueeItems, ...marqueeItems]; // duplicated for a seamless loop

  return (
    <div className="border-b border-hairline bg-linen overflow-hidden py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap px-6 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-stone"
          >
            {t(item.en, item.lt)}
            <span className="ml-6 w-1 h-1 rounded-full bg-accent inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
