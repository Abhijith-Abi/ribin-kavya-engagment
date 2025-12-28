"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

const WeddingDetails = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-white/60 backdrop-blur-sm text-center relative overflow-hidden">
            <FloatingHearts className="z-0" />
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-5xl mx-auto border border-gold/30 p-8 md:p-16 relative"
            >
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />

                <h2 className="text-4xl md:text-5xl font-cinzel text-charcoal mb-12 uppercase tracking-widest">
                    The Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Date */}
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="p-4 rounded-full bg-soft-white group-hover:bg-gold/10 transition-colors duration-500">
                            <Calendar
                                className="w-8 h-8 text-gold"
                                strokeWidth={1}
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-cinzel text-charcoal mb-2 uppercase tracking-wide">
                                When
                            </h3>
                            <p className="font-montserrat text-xl text-charcoal/80">
                                January 11th, 2026
                            </p>
                        </div>
                    </div>

                    {/* Time */}
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="p-4 rounded-full bg-soft-white group-hover:bg-gold/10 transition-colors duration-500">
                            <Clock
                                className="w-8 h-8 text-gold"
                                strokeWidth={1}
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-cinzel text-charcoal mb-2 uppercase tracking-wide">
                                Time
                            </h3>
                            <p className="font-montserrat text-xl text-charcoal/80">
                                11:00 AM Onwards
                            </p>
                        </div>
                    </div>

                    {/* Venue */}
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="p-4 rounded-full bg-soft-white group-hover:bg-gold/10 transition-colors duration-500">
                            <MapPin
                                className="w-8 h-8 text-gold"
                                strokeWidth={1}
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-cinzel text-charcoal mb-2 uppercase tracking-wide">
                                Where
                            </h3>
                            <div className="font-montserrat text-xl text-charcoal/80 leading-relaxed">
                                <p>G.L.P School Thariode</p>
                                <p>HS Junction, Chennalode</p>
                                <p>Wayanad</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gold/20">
                    <p className="font-great-vibes text-4xl text-gold-dark">
                        We can't wait to celebrate with you
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default WeddingDetails;
