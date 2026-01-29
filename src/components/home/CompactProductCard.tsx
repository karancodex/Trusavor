import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/store';
import clsx from 'clsx';

interface CompactProductCardProps {
    product: any;
    theme: 'wellness' | 'cosmetics';
}

const CompactProductCard: React.FC<CompactProductCardProps> = ({ product, theme }) => {
    const addToCart = useStore(state => state.addToCart);
    const toggleWishlist = useStore(state => state.toggleWishlist);
    const wishlist = useStore(state => state.wishlist);
    const isWishlisted = wishlist.includes(product.id);
    const isWellness = theme === 'wellness';

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative w-full"
        >
            <Link to={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-[#0a0a0a] border border-white/5 transition-all duration-700 group-hover:border-white/20">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                    />

                    {/* Floating Labels */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
                            className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/40 hover:text-red-500 transition-all"
                        >
                            <Heart className={clsx("w-3.5 h-3.5", isWishlisted && "fill-current text-red-500")} />
                        </button>
                    </div>

                    {/* Quick Add Button */}
                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
                        className={clsx(
                            "absolute bottom-4 right-4 z-10 p-4 rounded-full shadow-2xl transition-all duration-500 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100",
                            isWellness ? "bg-wellness-accent text-black" : "bg-cosmetics-accent text-black"
                        )}
                    >
                        <ShoppingBag className="w-4 h-4" />
                    </button>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="mt-6 space-y-2 px-1">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                            {isWellness ? "Biological" : "Radiance"}
                        </span>
                        <div className="flex items-center gap-1 opacity-20">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <span className="text-[10px] font-bold">{product.rating || '4.9'}</span>
                        </div>
                    </div>
                    <h3 className="text-lg font-serif italic text-white/80 group-hover:text-white transition-colors truncate">
                        {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold tracking-tight text-white/60">${product.price}</span>
                        <div className={clsx(
                            "w-1 h-1 rounded-full",
                            isWellness ? "bg-wellness-accent" : "bg-cosmetics-accent"
                        )} />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default CompactProductCard;
