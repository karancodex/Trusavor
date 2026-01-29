import React from 'react';
import { motion } from 'framer-motion';
import CompactProductCard from './CompactProductCard';
import { Sparkles } from 'lucide-react';

interface TrendingProductsProps {
    products: any[];
}

const TrendingProducts: React.FC<TrendingProductsProps> = ({ products }) => {
    return (
        <section className="py-24 bg-[#050505]">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-16 px-2">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-cosmetics-accent" />
                        </div>
                        <div>
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 block mb-1">Live Edits</span>
                            <h2 className="text-3xl font-serif italic text-white leading-none">Trending Now</h2>
                        </div>
                    </div>
                    <div className="hidden md:block h-px flex-grow mx-20 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <CompactProductCard
                                product={product}
                                theme={product.categoryId === 'cat_wellness' ? 'wellness' : 'cosmetics'}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;
