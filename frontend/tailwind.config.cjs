/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: [
      "acid",
      "aqua",
      "autumn",
      "black",
      "bumblebee",
      "business",
      "coffee",
      "corporate",
      "cupcake",
      "dark",
      "dracula",
      "emerald",
      "fantasy",
      "forest",
      "garden",
      "halloween",
      "lemonade",
      "light",
      "lofi",
      "luxury",
      "night",
      "pastel",
      "retro",
      "synthwave",
      "valentine",
      "winter",
      "wireframe"
    ]
  }
}
