import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShoppingBag, ArrowRight, Heart, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/store';
import clsx from 'clsx';

interface ProductCard3DProps {
    product: any;
    index: number;
    variant?: 'organic' | 'minimal';
}

const ProductCard3D = ({ product, index, variant = 'organic' }: ProductCard3DProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const addToCart = useStore(state => state.addToCart);
    const toggleWishlist = useStore(state => state.toggleWishlist);
    const wishlist = useStore(state => state.wishlist);

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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={clsx(
                "group relative w-full perspective-2000",
                index % 2 === 0 ? "lg:mt-0" : "lg:mt-24"
            )}
        >
            <Link
                to={`/product/${product.slug}`}
                className={clsx(
                    "block relative bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 transition-all duration-700 hover:border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] preserve-3d cursor-pointer",
                    isWellness ? "hover:shadow-wellness-main/10" : "hover:shadow-cosmetics-main/10"
                )}
            >
                {/* Product Image Stage */}
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-8 transition-all duration-1000 group-hover:scale-[1.02] transform-gpu preserve-3d">
                    <div className={clsx(
                        "absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20",
                        isWellness ? "bg-wellness-main" : "bg-cosmetics-main"
                    )} />

                    <motion.img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                        style={{ transform: "translateZ(50px)" }}
                    />

                    {/* Quick Labels */}
                    <div className="absolute top-6 left-6 z-10" style={{ transform: "translateZ(60px)" }}>
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest text-white/60">
                            {isWellness ? "Wellness" : "Cosmetics"}
                        </div>
                    </div>

                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
                        className="absolute top-6 right-6 z-10 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/40 hover:text-red-500 transition-all duration-500"
                        style={{ transform: "translateZ(60px)" }}
                    >
                        <Heart className={clsx("w-4 h-4", isWishlisted && "fill-current text-red-500")} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="space-y-6" style={{ transform: "translateZ(30px)" }}>
                    <div className="flex items-center gap-1 opacity-40">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={clsx("w-3 h-3", i < Math.floor(product.rating) && "fill-current")} />
                        ))}
                    </div>

                    <h3 className="text-2xl font-serif font-black text-white italic tracking-tight leading-none group-hover:text-glow transition-all duration-500">
                        {product.name}
                    </h3>

                    <p className="text-white/30 text-sm line-clamp-2 font-medium leading-relaxed">
                        {product.description || "Experimental biological ritual for the modern consciousness."}
                    </p>

                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                        <span className="text-2xl font-black text-white tracking-widest">${product.price}</span>

                        <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
                            className={clsx(
                                "flex items-center gap-3 px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-700",
                                isWellness
                                    ? "bg-wellness-main text-white hover:bg-white hover:text-black"
                                    : "bg-cosmetics-main text-white hover:bg-white hover:text-black"
                            )}
                        >
                            <ShoppingBag className="w-4 h-4" />
                            Acquire
                        </button>
                    </div>
                </div>

                {/* Subtle Refractive Beam */}
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-[1.5s] ease-in-out pointer-events-none" />
            </Link>
        </motion.div>
    );
};

export default ProductCard3D;
