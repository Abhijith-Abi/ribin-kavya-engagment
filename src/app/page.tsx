"use client";

import HeroSection from "@/components/HeroSection";
import WeddingDetails from "@/components/WeddingDetails";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
    // Smooth scroll fix/optimization if needed
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-soft-white overflow-hidden">
            <HeroSection />
            <WeddingDetails />
            <ImageGallery />
            <Footer />
        </main>
    );
}
