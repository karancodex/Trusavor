import React from 'react';
import { useStore } from '../context/store';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard3D from '../components/home/ProductCard3D';

const Wishlist = () => {
    const wishlist = useStore((state) => state.wishlist);
    const products = useStore((state) => state.products);

    const wishlistItems = products.filter(p => wishlist.includes(p.id));

    if (wishlistItems.length === 0) {
        return (
            <div className="min-h-screen pt-48 px-6 bg-premium-light text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cosmetics-main/5 blur-[150px] rounded-full" />
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10">
                    <Heart className="w-16 h-16 text-premium-text-muted/30 mx-auto mb-8" />
                    <h1 className="text-4xl md:text-5xl font-serif font-black text-premium-text-primary italic mb-6 tracking-tighter">Empty Archive</h1>
                    <p className="text-premium-text-secondary text-lg font-light italic mb-12">Your ritual selection is waiting to be curated.</p>
                    <Link to="/all-collections" className="inline-flex items-center gap-4 px-10 py-4 bg-premium-text-primary text-white rounded-full font-black uppercase text-[9px] tracking-widest hover:scale-105 transition-all shadow-xl">
                        Discover Rituals <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-40 pb-24 bg-premium-light relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-wellness-main/5 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="max-w-4xl mb-24"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-premium-text-muted/30" />
                        <span className="font-black tracking-[0.4em] uppercase text-[8px] text-premium-text-muted">
                            YOUR CURATED SELECTION
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-serif font-black text-premium-text-primary italic tracking-tighter">Wishlist</h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {wishlistItems.map((product, idx) => (
                            <ProductCard3D key={product.id} product={product} index={idx} disableStagger={true} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
