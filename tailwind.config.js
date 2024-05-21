/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,jsx,js}',
    './components/**/*.{ts,tsx,jsx,js}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,jsx,js}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #D4145A, #FBB03B)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),nextui()],
}