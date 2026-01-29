import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';
import clsx from 'clsx';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen pt-40 pb-20 bg-[#050505] flex items-center justify-center relative overflow-hidden px-6">
            {/* Cinematic Backgrounds */}
            <div className="fixed inset-0 pointer-events-none opacity-30 overflow-hidden">
                <div className="absolute top-0 right-0 w-[80vw] h-[80vw] blur-[250px] rounded-full -translate-y-1/2 translate-x-1/2 bg-wellness-main/10" />
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] blur-[200px] rounded-full translate-y-1/2 -translate-x-1/2 bg-cosmetics-main/5" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-lg relative z-10"
            >
                <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[60px] p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/[0.05] to-transparent pointer-events-none" />

                    <div className="text-center mb-16">
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-2xl">
                            <ShieldCheck className="w-8 h-8 text-white/40" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-black italic text-white tracking-tighter mb-4">Recover Key</h1>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">RESTORE YOUR COORDINATES</p>
                    </div>

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <p className="text-white/40 text-sm italic text-center font-medium leading-relaxed max-w-xs mx-auto">
                                Enter your portal email and we will transmit a resonance link to restore your secret key.
                            </p>

                            <div className="space-y-4">
                                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 ml-6">Email Coordinate</label>
                                <div className="relative group">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/15 group-focus-within:text-white transition-colors" />
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-[28px] pl-16 pr-8 py-6 text-white text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-white/5 italic font-medium"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black py-6 rounded-[28px] font-black uppercase tracking-[0.4em] text-[10px] hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-4 group shadow-xl"
                            >
                                Transmit Link <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-10"
                        >
                            <p className="text-white/60 text-lg italic font-serif leading-relaxed px-4">
                                A transmission has been sent to <span className="text-white underline underline-offset-4">{email}</span>. Please check your subspace communication.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors"
                            >
                                Re-transmit link
                            </button>
                        </motion.div>
                    )}

                    <div className="mt-16 text-center">
                        <Link to="/login" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors group">
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back to Identity Confirmation
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgotPassword;
