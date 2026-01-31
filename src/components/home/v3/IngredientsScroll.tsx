import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IngredientsScroll: React.FC = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Accelerated parallax: Moves much further (-85%) during the scroll window to show more cards quickly
    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-85%"]);

    const ingredients = [
        { name: "Himalayan Shilajit", desc: "Mineral Density", img: "/assets/shilajit_hero.png" },
        { name: "Saffron Extract", desc: "Radiance Boost", img: "/assets/cosmetics_hero.png" },
        { name: "Ashwagandha", desc: "Stress Adept", img: "/assets/wellness_hero.png" },
        { name: "Blue Lotus", desc: "Deep Calm", img: "/assets/cosmetics_hero.png" },
        { name: "Cordyceps", desc: "Energy Flow", img: "/assets/wellness_hero.png" }, // Added
        { name: "Moringa", desc: "Nutrient Rich", img: "/assets/cosmetics_hero.png" }, // Added
        { name: "Reishi", desc: "Immune Shield", img: "/assets/wellness_hero.png" }, // Added
        { name: "Pearl Powder", desc: "Luminous Skin", img: "/assets/cosmetics_hero.png" }, // Added
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-[#fafaf9] overflow-hidden min-h-[80vh] flex flex-col justify-center">
            <div className="container mx-auto px-6 mb-16 text-center">
                <h2 className="text-5xl font-serif text-stone-900 mb-4">Potent <i className="text-stone-500">Origins</i></h2>
                <p className="text-stone-500 max-w-lg mx-auto text-lg">Accelerated evolution through nature's most powerful compounds.</p>
            </div>

            <motion.div style={{ x }} className="flex gap-8 pl-[10vw] w-max">
                {ingredients.map((ing, i) => (
                    <div key={i} className="relative w-[300px] md:w-[350px] aspect-[3/4] rounded-[40px] overflow-hidden group shadow-lg">
                        <img
                            src={ing.img}
                            alt={ing.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-3xl font-serif text-white mb-2 drop-shadow-md leading-none">{ing.name}</h3>
                            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest mt-2">
                                {ing.desc}
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default IngredientsScroll;
