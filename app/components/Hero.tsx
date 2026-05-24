"use client";

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Stethoscope, ShieldCheck, HeartPulse, ArrowRight, Activity } from 'lucide-react';

export default function Hero() {
    // Smooth stagger animation variants with explicit TypeScript typing
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="w-full relative overflow-hidden bg-[#FAFAFA]">

            {/* Background Soft Ambient Glow */}
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-sky-100/50 blur-[120px] -z-10" />

            {/* Enhanced Hero Section */}
            <section className="relative w-full min-h-screen flex items-center px-6 md:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">

                    {/* Left Column: Typography & CTAs */}
                    <motion.div
                        className="lg:col-span-6 flex flex-col justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                            <span className="h-[1px] w-8 bg-sky-600 block" />
                            <span className="font-sans text-xs tracking-[0.3em] uppercase text-sky-600 font-medium">
                                Clinical Excellence
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl lg:text-8xl text-slate-900 leading-[1.05] tracking-tight mb-6">
                            Precision in <br />
                            <span className="italic text-sky-600 font-light">Medicine.</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="max-w-lg text-lg font-sans font-light text-slate-500 leading-relaxed mb-10">
                            Fusing evidence-based diagnostics with profound empathy. Experience a sanctuary of healing designed for your comprehensive well-being.
                        </motion.p>

                        {/* Icon Trust Indicators */}
                        <motion.div variants={itemVariants} className="flex gap-8 mb-12">
                            <div className="flex flex-col gap-2">
                                <HeartPulse className="w-6 h-6 text-sky-600 stroke-[1.5]" />
                                <span className="font-sans text-xs uppercase tracking-widest text-slate-900 font-medium">Compassion</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Activity className="w-6 h-6 text-sky-600 stroke-[1.5]" />
                                <span className="font-sans text-xs uppercase tracking-widest text-slate-900 font-medium">Diagnostics</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <ShieldCheck className="w-6 h-6 text-sky-600 stroke-[1.5]" />
                                <span className="font-sans text-xs uppercase tracking-widest text-slate-900 font-medium">Evidence-based</span>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
                            <Link
                                href="/#contact"
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-sans text-sm tracking-widest uppercase hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-600/20 transition-all duration-500 rounded-sm"
                            >
                                Book Consultation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/#about"
                                className="flex items-center justify-center px-8 py-4 border border-slate-200 text-slate-900 font-sans text-sm tracking-widest uppercase hover:border-sky-600 hover:text-sky-600 transition-colors duration-500 rounded-sm"
                            >
                                Meet Dr. Jeet Karan Singh
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Cinematic Image & Floating Elements */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 relative w-full h-[500px] md:h-[600px] lg:h-[750px]"
                    >
                        {/* Main Portrait Image Placeholder */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-zinc-200 shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1600&auto=format&fit=crop"
                                alt="Dr. Jeet Karan Singh"
                                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            {/* Subtle overlay to ensure text pops if placed over it */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply pointer-events-none" />
                        </div>

                        {/* Floating Glassmorphic Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="absolute bottom-6 md:bottom-10 -left-4 md:-left-12 p-5 md:p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-2xl border border-white/50 w-[240px]"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                                    <Stethoscope className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg md:text-xl text-slate-900 font-semibold leading-tight">Advanced Care</h4>
                                    <p className="font-sans text-[10px] md:text-xs text-slate-500 mt-1 leading-relaxed">Dedicated to proactive, patient-first medical treatment.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}