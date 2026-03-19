import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "The Essence of Himalayas",
        subtitle: "01 · Pure Shilajit",
        description: "Experience the molecular power of wild-harvested minerals. Embossed with the mark of purity.",
        image: "/website/hero/banner_shilajit.png",
        link: "/product/himalayan-shilajit",
        theme: "wellness",
        accent: "emerald"
    },
    {
        id: 2,
        title: "Luminous Glass Skin",
        subtitle: "02 · Ethereal Serum",
        description: "Transform your ritual with iridescent hydration and rose gold elegance.",
        image: "/website/hero/banner_serum.png",
        link: "/personal-care",
        theme: "cosmetics",
        accent: "rose"
    },
    {
        id: 3,
        title: "Zen Ceremonial Matcha",
        subtitle: "03 · Mindful Purity",
        description: "Vibrant emerald energy meet minimalist gold-marked artisan tins.",
        image: "/website/hero/banner_matcha.png",
        link: "/product/matcha-imperial",
        theme: "wellness",
        accent: "stone"
    }
];

const HeroV3: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[480px] md:h-[540px] lg:h-[600px] w-full bg-[#f8f7f4] overflow-hidden pt-[80px]"> {/* Refined fixed height */}
            <div className="max-w-[1800px] mx-auto px-4 md:px-8 h-full pb-6">
                <div className="relative h-full w-full rounded-[30px] md:rounded-[48px] overflow-hidden group shadow-2xl">
                    <AnimatePresence>
                        <motion.div
                            key={current}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <img
                                src={slides[current].image}
                                alt={slides[current].title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/30 to-transparent z-10" />

                            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-20 text-white">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-center gap-2 mb-6"
                                >
                                    <span className={`bg-${slides[current].accent}-500/20 backdrop-blur-md text-${slides[current].accent}-100 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border border-white/20`}>
                                        {slides[current].subtitle}
                                    </span>
                                </motion.div>
                                <motion.h2
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl text-stone-200 md:text-5xl font-serif italic mb-6 tracking-tight leading-[1.2]"
                                >
                                    {slides[current].title}
                                </motion.h2>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-stone-200 font-sans max-w-md mb-10 text-base md:text-lg leading-relaxed italic"
                                >
                                    {slides[current].description}
                                </motion.p>
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Link
                                        to={slides[current].link}
                                        className="inline-flex items-center gap-4 px-10 py-5 bg-[#7FB844] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-stone-900 transition-all hover:gap-8 shadow-xl shadow-[#7FB844]/20"
                                    >
                                        Explore <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="absolute bottom-10 right-10 z-30 flex gap-4">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1 rounded-full transition-all ${current === i ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/60"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroV3;
