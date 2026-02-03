import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Heart, User, Globe, ChevronDown } from 'lucide-react';
import { useStore, CountryCode } from '../../context/store';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const CountrySelector = ({ scrolled }: { scrolled: boolean }) => {
    const { country, setCountry } = useStore();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const countries: { code: CountryCode; name: string; flag: string }[] = [
        { code: 'US', name: 'United States', flag: '🇺🇸' },
        { code: 'IN', name: 'India', flag: '🇮🇳' },
        { code: 'AE', name: 'UAE', flag: '🇦🇪' },
        { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
    ];

    const currentCountry = countries.find(c => c.code === country) || countries[0];

    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    "flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors",
                    scrolled ? "text-stone-600 hover:text-stone-900" : "text-stone-800 hover:text-stone-600"
                )}
            >
                <span className="text-sm">{currentCountry.flag}</span>
                <span className="hidden sm:inline">{currentCountry.code}</span>
                <ChevronDown className="w-3 h-3" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-xl border border-stone-100 overflow-hidden py-1"
                    >
                        {countries.map((c) => (
                            <button
                                key={c.code}
                                onClick={() => {
                                    setCountry(c.code);
                                    setIsOpen(false);
                                }}
                                className={clsx(
                                    "w-full text-left px-4 py-2 text-xs font-bold uppercase flex items-center gap-3 hover:bg-stone-50 transition-colors",
                                    country === c.code ? "text-rose-500 bg-rose-50/50" : "text-stone-600"
                                )}
                            >
                                <span className="text-lg">{c.flag}</span>
                                {c.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

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
                            <span className={`text-xl md:text-2xl font-serif font-black italic tracking-tighter transition-colors ${scrolled ? 'text-stone-900' : 'text-stone-900'}`}>
                                trusavor
                            </span>
                            <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
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
                            <CountrySelector scrolled={scrolled} />

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
                            <span className="text-2xl font-serif font-black italic">trusavor</span>
                            <button onClick={() => setMenuOpen(false)}>
                                <X className="w-8 h-8 text-stone-800" />
                            </button>
                        </div>

                        <div className="mb-10 flex flex-col gap-4">
                            <h3 className="text-xs font-black uppercase tracking-widest text-stone-400">Region</h3>
                            <div className="flex gap-4">
                                <CountrySelector scrolled={true} />
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
