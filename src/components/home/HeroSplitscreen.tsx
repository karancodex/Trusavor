import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSplitscreen: React.FC = () => {
    const [hoveredSide, setHoveredSide] = useState<'wellness' | 'cosmetics' | null>(null);

    return (
        <section className="relative h-screen w-full flex overflow-hidden bg-black mt-[-80px]">

            {/* Left Side: Wellness */}
            <motion.div
                className={`relative flex-1 overflow-hidden transition-all duration-1000 ease-[0.16, 1, 0.3, 1] border-r border-white/5 ${hoveredSide === 'wellness' ? 'flex-[1.5]' : hoveredSide === 'cosmetics' ? 'flex-[0.5]' : 'flex-1'
                    }`}
                onMouseEnter={() => setHoveredSide('wellness')}
                onMouseLeave={() => setHoveredSide(null)}
            >
                <div className="absolute inset-0 z-0 scale-110">
                    <img
                        src="/assets/wellness_hero.png"
                        alt="Wellness"
                        className="w-full h-full object-cover opacity-60 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-wellness-main/20 mix-blend-overlay" />
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center bg-gradient-to-r from-black/60 to-transparent">
                    <motion.div
                        animate={{ y: hoveredSide === 'wellness' ? 0 : 50, opacity: hoveredSide === 'wellness' ? 1 : 0.8 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <Leaf className="w-12 h-12 text-wellness-accent mx-auto" />
                        <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-none">Wellness</h2>
                        <p className="max-w-xs mx-auto text-white/60 text-sm font-light leading-relaxed">
                            Biological resonance through pure extraction. Transform your internal landscape.
                        </p>
                        <Link
                            to="/wellness"
                            className="inline-flex items-center gap-4 bg-wellness-accent text-black px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform"
                        >
                            Enter Ritual <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Right Side: Cosmetics */}
            <motion.div
                className={`relative flex-1 overflow-hidden transition-all duration-1000 ease-[0.16, 1, 0.3, 1] ${hoveredSide === 'cosmetics' ? 'flex-[1.5]' : hoveredSide === 'wellness' ? 'flex-[0.5]' : 'flex-1'
                    }`}
                onMouseEnter={() => setHoveredSide('cosmetics')}
                onMouseLeave={() => setHoveredSide(null)}
            >
                <div className="absolute inset-0 z-0 scale-110">
                    <img
                        src="/assets/cosmetics_hero.png"
                        alt="Cosmetics"
                        className="w-full h-full object-cover opacity-60 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-cosmetics-main/20 mix-blend-overlay" />
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center bg-gradient-to-l from-black/60 to-transparent">
                    <motion.div
                        animate={{ y: hoveredSide === 'cosmetics' ? 0 : 50, opacity: hoveredSide === 'cosmetics' ? 1 : 0.8 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <Sparkles className="w-12 h-12 text-cosmetics-accent mx-auto" />
                        <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-none">Cosmetics</h2>
                        <p className="max-w-xs mx-auto text-white/60 text-sm font-light leading-relaxed">
                            Ethereal luminosity for the modern soul. Redefine your external radiance.
                        </p>
                        <Link
                            to="/cosmetics"
                            className="inline-flex items-center gap-4 bg-cosmetics-accent text-black px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform"
                        >
                            Enter Radiance <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSplitscreen;
