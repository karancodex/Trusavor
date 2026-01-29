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
                <div className="flex items-center justify-center mb-24 px-2">
                    <div className="hidden md:block h-px w-20 bg-gradient-to-l from-white/5 to-transparent" />
                    <div className="flex items-center gap-4 mx-12">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <Layers className="w-4 h-4 text-wellness-accent" />
                        </div>
                        <div className="text-center">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 block mb-1">Discovery</span>
                            <h2 className="text-3xl font-serif italic text-white leading-none">Functional Essentials</h2>
                        </div>
                    </div>
                    <div className="hidden md:block h-px w-20 bg-gradient-to-r from-white/5 to-transparent" />
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
