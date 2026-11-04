"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { flatLocation } from "@/lib/content";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function FlatLocation() {
  const { t } = useLanguage();

  return (
    <section id="flat-location" className="py-16 md:py-24 bg-footer-ink text-footer-paper">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <Reveal className="text-center max-w-[560px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-footer-paper/50 mb-4">
            <span className="w-[22px] h-px bg-accent inline-block" />
            {t(flatLocation.eyebrow.en, flatLocation.eyebrow.lt)}
          </div>
          <h2 className="font-serif font-normal text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.01em] text-footer-paper">
            {t(flatLocation.title.en, flatLocation.title.lt)}
          </h2>
          <p className="mt-6 leading-[1.75] text-footer-paper/65">{t(flatLocation.body.en, flatLocation.body.lt)}</p>

          <div className="mt-9">
            <MagneticButton href="#contact" variant="ghost" className="!border-white/40 !text-footer-paper hover:!bg-white hover:!text-footer-ink">
              {t(flatLocation.cta.en, flatLocation.cta.lt)}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
