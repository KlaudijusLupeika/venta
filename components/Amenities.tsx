"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { amenities, fullAmenities } from "@/lib/content";
import Reveal from "./Reveal";
import { Stagger, StaggerItem } from "./Stagger";
import AmenityIcon from "./AmenityIcon";

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 18 18" fill="none" className="shrink-0 text-accent mt-1">
      <path d="M3 9.5 7 13.5 15 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Amenities() {
  const { t } = useLanguage();

  return (
    <section id="amenities" className="py-16 md:py-24">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <Reveal className="max-w-[560px] mx-auto text-center md:mx-0 md:text-left">
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-stone mb-4">
            <span className="w-[22px] h-px bg-accent inline-block" />
            {t(amenities.eyebrow.en, amenities.eyebrow.lt)}
          </div>
          <h2 className="font-serif font-normal text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.01em] text-ink">
            {t(amenities.title.en, amenities.title.lt)}
          </h2>
        </Reveal>

        <Stagger className="flex flex-wrap justify-center gap-x-10 gap-y-12 mt-16">
          {amenities.items.map((item) => (
            <StaggerItem
              key={item.icon}
              className="w-full sm:flex-none sm:basis-[calc(50%-20px)] lg:basis-[calc(33.333%-26.667px)] border-t border-hairline pt-7 text-center md:text-left"
            >
              <AmenityIcon name={item.icon} className="mx-auto md:mx-0" />
              <h3 className="font-serif font-normal text-[20px] text-ink mt-5">{t(item.title.en, item.title.lt)}</h3>
              <p className="text-[14.5px] text-stone mt-2.5 leading-[1.65] max-w-[280px] mx-auto md:mx-0">
                {t(item.body.en, item.body.lt)}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20 md:mt-28 border-t border-hairline pt-14 md:pt-16">
          <Reveal className="max-w-[560px] mx-auto text-center md:mx-0 md:text-left mb-12">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-stone mb-4">
              <span className="w-[22px] h-px bg-accent inline-block" />
              {t(fullAmenities.eyebrow.en, fullAmenities.eyebrow.lt)}
            </div>
            <h3 className="font-serif font-normal text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-ink">
              {t(fullAmenities.title.en, fullAmenities.title.lt)}
            </h3>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            {fullAmenities.categories.map((cat) => (
              <StaggerItem key={cat.title.en} className="text-center md:text-left">
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-pebble mb-4">
                  {t(cat.title.en, cat.title.lt)}
                </h4>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item.en}
                      className="flex items-start justify-center md:justify-start gap-2 text-[14px] text-stone leading-[1.45]"
                    >
                      <CheckIcon />
                      <span>{t(item.en, item.lt)}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal
            delay={0.1}
            className="mt-14 pt-8 border-t border-hairline flex flex-col sm:flex-row items-center sm:justify-between gap-6 text-center sm:text-left"
          >
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-pebble">
                {t(fullAmenities.languagesHeading.en, fullAmenities.languagesHeading.lt)}
              </span>
              <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-x-1.5 gap-y-1 font-serif italic text-[16px] text-ink">
                {fullAmenities.languages.map((l, i) => (
                  <span key={l.en}>
                    {t(l.en, l.lt)}
                    {i < fullAmenities.languages.length - 1 && <span className="text-pebble not-italic">,</span>}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[13px] text-pebble max-w-[300px] leading-[1.6]">
              {t(fullAmenities.note.en, fullAmenities.note.lt)}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
