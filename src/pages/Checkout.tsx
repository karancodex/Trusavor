import React, { useState } from 'react';
import { useStore } from '../context/store';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Checkout = () => {
    const navigate = useNavigate();
    const clearCart = useStore((state) => state.clearCart);
    const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(3);
        clearCart();
    };

    if (step === 3) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-wellness-main/5 blur-[150px] rounded-full" />
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 p-12 rounded-[48px] shadow-2xl text-center max-w-lg w-full relative z-10">
                    <div className="w-20 h-20 bg-wellness-accent text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-serif font-black text-white italic mb-4 tracking-tighter">Ritual Confirmed</h2>
                    <p className="text-white/30 text-base font-light italic mb-10">Your selection has been received. Expect transformation soon.</p>
                    <div className="flex flex-col gap-4">
                        <button onClick={() => navigate('/track-order')} className="w-full bg-white text-black py-5 rounded-[24px] font-black uppercase tracking-widest text-[9px] hover:scale-105 transition-all">
                            Track Ritual
                        </button>
                        <button onClick={() => navigate('/')} className="text-white/15 font-black uppercase tracking-widest text-[8px] hover:text-white transition-colors">
                            Return to Origins
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-40 pb-24 bg-[#0a0a0a] relative overflow-hidden font-sans">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cosmetics-main/5 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-7xl font-serif font-black text-white italic mb-16 tracking-tighter text-center"
                >
                    Checkout
                </motion.h1>

                <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[48px] border border-white/5 overflow-hidden shadow-2xl">
                    <div className="flex border-b border-white/5">
                        <div className={clsx("flex-1 py-6 text-center font-black uppercase text-[9px] tracking-[0.3em] transition-all", step === 1 ? "text-white bg-white/5" : "text-white/20")}>01. Identity</div>
                        <div className={clsx("flex-1 py-6 text-center font-black uppercase text-[9px] tracking-[0.3em] transition-all", step === 2 ? "text-white bg-white/5" : "text-white/20")}>02. Essence Transfer</div>
                    </div>

                    <div className="p-10 lg:p-16">
                        <form onSubmit={step === 1 ? (e) => { e.preventDefault(); setStep(2); } : handlePlaceOrder}>
                            <AnimatePresence mode='wait'>
                                {step === 1 && (
                                    <motion.div key="step1" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="md:col-span-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2 flex items-center gap-3">
                                            <ShieldCheck className="w-4 h-4" /> Shipping Information
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 ml-4">First Name</label>
                                            <input type="text" required placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-[22px] px-8 py-5 text-white text-sm focus:outline-none focus:border-wellness-accent transition-all placeholder:text-white/5" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 ml-4">Last Name</label>
                                            <input type="text" required placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-[22px] px-8 py-5 text-white text-sm focus:outline-none focus:border-wellness-accent transition-all placeholder:text-white/5" />
                                        </div>
                                        <div className="md:col-span-2 space-y-3">
                                            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 ml-4">Email Address</label>
                                            <input type="email" required placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-[22px] px-8 py-5 text-white text-sm focus:outline-none focus:border-wellness-accent transition-all placeholder:text-white/5" />
                                        </div>
                                        <div className="md:col-span-2 space-y-3">
                                            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 ml-4">Street Address</label>
                                            <input type="text" required placeholder="123 Ritual Street" className="w-full bg-white/5 border border-white/10 rounded-[22px] px-8 py-5 text-white text-sm focus:outline-none focus:border-wellness-accent transition-all placeholder:text-white/5" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 ml-4">City</label>
                                            <input type="text" required placeholder="Himalayas" className="w-full bg-white/5 border border-white/10 rounded-[22px] px-8 py-5 text-white text-sm focus:outline-none focus:border-wellness-accent transition-all placeholder:text-white/5" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 ml-4">Postal Code</label>
                                            <input type="text" required placeholder="123456" className="w-full bg-white/5 border border-white/10 rounded-[22px] px-8 py-5 text-white text-sm focus:outline-none focus:border-wellness-accent transition-all placeholder:text-white/5" />
                                        </div>

                                        <div className="md:col-span-2 mt-8">
                                            <button type="submit" className="w-full bg-white text-black py-5 rounded-[24px] font-black uppercase tracking-[0.3em] text-[10px] hover:scale-[1.02] transition-all flex items-center justify-center gap-4 group shadow-xl">
                                                Continue Ritual <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div key="step2" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-10">
                                        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-2 flex items-center gap-3">
                                            <CreditCard className="w-3.5 h-3.5" /> Essence Authorize
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <label className="flex-1 border-2 border-white bg-white/5 rounded-[22px] p-6 cursor-pointer transition-all">
                                                <input type="radio" name="payment" defaultChecked className="hidden" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white">Universal Card</span>
                                            </label>
                                            <label className="flex-1 border border-white/10 rounded-[22px] p-6 cursor-pointer hover:border-white/30 transition-all">
                                                <input type="radio" name="payment" className="hidden" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Transfer Ritual</span>
                                            </label>
                                        </div>

                                        <div className="space-y-6">
                                            <input type="text" required placeholder="Card Number" className="w-full bg-white/5 border border-white/10 rounded-[22px] px-8 py-5 text-white text-sm focus:outline-none focus:border-wellness-accent transition-all placeholder:text-white/10" />
                                            <div className="grid grid-cols-2 gap-6">
                                                <input type="text" required placeholder="MM / YY" className="bg-white/5 border border-white/10 rounded-[22px] px-8 py-5 text-white text-sm focus:outline-none focus:border-wellness-accent transition-all placeholder:text-white/10" />
                                                <input type="text" required placeholder="CVC" className="bg-white/5 border border-white/10 rounded-[22px] px-8 py-5 text-white text-sm focus:outline-none focus:border-wellness-accent transition-all placeholder:text-white/10" />
                                            </div>
                                        </div>

                                        <div className="flex gap-6 mt-12">
                                            <button type="button" onClick={() => setStep(1)} className="flex-1 border border-white/5 py-5 rounded-[24px] font-black uppercase text-[9px] tracking-widest text-white/20 hover:text-white transition-all">
                                                Back
                                            </button>
                                            <button type="submit" className="flex-1 bg-white text-black py-5 rounded-[24px] font-black uppercase text-[10px] tracking-[0.3em] hover:scale-[1.02] transition-all shadow-xl">
                                                Confirm
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
