import type { Metadata } from "next";
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
    title: "Denim | Digital Agency",
    description: "Building SaaS products, web apps, and automations that move fast and look good.",
    keywords: ["tech agency", "web development", "SaaS", "automation", "web apps", "melbourne", "denim", "software solutions", "custom software", "digital transformation", 
        "technology consulting", "startup development", "scalable solutions", "user-centric design"],
    authors: [{ name: "Denim", url: "https://denim.melbourne" }],
    openGraph: {
        title: "Denim | Digital Tech",
        description: "Building SaaS products, web apps, and automations that move fast and look good.",
        url: "https://denim.melbourne",
        siteName: "Denim",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
