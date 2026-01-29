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
        <section className="pt-0 pb-40 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/30 block mb-6">Discovery</span>
                    <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-8">Functional <span className="text-wellness-accent">Essentials</span></h2>
                    <p className="text-sm text-white/40 max-w-md mx-auto font-light">Pursue uncompromising purity with our foundational collection of molecularly precise offerings.</p>
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

                <div className="mt-32 flex justify-center">
                    <Link to="/all-collections" className="group flex items-center gap-10 hover:gap-16 transition-all duration-700">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-colors">Explore All Collections</span>
                        <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DiscoveryGrid;
