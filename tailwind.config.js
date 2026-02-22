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
                "primary": "#1132d4",
                "background-light": "#f6f6f8",
                "background-dark": "#101322",
                "glass-card": "rgba(40, 43, 57, 0.4)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                "xl": "0.75rem",
                "2xl": "1rem",
                "3xl": "2rem",
            },
        },
    },
    plugins: [],
}
