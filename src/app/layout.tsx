import type { Metadata } from "next";
import { Archivo_Black, Chivo_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-archivo',
});

const chivoMono = Chivo_Mono({ 
  subsets: ["latin"],
  variable: '--font-chivo',
});

export const metadata: Metadata = {
  title: "Akinwale Jude O. | Senior Software Engineer",
  description: "Portfolio of Akinwale Jude O., Senior Software Engineer and Tech Lead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} ${chivoMono.variable}`}>
        <div className="grain-overlay"></div>
        {children}
      </body>
    </html>
  );
}
