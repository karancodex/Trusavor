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
        vitality: { name: 'Pure Himalayan Shilajit', type: 'Biological Ritual', img: '/shilajit_hero.png' },
        radiance: { name: 'Ethereal Serum No. 5', type: 'Radiance Edit', img: '/cosmetic_hero.png' },
        balance: { name: 'Ashwagandha Complex', type: 'Resonant Adaptogen', img: '/shilajit_hero.png' },
        renewal: { name: 'Obsidian Night Cream', type: 'Cellular Foundation', img: '/cosmetic_hero.png' }
    };

    return (
        <section className="py-40 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/30 block mb-6">Concierge</span>
                    <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-8">Personalized <span className="text-cosmetics-accent">Rituals</span></h2>
                    <p className="text-sm text-white/40 max-w-md mx-auto font-light">Select your primary aspiration for a curated molecular recommendation.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    {/* Goal Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                        {goals.map((goal) => (
                            <button
                                key={goal.id}
                                onClick={() => setSelectedGoal(goal.id)}
                                className={clsx(
                                    "p-8 rounded-[32px] text-left transition-all duration-700 border group relative overflow-hidden",
                                    selectedGoal === goal.id
                                        ? "bg-white border-white text-black"
                                        : "bg-white/5 border-white/5 text-white hover:border-white/20"
                                )}
                            >
                                <div className="relative z-10">
                                    <div className={clsx(
                                        "w-8 h-8 rounded-full mb-6 flex items-center justify-center transition-colors",
                                        selectedGoal === goal.id ? "bg-black text-white" : "bg-white/10 text-white/40"
                                    )}>
                                        {selectedGoal === goal.id ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                                    </div>
                                    <h4 className="font-serif italic text-xl mb-2">{goal.label}</h4>
                                    <p className={clsx(
                                        "text-xs font-light leading-relaxed",
                                        selectedGoal === goal.id ? "text-black/60" : "text-white/30"
                                    )}>{goal.desc}</p>
                                </div>
                                {selectedGoal === goal.id && (
                                    <motion.div layoutId="goal-bg" className="absolute inset-0 bg-white" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Recommendation Card */}
                    <div className="relative h-full perspective-2000">
                        <AnimatePresence mode="wait">
                            {selectedGoal ? (
                                <motion.div
                                    key={selectedGoal}
                                    initial={{ opacity: 0, rotateY: 45, x: 50 }}
                                    animate={{ opacity: 1, rotateY: 0, x: 0 }}
                                    exit={{ opacity: 0, rotateY: -45, x: -50 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full h-full bg-[#0a0a0a] rounded-[48px] border border-white/10 p-12 flex flex-col justify-between group shadow-2xl"
                                >
                                    <div>
                                        <span className={clsx(
                                            "text-[10px] font-black uppercase tracking-widest",
                                            recommendations[selectedGoal as keyof typeof recommendations].type.includes('Biological') ? "text-wellness-accent" : "text-cosmetics-accent"
                                        )}>
                                            {recommendations[selectedGoal as keyof typeof recommendations].type}
                                        </span>
                                        <h3 className="text-3xl md:text-5xl font-serif italic text-white mt-4 leading-tight">
                                            {recommendations[selectedGoal as keyof typeof recommendations].name}
                                        </h3>
                                    </div>

                                    <div className="relative flex-grow flex items-center justify-center my-12">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                                        <img
                                            src={recommendations[selectedGoal as keyof typeof recommendations].img}
                                            alt="Rec"
                                            className="w-3/4 h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                                        />
                                    </div>

                                    <button className="flex items-center justify-between w-full group/btn">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover/btn:text-white transition-colors">Start Your Journey</span>
                                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="w-full h-full rounded-[48px] border border-dashed border-white/5 flex flex-col items-center justify-center text-center p-12">
                                    <Sparkles className="w-12 h-12 text-white/10 mb-8 animate-pulse" />
                                    <p className="text-white/20 font-serif italic text-2xl">Awaiting your selection...</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <img src="/refined_bg.png" alt="Overlay" className="w-full h-full object-cover" />
            </div>
        </section>
    );
};

export default InteractiveRecommendations;
