import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/contexts/I18nContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "FPV Drone Pilot Portfolio | Cinematic Aerial Cinematography",
  description: "Immersive fly-through tours of apartments, villas, and commercial properties by a certified FPV pilot based in Prague.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlowCondensed.variable}`}
    >
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
