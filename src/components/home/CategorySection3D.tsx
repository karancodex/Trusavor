import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ProductCard3D from './ProductCard3D';
import { Eye, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface CategorySection3DProps {
    title: string;
    subtitle: string;
    theme: 'wellness' | 'cosmetics';
    products: any[];
}

const CategorySection3D = ({ title, subtitle, theme, products }: CategorySection3DProps) => {
    const isWellness = theme === 'wellness';
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const springConfig = { stiffness: 60, damping: 20 };
    const titleY = useSpring(useTransform(scrollYProgress, [0, 0.4], [100, 0]), springConfig);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen py-32 lg:py-60 overflow-hidden"
        >
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    style={{
                        scale: useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]), springConfig),
                        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.2])
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className={clsx(
                        "w-[80vw] h-[80vw] blur-[250px] rounded-full",
                        isWellness ? "bg-wellness-main" : "bg-cosmetics-main"
                    )} />
                </motion.div>

                {/* Floating Category Text */}
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [200, -200]) }}
                    className="absolute right-[-10%] top-1/4 opacity-[0.03] select-none"
                >
                    <span className="text-[30vw] font-serif font-black italic text-white whitespace-nowrap">
                        {isWellness ? "Organic" : "Radiance"}
                    </span>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-32 lg:mb-56 gap-16">
                    <div className="max-w-4xl">
                        <motion.div
                            style={{ opacity: titleOpacity, y: titleY }}
                            className={clsx(
                                "flex items-center gap-6 mb-8",
                                isWellness ? "text-wellness-accent" : "text-cosmetics-accent"
                            )}
                        >
                            <div className="h-px w-16 bg-white/20" />
                            <span className="font-black tracking-[0.6em] uppercase text-[10px]">
                                {isWellness ? "BIOLOGICAL ORIGINS" : "THE RADIANCE EDIT"}
                            </span>
                        </motion.div>

                        <motion.h2
                            style={{ opacity: titleOpacity, y: titleY }}
                            className="text-6xl md:text-[8rem] font-serif font-black text-white leading-[0.9] tracking-tighter"
                        >
                            {title}
                        </motion.h2>
                    </div>

                    <motion.div
                        style={{ opacity: titleOpacity }}
                        className="flex flex-col gap-10 max-w-sm"
                    >
                        <p className="text-xl text-white/40 font-medium leading-relaxed italic">
                            {subtitle}
                        </p>
                        <Link
                            to={isWellness ? "/wellness" : "/cosmetics"}
                            className="group relative inline-flex items-center gap-4 text-white"
                        >
                            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:bg-white group-hover:text-black">
                                <MoveRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors">Explore All</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Staggered Modern Product Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32 items-start">
                    {products.map((product, idx) => (
                        <ProductCard3D
                            key={product.id}
                            product={product}
                            index={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection3D;
