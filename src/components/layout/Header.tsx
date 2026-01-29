import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import { useStore } from '../../context/store';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const cart = useStore((state) => state.cart);
    const wishlist = useStore((state) => state.wishlist);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Wellness', path: '/wellness' },
        { name: 'Cosmetics', path: '/cosmetics' },
        { name: 'Collections', path: '/all-collections' },
    ];

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={clsx(
                    "fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out px-4 md:px-8 lg:px-12",
                    isScrolled ? "top-4" : "top-8"
                )}
            >
                {/* 3D Floating Capsule Container */}
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className={clsx(
                            "relative transition-all duration-700 preserve-3d",
                            isScrolled
                                ? "bg-black backdrop-blur-3xl rounded-[24px] border border-white/20 shadow-[0_32px_64px_rgba(0,0,0,0.6)]"
                                : "bg-black backdrop-blur-2xl rounded-[40px] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        )}
                    >
                        {/* Interactive Content */}
                        <div className="relative z-10 flex items-center justify-between px-8 lg:px-14 py-5 lg:py-7">
                            {/* Left: Navigation */}
                            <nav className="hidden lg:flex items-center gap-12">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="group relative"
                                    >
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-all duration-500">
                                            {link.name}
                                        </span>
                                        <span className="absolute -bottom-2 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-700" />
                                    </Link>
                                ))}
                            </nav>

                            {/* Center: Logo */}
                            <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group">
                                <span className="text-3xl lg:text-4xl font-serif font-black tracking-[-0.05em] text-white italic drop-shadow-2xl transition-all duration-700 group-hover:scale-110">
                                    trusavor
                                </span>
                                <div className="h-px w-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:w-20 transition-all duration-700" />
                            </Link>

                            {/* Right: Actions */}
                            <div className="flex items-center gap-6">
                                <Link to="/wishlist" className="hidden md:block relative group">
                                    <Heart className={clsx("w-5 h-5 transition-all duration-500", wishlist.length > 0 ? "fill-red-500 text-red-500" : "text-white/40 group-hover:text-white")} />
                                    {wishlist.length > 0 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-black text-[8px] font-black rounded-full flex items-center justify-center translate-z-10 shadow-lg">
                                            {wishlist.length}
                                        </span>
                                    )}
                                </Link>

                                <Link to="/cart">
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="relative group flex items-center gap-4 bg-white/[0.05] border border-white/10 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-all duration-700"
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                        <span className="hidden sm:block text-[10px] font-black tracking-widest uppercase">
                                            ${totalPrice.toFixed(0)}
                                        </span>
                                        {totalItems > 0 && (
                                            <span className="bg-wellness-accent text-white group-hover:bg-black group-hover:text-white w-5 h-5 rounded-full text-[9px] font-black flex items-center justify-center">
                                                {totalItems}
                                            </span>
                                        )}
                                    </motion.div>
                                </Link>

                                <button
                                    onClick={() => setMobileMenuOpen(true)}
                                    className="lg:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
                                >
                                    <Menu className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Subtle Glow Overlays */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]">
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            <div className="absolute bottom-0 right-0 w-2/3 h-px bg-gradient-to-l from-transparent via-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                        </div>
                    </motion.div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[60]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#050505] border-l border-white/5 z-[70] p-12 flex flex-col"
                        >
                            <button onClick={() => setMobileMenuOpen(false)} className="self-end mb-16 text-white/40 hover:text-white">
                                <X className="w-8 h-8" />
                            </button>
                            <nav className="flex flex-col gap-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-4xl font-serif font-black italic text-white/20 hover:text-white transition-all transform hover:translate-x-4"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
