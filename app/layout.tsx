import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Denim | Tech Consultancy",
  description:
    "Building MVPs, web apps, and automations that move fast and look good.",
  keywords: [
    "tech agency",
    "web development",
    "SaaS",
    "automation",
    "web apps",
    "melbourne",
    "melboure tech",
    "melbourne software solutions",
    "melbourne web development",
    "denim",
    "software solutions",
    "custom software",
    "digital transformation",
    "technology consulting",
    "startup development",
    "scalable solutions",
    "user-centric design",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    { name: "Denim | Tech Consultancy", url: "https://denim.melbourne" },
  ],
  openGraph: {
    title: "Denim | Tech Consultancy",
    description:
      "Tech Consultants building products, web apps, and automations that move fast and look good.",
    url: "https://denim.melbourne",
    siteName: "Denim | Tech Consultancy",
    images: [
      {
        url: "https://denim.melbourne/og.png",
        width: 1200,
        height: 630,
        alt: "Denim | Tech Consultancy",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased scroll-smooth`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
