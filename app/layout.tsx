import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { PropertyTabProvider } from "@/lib/PropertyTabContext";
import { business } from "@/lib/content";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: `${business.name} — Whole House Rental in Venta, Lithuania`,
  description:
    "A whole house to yourselves in Venta, Lithuania. Four bedrooms, two living rooms, a garden, secure parking — walking distance to the town centre.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
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
