import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/store';
import { Trash2, Plus, Minus, ArrowRight, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Cart = () => {
    const cart = useStore((state) => state.cart);
    const updateCartQuantity = useStore((state) => state.updateCartQuantity);
    const removeFromCart = useStore((state) => state.removeFromCart);
    const navigate = useNavigate();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 50 ? 0 : 10;
    const total = subtotal + shipping;

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-48 px-6 bg-[#0a0a0a] text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-wellness-main/5 blur-[150px] rounded-full" />
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10">
                    <ShoppingCart className="w-16 h-16 text-white/5 mx-auto mb-8" />
                    <h1 className="text-4xl md:text-5xl font-serif font-black text-white italic mb-6 tracking-tighter">Cart is Vacant</h1>
                    <p className="text-white/20 text-lg font-light italic mb-12">The vessel of your transformation awaits its essence.</p>
                    <Link to="/" className="inline-flex items-center gap-4 px-10 py-4 bg-white text-black rounded-full font-black uppercase text-[9px] tracking-widest hover:scale-105 transition-all shadow-xl">
                        Explore Collections <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-40 pb-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cosmetics-main/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-6xl md:text-7xl font-serif font-black text-white italic mb-20 tracking-tighter"
                >
                    Shopping Cart
                </motion.h1>

                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-1 space-y-8">
                        <AnimatePresence mode='popLayout'>
                            {cart.map((item) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    key={item.id}
                                    className="group relative bg-white/[0.03] backdrop-blur-3xl rounded-[32px] p-6 border border-white/5 flex flex-col sm:flex-row items-center gap-8 hover:bg-white/[0.05] transition-all duration-500"
                                >
                                    <div className="w-24 h-24 bg-white/5 rounded-2xl overflow-hidden flex-shrink-0 p-3 border border-white/5">
                                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-contain drop-shadow-xl" />
                                    </div>

                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="text-lg font-serif font-black text-white mb-1 italic tracking-tight">{item.name}</h3>
                                        <span className="text-white/20 font-black uppercase text-[8px] tracking-[0.2em]">Ritual: ${item.price}</span>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center bg-black/40 rounded-xl px-3 py-2 border border-white/5">
                                            <button onClick={() => updateCartQuantity(item.id, Math.max(1, item.quantity - 1))} className="p-1.5 text-white/30 hover:text-white transition-colors"><Minus className="w-4 h-4" /></button>
                                            <span className="w-8 text-center text-base font-black text-white">{item.quantity}</span>
                                            <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="p-1.5 text-white/30 hover:text-white transition-colors"><Plus className="w-4 h-4" /></button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/20 hover:text-red-500 transition-all duration-500">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="text-2xl font-black text-white tracking-widest min-w-[100px] text-right">
                                        ${(item.price * item.quantity).toFixed(0)}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="w-full lg:w-[350px]">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/[0.03] backdrop-blur-3xl rounded-[40px] p-10 border border-white/5 sticky top-32 shadow-2xl"
                        >
                            <h2 className="text-xl font-serif font-black text-white mb-8 italic tracking-tight">Order Insight</h2>

                            <div className="space-y-4 mb-10">
                                <div className="flex justify-between text-white/30 text-[9px] font-black uppercase tracking-widest">
                                    <span>Subtotal</span>
                                    <span className="text-white">${subtotal.toFixed(0)}</span>
                                </div>
                                <div className="flex justify-between text-white/30 text-[9px] font-black uppercase tracking-widest">
                                    <span>Delivery Flow</span>
                                    <span className="text-white">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                                </div>
                                <div className="h-[1px] bg-white/5 my-6" />
                                <div className="flex justify-between items-end">
                                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20 mb-1.5">Total Resonance</span>
                                    <span className="text-4xl font-black text-white tracking-tighter">${total.toFixed(0)}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate('/checkout')}
                                className="w-full bg-white text-black py-5 rounded-[24px] font-black uppercase text-[9px] tracking-[0.4em] transition-all hover:scale-[1.02] shadow-xl flex items-center justify-center gap-4 group"
                            >
                                Checkout <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
