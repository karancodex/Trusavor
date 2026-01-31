import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Sparkles, ArrowRight } from 'lucide-react';

const HeroV3: React.FC = () => {
    return (
        <section className="relative h-screen w-full bg-[#f8f7f4] overflow-hidden pt-[80px]"> {/* Coping with fixed header */}
            <div className="container mx-auto px-6 h-full flex flex-col md:flex-row gap-4 pb-4">

                {/* Left Card: Wellness */}
                <div className="flex-1 relative rounded-[32px] overflow-hidden group cursor-pointer h-full">
                    <Link to="/wellness" className="block w-full h-full">
                        <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors z-20" />
                        <motion.div
                            className="absolute inset-0 z-0"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img
                                src="/assets/wellness_hero.png"
                                alt="Biological Wellness"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent z-10 opacity-80" />

                        <div className="absolute bottom-10 left-10 z-30 text-white">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-500/30">
                                    01 · Biological
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-serif italic mb-2 tracking-tight">Wellness</h2>
                            <p className="text-emerald-50 font-sans max-w-sm mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Molecular formulations for the conscious biology.
                            </p>
                            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest group-hover:gap-6 transition-all duration-500">
                                Explore <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Right Card: Cosmetics */}
                <div className="flex-1 relative rounded-[32px] overflow-hidden group cursor-pointer h-full">
                    <Link to="/cosmetics" className="block w-full h-full">
                        <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors z-20" />
                        <motion.div
                            className="absolute inset-0 z-0"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img
                                src="/assets/cosmetics_hero.png"
                                alt="Ethereal Cosmetics"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 to-transparent z-10 opacity-80" />

                        <div className="absolute bottom-10 left-10 z-30 text-white">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-rose-500/20 backdrop-blur-md text-rose-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-rose-500/30">
                                    02 · Aesthetics
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-serif italic mb-2 tracking-tight">Cosmetics</h2>
                            <p className="text-rose-50 font-sans max-w-sm mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Luminosity and pigment for the modern ritual.
                            </p>
                            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest group-hover:gap-6 transition-all duration-500">
                                Explore <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default HeroV3;
