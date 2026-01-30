import React from 'react';
import { motion } from 'framer-motion';
import CompactProductCard from './CompactProductCard';
import { ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DiscoveryGridProps {
    products: any[];
}

const DiscoveryGrid: React.FC<DiscoveryGridProps> = ({ products }) => {
    return (
        <section className="py-20 bg-premium-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-premium-gold block mb-6">Discovery</span>
                    <h2 className="text-4xl md:text-6xl font-serif italic text-premium-text-primary mb-8">Functional <span className="text-wellness-accent font-serif italic">Essentials</span></h2>
                    <p className="text-sm text-premium-text-secondary max-w-md mx-auto font-light">Pursue uncompromising purity with our foundational collection of molecularly precise offerings.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (i % 5) * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <CompactProductCard
                                product={product}
                                theme={product.categoryId === 'cat_wellness' ? 'wellness' : 'cosmetics'}
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Link to="/all-collections" className="group flex items-center gap-10 hover:gap-16 transition-all duration-700">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-premium-text-muted group-hover:text-premium-text-primary transition-colors">Explore All Collections</span>
                        <div className="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-premium-text-primary group-hover:text-white transition-all shadow-sm group-hover:shadow-xl">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DiscoveryGrid;
