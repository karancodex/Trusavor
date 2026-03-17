import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Share2, Facebook, Twitter, Instagram } from 'lucide-react';
import { posts } from '../data/blogPosts';

const BlogDetail = () => {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="pt-60 pb-40 text-center">
                <h1 className="text-4xl font-serif mb-8">Journal Article Not Found</h1>
                <Link to="/journal" className="text-[#7FB844] font-bold uppercase tracking-widest border-b border-[#7FB844] pb-1">
                    Back to Journal
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#fafaf9] min-h-screen">
            {/* Hero Image */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={post.image}
                    className="w-full h-full object-cover"
                    alt={post.title}
                />
                <div className="absolute inset-0 bg-stone-900/40" />

                <div className="absolute inset-0 flex flex-col justify-end pb-16">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl"
                        >
                            <span className="inline-block bg-[#7FB844] text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6">
                                {post.category}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 italic leading-[1.1]">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-8 text-white/80 text-xs font-bold uppercase tracking-widest">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-[#7FB844]" />
                                    {post.author}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#7FB844]" />
                                    {post.readTime}
                                </div>
                                <div>{post.date}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Main Content */}
                    <div className="w-full lg:w-2/3">
                        <Link to="/journal" className="inline-flex items-center gap-2 text-stone-400 hover:text-[#7FB844] transition-colors text-[10px] font-black uppercase tracking-widest mb-12 group">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to Journal
                        </Link>

                        <div
                            className="prose prose-stone prose-lg max-w-none text-stone-600 font-light leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p><p>Content for this editorial is being digitized by our archivists. Check back shortly for the full molecular breakdown.</p>` }}
                        />

                        {/* Social Share */}
                        <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="flex items-center gap-6">
                                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Share Ritual</span>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                        <button key={i} className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#7FB844] hover:text-white hover:border-[#7FB844] transition-all">
                                            <Icon className="w-4 h-4" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-900 border-b-2 border-stone-900 pb-1 hover:text-[#7FB844] hover:border-[#7FB844] transition-colors">
                                <Share2 className="w-4 h-4" /> Copy Coordinate
                            </button>
                        </div>
                    </div>

                    {/* Sidebar / More Posts */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-32 space-y-12">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7FB844] mb-8 border-b border-[#7FB844]/20 pb-4">
                                    Related insights
                                </h4>
                                <div className="space-y-8">
                                    {posts.filter(p => p.id !== post.id).slice(0, 3).map((rp, i) => (
                                        <Link to={`/journal/${rp.slug}`} key={rp.id} className="group flex gap-4">
                                            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                                                <img src={rp.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={rp.title} />
                                            </div>
                                            <div>
                                                <span className="text-[9px] font-bold text-[#7FB844] uppercase tracking-widest mb-1 block">{rp.category}</span>
                                                <h5 className="text-sm font-serif text-stone-900 group-hover:text-[#7FB844] transition-colors line-clamp-2 leading-snug">
                                                    {rp.title}
                                                </h5>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-[32px] border border-stone-100 shadow-xl">
                                <h4 className="text-xl font-serif text-stone-900 mb-4 italic">Newsletter</h4>
                                <p className="text-stone-500 text-sm font-light mb-6">Stay updated with our latest molecular research and ritual guides.</p>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-stone-50 border border-stone-100 rounded-full px-6 py-3 text-xs focus:outline-none focus:border-[#7FB844] mb-4"
                                />
                                <button className="w-full bg-stone-900 text-white rounded-full py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#7FB844] transition-all">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
