import React from 'react';
import { motion } from 'framer-motion';
import CompactProductCard from './CompactProductCard';
import { Sparkles } from 'lucide-react';

interface TrendingProductsProps {
    products: any[];
}

const TrendingProducts: React.FC<TrendingProductsProps> = ({ products }) => {
    return (
        <section className="py-20 bg-premium-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-premium-gold block mb-6">Live Edits</span>
                    <h2 className="text-4xl md:text-6xl font-serif italic text-premium-text-primary mb-8">Trending <span className="text-cosmetics-accent font-serif italic">Now</span></h2>
                    <p className="text-sm text-premium-text-secondary max-w-md mx-auto font-light">The most sought-after rituals currently resonating within our collective.</p>
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
