"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { contact, business, rating } from "@/lib/content";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-24 bg-paper">
      <div className="max-w-wrap mx-auto px-5 md:px-8">
        <Reveal className="text-center max-w-[620px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-stone mb-4">
            <span className="w-[22px] h-px bg-accent inline-block" />
            {t(contact.eyebrow.en, contact.eyebrow.lt)}
          </div>
          <h2 className="font-serif font-normal text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.01em] text-ink">
            {t(contact.title.en, contact.title.lt)}
          </h2>
          <p className="mt-6 text-stone leading-[1.75]">{t(contact.body.en, contact.body.lt)}</p>
        </Reveal>

        <div className="mt-14 max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.2} className="border border-hairline bg-linen p-8 text-center md:text-left">
            <h3 className="font-serif font-normal text-[20px] text-ink mb-2">{business.name}</h3>
            <p className="text-stone text-[14.5px] leading-[1.6]">{business.address}</p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center justify-center md:justify-start gap-2.5 border border-hairline px-4 py-3 text-[13px] font-medium text-stone hover:border-ink hover:text-ink transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 17 17" fill="none" className="shrink-0">
                  <rect x="1.5" y="3.5" width="14" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M2 4.5 8.5 10 15 4.5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                <span className="truncate">{business.email}</span>
              </a>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center md:justify-start gap-2.5 border border-hairline px-4 py-3 text-[13px] font-medium text-stone hover:border-ink hover:text-ink transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 17 17" fill="none" className="shrink-0">
                  <path
                    d="M3 2.5h3l1.4 3.4-2 1.4a9 9 0 0 0 4.3 4.3l1.4-2 3.4 1.4v3a1.3 1.3 0 0 1-1.4 1.3A12.5 12.5 0 0 1 2 4a1.3 1.3 0 0 1 1-1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
                {t(contact.callWhatsapp.en, contact.callWhatsapp.lt)}
              </a>
              <a
                href={rating.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center md:justify-start gap-2.5 border border-hairline px-4 py-3 text-[13px] text-stone hover:border-ink hover:text-ink transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 17 17" fill="none" className="shrink-0">
                  <rect x="2" y="4" width="13" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M2 6.5h13" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                Booking.com
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
