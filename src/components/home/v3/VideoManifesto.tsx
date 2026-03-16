import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoManifesto: React.FC = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="relative h-[80vh] overflow-hidden flex items-center justify-center bg-stone-900">
            {/* Background Video */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[120%] object-cover opacity-80 mix-blend-overlay"
                >
                    {/* Using a high-quality nature/wellness texture video (Water/Leaf details) */}
                    <source src="https://videos.pexels.com/video-files/5527786/5527786-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>

            {/* Grain Overlay - Reduced opacity for better video visibility */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-stone-900" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-10 group cursor-pointer hover:bg-white hover:text-stone-900 transition-all text-white/80 backdrop-blur-sm">
                        <Play className="w-8 h-8 fill-current" />
                    </div>
                </motion.div>

                <h2 className="text-4xl md:text-7xl font-serif text-[#E8DFCA] mb-8 leading-tight">
                    "We are biological beings <br /> craving <span className="italic text-white">authentic</span> resonance."
                </h2>
                <p className="text-stone-400 text-lg md:text-xl font-light tracking-wide">
                    The Manifesto — 2026
                </p>
            </div>
        </section>
    );
};

export default VideoManifesto;
