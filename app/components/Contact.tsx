"use client";

import { motion, Variants } from "framer-motion";
import { Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { FormEvent } from "react";

export default function Contact() {
    // Form stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut" as const,
            },
        },
    };

    // Function to handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Extract data from the form
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const subject = formData.get("subject") as string;
        const message = formData.get("message") as string;

        // Construct the mailto link
        const recipient = "jeetkaran.singh395@gmail.com";
        const bodyText = `New Consultation Request\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

        // Redirect user to their email client
        window.open(mailtoLink, '_blank');
    };

    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-8 bg-[#FAFAFA] relative z-10 border-t border-slate-200">

            {/* Subtle Ambient Background Glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[120px] -z-10 translate-y-1/3 translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

                {/* Left Column: Contact Information */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-8 bg-sky-600 block" />
                            <span className="text-xs font-sans font-medium tracking-[0.2em] text-sky-600 uppercase">
                                Consultations
                            </span>
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-[1.1] tracking-tight">
                            Request a <br /> <span className="italic text-sky-600">Consultation.</span>
                        </h2>
                        <p className="text-lg text-slate-500 font-sans font-light leading-relaxed mb-10 max-w-md">
                            Currently accepting inquiries for clinical consultations, institutional collaborations, and second-opinion diagnostics.
                        </p>

                        <div className="space-y-2">
                            {/* Interactive Contact Card 2 */}
                            <a href="tel:+917467848500" className="group flex items-start gap-5 p-4 -ml-4 rounded-2xl hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-sky-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:border-sky-600 group-hover:text-white transition-colors duration-500 shrink-0 shadow-sm">
                                    <Phone className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-sans tracking-widest text-slate-400 uppercase mb-1">Inquiries</p>
                                    <p className="text-lg font-serif text-slate-900 group-hover:text-sky-600 transition-colors">
                                        +91 74678 48500
                                    </p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                            </a>

                            {/* Interactive Contact Card 3 */}
                            <div className="group flex items-start gap-5 p-4 -ml-4 rounded-2xl hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-sky-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:border-sky-600 group-hover:text-white transition-colors duration-500 shrink-0 shadow-sm">
                                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-sans tracking-widest text-slate-400 uppercase mb-1">Location</p>
                                    <p className="text-lg font-serif text-slate-900 group-hover:text-sky-600 transition-colors">
                                        Dehradun, Uttarakhand, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Premium Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-7 bg-white p-8 md:p-12 lg:p-14 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative"
                >
                    <motion.form
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-10"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {/* Input Group */}
                            <motion.div variants={itemVariants} className="relative group">
                                <label className="block text-[10px] font-sans font-semibold text-slate-400 mb-2 uppercase tracking-[0.1em] group-focus-within:text-sky-600 transition-colors duration-300">
                                    Patient / Inquiry Name
                                </label>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 font-serif text-xl focus:outline-none placeholder:text-slate-300 transition-colors"
                                    placeholder="Sudhanshu Kumar"
                                />
                                <div className="absolute bottom-0 left-0 h-[2px] bg-sky-600 w-0 group-focus-within:w-full transition-all duration-500 ease-out" />
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative group">
                                <label className="block text-[10px] font-sans font-semibold text-slate-400 mb-2 uppercase tracking-[0.1em] group-focus-within:text-sky-600 transition-colors duration-300">
                                    Email Address
                                </label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 font-serif text-xl focus:outline-none placeholder:text-slate-300 transition-colors"
                                    placeholder="example@.com"
                                />
                                <div className="absolute bottom-0 left-0 h-[2px] bg-sky-600 w-0 group-focus-within:w-full transition-all duration-500 ease-out" />
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants} className="relative group">
                            <label className="block text-[10px] font-sans font-semibold text-slate-400 mb-2 uppercase tracking-[0.1em] group-focus-within:text-sky-600 transition-colors duration-300">
                                Subject / Reason for Visit
                            </label>
                            <input
                                required
                                name="subject"
                                type="text"
                                className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 font-serif text-xl focus:outline-none placeholder:text-slate-300 transition-colors"
                                placeholder="Clinical Consultation"
                            />
                            <div className="absolute bottom-0 left-0 h-[2px] bg-sky-600 w-0 group-focus-within:w-full transition-all duration-500 ease-out" />
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative group">
                            <label className="block text-[10px] font-sans font-semibold text-slate-400 mb-2 uppercase tracking-[0.1em] group-focus-within:text-sky-600 transition-colors duration-300">
                                Message Details
                            </label>
                            <textarea
                                required
                                name="message"
                                rows={4}
                                className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 font-sans text-base md:text-lg font-light focus:outline-none resize-none placeholder:text-slate-300 transition-colors"
                                placeholder="Please provide a brief overview of your inquiry or symptoms..."
                            />
                            <div className="absolute bottom-1 left-0 h-[2px] bg-sky-600 w-0 group-focus-within:w-full transition-all duration-500 ease-out" />
                        </motion.div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="group w-full flex items-center justify-center gap-3 py-5 bg-slate-900 text-white font-sans text-sm tracking-[0.2em] uppercase hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-600/20 transition-all duration-500 rounded-sm"
                            >
                                Submit Inquiry
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
}