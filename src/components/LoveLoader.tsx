"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const LoveLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Total animation time roughly 3-4 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden"
                >
                    <div className="flex items-center gap-4 md:gap-8">
                        {/* Ribin */}
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="font-pinyon text-4xl md:text-6xl text-gold-dark"
                        >
                            Ribin
                        </motion.span>

                        {/* Middle Heart Loader */}
                        <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                            {/* Heart Outline */}
                            <Heart
                                className="w-full h-full text-gold-light/30 absolute inset-0"
                                strokeWidth={1.5}
                            />

                            {/* Filling Effect */}
                            <motion.div
                                initial={{ height: "0%" }}
                                animate={{ height: "100%" }}
                                transition={{
                                    duration: 2,
                                    delay: 1.5,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-0 left-0 right-0 overflow-hidden flex items-end justify-center"
                                style={{ width: "100%" }}
                            >
                                <Heart
                                    className="w-12 h-12 md:w-16 md:h-16 text-red-500 fill-red-500"
                                    strokeWidth={1.5}
                                />
                            </motion.div>
                        </div>

                        {/* Kavya */}
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 3.5 }}
                            className="font-pinyon text-4xl md:text-6xl text-gold-dark"
                        >
                            Kavya
                        </motion.span>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="absolute bottom-10 font-bodoni text-sm text-gold-light tracking-widest uppercase"
                    >
                        Jan 11, 2026
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoveLoader;
