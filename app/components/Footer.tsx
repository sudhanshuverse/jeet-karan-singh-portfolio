"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUp, Phone, MapPin } from "lucide-react"; // Removed Linkedin from here

// 1. Add the custom LinkedIn Icon right here so it matches the Lucide style perfectly
const LinkedInIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Stagger animation for footer columns
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut" as const, // This cast is what fixes the type error
            },
        },
    };

    return (
        <footer className="bg-white pt-20 pb-8 md:pt-24 md:pb-10 px-6 md:px-8 border-t border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: Multi-Column Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24"
                >

                    {/* Column 1: Brand & Bio (Spans 4 columns) */}
                    <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col">
                        <Link href="/" className="group inline-block mb-4">
                            <span className="font-serif text-3xl font-semibold text-slate-900 tracking-wide group-hover:text-sky-600 transition-colors">
                                Dr. Jeet
                            </span>
                            <span className="block font-sans text-[10px] tracking-[0.2em] text-sky-600 uppercase mt-1">
                                Internal Medicine Professional
                            </span>
                        </Link>
                        <p className="text-slate-500 font-sans font-light leading-relaxed text-sm max-w-sm">
                            Fusing evidence-based diagnostics with profound empathy. Dedicated to proactive, patient-first medical treatment and comprehensive well-being.
                        </p>
                    </motion.div>

                    {/* Column 2: Quick Links (Spans 3 columns) */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 lg:col-start-6">
                        <h4 className="font-sans text-xs font-semibold tracking-[0.15em] text-slate-900 uppercase mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-4">
                            {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/#${item.toLowerCase()}`}
                                        className="text-slate-500 hover:text-sky-600 font-sans text-sm transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-[1px] bg-sky-600 group-hover:w-3 transition-all duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Connect (Spans 4 columns) */}
                    <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col">
                        <h4 className="font-sans text-xs font-semibold tracking-[0.15em] text-slate-900 uppercase mb-6">
                            Connect & Visit
                        </h4>
                        <ul className="space-y-5 text-sm text-slate-500 font-sans font-light">
                            <li>
                                <a href="tel:+917467848500" className="flex items-center gap-3 hover:text-sky-600 transition-colors group" >
                                    <Phone className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                                    +91 74678 48500
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                    <span>
                                        Himalayan Institute of Medical Sciences<br />
                                        Dehradun, Uttarakhand, India
                                    </span>
                                </div>
                            </li>
                            <li className="pt-2">
                                <a
                                    href="https://www.linkedin.com/in/dr-jeet-karan-singh-10a822367?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all duration-300"
                                    aria-label="LinkedIn Profile"
                                >
                                    {/* 2. Using our custom component here instead */}
                                    <LinkedInIcon className="w-4 h-4" />
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                </motion.div>

                {/* Bottom Section: Copyright & Back to Top */}
                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Copyright */}
                    <div className="text-center md:text-left order-2 md:order-1">
                        <p className="font-sans text-xs text-slate-400 tracking-wide">
                            &copy; {new Date().getFullYear()} Dr. Jeet Karan Singh. All Rights Reserved.
                        </p>
                    </div>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="order-1 md:order-2 group flex items-center gap-3 text-[10px] font-sans font-semibold tracking-[0.2em] text-slate-500 uppercase hover:text-sky-600 transition-colors duration-300 focus:outline-none"
                    >
                        Return to Top
                        <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-slate-200 flex items-center justify-center group-hover:bg-sky-600 group-hover:border-sky-600 group-hover:text-white text-slate-400 transition-all duration-300 shadow-sm">
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>
                    </button>

                </div>
            </div>
        </footer>
    );
}