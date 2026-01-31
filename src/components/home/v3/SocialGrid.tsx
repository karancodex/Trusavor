import React from 'react';

const SocialGrid: React.FC = () => {
    // Mock social images
    const images = [
        "/assets/cosmetics_hero.png",
        "/assets/wellness_hero.png",
        "/assets/shilajit_hero.png",
        "/assets/cosmetics_hero.png",
        "/assets/wellness_hero.png",
    ];

    return (
        <section className="py-24 bg-[#fafaf9] overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl font-serif text-stone-900 mb-2">@trusavor</h2>
                <p className="text-stone-500 text-sm font-bold uppercase tracking-widest">Join the collective</p>
            </div>

            <div className="w-full overflow-hidden">
                <div className="flex gap-4 min-w-max animate-scroll">
                    {[...images, ...images].map((img, i) => (
                        <div key={i} className="w-[300px] aspect-square relative group overflow-hidden rounded-[20px] cursor-pointer">
                            <img
                                src={img}
                                alt="Social"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-serif italic text-xl">View Post</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default SocialGrid;
