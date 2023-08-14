const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 1)",
      },
      colors: {
        blue: "#4945FF",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
