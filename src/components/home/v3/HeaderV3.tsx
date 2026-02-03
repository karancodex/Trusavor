import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../../ui/ThemeToggle';

const HeaderV3: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                            ? 'w-full max-w-5xl bg-premium-surface/80 backdrop-blur-md rounded-full px-8 py-3 shadow-lg border border-premium-text-muted/40'
                            : 'w-full bg-transparent px-0'
                        }
                    `}>

                        {/* Logo */}
                        <Link to="/v3" className="flex items-center gap-2 group">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${scrolled ? 'bg-premium-text-primary text-premium-surface' : 'bg-premium-surface text-premium-text-primary'}`}>
                                <span className="font-serif italic font-black text-sm">T</span>
                            </div>
                            <span className={`text-xl font-serif tracking-tight transition-colors text-premium-text-primary`}>
                                trusavor
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {['Wellness', 'Cosmetics', 'Rituals', 'Journal'].map((item) => (
                                <Link
                                    key={item}
                                    to={`/${item.toLowerCase()}`}
                                    className={`text-xs font-bold uppercase tracking-widest hover:text-premium-accent transition-colors ${scrolled ? 'text-premium-text-secondary' : 'text-premium-text-primary'}`}
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>

                        {/* Icons */}
                        <div className="flex items-center gap-6">
                            <ThemeToggle className={scrolled ? 'text-premium-text-secondary' : 'text-premium-text-primary'} />
                            <button className={`hover:text-premium-accent transition-colors ${scrolled ? 'text-premium-text-secondary' : 'text-premium-text-primary'}`}>
                                <Search className="w-5 h-5" />
                            </button>
                            <Link to="/cart" className={`hover:text-premium-accent transition-colors ${scrolled ? 'text-premium-text-secondary' : 'text-premium-text-primary'}`}>
                                <ShoppingBag className="w-5 h-5" />
                            </Link>
                            <button
                                onClick={() => setMenuOpen(true)}
                                className={`md:hidden hover:text-premium-accent transition-colors ${scrolled ? 'text-premium-text-secondary' : 'text-premium-text-primary'}`}
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
                            <span className="text-2xl font-serif font-black text-premium-text-primary">trusavor</span>
                            <div className="flex gap-4 items-center">
                                <ThemeToggle />
                                <button onClick={() => setMenuOpen(false)}>
                                    <X className="w-8 h-8 text-premium-text-primary" />
                                </button>
                            </div>
                        </div>
                        <nav className="flex flex-col gap-8">
                            {['Wellness', 'Cosmetics', 'Rituals', 'Journal', 'Account'].map((item, i) => (
                                <Link
                                    key={item}
                                    to={`/${item.toLowerCase()}`}
                                    className="text-4xl font-serif text-premium-text-primary"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HeaderV3;
