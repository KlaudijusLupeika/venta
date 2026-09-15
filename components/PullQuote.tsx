"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { pullQuote, business } from "@/lib/content";
import Reveal from "./Reveal";

export default function PullQuote() {
  const { t } = useLanguage();

  return (
    <section className="bg-footer-ink text-footer-paper py-20 md:py-28 text-center overflow-hidden">
      <Reveal className="max-w-wrap mx-auto px-5">
        <span className="block w-9 h-px bg-accent mx-auto mb-9" />
        <blockquote className="font-serif italic font-normal text-[30px] sm:text-[40px] md:text-[56px] leading-[1.18] tracking-[-0.01em] text-footer-paper">
          &ldquo;{t(pullQuote.en, pullQuote.lt)}&rdquo;
        </blockquote>
        <cite className="block not-italic mt-8 text-[12px] tracking-[0.16em] uppercase text-footer-paper/50">
          {business.name}
        </cite>
      </Reveal>
    </section>
  );
}
