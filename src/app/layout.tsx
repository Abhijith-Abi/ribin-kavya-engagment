import type { Metadata } from "next";
import {
    Cinzel,
    Great_Vibes,
    Montserrat,
    Pinyon_Script,
    Bodoni_Moda,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const bodoni = Bodoni_Moda({
    variable: "--font-bodoni",
    subsets: ["latin"],
});

const cinzel = Cinzel({
    variable: "--font-cinzel",
    subsets: ["latin"],
});

const greatVibes = Great_Vibes({
    weight: "400",
    variable: "--font-great-vibes",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const pinyon = Pinyon_Script({
    weight: "400",
    variable: "--font-pinyon",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ribin & Kavya | Engagement Invitation",
    description: "Join us for our engagement celebration.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${cinzel.variable} ${greatVibes.variable} ${montserrat.variable} ${pinyon.variable} ${bodoni.variable} antialiased bg-soft-white text-charcoal font-montserrat`}
            >
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
