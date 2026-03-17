import React, { useState } from 'react';
import { useStore } from '../context/store';
import { useNavigate } from 'react-router-dom';
import { LogOut, Package, MapPin, User, Settings, ShieldCheck, ChevronRight, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Account = () => {
    const user = useStore((state) => state.user);
    const logout = useStore((state) => state.logout);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses' | 'settings'>('profile');
    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    const menuItems = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'orders', label: 'Orders', icon: Package },
        { id: 'addresses', label: 'Addresses', icon: MapPin },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    const ordersData = [
        {
            id: 'TRU-2026-881',
            date: 'JAN 20, 2026',
            total: 145.00,
            status: 'MANIFESTED',
            items: [
                { name: 'Ceremonial Matcha Tin', qty: 2, price: 45.00, image: '/website/matcha imperial/1.png' },
                { name: 'Himalayan Shilajit Resin', qty: 1, price: 55.00, image: '/website/shilajit/1.png' }
            ],
            shipping: '742 Ritual Way, High Himalayas, 10293',
            timeline: [
                { status: 'Order Placed', date: 'Jan 20, 10:24 AM', completed: true },
                { status: 'Molecular Processing', date: 'Jan 20, 02:15 PM', completed: true },
                { status: 'Manifested (Shipped)', date: 'Jan 21, 09:00 AM', completed: true },
                { status: 'Ritual Delivered', date: 'Jan 23, 04:30 PM', completed: false }
            ]
        },
        {
            id: 'TRU-2026-882',
            date: 'JAN 18, 2026',
            total: 89.00,
            status: 'COMPLETED',
            items: [
                { name: 'Moringa Superfood Powder', qty: 1, price: 34.00, image: '/website/moringa/1.png' },
                { name: 'Argan Oil Essence', qty: 1, price: 55.00, image: '/website/argan oil/1.png' }
            ],
            shipping: '742 Ritual Way, High Himalayas, 10293',
            timeline: [
                { status: 'Order Placed', date: 'Jan 18, 11:00 AM', completed: true },
                { status: 'Delivered', date: 'Jan 21, 02:00 PM', completed: true }
            ]
        }
    ];

    const renderOrderDetails = (order: any) => (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
            <button
                onClick={() => setSelectedOrder(null)}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#7FB844] hover:text-stone-900 transition-colors mb-8"
            >
                <ArrowLeft className="w-4 h-4" /> Back to History
            </button>

            <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-stone-100 pb-12">
                <div>
                    <h4 className="text-4xl font-serif font-black italic text-stone-900 mb-2">{order.id}</h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">Biological Coordinate Log • {order.date}</p>
                </div>
                <div className="bg-stone-50 px-8 py-4 rounded-[24px] border border-stone-100">
                    <span className="block text-[9px] font-black text-stone-400 uppercase tracking-widest mb-1">Total Manifestation</span>
                    <span className="text-2xl font-black text-stone-900 tracking-tighter">${order.total.toFixed(2)}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Elemental Breakdown</h5>
                    <div className="space-y-4">
                        {order.items.map((item: any, idx: number) => (
                            <div key={idx} className="flex gap-6 p-6 bg-white border border-stone-100 rounded-[32px] hover:shadow-md transition-shadow">
                                <div className="w-24 h-24 bg-stone-50 rounded-2xl overflow-hidden flex-shrink-0 border border-stone-100">
                                    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <h6 className="text-lg font-serif italic font-black text-stone-900 mb-1">{item.name}</h6>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Qty: {item.qty}</span>
                                        <span className="text-base font-black text-[#7FB844] tracking-tight">${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="space-y-6">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Order Timeline</h5>
                        <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-stone-100">
                            {order.timeline.map((step: any, idx: number) => (
                                <div key={idx} className="flex gap-6 relative z-10">
                                    <div className={clsx(
                                        "w-6 h-6 rounded-full border-4 border-white shadow-sm flex-shrink-0",
                                        step.completed ? "bg-[#7FB844]" : "bg-stone-200"
                                    )} />
                                    <div>
                                        <div className={clsx("text-xs font-black uppercase tracking-widest mb-1", step.completed ? "text-stone-900" : "text-stone-400")}>
                                            {step.status}
                                        </div>
                                        <div className="text-[10px] font-bold text-stone-400">{step.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 bg-stone-50 rounded-[32px] border border-stone-100 space-y-4">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Shipping Coordinate</h5>
                        <p className="text-sm font-serif italic text-stone-600 leading-relaxed">
                            {order.shipping}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );

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
                if (selectedOrder) return renderOrderDetails(selectedOrder);
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                        {ordersData.map((order, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedOrder(order)}
                                className="w-full text-left group bg-white border border-stone-200 rounded-[32px] p-8 transition-all hover:shadow-lg hover:border-[#7FB844]/30 flex flex-col md:flex-row justify-between items-center gap-8"
                            >
                                <div className="flex items-center gap-8">
                                    <div className="w-20 h-20 rounded-2xl bg-stone-50 flex items-center justify-center text-premium-text-muted group-hover:text-[#7FB844] transition-colors border border-stone-100">
                                        <ShoppingBag className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="text-xl font-serif font-black italic text-premium-text-primary mb-2 tracking-tight group-hover:text-[#7FB844] transition-colors">Order #{order.id}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-stone-400">PLACED ON {order.date}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-premium-text-primary tracking-widest mb-1 group-hover:text-[#7FB844] transition-colors">${order.total.toFixed(2)}</div>
                                        <div className="text-[9px] font-black uppercase tracking-widest text-[#7FB844]">{order.status}</div>
                                    </div>
                                    <div className="p-4 rounded-full border border-stone-200 text-premium-text-muted group-hover:text-white group-hover:bg-[#7FB844] group-hover:border-[#7FB844] transition-all">
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </button>
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
