import type { Metadata } from "next";
import { Archivo_Black, Chivo_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-chivo",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "Akinwale Jude O. | Software Engineer",
  description:
    "Portfolio of Akinwale Jude O., Software Engineer and Tech Lead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${chivoMono.variable} ${openSans.variable} antialiased`}
      >
        <div className="fixed inset-0 z-50 pointer-events-none grain-overlay"></div>
        <div className="text-accent selection:bg-accent selection:text-background">
          <TopNav />
          <main>{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
