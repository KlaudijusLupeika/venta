"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { hero } from "@/lib/content";
import MagneticButton from "./MagneticButton";
import RatingBadge from "./RatingBadge";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero relative h-[88svh] min-h-[560px] sm:h-[100svh] sm:min-h-[640px] w-full overflow-hidden">
      <div id="top" />

      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-[-2px] scale-[1.01] bg-ink blur-[2px]"
      >
        <Image
          src="/images/front.jpg"
          alt="Venta City Apartments entrance"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

      <div className="relative z-10 h-full max-w-wrap mx-auto px-5 md:px-8 flex flex-col justify-end pb-16 pt-[60px] md:pb-32 md:pt-[160px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[760px] flex flex-col items-center text-center md:items-start md:text-left"
        >
          <h1 className="font-serif font-normal leading-[1.03] tracking-[-0.02em] text-[42px] sm:text-[56px] md:text-[76px] lg:text-[88px] text-white pr-2">
            {t(hero.title.line1.en, hero.title.line1.lt)}
            <br />
            {hero.title.line2.en && <>{t(hero.title.line2.en, hero.title.line2.lt)} </>}
            <em className="italic text-accent font-normal pr-1">
              {t(hero.title.emphasis.en, hero.title.emphasis.lt)}
            </em>
          </h1>

          <p className="text-[16px] md:text-[18px] text-white/75 max-w-[480px] mt-7 mb-8 leading-[1.65]">
            {t(hero.sub.en, hero.sub.lt)}
          </p>

          <div className="flex flex-col w-fit gap-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <RatingBadge variant="hero" />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <MagneticButton
                href="#contact"
                variant="ghost"
                className="w-full !border-white/40 !bg-transparent !text-white !px-5 !py-2.5 !text-[12px] !tracking-[0.12em] hover:!bg-white hover:!text-ink"
              >
                {t(hero.ctaPrimary.en, hero.ctaPrimary.lt)}
              </MagneticButton>
              <MagneticButton
                href="#rooms"
                variant="ghost"
                className="w-full !border-white/40 !bg-transparent !text-white !px-5 !py-2.5 !text-[12px] !tracking-[0.12em] hover:!bg-white hover:!text-ink"
              >
                {t(hero.ctaGhost.en, hero.ctaGhost.lt)}
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
