import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState<any>(null);

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({
            id: orderId,
            status: 'shipping',
            steps: [
                { label: 'Order Allocation', date: 'Jan 25', completed: true, icon: Clock },
                { label: 'Molecular Synthesis', date: 'Jan 26', completed: true, icon: Package },
                { label: 'Logistics Transit', date: 'Jan 27', completed: true, icon: Truck },
                { label: 'Ritual Completion', date: 'Expected Jan 28', completed: false, icon: CheckCircle },
            ]
        });
    };

    return (
        <div className="min-h-screen pt-48 pb-40 bg-[#fafaf9] text-stone-900 overflow-hidden relative">
            {/* Atmospheric Backgrounds */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40">
                <div className="absolute top-0 right-0 w-[80vw] h-[80vw] blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2 bg-[#7FB844]/5" />
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 bg-[#B08D55]/5" />
            </div>

            <div className="container mx-auto px-6 max-w-2xl relative z-10">
                <div className="text-center mb-20">
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-stone-400 block mb-6">Logistics</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6">Track Your <i className="text-[#7FB844] font-serif">Ritual</i></h1>
                    <p className="text-sm text-stone-500 max-w-sm mx-auto font-light leading-relaxed text-center italic">Observe the molecular journey of your curated selections from our origin to your doorstep.</p>
                </div>

                <div className="bg-white p-8 md:p-10 rounded-[40px] border border-stone-200/60 shadow-xl mb-12 backdrop-blur-3xl relative z-20">
                    <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative group">
                            <input
                                type="text"
                                placeholder="Order Identifier (e.g. TRU-8821)"
                                className="w-full px-8 py-5 bg-stone-50 border border-stone-200 rounded-full text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#7FB844]/50 transition-all duration-500 text-sm font-light"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="bg-[#7FB844] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-stone-900 transition-all duration-500 flex items-center justify-center gap-3 shrink-0 shadow-lg shadow-[#7FB844]/20">
                            <Search className="w-4 h-4" /> Commencing Search
                        </button>
                    </form>
                </div>

                <AnimatePresence mode="wait">
                    {status && (
                        <motion.div
                            key="status-results"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white p-10 md:p-12 rounded-[48px] border border-stone-200/60 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                                <Package className="w-40 h-40 text-[#7FB844]" />
                            </div>

                            <div className="border-b border-stone-100 pb-10 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                                <div>
                                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-400 mb-2">Order Allocation</div>
                                    <div className="font-serif italic text-2xl text-stone-900">#{status.id}</div>
                                </div>
                                <div className="px-6 py-2 bg-[#7FB844]/10 border border-[#7FB844]/20 text-[#7FB844] rounded-full text-[9px] font-black uppercase tracking-[0.2em] animate-pulse">
                                    In Transit • Molecular Processing
                                </div>
                            </div>

                            <div className="space-y-12 relative z-10">
                                <div className="absolute left-7 top-6 bottom-6 w-px bg-stone-100 z-0" />
                                {status.steps.map((step: any, index: number) => {
                                    const isActive = step.completed && (index === status.steps.filter((s: any) => s.completed).length - 1);

                                    return (
                                        <div key={index} className="relative z-10 flex gap-10">
                                            <div className={clsx(
                                                "w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-700 shrink-0",
                                                step.completed
                                                    ? "bg-[#7FB844] border-[#7FB844] text-white shadow-lg shadow-[#7FB844]/20"
                                                    : "bg-white border-stone-200 text-stone-300"
                                            )}>
                                                <step.icon className="w-5 h-5" />
                                            </div>
                                            <div className="pt-2">
                                                <div className={clsx(
                                                    "font-bold text-sm tracking-widest uppercase transition-colors duration-700",
                                                    step.completed ? "text-stone-900" : "text-stone-300"
                                                )}>
                                                    {step.label}
                                                </div>
                                                <div className="text-[10px] font-black uppercase tracking-widest text-stone-400 mt-1 italic">
                                                    {step.date}
                                                </div>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="mt-2 text-[10px] text-[#7FB844] font-black tracking-widest uppercase flex items-center gap-2"
                                                    >
                                                        <div className="w-1 h-1 rounded-full bg-[#7FB844] animate-ping" />
                                                        Active Stage
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TrackOrder;
