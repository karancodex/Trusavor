import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ["All", "Biological", "Rituals", "Aesthetics", "Community"];

const posts = [
    {
        id: 1,
        title: "The Molecular Science of Shilajit",
        category: "Biological",
        date: "March 12, 2026",
        image: "/website/shilajit/1.png",
        excerpt: "Deep dive into the fulvic acid concentration and mineral profile of high-altitude Himalayan Shilajit.",
        author: "Dr. Elena V.",
        readTime: "8 min read"
    },
    {
        id: 2,
        title: "Mindful Matcha: A Ritual for the Modern Mind",
        category: "Rituals",
        date: "March 08, 2026",
        image: "/website/matcha imperial/1.png",
        excerpt: "How the L-Theanine in ceremonial matcha creates a state of 'calm alertness' for peak productivity.",
        author: "Marcus Aurelius",
        readTime: "5 min read"
    },
    {
        id: 3,
        title: "Botanical Extracts in Personal Care",
        category: "Aesthetics",
        date: "March 05, 2026",
        image: "/website/argan oil/1.png",
        excerpt: "Why cold-pressed botanical oils are superior to synthetic moisturizers in molecular skin penetration.",
        author: "Sofia L.",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "The Future of Functional Wellness",
        category: "Biological",
        date: "Feb 28, 2026",
        image: "/website/moringa/6.png",
        excerpt: "Exploring the next frontier of bio-hacking through ancestral nutrient density.",
        author: "Team Trusavor",
        readTime: "10 min read"
    }
];

const Blog = () => {
    return (
        <div className="pt-48 pb-40 min-h-screen bg-[#fafaf9]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 block mb-6">Editorial Knowledge</span>
                    <h1 className="text-6xl md:text-8xl font-serif text-stone-900 italic mb-8 tracking-tighter">The Journal</h1>
                    <p className="text-stone-500 text-lg font-light max-w-lg mx-auto italic">Exploring the intersection of molecular wisdom and refined living.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 border-b border-stone-200 pb-8">
                    <div className="flex gap-8 overflow-x-auto hide-scrollbar w-full md:w-auto">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap pt-2 pb-1 border-b-2 transition-all ${i === 0 ? "border-stone-900 text-stone-900" : "border-transparent text-stone-400 hover:text-stone-600"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <input
                            type="text"
                            placeholder="Search Journal..."
                            className="w-full bg-white border border-stone-200 rounded-full pl-12 pr-6 py-3 text-xs focus:outline-none focus:border-stone-400"
                        />
                    </div>
                </div>

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 bg-white p-8 md:p-12 rounded-[48px] border border-stone-100 shadow-xl group cursor-pointer"
                >
                    <div className="rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-square">
                        <img src={posts[0].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Featured" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-stone-100 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-stone-900">{posts[0].category}</span>
                            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{posts[0].date}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight mb-6 group-hover:text-stone-600 transition-colors">
                            {posts[0].title}
                        </h2>
                        <p className="text-stone-500 text-lg font-light leading-relaxed mb-10 italic">
                            {posts[0].excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-200" />
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-stone-900">{posts[0].author}</span>
                                    <span className="text-[10px] font-medium text-stone-400 uppercase tracking-widest">{posts[0].readTime}</span>
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {posts.slice(1).map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[16/10] rounded-[24px] overflow-hidden mb-8 bg-stone-100 relative">
                                <img src={post.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={post.title} />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-stone-900 border border-stone-200">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-3">{post.date} • {post.readTime}</span>
                            <h3 className="text-2xl font-serif text-stone-900 leading-snug group-hover:text-stone-600 transition-colors mb-4 pr-10 relative">
                                {post.title}
                                <ArrowUpRight className="absolute top-1 right-0 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                            </h3>
                            <p className="text-stone-500 text-sm font-light leading-relaxed italic line-clamp-3">
                                {post.excerpt}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination Placeholder */}
                <div className="mt-24 flex justify-center border-t border-stone-200 pt-16">
                    <button className="px-12 py-4 rounded-full border border-stone-200 text-stone-900 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-stone-900 hover:text-white transition-all">
                        Discover More Insights
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
