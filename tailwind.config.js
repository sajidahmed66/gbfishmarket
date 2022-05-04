module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      skModernist: ["Sk-Modernist"],
      skModernistBold: ["Sk-Modernist-bold"],
      skModernistMono: ["Sk-Modernist-mono"],
    },
  },

  plugins: [require("kutty")],
};
