"use client";

import { motion } from "framer-motion";
import {
    Stethoscope,
    Activity,
    Syringe,
    HeartPulse,
    TestTube,
    Users,
    ShieldCheck,
    BookOpen
} from "lucide-react";

export default function Skills() {
    // Enhanced data structure with descriptions and mapped Lucide icons
    const clinicalSkills = [
        {
            title: "Clinical Diagnosis",
            description: "Comprehensive patient evaluation and accurate pathology identification.",
            icon: Stethoscope,
        },
        {
            title: "Emergency Management",
            description: "Rapid stabilization and acute trauma care protocols.",
            icon: Activity,
        },
        {
            title: "Surgical Assistance",
            description: "Proficient support in minor and major operative treatments.",
            icon: Syringe,
        },
        {
            title: "Critical Care",
            description: "Vigilant monitoring and life-support management in high-stakes environments.",
            icon: HeartPulse,
        },
        {
            title: "Lab Interpretation",
            description: "Precise analysis of metabolic panels, ECGs, and imaging.",
            icon: TestTube,
        },
        {
            title: "Patient Counseling",
            description: "Empathetic communication, treatment education, and trust-building.",
            icon: Users,
        },
        {
            title: "BLS & ACLS",
            description: "Fully certified in advanced cardiac and basic life support algorithms.",
            icon: ShieldCheck,
        },
        {
            title: "Clinical Research",
            description: "Integration of the latest evidence-based medical literature into daily practice.",
            icon: BookOpen,
        }
    ];

    return (
        <section id="skills" className="py-24 md:py-32 px-6 md:px-8 bg-white border-t border-clinic-50 relative z-10 overflow-hidden">

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-clinic-50/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-8 bg-clinic-500 block" />
                            <span className="text-xs font-sans font-medium tracking-[0.2em] text-clinic-500 uppercase">
                                Capabilities
                            </span>
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-clinic-900 tracking-tight">
                            Clinical Competencies
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-md text-gray-500 font-sans font-light leading-relaxed text-sm md:text-base"
                    >
                        A diverse toolkit of medical proficiencies acquired through rigorous academic study and active, high-pressure hospital rotations.
                    </motion.p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {clinicalSkills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                                className="group p-8 rounded-2xl bg-[#FAFAFA] border border-clinic-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative flex flex-col h-full overflow-hidden"
                            >
                                {/* Interactive Top Border Highlight */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-clinic-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                {/* Icon Container */}
                                <div className="w-12 h-12 rounded-xl bg-white border border-clinic-100 text-clinic-500 flex items-center justify-center shadow-sm mb-8 group-hover:bg-clinic-500 group-hover:text-black group-hover:border-clinic-500 transition-colors duration-500">
                                    <Icon className="w-6 h-6 stroke-[1.5]" aria-hidden="true" />
                                </div>

                                {/* Text Content */}
                                <div className="mt-auto">
                                    <h3 className="font-serif text-xl md:text-2xl text-clinic-900 mb-3 group-hover:text-clinic-500 transition-colors duration-300">
                                        {skill.title}
                                    </h3>
                                    <p className="text-gray-500 font-sans font-light text-sm leading-relaxed">
                                        {skill.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}