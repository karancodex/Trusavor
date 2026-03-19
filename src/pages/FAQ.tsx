import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 block mb-6"
                    >
                        Questions & Rituals
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.8] italic mb-10"
                    >
                        Clarity.
                    </motion.h1>
                    <p className="text-stone-500 max-w-lg mx-auto italic">
                        Guidance for your molecular journey.
                    </p>
                </div>

                <div className="space-y-10">
                    {[
                        { q: "Are Trusavor products safe for sensitive skin?", a: "Every ritual is formulated for cellular resonance, excluding all synthetic fillers. We recommend a patch test for ethereal skin." },
                        { q: "Where do you source your minerals?", a: "Exclusively from wild-harvested Himalayan points above 16,000 feet, where the air is pure and gravity is thin." },
                        { q: "How long until I see results?", a: "Biological harmony is a process, not an event. Most observers note a subtle radiance shift within 21 days of rhythmic use." },
                        { q: "Do you test on animals?", a: "Never. We believe in harmony with all living intelligence. All rituals are molecularly tested on plants or through cruelty-free simulations." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group border-b border-stone-100 pb-10"
                        >
                            <button className="w-full flex items-center justify-between text-left">
                                <h3 className="text-2xl font-serif text-stone-900 group-hover:text-[#7FB844] transition-colors">{item.q}</h3>
                                <ChevronDown className="w-5 h-5 text-stone-300 group-hover:text-[#7FB844] transition-colors" />
                            </button>
                            <p className="mt-6 text-stone-500 font-light leading-relaxed max-w-3xl italic">
                                {item.a}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
