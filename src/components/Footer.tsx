"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

const Footer = () => {
    return (
        <footer className="py-24 bg-white/40 backdrop-blur-sm text-center border-t border-gold/20 relative overflow-hidden">
            <FloatingHearts count={4} />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center gap-6 px-4"
            >
                <div className="text-gold opacity-80">
                    <Heart size={32} />
                </div>
                <p className="text-3xl md:text-5xl font-great-vibes text-charcoal leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                    &quot;Two hearts, one promise, a lifetime together&quot;
                </p>
                <div className="w-16 h-px bg-gold/50 my-4" />
                <p className="text-sm font-montserrat tracking-[0.2em] text-gray-500 uppercase">
                    With Love, Ribin & Kavya
                </p>
            </motion.div>

            <div className="absolute bottom-6 left-0 w-full text-center">
                <p className="text-[10px] text-gray-400 font-sans tracking-wide">
                    Jan 11, 2026 • Wayanad
                </p>
            </div>
        </footer>
    );
};

export default Footer;
