import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Leaf, Sparkles, Microscope, Globe, Heart, Quote } from 'lucide-react';

const SectionHeader: React.FC<{ label: string; title: string; light?: boolean }> = ({ label, title, light }) => (
    <div className="mb-16">
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-[10px] font-black uppercase tracking-[0.4em] ${light ? 'text-stone-400' : 'text-[#7FB844]'} block mb-4`}
        >
            {label}
        </motion.span>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-6xl font-serif leading-tight ${light ? 'text-white' : 'text-stone-900'} italic`}
        >
            {title}
        </motion.h2>
    </div>
);

const About: React.FC = () => {
    return (
        <div className="bg-[#fafaf9] overflow-hidden">

            {/* 1. Hero Section - The Slogan */}
            <section className="relative h-[90vh] flex items-center justify-center pt-32 px-4 text-center">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[#7FB844]/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-rose-50 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="container mx-auto relative z-10 max-w-5xl">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[11px] font-black uppercase tracking-[0.5em] text-[#7FB844] mb-10 block"
                    >
                        Trusavor Beauty Collective
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-12 italic"
                    >
                        Retain. Regain. <br /> <span className="text-stone-300">Radiate.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-stone-500 font-light max-w-2xl mx-auto italic leading-relaxed"
                    >
                        "Retain, Regain and Radiate your Beauty with Trusavor" – Empowering self-expression and enhancing everyday confidence.
                    </motion.p>
                </div>
            </section>

            {/* 2. Mission - The Foundation */}
            <section className="py-32 bg-stone-900 text-white relative">
                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="w-full lg:w-1/2">
                            <SectionHeader label="Our Mission" title="Tradition Powered by Innovation." light />
                            <div className="space-y-8 text-xl text-stone-400 font-light leading-relaxed italic">
                                <p>
                                    TRUSAVOR is a new age beauty and beauty-centric supplements brand crafted to empower self-expression and enhance everyday confidence. We believe that beauty is more than appearance; it’s about care, creativity, and individuality.
                                </p>
                                <div className="pt-8 border-t border-white/10">
                                    <div className="text-[#7FB844] text-sm font-black uppercase tracking-widest mb-4">Proudly Made in India</div>
                                    <p>
                                        Rooted with Indian traditions and powered by modern innovation & technology. We celebrate our heritage while looking forward.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl relative border border-white/10">
                                <img src="/website/argan oil/3.png" className="w-full h-full object-cover opacity-80" alt="Indian Heritage" />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Portfolio - Diversity of Rituals */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <SectionHeader label="Our Catalog" title="Comprehensive Care Portfolio." />
                        <p className="text-stone-500 italic">Our products help you retain and regain your natural beauty through various categories.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Nutritional Supplements", items: "Formulated to nourish your body and achieve radiant skin." },
                            { title: "Skincare Essentials", items: "Precision Creams, Serums, and Lotions." },
                            { title: "Hair Therapy", items: "Specialized Shampoos and conditioning rituals." },
                            { title: "Men’s Grooming", items: "Tailored products for the modern man." },
                            { title: "Essential Oils", items: "Pure extracts for holistic wellness." },
                            { title: "Personal Care", items: "Everyday confidence boosters." }
                        ].map((category, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="p-10 rounded-[40px] border border-stone-100 bg-[#fafaf9] hover:bg-white hover:shadow-xl transition-all group"
                            >
                                <h3 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-[#7FB844] transition-colors">{category.title}</h3>
                                <p className="text-stone-400 font-light text-sm italic">{category.items}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Vision - The Future */}
            <section className="py-40 bg-[#fafaf9] relative overflow-hidden text-center">
                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader label="Our Vision" title="Inclusive, Safe, and Sustainable." />
                        <div className="text-2xl md:text-3xl text-stone-500 font-light leading-relaxed italic border-t border-stone-200 pt-12 mt-12 mb-16">
                            "To create solutions that are not only trend-forward but also safe, inclusive, and sustainable catering to every skin type, hair need, and style preference."
                        </div>
                        <img src="/website/hero/banner_shilajit.png" className="w-full h-[300px] object-cover rounded-[60px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" alt="Visionary Landscape" />
                    </div>
                </div>
            </section>

            {/* 5. Why Trusavor - Core Values */}
            <section className="py-40 bg-stone-900 relative">
                <div className="container mx-auto px-6 lg:px-20">
                    <SectionHeader label="Why Trusavor" title="The Trusavor Standard." light />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { icon: Shield, title: "Dermatologically Tested", text: "Cruelty-free personal care products formulated for safety." },
                            { icon: Sparkles, title: "Advanced Actives", text: "Infused with natural extracts & advanced actives for proven results." },
                            { icon: Target, title: "Inclusive Beauty", text: "Shades & solutions for all skin tones and hair types." },
                            { icon: Leaf, title: "Eco-Conscious Approach", text: "Sustainable packaging with an environmentally focused mindset." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-8 group"
                            >
                                <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-[24px] flex items-center justify-center text-[#7FB844] mb-8 border border-white/10 group-hover:bg-[#7FB844] group-hover:text-white transition-all shrink-0">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif text-white mb-3 italic">{item.title}</h3>
                                    <p className="text-stone-400 font-light leading-relaxed max-w-md">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Indian Foundations - Traditions & Tech */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <Quote className="w-16 h-16 text-stone-100 mx-auto mb-12" />
                    <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[0.9] italic max-w-5xl mx-auto mb-16">
                        Indian traditions powered by <br /> <span className="text-[#7FB844]">Modern Technology.</span>
                    </h2>
                    <div className="h-px w-32 bg-stone-200 mx-auto" />
                </div>
            </section>

            {/* 7. Radiant Slogan - Callout */}
            <section className="py-40 bg-[#fafaf9]">
                <div className="container mx-auto px-6 lg:px-20 relative">
                    <div className="absolute left-0 top-0 opacity-[0.03] text-[20vw] font-serif italic pointer-events-none select-none">Radiate.</div>
                    <div className="text-center relative z-10">
                        <SectionHeader label="Our Promise" title="Retain Regain Radiate." />
                        <p className="text-xl md:text-2xl text-stone-500 font-light max-w-2xl mx-auto italic">
                            Our nutritional supplements are formulated to nourish your body helping you to achieve radiant skin.
                        </p>
                    </div>
                </div>
            </section>

            {/* 8. Call to Action - Begin Exploring */}
            <section className="py-40 bg-[#7FB844] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-white blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="container mx-auto px-6 lg:px-20 relative z-10 text-center">
                    <h3 className="text-4xl md:text-6xl font-serif text-white italic mb-12 leading-tight">
                        Experience the harmony <br /> of confidence and care.
                    </h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-[#7FB844] px-16 py-6 rounded-full font-black uppercase text-xs tracking-[0.4em] shadow-2xl hover:bg-stone-900 hover:text-white transition-all duration-500"
                    >
                        Explore The Collections
                    </motion.button>
                </div>
            </section>

        </div>
    );
};

export default About;
