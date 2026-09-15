"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { rating, testimonials } from "@/lib/content";
import Reveal from "./Reveal";
import { Stagger, StaggerItem } from "./Stagger";
import RatingBadge from "./RatingBadge";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-16 md:py-24 bg-paper">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center md:items-end md:text-left md:flex-row md:justify-between gap-8 mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-stone mb-4">
              <span className="w-[22px] h-px bg-accent inline-block" />
              {t(rating.sectionEyebrow.en, rating.sectionEyebrow.lt)}
            </div>
            <h2 className="font-serif font-normal text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.01em] text-ink">
              {t(rating.sectionTitle.en, rating.sectionTitle.lt)}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col sm:flex-row items-center gap-6">
            <RatingBadge />
            <div className="hidden lg:flex flex-col gap-1.5 border-l border-hairline pl-8 text-[12px] text-stone">
              {rating.categories.slice(0, 3).map((c) => (
                <div key={c.label.en} className="flex items-center justify-between gap-6 w-[190px]">
                  <span>{t(c.label.en, c.label.lt)}</span>
                  <span className="num text-ink font-medium">{c.score}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {testimonials.map((item) => (
            <StaggerItem key={item.id} className="border-t border-hairline pt-7 text-center md:text-left">
              <p className="font-serif italic font-normal text-[17px] text-ink leading-[1.55]">
                &ldquo;{t(item.quote.en, item.quote.lt)}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-[13px]">
                <span className="font-semibold text-ink">{item.name}</span>
                <span className="text-pebble">·</span>
                <span className="text-stone">{t(item.country.en, item.country.lt)}</span>
              </div>
              <div className="text-[12px] text-pebble mt-1">{t(item.stay.en, item.stay.lt)}</div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-16 text-center">
          <a
            href={rating.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-grow inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-ink"
          >
            {t(rating.readAll.en, rating.readAll.lt)}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
