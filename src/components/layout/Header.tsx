import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Heart, User } from 'lucide-react';
import { useStore } from '../../context/store';
import clsx from 'clsx';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const cart = useStore((state) => state.cart);
    const wishlist = useStore((state) => state.wishlist);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Wellness', path: '/wellness' },
        { name: 'Cosmetics', path: '/cosmetics' },
        { name: 'Collections', path: '/all-collections' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}
            >
                <div className="container mx-auto px-6 flex justify-center">
                    <div className={`
                        relative flex items-center justify-between transition-all duration-500
                        ${scrolled
                            ? 'w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-full px-8 py-3 shadow-lg border border-white/40' // Increased width for more items
                            : 'w-full bg-transparent px-0'
                        }
                    `}>

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <span className={`text-xl md:text-2xl font-serif font-black italic tracking-tighter transition-colors ${scrolled ? 'text-stone-900' : 'text-stone-900'}`}>
                                trusavor
                            </span>
                            <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-xs font-bold uppercase tracking-widest hover:text-rose-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-800'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Icons */}
                        <div className="flex items-center gap-4 md:gap-6">
                            <button className={`hover:text-rose-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-800'}`}>
                                <Search className="w-5 h-5" />
                            </button>

                            <Link to="/wishlist" className={`relative hover:text-rose-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-800'}`}>
                                <Heart className={clsx("w-5 h-5", wishlist.length > 0 && "fill-rose-500 text-rose-500")} />
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-rose-500 text-white text-[8px] font-black rounded-full flex items-center justify-center">
                                        {wishlist.length}
                                    </span>
                                )}
                            </Link>

                            <Link to="/account" className={`hover:text-rose-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-800'}`}>
                                <User className="w-5 h-5" />
                            </Link>

                            <Link to="/cart" className={`relative hover:text-rose-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-800'}`}>
                                <ShoppingBag className="w-5 h-5" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-stone-900 text-white text-[8px] font-black rounded-full flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>

                            <button
                                onClick={() => setMenuOpen(true)}
                                className={`md:hidden hover:text-rose-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-800'}`}
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-[#fafaf9] flex flex-col p-10"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="text-2xl font-serif font-black italic">trusavor</span>
                            <button onClick={() => setMenuOpen(false)}>
                                <X className="w-8 h-8 text-stone-800" />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-4xl font-serif text-stone-900 hover:text-rose-500 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/account"
                                onClick={() => setMenuOpen(false)}
                                className="text-4xl font-serif text-stone-900 hover:text-rose-500 transition-colors"
                            >
                                Profile
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
