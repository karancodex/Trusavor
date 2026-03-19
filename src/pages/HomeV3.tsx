import React, { useEffect } from 'react';
import { useStore } from '../context/store';
import HeroV3 from '../components/home/v3/HeroV3';
import CollectionsV3 from '../components/home/v3/CollectionsV3';
import TrendingV3 from '../components/home/v3/TrendingV3';
import OfferV3 from '../components/home/v3/OfferV3';
import BrandsV3 from '../components/home/v3/BrandsV3';
import HeaderV3 from '../components/home/v3/HeaderV3';
import MarqueeSection from '../components/home/v3/MarqueeSection';
import ScienceStory from '../components/home/v3/ScienceStory';
import IngredientsScroll from '../components/home/v3/IngredientsScroll';
import RitualSelector from '../components/home/v3/RitualSelector';
import DiscoveryGrid from '../components/home/DiscoveryGrid';
import JournalSection from '../components/home/v3/JournalSection';
import VideoManifesto from '../components/home/v3/VideoManifesto';
import SocialGrid from '../components/home/v3/SocialGrid';
import TestimonialSlider from '../components/home/v3/TestimonialSlider';
import ReviewsUGC from '../components/home/v3/ReviewsUGC';

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
            <main>
                <HeroV3 />

                <MarqueeSection />


                <CollectionsV3
                    wellnessProducts={finalWellness}
                    cosmeticsProducts={finalCosmetics}
                />
                <ScienceStory />

                {/* Visual Interlude 1 */}
                <VideoManifesto />

                <OfferV3 />

                <IngredientsScroll />

                {/* Ritual Selector */}
                <RitualSelector />

                <TrendingV3 products={trendingProducts} />

                {/* New Testimonial Section */}
                <TestimonialSlider />

                {/* Reviews & UGC Section */}
                <ReviewsUGC />

                {/* Journal Section (Blog) */}
                <JournalSection />

                {/* Modified Discovery Section */}
                <DiscoveryGrid products={discoveryProducts} />

                {/* Social Section */}
                <SocialGrid />
            </main>
        </div>
    );
};

export default HomeV3;
