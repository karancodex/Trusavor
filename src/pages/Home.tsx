import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, Leaf, Truck, Sparkles, MoveRight, ArrowDown } from 'lucide-react';
import { useStore } from '../context/store';
import AnimatedHero from '../components/home/AnimatedHero';
import CategorySection3D from '../components/home/CategorySection3D';
import clsx from 'clsx';

const TrustRitualBar = () => {
    return (
        <section className="relative z-30 -mt-10 mb-20 lg:mb-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="bg-[#0f0f0f]/95 backdrop-blur-3xl rounded-[32px] py-10 px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center border border-white/10 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                >
                    {[
                        { Icon: ShieldCheck, title: "VERIFIED", desc: "100% PURE RITUAL", color: "text-wellness-accent" },
                        { Icon: Leaf, title: "ARTISAN", desc: "LIMITED ORIGINS", color: "text-wellness-accent" },
                        { Icon: Truck, title: "TRANSIT", desc: "NEUTRAL FLOW", color: "text-cosmetics-accent" },
                        { Icon: Sparkles, title: "ESSENCE", desc: "PURE POTENTIAL", color: "text-cosmetics-accent" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group/item relative z-10 text-center lg:text-left transition-transform duration-500 hover:scale-105">
                            <div className={clsx(
                                "relative w-12 h-12 md:w-14 md:h-14 rounded-2xl transition-all duration-700 bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-black shadow-2xl",
                                item.color
                            )}>
                                <item.Icon className="w-6 h-6 md:w-7 md:h-7 relative z-10 transition-transform duration-700" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-black text-xs md:text-sm uppercase tracking-[0.3em] text-white transition-colors">{item.title}</h4>
                                <p className="text-[10px] md:text-[11px] text-white/20 tracking-[0.1em] uppercase font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const ExperienceSeparator = () => {
    return (
        <div className="relative h-[100vh] bg-[#050505] flex items-center justify-center overflow-hidden">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center relative z-10 px-6">
                <div className="w-20 h-20 rounded-full border border-white/10 mb-16 mx-auto flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20" />
                    <ArrowDown className="w-6 h-6 text-white/40 animate-bounce" />
                </div>
                <div className="space-y-12">
                    <span className="text-[10px] font-black tracking-[2em] uppercase text-white/20 block ml-[2em]">Transitioning Era</span>
                    <h3 className="text-7xl md:text-[10rem] font-serif font-black italic text-white/[0.03] tracking-tighter lowercase leading-none whitespace-nowrap select-none">
                        Refined Radiance
                    </h3>
                    <p className="text-2xl font-light italic text-white/20 max-w-2xl mx-auto uppercase tracking-[0.6em]">Proceed to Cosmetics</p>
                </div>
            </motion.div>
            {/* Visual Depth Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/[0.02] blur-[200px] rounded-full" />
            </div>
        </div>
    );
};

const Home = () => {
    const products = useStore((state) => state.products);
    const wellnessProducts = products.filter(p => p.categoryId === 'cat_wellness').slice(0, 3);
    const cosmeticsProducts = products.filter(p => p.categoryId === 'cat_cosmetics').slice(0, 3);

    return (
        <div className="bg-[#050505] min-h-screen">
            {/* 1. Cinematic 3D Opening */}
            <AnimatedHero />

            {/* 2. Premium Trust Ritual Bar */}
            <TrustRitualBar />

            {/* 3. Wellness Artistic Flow */}
            <div className="relative z-10">
                <CategorySection3D
                    title="Wellness"
                    subtitle="Pure Himalayan extracts engineered for resonance. Transformative power through molecular science."
                    theme="wellness"
                    products={wellnessProducts}
                />
            </div>

            {/* 4. Cinematic Separator */}
            <ExperienceSeparator />

            {/* 5. Beauty Aesthetic Flow */}
            <div className="relative z-10">
                <CategorySection3D
                    title="COSMETICS"
                    subtitle="Luxurious botanical foundations inspired by timeless elegance. Ethereal skincare for the conscious modern ritual."
                    theme="cosmetics"
                    products={cosmeticsProducts}
                />
            </div>

            {/* 6. Dramatic Closing State */}
            <section className="py-60 relative overflow-hidden">
                <div className="container mx-auto px-10 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-[7rem] font-serif font-black text-white leading-[0.9] tracking-tighter mb-20 italic">
                            Your Ritual <br /> <span className="text-wellness-accent drop-shadow-[0_0_30px_rgba(163,177,138,0.2)]">Begins.</span>
                        </h2>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <a href="/all-collections" className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all hover:scale-105 active:scale-95 shadow-2xl">
                                View Collections
                            </a>
                            <a href="/contact" className="group px-12 py-6 border border-white/20 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all hover:bg-white/5 active:scale-95">
                                Concierge
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Decorative Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
                    <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
                </div>
            </section>
        </div>
    );
};

export default Home;
