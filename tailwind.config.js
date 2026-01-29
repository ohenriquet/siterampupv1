/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#4A30E4",
                dark: "#1A1A1A",
                accent: "#F4F2FF",
                muted: "#F5F5F5",
            },
            fontFamily: {
                sans: ["Plus Jakarta Sans", "sans-serif"],
                display: ["Montserrat", "sans-serif"],
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 40s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
