import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/store';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import clsx from 'clsx';

const Signup = () => {
    const [email, setEmail] = useState('');
    const login = useStore((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(email);
        navigate('/account');
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
                        <h1 className="text-4xl md:text-5xl font-serif font-black italic text-white tracking-tighter mb-4">Join Ritual</h1>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">ESTABLISH YOUR COORDINATE</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-4">
                            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 ml-6">Full Identity</label>
                            <div className="relative group">
                                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/15 group-focus-within:text-white transition-colors" />
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-[28px] pl-16 pr-8 py-6 text-white text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-white/5 italic font-medium"
                                    placeholder="Enter full name"
                                />
                            </div>
                        </div>

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

                        <div className="space-y-4">
                            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 ml-6">Secret Key</label>
                            <div className="relative group">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/15 group-focus-within:text-white transition-colors" />
                                <input
                                    type="password"
                                    required
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-[28px] pl-16 pr-8 py-6 text-white text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-white/5 italic font-medium"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 ml-6 mb-4">
                            <input type="checkbox" required className="w-5 h-5 rounded-lg bg-white/5 border-white/10 text-wellness-main focus:ring-0" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">I accept the <a href="#" className="text-white hover:underline underline-offset-4">Terms of Resonance</a></span>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black py-6 rounded-[28px] font-black uppercase tracking-[0.4em] text-[10px] hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-4 group shadow-xl"
                        >
                            Initiate Account <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-16 text-center">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                            Returning Ritual? <Link to="/login" className="text-white hover:underline underline-offset-8">Confirm Identity</Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
