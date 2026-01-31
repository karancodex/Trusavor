import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { useStore } from '../../../context/store';

interface CollectionsV3Props {
    wellnessProducts: any[];
    cosmeticsProducts: any[];
}

const ProductCard: React.FC<{ product: any, theme: 'wellness' | 'cosmetics' }> = ({ product, theme }) => {
    const addToCart = useStore(state => state.addToCart);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

    // Data Fallbacks matching "CompactProductCard" logic
    const image = product.images?.[0] || product.thumbnail || '/placeholder.png';
    const name = product.name || product.title || 'Untitled';
    const price = product.price || 0;
    const slug = product.slug || product.handle || '#';

    const isWellness = theme === 'wellness';

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="group relative w-[280px] md:w-[320px] flex-shrink-0"
        >
            <Link to={`/product/${slug}`} className="block">
                <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-white border border-stone-100 mb-5 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-1000"
                    />

                    {/* Add Button */}
                    <button
                        onClick={(e) => { e.preventDefault(); addToCart(product); }}
                        className={clsx(
                            "absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300",
                            isWellness ? "bg-emerald-800 hover:bg-emerald-700" : "bg-rose-800 hover:bg-rose-700"
                        )}
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </button>

                    <div className="absolute top-4 left-4">
                        <span className={clsx(
                            "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border",
                            isWellness ? "text-emerald-800 border-emerald-100" : "text-rose-800 border-rose-100"
                        )}>
                            {isWellness ? 'Ritual' : 'Edit'}
                        </span>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors mb-1 truncate">{name}</h3>
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-bold text-stone-500">${price}</span>
                        <span className="text-stone-400 text-xs uppercase tracking-wider font-medium">View Details</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const CollectionsV3: React.FC<CollectionsV3Props> = ({ wellnessProducts, cosmeticsProducts }) => {
    return (
        <section className="py-16 bg-white relative overflow-hidden">

            {/* Wellness Section */}
            <div className="mb-16">
                <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-5xl font-serif text-stone-900 mb-4">Wellness <i className="text-emerald-800 font-serif">Originals</i></h2>
                        <p className="text-stone-500 text-lg max-w-md">Foundational supplements for biological harmony.</p>
                    </div>
                    <Link to="/wellness" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-900 hover:text-emerald-600 border-b border-emerald-900/20 pb-1">
                        View Collection <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="w-full overflow-x-auto hide-scrollbar pb-10 px-6">
                    <div className="flex gap-8 w-max md:pl-[max(1.5rem,calc((100vw-1280px)/2))]">
                        {wellnessProducts.map(p => <ProductCard key={p.id} product={p} theme="wellness" />)}
                    </div>
                </div>
            </div>

            {/* Cosmetics Section */}
            <div>
                <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-5xl font-serif text-stone-900 mb-4">Cosmetic <i className="text-rose-800 font-serif">Refinements</i></h2>
                        <p className="text-stone-500 text-lg max-w-md">Ethereal textures for a luminous finish.</p>
                    </div>
                    <Link to="/cosmetics" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-900 hover:text-rose-600 border-b border-rose-900/20 pb-1">
                        View Edit <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="w-full overflow-x-auto hide-scrollbar pb-10 px-6">
                    <div className="flex gap-8 w-max md:pl-[max(1.5rem,calc((100vw-1280px)/2))]">
                        {cosmeticsProducts.map(p => <ProductCard key={p.id} product={p} theme="cosmetics" />)}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CollectionsV3;
