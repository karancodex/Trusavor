import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Heart, User, Globe, ChevronDown } from 'lucide-react';
import { useStore, CountryCode } from '../../context/store';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { LanguageSelector, CurrencySelector } from './Selectors';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const cart = useStore((state) => state.cart);
    const wishlist = useStore((state) => state.wishlist);
    const { t } = useTranslation();

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('header.wellness'), path: '/wellness' },
        { name: t('header.cosmetics'), path: '/cosmetics' },
        { name: t('header.collections'), path: '/all-collections' },
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
                            ? 'w-full max-w-7xl bg-white/80 backdrop-blur-md rounded-full px-6 md:px-8 py-3 shadow-lg border border-white/40'
                            : 'w-full bg-transparent px-0'
                        }
                    `}>

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group mr-4">
                            <img src="/logo.png" alt="Trusavor Logo" className="h-10 md:h-14 w-[120px] object-contain" />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-xs font-bold uppercase tracking-widest hover:text-rose-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-800'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Icons */}
                        <div className="flex items-center gap-3 md:gap-5">
                            <div className="flex items-center gap-2">
                                <LanguageSelector scrolled={scrolled} />
                                <div className="w-px h-3 bg-stone-300 hidden sm:block"></div>
                                <CurrencySelector scrolled={scrolled} />
                            </div>

                            <div className="w-px h-4 bg-stone-300 hidden md:block mx-1"></div>

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
                        className="fixed inset-0 z-[60] bg-[#fafaf9] flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <img src="/logo.png" alt="Trusavor Logo" className="h-10 w-auto object-contain" />
                            <button onClick={() => setMenuOpen(false)}>
                                <X className="w-8 h-8 text-stone-800" />
                            </button>
                        </div>

                        <div className="mb-10 flex flex-col gap-6">
                            <h3 className="text-xs font-black uppercase tracking-widest text-stone-400">Preferences</h3>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Language</span>
                                    <LanguageSelector scrolled={true} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Currency</span>
                                    <CurrencySelector scrolled={true} />
                                </div>
                            </div>
                        </div>

                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-3xl font-serif text-stone-900 hover:text-rose-500 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/account"
                                onClick={() => setMenuOpen(false)}
                                className="text-3xl font-serif text-stone-900 hover:text-rose-500 transition-colors"
                            >
                                {t('header.account')}
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
