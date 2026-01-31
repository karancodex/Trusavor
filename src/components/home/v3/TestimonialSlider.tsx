import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            text: "I didn’t realize how much my skin needed this until I tried the Luminous Serum. It’s not just hydration; it’s a complete texture transformation. Truly ethereal.",
            author: "Elena R.",
            role: "Aesthetician",
            rating: 5,
            image: "/assets/cosmetics_hero.png" // Placeholder
        },
        {
            id: 2,
            text: "The Himalayan Shilajit has replaced my morning coffee. The clarity and sustained energy are unlike anything else. It feels like pure biological fuel.",
            author: "Marcus T.",
            role: "Performance Coach",
            rating: 5,
            image: "/assets/wellness_hero.png" // Placeholder
        },
        {
            id: 3,
            text: "Finally, a brand that understands the balance between science and nature. The packaging is stunning, but the results are even better.",
            author: "Sophia L.",
            role: "Wellness Editor",
            rating: 5,
            image: "/assets/cosmetics_hero.png" // Placeholder
        }
    ];

    const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-16 bg-[#fafaf9] overflow-hidden">
            <div className="container mx-auto px-6 relative">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-stone-400 mb-4">Consensus</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Voice of the <i className="text-stone-400">Collective</i></h2>
                </div>

                <div className="relative max-w-5xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="flex flex-col md:flex-row items-center gap-12"
                        >
                            {/* Visual Side */}
                            <div className="w-full md:w-1/3 relative">
                                <div className="aspect-[3/4] rounded-t-full rounded-b-[100px] overflow-hidden relative shadow-2xl border-4 border-white">
                                    <img
                                        src={testimonials[activeIndex].image}
                                        alt={testimonials[activeIndex].author}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-stone-900/10" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg text-stone-900">
                                    <Quote className="w-8 h-8 fill-current opacity-20" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-2/3 text-center md:text-left">
                                <div className="flex justify-center md:justify-start gap-1 mb-6">
                                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-stone-900 text-stone-900" />
                                    ))}
                                </div>
                                <h3 className="text-2xl md:text-4xl font-serif leading-tight text-stone-800 mb-8 italic">
                                    "{testimonials[activeIndex].text}"
                                </h3>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest text-stone-900">{testimonials[activeIndex].author}</h4>
                                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">{testimonials[activeIndex].role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute bottom-0 right-0 md:translate-y-1/2 flex gap-4 mt-8 md:mt-0 justify-center w-full md:w-auto">
                        <button onClick={prev} className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={next} className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
