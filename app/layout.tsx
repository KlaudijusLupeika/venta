import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { PropertyTabProvider } from "@/lib/PropertyTabContext";
import { business } from "@/lib/content";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
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
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans overflow-x-hidden">
        <LanguageProvider>
          <PropertyTabProvider>
            <SmoothScroll />
            <div className="grain" aria-hidden="true" />
            {children}
          </PropertyTabProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
