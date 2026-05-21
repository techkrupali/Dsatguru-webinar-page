/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6B00",
          dark: "#1A1A2E",
          blue: "#0F3460",
          light: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};
