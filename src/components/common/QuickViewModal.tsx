import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Star, ShieldCheck } from 'lucide-react';
import { useCurrency } from '../../hooks/useCurrency';
import { useStore } from '../../context/store';

interface QuickViewModalProps {
    product: any;
    isOpen: boolean;
    onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
    const { formatPrice } = useCurrency();
    const addToCart = useStore(state => state.addToCart);

    if (!product) return null;

    const image = product.images?.[0] || product.thumbnail || '/placeholder.png';
    const name = product.name || product.title || 'Untitled';
    const price = product.price || 0;
    const description = product.description || 'No description available.';

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-stone-900/40 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-stone-100 hover:bg-stone-900 hover:text-white transition-all duration-300"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 bg-[#f4f2ef] p-12 flex items-center justify-center">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                src={image}
                                alt={name}
                                className="w-full h-auto object-contain mix-blend-multiply"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                            <div className="mb-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 block mb-2">
                                    {product.categoryId === 'cat_wellness' ? 'Wellness Series' : 'Personal Care'}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">{name}</h2>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center gap-1 text-sm font-bold text-stone-900">
                                        <Star className="w-4 h-4 fill-stone-900" /> 4.9
                                    </div>
                                    <span className="text-stone-300">/</span>
                                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">120 Reviews</span>
                                </div>
                                <div className="flex items-baseline gap-4 mb-6">
                                    <span className="text-3xl font-black text-stone-950">{formatPrice(price)}</span>
                                    {product.oldPrice && (
                                        <span className="text-lg text-stone-400 line-through font-bold">{formatPrice(product.oldPrice)}</span>
                                    )}
                                </div>
                                <p className="text-stone-500 font-light leading-relaxed italic border-l-2 border-stone-100 pl-6">
                                    {description}
                                </p>
                            </div>

                            <div className="mt-auto space-y-6">
                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-stone-400">
                                    <ShieldCheck className="w-4 h-4" /> Molecularly Tested & Certified
                                </div>
                                <button
                                    onClick={() => {
                                        addToCart(product);
                                        onClose();
                                    }}
                                    className="w-full bg-[#7FB844] text-white py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-stone-900 transition-all flex items-center justify-center gap-4 shadow-lg shadow-[#7FB844]/20"
                                >
                                    <ShoppingBag className="w-4 h-4" /> Add to Ritual
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default QuickViewModal;
