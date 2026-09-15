"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { rating } from "@/lib/content";

/** The "10 / Exceptional / 23 reviews" card — reused wherever the Booking.com score appears. */
export default function RatingBadge({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "hero";
}) {
  const { t } = useLanguage();
  const isHero = variant === "hero";

  return (
    <a
      href={rating.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-center gap-5 rounded-sm border pl-6 pr-7 py-5 transition-colors duration-300 ${
        isHero
          ? "border-white/40 bg-transparent hover:bg-white"
          : "border-hairline bg-white hover:bg-white shadow-[0_6px_16px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_38px_-16px_rgba(0,0,0,0.35)]"
      } ${className}`}
    >
      <div className="flex items-baseline shrink-0">
        <span className={`font-serif text-[52px] leading-none ${isHero ? "text-white group-hover:text-ink" : "text-ink"}`}>{rating.score}</span>
        <span className={`font-serif text-[22px] leading-none ${isHero ? "text-white/60 group-hover:text-pebble" : "text-pebble"}`}>/10</span>
      </div>
      <span className={`w-px h-12 shrink-0 ${isHero ? "bg-white/30 group-hover:bg-hairline" : "bg-hairline"}`} />
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 shrink-0">
            <svg width="13" height="13" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 5.2 4 7.7l4.5-5.4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className={`text-[18px] font-semibold whitespace-nowrap ${isHero ? "text-white group-hover:text-ink" : "text-ink"}`}>
            {t(rating.scoreLabel.en, rating.scoreLabel.lt)}
          </span>
        </div>
        <span className={`text-[13px] leading-snug whitespace-nowrap ${isHero ? "text-white/70 group-hover:text-stone" : "text-stone"}`}>
          {t(rating.reviewsLabel.en, rating.reviewsLabel.lt)}
        </span>
      </div>
    </a>
  );
}
