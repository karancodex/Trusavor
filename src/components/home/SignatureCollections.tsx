import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import CompactProductCard from './CompactProductCard';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

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

    const wellnessScrollRef = useRef<HTMLDivElement>(null);
    const cosmeticsScrollRef = useRef<HTMLDivElement>(null);

    const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
        if (ref.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const ScrollButton = ({ direction, onClick }: { direction: 'left' | 'right', onClick: () => void }) => (
        <button
            onClick={onClick}
            className={clsx(
                "absolute top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all border border-stone-100",
                direction === 'left' ? "left-4 lg:left-0" : "right-4 lg:right-0"
            )}
            aria-label={`Scroll ${direction}`}
        >
            {direction === 'left' ? <ChevronLeft className="w-6 h-6 text-black" /> : <ChevronRight className="w-6 h-6 text-black" />}
        </button>
    );

    return (
        <section ref={containerRef} className="py-20 relative overflow-hidden bg-premium-light">
            <div className="container mx-auto px-6 relative z-10">

                {/* Wellness Horizontal Scroll */}
                <div className="mb-24 group/row relative">
                    {/* Background Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-wellness-accent/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/3 z-0" />

                    <div className="text-center mb-20 relative z-10">
                        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-premium-gold block mb-6">Biological Rituals</span>
                        <h2 className="text-4xl md:text-6xl font-serif italic text-premium-text-primary mb-8">Wellness <span className="text-wellness-accent font-serif italic">Essentials</span></h2>
                        <div className="flex flex-col items-center gap-6">
                            <p className="text-sm text-premium-text-secondary font-light max-w-md mx-auto">Ancestral wisdom meets modern molecular science for peak biological performance.</p>

                        </div>
                        <Link to="/wellness" className="group flex justify-end items-center gap-3 text-[9px] font-black uppercase tracking-widest text-premium-text-muted hover:text-black transition-all">
                            View Full Collection <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-black" />
                        </Link>
                    </div>

                    <div className="relative group/list">
                        <ScrollButton direction="left" onClick={() => scroll(wellnessScrollRef, 'left')} />
                        <ScrollButton direction="right" onClick={() => scroll(wellnessScrollRef, 'right')} />

                        <div ref={wellnessScrollRef} className="overflow-x-auto hide-scrollbar -mx-6 px-6 relative z-10 scroll-smooth">
                            <div className="flex gap-8 pb-8 min-w-max">
                                {wellnessProducts.map((product, i) => (
                                    <div key={product.id} className="w-[240px] md:w-[280px]">
                                        <CompactProductCard product={product} theme="wellness" />
                                    </div>
                                ))}
                                {/* Visual Placeholder for "More" */}
                                <Link to="/wellness" className="w-[240px] md:w-[280px] aspect-[4/5] rounded-3xl border border-dashed border-premium-gold/30 flex flex-col items-center justify-center gap-4 group/more hover:border-premium-gold transition-colors bg-white hover:shadow-xl">
                                    <div className="w-10 h-10 rounded-full border border-premium-gold/20 flex items-center justify-center group-hover/more:bg-premium-gold group-hover/more:text-black transition-all">
                                        <ArrowRight className="w-4 h-4 text-black group-hover/more:text-black" />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-premium-text-muted">Explore ritual</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cosmetics Horizontal Scroll */}
                <div className="group/row relative">
                    {/* Background Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-cosmetics-accent/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/3 z-0" />

                    <div className="text-center mb-20 relative z-10">
                        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-premium-gold block mb-6">Aesthetic Edits</span>
                        <h2 className="text-4xl md:text-6xl font-serif italic text-premium-text-primary mb-8">Cosmetic <span className="text-cosmetics-accent font-serif italic">Radiance</span></h2>
                        <div className="flex flex-col items-center gap-6">
                            <p className="text-sm text-premium-text-secondary font-light max-w-md mx-auto">Ethereal foundations designed to reveal your inner luminosity and refined grace.</p>

                        </div>
                        <Link to="/cosmetics" className="group flex justify-end items-center gap-3 text-[9px] font-black uppercase tracking-widest text-premium-text-muted hover:text-black transition-all">
                            View Full Edit <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-black" />
                        </Link>
                    </div>

                    <div className="relative group/list">
                        <ScrollButton direction="left" onClick={() => scroll(cosmeticsScrollRef, 'left')} />
                        <ScrollButton direction="right" onClick={() => scroll(cosmeticsScrollRef, 'right')} />

                        <div ref={cosmeticsScrollRef} className="overflow-x-auto hide-scrollbar -mx-6 px-6 scroll-smooth">
                            <div className="flex gap-8 pb-8 min-w-max">
                                {cosmeticsProducts.map((product, i) => (
                                    <div key={product.id} className="w-[240px] md:w-[280px]">
                                        <CompactProductCard product={product} theme="cosmetics" />
                                    </div>
                                ))}
                                {/* Visual Placeholder for "More" */}
                                <Link to="/cosmetics" className="w-[240px] md:w-[280px] aspect-[4/5] rounded-3xl border border-dashed border-premium-gold/30 flex flex-col items-center justify-center gap-4 group/more hover:border-premium-gold transition-colors bg-white hover:shadow-xl">
                                    <div className="w-10 h-10 rounded-full border border-premium-gold/20 flex items-center justify-center group-hover/more:bg-premium-gold group-hover/more:text-black transition-all">
                                        <ArrowRight className="w-4 h-4 text-black group-hover/more:text-black" />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-premium-text-muted">Explore edit</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Overlay for smooth edge fading */}
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-premium-light to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-premium-light to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default SignatureCollections;
