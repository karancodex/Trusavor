import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { useStore } from '../../../context/store';
import { useCurrency } from '../../../hooks/useCurrency';

import QuickViewModal from '../../common/QuickViewModal';

interface CollectionsV3Props {
    wellnessProducts: any[];
    cosmeticsProducts: any[];
}

import { useNavigate } from 'react-router-dom';

const ProductCard: React.FC<{ product: any, theme: 'wellness' | 'cosmetics', onQuickView: (product: any) => void }> = ({ product, theme, onQuickView }) => {
    const addToCart = useStore(state => state.addToCart);
    const currentCountry = useStore(state => state.country);
    const { formatPrice } = useCurrency();
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

    // Data Fallbacks matching "CompactProductCard" logic
    const image = product.images?.[0] || product.thumbnail || '/placeholder.png';
    const name = product.name || product.title || 'Untitled';
    const price = product.price || 0;
    const slug = product.slug || product.handle || '#';

    const isWellness = theme === 'wellness';

    // Check availability
    const isAvailable = !product.availableCountries || product.availableCountries.includes(currentCountry);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className={clsx(
                "group relative w-[200px] md:w-[240px] flex-shrink-0", // Reduced width for 5 per screen
                !isAvailable && "opacity-60 grayscale-[0.5]"
            )}
        >
            <div className="block">
                <div
                    className="relative aspect-square rounded-[20px] overflow-hidden bg-white border border-stone-200 mb-4 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                    onClick={() => navigate(`/product/${slug}`)}
                >
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-1000"
                    />

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/5 backdrop-blur-[2px]">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (isAvailable) onQuickView(product);
                            }}
                            className={clsx(
                                "bg-white text-stone-900 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl transition-all duration-300 hover:bg-[#7FB844] hover:text-white",
                                !isAvailable && "cursor-not-allowed opacity-50"
                            )}
                        >
                            {isAvailable ? 'Quick View' : 'Not Available'}
                        </button>
                    </div>

                    {/* Add Button - Compact */}
                    {isAvailable && (
                        <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
                            className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 bg-[#7FB844] hover:bg-stone-900 shadow-[#7FB844]/20"
                        >
                            <ShoppingBag className="w-4 h-4" />
                        </button>
                    )}

                    {product.discount && isAvailable && (
                        <div className="absolute top-3 right-3 bg-[#7FB844] text-white px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest shadow-md">
                            -{product.discount}%
                        </div>
                    )}
                </div>

                <div className="px-1">
                    <Link to={`/product/${slug}`}>
                        <h3 className="text-xs font-black uppercase tracking-tight text-black group-hover:text-[#7FB844] transition-colors mb-1 truncate">{name}</h3>
                    </Link>
                    <div className="flex justify-between items-center">
                        <div className="flex items-baseline gap-1.5">
                            <span className="font-black text-[#7FB844] text-base tracking-tight">{formatPrice(price)}</span>
                            {product.oldPrice && (
                                <span className="text-[10px] text-stone-500 line-through font-bold">{formatPrice(product.oldPrice)}</span>
                            )}
                        </div>
                    </div>
                    {!isAvailable && (
                        <p className="text-[8px] font-black uppercase tracking-widest text-rose-600 mt-1">Unavailable</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const CollectionsV3: React.FC<CollectionsV3Props> = ({ wellnessProducts, cosmeticsProducts }) => {
    const [selectedProduct, setSelectedProduct] = React.useState<any>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleQuickView = (product: any) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <section className="py-16 bg-white relative overflow-hidden">

            {/* Personal Care Section */}
            <div className="mb-20">
                <div className="container mx-auto px-6 mb-10 flex items-end justify-between">
                    <div>
                        <h2 className="text-5xl font-serif text-stone-900 mb-3">Personal Care <i className="text-rose-800 font-serif">Refinements</i></h2>
                        <p className="text-stone-500 text-lg max-w-md">Ethereal textures for a luminous finish.</p>
                    </div>
                    <Link to="/personal-care" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-900 hover:text-rose-600 border-b border-rose-900/20 pb-1">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="w-full overflow-x-auto hide-scrollbar pb-10 px-6 lg:px-20">
                    <div className="flex gap-4 md:gap-6 w-max">
                        {cosmeticsProducts.map(p => <ProductCard key={p.id} product={p} theme="cosmetics" onQuickView={handleQuickView} />)}
                    </div>
                </div>
            </div>

            {/* Wellness Section */}
            <div>
                <div className="container mx-auto px-6 mb-10 flex items-end justify-between">
                    <div>
                        <h2 className="text-5xl font-serif text-stone-900 mb-3">Wellness <i className="text-emerald-800 font-serif">Originals</i></h2>
                        <p className="text-stone-500 text-lg max-w-md">Foundational supplements for biological harmony.</p>
                    </div>
                    <Link to="/wellness" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-900 hover:text-emerald-600 border-b border-emerald-900/20 pb-1">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="w-full overflow-x-auto hide-scrollbar pb-10 px-6 lg:px-20">
                    <div className="flex gap-4 md:gap-6 w-max">
                        {wellnessProducts.map(p => <ProductCard key={p.id} product={p} theme="wellness" onQuickView={handleQuickView} />)}
                    </div>
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

export default CollectionsV3;
