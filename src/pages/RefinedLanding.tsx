import React from 'react';
import { motion } from 'framer-motion';
import HeroSplitscreen from '../components/home/HeroSplitscreen';
import SignatureCollections from '../components/home/SignatureCollections';
import InteractiveRecommendations from '../components/home/InteractiveRecommendations';
import TrustConsensus from '../components/home/TrustConsensus';
import TrendingProducts from '../components/home/TrendingProducts';
import DiscoveryGrid from '../components/home/DiscoveryGrid';
import BackgroundEffects from '../components/ui/BackgroundEffects';
import { useStore } from '../context/store';
import { Sparkles, Leaf, ArrowRight } from 'lucide-react';

const RefinedLanding: React.FC = () => {
    const products = useStore((state) => state.products);

    // Curated splits
    const wellnessProducts = products.filter(p => p.categoryId === 'cat_wellness').slice(0, 6);
    const cosmeticsProducts = products.filter(p => p.categoryId === 'cat_cosmetics').slice(0, 6);
    const trendingProducts = products.slice(0, 4); // First 4 as trending for demo
    const discoveryProducts = products.slice(4, 14); // Next 10 as discovery

    return (
        <div className="bg-[#050505] min-h-screen text-white overflow-hidden">
            <BackgroundEffects />

            {/* 1. Hero */}
            <HeroSplitscreen />

            {/* 2. Wellness Focus */}
            <section className="py-40 relative overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute top-0 left-0 w-[80vw] h-[80vw] bg-wellness-accent/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-50 z-0" />
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="space-y-10"
                        >
                            <div className="flex items-center gap-4 text-wellness-accent">
                                <Leaf className="w-5 h-5" />
                                <span className="font-black tracking-[0.8em] uppercase text-[9px]">Biological Intelligence</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">
                                Pure <br /> <span className="text-wellness-accent">Resonance</span>
                            </h2>
                            <p className="text-base text-white/40 max-w-sm font-light leading-relaxed">
                                Our wellness collection is engineered at a molecular level, using ancient Himalayan wisdom harmonized with modern science to elevate your biological performance.
                            </p>
                            <button className="group flex items-center gap-6 mt-12 bg-white/5 hover:bg-white text-white hover:text-black px-8 py-5 rounded-full transition-all duration-700">
                                <span className="font-bold uppercase tracking-widest text-[10px]">Explore Full Ritual</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>

                        <div className="relative aspect-square max-w-xl mx-auto rounded-[32px] overflow-hidden group shadow-2xl">
                            <img
                                src="/assets/wellness_hero.png"
                                alt="Wellness"
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Molecular Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Signature Collections */}
            <SignatureCollections
                wellnessProducts={wellnessProducts}
                cosmeticsProducts={cosmeticsProducts}
            />

            {/* 4. Interactive Concierge */}
            <InteractiveRecommendations />

            {/* 5. Cosmetics Focus */}
            <section className="py-40 relative bg-[#080808] overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-cosmetics-accent/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2 opacity-50 z-0" />
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="relative aspect-square max-w-xl mx-auto rounded-[32px] overflow-hidden group order-2 lg:order-1 shadow-2xl">
                            <img
                                src="/assets/cosmetics_hero.png"
                                alt="Cosmetics"
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 right-8">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Radiant Aesthetics</span>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="space-y-10 order-1 lg:order-2"
                        >
                            <div className="flex items-center gap-4 text-cosmetics-accent">
                                <Sparkles className="w-5 h-5" />
                                <span className="font-black tracking-[0.8em] uppercase text-[9px]">Radiant Aesthetics</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight text-right lg:text-left">
                                Ethereal <br /> <span className="text-cosmetics-accent">Luminosity</span>
                            </h2>
                            <p className="text-base text-white/40 max-w-sm font-light leading-relaxed text-right lg:text-left ml-auto lg:ml-0">
                                Discover a new era of skincare where luxury meets purity. Ethereal foundations for the conscious modern ritual, revealing your inner light.
                            </p>
                            <div className="flex justify-end lg:justify-start">
                                <button className="group flex items-center gap-6 mt-12 bg-white/5 hover:bg-white text-white hover:text-black px-8 py-5 rounded-full transition-all duration-700">
                                    <span className="font-bold uppercase tracking-widest text-[10px]">Explore The Edit</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. Trending Section */}
            <TrendingProducts products={trendingProducts} />

            {/* 7. Strategic Consensus (Ratings) */}
            <TrustConsensus />

            {/* 8. Full Discovery Grid */}
            <DiscoveryGrid products={discoveryProducts} />

            {/* 10. Refined Minimalist Transition */}
            <section className="py-60 text-center relative overflow-hidden bg-black">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h3 className="text-[15vw] font-serif italic text-white/[0.02] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-tighter">
                        Trusavor Era
                    </h3>
                    <div className="relative z-10">
                        <p className="text-[10px] font-black tracking-[1.2em] uppercase text-white/20 mb-16 ml-[1.2em]">The Future of Self-Care</p>
                        <h2 className="text-4xl md:text-6xl font-light mb-20 max-w-3xl mx-auto leading-tight">
                            Experience the dual path to <span className="italic font-serif">holistic balance.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                            <a href="/wellness" className="group relative">
                                <span className="text-wellness-accent font-black tracking-[0.3em] uppercase text-[10px] hover:text-white transition-colors">Start Wellness Ritual</span>
                                <div className="absolute -bottom-4 left-0 w-0 h-px bg-wellness-accent group-hover:w-full transition-all" />
                            </a>
                            <span className="w-px h-8 bg-white/10 hidden md:block" />
                            <a href="/cosmetics" className="group relative">
                                <span className="text-cosmetics-accent font-black tracking-[0.3em] uppercase text-[10px] hover:text-white transition-colors">Begin Beauty Journey</span>
                                <div className="absolute -bottom-4 left-0 w-0 h-px bg-cosmetics-accent group-hover:w-full transition-all" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default RefinedLanding;
