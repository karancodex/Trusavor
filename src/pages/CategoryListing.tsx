import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../context/store';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, X, ChevronDown, TrendingUp
} from 'lucide-react';
import clsx from 'clsx';
import ProductCard3D from '../components/home/ProductCard3D';

interface CategoryListingProps {
    category?: string;
}

const CategoryListing: React.FC<CategoryListingProps> = ({ category: propCategory }) => {
    const { category: paramCategory } = useParams();
    const activeCategorySlug = propCategory || paramCategory;
    const isAll = activeCategorySlug === 'all' || activeCategorySlug === 'all-collections';

    const products = useStore((state) => state.products);
    const categories = useStore((state) => state.categories);

    const activeCategory = categories.find(c => c.slug === activeCategorySlug);

    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('Featured');

    const filteredProducts = useMemo(() => {
        let items = products.filter(p => isAll || p.categoryId === activeCategory?.id || (activeCategorySlug === 'wellness' && p.categoryId === 'cat_wellness') || (activeCategorySlug === 'cosmetics' && p.categoryId === 'cat_cosmetics'));

        if (searchQuery) {
            items = items.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (sortBy === 'Price: Low to High') items.sort((a, b) => a.price - b.price);
        if (sortBy === 'Price: High to Low') items.sort((a, b) => b.price - a.price);
        if (sortBy === 'Top Rated') items.sort((a, b) => b.rating - a.rating);

        return items;
    }, [products, activeCategory, activeCategorySlug, searchQuery, sortBy, isAll]);

    if (!activeCategory && !isAll && activeCategorySlug !== 'wellness' && activeCategorySlug !== 'cosmetics') {
        return <div className="pt-60 text-center font-serif text-2xl text-white">Ritual Collection Not Found</div>;
    }

    const categoryName = activeCategorySlug === 'wellness' ? 'Wellness' : activeCategorySlug === 'cosmetics' ? 'Cosmetics' : activeCategory?.name || 'All Collections';
    const categoryDesc = activeCategory?.description || `Discover our range of organic ${categoryName.toLowerCase()} rituals.`;
    const theme = activeCategorySlug === 'wellness' || activeCategory?.theme === 'wellness' ? 'wellness' : 'cosmetics';
    const isWellness = theme === 'wellness';

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#0a0a0a]">
            {/* Artistic Header Section - Sized down */}
            <div className="container mx-auto px-6 mb-16 relative">
                <div className="absolute top-0 right-0 w-96 h-96 blur-[150px] rounded-full opacity-10 bg-current" style={{ color: isWellness ? '#1A4D2E' : '#4A1D1F' }} />

                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className={clsx("h-[1px] w-12 bg-gradient-to-r from-transparent to-current", isWellness ? "text-wellness-accent" : "text-cosmetics-accent")} />
                        <span className={clsx("font-bold tracking-[0.3em] uppercase text-[10px]", isWellness ? "text-wellness-accent" : "text-cosmetics-accent")}>
                            {categoryName.toUpperCase()} ARCHIVE
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white italic leading-[1] tracking-tight mb-8"
                    >
                        {categoryName}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-white/40 font-normal leading-relaxed border-l border-white/5 pl-6 max-w-xl"
                    >
                        {categoryDesc}
                    </motion.p>
                </div>
            </div>

            {/* Filter Bar - Sized down */}
            <div className="sticky top-[80px] z-40 mb-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#0f0f0f]/80 backdrop-blur-3xl rounded-[24px] border border-white/5 h-16 px-6 lg:px-10 flex items-center justify-between shadow-xl"
                    >
                        <div className="flex items-center gap-6 flex-grow">
                            {/* Search - Smaller font */}
                            <div className="relative flex-grow max-w-sm">
                                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Seek ritual..."
                                    className="w-full bg-transparent border-none pl-8 pr-4 py-2 outline-none text-xs font-medium text-white placeholder:text-white/20 tracking-wide"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery('')} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </div>

                            <div className="h-6 w-px bg-white/5 hidden md:block" />

                            <div className="hidden lg:flex items-center gap-3">
                                <TrendingUp className="w-3.5 h-3.5 text-white/20" />
                                <span className="text-[9px] font-bold uppercase text-white/20 tracking-[0.2em]">{filteredProducts.length} RITUALS</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="relative group/sort cursor-pointer flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/5 transition-all hover:bg-white/10">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                                    Sort: <span className="text-white">{sortBy}</span>
                                </span>
                                <ChevronDown className="w-3.5 h-3.5 text-white/40 group-hover/sort:rotate-180 transition-transform" />

                                <div className="absolute top-[calc(100%+8px)] right-0 bg-[#121212] backdrop-blur-3xl shadow-2xl rounded-2xl p-2 opacity-0 invisible group-hover/sort:opacity-100 group-hover/sort:visible transition-all min-w-[180px] border border-white/10 z-50">
                                    {['Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated'].map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setSortBy(s)}
                                            className="w-full text-left px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] hover:bg-white/5 rounded-xl transition-all text-white/50 hover:text-white"
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 3D Product Grid */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product, idx) => (
                            <ProductCard3D key={product.id} product={product} index={idx} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="py-32 text-center border border-dashed border-white/5 rounded-[40px]"
                    >
                        <Search className="w-12 h-12 text-white/10 mx-auto mb-6" />
                        <h3 className="text-2xl font-serif font-bold text-white/20 uppercase italic mb-6">No matching rituals</h3>
                        <button
                            onClick={() => { setSearchQuery(''); setSortBy('Featured') }}
                            className="bg-white text-black px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                        >
                            Reset Exploration
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default CategoryListing;
