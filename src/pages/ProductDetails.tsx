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
        <div className="pt-48 pb-40 min-h-screen bg-[#050505]">
            {/* Atmospheric Backgrounds */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className={clsx("absolute top-0 right-0 w-[100vw] h-[100vw] blur-[250px] rounded-full -translate-y-1/2 translate-x-1/2", isWellness ? "bg-wellness-main/10" : "bg-cosmetics-main/10")} />
                <div className={clsx("absolute bottom-0 left-0 w-[80vw] h-[80vw] blur-[200px] rounded-full translate-y-1/2 -translate-x-1/2", isWellness ? "bg-wellness-accent/10" : "bg-cosmetics-accent/10")} />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-16">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <span className="text-white/5">/</span>
                    <Link to={isWellness ? "/wellness" : "/cosmetics"} className="hover:text-white transition-colors">
                        {isWellness ? "Wellness" : "Cosmetics"}
                    </Link>
                    <span className="text-white/5">/</span>
                    <span className={clsx("transition-colors", isWellness ? "text-wellness-accent/60" : "text-cosmetics-accent/60")}>{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-40">
                    {/* Left: Immersive Visuals */}
                    <div className="lg:col-span-7 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative aspect-square bg-[#0a0a0a] rounded-[48px] border border-white/5 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                        >
                            <AnimatePresence mode='wait'>
                                {view3D ? (
                                    <motion.div
                                        key="3d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="w-full h-full cursor-grab active:cursor-grabbing"
                                    >
                                        <Product3D color={isWellness ? '#1A4D2E' : '#4A1D1F'} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="img" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full p-16 md:p-24">
                                        <img src={product.images[0]} className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]" alt={product.name} />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex bg-black/40 backdrop-blur-2xl p-1 rounded-full border border-white/10 gap-1">
                                <button
                                    onClick={() => setView3D(false)}
                                    className={clsx(
                                        "px-10 py-3 rounded-full font-black text-[9px] uppercase tracking-widest transition-all",
                                        !view3D ? "bg-white text-black" : "text-white/30 hover:text-white"
                                    )}
                                >
                                    Still
                                </button>
                                <button
                                    onClick={() => setView3D(true)}
                                    className={clsx(
                                        "px-10 py-3 rounded-full font-black text-[9px] uppercase tracking-widest transition-all",
                                        view3D ? "bg-white text-black" : "text-white/30 hover:text-white"
                                    )}
                                >
                                    Interaction
                                </button>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-4 gap-8 px-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="aspect-square bg-white/[0.02] rounded-3xl overflow-hidden border border-white/5 p-4 group cursor-pointer transition-all hover:border-white/20">
                                    <img src={product.images[0]} className="w-full h-full object-contain opacity-30 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Intellectual Content */}
                    <div className="lg:col-span-5 space-y-12 py-4">
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="flex items-center gap-8 mb-10">
                                <div className={clsx(
                                    "px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.4em] border flex items-center gap-3",
                                    isWellness ? "bg-wellness-accent/5 border-wellness-accent/20 text-wellness-accent" : "bg-cosmetics-accent/5 border-cosmetics-accent/20 text-cosmetics-accent"
                                )}>
                                    {isWellness ? <Leaf className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                                    Biological Era
                                </div>
                                <div className="flex items-center gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={clsx("w-3 h-3", i < Math.floor(product.rating) ? (isWellness ? 'fill-wellness-accent text-wellness-accent' : 'fill-cosmetics-accent text-cosmetics-accent') : 'text-white/5')} />
                                    ))}
                                    <span className="text-[9px] font-black text-white/20 ml-4 uppercase tracking-widest leading-none">{product.reviews} VERIFICATIONS</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-serif font-black text-white italic leading-[1.1] tracking-tighter mb-10">
                                {product.name}
                            </h1>

                            <div className="flex items-baseline gap-6 mb-12">
                                <span className="text-3xl font-bold text-white tracking-tight leading-none">${product.price}</span>
                                {product.oldPrice && <span className="text-lg text-white/20 line-through font-light leading-none">${product.oldPrice}</span>}
                            </div>

                            <p className="text-white/40 text-sm md:text-base font-light italic leading-relaxed mb-16 max-w-lg border-l-2 border-white/5 pl-8 py-2">
                                {product.description}
                            </p>

                            <div className="space-y-12">
                                <div className="flex items-center gap-8">
                                    <div className="flex-grow flex items-center bg-white/[0.03] border border-white/5 rounded-3xl p-2 h-20 group transition-all hover:border-white/20">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-16 h-full flex items-center justify-center text-white/30 hover:text-white transition-colors"><Minus className="w-4 h-4" /></button>
                                        <span className="flex-grow text-center font-black text-xl text-white">{quantity}</span>
                                        <button onClick={() => setQuantity(quantity + 1)} className="w-16 h-full flex items-center justify-center text-white/30 hover:text-white transition-colors"><Plus className="w-4 h-4" /></button>
                                    </div>
                                    <button
                                        onClick={() => toggleWishlist(product.id)}
                                        className={clsx(
                                            "w-20 h-20 rounded-3xl flex items-center justify-center transition-all bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] group",
                                            isWishlisted ? "text-red-500" : "text-white/20"
                                        )}
                                    >
                                        <Heart className={clsx("w-6 h-6 transition-all group-hover:scale-110", isWishlisted && "fill-current")} />
                                    </button>
                                </div>

                                <button
                                    onClick={() => addToCart(product, quantity)}
                                    className={clsx(
                                        "w-full h-20 rounded-3xl font-black text-[10px] uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-6 shadow-2xl active:scale-[0.98]",
                                        isWellness ? "bg-wellness-main text-white hover:bg-wellness-accent" : "bg-cosmetics-main text-white hover:bg-cosmetics-accent"
                                    )}
                                >
                                    <ShoppingBag className="w-5 h-5" /> Acquire Ritual
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

                {/* Intellectual Tabs - Refined Scale */}
                <div className="bg-[#0a0a0a] rounded-[48px] p-12 md:p-20 relative overflow-hidden border border-white/5 shadow-2xl">
                    <div className="flex flex-wrap gap-16 mb-16 border-b border-white/5 pb-8">
                        {['description', 'usage', 'resonance'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={clsx(
                                    "text-lg md:text-xl font-serif font-black uppercase tracking-tighter transition-all relative pb-6",
                                    activeTab === tab ? "text-white italic" : "text-white/10 hover:text-white/30"
                                )}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div layoutId="tabLineDetail" className={clsx("absolute bottom-0 left-0 w-full h-0.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]", isWellness ? "bg-wellness-accent" : "bg-cosmetics-accent")} />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-3xl">
                        <AnimatePresence mode='wait'>
                            {activeTab === 'description' && (
                                <motion.div key="desc" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-lg md:text-xl italic text-white/30 font-light leading-relaxed">
                                    <p className="mb-10">Meticulously curated to represent the peak of functional purity. This ritual offering bridges the space between ancestral wisdom and contemporary excellence, engineered for those who seek uncompromising quality.</p>
                                </motion.div>
                            )}
                            {activeTab === 'usage' && (
                                <motion.div key="usage" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-16">
                                    {[
                                        { s: "01", t: "Commence", d: "Begin with mindful focus on the ritual." },
                                        { s: "02", t: "Incorporate", d: "Integrate into your daily biological rhythm." },
                                        { s: "03", t: "Transcend", d: "Experience the lasting molecular resonance." }
                                    ].map((step, i) => (
                                        <div key={i} className="group">
                                            <span className="text-4xl font-serif font-black text-white/5 block mb-6 italic transition-all group-hover:text-wellness-accent/20">{step.s}</span>
                                            <h5 className="text-[9px] font-black text-white/80 uppercase mb-3 tracking-[0.3em]">{step.t}</h5>
                                            <p className="text-white/20 italic text-sm leading-relaxed">{step.d}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                            {activeTab === 'resonance' && (
                                <motion.div key="res" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-center gap-20">
                                    <div className="shrink-0 p-12 bg-white/[0.02] rounded-[40px] border border-white/5 text-center shadow-inner">
                                        <div className="text-6xl font-black text-white mb-3">4.9</div>
                                        <div className="flex gap-1.5 justify-center mb-6">
                                            {[...Array(5)].map((_, i) => <Star key={i} className={clsx("w-3.5 h-3.5", isWellness ? "fill-wellness-accent text-wellness-accent" : "fill-cosmetics-accent text-cosmetics-accent")} />)}
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/10">Biological Consensus</span>
                                    </div>
                                    <p className="text-2xl md:text-3xl font-serif italic text-white/40 leading-tight max-w-xl">
                                        "An essential evolution in self-care. The purity is unmatched in the modern industry."
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
