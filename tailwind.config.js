/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#1A4D2E",
                secondary: "#E8DFCA",
                accent: "#E8F3D6",
                brandDark: "#1A4D2E",
                brandLight: "#FBFAF3",
                brandGreen: "#4F6F52",
                wellness: {
                    main: "#1A4D2E",
                    accent: "#A3B18A",
                    light: "#F4F7F5",
                },
                cosmetics: {
                    main: "#4A1D1F",
                    accent: "#D4A373",
                    light: "#FFF5F5",
                    gold: "#C5A059",
                },
                premium: {
                    // Light Luxury Theme Palette
                    light: "var(--color-premium-light)", // Main Background
                    surface: "var(--color-premium-surface)", // Surfaces
                    text: {
                        primary: "var(--color-premium-text-primary)", // Main Text
                        secondary: "var(--color-premium-text-secondary)", // Subtitles
                        muted: "var(--color-premium-text-muted)", // Low priority
                    },
                    gold: {
                        DEFAULT: "var(--color-premium-gold)", // Muted Gold
                        hover: "var(--color-premium-gold-hover)",
                        light: "var(--color-premium-gold-light)", // Gold Wash
                    },
                    accent: "var(--color-premium-accent)", // Warm accent
                    dark: "var(--color-premium-dark)", // Inverted/Contrast
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Lato', 'sans-serif'],
            },
            animation: {
                'scroll-slow': 'scroll 40s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
