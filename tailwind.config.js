/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "footer-background": "url('./src/assets/images/bg.png')",
      }),
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
      },
      backgroundRepeat: {
        "no-repeat": "no-repeat",
      },

      fontFamily: { Garet: ['Garet-Book", sans-serif;'] },
    },
  },
  plugins: [],
};
