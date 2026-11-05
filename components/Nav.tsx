"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { usePropertyTab } from "@/lib/PropertyTabContext";
import { nav } from "@/lib/content";
import Logo from "./Logo";

const SECTION_IDS = nav.map((n) => n.href.replace("#", ""));

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const { setActive: setActiveProperty } = usePropertyTab();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(SECTION_IDS[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);

      // Pick whichever tracked section sits furthest down the page while still
      // starting above the scroll position — independent of nav array order, since
      // sections don't necessarily appear on the page in the same order as the nav.
      const pos = window.scrollY + 160;
      let current = "";
      let currentTop = -Infinity;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos && el.offsetTop > currentTop) {
          current = id;
          currentTop = el.offsetTop;
        }
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

  // No full-bleed dark hero sits behind the nav anymore (the page opens straight into
  // the light property tabs), so the header is always solid/light — only the subtle
  // shadow/border react to scroll.
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[500] bg-linen/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled || menuOpen ? "border-b border-hairline shadow-[0_1px_0_rgba(0,0,0,0.02)]" : "border-b border-transparent"
        }`}
      >
        <nav className="max-w-wrap mx-auto px-5 md:px-8 h-[64px] md:h-[72px] flex items-center justify-between gap-4">
          <a href="#top" onClick={() => setActiveProperty("apartment")} className="shrink-0">
            <Logo size="sm" theme="light" />
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {nav.map((n) => {
              const id = n.href.replace("#", "");
              return (
                <a
                  key={n.href}
                  href={n.href}
                  className={`underline-grow text-[13px] font-medium uppercase tracking-[0.08em] whitespace-nowrap transition-colors ${
                    active === id ? "text-ink" : "text-stone hover:text-ink"
                  }`}
                >
                  {t(n.label.en, n.label.lt)}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 shrink-0">
            <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] text-stone">
              <button
                onClick={() => setLang("en")}
                aria-label={t("English", "Anglų kalba")}
                aria-pressed={lang === "en"}
                className={lang === "en" ? "text-ink" : ""}
              >
                EN
              </button>
              <span className="opacity-40">/</span>
              <button
                onClick={() => setLang("lt")}
                aria-label={t("Lithuanian", "Lietuvių kalba")}
                aria-pressed={lang === "lt"}
                className={lang === "lt" ? "text-ink" : ""}
              >
                LT
              </button>
            </div>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-sm px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap bg-ink text-paper hover:bg-accent-deep transition-colors"
            >
              {t("Book Now", "Rezervuoti")}
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={t("Menu", "Meniu")}
              className="flex lg:hidden p-2 -mr-2 text-ink"
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
              aria-label={t("English", "Anglų kalba")}
              aria-pressed={lang === "en"}
              className={lang === "en" ? "text-ink" : "text-stone"}
            >
              EN
            </button>
            <span className="opacity-40">/</span>
            <button
              onClick={() => setLang("lt")}
              aria-label={t("Lithuanian", "Lietuvių kalba")}
              aria-pressed={lang === "lt"}
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
