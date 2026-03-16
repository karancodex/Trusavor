import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Star, Globe } from 'lucide-react';

const BestBrandSection: React.FC = () => {
    const qualities = [
        { icon: Globe, label: 'Global Heritage', detail: 'Sourced from the heart of the Himalayas, connecting ancient wisdom to modern life.' },
        { icon: ShieldCheck, label: 'Unrivaled Purity', detail: 'Every molecule is tested for absolute resonance and biological excellence.' },
        { icon: Award, label: 'Artisanal Craft', detail: 'Small-batch production ensures the soul of every ingredient is preserved.' },
        { icon: Star, label: 'Prestige Status', detail: 'The chosen brand for those who seek the duality of wellness and luxury.' },
    ];

    return (
        <section className="py-20 bg-premium-light relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16 text-center text-premium-text-primary">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-black tracking-[1em] uppercase text-premium-gold ml-[1em] bg-white px-4 py-1 rounded-full border border-premium-gold/20">The Definitive Choice</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-8xl font-serif italic mb-12">
                        Trusavor: <span className="text-premium-gold">Best in Class</span>
                    </h2>
                    <p className="max-w-2xl text-premium-text-secondary text-lg font-light leading-relaxed">
                        Redefining the standards of premium care through biological intelligence and ethereal aesthetics. We don't just create products; we curate experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {qualities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group p-10 bg-white border border-stone-200 rounded-[32px] hover:border-premium-gold/50 hover:shadow-xl transition-all duration-700"
                        >
                            <item.icon className="w-10 h-10 text-premium-gold mb-8 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-2xl font-serif italic text-premium-text-primary mb-4">{item.label}</h3>
                            <p className="text-premium-text-secondary text-sm font-light leading-relaxed">
                                {item.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Popular Brand Banner */}
                <div className="mt-20 relative h-[500px] rounded-[48px] overflow-hidden group border border-stone-200 shadow-2xl">
                    <img
                        src="/assets/wellness_hero.png"
                        alt="Best Brand"
                        className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                        <motion.div
                            animate={{
                                opacity: [0.8, 1, 0.8],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full mb-8 shadow-sm"
                        >
                            <span className="text-white text-xs font-black uppercase tracking-[0.5em]">Most Popular 2024</span>
                        </motion.div>
                        <h3 className="text-4xl md:text-7xl font-serif italic text-white mb-8 drop-shadow-lg">Trusted by thousands of <br /> conscious ritualists.</h3>
                        <button className="bg-white text-premium-text-primary px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-premium-gold hover:text-white transition-colors duration-500 shadow-xl">
                            Join The Collective
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
        </section>
    );
};

export default BestBrandSection;
