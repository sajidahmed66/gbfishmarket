module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
      shizuru: ["Shizuru"],
      redressed: ["Redressed"],
      dancingScript: ["Dancing Script"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
