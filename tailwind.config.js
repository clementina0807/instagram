/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary color
        "primary-pink": "#FF8A8A",
        // Opacity color
        "opacity-pink-300": "rgba(255,138,138,0.3)",
        // Bottom color
        "bottom-pink": "#F4A7B9",
        // Title color
        "title-pink": "#DB4D6D",
        // Line color
        "line-green": "#86C166",
        // Facebook blue color
        "fb-blue": "#7DB9DE",
        // Button color
        "button": "#dedede",
        // Background color
        "background": "#ffffff",
        // Sellout color
        "sellout": "#BDC0BA",
        // Cart color
        "cart": "#F9F9E0",
        // Red color
        "red": "#B8001F",
        // Gray color
        "gray": "#BDC0BA",
        // Blue color
        "blue": "#4E4F97"
      },
    },
  },
  plugins: [],
};
