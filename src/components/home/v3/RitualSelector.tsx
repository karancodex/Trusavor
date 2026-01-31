import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const RitualSelector: React.FC = () => {
    // Default to 'vitality' which is the first card
    const [activeId, setActiveId] = useState<string>('vitality');

    const rituals = [
        {
            id: 'vitality',
            title: 'Vitality',
            subtitle: 'Morning Energy',
            icon: Sun,
            description: "Awaken your cellular engines with high-altitude mineral density.",
            product: "Himalayan Shilajit",
            image: "/assets/wellness_hero.png",
            color: "bg-emerald-900",
            textColor: "text-emerald-100"
        },
        {
            id: 'radiance',
            title: 'Radiance',
            subtitle: 'Glass Skin',
            icon: Sparkles,
            description: "Achieve a translucent, luminous glow with ethereal hydration.",
            product: "Luminous Serum",
            image: "/assets/cosmetics_hero.png",
            color: "bg-rose-900",
            textColor: "text-rose-100"
        },
        {
            id: 'balance',
            title: 'Balance',
            subtitle: 'Inner Harmony',
            icon: Activity,
            description: "Stabilize cortisol and harmonize biological rhythms.",
            product: "Ashwagandha Complex",
            image: "/assets/wellness_hero.png",
            color: "bg-stone-900",
            textColor: "text-stone-100"
        },
        {
            id: 'renewal',
            title: 'Renewal',
            subtitle: 'Overnight Repair',
            icon: Moon,
            description: "Deep cellular regeneration while you sleep.",
            product: "Obsidian Night Cream",
            image: "/assets/cosmetics_hero.png",
            color: "bg-indigo-950",
            textColor: "text-indigo-100"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-stone-400 mb-4 block">Concierge</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Find Your <i className="text-stone-400">Ritual</i></h2>
                </div>

                <div className="flex flex-col lg:flex-row h-[600px] gap-4">
                    {rituals.map((ritual) => {
                        const isActive = activeId === ritual.id;
                        return (
                            <motion.div
                                key={ritual.id}
                                layout
                                onMouseEnter={() => setActiveId(ritual.id)}
                                onClick={() => setActiveId(ritual.id)} // Keep click for touch devices
                                className={clsx(
                                    "relative rounded-[40px] overflow-hidden cursor-pointer transition-all duration-700 ease-[0.32,0.72,0,1]",
                                    isActive ? "flex-[3] lg:flex-[3]" : "flex-1 opacity-80 hover:opacity-100"
                                )}
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0">
                                    <img
                                        src={ritual.image}
                                        alt={ritual.title}
                                        className="w-full h-full object-cover transition-transform duration-1000"
                                        style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
                                    />
                                    <div className={clsx("absolute inset-0 transition-colors duration-500",
                                        isActive ? "opacity-80" : "opacity-60 grayscale-[0.5]",
                                        ritual.color
                                    )} />
                                </div>

                                {/* Content Container */}
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">

                                    {/* Top Icon/Title */}
                                    <div className="flex justify-between items-start">
                                        <div className={clsx(
                                            "w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border transition-all",
                                            isActive ? "bg-white/20 border-white/30 text-white" : "bg-white/10 border-white/10 text-white/60"
                                        )}>
                                            <ritual.icon className="w-6 h-6" />
                                        </div>

                                        {/* Vertical Title for inactive state on desktop */}
                                        {!isActive && (
                                            <div className="hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap -rotate-90 origin-left">
                                                <span className="text-xl font-bold uppercase tracking-widest text-white/80">{ritual.title}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Active Content */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                                className="relative z-10"
                                            >
                                                <span className={clsx("text-xs font-bold uppercase tracking-widest mb-2 block", ritual.textColor)}>{ritual.subtitle}</span>
                                                <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">{ritual.title}</h3>
                                                <p className="text-white/80 text-lg font-light leading-relaxed max-w-md mb-8">
                                                    {ritual.description}
                                                </p>

                                                {/* Product Recommendation Card */}
                                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 max-w-lg">
                                                    <div className="w-16 h-16 bg-white/20 rounded-full flex-shrink-0" />
                                                    <div className="flex-grow text-center md:text-left">
                                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Recommended</p>
                                                        <h4 className="text-xl font-serif text-white">{ritual.product}</h4>
                                                    </div>
                                                    <Link to="/shop" className="w-12 h-12 bg-white text-stone-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                                        <ArrowRight className="w-5 h-5" />
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RitualSelector;
