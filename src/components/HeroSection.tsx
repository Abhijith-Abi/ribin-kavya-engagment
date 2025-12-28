"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Heart, Gem } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Image with Parallax Effect */}
            <motion.div style={{ y, opacity }} className="absolute inset-0">
                {/* Darker golden overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/30 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30 z-10" />
                <div className="absolute inset-0 bg-gold/5 z-10 mix-blend-overlay" />
                <Image
                    src="/images/hero_invitation.jpg"
                    alt="Engagement Couple"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                />
            </motion.div>

            {/* Content */}
            <div className="z-20 text-center px-4 flex flex-col items-center gap-4 sm:gap-6 mt-16 sm:mt-0">
                {/* Animated Floating Elements */}
                <FloatingHearts />

                <div className="font-bodoni uppercase tracking-[0.3em] text-xs sm:text-sm md:text-base text-white/90 font-semibold drop-shadow-md">
                    Save The Date
                </div>

                <div className="flex flex-col items-center gap-2">
                    {/* Ring Icon Animation */}
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="text-gold mb-2 sm:mb-4 filter drop-shadow-lg"
                    >
                        <Gem
                            size={40}
                            className="sm:w-12 sm:h-12"
                            strokeWidth={1}
                        />
                    </motion.div>

                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-pinyon text-gold-gradient drop-shadow-2xl leading-tight py-2">
                        Ribin
                        <span className="block text-3xl sm:text-4xl md:text-6xl font-bodoni italic my-2 sm:my-4 text-white/95 drop-shadow-lg">
                            &
                        </span>
                        Kavya
                    </h1>
                </div>

                <div className="font-bodoni text-xl sm:text-2xl md:text-3xl italic tracking-wide mt-2 sm:mt-4 text-gold-light drop-shadow-md">
                    Are getting engaged
                </div>
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
