"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { goodToKnow } from "@/lib/content";
import Reveal from "./Reveal";

export default function GoodToKnow() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-linen border-b border-hairline">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <Reveal className="flex flex-col items-center text-center md:items-end md:text-left md:flex-row md:justify-between gap-6 mb-10">
          <div>
            <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-stone mb-3">
              {t(goodToKnow.eyebrow.en, goodToKnow.eyebrow.lt)}
            </div>
            <h2 className="font-serif font-normal text-[24px] md:text-[28px] leading-[1.15] text-ink">
              {t(goodToKnow.title.en, goodToKnow.title.lt)}
            </h2>
          </div>
          <p className="text-[14px] text-stone leading-[1.65] max-w-[340px]">{t(goodToKnow.note.en, goodToKnow.note.lt)}</p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-7 border-t border-hairline pt-8 text-center md:text-left"
        >
          {goodToKnow.items.map((item) => (
            <div key={item.label.en}>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-pebble">
                {t(item.label.en, item.label.lt)}
              </span>
              <span className="block mt-2 font-serif text-[16px] text-ink leading-snug">
                {t(item.value.en, item.value.lt)}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
