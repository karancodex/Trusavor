import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Send, ArrowUp } from 'lucide-react';
import { useStore } from '../../context/store';
import clsx from 'clsx';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-premium-light text-premium-text-primary pt-32 pb-16 border-t border-stone-200 relative overflow-hidden">
            {/* Ambient Depth Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-gold/20 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] bg-premium-gold/5 blur-[250px] rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
                    {/* Brand Meta */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        <div>
                            <Link to="/" className="mb-8 block transition-all hover:scale-105 origin-left duration-500">
                                <img src="/logo.png" alt="Trusavor Logo" className="h-12 w-auto object-contain" />
                            </Link>
                            <p className="text-premium-text-secondary text-xl font-light italic leading-relaxed max-w-md">
                                Redefining the intersection of ancient molecular wisdom and modern lifestyle luxury. Engineered for resonance.
                            </p>
                        </div>
                        <div className="flex gap-8">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="group w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm hover:bg-[#7FB844] hover:border-[#7FB844]">
                                    <Icon className="w-5 h-5 text-stone-600 group-hover:text-white transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Spacing */}
                    <div className="lg:col-span-1 hidden lg:block" />

                    {/* Collections */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-premium-accent">The Catalog</h4>
                        <ul className="space-y-8">
                            {[
                                { name: 'Wellness Rituals', path: '/wellness' },
                                { name: 'Personal Care', path: '/personal-care' },
                                { name: 'Full Archive', path: '/all-collections' },
                                { name: 'The Journal', path: '/journal' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-sm font-black uppercase tracking-[0.2em] text-premium-text-secondary hover:text-premium-accent transition-all flex items-center gap-4 group">
                                        <span className="h-px w-0 bg-premium-accent transition-all duration-500 group-hover:w-8" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter High-End */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-premium-accent">Manifesto</h4>
                        <p className="text-sm text-premium-text-muted mb-8 leading-relaxed font-medium">
                            Join the inner circle for exclusive molecular releases and botanical updates.
                        </p>
                        <div className="relative group overflow-hidden rounded-full shadow-md">
                            <input
                                type="email"
                                placeholder="Enter coordinates (Email)"
                                className="w-full bg-white border border-stone-200 py-5 px-8 text-sm focus:outline-none focus:border-premium-accent/50 transition-all placeholder:text-stone-300 italic text-premium-text-primary"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-premium-accent text-white rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-xl hover:bg-premium-text-primary">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal Section */}
                <div className="pt-16 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-premium-text-muted/50 text-center md:text-left flex flex-col md:flex-row gap-2">
                        <span>© 2026 TRUSAVOR INC. ALL RITUALS SECURED.</span>
                        <span className="hidden md:block">|</span>
                        <span>Developed by RightBrain Infotech Pvt. Ltd.</span>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-premium-text-muted hover:text-premium-accent transition-all group"
                    >
                        Ascend <ArrowUp className="w-4 h-4 group-hover:-translate-y-2 transition-transform duration-500 text-premium-accent" />
                    </button>

                    <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-premium-text-muted/50">
                        <Link to="/privacy" className="hover:text-premium-accent transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-premium-accent transition-colors">Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
