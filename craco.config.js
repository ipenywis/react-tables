// craco.config.js
module.exports = {
  babel: {
    plugins: ["babel-plugin-macros"],
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
