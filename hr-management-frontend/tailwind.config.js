/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        martel: ["Martel", "serif"],
      },
      colors: {
        palette: {
          1: "#090811",
          2: "#EEECEC",
          3: "#3D8ADB",
          4: "#303D4F",
          5: "#3DB1FF",
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

