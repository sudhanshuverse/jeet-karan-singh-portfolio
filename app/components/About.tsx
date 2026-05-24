"use client";

import { motion } from "framer-motion";
import { User, BookOpen, Stethoscope } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 bg-white relative z-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Left Column: Sticky Philosophy */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-sky-600 block" />
              <span className="text-xs font-sans font-medium tracking-[0.2em] text-sky-600 uppercase">
                Professional Philosophy
              </span>
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Bridging clinical precision with <span className="italic text-sky-600 font-light">human compassion.</span>
            </h2>
            <p className="text-lg text-slate-500 font-sans font-light leading-relaxed mb-6">
              As a modern medical professional, my approach transcends traditional diagnostics. I believe that exceptional healthcare requires a synthesis of rigorous evidence-based medicine, continuous technological adaptation, and an unwavering commitment to patient dignity.
            </p>
            <p className="text-base text-slate-400 font-sans font-light leading-relaxed">
              Medicine is a collaborative discipline. Whether coordinating complex trauma responses or managing chronic outpatient care, seamless teamwork yields the highest standard of patient outcomes.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Core Competencies (Editorial Style) */}
        <div className="lg:col-span-7 space-y-12 md:space-y-16 lg:pl-12 lg:border-l border-slate-200">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative pl-6 md:pl-8"
          >
            {/* Animated Hover Line */}
            <div className="absolute top-0 left-0 w-[2px] h-0 bg-sky-600 group-hover:h-full transition-all duration-500 ease-out" />

            <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-sky-600 group-hover:text-white group-hover:scale-110 shadow-sm">
              <User className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-sky-600 transition-colors duration-300">
              Patient-First Diagnostics
            </h3>
            <p className="text-slate-500 font-sans font-light leading-relaxed">
              Prioritizing proactive communication and clear patient education. I ensure that individuals fully understand their treatment paradigms, fostering immense trust and adherence to medical protocols. Every patient deserves to be heard and respected.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative pl-6 md:pl-8"
          >
            <div className="absolute top-0 left-0 w-[2px] h-0 bg-sky-600 group-hover:h-full transition-all duration-500 ease-out" />

            <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-sky-600 group-hover:text-white group-hover:scale-110 shadow-sm">
              <BookOpen className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-sky-600 transition-colors duration-300">
              Clinical Versatility
            </h3>
            <p className="text-slate-500 font-sans font-light leading-relaxed">
              Rigorous rotational experience spanning diverse specialty units, from intensive care to general pediatrics. This exposure provides a comprehensive, holistic view of multi-system pathology, allowing for more accurate and interconnected diagnoses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative pl-6 md:pl-8"
          >
            <div className="absolute top-0 left-0 w-[2px] h-0 bg-sky-600 group-hover:h-full transition-all duration-500 ease-out" />

            <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-sky-600 group-hover:text-white group-hover:scale-110 shadow-sm">
              <Stethoscope className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-sky-600 transition-colors duration-300">
              Critical Care Operations
            </h3>
            <p className="text-slate-500 font-sans font-light leading-relaxed">
              Equipped to execute rapid, reliable decision-making under severe pressure. Trained in high-stakes emergency settings to stabilize acute trauma, manage complex physiological crises, and lead interdisciplinary medical teams.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}