"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { flatAbout, flatHero } from "@/lib/content";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="shrink-0 text-accent mt-0.5">
      <path d="M3 9.5 7 13.5 15 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FlatAbout() {
  const { t } = useLanguage();

  return (
    <section id="flat" className="py-16 md:py-24">
      <div className="max-w-wrap mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[420px_1fr] gap-12 md:gap-20 items-center">
        <Reveal>
          <div className="relative h-[380px] md:h-[520px] max-w-[340px] md:max-w-[420px] mx-auto md:mx-0">
            <div className="absolute top-0 left-0 w-full h-[72%] overflow-hidden bg-stone/10">
              <Image src="/images/flat-living-room-2.jpg" alt="Modern Flat — living room" fill sizes="420px" quality={90} className="object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-[58%] h-[42%] overflow-hidden border-4 border-linen bg-stone/10">
              <Image src="/images/flat-bathroom-2.jpg" alt="Modern Flat — bathroom" fill sizes="260px" quality={90} className="object-cover" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-stone mb-4">
            <span className="w-[22px] h-px bg-accent inline-block" />
            {t(flatAbout.eyebrow.en, flatAbout.eyebrow.lt)}
          </div>
          <h2 className="font-serif font-normal text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.01em] text-ink">
            {t(flatAbout.title.en, flatAbout.title.lt)}
          </h2>
          <p className="mt-6 text-stone leading-[1.75] max-w-[520px] mx-auto md:mx-0">{t(flatAbout.body.en, flatAbout.body.lt)}</p>

          <div className="mt-8 flex justify-center md:justify-start gap-3">
            <MagneticButton href="#contact" variant="primary">
              {t(flatHero.ctaPrimary.en, flatHero.ctaPrimary.lt)}
            </MagneticButton>
            <MagneticButton href="#flat-rooms" variant="ghost">
              {t(flatHero.ctaGhost.en, flatHero.ctaGhost.lt)}
            </MagneticButton>
          </div>

          <ul className="mt-8 space-y-4 border-t border-hairline pt-8 text-left">
            {flatAbout.features.map((f) => (
              <li key={f.en} className="flex items-start gap-3.5 text-[15px] text-ink">
                <CheckIcon />
                {t(f.en, f.lt)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
