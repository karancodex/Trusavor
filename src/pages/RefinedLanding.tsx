import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSplitscreen from '../components/home/HeroSplitscreen';
import SignatureCollections from '../components/home/SignatureCollections';
import InteractiveRecommendations from '../components/home/InteractiveRecommendations';
import TrustConsensus from '../components/home/TrustConsensus';
import TrendingProducts from '../components/home/TrendingProducts';
import DiscoveryGrid from '../components/home/DiscoveryGrid';
import OfferBanner from '../components/home/OfferBanner';
import BestBrandSection from '../components/home/BestBrandSection';
import BackgroundEffects from '../components/ui/BackgroundEffects';
import { useStore } from '../context/store';
import { Sparkles, Leaf, ArrowRight } from 'lucide-react';

const RefinedLanding: React.FC = () => {
    const products = useStore((state) => state.products);
    const { scrollYProgress } = useScroll();

    // Parallax values for some elements
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Curated splits
    const wellnessProducts = products.filter(p => p.categoryId === 'cat_wellness').slice(0, 6);
    const cosmeticsProducts = products.filter(p => p.categoryId === 'cat_cosmetics').slice(0, 6);
    const trendingProducts = products.slice(0, 4);
    const discoveryProducts = products.slice(4, 14);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" } as any
        }
    };

    return (
        <div className="bg-premium-light min-h-screen text-premium-text-primary overflow-hidden selection:bg-premium-gold selection:text-white transition-colors duration-1000">
            <BackgroundEffects />

            {/* 1. Hero */}
            <HeroSplitscreen />

            {/* 5. Signature Collections */}
            <SignatureCollections
                wellnessProducts={wellnessProducts}
                cosmeticsProducts={cosmeticsProducts}
            />

            {/* 6. Interactive Concierge */}
            <InteractiveRecommendations />
            {/* 8. Trending Section */}
            <TrendingProducts products={trendingProducts} />

            {/* 4. Best Brand Section - NEW SECTION */}
            <BestBrandSection />
            {/* 2. Offer Banner - NEW SECTION */}
            <OfferBanner />
            {/* 7. Cosmetics Focus */}
            <section className="py-10 relative bg-premium-light overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                        className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[550px] border border-stone-100"
                    >
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative h-[300px] lg:h-full overflow-hidden group">
                            <img
                                src="/assets/cosmetics_hero.png"
                                alt="Cosmetics"
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-8 left-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">Radiant Aesthetics</span>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-white relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cosmetics-accent/5 blur-[80px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 text-cosmetics-accent mb-6">
                                    <Sparkles className="w-4 h-4" />
                                    <span className="font-black tracking-[0.4em] uppercase text-[9px]">The New Standard</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-premium-text-primary mb-6">
                                    Ethereal <br /> <span className="text-premium-gold italic">Luminosity</span>
                                </h2>
                                <p className="text-base text-premium-text-secondary max-w-md font-light leading-relaxed mb-10">
                                    Discover a new era of skincare where luxury meets purity. Ethereal foundations for the conscious modern ritual, revealing your inner light.
                                </p>
                                <button className="self-start group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-premium-text-primary hover:text-cosmetics-accent transition-colors">
                                    Explore The Edit <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* 3. Wellness Focus */}
            <section className="py-10 relative bg-gradient-to-b from-premium-light to-white overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                        className="bg-stone-50 rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row-reverse h-auto lg:h-[550px] border border-stone-200"
                    >
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative h-[300px] lg:h-full overflow-hidden group">
                            <img
                                src="/assets/wellness_hero.png"
                                alt="Wellness"
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-8 right-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">Molecular Excellence</span>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-stone-50 relative">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-wellness-accent/5 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 text-wellness-accent mb-6">
                                    <Leaf className="w-4 h-4" />
                                    <span className="font-black tracking-[0.4em] uppercase text-[9px]">Biological Intelligence</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-premium-text-primary mb-6">
                                    Pure <br /> <span className="text-premium-gold italic">Resonance</span>
                                </h2>
                                <p className="text-base text-premium-text-secondary max-w-md font-light leading-relaxed mb-10">
                                    Our wellness collection is engineered at a molecular level, using ancient Himalayan wisdom harmonized with modern science to elevate your biological performance.
                                </p>
                                <button className="self-start group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-premium-text-primary hover:text-wellness-accent transition-colors">
                                    Explore Ritual <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* 10. Full Discovery Grid */}
            <DiscoveryGrid products={discoveryProducts} />
            {/* 9. Strategic Consensus (Ratings) */}
            <TrustConsensus />
            {/* 11. Refined Minimalist Transition */}
            <section className="py-20 text-center relative overflow-hidden bg-premium-light">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h3 className="text-[18vw] font-serif italic text-black/[0.02] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-tighter">
                        Trusavor Era
                    </h3>
                    <div className="relative z-10">
                        <p className="text-[12px] font-black tracking-[1.5em] uppercase text-premium-gold mb-16 ml-[1.5em]">The Future of Self-Care</p>
                        <h2 className="text-5xl md:text-7xl font-light mb-24 max-w-5xl mx-auto leading-tight text-premium-text-primary">
                            Experience the dual path to <br /> <span className="italic font-serif text-premium-gold">holistic balance.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
                            <a href="/wellness" className="group relative">
                                <span className="text-wellness-accent font-black tracking-[0.4em] uppercase text-[11px] hover:text-premium-text-primary transition-colors">Start Wellness Ritual</span>
                                <div className="absolute -bottom-6 left-0 w-8 h-[2px] bg-wellness-accent group-hover:w-full transition-all duration-500" />
                            </a>
                            <span className="w-px h-12 bg-stone-200 hidden md:block" />
                            <a href="/cosmetics" className="group relative">
                                <span className="text-cosmetics-accent font-black tracking-[0.4em] uppercase text-[11px] hover:text-premium-text-primary transition-colors">Begin Beauty Journey</span>
                                <div className="absolute -bottom-6 left-0 w-8 h-[2px] bg-cosmetics-accent group-hover:w-full transition-all duration-500" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default RefinedLanding;

