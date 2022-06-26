// @type {import("tailwindcss").Config}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cursive": ["Staatliches", "Kalam"],
        "sans": ["Kanit"],
      }
    },
  },
  plugins: [],
}
