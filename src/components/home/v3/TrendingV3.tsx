import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useCurrency } from '../../../hooks/useCurrency';
import QuickViewModal from '../../common/QuickViewModal';

interface TrendingV3Props {
    products: any[];
}

const TrendingV3: React.FC<TrendingV3Props> = ({ products }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { formatPrice } = useCurrency();
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openQuickView = (e: React.MouseEvent, product: any) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <section ref={ref} className="py-16 bg-[#fafaf9] border-t border-stone-200/60">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                        Curated <span className="italic text-stone-500">Highlights</span>
                    </h2>
                    <Link to="/all-collections" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-900 mt-6 md:mt-0">
                        Shop All <span className="p-2 rounded-full border border-stone-200 group-hover:bg-[#7FB844] group-hover:text-white transition-all group-hover:border-[#7FB844]"><ArrowRight className="w-4 h-4" /></span>
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
                                className="group bg-white p-4 rounded-[30px] border border-stone-100 hover:shadow-xl hover:border-[#7FB844]/20 transition-all duration-500"
                            >
                                <Link to={`/product/${slug}`} className="block">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#f4f2ef] mb-6">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-3 left-3 bg-white/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                                            <Star className="w-3 h-3 fill-[#7FB844] text-[#7FB844]" />
                                            <span className="text-[10px] font-bold text-stone-900">4.9</span>
                                        </div>

                                        {/* Quick View Button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/5 backdrop-blur-[2px]">
                                            <button
                                                onClick={(e) => openQuickView(e, product)}
                                                className="bg-[#7FB844] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900"
                                            >
                                                Quick View
                                            </button>
                                        </div>

                                        {/* Sale Badge */}
                                        {product.discount && (
                                            <div className="absolute top-3 right-3 bg-rose-500 text-white px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest">
                                                -{product.discount}%
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-serif text-stone-900 mb-2 truncate group-hover:text-[#7FB844] transition-colors uppercase tracking-tight">{name}</h3>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-4">
                                        {product.categoryId === 'cat_wellness' ? 'Wellness Series' : 'Personal Care'}
                                    </p>
                                    <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                                        <div className="flex flex-col">
                                            <span className="text-lg font-black text-stone-950">{formatPrice(price)}</span>
                                            {product.oldPrice && (
                                                <span className="text-xs text-stone-400 line-through font-bold">{formatPrice(product.oldPrice)}</span>
                                            )}
                                        </div>
                                        <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-[#7FB844] group-hover:text-white transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <QuickViewModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default TrendingV3;
