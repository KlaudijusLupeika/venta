"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { comparison, type Bi } from "@/lib/content";
import Reveal from "./Reveal";
import { Stagger, StaggerItem } from "./Stagger";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" className="shrink-0 text-accent mt-0.5">
      <path d="M3 9.5 7 13.5 15 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function isBi(value: string | Bi): value is Bi {
  return typeof value === "object";
}

export default function Comparison() {
  const { t } = useLanguage();

  return (
    <section id="compare" className="py-16 md:py-24 bg-linen border-y border-hairline">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <Reveal className="text-center max-w-[620px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-stone mb-4">
            <span className="w-[22px] h-px bg-accent inline-block" />
            {t(comparison.eyebrow.en, comparison.eyebrow.lt)}
          </div>
          <h2 className="font-serif font-normal text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.01em] text-ink">
            {t(comparison.title.en, comparison.title.lt)}
          </h2>
          <p className="mt-5 text-stone leading-[1.7]">{t(comparison.intro.en, comparison.intro.lt)}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 max-w-[780px] mx-auto">
          <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-x-2 sm:gap-x-6 pb-4 border-b border-hairline">
            <span />
            <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-ink text-center">
              {comparison.columns.apartment}
            </span>
            <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-ink text-center">
              {comparison.columns.flat}
            </span>
          </div>

          {comparison.rows.map((row) => (
            <div
              key={row.label.en}
              className="grid grid-cols-[1.1fr_1fr_1fr] gap-x-2 sm:gap-x-6 py-4 border-b border-hairline items-center"
            >
              <span className="text-[12.5px] sm:text-[14px] font-medium text-stone">{t(row.label.en, row.label.lt)}</span>
              <span className="text-[12.5px] sm:text-[14px] text-ink text-center leading-snug">
                {isBi(row.apartment) ? t(row.apartment.en, row.apartment.lt) : row.apartment}
              </span>
              <span className="text-[12.5px] sm:text-[14px] text-ink text-center leading-snug">
                {isBi(row.flat) ? t(row.flat.en, row.flat.lt) : row.flat}
              </span>
            </div>
          ))}
        </Reveal>

        <Stagger className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 max-w-[780px] mx-auto">
          <StaggerItem className="border-t border-hairline pt-7 text-center sm:text-left">
            <h3 className="font-serif font-normal text-[20px] text-ink mb-4">
              {t(comparison.pros.apartment.title.en, comparison.pros.apartment.title.lt)}
            </h3>
            <ul className="space-y-2.5">
              {comparison.pros.apartment.items.map((item) => (
                <li key={item.en} className="flex items-start justify-center sm:justify-start gap-2 text-[14px] text-stone leading-[1.5]">
                  <CheckIcon />
                  <span>{t(item.en, item.lt)}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="border-t border-hairline pt-7 text-center sm:text-left">
            <h3 className="font-serif font-normal text-[20px] text-ink mb-4">
              {t(comparison.pros.flat.title.en, comparison.pros.flat.title.lt)}
            </h3>
            <ul className="space-y-2.5">
              {comparison.pros.flat.items.map((item) => (
                <li key={item.en} className="flex items-start justify-center sm:justify-start gap-2 text-[14px] text-stone leading-[1.5]">
                  <CheckIcon />
                  <span>{t(item.en, item.lt)}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
