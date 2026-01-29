import React from 'react';

const BackgroundEffects: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-wellness-main/10 blur-[150px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cosmetics-main/10 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Floating Particles */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${10 + Math.random() * 20}s`
                        }}
                    />
                ))}
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default BackgroundEffects;
