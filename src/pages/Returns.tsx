import React from 'react';

const Returns: React.FC = () => {
    return (
        <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 block mb-6">Harmonization Guarantee</span>
                    <h1 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.8] italic mb-10 text-center">Return & <br /> Refunds.</h1>
                </div>

                <div className="bg-white p-12 lg:p-24 rounded-[60px] shadow-sm border border-stone-200">
                    <div className="prose prose-stone max-w-none text-stone-600 font-light leading-relaxed italic">
                        <h2 className="text-2xl font-serif text-stone-900 mb-6 uppercase tracking-tight">1. Return Timeline</h2>
                        <p className="mb-10">
                            If a ritual doesn't synchronize with your biological rhythm, you may initiate a return within 30 solar cycles. Products must be in original, uncompromised condition.
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6 uppercase tracking-tight">2. Refund Processing</h2>
                        <p className="mb-10">
                            Refunds will be processed to the original payment source once the items are molecularly verified at our botanical hub. Please allow 5-10 days for the energy to return to your account.
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6 uppercase tracking-tight">3. Exchanges</h2>
                        <p className="mb-10">
                            We encourage exchanges for complementary rituals to find your perfect molecular resonance. Contact our stewards for guidance.
                        </p>

                        <div className="mt-20 pt-10 border-t border-stone-100 flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-stone-400">
                            <span>Last Updated: March 2026</span>
                            <span>Trusavor Fulfillment Stewardship</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Returns;
