/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#fff",
        black: "#000",
        transparent: "transparent",
        primary: "#1B4B66",
        "primary-tint": "#639599",
        error: "#B00020",
        highlight: "#FF8C4B",
        accent: "#F4F4F4",
        dark: "#13101E",
        bright: "#FFFFFF",
        grey: "#F1F1F1",
        "light-text": "#B6B6B6",
        "high-emphasis": "#171520",
        "low-emphasis": "#626262",
      },
    },
  },
  plugins: [],
};
