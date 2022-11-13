module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      SkModernist: ["Sk-Modernist"],
      SkModernistBold: ["Sk-Modernist-bold"],
      SkModernistMono: ["Sk-Modernist-mono"],
      Caveat: ["Caveat"],
      kawshan: ["kaushanScript-Regular"],
      montserrat:["Montserrat-VariableFont_wght"],
      montserratItalic:["Montserrat-Italic-VariableFont_wght"],
      montserratBold:["Montserrat-Bold"],

    },
  },

  plugins: [require("kutty")],
};
