/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#6cc5f1",
        secondary: "#242527",
        accent: "#97d1ab",
      },
      fontFamily: {
        sans: [
          "Open Sans",
          "Helvetica Neue",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        heading: [
          "Open Sans",
          "Helvetica Neue",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
