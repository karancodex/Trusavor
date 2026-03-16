import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Instagram } from 'lucide-react';

const reviews = [
    {
        id: 1,
        user: "Sarah K.",
        location: "Dubai, UAE",
        text: "The Shilajit resin has completely transformed my morning ritual. Deeply grounding and pure.",
        video: "/website/video_placeholder_1.mp4", // Mock
        thumbnail: "/website/moringa/1.png"
    },
    {
        id: 2,
        user: "James L.",
        location: "London, UK",
        text: "Never tasted Matcha this vibrant and ceremonial-grade. You can feel the molecular difference.",
        video: "/website/video_placeholder_2.mp4", // Mock
        thumbnail: "/website/matcha ceremonial/trusavor CEM.png"
    },
    {
        id: 3,
        user: "Amira R.",
        location: "Riyadh, SA",
        text: "The personal care line is ethereal. My skin finally feels like it's breathing.",
        video: "/website/video_placeholder_3.mp4", // Mock
        thumbnail: "/website/dummy face serum/1.png"
    }
];

const ReviewsUGC: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 block mb-4">The Collective Experience</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
                            Rituals in <span className="italic text-[#7FB844]">Motion</span>
                        </h2>
                    </div>
                    <p className="text-stone-500 font-medium max-w-sm mb-2">
                        Real stories from our global community of conscious individuals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative aspect-[9/16] rounded-[32px] overflow-hidden bg-stone-100 mb-6 group-cursor-pointer">
                                <img
                                    src={review.thumbnail}
                                    alt={review.user}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-all">
                                        <Play className="w-6 h-6 fill-white" />
                                    </div>
                                </div>
                                <div className="absolute top-6 left-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 flex items-center justify-center">
                                        <Instagram className="w-4 h-4 text-[#7FB844]" />
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50">
                                        <span className="text-[10px] font-black text-[#7FB844] uppercase tracking-widest">{review.user}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#7FB844] text-[#7FB844]" />)}
                                </div>
                                <p className="text-stone-800 font-serif italic text-lg mb-2">"{review.text}"</p>
                                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">{review.location}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsUGC;
