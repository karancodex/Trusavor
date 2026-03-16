import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useStore } from '../../context/store';
import clsx from 'clsx';

export const LanguageSelector = ({ scrolled }: { scrolled: boolean }) => {
    const { language, setLanguage } = useStore();
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

    const languages: { code: any; name: string; flag: string }[] = [
        { code: 'EN', name: 'English', flag: '🇺🇸' },
        { code: 'HI', name: 'हिन्दी', flag: '🇮🇳' },
        { code: 'AR', name: 'العربية', flag: '🇦🇪' },
    ];

    const currentLanguage = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider transition-colors",
                    scrolled ? "text-stone-600 hover:text-stone-900" : "text-stone-800 hover:text-stone-600"
                )}
            >
                <span className="text-sm">{currentLanguage.flag}</span>
                <span className="hidden sm:inline">{currentLanguage.code}</span>
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
                        {languages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => {
                                    setLanguage(l.code);
                                    setIsOpen(false);
                                }}
                                className={clsx(
                                    "w-full text-left px-4 py-2 text-xs font-bold uppercase flex items-center gap-3 hover:bg-stone-50 transition-colors",
                                    language === l.code ? "text-rose-500 bg-rose-50/50" : "text-stone-600"
                                )}
                            >
                                <span className="text-lg">{l.flag}</span>
                                {l.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const CurrencySelector = ({ scrolled }: { scrolled: boolean }) => {
    const { currency, setCurrency } = useStore();
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

    const currencies: { code: any; symbol: string; name: string }[] = [
        { code: 'USD', symbol: '$', name: 'US Dollar' },
        { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
        { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
        { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal' },
    ];

    const currentCurrency = currencies.find(c => c.code === currency) || currencies[0];

    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider transition-colors",
                    scrolled ? "text-stone-600 hover:text-stone-900" : "text-stone-800 hover:text-stone-600"
                )}
            >
                <span className="font-sans font-bold">{currentCurrency.symbol}</span>
                <span className="hidden sm:inline">{currentCurrency.code}</span>
                <ChevronDown className="w-3 h-3" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-stone-100 overflow-hidden py-1"
                    >
                        {currencies.map((c) => (
                            <button
                                key={c.code}
                                onClick={() => {
                                    setCurrency(c.code);
                                    setIsOpen(false);
                                }}
                                className={clsx(
                                    "w-full text-left px-4 py-2 text-xs font-bold uppercase flex items-center gap-3 hover:bg-stone-50 transition-colors",
                                    currency === c.code ? "text-rose-500 bg-rose-50/50" : "text-stone-600"
                                )}
                            >
                                <span className="w-6 text-center font-sans font-bold">{c.symbol}</span>
                                {c.code} - {c.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
