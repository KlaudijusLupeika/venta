"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { rooms, roomCards, roomFilters, type RoomCategory } from "@/lib/content";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import Lightbox from "./Lightbox";

type FilterKey = "all" | RoomCategory;

export default function RoomsGallery() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? roomCards : roomCards.filter((c) => c.category === filter)),
    [filter]
  );

  function openLightbox(id: string) {
    const idx = visible.findIndex((c) => c.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  }

  return (
    <section id="rooms" className="py-16 md:py-24 bg-paper">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center md:items-end md:text-left md:flex-row md:justify-between gap-8 mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-stone mb-4">
              <span className="w-[22px] h-px bg-accent inline-block" />
              {t(rooms.eyebrow.en, rooms.eyebrow.lt)}
            </div>
            <h2 className="font-serif font-normal text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.01em] text-ink">
              {t(rooms.title.en, rooms.title.lt)}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 md:pb-2">
            {roomFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`underline-grow text-[12.5px] font-semibold uppercase tracking-[0.1em] pb-0.5 transition-colors ${
                  filter === f.key ? "text-ink" : "text-pebble hover:text-ink"
                }`}
              >
                {t(f.label.en, f.label.lt)}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <AnimatePresence>
            {visible.map((card, i) => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="w-full sm:flex-none sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-13.333px)]"
              >
                <TiltCard
                  onClick={() => openLightbox(card.id)}
                  className="relative overflow-hidden cursor-pointer bg-paper border border-hairline group"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone/10">
                    <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-transparent z-[1]" />
                    <Image
                      src={card.image}
                      alt={t(card.caption.en, card.caption.lt)}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <b className="block text-[15px] text-ink font-medium">{t(card.caption.en, card.caption.lt)}</b>
                    <span className="block text-[13px] text-stone mt-1">
                      {t(card.subcaption.en, card.subcaption.lt)}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          cards={visible}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
}
