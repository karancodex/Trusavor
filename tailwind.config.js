/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
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
                    light: "#FAFAF9", // Stone-50 (Main Background)
                    surface: "#FFFFFF", // White (Cards/Surfaces)
                    text: {
                        primary: "#1C1917", // Stone-900 (Main Text)
                        secondary: "#57534E", // Stone-600 (Subtitles)
                        muted: "#A8A29E", // Stone-400 (Low priority)
                    },
                    gold: {
                        DEFAULT: "#B08D55", // Muted Gold
                        hover: "#9A7B4F",
                        light: "#F3EFE9", // Light Gold Wash
                    },
                    accent: "#D4A373", // Warm accent
                    dark: "#292524", // Stone-800
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
