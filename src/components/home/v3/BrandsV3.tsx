import React from 'react';

const BrandsV3: React.FC = () => {
    // Mock brands
    const brands = ["Vogue", "Allure", "Elle", "Vanity Fair", "Harper's Bazaar"];

    return (
        <section className="py-12 bg-premium-light border-b border-premium-text-muted/20">
            <div className="container mx-auto px-6 overflow-hidden">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-8 md:gap-12 opacity-50 hover:opacity-80 transition-opacity duration-700 select-none">
                    {brands.map((brand, i) => (
                        <span key={i} className="font-serif italic text-3xl md:text-4xl text-premium-text-muted hover:text-premium-text-primary transition-colors cursor-help mix-blend-multiply">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsV3;
