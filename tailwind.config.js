/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        fontFamily: {
            title: ['EB Garamond', 'serif'],
            heading: ['Noto Serif', 'serif'],
            copy: ['Noto Sans', 'sans-serif'],
        },
        extend: {
            colors: { amber: { 950: 'rgb(60 26 8)' } },

            keyframes: {
                blink: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                },
            },
            animation: {
                blink: 'blink 1s linear infinite',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
