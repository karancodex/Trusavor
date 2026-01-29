import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Leaf, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const slides = [
        {
            title: "Trusavor Wellness",
            category: "VITALITY & ENERGY",
            subtitle: "Earth's Most Potent Rituals",
            description: "From the peaks of the Himalayas to your morning cup. Pure Shilajit and Ceremonial Matcha for holistic vitality.",
            buttonText: "EXPLORE WELLNESS",
            link: "/wellness",
            bgImage: "/src/assets/hero_bg_1.png",
            productImage: "/src/assets/hero_product_2.png",
            theme: "wellness",
            icon: <Leaf className="w-6 h-6" />
        },
        {
            title: "Trusavor Cosmetics",
            category: "BEAUTY & RADIANCE",
            subtitle: "Nature's Timeless Elegance",
            description: "Infused with botanical secrets for a radiant glow. Premium skincare designed for the modern beauty ritual.",
            buttonText: "EXPLORE COSMETICS",
            link: "/cosmetics",
            bgImage: "/src/assets/hero_bg_2.png",
            productImage: "/src/assets/serum.jpg",
            theme: "cosmetics",
            icon: <Sparkles className="w-6 h-6" />
        },
        {
            title: "The Golden Ritual",
            category: "EXCLUSIVE SELECTION",
            subtitle: "Pure Himalayan Gold",
            description: "Experience the transformative power of 85+ minerals. The ultimate foundation for your wellness journey.",
            buttonText: "SHOP THE RITUAL",
            link: "/all-collections",
            bgImage: "/src/assets/hero_bg_3.png",
            productImage: "/src/assets/hero_product_3.png",
            theme: "wellness",
            icon: <Leaf className="w-6 h-6" />
        }
    ];

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const imageIndex = Math.abs(page % slides.length);
    const currentSlide = slides[imageIndex];

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 8000);
        return () => clearInterval(timer);
    }, [page]);

    const variants: any = {
        enter: (direction: number) => ({
            opacity: 0,
            scale: 1.1
        }),
        center: {
            zIndex: 1,
            opacity: 1,
            scale: 1,
            transition: {
                opacity: { duration: 1, ease: "easeInOut" },
                scale: { duration: 1.5, ease: "easeOut" }
            }
        },
        exit: {
            zIndex: 0,
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" }
        }
    };

    const contentVariants: any = {
        hidden: { opacity: 0, x: -50 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5 + (i * 0.1),
                duration: 0.8,
                ease: "circOut"
            }
        })
    };

    return (
        <div className="relative w-full h-screen min-h-[800px] overflow-hidden bg-black">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                >
                    {/* Background with Slow Zoom */}
                    <div className="absolute inset-0">
                        <img
                            src={currentSlide.bgImage}
                            alt={currentSlide.title}
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className={clsx(
                            "absolute inset-0 opacity-40 mix-blend-overlay",
                            currentSlide.theme === 'wellness' ? 'bg-wellness-main' : 'bg-cosmetics-main'
                        )} />
                    </div>

                    <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 w-full pt-20">
                            {/* Left Content */}
                            <div className="max-w-3xl">
                                <motion.div
                                    custom={0} variants={contentVariants} initial="hidden" animate="visible"
                                    className="flex items-center gap-4 mb-8"
                                >
                                    <div className={clsx(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-2xl",
                                        currentSlide.theme === 'wellness' ? 'bg-wellness-accent' : 'bg-cosmetics-accent'
                                    )}>
                                        {currentSlide.icon}
                                    </div>
                                    <span className="text-white/60 text-xs font-black uppercase tracking-[0.4em]">
                                        {currentSlide.category}
                                    </span>
                                </motion.div>

                                <motion.h2
                                    custom={1} variants={contentVariants} initial="hidden" animate="visible"
                                    className="text-white/60 text-2xl font-serif italic mb-2"
                                >
                                    {currentSlide.subtitle}
                                </motion.h2>

                                <motion.h1
                                    custom={2} variants={contentVariants} initial="hidden" animate="visible"
                                    className="text-7xl md:text-9xl font-serif font-black text-white leading-[0.85] mb-10 italic tracking-tighter"
                                >
                                    {currentSlide.title.split(' ')[0]} <br />
                                    <span className={clsx(
                                        "not-italic font-sans text-transparent bg-clip-text bg-gradient-to-r",
                                        currentSlide.theme === 'wellness' ? 'from-wellness-accent to-white' : 'from-cosmetics-accent to-white'
                                    )}>
                                        {currentSlide.title.split(' ')[1]}
                                    </span>
                                </motion.h1>

                                <motion.p
                                    custom={3} variants={contentVariants} initial="hidden" animate="visible"
                                    className="text-white/70 text-xl leading-relaxed italic max-w-lg mb-12"
                                >
                                    {currentSlide.description}
                                </motion.p>

                                <motion.div
                                    custom={4} variants={contentVariants} initial="hidden" animate="visible"
                                >
                                    <Link
                                        to={currentSlide.link}
                                        className={clsx(
                                            "inline-flex items-center gap-4 px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-2xl active:scale-95 group",
                                            currentSlide.theme === 'wellness' ? 'bg-wellness-accent text-wellness-main hover:bg-white' : 'bg-cosmetics-accent text-cosmetics-main hover:bg-white'
                                        )}
                                    >
                                        {currentSlide.buttonText}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Right Product View */}
                            <div className="hidden lg:block relative h-[600px]">
                                <motion.div
                                    key={page}
                                    initial={{ opacity: 0, scale: 0.8, rotate: -15, y: 50 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                                    transition={{ delay: 0.8, duration: 1.2, type: "spring", stiffness: 45 }}
                                    className="absolute inset-0 flex items-center justify-center p-12"
                                >
                                    <div className="relative">
                                        {/* Dynamic Glow */}
                                        <div className={clsx(
                                            "absolute inset-0 blur-[150px] rounded-full opacity-30 animate-pulse scale-150",
                                            currentSlide.theme === 'wellness' ? 'bg-wellness-accent' : 'bg-cosmetics-accent'
                                        )}></div>

                                        <img
                                            src={currentSlide.productImage}
                                            className="relative z-10 w-full max-w-[500px] h-auto object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.5)]"
                                            alt="Product"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-12">
                <button
                    onClick={() => paginate(-1)}
                    className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-4">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={clsx(
                                "h-1 rounded-full transition-all duration-700",
                                i === imageIndex ? "w-12 bg-white" : "w-4 bg-white/20"
                            )}
                        />
                    ))}
                </div>

                <button
                    onClick={() => paginate(1)}
                    className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

// Re-using same local imports for convenience
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export default HeroSlider;
