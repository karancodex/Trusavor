import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 block mb-6">Trusavor Inc.</span>
                    <h1 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.8] italic mb-10 text-center">Terms of <br /> Service.</h1>
                </div>

                <div className="bg-white p-12 lg:p-24 rounded-[60px] shadow-sm border border-stone-200">
                    <div className="prose prose-stone max-w-none text-stone-600 font-light leading-relaxed italic">
                        <h2 className="text-2xl font-serif text-stone-900 mb-6 uppercase tracking-tight">1. General Terms</h2>
                        <p className="mb-10">
                            By accessing or using Trusavor services, you agree to bio-ethical usage of our molecular rituals. All content is protected by international gravity and intellectual property laws. Trusavor reserves the right to terminate access for any rhythmic violations.
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6 uppercase tracking-tight">2. Product Usage</h2>
                        <p className="mb-10">
                            Rituals must be conducted as prescribed. Results vary by biological rhythm and geographic altitude. Trusavor is not responsible for any energetic imbalances resulting from improper alignment.
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6 uppercase tracking-tight">3. Governing Law</h2>
                        <p className="mb-10">
                            These terms are governed by the laws of our primary botanical origin point, unless otherwise specified by local molecular regulations.
                        </p>

                        <div className="mt-20 pt-10 border-t border-stone-100 flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-stone-400">
                            <span>Last Updated: March 2026</span>
                            <span>Trusavor Integrity Office</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
