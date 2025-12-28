"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface FloatingHeartsProps {
    className?: string;
    count?: number;
}

const FloatingHearts = ({
    className = "",
    count = 25,
}: FloatingHeartsProps) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div
            className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
        >
            {[...Array(count)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 100, scale: 0.5 }}
                    animate={{
                        opacity: [0, 0.6, 0],
                        y: -200,
                        x: Math.random() * 100 - 50,
                        scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: "linear",
                    }}
                    className="absolute text-gold-dark/40"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${10 + Math.random() * 100}%`,
                    }}
                >
                    {i % 2 === 0 ? (
                        <Heart
                            fill="currentColor"
                            size={20 + Math.random() * 10}
                        />
                    ) : (
                        <div className="border border-current rounded-full w-3 h-3" />
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
