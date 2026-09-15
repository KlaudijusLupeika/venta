"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { nav } from "@/lib/content";

const SECTION_IDS = nav.map((n) => n.href.replace("#", ""));

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(SECTION_IDS[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);

      const pos = window.scrollY + 160;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ${
          solid ? "bg-linen/95 backdrop-blur-md border-b border-hairline" : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-wrap mx-auto px-5 md:px-8 h-[76px] md:h-[88px] flex items-center justify-between gap-4">
          <a
            href="#top"
            className={`flex items-baseline gap-2 font-serif text-[18px] sm:text-[19px] tracking-[-0.01em] transition-colors shrink-0 ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            <span className="font-medium">Venta City</span>
            <span className={`hidden sm:inline text-[11px] font-sans uppercase tracking-[0.16em] ${solid ? "text-stone" : "text-white/60"}`}>
              Apartments
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {nav.map((n) => {
              const id = n.href.replace("#", "");
              return (
                <a
                  key={n.href}
                  href={n.href}
                  className={`underline-grow text-[13px] font-medium uppercase tracking-[0.08em] whitespace-nowrap transition-colors ${
                    solid
                      ? active === id
                        ? "text-ink"
                        : "text-stone hover:text-ink"
                      : active === id
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {t(n.label.en, n.label.lt)}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 shrink-0">
            <div
              className={`flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] transition-colors ${
                solid ? "text-stone" : "text-white/70"
              }`}
            >
              <button
                onClick={() => setLang("en")}
                aria-label="English"
                className={lang === "en" ? (solid ? "text-ink" : "text-white") : ""}
              >
                EN
              </button>
              <span className="opacity-40">/</span>
              <button
                onClick={() => setLang("lt")}
                aria-label="Lietuviškai"
                className={lang === "lt" ? (solid ? "text-ink" : "text-white") : ""}
              >
                LT
              </button>
            </div>
            <a
              href="#contact"
              className={`hidden sm:inline-flex items-center rounded-sm px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap transition-colors ${
                solid ? "bg-ink text-paper hover:bg-accent-deep" : "border border-white/40 text-white hover:bg-white hover:text-ink"
              }`}
            >
              {t("Book Now", "Rezervuoti")}
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              className={`flex lg:hidden p-2 -mr-2 transition-colors ${solid ? "text-ink" : "text-white"}`}
            >
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                <path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[490] flex flex-col items-center justify-center gap-7 bg-linen lg:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl text-ink"
            >
              {t(n.label.en, n.label.lt)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-sm bg-ink text-paper px-8 py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.12em]"
          >
            {t("Book Now", "Rezervuoti")}
          </a>
          <div className="mt-6 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.08em]">
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-ink" : "text-stone"}
            >
              EN
            </button>
            <span className="opacity-40">/</span>
            <button
              onClick={() => setLang("lt")}
              className={lang === "lt" ? "text-ink" : "text-stone"}
            >
              LT
            </button>
          </div>
        </div>
      )}
    </>
  );
}
