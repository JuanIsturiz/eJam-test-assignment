/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#252F3D",
        "extra-light-blue": "#EDF3FD",
        "light-blue": "#2C7EF8",
        "default-gray": "#4D5254",
        "light-gray": "#FAFAFA",
        "discount-gray": "#969696",
        "default-green": "#85BF55",
        "verified-green": "#5BB59A",
        "discount-green": "#59AE43",
      },
    },
  },
  plugins: [],
};
