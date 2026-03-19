import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Leaf, Droplets } from 'lucide-react';

const WhyTrusavor: React.FC = () => {
    return (
        <div className="pt-32 pb-20 bg-stone-900 min-h-screen text-white">
            <div className="max-w-[1800px] mx-auto px-4 md:px-8">
                <div className="max-w-4xl mb-32">
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-[#7FB844] block mb-6"
                    >
                        Performance Beyond Nature
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-serif leading-[0.8] tracking-tighter italic mb-12"
                    >
                        Why <br /> <span className="text-stone-400">Trusavor?</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl font-light text-stone-400 leading-relaxed italic border-l border-[#7FB844]/40 pl-8"
                    >
                        Because the distance between 'natural' and 'effective' is measured in precision. Trusavor bridge this gap through bio-calculative rituals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { icon: ShieldCheck, title: "Molecular Cert.", text: "Batch-tested for cellular transparency and ultimate purity." },
                        { icon: Zap, title: "High Bio-Avail.", text: "Engineered for rapid biological resonance and deep absorption." },
                        { icon: Leaf, title: "Wild Harvest", text: "Minerals and botanicals sourced from untouched Himalayan altitudes." },
                        { icon: Droplets, title: "Ether Base", text: "Zero synthetics. Pure, cold-pressed bases for ethereal textures." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[40px] border border-white/5 hover:bg-white/5 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#7FB844]/20 flex items-center justify-center text-[#7FB844] mb-8 group-hover:bg-[#7FB844] group-hover:text-white transition-all">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                            <p className="text-stone-500 font-light leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 rounded-[60px] overflow-hidden relative aspect-[21/9] flex items-center justify-center">
                    <img
                        src="/website/hero/banner_shilajit.png"
                        alt="Macro Shilajit"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.8] scale-110"
                    />
                    <div className="absolute inset-0 bg-stone-900/40" />
                    <div className="relative z-10 text-center max-w-2xl px-6">
                        <h2 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight">Nature's intelligence, <br /> scientifically unlocked.</h2>
                        <button className="bg-[#7FB844] text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-stone-900 transition-all shadow-2xl">
                            Explore Bio-Rituals
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyTrusavor;
