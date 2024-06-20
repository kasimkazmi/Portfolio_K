/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "footer-background": "url('./src/assets/images/bg.png')",
      }),
      transitionProperty: ["responsive", "hover", "focus"],
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
      },
      backgroundRepeat: {
        "no-repeat": "no-repeat",
      },
      colors: {
        "hover-color": "#2D9C95",
        "button-Color": "#5080BC",
      },
      boxShadow: {
        "color-shadow":
          "0 8px 10px rgba(0, 0, 0, 0.1) 0 4px 6px -2px rgba(0, 0, 0, 0.5) ",
        "li-shadow": "5px 1px 0px 1px rgba(45, 156, 149, 1)", // replace with your color and size
      },

      fontFamily: { Garet: ['Garet-Book", sans-serif;'] },

      keyframes: {
        slidein: {
          from: { opacity: 0, transform: "translateX(-100%)" },

          to: { opacity: 1, transform: "translateX(0%)" },
        },
      },
      variants: {
        extend: {
          boxShadow: ["hover"],
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms",
        slidein500: "slidein 1s ease 500ms",
        slidein700: "slidein 1s ease 700ms",
      },
    },
  },

  plugins: [],
};
