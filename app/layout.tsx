import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { business } from "@/lib/content";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${business.name} — Whole House Rental in Venta, Lithuania`,
  description:
    "A whole house to yourselves in Venta, Lithuania. Four bedrooms, two living rooms, a garden, secure parking — walking distance to the town centre.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-sans overflow-x-hidden">
        <LanguageProvider>
          <SmoothScroll />
          <div className="grain" aria-hidden="true" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
