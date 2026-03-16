import React, { useState } from 'react';
import { useStore } from '../context/store';
import { useNavigate } from 'react-router-dom';
import { LogOut, Package, MapPin, User, Settings, ShieldCheck, ChevronRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Account = () => {
    const user = useStore((state) => state.user);
    const logout = useStore((state) => state.logout);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses' | 'settings'>('profile');

    const menuItems = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'orders', label: 'Orders', icon: Package },
        { id: 'addresses', label: 'Addresses', icon: MapPin },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-premium-text-muted ml-4">Full Identity</label>
                                <div className="bg-white border border-stone-200 rounded-3xl px-8 py-6 text-premium-text-primary font-serif italic text-lg shadow-sm">
                                    {user?.name || 'Demo User'}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-premium-text-muted ml-4">Email Coordinates</label>
                                <div className="bg-white border border-stone-200 rounded-3xl px-8 py-6 text-premium-text-primary font-serif italic text-lg shadow-sm">
                                    {user?.email || 'demo@trusavor.com'}
                                </div>
                            </div>
                        </div>
                        <div className="pt-12 border-t border-stone-200">
                            <h3 className="text-xl font-serif font-black italic text-premium-text-primary mb-8">Verification Status</h3>
                            <div className="flex items-center gap-6 p-8 bg-wellness-main/5 border border-wellness-main/10 rounded-[32px]">
                                <div className="w-16 h-16 rounded-2xl bg-wellness-main flex items-center justify-center text-white">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <div>
                                    <div className="text-sm font-black uppercase tracking-widest text-premium-text-primary mb-1">Authentic Member</div>
                                    <div className="text-xs text-premium-text-secondary italic font-medium">Your ritual account is fully verified.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'orders':
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="group bg-white border border-stone-200 rounded-[32px] p-8 transition-all hover:shadow-lg hover:border-premium-gold/30 flex flex-col md:flex-row justify-between items-center gap-8">
                                <div className="flex items-center gap-8">
                                    <div className="w-20 h-20 rounded-2xl bg-stone-50 flex items-center justify-center text-premium-text-muted group-hover:text-premium-text-primary transition-colors border border-stone-100">
                                        <ShoppingBag className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-serif font-black italic text-premium-text-primary mb-2 tracking-tight">Order #TRU-2026-88{i}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-premium-text-muted">PLACED ON JAN {20 - i}, 2026</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-premium-text-primary tracking-widest mb-1">$145.00</div>
                                        <div className="text-[9px] font-black uppercase tracking-widest text-wellness-accent">MANIFESTED</div>
                                    </div>
                                    <button className="p-4 rounded-full border border-stone-200 text-premium-text-muted hover:text-white hover:bg-premium-text-primary hover:border-premium-text-primary transition-all">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                );
            case 'addresses':
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border border-stone-200 rounded-[32px] p-10 relative overflow-hidden group shadow-sm hover:shadow-lg transition-all">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <MapPin className="w-12 h-12 text-black" />
                            </div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-premium-text-muted mb-8">PRIMARY RESIDENCE</h4>
                            <div className="font-serif italic text-2xl text-premium-text-primary mb-8 leading-relaxed">
                                742 Ritual Way,<br />
                                High Himalayas, 10293
                            </div>
                            <button className="text-[10px] font-black uppercase tracking-widest text-premium-text-secondary hover:text-premium-text-primary transition-colors underline underline-offset-8">Update Coordinates</button>
                        </div>
                        <button className="border border-dashed border-stone-200 rounded-[32px] p-10 flex flex-col items-center justify-center gap-6 text-premium-text-muted hover:text-premium-text-primary hover:border-premium-text-primary/30 transition-all bg-stone-50/50 hover:bg-white">
                            <div className="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center">
                                <LogOut className="w-6 h-6 rotate-90" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">New Coordinate</span>
                        </button>
                    </motion.div>
                );
            case 'settings':
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                        <div className="space-y-8">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-premium-text-muted">Preferences</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Ritual Reminders', desc: 'Receive notifications about your daily wellness cycle.' },
                                    { label: 'Exclusive Manifestations', desc: 'Be the first to know about rare molecular releases.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-8 bg-white border border-stone-200 rounded-[24px] shadow-sm">
                                        <div>
                                            <div className="text-premium-text-primary font-bold text-sm mb-1">{item.label}</div>
                                            <div className="text-premium-text-secondary text-xs font-medium">{item.desc}</div>
                                        </div>
                                        <div className="w-14 h-8 bg-wellness-main rounded-full flex items-center p-1 cursor-pointer">
                                            <div className="w-6 h-6 bg-white rounded-full translate-x-6 shadow-lg transition-transform" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen pt-44 pb-32 bg-premium-light relative overflow-hidden">
            {/* Cinematic Backgrounds */}
            <div className="fixed inset-0 pointer-events-none opacity-30 overflow-hidden">
                <div className="absolute top-0 right-0 w-[80vw] h-[80vw] blur-[250px] rounded-full -translate-y-1/2 translate-x-1/2 bg-wellness-main/5" />
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] blur-[200px] rounded-full translate-y-1/2 -translate-x-1/2 bg-cosmetics-main/5" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left: Premium Sidebar Navigation */}
                    <div className="w-full lg:w-80 flex flex-col gap-12">
                        <div className="flex flex-col items-center lg:items-start">
                            <div className="relative mb-8 group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-wellness-main/20 via-transparent to-cosmetics-main/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="w-32 h-32 rounded-[40px] bg-white border border-stone-100 flex items-center justify-center text-4xl font-serif font-black italic text-premium-text-primary shadow-xl relative z-10">
                                    {user?.name?.[0] || 'D'}
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-wellness-main flex items-center justify-center text-white border-4 border-premium-light z-20">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                            </div>
                            <h1 className="text-4xl font-serif font-black italic text-premium-text-primary tracking-tighter mb-2">{user?.name || 'Demo User'}</h1>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-premium-text-muted">LIFETIME INITIATE</p>
                        </div>

                        <nav className="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id as any)}
                                    className={clsx(
                                        "w-full flex items-center justify-between px-8 py-6 rounded-[24px] transition-all duration-500 group",
                                        activeTab === item.id
                                            ? "bg-white text-premium-text-primary shadow-xl scale-[1.02]"
                                            : "text-premium-text-secondary hover:text-black hover:bg-white/50"
                                    )}
                                >
                                    <div className="flex items-center gap-6">
                                        <item.icon className={clsx("w-5 h-5", activeTab === item.id ? "text-premium-text-primary" : "text-premium-text-muted group-hover:text-black")} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</span>
                                    </div>
                                    {activeTab === item.id && <ChevronRight className="w-4 h-4" />}
                                </button>
                            ))}
                            <div className="h-px bg-stone-200 my-6" />
                            <button
                                onClick={() => { logout(); navigate('/login'); }}
                                className="w-full flex items-center gap-6 px-8 py-6 rounded-[24px] text-red-500/60 hover:text-red-600 hover:bg-red-50 transition-all group"
                            >
                                <LogOut className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">End Ritual</span>
                            </button>
                        </nav>
                    </div>

                    {/* Right: Cinematic Content Area */}
                    <div className="flex-1">
                        <div className="bg-white/40 backdrop-blur-3xl rounded-[60px] border border-stone-200 p-12 lg:p-20 relative overflow-hidden shadow-2xl">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white to-transparent pointer-events-none" />

                            <div className="relative z-10">
                                <div className="mb-16">
                                    <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-premium-text-muted mb-6">Archive Section</h2>
                                    <h3 className="text-5xl md:text-6xl font-serif font-black italic text-premium-text-primary tracking-tighter">
                                        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                                    </h3>
                                </div>

                                <AnimatePresence mode="wait">
                                    {renderContent()}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
