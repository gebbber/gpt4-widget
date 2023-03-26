/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        fontFamily: {
            title: ['EB Garamond', 'serif'],
            heading: ['Noto Serif', 'serif'],
            copy: ['Noto Sans', 'sans-serif'],
        },
        extend: { colors: { amber: { 950: 'rgb(60 26 8)' } } },
    },
    plugins: [],
    darkMode: 'class',
};
