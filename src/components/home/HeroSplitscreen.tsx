import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSplitscreen: React.FC = () => {
    const [hoveredSide, setHoveredSide] = useState<'wellness' | 'cosmetics' | null>(null);

    return (
        <section className="relative h-screen w-full flex overflow-hidden bg-premium-light mt-[-80px]">

            {/* Left Side: Wellness */}
            <motion.div
                className={`relative flex-1 overflow-hidden transition-all duration-1000 ease-[0.16, 1, 0.3, 1] border-r border-white/50 ${hoveredSide === 'wellness' ? 'flex-[1.5]' : hoveredSide === 'cosmetics' ? 'flex-[0.5]' : 'flex-1'
                    }`}
                onMouseEnter={() => setHoveredSide('wellness')}
                onMouseLeave={() => setHoveredSide(null)}
            >
                <div className="absolute inset-0 z-0 scale-110">
                    <img
                        src="/assets/wellness_hero.png"
                        alt="Wellness"
                        className="w-full h-full object-cover transition-all duration-[2s] scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center">
                    <motion.div
                        animate={{ y: hoveredSide === 'wellness' ? 0 : 30, opacity: hoveredSide === 'wellness' ? 1 : 0.8 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8"
                    >
                        <Leaf className="w-16 h-16 text-[#a3b18a] mx-auto drop-shadow-sm" />
                        <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-none tracking-tighter drop-shadow-lg">Wellness</h2>
                        <p className="max-w-xs mx-auto text-white/90 text-[10px] font-black uppercase tracking-[0.5em] leading-relaxed drop-shadow-md">
                            Biological Resonance <br /> Pure Extraction
                        </p>
                        <Link
                            to="/wellness"
                            className="inline-flex items-center gap-6 bg-[#a3b18a] text-white px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-110 hover:bg-white hover:text-[#a3b18a] transition-all duration-500 shadow-xl"
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
                        className="w-full h-full object-cover transition-all duration-[2s] scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center">
                    <motion.div
                        animate={{ y: hoveredSide === 'cosmetics' ? 0 : 30, opacity: hoveredSide === 'cosmetics' ? 1 : 0.8 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8"
                    >
                        <Sparkles className="w-16 h-16 text-[#d4a373] mx-auto drop-shadow-sm" />
                        <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-none tracking-tighter drop-shadow-lg">Cosmetics</h2>
                        <p className="max-w-xs mx-auto text-white/90 text-[10px] font-black uppercase tracking-[0.5em] leading-relaxed drop-shadow-md">
                            Ethereal Luminosity <br /> Modern Ritual
                        </p>
                        <Link
                            to="/cosmetics"
                            className="inline-flex items-center gap-6 bg-[#d4a373] text-white px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-110 hover:bg-white hover:text-[#d4a373] transition-all duration-500 shadow-xl"
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
