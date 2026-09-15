"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { location, business } from "@/lib/content";
import Reveal from "./Reveal";

const rowIcons = [
  <svg key="house" width="17" height="17" viewBox="0 0 18 18" fill="none">
    <path d="M4 15V8l5-4 5 4v7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7 15v-4h4v4" stroke="currentColor" strokeWidth="1.4" />
  </svg>,
  <svg key="river" width="17" height="17" viewBox="0 0 18 18" fill="none">
    <path d="M2 10c2-2 3 1.4 5 0s3 1.4 5 0s4-.6 4-.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M2 13.5c2-2 3 1.4 5 0s3 1.4 5 0s4-.6 4-.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg key="parking" width="17" height="17" viewBox="0 0 18 18" fill="none">
    <rect x="2.5" y="4.5" width="13" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M6 7h3.2a1.9 1.9 0 0 1 0 3.8H6V7Z" stroke="currentColor" strokeWidth="1.4" />
  </svg>,
];

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-16 md:py-24 bg-footer-ink text-footer-paper">
      <div className="max-w-wrap mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        <Reveal className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-footer-paper/50 mb-4">
            <span className="w-[22px] h-px bg-accent inline-block" />
            {t(location.eyebrow.en, location.eyebrow.lt)}
          </div>
          <h2 className="font-serif font-normal text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.01em] text-footer-paper">
            {t(location.title.en, location.title.lt)}
          </h2>
          <p className="mt-6 max-w-[420px] mx-auto md:mx-0 leading-[1.75] text-footer-paper/65">
            {t(location.body.en, location.body.lt)}
          </p>

          <div className="mt-10 max-w-[420px] mx-auto md:mx-0">
            <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-footer-paper/40">
              {t(location.nearbyHeading.en, location.nearbyHeading.lt)}
            </span>
            <div className="mt-4 space-y-0">
              {location.nearby.map((n) => (
                <div
                  key={n.label.en}
                  className="flex items-baseline justify-between gap-4 text-[14.5px] text-footer-paper/70 border-t border-white/10 py-3 first:border-t-0"
                >
                  <span>{t(n.label.en, n.label.lt)}</span>
                  <span className="num text-footer-paper/45 whitespace-nowrap">{n.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="text-center md:text-left">
          <div className="relative h-[220px] md:h-[280px] overflow-hidden border border-white/10 bg-[#1a1812] grayscale-[0.3] contrast-[1.05] mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1158.957645101848!2d22.687126940253332!3d56.19078921771957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e588afc343b093%3A0xe078a0d1fdc7aee3!2sStoties%20g.%2036%2C%20Venta%2C%2085309%20Akmen%C4%97s%20r.%20sav.!5e1!3m2!1sen!2slt!4v1789451567938!5m2!1sen!2slt"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Venta City Apartments location"
            />
          </div>

          <div className="border border-white/10 p-8 md:p-10">
            <div className="font-serif text-[22px] leading-snug mb-6">
              Stoties g. 36
              <br />
              Venta, Lietuva
            </div>
            <div className="space-y-4">
              {location.rows.map((r, i) => (
                <div
                  key={r.en}
                  className="flex items-center justify-center md:justify-start gap-3.5 text-[14.5px] text-footer-paper/75 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <span className="text-accent">{rowIcons[i]}</span>
                  <span>{t(r.en, r.lt)}</span>
                </div>
              ))}
            </div>
            <a
              href={business.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-grow mt-8 inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-footer-paper hover:text-white transition-colors"
            >
              {t(location.directions.en, location.directions.lt)}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
