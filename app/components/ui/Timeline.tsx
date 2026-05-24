"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function TimelineItem({ title, date, location, children }: any) {
    return (
        <div className="relative border-l border-white/10 pl-6 md:pl-10 pb-12">
            <div className="absolute top-0 -left-[6px] w-3 h-3 rounded-full bg-[#0EA5E9] animate-ping" />
            <div className="absolute top-0 -left-[6px] w-3 h-3 rounded-full bg-[#38BDF8]" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <div className="text-left md:text-right">
                    <span className="inline-block px-3 py-1 rounded-md bg-white/5 text-xs text-slate-300 mb-1">{date}</span>
                    <p className="text-xs text-slate-400">{location}</p>
                </div>
            </div>
            {children}
        </div>
    );
}

export function ExpandableCard({ title, items }: { title: string; items: string[] }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/5 rounded-xl bg-[#0B1528]/40 overflow-hidden mt-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full p-5 text-left flex justify-between items-center text-white font-medium">
                {title} <span>{isOpen ? "−" : "+"}</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                        <ul className="px-5 pb-5 space-y-2 text-slate-400 text-sm">
                            {items.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}