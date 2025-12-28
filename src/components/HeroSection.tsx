"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import { ChevronDown, Heart, Gem } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

const heroImages = [
    "/images/couple.jpg",
    "/images/floral.jpg",
    "/images/gallery-moment-1.jpg",
    "/images/gallery-moment-2.jpg",
    "/images/gallery-moment-3.jpg",
    "/images/gallery-moment-4.jpg",
    "/images/hero_invitation.jpg",
];

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                let newIndex;
                do {
                    newIndex = Math.floor(Math.random() * heroImages.length);
                } while (newIndex === prevIndex);
                return newIndex;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Image Slideshow with Parallax Effect */}
            <motion.div style={{ y, opacity }} className="absolute inset-0">
                {/* Darker golden overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-gold/10 z-10 mix-blend-overlay" />

                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={heroImages[currentImageIndex]}
                            alt="Engagement Couple"
                            fill
                            className="object-cover object-center"
                            priority
                            quality={100}
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Content */}
            <div className="z-20 text-center px-4 flex flex-col items-center gap-6">
                {/* Animated Floating Elements */}
                <FloatingHearts />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-bodoni uppercase tracking-[0.3em] text-sm md:text-base text-white font-semibold drop-shadow-md"
                >
                    Save The Date
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring" }}
                    className="flex flex-col items-center gap-2"
                >
                    {/* Ring Icon Animation */}
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="text-gold mb-4 filter drop-shadow-lg"
                    >
                        <Gem size={48} strokeWidth={1} />
                    </motion.div>

                    <h1 className="text-7xl md:text-9xl font-pinyon text-gold-gradient drop-shadow-2xl leading-tight py-2">
                        Ribin
                        <span className="block text-4xl md:text-6xl font-bodoni italic my-4 text-white/90">
                            &
                        </span>
                        Kavya
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="font-bodoni text-2xl md:text-3xl italic tracking-wide mt-4 text-gold-light"
                >
                    Are getting engaged
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 1 },
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                }}
                className="absolute bottom-12 z-20 text-white/80 cursor-pointer"
            >
                <ChevronDown size={32} strokeWidth={1.5} />
            </motion.div>
        </section>
    );
};

export default HeroSection;
