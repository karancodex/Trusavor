import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const JournalSection: React.FC = () => {
    const articles = [
        {
            category: "Ritual",
            title: "The Molecular Science of Shilajit",
            excerpt: "Understanding fulvic acid and mountain-blood minerals.",
            image: "/assets/wellness_hero.png"
        },
        {
            category: "Aesthetics",
            title: "Achieving the 'Glass Skin' Look",
            excerpt: "Why hydration layering is more effective than exfoliation.",
            image: "/assets/cosmetics_hero.png"
        },
        {
            category: "Mind",
            title: "Circadian Rhythms & Recovery",
            excerpt: "How to align your sleep cycle with solar biology.",
            image: "/assets/wellness_hero.png"
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
                    <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors">
                        Read All <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, i) => (
                        <div key={i} className="group cursor-pointer">
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
                                <h3 className="text-2xl font-serif text-stone-900 group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">{article.title}</h3>
                                <p className="text-stone-600 font-light leading-relaxed">{article.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JournalSection;
