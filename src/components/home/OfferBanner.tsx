import React from 'react';
import { motion } from 'framer-motion';
import { Percent, ArrowRight, Zap } from 'lucide-react';

const OfferBanner: React.FC = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-premium-light border-y border-stone-200">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-premium-gold/5 blur-[120px] rounded-full -translate-y-1/2" />
                <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-premium-accent/5 blur-[120px] rounded-full -translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/60 backdrop-blur-xl border border-white/40 p-8 lg:p-16 rounded-[40px] shadow-2xl"
                >
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-premium-gold/10 rounded-full border border-premium-gold/20">
                            <Zap className="w-4 h-4 text-premium-gold" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-premium-gold">Exclusive Limited Access</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-serif italic text-premium-text-primary leading-tight">
                            Elevate Your <br />
                            <span className="text-premium-gold">Prestige Ritual.</span>
                        </h2>

                        <p className="text-lg text-premium-text-secondary max-w-md font-light leading-relaxed">
                            Experience the pinnacle of Himalayan purity. Unlock premium collections with a refined 20% privilege on your first curation.
                        </p>

                        <div className="flex items-center gap-8">
                            <button className="px-10 py-5 bg-premium-gold text-white rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-premium-text-primary transition-all duration-500 flex items-center gap-4 shadow-lg">
                                Claim Privilege <ArrowRight className="w-4 h-4" />
                            </button>
                            <div className="flex flex-col">
                                <span className="text-2xl font-serif text-premium-text-primary italic">PRV20</span>
                                <span className="text-[8px] uppercase tracking-widest text-premium-text-muted font-bold">Access Code</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-premium-gold to-premium-accent rounded-3xl p-1 flex flex-col items-center justify-center text-premium-dark"
                        >
                            <div className="absolute inset-0 bg-white rounded-3xl m-[2px]" />
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <Percent className="w-16 h-16 text-premium-gold mb-4" />
                                <span className="text-7xl font-serif italic text-premium-gold mb-2">20%</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-premium-text-secondary">Privilege Offset</span>
                            </div>
                        </motion.div>

                        {/* Decorative Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-premium-gold/10 rounded-full animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-premium-gold/5 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OfferBanner;
