import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../context/store';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Heart, ShoppingBag, Star, ShieldCheck, Leaf, Truck, Sparkles } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import clsx from 'clsx';

const Product3D = ({ color = "#1E3124" }: { color?: string }) => {
    return (
        <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} />
            <pointLight position={[-10, -10, -10]} intensity={1} color={color} />
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <group>
                    <mesh castShadow>
                        <cylinderGeometry args={[0.8, 0.8, 2, 64]} />
                        <meshStandardMaterial color={color} roughness={0.05} metalness={0.4} />
                    </mesh>
                    <mesh position={[0, 1.1, 0]} castShadow>
                        <cylinderGeometry args={[0.85, 0.85, 0.3, 64]} />
                        <meshStandardMaterial color="#111" roughness={0.1} metalness={0.9} />
                    </mesh>
                    <mesh position={[0, 0, 0.81]}>
                        <planeGeometry args={[1, 0.6]} />
                        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.2} transparent opacity={0.8} />
                    </mesh>
                </group>
            </Float>
            <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={10} blur={3} far={4} color={color} />
            <Environment preset="studio" />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

const ProductDetails = () => {
    const { slug } = useParams();
    const product = useStore((state) => state.products.find(p => p.slug === slug));
    const addToCart = useStore((state) => state.addToCart);
    const toggleWishlist = useStore((state) => state.toggleWishlist);
    const wishlist = useStore((state) => state.wishlist);

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [view3D, setView3D] = useState(false);

    if (!product) return <div className="pt-60 text-center font-serif text-2xl text-white">Ritual Not Found</div>;

    const isWishlisted = wishlist.includes(product.id);
    const isWellness = product.categoryId === 'cat_wellness';

    return (
        <div className="pt-32 pb-40 min-h-screen bg-[#050505]">
            {/* Atmospheric Backgrounds */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className={clsx("absolute top-0 right-0 w-[100vw] h-[100vw] blur-[250px] rounded-full -translate-y-1/2 translate-x-1/2", isWellness ? "bg-wellness-main/20" : "bg-cosmetics-main/20")} />
                <div className={clsx("absolute bottom-0 left-0 w-[80vw] h-[80vw] blur-[200px] rounded-full translate-y-1/2 -translate-x-1/2", isWellness ? "bg-wellness-accent/10" : "bg-cosmetics-accent/10")} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/30 mb-12">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <span className="text-white/10">/</span>
                    <Link to={isWellness ? "/wellness" : "/cosmetics"} className="hover:text-white transition-colors">
                        {isWellness ? "Wellness" : "Cosmetics"}
                    </Link>
                    <span className="text-white/10">/</span>
                    <span className="text-wellness-accent">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
                    {/* Left: Immersive Visuals - Balanced size */}
                    <div className="lg:col-span-7 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative aspect-square bg-white/[0.02] backdrop-blur-3xl rounded-[48px] border border-white/5 overflow-hidden shadow-2xl"
                        >
                            <AnimatePresence mode='wait'>
                                {view3D ? (
                                    <motion.div
                                        key="3d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="w-full h-full cursor-grab active:cursor-grabbing"
                                    >
                                        <Product3D color={isWellness ? '#1E3124' : '#4A1D1F'} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="img" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full p-12 md:p-20">
                                        <img src={product.images[0]} className="w-full h-full object-contain drop-shadow-2xl" alt={product.name} />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex bg-black/40 backdrop-blur-xl p-1.5 rounded-[24px] border border-white/5 gap-1.5">
                                <button
                                    onClick={() => setView3D(false)}
                                    className={clsx(
                                        "px-8 py-3 rounded-[18px] font-black text-[8px] uppercase tracking-widest transition-all",
                                        !view3D ? "bg-white text-black shadow-lg" : "text-white/30 hover:text-white"
                                    )}
                                >
                                    Image
                                </button>
                                <button
                                    onClick={() => setView3D(true)}
                                    className={clsx(
                                        "px-8 py-3 rounded-[18px] font-black text-[8px] uppercase tracking-widest transition-all",
                                        view3D ? "bg-white text-black shadow-lg" : "text-white/30 hover:text-white"
                                    )}
                                >
                                    360° Interaction
                                </button>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-4 gap-6">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="aspect-square bg-white/[0.03] rounded-2xl overflow-hidden border border-white/5 p-3 group">
                                    <img src={product.images[0]} className="w-full h-full object-contain opacity-25 group-hover:opacity-100 transition-all duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Intellectual Content - Balanced text sizes */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="flex items-center gap-6 mb-10">
                                <div className={clsx(
                                    "flex items-center gap-3 px-5 py-2 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border",
                                    isWellness ? "bg-wellness-accent/10 border-wellness-accent/20 text-wellness-accent" : "bg-cosmetics-accent/10 border-cosmetics-accent/20 text-cosmetics-accent"
                                )}>
                                    {isWellness ? <Leaf className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                                    Authentic Origins
                                </div>
                                <div className="flex items-center gap-1.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={clsx("w-3 h-3", i < Math.floor(product.rating) ? (isWellness ? 'fill-wellness-accent text-wellness-accent' : 'fill-cosmetics-gold text-cosmetics-gold') : 'text-white/5')} />
                                    ))}
                                    <span className="text-[8px] font-black text-white/15 ml-3 uppercase tracking-[0.2em]">{product.reviews} VERIFICATIONS</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-serif font-black text-white italic leading-[1.1] tracking-tighter mb-12">
                                {product.name}
                            </h1>

                            <div className="flex items-end gap-6 mb-12">
                                <span className="text-4xl font-black text-white tracking-widest leading-none">${product.price}</span>
                                {product.oldPrice && <span className="text-xl text-white/10 line-through font-light leading-none mb-1">${product.oldPrice}</span>}
                            </div>

                            <p className="text-white/40 text-base md:text-lg font-light italic leading-relaxed mb-16 max-w-lg border-l border-white/10 pl-8">
                                {product.description}
                            </p>

                            {/* Purchase Ritual - Smaller components */}
                            <div className="space-y-10">
                                <div className="flex items-center gap-10">
                                    <div className="flex-grow flex items-center bg-white/[0.03] border border-white/5 rounded-[24px] px-8 py-6 transition-all hover:bg-white/[0.05]">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-white/30 hover:text-white transition-colors"><Minus className="w-5 h-5" /></button>
                                        <span className="flex-grow text-center font-black text-2xl text-white">{quantity}</span>
                                        <button onClick={() => setQuantity(quantity + 1)} className="text-white/30 hover:text-white transition-colors"><Plus className="w-5 h-5" /></button>
                                    </div>
                                    <button
                                        onClick={() => toggleWishlist(product.id)}
                                        className={clsx(
                                            "w-20 h-20 rounded-[24px] flex items-center justify-center transition-all bg-white/[0.03] border border-white/5 hover:bg-white/[0.05]",
                                            isWishlisted ? "text-red-500" : "text-white/20"
                                        )}
                                    >
                                        <Heart className={clsx("w-7 h-7 transition-transform", isWishlisted && "fill-current scale-110")} />
                                    </button>
                                </div>

                                <button
                                    onClick={() => addToCart(product, quantity)}
                                    className={clsx(
                                        "w-full h-16 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95",
                                        isWellness ? "bg-wellness-accent text-white" : "bg-cosmetics-accent text-white"
                                    )}
                                >
                                    <ShoppingBag className="w-5 h-5" /> Add to Cart
                                </button>
                            </div>

                            <div className="mt-20 grid grid-cols-2 gap-10 pt-16 border-t border-white/5">
                                <div className="flex items-center gap-6 group">
                                    <div className="p-4 rounded-3xl bg-white/[0.03] text-white/20 transition-all border border-white/5 group-hover:bg-white group-hover:text-black">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block font-black uppercase text-white/40 text-[9px] tracking-[0.2em] mb-1">Authenticity</span>
                                        <span className="text-white/15 text-[10px] italic">Verified Pure.</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="p-4 rounded-3xl bg-white/[0.03] text-white/20 transition-all border border-white/5 group-hover:bg-white group-hover:text-black">
                                        <Truck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block font-black uppercase text-white/40 text-[9px] tracking-[0.2em] mb-1">Transit Flow</span>
                                        <span className="text-white/15 text-[10px] italic">Carbon Neutral.</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Intellectual Tabs - Scaled down */}
                <div className="bg-white/[0.02] backdrop-blur-3xl rounded-[60px] p-12 md:p-20 relative overflow-hidden border border-white/5">
                    <div className="flex flex-wrap gap-12 mb-16 border-b border-white/5 pb-8">
                        {['description', 'usage', 'resonance'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={clsx(
                                    "text-xl md:text-2xl font-serif font-black uppercase tracking-tighter transition-all relative pb-6",
                                    activeTab === tab ? "text-white italic" : "text-white/15 hover:text-white/30"
                                )}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div layoutId="tabLineDetail" className={clsx("absolute bottom-0 left-0 w-full h-0.5 rounded-full", isWellness ? "bg-wellness-accent" : "bg-cosmetics-accent")} />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-3xl">
                        <AnimatePresence mode='wait'>
                            {activeTab === 'description' && (
                                <motion.div key="desc" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-xl md:text-2xl italic text-white/30 font-light leading-relaxed">
                                    <p className="mb-10">Meticulously curated to represent the peak of functional purity. This ritual offering bridges the space between ancestral wisdom and contemporary excellence.</p>
                                </motion.div>
                            )}
                            {activeTab === 'usage' && (
                                <motion.div key="usage" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                    {[
                                        { s: "01", t: "Commence", d: "Begin with mindful focus." },
                                        { s: "02", t: "Incorporate", d: "Integrate into daily ritual." },
                                        { s: "03", t: "Transcend", d: "Experience resonance." }
                                    ].map((step, i) => (
                                        <div key={i} className="group">
                                            <span className="text-6xl font-serif font-black text-white/5 block mb-6 italic transition-all group-hover:text-white/15">{step.s}</span>
                                            <h5 className="text-[10px] font-black text-white uppercase mb-3 tracking-[0.2em]">{step.t}</h5>
                                            <p className="text-white/20 italic text-base">{step.d}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                            {activeTab === 'resonance' && (
                                <motion.div key="res" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-center gap-16">
                                    <div className="shrink-0 p-12 bg-white/5 rounded-[40px] border border-white/5 text-center">
                                        <div className="text-7xl font-black text-white mb-3">4.9</div>
                                        <div className="flex gap-1.5 justify-center mb-6">
                                            {[...Array(5)].map((_, i) => <Star key={i} className={clsx("w-4 h-4", isWellness ? "fill-wellness-accent text-wellness-accent" : "fill-cosmetics-gold text-cosmetics-gold")} />)}
                                        </div>
                                        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/15">Consensus</span>
                                    </div>
                                    <p className="text-3xl font-serif italic text-white/40 leading-tight">
                                        "A fundamental shift in perception."
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
