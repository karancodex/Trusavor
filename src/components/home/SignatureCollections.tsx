import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import CompactProductCard from './CompactProductCard';
import { ArrowRight } from 'lucide-react';

interface SignatureCollectionsProps {
    wellnessProducts: any[];
    cosmeticsProducts: any[];
}

const SignatureCollections: React.FC<SignatureCollectionsProps> = ({ wellnessProducts, cosmeticsProducts }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="py-40 relative overflow-hidden bg-black">
            <div className="container mx-auto px-6 relative z-10">
                {/* Minimalist Section Header */}
                {/* <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[9px] font-black uppercase tracking-[0.8em] text-white/30 block mb-6"
                        >
                            The Signature Edit
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-serif italic text-white leading-tight"
                        >
                            Curated <span className="text-wellness-accent">Craft</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-white/40 max-w-xs font-light leading-relaxed mb-2"
                    >
                        A meticulously selected collection of essentials designed for the conscious modern ritual.
                    </motion.p>
                </div> */}

                {/* Wellness Horizontal Scroll */}
                <div className="mb-48 group/row relative">
                    {/* Background Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-wellness-accent/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/3 z-0" />

                    <div className="text-center mb-20 relative z-10">
                        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/30 block mb-6">Biological Rituals</span>
                        <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-8">Wellness <span className="text-wellness-accent">Essentials</span></h2>
                        <div className="flex flex-col items-center gap-6">
                            <p className="text-sm text-white/40 font-light">Ancestral wisdom meets modern molecular science for peak biological performance.</p>

                        </div>
                        <Link to="/wellness" className="group flex justify-end items-center gap-3 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all">
                            View Full Collection <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="overflow-x-auto hide-scrollbar -mx-6 px-6 relative z-10">
                        <div className="flex gap-8 pb-8 min-w-max">
                            {wellnessProducts.map((product, i) => (
                                <div key={product.id} className="w-[240px] md:w-[280px]">
                                    <CompactProductCard product={product} theme="wellness" />
                                </div>
                            ))}
                            {/* Visual Placeholder for "More" */}
                            <Link to="/wellness" className="w-[240px] md:w-[280px] aspect-[4/5] rounded-3xl border border-dashed border-white/10 flex flex-col items-center justify-center gap-4 group/more hover:border-wellness-accent/50 transition-colors">
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/more:bg-white group-hover/more:text-black transition-all">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Explore ritual</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Cosmetics Horizontal Scroll */}
                <div className="group/row relative">
                    {/* Background Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-cosmetics-accent/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/3 z-0" />

                    <div className="text-center mb-20 relative z-10">
                        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/30 block mb-6">Aesthetic Edits</span>
                        <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-8">Cosmetic <span className="text-cosmetics-accent">Radiance</span></h2>
                        <div className="flex flex-col items-center gap-6">
                            <p className="text-sm text-white/40  font-light">Ethereal foundations designed to reveal your inner luminosity and refined grace.</p>

                        </div>
                        <Link to="/cosmetics" className="group flex justify-end items-center gap-3 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all">
                            View Full Edit <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="overflow-x-auto hide-scrollbar -mx-6 px-6">
                        <div className="flex gap-8 pb-8 min-w-max">
                            {cosmeticsProducts.map((product, i) => (
                                <div key={product.id} className="w-[240px] md:w-[280px]">
                                    <CompactProductCard product={product} theme="cosmetics" />
                                </div>
                            ))}
                            {/* Visual Placeholder for "More" */}
                            <Link to="/cosmetics" className="w-[240px] md:w-[280px] aspect-[4/5] rounded-3xl border border-dashed border-white/10 flex flex-col items-center justify-center gap-4 group/more hover:border-cosmetics-accent/50 transition-colors">
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/more:bg-white group-hover/more:text-black transition-all">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Explore edit</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Overlay for smooth edge fading */}
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default SignatureCollections;
