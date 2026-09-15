"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { house, welcome } from "@/lib/content";
import Reveal from "./Reveal";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="shrink-0 text-accent mt-0.5">
      <path d="M3 9.5 7 13.5 15 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HouseSection() {
  const { t } = useLanguage();

  return (
    <>
      <section id="house" className="py-16 md:py-24">
        <div className="max-w-wrap mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[420px_1fr] gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="relative h-[380px] md:h-[520px] max-w-[340px] md:max-w-[420px] mx-auto md:mx-0">
              <div className="absolute top-0 left-0 w-full h-[72%] overflow-hidden bg-stone/10">
                <Image src="/images/exterior-full.jpg" alt="Venta City Apartments exterior" fill sizes="420px" className="object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-[58%] h-[42%] overflow-hidden border-4 border-linen bg-stone/10">
                <Image src="/images/exterior-detail.jpg" alt="Front entrance" fill sizes="260px" className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-stone mb-4">
              <span className="w-[22px] h-px bg-accent inline-block" />
              {t(house.eyebrow.en, house.eyebrow.lt)}
            </div>
            <h2 className="font-serif font-normal text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.01em] text-ink">
              {t(house.title.en, house.title.lt)}
            </h2>
            <p className="mt-6 text-stone leading-[1.75] max-w-[520px] mx-auto md:mx-0">{t(house.body.en, house.body.lt)}</p>
            <ul className="mt-8 space-y-4 border-t border-hairline pt-8 text-left">
              {house.features.map((f) => (
                <li key={f.en} className="flex items-start gap-3.5 text-[15px] text-ink">
                  <CheckIcon />
                  {t(f.en, f.lt)}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-wrap mx-auto px-5 md:px-8">
          <Reveal className="text-center max-w-[680px] mx-auto">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-stone mb-4">
              <span className="w-[26px] h-px bg-accent inline-block" />
              {t(welcome.eyebrow.en, welcome.eyebrow.lt)}
            </div>
            <h2 className="font-serif font-normal text-[28px] md:text-[38px] leading-[1.2] tracking-[-0.01em] text-ink">
              {t(welcome.title.en, welcome.title.lt)}
            </h2>
            <p className="mt-6 text-stone leading-[1.75]">{t(welcome.body.en, welcome.body.lt)}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
