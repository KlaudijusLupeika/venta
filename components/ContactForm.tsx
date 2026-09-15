"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { contact } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "peer w-full bg-transparent border-b border-hairline focus:border-ink outline-none transition-colors text-[15px] text-ink placeholder:text-pebble py-2.5 disabled:opacity-50";
const labelClass = "block text-[11.5px] font-semibold uppercase tracking-[0.1em] text-stone mb-2";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const f = contact.form;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle" && status !== "error") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      });

      if (!response.ok) throw new Error("Contact form submission failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    formRef.current?.reset();
    setStatus("idle");
  }

  return (
    <div className="relative border border-hairline bg-paper p-8 md:p-11 min-h-[480px]">
      <AnimatePresence mode="wait">
        {status !== "sent" ? (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={handleSubmit}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-7"
          >
            <h3 className="font-serif font-normal text-[22px] md:text-[24px] text-ink mb-1 text-center md:text-left">
              {t(f.heading.en, f.heading.lt)}
            </h3>

            <div>
              <label htmlFor="cf-name" className={labelClass}>
                {t(f.name.en, f.name.lt)}
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                disabled={status === "sending"}
                placeholder={t(f.namePlaceholder.en, f.namePlaceholder.lt)}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="cf-contact" className={labelClass}>
                {t(f.contact.en, f.contact.lt)}
              </label>
              <input
                id="cf-contact"
                name="contact"
                type="text"
                required
                disabled={status === "sending"}
                placeholder={t(f.contactPlaceholder.en, f.contactPlaceholder.lt)}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="cf-message" className={labelClass}>
                {t(f.message.en, f.message.lt)}
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={4}
                required
                disabled={status === "sending"}
                placeholder={t(f.messagePlaceholder.en, f.messagePlaceholder.lt)}
                className={`${fieldClass} resize-none`}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={status === "idle" ? { scale: 1.03 } : {}}
              whileTap={status === "idle" ? { scale: 0.96 } : {}}
              transition={{ scale: { type: "spring", stiffness: 400, damping: 9 } }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-sm bg-ink text-paper px-8 py-4 text-[12.5px] font-semibold uppercase tracking-[0.14em] hover:bg-accent-deep transition-colors disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <motion.span
                    className="w-3.5 h-3.5 rounded-full border-[1.5px] border-paper/40 border-t-paper inline-block"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                  />
                  {t(f.sending.en, f.sending.lt)}
                </>
              ) : (
                t(f.send.en, f.send.lt)
              )}
            </motion.button>
            {status === "error" && (
              <p role="alert" className="text-[13px] text-red-700 mt-4">
                {t("Something went wrong. Please try again.", "Nepavyko išsiųsti. Bandykite dar kartą.")}
              </p>
            )}
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
          >
            <motion.svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              initial="hidden"
              animate="visible"
            >
              <motion.circle
                cx="28"
                cy="28"
                r="26"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-emerald-500"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
              />
              <motion.path
                d="M17 28.5 24.5 36 39 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-500"
                variants={{
                  hidden: { pathLength: 0 },
                  visible: { pathLength: 1, transition: { duration: 0.45, delay: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
              />
            </motion.svg>

            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="font-serif font-normal text-[22px] md:text-[24px] text-ink mt-6"
            >
              {t(f.successTitle.en, f.successTitle.lt)}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="text-stone mt-2 max-w-[280px]"
            >
              {t(f.successBody.en, f.successBody.lt)}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              onClick={reset}
              className="underline-grow mt-8 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-ink"
            >
              {t(f.sendAnother.en, f.sendAnother.lt)}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
