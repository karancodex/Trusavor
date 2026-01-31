import React, { useEffect } from 'react';
import { useStore } from '../context/store';
import HeroV3 from '../components/home/v3/HeroV3';
import CollectionsV3 from '../components/home/v3/CollectionsV3';
import TrendingV3 from '../components/home/v3/TrendingV3';
import OfferV3 from '../components/home/v3/OfferV3';
import BrandsV3 from '../components/home/v3/BrandsV3';
import HeaderV3 from '../components/home/v3/HeaderV3';
import FooterV3 from '../components/home/v3/FooterV3';
import MarqueeSection from '../components/home/v3/MarqueeSection';
import ScienceStory from '../components/home/v3/ScienceStory';
import IngredientsScroll from '../components/home/v3/IngredientsScroll';
import RitualSelector from '../components/home/v3/RitualSelector';
import DiscoveryGrid from '../components/home/DiscoveryGrid';
import JournalSection from '../components/home/v3/JournalSection';
import VideoManifesto from '../components/home/v3/VideoManifesto';
import SocialGrid from '../components/home/v3/SocialGrid';
import TestimonialSlider from '../components/home/v3/TestimonialSlider'; // New Component

const HomeV3: React.FC = () => {
    const products = useStore((state) => state.products);

    // Safety check for data
    const safeProducts = products || [];

    // Curated splits (assuming standard categories or just slicing)
    const wellnessProducts = safeProducts.filter((p: any) => p.categoryId === 'cat_wellness' || (p.tags && p.tags.includes('wellness'))).slice(0, 6);
    // Fallback if filtering fails (e.g. no categories set yet): just take first few
    const finalWellness = wellnessProducts.length > 0 ? wellnessProducts : safeProducts.slice(0, 6);

    const cosmeticsProducts = safeProducts.filter((p: any) => p.categoryId === 'cat_cosmetics' || (p.tags && p.tags.includes('cosmetics'))).slice(0, 6);
    // Fallback
    const finalCosmetics = cosmeticsProducts.length > 0 ? cosmeticsProducts : safeProducts.slice(6, 12);

    const trendingProducts = safeProducts.slice(0, 4);
    const discoveryProducts = safeProducts.slice(4, 14);

    return (
        <div className="bg-[#fafaf9] min-h-screen text-stone-800 font-sans overflow-x-hidden selection:bg-rose-100 selection:text-rose-900">
            {/* Custom V3 Header */}
            <HeaderV3 />

            <main>
                <HeroV3 />

                <MarqueeSection />

                <ScienceStory />

                <BrandsV3 />

                <CollectionsV3
                    wellnessProducts={finalWellness}
                    cosmeticsProducts={finalCosmetics}
                />

                {/* Visual Interlude 1 */}
                <VideoManifesto />

                <OfferV3 />

                <IngredientsScroll />

                {/* Ritual Selector */}
                <RitualSelector />

                <TrendingV3 products={trendingProducts} />

                {/* New Testimonial Section */}
                <TestimonialSlider />

                {/* Editorial Section */}
                <JournalSection />

                {/* Modified Discovery Section */}
                <section className="py-16 bg-[#fafaf9] border-t border-stone-200">
                    <div className="container mx-auto px-6 mb-12 text-center">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-stone-400 mb-4 block">The Full Spectrum</span>
                        <h2 className="text-5xl font-serif text-stone-900">Discovery</h2>
                    </div>
                    {/* Check if discovery needs mapping fix inside component, passing props mostly works if component logic is sound */}
                    <DiscoveryGrid products={discoveryProducts} />
                </section>

                {/* Social Section */}
                <SocialGrid />
            </main>

            {/* Custom V3 Footer */}
            <FooterV3 />
        </div>
    );
};

export default HomeV3;
