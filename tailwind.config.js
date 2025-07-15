/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        handwritten: ["Segoe UI", "cursive"],
     
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        red: "#C32126",
        blue: "#0573B6",
        purple: "#5F2A7C",
        yellow: "#FFC502",
        beige: "#9D882F",
        teal: "#0C5752",
        peach: "#FFC4C0",
        btncolor: "#FD4360",
        primary: {
          red: "var(--primary-red)",
          "red-light": "var(--primary-red-light)",
          "red-dark": "var(--primary-red-dark)",
        },
        bg: {
          dark: "var(--bg-dark)",
          "dark-secondary": "var(--bg-dark-secondary)",
          "dark-tertiary": "var(--bg-dark-tertiary)",
        },
        text: {
          white: "var(--text-white)",
          gray: "var(--text-gray)",
        },
        border: {
          gray: "var(--border-gray)",
        },
      },
      spacing: {
        4.5: "1.125rem", // 18px
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        68: "17rem",
        100: "25rem",
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontSize: {
        small: "2rem",
      },
    },
  },
  plugins: [],
};
