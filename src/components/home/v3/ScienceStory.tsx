import React from 'react';
import { motion } from 'framer-motion';
import { Database, Activity, Sparkles } from 'lucide-react';

const ScienceStory: React.FC = () => {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-[4/5] rounded-t-full rounded-b-[200px] overflow-hidden bg-stone-100 relative shadow-2xl">
                            <img
                                src="/assets/wellness_hero.png"
                                alt="Laboratory"
                                className="w-full h-full object-cover transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />

                            {/* Floating Stats */}
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white flex justify-between">
                                <div className="text-center">
                                    <span className="block text-2xl font-serif italic">100%</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Organic</span>
                                </div>
                                <div className="w-px bg-white/20" />
                                <div className="text-center">
                                    <span className="block text-2xl font-serif italic">0%</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Synthetics</span>
                                </div>
                                <div className="w-px bg-white/20" />
                                <div className="text-center">
                                    <span className="block text-2xl font-serif italic">High</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Potency</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-rose-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Philosophy</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 leading-tight">
                            Beyond <br /> <i className="text-stone-400">Surface Level.</i>
                        </h2>
                        <p className="text-stone-600 text-lg font-light leading-relaxed mb-12">
                            True beauty utilizes biological intelligence. We don't just formulate products; we engineer rituals that communicate with your cells. From Himalayan Shilajit to adaptogenic serums, every drop is a calculated step towards harmony.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Database, title: "Molecular Precision", text: "Ingredients selected at the cellular level." },
                                { icon: Activity, title: "Biological Resonance", text: "Formulas that synchronize with your rhythms." },
                                { icon: Sparkles, title: "Ethereal Finish", text: "Textures that feel like a second skin." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif text-stone-900 mb-1">{item.title}</h4>
                                        <p className="text-stone-500 text-sm max-w-xs">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScienceStory;
