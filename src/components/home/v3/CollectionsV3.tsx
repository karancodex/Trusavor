import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
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
    const { formatPrice } = useCurrency();
    const { toggleWishlist, wishlist, addToCart, country: currentCountry } = useStore();
    const isInWishlist = wishlist?.includes(product.id);
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

    // Data Fallbacks
    const image = product.images?.[0] || product.thumbnail || '/placeholder.png';
    const name = product.name || product.title || 'Untitled';
    const price = product.price || 0;
    const slug = product.slug || product.handle || '#';

    const isWellness = theme === 'wellness';
    const isAvailable = !product.availableCountries || product.availableCountries.includes(currentCountry);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className={clsx(
                "group relative w-[260px] md:w-[280px] lg:w-[320px] flex-shrink-0 bg-white p-4 rounded-[30px] border border-stone-200 hover:shadow-xl hover:border-stone-300 transition-all duration-500",
                !isAvailable && "opacity-60 grayscale-[0.5]"
            )}
        >
            <div className="block cursor-pointer" onClick={() => navigate(`/product/${slug}`)}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#f4f2ef] mb-6">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover mix-blend-multiply opacity-95 group-hover:scale-110 transition-transform duration-1000"
                    />

                    {/* Star Badge */}
                    <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                        <Star className={clsx("w-3 h-3 fill-current", isWellness ? "text-[#7FB844]" : "text-rose-800")} />
                        <span className="text-[10px] font-black text-black">4.9</span>
                    </div>

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/5 backdrop-blur-[2px]">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (isAvailable) onQuickView(product);
                            }}
                            className={clsx(
                                "bg-white text-stone-900 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl transition-all duration-300",
                                isWellness ? "hover:bg-[#7FB844] hover:text-white" : "hover:bg-rose-800 hover:text-white",
                                !isAvailable && "cursor-not-allowed opacity-50"
                            )}
                        >
                            {isAvailable ? 'Quick View' : 'Not Available'}
                        </button>
                    </div>

                    {/* Wishlist Button */}
                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
                        className={clsx(
                            "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 z-10",
                            isInWishlist ? "bg-rose-50 border-rose-100 text-rose-500" : "bg-white/50 border-white/20 text-stone-900 hover:bg-white"
                        )}
                    >
                        <Heart className={clsx("w-3.5 h-3.5", isInWishlist && "fill-current")} />
                    </button>

                    {product.discount && isAvailable && (
                        <div className="absolute top-0 right-10 z-20 pointer-events-none">
                            <div className={clsx(
                                "text-white px-2 pt-2.5 pb-4 flex flex-col items-center leading-none shadow-xl [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_85%,0%_100%)] min-w-[32px]",
                                isWellness ? "bg-[#7FB844]" : "bg-rose-800"
                            )}>
                                <span className="text-[11px] font-black tracking-tighter">{product.discount}%</span>
                                <span className="text-[6px] font-black uppercase tracking-[0.1em] mt-1 opacity-90">OFF</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    <div>
                        <h3 className={clsx(
                            "text-lg lg:text-xl font-serif text-black uppercase tracking-tight mb-1 truncate transition-colors",
                            isWellness ? "group-hover:text-[#7FB844]" : "group-hover:text-rose-800"
                        )}>{name}</h3>
                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                            {isWellness ? 'Wellness Originals' : 'Personal Care Refinements'}
                        </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-stone-200 pt-4 mt-2">
                        <div className="flex flex-col">
                            <span className={clsx(
                                "text-xl font-black tracking-tight",
                                isWellness ? "text-[#7FB844]" : "text-rose-800"
                            )}>{formatPrice(price)}</span>
                            {product.oldPrice && (
                                <span className="text-xs text-stone-400 line-through font-bold">{formatPrice(product.oldPrice)}</span>
                            )}
                        </div>
                        <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
                            className={clsx(
                                "w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300",
                                isWellness ? "bg-[#7FB844] hover:bg-stone-900" : "bg-rose-800 hover:bg-stone-900",
                                !isAvailable && "opacity-50 cursor-not-allowed"
                            )}
                        >
                            <ShoppingBag className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const CollectionsV3: React.FC<CollectionsV3Props> = ({ wellnessProducts, cosmeticsProducts }) => {
    const [selectedProduct, setSelectedProduct] = React.useState<any>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const cosmeticsRef: any = useRef<HTMLDivElement>(null);
    const wellnessRef: any = useRef<HTMLDivElement>(null);

    const handleQuickView = (product: any) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
        if (ref.current) {
            const scrollAmount = 400;
            ref.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-16 bg-white relative overflow-hidden">

            {/* Personal Care Section */}
            <div className="mb-20">
                <div className="max-w-[1800px] mx-auto px-4 md:px-8 mb-10 flex items-end justify-between">
                    <div>
                        <h2 className="text-5xl font-serif text-stone-900 mb-3">Personal Care <i className="text-rose-800 font-serif">Refinements</i></h2>
                        <p className="text-stone-500 text-lg max-w-md">Ethereal textures for a luminous finish.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <button onClick={() => scroll(cosmeticsRef, 'left')} className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={() => scroll(cosmeticsRef, 'right')} className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                        <Link to="/personal-care" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-900 hover:text-rose-600 border-b border-rose-900/20 pb-1">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="w-full overflow-x-auto hide-scrollbar pb-10" ref={cosmeticsRef}>
                    <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex gap-4 md:gap-6 w-max">
                        {cosmeticsProducts.map(p => <ProductCard key={p.id} product={p} theme="cosmetics" onQuickView={handleQuickView} />)}
                    </div>
                </div>
            </div>

            {/* Wellness Section */}
            <div>
                <div className="max-w-[1800px] mx-auto px-4 md:px-8 mb-10 flex items-end justify-between">
                    <div>
                        <h2 className="text-5xl font-serif text-stone-900 mb-3">Wellness <i className="text-emerald-800 font-serif">Originals</i></h2>
                        <p className="text-stone-500 text-lg max-w-md">Foundational supplements for biological harmony.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <button onClick={() => scroll(wellnessRef, 'left')} className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={() => scroll(wellnessRef, 'right')} className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                        <Link to="/wellness" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-900 hover:text-emerald-600 border-b border-emerald-900/20 pb-1">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="w-full overflow-x-auto hide-scrollbar pb-10" ref={wellnessRef}>
                    <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex gap-4 md:gap-6 w-max">
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
