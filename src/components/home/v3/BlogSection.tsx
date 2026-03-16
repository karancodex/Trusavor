import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: "The Molecular Science of Shilajit",
        category: "Biological",
        date: "March 12, 2026",
        image: "/website/shilajit/1.png",
        slug: "science-of-shilajit"
    },
    {
        id: 2,
        title: "Mindful Matcha: A Ritual for the Modern Mind",
        category: "Rituals",
        date: "March 08, 2026",
        image: "/website/matcha imperial/1.png",
        slug: "mindful-matcha"
    },
    {
        id: 3,
        title: "Botanical Extracts in Personal Care",
        category: "Aesthetics",
        date: "March 05, 2026",
        image: "/website/argan oil/1.png",
        slug: "botanical-extracts"
    }
];

const BlogSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#fafaf9] border-t border-stone-200/60">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 block mb-4">The Journal</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
                            Latest <span className="italic text-stone-600">Insights</span>
                        </h2>
                    </div>
                    <Link to="/journal" className="text-xs font-black uppercase tracking-widest text-stone-900 border-b border-stone-900/20 pb-1 hover:border-stone-900 transition-all">
                        View Journal
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-6 bg-stone-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-[#1A4D2E] border border-[#7FB844]/20">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-3">{post.date}</span>
                            <h3 className="text-2xl font-serif text-stone-900 leading-snug group-hover:text-[#7FB844] transition-colors mb-4 pr-10 relative">
                                {post.title}
                                <ArrowUpRight className="absolute top-1 right-0 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#7FB844]" />
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
