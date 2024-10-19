/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        customGradient:
          "linear-gradient(0deg, #0F0F0F, #0F0F0F)  linear-gradient(221.52deg, rgba(229, 0, 0, 0.5) -208.03%, rgba(229, 0, 0, 0) 41.32%)",
        startFreeTriel:
          "linear-gradient(179.79deg, #0F0F0F 0.18%, rgba(20, 15, 15, 0.974681) 29.35%, rgba(34, 14, 14, 0.909574) 58.53%, rgba(229, 0, 0, 0) 87.7%)",

        // }
        colors: {
          primary: "#00040f",
          secondary: "#00f6ff",
          dimWhite: "rgba(255, 255, 255, 0.7)",
          dimBlue: "rgba(9, 151, 124, 0.1)",
        },
        // fontFamily: {
        //   poppins: ['Poppins', 'sans-serif'],
      },
    },
    // screens: {
    //   xs: "480px",
    //   ss: "620px",
    //   sm: "768px",
    //   md: "1060px",
    //   lg: "1200px",
    //   xl: "1600px",
    // },
  },
  plugins: [],
};
