import React from 'react';
import { motion } from 'framer-motion';

const MarqueeSection: React.FC = () => {
    const text = "PURE MOLECULAR SCIENCE • ETHEREAL AESTHETICS • BIOLOGICAL HARMONY • ";

    return (
        <div className="bg-stone-900 text-[#E8DFCA] py-6 overflow-hidden border-y border-[#E8DFCA]/20">
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-4 font-black uppercase tracking-widest text-xs md:text-sm items-center"
                >
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="flex items-center gap-4">
                            {text}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-4 font-black uppercase tracking-widest text-xs md:text-sm items-center"
                >
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="flex items-center gap-4">
                            {text}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MarqueeSection;
