"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled 
                ? 'py-4 bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgb(0,0,0,0.03)] border-b border-slate-100' 
                : 'py-6 md:py-8 bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center relative">
                
                {/* Left: Brand / Logo */}
                <Link href="/" className="flex flex-col group relative z-10">
                    <span className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 tracking-wide group-hover:text-sky-600 transition-colors duration-300">
                        Dr. Jeet
                    </span>
                    <span className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-sky-600 uppercase mt-0.5">
                        Internal Medicine
                    </span>
                </Link>

                {/* Center: Desktop Navigation */}
                <nav className="hidden md:flex gap-10 items-center absolute left-1/2 -translate-x-1/2">
                    {['Home', 'About', 'Experience', 'Skills'].map((item) => {
                        const path = item === 'Home' ? '/' : `/#${item.toLowerCase()}`;
                        
                        return (
                            <Link
                                key={item}
                                href={path}
                                className="group relative font-sans text-xs tracking-[0.15em] uppercase text-slate-500 hover:text-slate-900 transition-colors duration-300 py-2"
                            >
                                {item}
                                {/* Elegant Hover Underline */}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-sky-600 group-hover:w-full transition-all duration-300 ease-out" />
                            </Link>
                        );
                    })}
                </nav>

                {/* Right: CTA Button (Visible on both Desktop & Mobile) */}
                <div className="flex items-center z-10">
                    <Link
                        href="/#contact"
                        className="group relative px-6 py-3 md:px-8 md:py-3.5 bg-slate-900 text-white font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase overflow-hidden rounded-sm hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-500"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                            Consult
                        </span>
                        {/* Smooth Color Fill on Hover */}
                        <div className="absolute inset-0 bg-sky-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                    </Link>
                </div>

            </div>
        </motion.header>
    );
}