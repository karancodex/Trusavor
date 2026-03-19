import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShoppingBag, ArrowRight, Heart, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/store';
import clsx from 'clsx';
import { useCurrency } from '../../hooks/useCurrency';

interface ProductCard3DProps {
    product: any;
    index: number;
    variant?: 'organic' | 'minimal';
    disableStagger?: boolean;
    onQuickView?: (product: any) => void;
}

const ProductCard3D = ({ product, index, variant = 'organic', disableStagger = false, onQuickView }: ProductCard3DProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const addToCart = useStore(state => state.addToCart);
    const toggleWishlist = useStore(state => state.toggleWishlist);
    const wishlist = useStore(state => state.wishlist);
    const { formatPrice } = useCurrency();

    const isWishlisted = wishlist.includes(product.id);
    const isWellness = product.categoryId === 'cat_wellness';

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="group relative w-full perspective-2000"
        >
            <Link
                to={`/product/${product.slug}`}
                className={clsx(
                    "block relative bg-white/80 backdrop-blur-3xl border border-stone-200 rounded-[32px] p-5 transition-all duration-700 hover:border-[#7FB844]/30 shadow-lg hover:shadow-2xl preserve-3d cursor-pointer",
                    isWellness ? "hover:shadow-wellness-main/10" : "hover:shadow-cosmetics-main/10"
                )}
            >
                {/* Product Image Stage */}
                <div className="relative aspect-square rounded-[20px] overflow-hidden mb-5 transition-all duration-1000 group-hover:scale-[1.02] transform-gpu preserve-3d border border-stone-100 bg-[#f4f2ef]">
                    <div className={clsx(
                        "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity",
                        isWellness ? "bg-wellness-main" : "bg-cosmetics-main"
                    )} />

                    <motion.img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover mix-blend-multiply opacity-95 transition-all duration-1000 group-hover:scale-110"
                        style={{ transform: "translateZ(30px)" }}
                    />

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/5 backdrop-blur-[2px] z-20">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onQuickView?.(product);
                            }}
                            className={clsx(
                                "bg-white text-stone-900 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl transition-all duration-300 hover:bg-[#7FB844] hover:text-white"
                            )}
                            style={{ transform: "translateZ(50px)" }}
                        >
                            Quick View
                        </button>
                    </div>

                    {/* Quick Labels */}
                    <div className="absolute top-4 left-4 z-10" style={{ transform: "translateZ(40px)" }}>
                        <div className="bg-white/90 backdrop-blur-md border border-stone-200 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-[#7FB844]">
                            {isWellness ? "Wellness" : "Cosmetics"}
                        </div>
                    </div>

                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
                        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-stone-200 text-stone-400 hover:text-red-500 transition-all duration-300"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        <Heart className={clsx("w-3.5 h-3.5", isWishlisted && "fill-current text-red-500")} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="space-y-4" style={{ transform: "translateZ(20px)" }}>
                    <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0 flex-grow">
                            <h3 className="text-sm font-black text-black group-hover:text-[#7FB844] transition-colors truncate uppercase tracking-tight">
                                {product.name}
                            </h3>
                            <div className="flex items-center gap-1 opacity-60 mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={clsx("w-2.5 h-2.5", i < Math.floor(product.rating) ? "fill-[#7FB844] text-[#7FB844]" : "text-stone-300")} />
                                ))}
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-base font-black text-[#7FB844] tracking-tight">{formatPrice(product.price)}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                        <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">View Ritual</span>
                        <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
                            className={clsx(
                                "flex items-center gap-2 p-2.5 rounded-full text-white transition-all duration-300 shadow-md",
                                isWellness ? "bg-stone-900 hover:bg-[#7FB844]" : "bg-stone-900 hover:bg-[#7FB844]"
                            )}
                        >
                            <ShoppingBag className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Subtle Refractive Beam */}
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/[0.4] to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-[1.5s] ease-in-out pointer-events-none mix-blend-soft-light" />
            </Link>
        </motion.div>
    );
};

export default ProductCard3D;
