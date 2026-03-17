import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JournalSection: React.FC = () => {
    const articles = [
        {
            category: "Ritual",
            slug: "molecular-science-shilajit",
            title: "The Molecular Science of Shilajit",
            excerpt: "Understanding fulvic acid and mountain-blood minerals.",
            image: "/website/shilajit/1.png"
        },
        {
            category: "Aesthetics",
            slug: "art-of-layering-serums",
            title: "Achieving the 'Glass Skin' Look",
            excerpt: "Why hydration layering is more effective than exfoliation.",
            image: "/website/dummy face serum/1.png"
        },
        {
            category: "Mind",
            slug: "circadian-lighting-and-sleep",
            title: "Circadian Rhythms & Recovery",
            excerpt: "How to align your sleep cycle with solar biology.",
            image: "/website/argan oil/2.png"
        }
    ];

    return (
        <section className="py-16 bg-stone-50 border-t border-stone-200">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-stone-400 mb-4 block">Editorial</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900">The <i className="text-stone-400">Journal</i></h2>
                    </div>
                    <Link to="/journal" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 hover:text-[#7FB844] hover:border-[#7FB844] transition-colors">
                        Read All <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, i) => (
                        <Link to={`/journal/${article.slug}`} key={i} className="group cursor-pointer block">
                            <div className="overflow-hidden aspect-[3/2] rounded-[24px] mb-6 relative">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="space-y-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{article.category}</span>
                                <h3 className="text-2xl font-serif text-stone-900 group-hover:text-[#7FB844] transition-colors group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">{article.title}</h3>
                                <p className="text-stone-600 font-light leading-relaxed">{article.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JournalSection;
