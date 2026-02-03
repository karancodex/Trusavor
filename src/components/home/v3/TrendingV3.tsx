import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface TrendingV3Props {
    products: any[];
}

const TrendingV3: React.FC<TrendingV3Props> = ({ products }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-16 bg-premium-light border-t border-premium-text-muted/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-premium-text-primary leading-tight">
                        Curated <span className="italic text-premium-text-muted">Highlights</span>
                    </h2>
                    <Link to="/all-collections" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-premium-text-primary mt-6 md:mt-0">
                        Shop All <span className="p-2 rounded-full border border-premium-text-muted/20 group-hover:bg-premium-text-primary group-hover:text-premium-surface transition-all"><ArrowRight className="w-4 h-4" /></span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, i) => {
                        // Data Fallbacks
                        const image = product.images?.[0] || product.thumbnail || '/placeholder.png';
                        const name = product.name || product.title || 'Untitled';
                        const price = product.price || 0;
                        const slug = product.slug || product.handle || '#';

                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group bg-premium-surface p-4 rounded-[30px] border border-premium-text-muted/10 hover:shadow-xl hover:border-premium-text-muted/30 transition-all duration-500"
                            >
                                <Link to={`/product/${slug}`} className="block">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-premium-light mb-6">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-3 left-3 bg-premium-surface/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                                            <Star className="w-3 h-3 fill-premium-text-primary text-premium-text-primary" />
                                            <span className="text-[10px] font-bold text-premium-text-primary">4.9</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-serif text-premium-text-primary mb-2 truncate group-hover:text-premium-text-secondary transition-colors">{name}</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-premium-text-muted mb-4">
                                        {product.categoryId === 'cat_wellness' ? 'Wellness Series' : 'Cosmetic Series'}
                                    </p>
                                    <div className="flex items-center justify-between border-t border-premium-text-muted/10 pt-4">
                                        <span className="text-lg font-medium text-premium-text-primary">${price}</span>
                                        <span className="w-8 h-8 rounded-full bg-premium-light flex items-center justify-center group-hover:bg-premium-text-primary group-hover:text-premium-surface transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrendingV3;
