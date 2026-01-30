import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import { useStore } from '../../context/store';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const cart = useStore((state) => state.cart);
    const wishlist = useStore((state) => state.wishlist);
    const location = useLocation();
    const isHome = location.pathname === '/';

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
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                    isHome
                        ? (isScrolled ? "bg-white/90 backdrop-blur-md py-4 border-stone-200 shadow-sm" : "bg-transparent py-6 border-transparent")
                        : "bg-white/90 backdrop-blur-md py-4 border-stone-200 shadow-sm"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Left: Logo */}
                    <Link to="/" className="flex items-center gap-2 group z-50">
                        <span className={clsx(
                            "text-2xl md:text-3xl font-serif font-black italic tracking-tighter transition-colors duration-300",
                            isHome && !isScrolled ? "text-white" : "text-premium-text-primary"
                        )}>
                            trusavor
                        </span>
                        <div className="h-1.5 w-1.5 rounded-full bg-premium-gold group-hover:scale-125 transition-transform" />
                    </Link>

                    {/* Center: Navigation */}
                    <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="group relative py-2"
                            >
                                <span className={clsx(
                                    "text-[11px] font-black uppercase tracking-[0.2em] transition-colors",
                                    isHome && !isScrolled ? "text-white/80 group-hover:text-white" : "text-premium-text-secondary group-hover:text-premium-text-primary"
                                )}>
                                    {link.name}
                                </span>
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-premium-gold group-hover:w-full transition-all duration-300 ease-out" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-6 md:gap-8 z-50">
                        <div className={clsx(
                            "hidden md:flex items-center gap-6 border-r pr-6 mr-2",
                            isHome && !isScrolled ? "border-white/20" : "border-stone-200"
                        )}>
                            <button className="group relative">
                                <Search className={clsx("w-5 h-5 transition-colors", isHome && !isScrolled ? "text-white/80 group-hover:text-white" : "text-premium-text-muted group-hover:text-premium-text-primary")} />
                            </button>
                            <Link to="/wishlist" className="group relative">
                                <Heart className={clsx("w-5 h-5 transition-colors",
                                    isHome && !isScrolled
                                        ? (wishlist.length > 0 ? "fill-white text-white" : "text-white/80 group-hover:text-white")
                                        : (wishlist.length > 0 ? "fill-premium-gold text-premium-gold" : "text-premium-text-muted group-hover:text-premium-text-primary")
                                )} />
                                {wishlist.length > 0 && (
                                    <span className={clsx(
                                        "absolute -top-1.5 -right-1.5 w-3.5 h-3.5 text-[8px] font-black rounded-full flex items-center justify-center",
                                        isHome && !isScrolled
                                            ? "bg-white text-premium-text-primary"
                                            : "bg-premium-gold text-white"
                                    )}>
                                        {wishlist.length}
                                    </span>
                                )}
                            </Link>
                            <Link to="/account" className="group relative">
                                <User className={clsx("w-5 h-5 transition-colors", isHome && !isScrolled ? "text-white/80 group-hover:text-white" : "text-premium-text-muted group-hover:text-premium-text-primary")} />
                            </Link>
                        </div>

                        <Link to="/cart" className="relative group">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <ShoppingBag className={clsx("w-5 h-5 transition-colors", isHome && !isScrolled ? "text-white group-hover:text-premium-gold" : "text-premium-text-primary group-hover:text-premium-gold")} />
                                    {totalItems > 0 && (
                                        <span className={clsx(
                                            "absolute -top-2 -right-2 w-4 h-4 rounded-full text-[8px] font-black flex items-center justify-center",
                                            isHome && !isScrolled
                                                ? "bg-white text-premium-text-primary"
                                                : "bg-premium-text-primary text-white"
                                        )}>
                                            {totalItems}
                                        </span>
                                    )}
                                </div>
                                <span className={clsx(
                                    "text-[10px] font-black tracking-widest hidden sm:block",
                                    isHome && !isScrolled ? "text-white" : "text-premium-text-primary"
                                )}>
                                    CART ({totalItems})
                                </span>
                            </div>
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className={clsx("lg:hidden transition-colors", isHome && !isScrolled ? "text-white" : "text-premium-text-primary")}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
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
                            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[60]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-premium-light border-l border-stone-200 z-[70] p-12 flex flex-col"
                        >
                            <button onClick={() => setMobileMenuOpen(false)} className="self-end mb-16 text-premium-text-secondary hover:text-premium-text-primary">
                                <X className="w-8 h-8" />
                            </button>
                            <nav className="flex flex-col gap-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-4xl font-serif font-black italic text-premium-text-secondary/50 hover:text-premium-text-primary transition-all transform hover:translate-x-4"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    to="/account"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-4xl font-serif font-black italic text-premium-text-secondary/50 hover:text-premium-text-primary transition-all transform hover:translate-x-4"
                                >
                                    Profile
                                </Link>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
