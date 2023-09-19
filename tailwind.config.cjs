/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#252F3D",
        "light-blue": "#2C7EF8",
        "light-gray": "#4D5254",
        "default-green": "#85BF55",
      },
    },
  },
  plugins: [],
};
