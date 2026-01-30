import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import clsx from 'clsx';

const testimonials = [
    {
        name: "Evelyn Thorne",
        role: "Creative Director",
        text: "The Ceremonial Matcha has completely redefined my morning ritual. It's not just a drink; it's a moment of pure biological clarity.",
        rating: 5,
        type: "wellness"
    },
    {
        name: "Marcus Chen",
        role: "Athletic Performance Coach",
        text: "I've tried every Shilajit on the market. Trusavor's extraction purity is visibly superior. My recovery levels have peaked.",
        rating: 5,
        type: "wellness"
    },
    {
        name: "Sophia Rossi",
        role: "Skincare Specialist",
        text: "The Ethereal Serum is a masterpiece of molecular balance. It provides a luminosity that feels internal rather than just topical.",
        rating: 5,
        type: "cosmetics"
    }
];

const TrustConsensus: React.FC = () => {
    return (
        <section className="py-20 bg-premium-light relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[9px] font-black uppercase tracking-[0.8em] text-premium-gold block mb-6">Consensus</span>
                    <h2 className="text-4xl md:text-6xl font-serif italic text-premium-text-primary">The <span className="text-wellness-accent">Resonance</span> Report</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-stone-200 rounded-[40px] p-10 relative group hover:shadow-xl hover:border-premium-gold/30 transition-all"
                        >
                            <Quote className={clsx(
                                "absolute top-8 right-10 w-12 h-12 opacity-10 transition-opacity group-hover:opacity-20",
                                t.type === 'wellness' ? "text-wellness-accent" : "text-cosmetics-accent"
                            )} />

                            <div className="flex gap-1 mb-8">
                                {[...Array(t.rating)].map((_, j) => (
                                    <Star key={j} className={clsx(
                                        "w-3 h-3 fill-current",
                                        t.type === 'wellness' ? "text-wellness-accent" : "text-cosmetics-accent"
                                    )} />
                                ))}
                            </div>

                            <p className="text-lg md:text-xl font-serif italic text-premium-text-secondary mb-10 leading-relaxed">
                                "{t.text}"
                            </p>

                            <div className="pt-8 border-t border-stone-100">
                                <h4 className="text-sm font-bold text-premium-text-primary tracking-widest">{t.name}</h4>
                                <p className="text-[10px] uppercase font-black tracking-widest text-premium-text-muted mt-1">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustConsensus;
