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
                }
            },
            fontFamily: {
                serif: ['Space Grotesk', 'sans-serif'],
                sans: ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
