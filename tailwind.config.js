/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        light: "#D6DBDC",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      width: {
        "120": "480px",
        "180": "720px",
        "80": "320px",
      },
      height: {
        "42": "168px",
      }
    },
  },
  plugins: [],
}
