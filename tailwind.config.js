/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "bg-from": "#1E2024",
                "bg-to": "#23272B",
                "primary-red": "#FF014F",
                "primary-red-700": "#F9004D",
                "primary-gray-300": "#C4CFDE",
                "primary-gray-500": "#7C838E",
                "primary-gray-400": "#878E99",
            },
            boxShadow: {
                "light-gray":
                    "-5px -5px 19px 0px #262A2E, 5px 5px 19px 0px #1C1E22",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-in-out",
            },
        },
    },
    plugins: [],
};
