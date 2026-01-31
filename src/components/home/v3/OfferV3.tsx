import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OfferV3: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto">
                <div className="bg-[#E8DFCA] rounded-[40px] overflow-hidden flex flex-col lg:flex-row relative">

                    {/* Content */}
                    <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative z-10">
                        <span className="inline-block border border-stone-800/30 rounded-full px-4 py-1 self-start text-[10px] font-black uppercase tracking-widest text-stone-800 mb-8">
                            Seasonal Exclusive
                        </span>

                        <h2 className="text-5xl lg:text-7xl font-serif text-stone-900 mb-8 leading-none">
                            The <br /> <span className="italic">Summer</span> Kit
                        </h2>

                        <p className="text-stone-700 text-lg mb-12 max-w-sm font-light leading-relaxed">
                            Everything you need for a complete restoration ritual. Includes our best-selling serum, toner, and night cream.
                        </p>

                        <div className="flex gap-6">
                            <Link to="/offer" className="bg-stone-900 text-[#E8DFCA] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-800 transition-colors">
                                Shop Bundle
                            </Link>
                            <Link to="/wellness" className="px-8 py-4 rounded-full border border-stone-900 text-stone-900 font-bold uppercase tracking-widest text-xs hover:bg-stone-900 hover:text-[#E8DFCA] transition-colors">
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* Image Panel */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px]">
                        <img
                            src="/assets/cosmetics_hero.png"
                            alt="Summer Kit"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#E8DFCA]/10 mix-blend-multiply" />
                    </div>

                    {/* Decorative */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#E8DFCA] rounded-full flex items-center justify-center z-20 shadow-xl hidden lg:flex">
                        <span className="font-serif italic text-2xl text-stone-900">20%<br /><span className="text-xs font-sans not-italic font-bold tracking-widest">OFF</span></span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OfferV3;
