import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FooterV3: React.FC = () => {
    return (
        <footer className="bg-[#E8DFCA] pt-20 pb-10 px-6 relative overflow-hidden">
            {/* Background Grain */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-serif text-stone-900 mb-6">Join the inner circle.</h2>
                        <div className="flex border-b border-stone-900 pb-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent border-none outline-none flex-grow text-stone-900 placeholder-stone-600/50"
                            />
                            <button className="text-stone-900 font-bold uppercase tracking-widest text-xs hover:text-rose-600 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-16 md:gap-32">
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-stone-500 text-xs mb-6">Shop</h4>
                            <ul className="space-y-4">
                                {['Wellness', 'Cosmetics', 'Sets', 'Gift Cards'].map(link => (
                                    <li key={link}><a href="#" className="font-serif text-xl text-stone-900 hover:text-rose-600 transition-colors flex items-center gap-1 group">{link} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-stone-500 text-xs mb-6">About</h4>
                            <ul className="space-y-4">
                                {['Our Story', 'Ingredients', 'Journal', 'Contact'].map(link => (
                                    <li key={link}><a href="#" className="font-serif text-xl text-stone-900 hover:text-rose-600 transition-colors flex items-center gap-1 group">{link} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-stone-800/10 pt-10">
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-[12vw] leading-[0.8] font-serif italic text-stone-800 tracking-tighter mix-blend-multiply opacity-20 select-none">
                            trusavor
                        </h1>
                    </div>
                    <div className="flex gap-6 text-xs text-stone-600 font-medium uppercase tracking-wider">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <span>© 2026 Trusavor Inc.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV3;
