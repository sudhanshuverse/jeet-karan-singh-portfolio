"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Activity, Syringe, BookOpen, BriefcaseMedical } from "lucide-react";

// Interactive Accordion Component
function ExpandableDetail({
    title,
    items,
    icon: Icon
}: {
    title: string;
    items: string[];
    icon: React.ElementType
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-sky-300 mt-4 group">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-5 md:p-6 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-slate-50/50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-sky-600 text-white' : 'bg-sky-50 text-sky-600 group-hover:bg-sky-100'}`}>
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="text-lg md:text-xl text-slate-900 font-serif font-medium">{title}</span>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-400 group-hover:text-sky-600'}`} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <ul className="px-6 md:px-8 pb-6 md:pb-8 space-y-4 text-slate-600 font-sans font-light text-sm md:text-base leading-relaxed border-t border-slate-100 pt-6">
                            {items.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="py-24 md:py-32 px-6 md:px-8 bg-slate-50 relative z-10 overflow-hidden">

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <span className="flex items-center justify-center gap-3 mb-6">
                        <span className="h-[1px] w-8 bg-sky-600 block" />
                        <span className="text-xs font-sans font-medium tracking-[0.2em] text-sky-600 uppercase">
                            Clinical History
                        </span>
                        <span className="h-[1px] w-8 bg-sky-600 block" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
                        Professional Experience
                    </h2>
                </motion.div>

                {/* Timeline Container */}
                <div className="mt-12 relative border-l border-slate-200 pl-8 md:pl-12 pb-16 last:pb-0 ml-2 md:ml-0">

                    {/* Timeline Node */}
                    <div className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-sky-600 ring-4 ring-slate-50 z-10">
                        <div className="absolute inset-0 rounded-full bg-sky-600 animate-ping opacity-20" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group"
                    >
                        {/* Timeline Highlight Line */}
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                            <div className="flex items-start gap-4">
                                <div className="hidden md:flex w-12 h-12 rounded-xl bg-white border border-slate-200 items-center justify-center text-sky-600 shrink-0 shadow-sm mt-1 group-hover:border-sky-300 transition-colors">
                                    <BriefcaseMedical className="w-6 h-6 stroke-[1.5]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900 tracking-tight leading-none mb-2">MBBS Intern</h3>
                                    <p className="text-sky-700 font-sans font-medium text-base md:text-lg">Himalayan Institute of Medical Sciences, SRHU</p>
                                </div>
                            </div>
                            <div className="text-left md:text-right mt-2 md:mt-0">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-[10px] md:text-xs font-bold tracking-widest uppercase text-sky-800 mb-2">
                                    03/2024 – 04/2025
                                </span>
                                <p className="text-sm text-slate-400 font-sans font-medium">Dehradun, India</p>
                            </div>
                        </div>

                        <p className="text-slate-600 font-sans font-light leading-relaxed mb-10 text-base md:text-lg pl-0 md:pl-16 border-l-2 border-transparent group-hover:border-sky-600 transition-colors duration-500">
                            Completed a comprehensive rotational internship across core clinical and surgical specialties. Developed hands-on competence in primary care, emergency trauma response, and critical diagnostics under the direct supervision of senior attendings.
                        </p>

                        <div className="space-y-4 pl-0 md:pl-16">
                            <ExpandableDetail
                                title="Clinical Management & Ward Rotations"
                                icon={Activity}
                                items={[
                                    "Managed active patient triage pipelines within general medicine, pediatric, and outpatient clinics.",
                                    "Conducted exhaustive physical exams, maintained continuous SOAP logs, and structured complex discharge protocols.",
                                    "Interpreted standard lab metrics, metabolic panels, ECGs, and chest X-rays to inform and adjust treatment plans."
                                ]}
                            />
                            <ExpandableDetail
                                title="Surgical Assistance & Minor Procedures"
                                icon={Syringe}
                                items={[
                                    "Assisted senior surgical staff in both minor and major operative treatments within main sterile theaters.",
                                    "Performed minor surgical interventions including sterile wound suturing, abscess drainages, and local anesthesia administration.",
                                    "Managed initial stabilization protocols within trauma lines following standard BLS and ACLS algorithms."
                                ]}
                            />
                            <ExpandableDetail
                                title="Academic Diagnostics & Grand Rounds"
                                icon={BookOpen}
                                items={[
                                    "Participated actively in complex grand rounds, formulating differential diagnoses using current evidence-based literature.",
                                    "Analyzed multi-system pathology profiles and collaborated across departments to optimize patient care.",
                                    "Maintained up-to-date knowledge of evolving pharmacological protocols and international clinical guidelines."
                                ]}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}