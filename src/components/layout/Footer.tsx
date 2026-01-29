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
        <footer className="bg-[#050505] text-white pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
            {/* Ambient Depth Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] bg-wellness-main/5 blur-[250px] rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
                    {/* Brand Meta */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        <div>
                            <Link to="/" className="text-6xl font-serif font-black tracking-[-0.05em] text-white italic mb-8 block transition-all hover:text-wellness-accent">
                                trusavor
                            </Link>
                            <p className="text-white/30 text-xl font-light italic leading-relaxed max-w-md">
                                Redefining the intersection of ancient molecular wisdom and modern lifestyle luxury. Engineered for resonance.
                            </p>
                        </div>
                        <div className="flex gap-8">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/20 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-700">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Spacing */}
                    <div className="lg:col-span-1 hidden lg:block" />

                    {/* Collections */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-white/20">The Catalog</h4>
                        <ul className="space-y-8">
                            {[
                                { name: 'Wellness Rituals', path: '/wellness', color: 'hover:text-wellness-accent' },
                                { name: 'Beauty Radiance', path: '/cosmetics', color: 'hover:text-cosmetics-accent' },
                                { name: 'Full Archive', path: '/all-collections', color: 'hover:text-white' },
                                { name: 'The Journal', path: '/journal', color: 'hover:text-white/60' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className={clsx(
                                        "text-sm font-black uppercase tracking-[0.2em] text-white/40 transition-all flex items-center gap-4 group",
                                        item.color
                                    )}>
                                        <span className="h-px w-0 bg-current transition-all group-hover:w-8" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter High-End */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-white/20">Manifesto</h4>
                        <p className="text-sm text-white/30 mb-8 leading-relaxed font-medium">
                            Join the inner circle for exclusive molecular releases and botanical updates.
                        </p>
                        <div className="relative group overflow-hidden rounded-2xl">
                            <input
                                type="email"
                                placeholder="Enter coordinates (Email)"
                                className="w-full bg-white/[0.03] border border-white/5 py-5 px-8 text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-white/10 italic"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center hover:scale-105 transition-all shadow-xl">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal Section */}
                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/15 text-center md:text-left">
                        © 2026 TRUSAVOR INC. ALL RITUALS SECURED.
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all group"
                    >
                        Ascend <ArrowUp className="w-4 h-4 group-hover:-translate-y-2 transition-transform" />
                    </button>

                    <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/15">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
