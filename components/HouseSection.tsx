"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { house, welcome, hero } from "@/lib/content";
import Reveal from "./Reveal";
import RatingBadge from "./RatingBadge";
import MagneticButton from "./MagneticButton";

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
      <section id="apartment" className="py-16 md:py-24">
        <div className="max-w-wrap mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative h-[380px] md:h-[520px] max-w-[340px] md:max-w-[420px] mx-auto lg:mx-0">
              <div className="absolute top-0 left-0 w-full h-[72%] overflow-hidden bg-stone/10">
                <Image src="/images/house-exterior-hq.jpg" alt="Venta City Apartments exterior" fill sizes="420px" quality={90} className="object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-[58%] h-[42%] overflow-hidden border-4 border-linen bg-stone/10">
                <Image
                  src="/images/dining.jpg"
                  alt="Dining area"
                  fill
                  sizes="260px"
                  quality={90}
                  className="object-cover"
                  style={{ objectPosition: "50% 68%" }}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="min-w-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-stone mb-4">
              <span className="w-[22px] h-px bg-accent inline-block" />
              {t(house.eyebrow.en, house.eyebrow.lt)}
            </div>
            <h2 className="font-serif font-normal text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.01em] text-ink">
              {t(house.title.en, house.title.lt)}
            </h2>
            <p className="mt-6 text-stone leading-[1.75] max-w-[520px] mx-auto lg:mx-0">{t(house.body.en, house.body.lt)}</p>

            <div className="mt-8 flex flex-col xl:flex-row items-stretch justify-center lg:justify-start gap-5">
              <RatingBadge />
              <div className="flex xl:flex-col gap-2.5">
                <MagneticButton href="#contact" variant="primary" className="flex-1 !px-6 !py-3 xl:!py-0 !text-[11px] !tracking-[0.12em]">
                  {t(hero.ctaPrimary.en, hero.ctaPrimary.lt)}
                </MagneticButton>
                <MagneticButton href="#rooms" variant="ghost" className="flex-1 !px-6 !py-3 xl:!py-0 !text-[11px] !tracking-[0.12em]">
                  {t(hero.ctaGhost.en, hero.ctaGhost.lt)}
                </MagneticButton>
              </div>
            </div>

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
