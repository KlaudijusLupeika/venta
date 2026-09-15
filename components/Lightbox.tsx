"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import type { RoomCard } from "@/lib/content";

interface LightboxProps {
  cards: RoomCard[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

export default function Lightbox({ cards, index, onClose, onIndexChange }: LightboxProps) {
  const { t } = useLanguage();
  const card = cards[index];

  const next = () => onIndexChange((index + 1) % cards.length);
  const prev = () => onIndexChange((index - 1 + cards.length) % cards.length);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  if (!card) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[1000] bg-ink/95 flex items-center justify-center px-4"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M6 6l14 14M20 6 6 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous"
          className="absolute left-3 md:left-8 text-white/80 hover:text-white p-3"
        >
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
            <path d="M11 3 5 9l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <motion.div
          key={card.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl"
        >
          <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden">
            <Image
              src={card.image}
              alt={t(card.caption.en, card.caption.lt)}
              fill
              sizes="90vw"
              className="object-contain bg-black"
              priority
            />
          </div>
          <div className="text-center mt-4 text-white/85 text-[15px]">
            {t(card.caption.en, card.caption.lt)} — {t(card.subcaption.en, card.subcaption.lt)}
          </div>
        </motion.div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next"
          className="absolute right-3 md:right-8 text-white/80 hover:text-white p-3"
        >
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
            <path d="M7 3l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
