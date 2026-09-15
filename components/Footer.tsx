"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { footer, nav, business } from "@/lib/content";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-footer-ink text-footer-paper pt-20 pb-8">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row justify-between gap-14 pb-14 border-b border-white/10">
          <div>
            <div className="flex items-baseline justify-center md:justify-start gap-2 font-serif text-[21px]">
              <span className="font-medium">Venta City</span>
              <span className="text-[11px] font-sans uppercase tracking-[0.16em] text-footer-paper/50">Apartments</span>
            </div>
            <p className="mt-4 font-serif italic text-footer-paper/55 max-w-[280px] mx-auto md:mx-0 leading-[1.5]">
              &ldquo;{t(footer.tagline.en, footer.tagline.lt)}&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-12 md:gap-20">
            <div>
              <h4 className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-footer-paper/40 mb-4">
                {t(footer.explore.en, footer.explore.lt)}
              </h4>
              <div className="flex flex-col items-center md:items-start gap-3 text-[14.5px] text-footer-paper/75">
                {nav.slice(0, 3).map((n) => (
                  <a key={n.href} href={n.href} className="underline-grow hover:text-footer-paper transition-colors">
                    {t(n.label.en, n.label.lt)}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-footer-paper/40 mb-4">
                {t(footer.visit.en, footer.visit.lt)}
              </h4>
              <div className="flex flex-col gap-3 text-[14.5px] text-footer-paper/75">
                <span>Stoties g. 36</span>
                <span>Venta, Lietuva</span>
              </div>
            </div>
            <div>
              <h4 className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-footer-paper/40 mb-4">
                {t(footer.contactHeading.en, footer.contactHeading.lt)}
              </h4>
              <div className="flex flex-col items-center md:items-start gap-3 text-[14.5px] text-footer-paper/75">
                <a href={`mailto:${business.email}`} className="underline-grow hover:text-footer-paper transition-colors">
                  {business.email}
                </a>
                <a href="#contact" className="underline-grow hover:text-footer-paper transition-colors">
                  {t(footer.checkAvailability.en, footer.checkAvailability.lt)}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-center text-[12px] text-footer-paper/35">
          <span>{footer.copyright}</span>
          <span>{t(footer.madeWith.en, footer.madeWith.lt)}</span>
        </div>
      </div>
    </footer>
  );
}
