"use client";
import { motion } from "framer-motion";

export default function Skills() {
    const technicalSkills = [
        "Surgical Assistance & Minor Procedures", "Clinical Diagnosis",
        "Emergency & Trauma Management", "Critical Care Medicine",
        "Laboratory & Imaging Interpretation", "Patient Counseling",
        "BLS & ACLS Certified", "Evidence-Based Medical Research"
    ];

    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-widest text-medical-400 font-bold block mb-3">Capabilities</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Clinical Competence & Skills</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {technicalSkills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="p-6 rounded-xl glass-panel relative group flex flex-col justify-between cursor-default"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-medical-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                            <div className="w-8 h-8 rounded-lg bg-medical-500/10 border border-medical-500/20 flex items-center justify-center mb-4">
                                <span className="text-medical-400 text-xs font-bold">0{index + 1}</span>
                            </div>
                            <h3 className="font-display font-medium text-white text-sm tracking-wide leading-snug">{skill}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}