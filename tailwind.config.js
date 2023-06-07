/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      margin: {
        62: "15.5rem",
      },
      backgroundImage: {
        "header-desktop": "url('../assets/images/bg-header-desktop.png')",
        "header-mobile": "url('../assets/images/bg-header-mobile.png')",
      },
      boxShadow: {
        green:
          "0px 10px 20px rgba(137, 229, 199, 0.503305), inset 0px -3px 0px rgba(0, 0, 0, 0.151333)",
        blue: "0px 10px 20px rgba(0, 0, 0, 0.0988035), inset 0px -3px 0px rgba(0, 0, 0, 0.151333)",
      },
    },
    fontFamily: {
      jamjuree: "Bai Jamjuree, sans serif",
    },
    colors: {
      strongCyan: "hsl(171, 66%, 44%)",
      lightBlue: "hsl(233, 100%, 69%)",
      dark: "hsl(210, 10%, 33%)",
      gray: "hsl(201, 11%, 66%)",
      white: "#FFFFFF",
      lightGray: "hsla(201, 11%, 66%,0.1)",
    },
    fontSize: {
      sm: [
        "1.8rem",
        { lineHeight: "3rem", letterSpacing: "-0.05rem", fontWeight: "600" },
      ],
      base: [
        "2rem",
        { lineHeight: "3rem", letterSpacing: "-0.015rem", fontWeight: "400" },
      ],
      lg: [
        "2.4rem",
        { lineHeight: "3rem", letterSpacing: "-0.039rem", fontWeight: "600" },
      ],
      xl: [
        "3.6rem",
        { lineHeight: "4.5rem", letterSpacing: "-0.058rem", fontWeight: "600" },
      ],
      "2xl": [
        "4.6rem",
        { lineHeight: "5.8rem", letterSpacing: "-0.075rem", fontWeight: "600" },
      ],
    },
  },
  plugins: [],
};
