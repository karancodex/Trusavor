import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Leaf, Sparkles } from 'lucide-react';

const AnimatedHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    // Parallax & Fade effects
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);

    const smoothTextY = useSpring(textY, springConfig);
    const smoothBgY = useSpring(bgY, springConfig);

    return (
        <section
            ref={containerRef}
            className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden bg-[#050505]"
        >
            {/* Cinematic Background Layer */}
            <motion.div
                style={{ y: smoothBgY, scale, opacity: useTransform(scrollYProgress, [0, 0.8], [0.8, 0]) }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505] z-10" />
                <img
                    src="/hero_banner.png"
                    alt="Hero Banner"
                    className="w-full h-full object-cover opacity-60 mix-blend-lighten"
                />
            </motion.div>

            {/* Immersive 3D Floating Elements */}
            <div className="absolute inset-0 z-1 pointer-events-none">
                {/* Wellness Element - Left */}
                <motion.div
                    style={{
                        y: useSpring(useTransform(scrollYProgress, [0, 1], [0, -400]), springConfig),
                        rotate: useTransform(scrollYProgress, [0, 1], [0, 45]),
                        opacity
                    }}
                    className="absolute top-[30%] left-[10%] w-[30vw] max-w-sm blur-[2px] transition-all duration-1000"
                >
                    <img src="/shilajit_hero.png" alt="Wellness Origins" className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]" />
                </motion.div>

                {/* Cosmetics Element - Right */}
                <motion.div
                    style={{
                        y: useSpring(useTransform(scrollYProgress, [0, 1], [0, 300]), springConfig),
                        rotate: useTransform(scrollYProgress, [0, 1], [0, -30]),
                        opacity
                    }}
                    className="absolute bottom-[20%] right-[10%] w-[25vw] max-w-sm blur-[1px]"
                >
                    <img src="/cosmetic_hero.png" alt="Cosmetic Radiance" className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]" />
                </motion.div>

                {/* Depth Particles */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: Math.random() * 2000 - 1000, y: Math.random() * 2000 - 1000, scale: Math.random() }}
                            animate={{
                                y: [null, Math.random() * -100 - 50],
                                x: [null, Math.random() * 50 - 25]
                            }}
                            transition={{ duration: 10 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                        />
                    ))}
                </div>
            </div>

            {/* Typography Centerpiece */}
            <div className="relative z-10 text-center px-4">
                <motion.div
                    style={{ y: smoothTextY, opacity }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[1em] text-white/30 ml-[1em]">
                            Established Rituals
                        </span>
                    </motion.div>

                    <div className="relative">
                        <motion.h1
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="text-[18vw] lg:text-[14rem] font-serif font-black text-white leading-none tracking-tighter italic filter drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] mix-blend-plus-lighter"
                        >
                            Trusavor
                        </motion.h1>

                        {/* Glow Behind Logo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[30%] bg-white/10 blur-[120px] rounded-full pointer-events-none" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="mt-12 flex flex-col items-center gap-12"
                    >
                        <p className="font-serif italic text-white/40 text-lg md:text-3xl tracking-[0.4em] font-light flex items-center justify-center gap-8">
                            WELLNESS <span className="w-16 h-px bg-white/10" /> COSMETICS
                        </p>

                        {/* Visual Indicators */}
                        <div className="flex gap-24 mt-8">
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-14 h-14 rounded-2xl border border-wellness-accent/20 flex items-center justify-center text-wellness-accent transition-all duration-700 group-hover:scale-110 group-hover:bg-wellness-accent group-hover:text-black">
                                    <Leaf className="w-5 h-5" />
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white transition-all">Organic</span>
                            </div>
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-14 h-14 rounded-2xl border border-cosmetics-accent/20 flex items-center justify-center text-cosmetics-accent transition-all duration-700 group-hover:scale-110 group-hover:bg-cosmetics-accent group-hover:text-black">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white transition-all">Radiance</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#050505] to-transparent z-[2]" />
        </section>
    );
};

export default AnimatedHero;
