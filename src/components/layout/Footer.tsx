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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-8 mb-32">
                    {/* Brand Meta */}
                    <div className="flex flex-col gap-10">
                        <div>
                            <Link to="/" className="mb-8 block transition-all hover:scale-105 origin-left duration-500">
                                <img src="/logo.png" alt="Trusavor Logo" className="h-10 w-auto object-contain" />
                            </Link>
                            <p className="text-premium-text-secondary text-sm font-light italic leading-relaxed">
                                Redefining the intersection of ancient molecular wisdom and modern luxury.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="group w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm hover:bg-[#7FB844] hover:border-[#7FB844]">
                                    <Icon className="w-4 h-4 text-stone-600 group-hover:text-white transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Rituals Column */}
                    <div>
                        <h4 className="text-[9px] font-black uppercase tracking-[0.4em] mb-10 text-premium-accent">The Catalog</h4>
                        <ul className="space-y-5">
                            {[
                                { name: 'Wellness Rituals', path: '/wellness' },
                                { name: 'Personal Care', path: '/personal-care' },
                                { name: 'Why Trusavor', path: '/why-trusavor' },
                                { name: 'The Journal', path: '/journal' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-[11px] font-black uppercase tracking-[0.15em] text-premium-text-secondary hover:text-premium-accent transition-all flex items-center gap-3 group">
                                        <span className="h-px w-0 bg-premium-accent transition-all duration-500 group-hover:w-4" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Philosophy Column */}
                    <div>
                        <h4 className="text-[9px] font-black uppercase tracking-[0.4em] mb-10 text-premium-accent">Philosophy</h4>
                        <ul className="space-y-5">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Contact Us', path: '/contact' },
                                { name: 'FAQ', path: '/faq' },
                                { name: 'Returns', path: '/returns' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-[10px] font-bold uppercase tracking-[0.1em] text-premium-text-muted hover:text-premium-accent transition-all">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Account Column */}
                    <div>
                        <h4 className="text-[9px] font-black uppercase tracking-[0.4em] mb-10 text-premium-accent">My Trusavor</h4>
                        <ul className="space-y-5">
                            {[
                                { name: 'My Account', path: '/account' },
                                { name: 'Track Order', path: '/track-order' },
                                { name: 'Privacy Policy', path: '/privacy' },
                                { name: 'Terms & Cond.', path: '/terms' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-[10px] font-bold uppercase tracking-[0.1em] text-premium-text-muted hover:text-premium-accent transition-all">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
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

                    <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-premium-text-muted/50 invisible">
                        <Link to="/privacy" className="hover:text-premium-accent transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-premium-accent transition-colors">Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
