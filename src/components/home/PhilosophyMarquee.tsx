import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PhilosophyMarquee: React.FC = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [100, -200]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-100, 200]);

    return (
        <section ref={containerRef} className="py-60 bg-black overflow-hidden relative">
            <div className="space-y-16 lg:space-y-24">
                <motion.div style={{ x: x1 }} className="flex whitespace-nowrap gap-20">
                    {[...Array(3)].map((_, i) => (
                        <h2 key={i} className="text-[12vw] font-serif italic text-transparent stroke-white/10 style-stroke leading-none uppercase">
                            Molecular Purity • Biological Resonance • Ancestral Wisdom •
                        </h2>
                    ))}
                </motion.div>

                <motion.div style={{ x: x2 }} className="flex whitespace-nowrap gap-20">
                    {[...Array(3)].map((_, i) => (
                        <h2 key={i} className="text-[12vw] font-serif italic text-white/[0.03] leading-none uppercase">
                            The Dual Path • Holistic Architecture • Ethereal Living •
                        </h2>
                    ))}
                </motion.div>

                <motion.div style={{ x: x1 }} className="flex whitespace-nowrap gap-20">
                    {[...Array(3)].map((_, i) => (
                        <h2 key={i} className="text-[12vw] font-serif italic text-transparent stroke-white/5 style-stroke leading-none uppercase">
                            Scientific Precision • Cellular Harmony • Sacred Extracts •
                        </h2>
                    ))}
                </motion.div>
            </div>

            <style>{`
                .style-stroke {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.1);
                }
            `}</style>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center z-10 p-12 bg-black/40 backdrop-blur-2xl rounded-full border border-white/5">
                    <p className="text-[10px] font-black tracking-[1.5em] text-white/40 uppercase ml-[1.5em]">The Philosophy</p>
                </div>
            </div>
        </section>
    );
};

export default PhilosophyMarquee;
