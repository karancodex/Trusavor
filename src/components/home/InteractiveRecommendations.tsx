import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import clsx from 'clsx';

const InteractiveRecommendations: React.FC = () => {
    const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

    const goals = [
        { id: 'vitality', label: 'Mental Vitality', theme: 'wellness', desc: 'Enhance focus and cognitive longevity.' },
        { id: 'radiance', label: 'Glass Skin', theme: 'cosmetics', desc: 'Achieve a translucent, luminous glow.' },
        { id: 'balance', label: 'Inner Balance', theme: 'wellness', desc: 'Harmonize your biological rhythms.' },
        { id: 'renewal', label: 'Ethereal Renewal', theme: 'cosmetics', desc: 'Overnight cellular regeneration.' }
    ];

    const recommendations = {
        vitality: { name: 'Pure Himalayan Shilajit', type: 'Biological Ritual', img: '/assets/shilajit_hero.png' },
        radiance: { name: 'Ethereal Serum No. 5', type: 'Radiance Edit', img: '/assets/cosmetic_hero.png' },
        balance: { name: 'Ashwagandha Complex', type: 'Resonant Adaptogen', img: '/assets/shilajit_hero.png' },
        renewal: { name: 'Obsidian Night Cream', type: 'Cellular Foundation', img: '/assets/cosmetic_hero.png' }
    };

    return (
        <section className="py-20 bg-premium-light relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-premium-gold block mb-6">Concierge</span>
                    <h2 className="text-4xl md:text-6xl font-serif italic text-premium-text-primary mb-8">Personalized <span className="text-cosmetics-accent font-serif italic">Rituals</span></h2>
                    <p className="text-sm text-premium-text-secondary max-w-md mx-auto font-light">Select your primary aspiration for a curated molecular recommendation.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:h-[520px] items-stretch">
                    {/* Goal Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
                        {goals.map((goal) => (
                            <button
                                key={goal.id}
                                onClick={() => setSelectedGoal(goal.id)}
                                className={clsx(
                                    "p-6 md:p-8 rounded-[28px] text-left transition-all duration-700 border group relative overflow-hidden h-full flex flex-col justify-center shadow-sm hover:shadow-xl",
                                    selectedGoal === goal.id
                                        ? "bg-premium-text-primary border-premium-text-primary text-white"
                                        : "bg-white border-stone-200 text-premium-text-secondary hover:border-premium-gold/50"
                                )}
                            >
                                <div className="relative z-10">
                                    <div className={clsx(
                                        "w-9 h-9 rounded-full mb-5 flex items-center justify-center transition-colors",
                                        selectedGoal === goal.id ? "bg-white text-premium-text-primary" : "bg-stone-100 text-premium-text-muted"
                                    )}>
                                        {selectedGoal === goal.id ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                                    </div>
                                    <h4 className="font-serif italic text-lg md:text-xl mb-1.5">{goal.label}</h4>
                                    <p className={clsx(
                                        "text-[10px] md:text-[11px] font-light leading-relaxed max-w-[180px]",
                                        selectedGoal === goal.id ? "text-white/80" : "text-premium-text-muted"
                                    )}>{goal.desc}</p>
                                </div>
                                {selectedGoal === goal.id && (
                                    <motion.div layoutId="goal-bg" className="absolute inset-0 bg-premium-text-primary" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Recommendation Card */}
                    <div className="relative h-full perspective-2000 min-h-[450px] lg:min-h-0">
                        <AnimatePresence mode="wait">
                            {selectedGoal ? (
                                <motion.div
                                    key={selectedGoal}
                                    initial={{ opacity: 0, rotateY: 45, x: 50 }}
                                    animate={{ opacity: 1, rotateY: 0, x: 0 }}
                                    exit={{ opacity: 0, rotateY: -45, x: -50 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0 bg-white rounded-[40px] border border-stone-200 p-10 md:p-12 flex flex-col justify-between group shadow-2xl overflow-hidden"
                                >
                                    <div>
                                        <span className={clsx(
                                            "text-[9px] font-black uppercase tracking-widest",
                                            recommendations[selectedGoal as keyof typeof recommendations].type.includes('Biological') ? "text-wellness-accent" : "text-cosmetics-accent"
                                        )}>
                                            {recommendations[selectedGoal as keyof typeof recommendations].type}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-serif italic text-premium-text-primary mt-3 leading-tight">
                                            {recommendations[selectedGoal as keyof typeof recommendations].name}
                                        </h3>
                                    </div>

                                    <div className="relative flex-grow flex items-center justify-center my-6 min-h-0">
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                                        <img
                                            src={recommendations[selectedGoal as keyof typeof recommendations].img}
                                            alt="Rec"
                                            className="max-h-[70%] w-auto object-contain drop-shadow-xl"
                                        />
                                    </div>

                                    <button className="flex items-center justify-between w-full group/btn pt-6 border-t border-stone-100">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-premium-text-muted group-hover/btn:text-premium-text-primary transition-colors">Start Your Journey</span>
                                        <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover/btn:bg-premium-text-primary group-hover/btn:text-white transition-all shadow-sm">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="absolute inset-0 rounded-[40px] border border-dashed border-stone-200 flex flex-col items-center justify-center text-center p-12 bg-white">
                                    <Sparkles className="w-10 h-10 text-premium-gold/50 mb-6 animate-pulse" />
                                    <p className="text-premium-text-muted font-serif italic text-xl">Awaiting your selection...</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <img src="/assets/refined_bg.png" alt="Overlay" className="w-full h-full object-cover" />
            </div>
        </section>
    );
};

export default InteractiveRecommendations;
