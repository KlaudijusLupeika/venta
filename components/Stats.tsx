"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { stats, hero } from "@/lib/content";
import Reveal from "./Reveal";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    let raf: number;
    let start: number | null = null;
    const duration = 1100;

    function step(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduceMotion, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="stats bg-ink text-white">
      <Reveal
        as="div"
        className="max-w-wrap mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center py-10 md:py-0"
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 text-center md:text-left md:justify-start md:border-r md:border-white/10 md:py-12 md:pr-12">
          {stats.map((s) => (
            <div
              key={s.label.en}
              className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(20%-19.2px)]"
            >
              <b className="num block font-serif font-normal text-white text-[30px] md:text-[38px]">
                <CountUp target={s.value} suffix={s.suffix} />
              </b>
              <span className="block mt-1.5 text-[11.5px] text-white/50 tracking-[0.06em] uppercase">
                {t(s.label.en, s.label.lt)}
              </span>
            </div>
          ))}
        </div>
        <div className="font-serif italic text-[18px] md:text-[20px] text-white/80 max-w-[280px] mx-auto md:mx-0 text-center md:text-left leading-[1.5]">
          {t(hero.tagline.en, hero.tagline.lt)}
        </div>
      </Reveal>
    </section>
  );
}
