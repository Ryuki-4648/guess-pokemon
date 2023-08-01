/** @type {import("tailwindcss").Config} */
module.exports = {
  mode: "jit",
  darkMode: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e3ddd8",
      },
    },
  },
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  plugins: [],
};
