/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        prata: ["Prata", "serif"],
        jekarta: ["Plus Jekarta sans", "sans-serif"],
        cormorant: ["Cormorant Unicase", "sans-serif"],
        garamond: ["Cormorant Garamond", "sans-serif"],
        lora: ["Lora", "serif"],
        merriweather: ["Merriweather", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
