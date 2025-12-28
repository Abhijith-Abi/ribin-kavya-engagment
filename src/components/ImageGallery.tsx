"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
import { X } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

const images = [
    {
        src: "/images/couple.jpg",
        alt: "Couple Moment 1",
        aspect: "aspect-[3/4]",
    },
    {
        src: "/images/hero_invitation.jpg",
        alt: "Couple Moment 2",
        aspect: "aspect-[3/2]",
    },
    {
        src: "/images/floral.jpg",
        alt: "Couple Moment 3",
        aspect: "aspect-[3/4]",
    },
    {
        src: "/images/floral.jpg",
        alt: "Couple Moment 4",
        aspect: "aspect-[4/3]",
    },
    {
        src: "/images/couple.jpg",
        alt: "Couple Moment 5",
        aspect: "aspect-[3/4]",
    },
    {
        src: "/images/hero_invitation.jpg",
        alt: "Couple Moment 6",
        aspect: "aspect-video",
    },
];

const ImageGallery = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            ref={containerRef}
            className="py-24 px-4 md:px-8 bg-transparent overflow-hidden min-h-screen relative"
        >
            <FloatingHearts className="z-0" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20 space-y-4 relative z-10"
            >
                <h2 className="text-5xl md:text-6xl font-cinzel text-charcoal drop-shadow-sm">
                    Our Moments
                </h2>
                <div className="w-24 h-1 bg-gold mx-auto" />
                <p className="font-montserrat text-2xl text-charcoal/80 italic">
                    Capturing love, laughter, and happily ever after.
                </p>
            </motion.div>

            {/* Grid Layout (3x3) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10 px-4">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        layoutId={`image-container-${index}`}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            type: "spring",
                            bounce: 0.2,
                        }}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500 aspect-[4/5]"
                        onClick={() => setSelectedId(index)}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                <span className="text-white font-cinzel text-lg tracking-wider">
                                    View Photo
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            className="absolute top-6 right-6 text-white/80 hover:text-white z-50 p-2 bg-white/10 rounded-full transition-colors"
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            layoutId={`image-container-${selectedId}`}
                            className="relative w-full max-w-6xl max-h-[90vh] aspect-[3/4] md:aspect-[16/9] overflow-hidden rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[selectedId].src}
                                alt={images[selectedId].alt}
                                fill
                                className="object-contain"
                                quality={100}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ImageGallery;
