import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 block mb-6">Your Integrity</span>
                    <h1 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.8] italic mb-10 text-center">Privacy <br /> Policy.</h1>
                </div>

                <div className="bg-white p-12 lg:p-24 rounded-[60px] shadow-sm border border-stone-200">
                    <div className="prose prose-stone max-w-none text-stone-600 font-light leading-relaxed italic">
                        <h2 className="text-2xl font-serif text-stone-900 mb-6 uppercase tracking-tight">1. Data Bio-Ethics</h2>
                        <p className="mb-10">
                            We collected biological preference data to refine your ritual experience. We do not sell your molecular footprints or personal rhythms to third-party entities. All data is encrypted with botanical precision.
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6 uppercase tracking-tight">2. Cookie Rituals</h2>
                        <p className="mb-10">
                            Our digital ecosystem uses small segments of data to remember your preferences and ensure a seamless, ethereal interface between sessions.
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6 uppercase tracking-tight">3. Security Standards</h2>
                        <p className="mb-10">
                            We maintain high-end clinical security standards, ensuring your identity remains as pure as our ingredients.
                        </p>

                        <div className="mt-20 pt-10 border-t border-stone-100 flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-stone-400">
                            <span>Last Updated: March 2026</span>
                            <span>Secure Botanical Hub</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
