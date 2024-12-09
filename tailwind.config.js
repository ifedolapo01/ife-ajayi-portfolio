/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#6C6354',
        'custom-orange': '#FD481D',
        'custom-blue': '#5765FC',
        'custom-dark': '#262626',
        'custom-yellow': '#FFD200',
        'custom-burntorange': '#CC5500',
      },
    },
  },
  plugins: [],
};

