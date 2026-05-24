"use client";
import { motion } from "framer-motion";

export default function Card({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className="p-6 rounded-2xl glass-panel relative group overflow-hidden transition-all duration-300 hover:border-[#0EA5E9]/30"
        >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#0EA5E9] opacity-40 group-hover:opacity-100 transition-opacity" />
            {children}
        </motion.div>
    );
}