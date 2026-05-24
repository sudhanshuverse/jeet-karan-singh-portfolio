"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const reviews = [
        { name: "Rahul S.", text: "Dr. Jeet provided exceptional care. His diagnosis was precise, and he explained everything with great patience." },
        { name: "Anita K.", text: "Professional, empathetic, and thorough. I had an online consultation, and it was as effective as an in-person visit." },
        { name: "Vikram D.", text: "The booking process was seamless, and the medical advice was top-notch. Highly recommended for chronic care." }
    ];

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    const next = () => setIndex((prev) => (prev + 1) % reviews.length);
    const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section className="py-24 px-6 md:px-8 bg-white border-t border-slate-100 overflow-hidden">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif text-slate-900 mb-16">Patient Success Stories</h2>

                <div className="relative min-h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="w-full"
                        >
                            <div className="p-10 md:p-12 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm mx-4">
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-sky-500 text-sky-500" />)}
                                </div>
                                <p className="text-xl md:text-2xl text-slate-700 font-serif font-light mb-8 italic">
                                    "{reviews[index].text}"
                                </p>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-600">
                                        {reviews[index].name.charAt(0)}
                                    </div>
                                    <p className="font-semibold text-slate-900">— {reviews[index].name}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button onClick={prev} className="absolute left-5 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-sky-600 transition-colors">
                        <ChevronLeft size={32} />
                    </button>
                    <button onClick={next} className="absolute right-5 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-sky-600 transition-colors">
                        <ChevronRight size={32} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === i ? 'w-8 bg-sky-600' : 'w-2 bg-slate-200'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}