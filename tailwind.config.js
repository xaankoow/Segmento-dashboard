/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        //  'hero': "url('../public/blueArrow.svg')"
      }),
      boxShadow: {
        "3xl": "0px 4px 15px 0px rgba(0, 0, 0, 0.15)",
        "4xl": "0px 4px 8px rgba(0, 0, 0, 0.14)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      hoverBtnType1: "#7D7D7D",
      lightGray: "#D3D5E2",
      sectionDisable: "#D9D9D9",
      border: "#D9D9D9",
      gray: "#7D7D7D",
      yellow: "#ffce47",
      white: "#FCFCFB",
      orgWhite: "#FFFFFF",
      blue: "#0071ff",
      success: "#10CCAE",
      lightBlue: "#F2F5F7",
      dds: "#0071ff",
      primary: "#0A65CD",
      red: "#F35242",
      lightYellow: "#FFDC5D",
      shortText: "#0A65CD",
      primaryV1: "#083C78", // paragraph
      title: "#002145", // paragraph #001F43
      primaryV2: "#001F43",
      secondary: "#F2F5F7",
      diamond: "#0A65CD",
      gold: "#FFCE47",
      silver: "#7D7D7D",
      bronze: "#BF8970",
      activeButton: "#0B4B94",
      deleteBtn: "#F35242B2",
    },
    fontSize: {
      s: ".625rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      small: ".5rem",
    },
    maxWidth:{
      s:'15rem'
    }
  },
  plugins: [],
}

